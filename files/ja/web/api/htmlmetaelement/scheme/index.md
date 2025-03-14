---
title: "HTMLMetaElement: scheme プロパティ"
short-title: scheme
slug: Web/API/HTMLMetaElement/scheme
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLMetaElement.scheme`** プロパティは {{domxref("HTMLMetaElement.content")}} 属性の値のスキームを定義します。
`scheme` プロパティは、`content` プロパティの値を解釈するために使用する追加情報を提供できるようにするために作成されました。`scheme` プロパティはスキーム形式（`YYYY-MM-DD` など）、スキーム形式名（`ISBN` など）、またはスキーム形式に関する詳細情報を提供する URI を値として導きます。スキームは `content` 属性の値の形式を定義します。
ブラウザーや ユーザーエージェントがスキームを認識している場合、`scheme` の内容は要素の {{domxref("HTMLMetaElement.name")}} の拡張として解釈されます。

このプロパティは非推奨です。新しいウェブページでは使用しないでください。

## 値

文字列です。

## 例

次の例は `name` 属性に `identifier` という値を持つ `<meta>` 要素を検索します。
`scheme` 値がコンソールにログ出力され、メタデータの内容のスキームを表示します。

```js
// <meta name="identifier" content="1580081754" scheme="ISBN"> があるとする
let meta = document.querySelector("meta[name='identifier']");
console.log(meta.scheme);
// "ISBN"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("meta")}}
