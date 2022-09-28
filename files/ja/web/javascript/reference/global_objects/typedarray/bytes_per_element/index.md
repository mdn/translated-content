---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---

{{JSRef}}

**`TypedArray.BYTES_PER_ELEMENT`** プロパティは、型付き配列内の各要素の大きさをバイト単位で表します。

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html","shorter")}}{{js_property_attributes(0,0,0)}}

## 解説

`TypedArray` オブジェクトは要素ごとのバイト数とバイトが解釈される方法とで互いに異なります。`BYTES_PER_ELEMENT` 定数は与えられた `TypedArray` 内の各要素のバイト数を表します。

## 例

### BYTES_PER_ELEMENT の使用

```js
Int8Array.BYTES_PER_ELEMENT;         // 1
Uint8Array.BYTES_PER_ELEMENT;        // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT;        // 2
Uint16Array.BYTES_PER_ELEMENT;       // 2
Int32Array.BYTES_PER_ELEMENT;        // 4
Uint32Array.BYTES_PER_ELEMENT;       // 4
Float32Array.BYTES_PER_ELEMENT;      // 4
Float64Array.BYTES_PER_ELEMENT;      // 8
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-typedarray.bytes_per_element', 'TypedArray.BYTES_PER_ELEMENT')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.BYTES_PER_ELEMENT")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
