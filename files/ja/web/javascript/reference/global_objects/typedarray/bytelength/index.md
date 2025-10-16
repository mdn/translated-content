---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`byteLength`** は {{jsxref("TypedArray")}} のアクセサープロパティで、この型付き配列の長さを（バイト単位で）返します。

{{InteractiveExample("JavaScript デモ: TypedArray.byteLength", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// Expected output: 6
```

## 解説

`byteLength` プロパティは設定アクセサープロパティが `undefined` である、読み取り専用のアクセサープロパティです。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ が `byteOffset` や `length` を指定していないなら、参照されている `ArrayBuffer` の `length` が返されます。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

## 例

### byteLength プロパティの使用

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (as specified when constructing the Uint8Array)

const uint8offSet = new Uint8Array(buffer, 2);
uint8offSet.byteLength; // 6 (due to the offset of the constructed Uint8Array)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
