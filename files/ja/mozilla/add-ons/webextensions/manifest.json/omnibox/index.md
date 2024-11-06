---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"omnibox": {
  "keyword": "mdn"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`omnibox` を使って拡張機能のための omnibox キーワードを定義します。

ユーザーがブラウザーのアドレスバーにキーワードを入力する時、スペースに続いて、続きの文字が [`omnibox`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API を使って拡張機能に送られます。拡張機能は自身のサジェストを使ってアドレスバーのドロップダウンサジェストのリストを生成できます。

2 つ以上の拡張機能が同じキーワードを定義している場合、最後にインストールされた拡張機能がキーワードを管理します。以前にインストールされたあらゆる拡張機能はもう `omnibox` API を使えません。

## 例

```json
"omnibox": {
  "keyword": "mdn"
}
```

## ブラウザーの互換性

{{Compat}}
