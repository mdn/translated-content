---
title: Intl.Segmenter.prototype.segment()
short-title: segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`segment()`** は {{jsxref("Intl.Segmenter")}} インスタンスンのメソッドで、この `Intl.Segmenter` オブジェクトのロケールおよび粒度に従って文字列を分割します。

{{InteractiveExample("JavaScript デモ: Intl.Segmenter.prototype.segment()")}}

```js interactive-example
const string1 = "Que ma joie demeure";

const segmenterFrGrapheme = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});
const graphemeSegments = segmenterFrGrapheme.segment(string1);

console.log(Array.from(graphemeSegments)[0]);
// 予想される結果:
// Object {segment: 'Q', index: 0, input: 'Que ma joie demeure'}
```

## 構文

```js-nolint
segment(input)
```

### 引数

- `input`
  - : 分割するテキストを文字列で指定します。

### 返値

この分割器のロケールと粒度を使用して、入力文字列のセグメントを含む新しい反復可能オブジェクト [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) です。

## 例

```js
// ロケール固有の分割器を生成する
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// それを用い、文字列のセグメントを走査するイテレーターを取得する
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// それを用い、分割を行う
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "segment at code units [%d, %d]: «%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (word-like)" : "",
  );
}
// segment at code units [0, 3]: «Moi» (word-like)
// segment at code units [3, 4]: « »
// segment at code units [4, 5]: «?»
// segment at code units [5, 6]: « »
// segment at code units [6, 11]: «N'est» (word-like)
// segment at code units [11, 12]: «-»
// segment at code units [12, 14]: «ce» (word-like)
// segment at code units [14, 15]: « »
// segment at code units [15, 18]: «pas» (word-like)
// segment at code units [18, 19]: « »
// segment at code units [19, 20]: «?»
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
