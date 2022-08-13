---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | はい     |
| 例   | ```json  |

"version": "0.1"

````|

ドットで区切られた数字と ASCII 文字でフォーマットされた拡張機能のバージョンです。バージョンのフォーマットの詳細は [Version format](/ja/docs/Toolkit_version_format) ページを見てください。

[Chrome の `version` 定義の構文](https://developer.chrome.com/extensions/manifest/version)は、Firefox のものよりも制限が厳しいことに注意してください。

*   Chrome で有効な `version` の値は、常に Firefox でも有効です。
*   Firefox で有効な `version` の値は Chrome でも有効とは限りません。

AMOキュー内でバージョンを "beta" にマークする特別ルールについては [maintenance policy](/ja/Add-ons/Distribution#Beta_versions) を見てください。

## 例

```json
"version": "0.1"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.version")}}
