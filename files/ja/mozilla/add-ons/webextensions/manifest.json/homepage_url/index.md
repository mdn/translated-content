---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"homepage_url": "https://example.org/my-addon"

````|

拡張機能のホームページの URL です。

[developer](/ja/Add-ons/WebExtensions/manifest.json/developer) キーが提供されていて、そこに "url" プロパティが含まれている場合、homepage_url キーは上書きされます。

これは[国際化できるプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。

## 例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.homepage_url")}}
