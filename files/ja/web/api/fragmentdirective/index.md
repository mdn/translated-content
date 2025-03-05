---
title: FragmentDirective
slug: Web/API/FragmentDirective
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{SeeCompatTable}}

**`FragmentDirective`** インターフェイスは、現在の文書で強調表示されているテキストフラグメントを表すオブジェクトです。

これは {{domxref("Document.fragmentDirective")}} プロパティでアクセスできます。

## インスタンスプロパティ

なし。

## インスタンスメソッド

なし。

## 例

対応するブラウザーの開発ツールを使用して、1 つ以上の一致するテキストフラグメントがあるタブで、以下を実行してみてください。

```js
document.fragmentDirective;
```

以下のような構造を持つ {{domxref("FragmentDirective")}} オブジェクトインスタンスが返されるはずです。

```js
items: [
  {
    prefix: "",
    textStart: "Module Workers",
    textEnd: "",
    suffix: "support",
    type: "text",
  },
  {
    prefix: "feedback on",
    textStart: "usability",
    textEnd: "",
    suffix: "",
    type: "text",
  },
];
```

この機能は、現在は主に機能検出を目的としていますが、将来的には、翻訳ヒントなど他の情報を記載するために展開することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テキストフラグメント](/ja/docs/Web/URI/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
