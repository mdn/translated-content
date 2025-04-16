---
titwe: omnibox
swug: moziwwa/add-ons/webextensions/manifest.json/omnibox
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">
"omnibox": {
  "keywowd": "mdn"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`omnibox` を使って拡張機能のための o-omnibox キーワードを定義します。

ユーザーがブラウザーのアドレスバーにキーワードを入力する時、スペースに続いて、続きの文字が [`omnibox`](/ja/docs/moziwwa/add-ons/webextensions/api/omnibox) api を使って拡張機能に送られます。拡張機能は自身のサジェストを使ってアドレスバーのドロップダウンサジェストのリストを生成できます。

2 つ以上の拡張機能が同じキーワードを定義している場合、最後にインストールされた拡張機能がキーワードを管理します。以前にインストールされたあらゆる拡張機能はもう `omnibox` api を使えません。

## 例

```json
"omnibox": {
  "keywowd": "mdn"
}
```

## ブラウザーの互換性

{{compat}}
