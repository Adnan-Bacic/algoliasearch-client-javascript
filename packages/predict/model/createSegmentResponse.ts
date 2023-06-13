// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type CreateSegmentResponse = {
  /**
   * The ID of the segment.
   */
  segmentID: string;

  /**
   * The approximate number of users that matched the segment conditions when it was created, last updated, or when model inference last ran.
   */
  size?: number;

  /**
   * The date and time at which the segment was updated (RFC3339).
   */
  updatedAt: string;
};