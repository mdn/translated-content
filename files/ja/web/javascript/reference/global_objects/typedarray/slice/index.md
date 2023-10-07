---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`slice()`** メソッドは、元の型付き配列の部分的なコピーを含む新しい型付き配列（新しいバッファーによる）を返します。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムを持ちます。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)の一つです。

{{EmbedInteractiveExample("pages/js/typedarray-slice.html","shorter")}}

## 構文

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 引数

- `start` {{optional_inline}}

  - : 抽出範囲の先頭の位置を示す 0 から始まる添字です。

    負の添字を使って、配列の末尾からの相対位置を表すことができます。
    `slice(-2)` は配列の最後から 2 番目の要素と最後の要素を抽出します。

    `start` を省略した場合、 `slice` は `0` 番目の要素から開始します。

- `end` {{optional_inline}}

  - : 抽出範囲の末尾の _直前_ の位置を示す 0 から始まる添字です。 `slice` は
    `end` 自体は含めず、その直前まで抽出します。

    `slice(1,4)` は 2 番目の要素から 4 番目の要素まで（添字が 1, 2, 3 の要素）を取り出します。

    負の添字を使って、配列の末尾からの相対位置を表すことができます。 `slice(2,-1)` は配列の 3 番目の要素から、最後から 2 番目の要素まで取り出します。

    `end` が省略された場合、 `slice` は配列の最後 (`typedarray.length`) まで取り出します。

### 返値

抽出された要素が入った新しい型付き配列。

## 解説

`slice` メソッドは元の型付き配列を変更せず、代わりに元の型付き配列の一部のコピーを返します。型付き配列はプリミティブ値しか格納しないので、`slice` メソッドが返すコピーは常に[ディープコピー](/ja/docs/Glossary/Deep_copy) である。

一方の型付き配列に新しい要素が追加されても、他方の型付き配列に影響はしません。

## 例

### 例: 既存の配列の一部を返す

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.slice` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.slice()")}}
