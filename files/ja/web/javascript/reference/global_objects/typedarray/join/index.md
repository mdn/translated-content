---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`join()`** メソッドは、配列のすべての要素を 1 本の文字列に結合します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.join()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## 構文

```js-nolint
join()
join(separator)
```

### 引数

- `separator` {{optional_inline}}
  - : 配列の各要素を区切る文字列を指定します。 `separator` は、必要であれば文字列に変換されます。省略した場合、配列の要素はカンマ (",") で区切られます。

### 返値

配列のすべての要素が結合された文字列です。

## 例

### join() の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.join` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
