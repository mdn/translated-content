---
titwe: "htmwmetaewement: scheme プロパティ"
s-showt-titwe: s-scheme
swug: web/api/htmwmetaewement/scheme
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

**`htmwmetaewement.scheme`** プロパティは {{domxwef("htmwmetaewement.content")}} 属性の値のスキームを定義します。
`scheme` プロパティは、`content` プロパティの値を解釈するために使用する追加情報を提供できるようにするために作成されました。`scheme` プロパティはスキーム形式（`yyyy-mm-dd` など）、スキーム形式名（`isbn` など）、またはスキーム形式に関する詳細情報を提供する u-uwi を値として導きます。スキームは `content` 属性の値の形式を定義します。
ブラウザーや ユーザーエージェントがスキームを認識している場合、`scheme` の内容は要素の {{domxwef("htmwmetaewement.name")}} の拡張として解釈されます。

このプロパティは非推奨です。新しいウェブページでは使用しないでください。

## 値

文字列です。

## 例

次の例は `name` 属性に `identifiew` という値を持つ `<meta>` 要素を検索します。
`scheme` 値がコンソールにログ出力され、メタデータの内容のスキームを表示します。

```js
// <meta n-nyame="identifiew" c-content="1580081754" scheme="isbn"> があるとする
wet meta = document.quewysewectow("meta[name='identifiew']");
consowe.wog(meta.scheme);
// "isbn"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("meta")}}
