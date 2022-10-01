---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
---

{{JSRef}}

**`byteOffset`** アクセサープロパティは、 {{jsxref("ArrayBuffer")}} の開始位置からの型付き配列の (バイト単位の) オフセットを表します。

## 解説

`byteOffset` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

## 例

### byteOffset プロパティの使用

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteOffset; // 0 (no offset specified)

var uint8 = new Uint8Array(buffer, 3);
uint8.byteOffset; // 3 (as specified when constructing Uint8Array)
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.byteoffset', 'TypedArray.prototype.byteOffset')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.byteOffset")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
