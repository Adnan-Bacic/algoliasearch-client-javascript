// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { SearchForFacetsOptions } from './searchForFacetsOptions';
import type { SearchForHitsOptions } from './searchForHitsOptions';
import type { SearchParamsObject } from './searchParamsObject';

/**
 * Properties for the `post` method.
 */
export type PostProps = {
  /**
   * The path of the API endpoint to target, anything after the /1 needs to be specified.
   */
  path: string;
  /**
   * Query parameters to be applied to the current query.
   */
  parameters?: Record<string, any>;
  /**
   * The parameters to send with the custom request.
   */
  body?: Record<string, any>;
};

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchParams = {
  params?: SearchParamsObject;
};

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchForFacets = LegacySearchParams & SearchForFacetsOptions;

/**
 * In v4, the search parameters are wrapped in a `params` parameter.
 *
 * @deprecated The `search` method now accepts flat `searchParams` at the root of the method.
 */
type LegacySearchForHits = LegacySearchParams & SearchForHitsOptions;

type LegacySearchQuery = LegacySearchForFacets | LegacySearchForHits;

/**
 * Search method signature compatible with the `algoliasearch` v4 package. When using this signature, extra computation will be required to make it match the new signature.
 *
 * @deprecated This signature will be removed from the next major version, we recommend using the `SearchMethodParams` type for performances and future proof reasons.
 */
export type LegacySearchMethodProps = LegacySearchQuery[];