---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
---
{{AddonSidebar}}

| 型   | `String`                                                                       |
| ---- | ------------------------------------------------------------------------------ |
| 必須 | 条件次第: \_locales サブディレクトリがある場合は必要で、そうでない場合は不要。 |
| 例   | ```json                                                                        |

"default_locale": "en"

````|

このキーは拡張機能が \_locales ディレクトリを含んでいる場合は必要で、そうでない場合は不要です。これは \_locales のサブディレクトリを識別し、このサブディレクトリは拡張機能の既定の文字列を探すために使用されます。

[国際化](/ja/Add-ons/WebExtensions/Internationalization)を見てください。

## 例

```json
"default_locale": "en"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.default_locale")}}
