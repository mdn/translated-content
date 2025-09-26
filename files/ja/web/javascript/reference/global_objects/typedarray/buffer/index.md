---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`buffer`** は {{jsxref("TypedArray")}} インスタンスのアクセサープロパティで、構築時点にこの型付き配列が参照する {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} を返します。

{{InteractiveExample("JavaScript デモ: TypedArray.buffer", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);

console.log(uint16.buffer.byteLength);
// Expected output: 8
```

## 解説

`byteLength` プロパティは設定アクセサープロパティが `undefined` である、読み取り専用のアクセサープロパティです。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

型付き配列はバッファーのビューであるため、基盤となるバッファーは型付き配列自体よりも長い場合があります。

## 例

### buffer プロパティの使用

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### 配列の断片のビューから、基盤のバッファーにアクセス

```js
const buffer = new ArrayBuffer(1024);
const arr = new Uint8Array(buffer, 64, 128);
console.log(arr.byteLength); // 128
console.log(arr.buffer.byteLength); // 1024
console.log(arr.buffer === buffer); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
