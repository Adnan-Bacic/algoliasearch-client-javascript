// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

export type BaseIndexSettings = {
  /**
   * Creates [replicas](https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/), which are copies of a primary index with the same records but different settings.
   */
  replicas?: string[];

  /**
   * Maximum number of hits accessible through pagination.
   */
  paginationLimitedTo?: number;

  /**
   * Attributes that can\'t be retrieved at query time.
   */
  unretrievableAttributes?: string[];

  /**
   * Words for which you want to turn off [typo tolerance](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/typo-tolerance/).
   */
  disableTypoToleranceOnWords?: string[];

  /**
   * Attributes in your index to which [Japanese transliteration](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/language-specific-configurations/#japanese-transliteration-and-type-ahead) applies. This will ensure that words indexed in Katakana or Kanji can also be searched in Hiragana.
   */
  attributesToTransliterate?: string[];

  /**
   * Attributes on which to split [camel case](https://wikipedia.org/wiki/Camel_case) words.
   */
  camelCaseAttributes?: string[];

  /**
   * Attributes in your index to which [word segmentation](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/how-to/customize-segmentation/) (decompounding) applies.
   */
  decompoundedAttributes?: Record<string, any>;

  /**
   * Set the languages of your index, for language-specific processing steps such as [tokenization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/tokenization/) and [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/).
   */
  indexLanguages?: string[];

  /**
   * Attributes for which you want to turn off [prefix matching](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/override-search-engine-defaults/#adjusting-prefix-search).
   */
  disablePrefixOnAttributes?: string[];

  /**
   * Incidates whether the engine compresses arrays with exclusively non-negative integers. When enabled, the compressed arrays may be reordered.
   */
  allowCompressionOfIntegerArray?: boolean;

  /**
   * Numeric attributes that can be used as [numerical filters](https://www.algolia.com/doc/guides/managing-results/rules/detecting-intent/how-to/applying-a-custom-filter-for-a-specific-query/#numerical-filters).
   */
  numericAttributesForFiltering?: string[];

  /**
   * Controls which separators are added to an Algolia index as part of [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/#what-does-normalization-mean). Separators are all non-letter characters except spaces and currency characters, such as $€£¥.
   */
  separatorsToIndex?: string;

  /**
   * [Attributes used for searching](https://www.algolia.com/doc/guides/managing-results/must-do/searchable-attributes/), including determining [if matches at the beginning of a word are important (ordered) or not (unordered)](https://www.algolia.com/doc/guides/managing-results/must-do/searchable-attributes/how-to/configuring-searchable-attributes-the-right-way/#understanding-word-position).
   */
  searchableAttributes?: string[];

  /**
   * Lets you store custom data in your indices.
   */
  userData?: any | null;

  /**
   * A list of characters and their normalized replacements to override Algolia\'s default [normalization](https://www.algolia.com/doc/guides/managing-results/optimize-search-results/handling-natural-languages-nlp/in-depth/normalization/).
   */
  customNormalization?: Record<string, Record<string, string>>;
};
