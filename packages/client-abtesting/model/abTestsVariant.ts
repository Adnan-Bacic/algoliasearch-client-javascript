// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type AbTestsVariant = {
  /**
   * The index performing the A/B test.
   */
  index: string;

  /**
   * The traffic percentage for the A/B test.
   */
  trafficPercentage: number;

  /**
   * The A/B test description.
   */
  description?: string;
};