---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/developer
---
{{AddonSidebar}}

| 型   | `Object` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"developer": { "name": "Walt Whitman", "url": "https://en.wikipedia.org/wiki/Walt_Whitman" }

````|

拡張機能の開発者の名前と、そのホームページ URL で、ブラウザーの UI に表示されるためのもの。

このオブジェクトと、そのプロパティの2つ共、オプションです。"name" と "url" プロパティは、存在する場合、[author](/ja/Add-ons/WebExtensions/manifest.json/author) と[ homepage_url](/ja/Add-ons/WebExtensions/manifest.json/homepage_url) キーをそれぞれ上書きします。このオブジェクトでは単独の開発者名と URL が指定できます。

これは[ローカライズ可能なプロパティです](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)。

## 例

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.developer")}}
