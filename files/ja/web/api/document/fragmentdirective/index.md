---
title: "Document: fragmentDirective プロパティ"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: 9aaaa8597f2b1b952a9ed116cbe48e4810254cea
---

{{APIRef}}{{SeeCompatTable}}

**`fragmentDirective`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、現在の文書の {{domxref("FragmentDirective")}} を返します。

## 値

{{domxref("FragmentDirective")}} オブジェクトです。

## 例

対応するブラウザーの開発ツールを使用して、1 つ以上の一致するテキストフラグメントがあるタブで、以下を実行してみてください。

```js
document.fragmentDirective;
// 対応していれば FragmentDirective オブジェクトが返される
// そうでなければ undefined となる
```

この機能は、現在は主に機能検出を目的としていますが、将来的には、翻訳ヒントなど他の情報を記載するために展開することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
