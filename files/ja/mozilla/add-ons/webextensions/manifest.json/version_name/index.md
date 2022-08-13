---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"version_name": "0.1 beta"

```|

アップデート目的で使われる [version](/ja/Add-ons/WebExtensions/manifest.json/version) 項目に加えて、[version_name](https://developer.chrome.com/extensions/manifest/version) はバージョン説明の文字列をセットできて、存在する場合は表示目的に使われます。

**version_name** が存在しない場合、**version** 項目が同様な表示目的で使われます。

## ブラウザ実装状況

{{Compat("webextensions.manifest.version_name")}}
```
