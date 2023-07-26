---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`slice()`** メソッドは新しい `ArrayBuffer` を返し、その中にこの `ArrayBuffer` の `begin` から `end` の手前までをコピーします。

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## 構文

```js-nolint
slice(begin)
slice(begin, end)
```

### 引数

- `begin`
  - : スライスの起点を表すゼロ基点のバイトインデックスです。
- `end` {{optional_inline}}
  - : スライスがその前で終了するバイトインデックスです。end を指定しなかった場合、新しい `ArrayBuffer` は、この `ArrayBuffer` の起点から終点まですべてのバイトを含みます。

### 返値

新しい {{jsxref("ArrayBuffer")}} オブジェクト。

## 解説

`slice()` メソッドは、`end` 引数で指定されたバイトの手前までコピーを行います。`begin` または `end` のどちらかが負の数の場合は、開始位置とは反対に、配列の末尾からのインデックスを参照します。

`begin` および `end` 引数で指定された範囲は、現在の配列で妥当なインデックスの範囲に丸められます。新しい `ArrayBuffer` の計算された長さが負の数であった場合、ゼロに丸められます。

## 例

### ArrayBuffer のコピー

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
