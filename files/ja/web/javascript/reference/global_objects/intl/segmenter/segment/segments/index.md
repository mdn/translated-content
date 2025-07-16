---
title: Intl.Segments
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments
---

{{JSRef}}

**`Intl.Segments`** のインスタンスは、テキスト文字列のセグメントを反復可能なコレクションとして保持します。[`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) オブジェクトの [`segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) メソッドをコールすると、このインスタンスが返されます。

{{InteractiveExample("JavaScript デモ: Segments.prototype.containing")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const segments = segmenterFr.segment(string1);

console.log(segments.containing(5));
// Expected output:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## インスタンスメソッド

- [`Segments.prototype.containing()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing)
  - : 指定されたインデックスのコードユニットを含む元の文字列のセグメントを記述したオブジェクトを返します。
- [`Segments.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
  - : セグメントを反復処理するためのイテレーターを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
