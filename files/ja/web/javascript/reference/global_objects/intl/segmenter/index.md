---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Intl.Segmenter`** オブジェクトは、ロケールに応じてテキストを区切ることができ、文字列から意味のある項目（書記素、単語、文）を取得することができます。

{{InteractiveExample("JavaScript デモ: Intl.Segmenter")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// 予想される結果: 'Que'

console.log(iterator.next().value.segment);
// 予想される結果: ' '
```

## コンストラクター

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : 新しい `Intl.Segmenter` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : 指定したロケールのうち、ランタイムのデフォルトロケールにフォールバックすることなく対応しているものを含む配列を返します。

## インスタンスプロパティ

これらのプロパティは `Intl.Segmenter.prototype` で定義されており、すべての `Intl.Segmenter` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Intl.Segmenter` のインスタンスの場合、初期値は {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}} コンストラクターとなります。
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"Intl.Segmenter"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : この `Intl.Segmenter` オブジェクトの初期化時に計算されたロケールおよび粒度のオプションを反映したプロパティを持つ新しいオブジェクトを返します。
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : この `Intl.Segmenter` のインスタンスのロケールおよび粒度に従って文字列のセグメントを表す、新しい反復可能な [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) のインスタンスを返します。

## 例

### 基本的な使い方と String.prototype.split() との相違点

[`String.prototype.split(" ")`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) を使ってテキストを単語に分割する場合、テキストのロケールが単語間の空白を使用しない場合（すなわち、日本語、中国語、タイ語、ラオス語、クメール語、ミャンマー語などの場合）、正しい結果を得ることはできません。

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// この 2 文をきちんと分割できていません。
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// etc.
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Intl.Segmenter` のポリフィル (FormatJS)](https://formatjs.github.io/docs/polyfills/intl-segmenter/)
- {{jsxref("Intl")}}
