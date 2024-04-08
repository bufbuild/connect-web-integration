#!/usr/bin/env node

import {readdirSync, existsSync, readFileSync} from "node:fs";
import path from "node:path";
import assert from "node:assert";
import process from "node:process";
import { spawnSync } from "node:child_process";


const knownDependencies = [
    // github.com/connectrpc/connect-es
    "@connectrpc/connect",
    "@connectrpc/connect-web",
    "@connectrpc/connect-node",
    "@connectrpc/connect-next",
    "@connectrpc/connect-fastify",
    "@connectrpc/connect-express",
    "@connectrpc/protoc-gen-connect-es",
    // github.com/connectrpc/connect-query-es
    "@connectrpc/connect-query",
    // github.com/connectrpc/connect-playwright-es
    "@connectrpc/connect-playwright",
    // github.com/bufbuild
    "@bufbuild/protobuf",
    "@bufbuild/protoc-gen-es",
    "@bufbuild/buf",
];

function main() {
    const command = process.argv[2];
    const onlyPackages = process.argv.splice(3);
    let packages = listPackages(process.cwd());
    if (onlyPackages.length > 0) {
        packages = packages.filter(p => onlyPackages.includes(p.name));
    }
    switch (command) {
        case "list":
            for (const pkg of packages) {
              console.log(pkg.toString());
            }
            break;
        case "update":
            for (const pkg of packages) {
                pkg.update();
            }
            break;
        case "forceupdateall":
            for (const pkg of packages) {
                pkg.forceUpdate();
            }
            break;
        case "forceupdateknown":
            for (const pkg of packages) {
                pkg.forceUpdate(knownDependencies);
            }
            break;
        case "test":
            for (const pkg of packages) {
                pkg.install();
                pkg.runScript("generate");
                pkg.runScript("build");
                pkg.runScript("test");
            }
            break;
        case "ci":
            for (const pkg of packages) {
                pkg.install();
                pkg.runScript("ci");
            }
            break;
        default:
            console.error("Usage: (list | test | update | forceupdateknown | forceupdateall) <packages>...");
            console.error("'list' lists all packages in the repository.");
            console.error("'test' installs dependencies, then runs the 'generate', 'build', and 'test' scripts.");
            console.error("'update' updates all deps to the latest version allowed by the dependency constraints.");
            console.error("'forceupdateknown' updates all known deps to the latest version, regardless of constraints.");
            console.error("'forceupdateall' updates all deps to the latest version, regardless of constraints.");
            console.error("If no packages are given, the command runs for all packages.");
            process.exit(1);
    }
}


/**
 * @param {string} baseDir
 * @param {number} depth
 * @return {Array<PackageEnt>}
 */
function listPackages(baseDir, depth = 2) {
    if (depth-- < 1) {
        return [];
    }
    const packages = [];
    for (const ent of readdirSync(baseDir, {withFileTypes: true})) {
        if (!ent.isDirectory()) {
            continue;
        }
        if (ent.name === "node_modules") {
            continue;
        }
        const entDir = path.join(baseDir, ent.name);
        const pkg = tryGetPackage(entDir);
        if (pkg) {
            packages.push(pkg);
        } else {
            packages.push(...listPackages(entDir, depth));
        }
    }
    return packages;
}


/**
 * @param {string} dir
 * @return {PackageEnt|null}
 */
function tryGetPackage(dir) {
    const pkgPath = path.join(dir, "package.json");
    if (!existsSync(pkgPath)) {
        return null;
    }
    return new PackageEnt(pkgPath);
}


class PackageEnt {

    /**
     * @param {string} pkgPath - The path to the package.json file for this package
     * @param {boolean} [isNpmWorkspace = false] - Whether or not this package is an NPM workspace
     */
    constructor(pkgPath, isNpmWorkspace = false) {
        const dir = path.dirname(pkgPath);
        const pkgJson = JSON.parse(readFileSync(pkgPath, "utf-8"));
        assert(typeof pkgJson === "object" && pkgJson !== null);
        assert(typeof pkgJson.name === "string");
        let packageManager = undefined;
        if (existsSync(path.join(dir, "pnpm-lock.yaml"))) {
            packageManager = "pnpm";
        } else if (existsSync(path.join(dir, "package-lock.json")) || isNpmWorkspace) {
            packageManager = "npm";
        } else if (existsSync(path.join(dir, "yarn.lock"))) {
            packageManager = "yarn";
        }
        assert(typeof packageManager === "string");
        this.path = dir;
        this.name = pkgJson.name;
        this.packageJson = pkgJson;
        this.packageManager = packageManager;
        this.workspaces = [];
        // If this is a package with workspaces, create a PackageEnt for each
        // and store it as part of the main package
        if (packageManager === "npm" && pkgJson.workspaces) {
            this.workspaces = pkgJson.workspaces.map((ws) => {
                const pkgPath = path.join(dir, ws, "package.json");
                return new PackageEnt(pkgPath, true);
            });
        }
    }

