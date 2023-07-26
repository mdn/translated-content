---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`fill()`** メソッドは、型付き配列の開始位置から終了位置までのすべての要素を固定値で埋めます。このメソッドのアルゴリズムは {{jsxref("Array.prototype.fill()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-fill.html","shorter")}}

## 構文

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 引数

- `value`
  - : 型付き配列を埋める値です。
- `start` {{optional_inline}}
  - : 開始位置です。既定値は 0 です。
- `end` {{optional_inline}}
  - : 終了位置（の次の位置）です既定値は `this.length` です。

### 返値

変更された配列です。

## 解説

埋める区間は \[`start`, `end`) です。

**`fill()`** メソッドは `value`, `start`, `end` の 3 つまでの引数を取ります。 `start` と `end` の各引数は省略可能で、既定値はそれぞれ `0` と、 `this` オブジェクトの `length` です。

`start` が負の数であった場合は、 `length+start` (`length` は配列の長さ) として扱われます。 `end` が負の数であった場合は、 `length+end` として扱われます。

## 例

### fill() の使用

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.fill` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.fill()")}}
