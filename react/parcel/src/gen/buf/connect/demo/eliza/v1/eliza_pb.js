// Copyright 2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v0.2.0
// @generated from file buf/connect/demo/eliza/v1/eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * SayRequest describes the sentence said to the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.SayRequest
 */
export const SayRequest = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.SayRequest",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * SayResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.SayResponse
 */
export const SayResponse = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.SayResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConverseRequest describes the sentence said to the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.ConverseRequest
 */
export const ConverseRequest = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.ConverseRequest",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConverseResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.ConverseResponse
 */
export const ConverseResponse = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.ConverseResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * IntroduceRequest describes a request for details from the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.IntroduceRequest
 */
export const IntroduceRequest = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.IntroduceRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * IntroduceResponse describes the sentence responded by the ELIZA program.
 *
 * @generated from message buf.connect.demo.eliza.v1.IntroduceResponse
 */
export const IntroduceResponse = proto3.makeMessageType(
  "buf.connect.demo.eliza.v1.IntroduceResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

