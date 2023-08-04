---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`length`** アクセサープロパティは、型付き配列の長さを（要素数で）表します。

{{EmbedInteractiveExample("pages/js/typedarray-length.html","shorter")}}

## 解説

`length` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ に `byteOffset` または `length` が指定されていない場合、参照される {{jsxref("ArrayBuffer")}} の長さが返されます。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

## 例

### length プロパティの使用

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 （バッファーの長さと一致）

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 （Uint8Array の構築の際に指定された通り）

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 （構築された Uint8Array のオフセットによる）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
