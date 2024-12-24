---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 46c0f5269f597ad055d0b6322f736f5c70996c4c
---

{{JSRef}}

**`Intl.Segmenter.prototype.segment()`** メソッドは、この [`Intl.Segmenter`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) オブジェクトのロケールおよび粒度に従って文字列を分割します。

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-segment.html")}}

## 構文

```js
segment(input);
```

### 引数

- `input`
  - : 分割するテキストを [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) で指定します。

### 返値

入力文字列のセグメントを含む、反復可能な新しい [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) オブジェクトです。

## 例

```js
// ロケール固有の単語分割器を生成する
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
// logs
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
