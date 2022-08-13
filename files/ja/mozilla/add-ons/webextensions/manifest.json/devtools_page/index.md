---
title: devtools_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
---
{{AddonSidebar}}

| 型   | `String` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"devtools_page": "devtools/my-page.html"

````|

このキーを使って拡張機能にブラウザー組み込みの開発ツールを拡張することができます。

このキーは HTML ファイルの URL として定義されます。その HTML ファイルは拡張機能に同梱し、URL は拡張機能のルートからの相対パスである必要があります。

詳しくは [開発者ツールの拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)を見てください。

## 例

```json
"devtools_page": "devtools/my-page.html"
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.devtools_page")}}
