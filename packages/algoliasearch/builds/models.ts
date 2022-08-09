// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { ClientOptions } from '@algolia/client-common';
import {
  ErrorBase,
  PutProps,
  PostProps,
  DelProps,
  GetProps,
} from '@algolia/client-search/model';

export * from '@algolia/client-search/model';
export * from '@algolia/client-personalization/model';
export * from '@algolia/client-analytics/model';
export * from '@algolia/client-abtesting/model';

export { SearchClient } from '@algolia/client-search';
export { PersonalizationClient } from '@algolia/client-personalization';
export { AnalyticsClient } from '@algolia/client-analytics';
export { AbtestingClient } from '@algolia/client-abtesting';

export { ErrorBase, PutProps, PostProps, DelProps, GetProps };

/**
 * Options forwarded to the client initialized via the `init` method.
 */
export type InitClientOptions = Partial<{
  /**
   * App to target with the initialized client, defaults to the `algoliasearch` appId.
   */
  appId: string;
  /**
   * API key of the targeted app ID, defaults to the `algoliasearch` apiKey.
   */
  apiKey: string;
  options: ClientOptions;
}>;

export type InitClientRegion<TRegion> = Partial<{
  /**
   * Available regions of the initialized client.
   */
  region: TRegion;
}>;