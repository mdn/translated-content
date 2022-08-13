---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | No       |
| 例   | ```json  |

"short_name": "My Extension"

````|

拡張機能の短い名前。与えられた場合、これは [name](/ja/Add-ons/WebExtensions/manifest.json/name) 項目が長過ぎるコンテキストで使われます。短い名前は 12 文字を超えないことが推奨されます。manifest.json に短い名前が入ってない場合、name が代わりに使われて切り捨てられることがあります。

これは[ローカライズ可能なプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。

## 例

```json
"short_name": "My Extension"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.short_name")}}
