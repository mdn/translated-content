---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: 9ce57d5046baf5d25c8eb066e60227f0fbd017cf
---

{{JSRef}}

**`Intl.Segmenter`** オブジェクトは、ロケールに応じたテキストのセグメンテーションを可能にし、文字列から意味のある項目（書記素、単語、文）を取得することができます。

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## コンストラクター

- [`Intl.Segmenter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter)
  - : 新しい `Intl.Segmenter` オブジェクトを作成します。

## 静的メソッド

- [`Intl.Segmenter.supportedLocalesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/supportedLocalesOf)
  - : 指定したロケールのうち、ランタイムのデフォルトロケールにフォールバックすることなくサポートされているものを含む配列を返します。

## インスタンスメソッド

- [`Intl.Segmenter.prototype.resolvedOptions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions)
  - : この `Intl.Segmenter` オブジェクトの初期化時に計算されたロケールおよび粒度のオプションを反映したプロパティを持つ新しいオブジェクトを返します。
- [`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
  - : この `Intl.Segmenter` のインスタンスのロケールおよび粒度に従って文字列のセグメントを表す、新しい反復可能な [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments) のインスタンスを返します。

## 例

### 基本的な使い方と String.prototype.split() との相違点

[`String.prototype.split(" ")`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) を使ってテキストを単語に分割する場合、テキストのロケールが単語間の空白を使用しない場合（つまり、日本語、中国語、タイ語、ラオス語、クメール語、ミャンマー語などの場合）、正しい結果を得ることはできません。

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// The two sentences are not correctly segmented.
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
