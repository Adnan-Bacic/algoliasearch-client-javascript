// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

/**
 * OK.
 */
export type SearchUserIdsParams = {
  /**
   * Query to search. The search is a prefix search with [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/) enabled. An empty query will retrieve all users.
   */
  query: string;

  /**
   * Cluster name.
   */
  clusterName?: string;

  /**
   * Page to retrieve (the first page is `0`, not `1`).
   */
  page?: number;

  /**
   * Number of hits per page.
   */
  hitsPerPage?: number;
};