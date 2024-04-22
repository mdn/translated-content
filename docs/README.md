# Translation guidelines for MDN translated content

This document describes the general guidelines for translating MDN content, which apply to every locale.

For guidelines relating to specific locales, we have locale-specific docs in subdirectories:

- [Russian translation guide / Участие в переводе](ru/translation-guide.md)
- [Simplified Chinese Guide / 简体中文翻译指南](zh-cn/translation-guide.md)
- [Traditional Chinese Guide / 正體中文翻譯指南](zh-tw/translation-guide.md)
- [Spanish guide / Guía en español](es/README.md)
- [Japanese translation guide / 日本語翻訳ガイド](ja/README.md)
- [Korean translation guide / 한국 번역 지침](ko/README.md)

> **Note:** If you want to add a guide to document some specific guidelines for your locale and it does not already appear here, you are welcome to add one, or [talk to the locale teams](https://github.com/mdn/translated-content/blob/main/PEERS_GUIDELINES.md#review-teams) about it.

## Do not copy all front matter properties from English pages

In upstream content, pages will have many front matter properties, including `page-type` and `browser-compat`. However, these properties do not need to be copied to translated pages; Yari merges the front matter of the English and translated versions of a page. Localized documents should only have the following front matter properties:

- `title` - A long title for the page; to localize
- `short-title` - A short title for the page which appears in sidebars; also to localize
- `slug` - needs to match the original page's `slug`
- `l10n.sourceCommit` - The commit hash of the upstream commit the translation is synchronized with

This guideline is enforced by a linter.

## Do not partially translate a document

At the time of writing, there are numerous documents throughout the repository that are partially translated. The documents were created in the wiki era before this project transitioned to GitHub, where anyone could make changes to the pages without review. Partially translated pages are bad for numerous reasons:

- They provide a negative user experience if only part of the page is in their requested locale
- They produce a negative SEO score because of the above reason
- The upstream content may have changed, but contributors will likely continue working on the English content in that file

If you are translating a document, please follow through and translate the entire page. If you need assistance translating a section, please ask a member of your locale for help.

## Do not use machine translation

Using machine translation services can be helpful to discern the meaning of a word you may not know, and machine translations have greatly improved over the years. However, machines are not able to _localize_ content. They cannot discern complete context, and may over-translate or use different words for the same terms in different sentences. Do not use machine translations to localize content; only use them as a reference.

## Localizing code blocks

Many code blocks are present in MDN pages. We encourage the localization of code blocks, as long as you follow the following guidelines:

- Translate comments, strings and output representations
  - Translating variable and function names is not recommended, except in learn/
- Do not translate syntax (`await`, `console`, etc.) which would break the code
- Ensure that the code example is not completely rewritten, unless it is absolutely essential
  - If a code block must be rewritten to meet a locale's requirements, add a comment explaining why

Also, when considering translating examples, bear in mind that some examples will link to a live version or source code on a separate repo. You might also want to consider creating a translated version of the external code examples to link to from your translated page.
