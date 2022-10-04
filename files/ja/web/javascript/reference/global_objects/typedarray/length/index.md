---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
---

{{JSRef}}

**`length`** アクセサープロパティは、型付き配列の長さを (要素数で) 表します。

{{EmbedInteractiveExample("pages/js/typedarray-length.html","shorter")}}

## 解説

`length` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ に `byteOffset` または `length` が指定されていない場合、参照される {{jsxref("ArrayBuffer")}} の長さが返されます。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

## 例

### length プロパティの使用

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

var uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.length', 'TypedArray.prototype.length')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.length")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
