---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
---
{{AddonSidebar}}

| 型   | `Object` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"omnibox": { "keyword": "mdn" }

````|

`omnibox` を使って拡張機能のための omnibox キーワードを定義します。

ユーザーがブラウザーのアドレスバーにキーワードを入力する時、スペースに続いて、続きの文字が [`omnibox`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API を使って拡張機能に送られます。拡張機能は自身のサジェストを使ってアドレスバーのドロップダウンサジェストのリストを生成できます。

2つ以上の拡張機能が同じキーワードを定義している場合、最後にインストールされた拡張機能がキーワードを管理します。以前にインストールされたあらゆる拡張機能はもう `omnibox` API を使えません。

## 例

```json
"omnibox": {
  "keyword": "mdn"
}
````

## ブラウザ実装状況

{{Compat("webextensions.manifest.omnibox")}}
