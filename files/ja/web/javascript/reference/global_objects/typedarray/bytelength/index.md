---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
---

{{JSRef}}

**`byteLength`** アクセサープロパティは、型付き配列の長さを (バイト単位で) 表します。

{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html","shorter")}}

## 解説

`byteLength` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ が `byteOffset` や `length` を指定していないなら、参照されている `ArrayBuffer` の `length` が返されます。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

## 例

### byteLength プロパティの使用

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.byteLength; // 5 (as specified when constructing the Uint8Array)

var uint8 = new Uint8Array(buffer, 2);
uint8.byteLength; // 6 (due to the offset of the constructed Uint8Array)
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.bytelength', 'TypedArray.prototype.byteLength')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.byteLength")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
