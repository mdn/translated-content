---
title: Intl.Segments.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator
---

{{JSRef}}

**`[@@iterator]()`** メソッドは、[iterable プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)の一部で、`Intl.Segmenter` オブジェクトのエントリーを反復処理できる新しいイテレーターオブジェクトを返します。各エントリーは、オブジェクトとして返されます。

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-@@iterator.html")}}

## 構文

```js
segments[Symbol.iterator];
```

利用できるイテレーター関数は、[iterable プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)のページで説明したように、`.next()` の 1 つです。

### 返値

新しいイテレーターオブジェクト。

## 例

```js
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/* Logs
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Iteration protocols](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
