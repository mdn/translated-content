---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
---

{{JSRef}}

**`buffer`** アクセサープロパティは、構築時に _TypedArray_ から参照されるようになった {{jsxref("ArrayBuffer")}} を表します。

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html","shorter")}}

## 解説

`buffer` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は _TypedArray_ が構築されたときに確立し、変更することができません。 _TypedArray_ は[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

## 例

### buffer プロパティの使用

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.buffer', 'TypedArray.prototype.buffer')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.buffer")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
