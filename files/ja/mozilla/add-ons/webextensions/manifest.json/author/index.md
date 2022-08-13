---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/author
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"author": "Walt Whitman"

````|

拡張機能の作者で、ブラウザーの UI で表示されることを目的とするものです。[developer](/ja/Add-ons/WebExtensions/manifest.json/developer) キーが与えられてそこに "name" プロパティが含まれる場合、それは author キーを上書きします。複数の作者を指定する方法はありません。

これは[ローカライズ可能なプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。

## 例

```json
"author": "Walt Whitman"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.author")}}
