---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`reverse()`** メソッドは、その場で型付き配列を反転します。型付き配列の先頭の要素は末尾になり、末尾の要素は先頭になります。このメソッドは {{jsxref("Array.prototype.reverse()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは [型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html","shorter")}}

## 構文

```js-nolint
reverse()
```

### 返値

反転された配列です。

## 例

### reverse の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.reverse` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.reverse()")}}
