// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { QuerySuggestionsConfiguration } from './querySuggestionsConfiguration';

/**
 * Properties for the `del` method.
 */
export type DelProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
};

/**
 * Properties for the `deleteConfig` method.
 */
export type DeleteConfigProps = {
  /**
   * Query Suggestions index name.
   */
  indexName: string;
};

/**
 * Properties for the `get` method.
 */
export type GetProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
};

/**
 * Properties for the `getConfig` method.
 */
export type GetConfigProps = {
  /**
   * Query Suggestions index name.
   */
  indexName: string;
};

/**
 * Properties for the `getConfigStatus` method.
 */
export type GetConfigStatusProps = {
  /**
   * Query Suggestions index name.
   */
  indexName: string;
};

/**
 * Properties for the `getLogFile` method.
 */
export type GetLogFileProps = {
  /**
   * Query Suggestions index name.
   */
  indexName: string;
};

/**
 * Properties for the `post` method.
 */
export type PostProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, any>;
};

/**
 * Properties for the `put` method.
 */
export type PutProps = {
  /**
   * Path of the endpoint, anything after \"/1\" must be specified.
   */
  path: string;
  /**
   * Query parameters to apply to the current query.
   */
  parameters?: Record<string, any>;
  /**
   * Parameters to send with the custom request.
   */
  body?: Record<string, any>;
};

/**
 * Properties for the `updateConfig` method.
 */
export type UpdateConfigProps = {
  /**
   * Query Suggestions index name.
   */
  indexName: string;
  querySuggestionsConfiguration: QuerySuggestionsConfiguration;
};