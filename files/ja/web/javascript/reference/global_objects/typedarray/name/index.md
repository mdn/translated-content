---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
---

{{JSRef}}

**`TypedArray.name`** プロパティは、型付き配列のコンストラクターの名称を文字列値で表します。

{{EmbedInteractiveExample("pages/js/typedarray-name.html","shorter")}}{{js_property_attributes(0,0,0)}}

## 解説

`TypedArray` オブジェクトは要素ごとのバイト数とそのバイト列が解釈される方法とでお互いに異なります。 `name` プロパティによって配列がどのデータ型からなるのかが説明されます。最初の部分は `Int` が "integer" に対して、 `Uint` が "unsigned integer" に対して、 `Float` が "floating point" に対して使用されます。第二の部分は配列のビット長を説明する数値です。最後に、オブジェクト型は `Array` になりますが、特殊な場合は `ClampedArray` になります。詳細については、 {{jsxref("Uint8ClampedArray")}} をご覧ください。

## 例

### name の使用

```js
Int8Array.name;         // "Int8Array"
Uint8Array.name;        // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name;        // "Int16Array"
Uint16Array.name;       // "Uint16Array"
Int32Array.name;        // "Int32Array"
Uint32Array.name;       // "Uint32Array"
Float32Array.name;      // "Float32Array"
Float64Array.name;      // "Float64Array"
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-properties-of-the-typedarray-constructors', 'TypedArray.name')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.name")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
