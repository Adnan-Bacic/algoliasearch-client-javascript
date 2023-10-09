// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

/**
 * Recommend rules search parameters.
 */
export type SearchRecommendRulesParams = {
  /**
   * Full-text query.
   */
  query?: string;

  /**
   * Restricts responses to the specified [contextual rule](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#creating-contextual-rules).
   */
  context?: string;

  /**
   * Requested page (the first page is page 0).
   */
  page?: number;

  /**
   * Maximum number of hits per page.
   */
  hitsPerPage?: number;

  /**
   * Restricts responses to enabled rules. When absent (default), _all_ rules are retrieved.
   */
  enabled?: boolean | null;

  /**
   * Request options to send with the API call.
   */
  _requestOptions?: Array<Record<string, any>>;
};