---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`includes()`** メソッドは、型付き配列が特定の要素を含んでいるかどうかを判断し、その結果に応じて `true` か `false` を返します。このメソッドは {{jsxref("Array.prototype.includes()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは [型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## 構文

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 探す対象の要素
- `fromIndex` {{optional_inline}}
  - : オプション。`searchElement`を探し始める配列内の位置。既定では 0 です。

### 返値

論理値です。

## 例

### includes の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN の扱い (Float32 および Float64 に限り true)
new Uint8Array([NaN]).includes(NaN); // false (コンストラクターに渡した NaN は 0 に変換されるため)
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.includes` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
