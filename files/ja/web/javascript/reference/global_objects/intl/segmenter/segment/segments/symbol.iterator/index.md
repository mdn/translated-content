---
title: Segments.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`[Symbol.iterator]()`** は [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) インスタンスのメソッドで、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装しており、`Segments` オブジェクトを、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や {{jsxref("Statements/for...of", "for...of")}} ループなど、反復可能オブジェクトを期待するほとんどの構文で利用できるようにします。このメソッドは、それぞれの区間に関するデータを生成する[区間イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)を返します。

{{InteractiveExample("JavaScript デモ: Segments.prototype[Symbol.iterator]()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

for (const segment of iterator) {
  if (segment.segment.length > 4) {
    console.log(segment.segment);
  }
}

// 予想される結果: "demeure"
```

## 構文

```js-nolint
segments[Symbol.iterator]()
```

### 引数

なし。

### 返値

各区間に関するデータを生成する、新しい[反復可能イテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。生成されるそれぞれのオブジェクトは、[`containing()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing) メソッドによって返されるオブジェクトと同じプロパティを持ちます。

## 例

### for...of ループを使用した反復処理

なお、このメソッドを直接呼び出す必要はほとんどありません。`[Symbol.iterator]()` メソッドが存在するため、`Segments` オブジェクトは[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)となっており、`for...of` ループなどの構文では、ループ対象のイテレーターを取得するために、このメソッドが自動的に呼び出されます。

```js
const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
const input = "你好，世界！我爱编程。";

for (const value of segmenter.segment(input)) {
  console.log(value);
}

/*
{segment: '你好', index: 0, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '，', index: 2, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '世界', index: 3, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '！', index: 5, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '我', index: 6, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '爱', index: 7, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '编', index: 8, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '程', index: 9, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '。', index: 10, input: '你好，世界！我爱编程。', isWordLike: false}
*/
```

### イテレーターを手動で進める

反復処理を最大限に制御するために、返されたイテレーターオブジェクトの `next()` メソッドを手動で呼び出すこともできます。

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

/*
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

- [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
- {{jsxref("Symbol.iterator")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
