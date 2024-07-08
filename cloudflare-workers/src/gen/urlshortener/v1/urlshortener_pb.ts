// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "target=ts"
// @generated from file urlshortener/v1/urlshortener.proto (package urlshortener.v1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file urlshortener/v1/urlshortener.proto.
 */
export const file_urlshortener_v1_urlshortener: GenDescFile = /*@__PURE__*/
  fileDesc("CiJ1cmxzaG9ydGVuZXIvdjEvdXJsc2hvcnRlbmVyLnByb3RvEg91cmxzaG9ydGVuZXIudjEiHQoOU2hvcnRlblJlcXVlc3QSCwoDdXJsGAEgASgJIh4KD1Nob3J0ZW5SZXNwb25zZRILCgN1cmwYASABKAkiHAoNRXhwYW5kUmVxdWVzdBILCgN1cmwYASABKAkiHQoORXhwYW5kUmVzcG9uc2USCwoDdXJsGAEgASgJMq4BChNVcmxTaG9ydGVuZXJTZXJ2aWNlEkwKB1Nob3J0ZW4SHy51cmxzaG9ydGVuZXIudjEuU2hvcnRlblJlcXVlc3QaIC51cmxzaG9ydGVuZXIudjEuU2hvcnRlblJlc3BvbnNlEkkKBkV4cGFuZBIeLnVybHNob3J0ZW5lci52MS5FeHBhbmRSZXF1ZXN0Gh8udXJsc2hvcnRlbmVyLnYxLkV4cGFuZFJlc3BvbnNlYgZwcm90bzM");

/**
 * The request message containing the URL to be shortened.
 *
 * @generated from message urlshortener.v1.ShortenRequest
 */
export type ShortenRequest = Message<"urlshortener.v1.ShortenRequest"> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;
};

/**
 * Describes the message urlshortener.v1.ShortenRequest.
 * Use `create(ShortenRequestSchema)` to create a new message.
 */
export const ShortenRequestSchema: GenDescMessage<ShortenRequest> = /*@__PURE__*/
  messageDesc(file_urlshortener_v1_urlshortener, 0);

/**
 * The response message containing the shortened URL.
 *
 * @generated from message urlshortener.v1.ShortenResponse
 */
export type ShortenResponse = Message<"urlshortener.v1.ShortenResponse"> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;
};

/**
 * Describes the message urlshortener.v1.ShortenResponse.
 * Use `create(ShortenResponseSchema)` to create a new message.
 */
export const ShortenResponseSchema: GenDescMessage<ShortenResponse> = /*@__PURE__*/
  messageDesc(file_urlshortener_v1_urlshortener, 1);

/**
 * The request message containing the short URL to be expanded.
 *
 * @generated from message urlshortener.v1.ExpandRequest
 */
export type ExpandRequest = Message<"urlshortener.v1.ExpandRequest"> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;
};

/**
 * Describes the message urlshortener.v1.ExpandRequest.
 * Use `create(ExpandRequestSchema)` to create a new message.
 */
export const ExpandRequestSchema: GenDescMessage<ExpandRequest> = /*@__PURE__*/
  messageDesc(file_urlshortener_v1_urlshortener, 2);

/**
 * The response message containing the expanded URL.
 *
 * @generated from message urlshortener.v1.ExpandResponse
 */
export type ExpandResponse = Message<"urlshortener.v1.ExpandResponse"> & {
  /**
   * @generated from field: string url = 1;
   */
  url: string;
};

/**
 * Describes the message urlshortener.v1.ExpandResponse.
 * Use `create(ExpandResponseSchema)` to create a new message.
 */
export const ExpandResponseSchema: GenDescMessage<ExpandResponse> = /*@__PURE__*/
  messageDesc(file_urlshortener_v1_urlshortener, 3);

/**
 * The UrlShortener service definition.
 *
 * @generated from service urlshortener.v1.UrlShortenerService
 */
export const UrlShortenerService: GenDescService<{
  /**
   * Shortens the given URL.
   *
   * @generated from rpc urlshortener.v1.UrlShortenerService.Shorten
   */
  shorten: {
    methodKind: "unary";
    input: typeof ShortenRequestSchema;
    output: typeof ShortenResponseSchema;
  },
  /**
   * Expands the given short url to the original URL.
   *
   * @generated from rpc urlshortener.v1.UrlShortenerService.Expand
   */
  expand: {
    methodKind: "unary";
    input: typeof ExpandRequestSchema;
    output: typeof ExpandResponseSchema;
  },
}
> = /*@__PURE__*/
  serviceDesc(file_urlshortener_v1_urlshortener, 0);

