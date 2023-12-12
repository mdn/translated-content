---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`byteOffset`** は {{jsxref("TypedArray")}} インスタンスのアクセサープロパティで、この型付き配列の {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の開始位置からの（バイト単位の）オフセットを返します。

## 解説

`byteOffset` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

## 例

### byteOffset プロパティの使用

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (no offset specified)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (as specified when constructing Uint8Array)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
