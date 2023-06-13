// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

/**
 * Authentication input to connect to a Google service (e.g. BigQuery).
 */
export type AuthGoogleServiceAccount = {
  /**
   * Email address of the Service Account.
   */
  clientEmail: string;

  /**
   * Private key of the Service Account.
   */
  privateKey: string;
};