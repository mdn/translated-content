---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{ APIRef("HTML DOM") }}

**`HTMLOptionsCollection`** インターフェイスは、 HTML の [`<option>`](/ja/docs/Web/HTML/Element/option) 要素の集合を（文書内の順序で）表し、リストから選択すると共に、任意で項目を変更することもできるメソッドやプロパティを提供します。このオブジェクトが返されるのは、 [select](/ja/docs/Web/API/HTMLSelectElement) の `options` プロパティからのみです。

{{InheritanceDiagram}}

## インスタンスプロパティ

- `length`
  - : `unsigned long` です。仕様上は、オプションで読み取り専用にしないことが認められています。値を下げることで末尾のオプションを削除したり、値を上げることで末尾に空白のオプションを追加したりすることができます。 Mozilla はこれを許可していますが、他の実装では [DOMException](/ja/docs/Web/API/DOMException) が発生する可能性があります。

## インスタンスメソッド

_このインターフェイスは親である [`HTMLCollection`](/ja/docs/Web/API/HTMLCollection) からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTMLCollection](/ja/docs/Web/API/HTMLCollection)
