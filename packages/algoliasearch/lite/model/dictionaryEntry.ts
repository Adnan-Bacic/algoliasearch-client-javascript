// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { DictionaryEntryState } from './dictionaryEntryState';

/**
 * A dictionary entry.
 */
export type DictionaryEntry = Record<string, any> & {
  /**
   * Unique identifier of the object.
   */
  objectID: string;

  /**
   * Language ISO code supported by the dictionary (e.g., \"en\" for English).
   */
  language: string;

  /**
   * The word of the dictionary entry.
   */
  word?: string;

  /**
   * The words of the dictionary entry.
   */
  words?: string[];

  /**
   * A decomposition of the word of the dictionary entry.
   */
  decomposition?: string[];

  state?: DictionaryEntryState;
};