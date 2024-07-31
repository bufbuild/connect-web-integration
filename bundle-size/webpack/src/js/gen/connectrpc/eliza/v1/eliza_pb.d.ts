// Copyright 2022-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.0.0
// @generated from file connectrpc/eliza/v1/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file connectrpc/eliza/v1/eliza.proto.
 */
export declare const file_connectrpc_eliza_v1_eliza: GenFile;

/**
 * SayRequest is a single-sentence request.
 *
 * @generated from message connectrpc.eliza.v1.SayRequest
 */
export declare type SayRequest = Message<"connectrpc.eliza.v1.SayRequest"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  /**
   * @generated from field: connectrpc.eliza.v1.SayVolume volume = 2;
   */
  volume: SayVolume;
};

/**
 * Describes the message connectrpc.eliza.v1.SayRequest.
 * Use `create(SayRequestSchema)` to create a new message.
 */
export declare const SayRequestSchema: GenMessage<SayRequest>;

/**
 * SayResponse is a single-sentence response.
 *
 * @generated from message connectrpc.eliza.v1.SayResponse
 */
export declare type SayResponse = Message<"connectrpc.eliza.v1.SayResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.SayResponse.
 * Use `create(SayResponseSchema)` to create a new message.
 */
export declare const SayResponseSchema: GenMessage<SayResponse>;

/**
 * ConverseRequest is a single sentence request sent as part of a
 * back-and-forth conversation.
 *
 * @generated from message connectrpc.eliza.v1.ConverseRequest
 */
export declare type ConverseRequest = Message<"connectrpc.eliza.v1.ConverseRequest"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;

  /**
   * @generated from field: connectrpc.eliza.v1.ConverseVolume volume = 2;
   */
  volume: ConverseVolume;
};

/**
 * Describes the message connectrpc.eliza.v1.ConverseRequest.
 * Use `create(ConverseRequestSchema)` to create a new message.
 */
export declare const ConverseRequestSchema: GenMessage<ConverseRequest>;

/**
 * ConverseResponse is a single sentence response sent in answer to a
 * ConverseRequest.
 *
 * @generated from message connectrpc.eliza.v1.ConverseResponse
 */
export declare type ConverseResponse = Message<"connectrpc.eliza.v1.ConverseResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.ConverseResponse.
 * Use `create(ConverseResponseSchema)` to create a new message.
 */
export declare const ConverseResponseSchema: GenMessage<ConverseResponse>;

/**
 * IntroduceRequest asks Eliza to introduce itself to the named user.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceRequest
 */
export declare type IntroduceRequest = Message<"connectrpc.eliza.v1.IntroduceRequest"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message connectrpc.eliza.v1.IntroduceRequest.
 * Use `create(IntroduceRequestSchema)` to create a new message.
 */
export declare const IntroduceRequestSchema: GenMessage<IntroduceRequest>;

/**
 * IntroduceResponse is one sentence of Eliza's introductory monologue.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceResponse
 */
export declare type IntroduceResponse = Message<"connectrpc.eliza.v1.IntroduceResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.IntroduceResponse.
 * Use `create(IntroduceResponseSchema)` to create a new message.
 */
export declare const IntroduceResponseSchema: GenMessage<IntroduceResponse>;

/**
 * @generated from enum connectrpc.eliza.v1.SayVolume
 */
export enum SayVolume {
  /**
   * @generated from enum value: SAY_VOLUME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: SAY_VOLUME_LOUD = 1;
   */
  LOUD = 1,

  /**
   * @generated from enum value: SAY_VOLUME_SOFT = 2;
   */
  SOFT = 2,
}

/**
 * Describes the enum connectrpc.eliza.v1.SayVolume.
 */
export declare const SayVolumeSchema: GenEnum<SayVolume>;

/**
 * @generated from enum connectrpc.eliza.v1.ConverseVolume
 */
export enum ConverseVolume {
  /**
   * @generated from enum value: CONVERSE_VOLUME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CONVERSE_VOLUME_LOUD = 1;
   */
  LOUD = 1,

  /**
   * @generated from enum value: CONVERSE_VOLUME_SOFT = 2;
   */
  SOFT = 2,
}

/**
 * Describes the enum connectrpc.eliza.v1.ConverseVolume.
 */
export declare const ConverseVolumeSchema: GenEnum<ConverseVolume>;

/**
 * ElizaService provides a way to talk to Eliza, a port of the DOCTOR script
 * for Joseph Weizenbaum's original ELIZA program. Created in the mid-1960s at
 * the MIT Artificial Intelligence Laboratory, ELIZA demonstrates the
 * superficiality of human-computer communication. DOCTOR simulates a
 * psychotherapist, and is commonly found as an Easter egg in emacs
 * distributions.
 *
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export declare const ElizaService: GenService<{
  /**
   * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
   */
  say: {
    methodKind: "unary";
    input: typeof SayRequestSchema;
    output: typeof SayResponseSchema;
  },
  /**
   * Converse is a bidirectional RPC. The caller may exchange multiple
   * back-and-forth messages with Eliza over a long-lived connection. Eliza
   * responds to each ConverseRequest with a ConverseResponse.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Converse
   */
  converse: {
    methodKind: "bidi_streaming";
    input: typeof ConverseRequestSchema;
    output: typeof ConverseResponseSchema;
  },
  /**
   * Introduce is a server streaming RPC. Given the caller's name, Eliza
   * returns a stream of sentences to introduce itself.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Introduce
   */
  introduce: {
    methodKind: "server_streaming";
    input: typeof IntroduceRequestSchema;
    output: typeof IntroduceResponseSchema;
  },
}>;

