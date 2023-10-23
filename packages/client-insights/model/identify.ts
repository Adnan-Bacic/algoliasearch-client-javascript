// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { IdentifyEvent } from './identifyEvent';

/**
 * The identify event is a signal for Insights to process all events coming from \'userToken\' as if they were from \'authenticatedUserToken\'.
 */
export type Identify = {
  eventType: IdentifyEvent;

  /**
   * Anonymous or pseudonymous user identifier.   > **Note**: Never include personally identifiable information in user tokens.
   */
  userToken: string;

  /**
   * User token for authenticated users.
   */
  authenticatedUserToken: string;
};
