---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/name
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | はい     |
| 例   | ```json  |

"name": "My Extension"

````|

拡張機能の名前です。これはブラウザーのユーザーインターフェースや addons.mozilla.org のようなサイトで拡張機能を識別するために使用されます。

名前がUIに表示されるよう長すぎないようにするのは良い習慣です。Google Chrome と Microsoft Edge は名前を45文字に制限しています。

これは[国際化できるプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。

## 例

```json
"name": "My Extension"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.name")}}