    /**
     * @param {string} command
     */
    run(command) {
        const opt = {cwd: this.path, stdio: ["pipe", "inherit", "inherit"], shell: true};
        console.log(`manage ${this.name}$ ${command}`);
        const r = spawnSync(command, opt);
        if (r.error) {
            throw error;
        }
        if (r.status !== 0) {
            process.exit(r.status);
        }
    }

    /**
     * @param {string} name
     */
    runScript(name) {
        if ("scripts" in this.packageJson && name in this.packageJson.scripts) {
            switch (this.packageManager) {
                case "yarn":
                    this.run(`yarn run ${name}`);
                    break;
                case "npm":
                    this.run(`npm run ${name}`);
                    break;
                case "pnpm":
                    this.run(`pnpm run ${name}`);
                    break;
                default:
                    throw `unknown package manager ${this.packageManager}`;
            }
        }
    }

    toString() {
        const ws = this.workspaces.length > 0 ? `, ${this.workspaces.length} workspaces` : "";
        return `${this.name} (${this.packageManager}${ws}) at ${this.path}`;
    }

    install() {
        switch (this.packageManager) {
            case "yarn":
                this.run(`yarn install`);
                break;
            case "npm":
                this.run(`npm ci`);
                break;
            case "pnpm":
                this.run(`pnpm install`);
                break;
            default:
                throw `unknown package manager ${this.packageManager}`;
        }
    }

    update() {
        switch (this.packageManager) {
            case "yarn":
                this.run(`yarn up`);
                break;
            case "npm":
                this.run(`npm update`);
                break;
            case "pnpm":
                this.run(`pnpm update`);
                break;
            default:
                throw `unknown package manager ${this.packageManager}`;
        }
    }

    /**
     * @param {Array<string>} [packageNames] - Specific package names to forcibly update.
     * If this list is empty, all dependencies will be updated.
     */
    forceUpdate(packageNames = []) {
        let directDeps = Object.keys(this.packageJson.dependencies ?? {});
        let devDeps = Object.keys(this.packageJson.devDependencies ?? {});
        if (packageNames.length > 0) {
            directDeps = directDeps.filter(name => packageNames.includes(name));
            devDeps = devDeps.filter(name => packageNames.includes(name));
        }
        if ((directDeps.length + devDeps.length) > 0) {
            const deps = [...directDeps, ...devDeps].join(" ");
            switch (this.packageManager) {
                case "yarn":
                    this.run(`yarn remove ${deps}`);
                    break;
                case "pnpm":
                    this.run(`pnpm remove ${deps}`);
                    break;
                case "npm":
                    this.run(`npm remove ${deps}`);
                    break;
                default:
                    throw `unknown package manager ${this.packageManager}`;
            }
        }
        if (directDeps.length > 0) {
            const deps = directDeps.join(" ");
            switch (this.packageManager) {
                case "npm":
                    this.run(`npm install ${deps}`);
                    break;
                case "yarn":
                    this.run(`yarn add ${deps}`);
                    break;
                case "pnpm":
                    this.run(`pnpm install ${deps}`);
                    break;
                default:
                    throw `unknown package manager ${this.packageManager}`;
            }
        }
        if (devDeps.length > 0) {
            const deps = devDeps.join(" ");
            switch (this.packageManager) {
                case "npm":
                    this.run(`npm install --save-dev ${deps}`);
                    break;
                case "yarn":
                    this.run(`yarn add --dev ${deps}`);
                    break;
                case "pnpm":
                    this.run(`pnpm add --save-dev ${deps}`);
                    break;
                default:
                    throw `unknown package manager ${this.packageManager}`;
            }
        }

        // Loop through any workspaces and call their forceupdate
        // Note that forceUpdate removes deps first and then re-installs so packages
        // get the latest version. However, this might have issues updating all
        // versions to latest in some situations due to the vagaries of how NPM handles 
        // workspaces.
        for (const ws of this.workspaces) {
            ws.forceUpdate(knownOnly);
        }
    }
}

main();
