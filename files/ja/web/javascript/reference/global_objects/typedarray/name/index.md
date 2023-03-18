---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`TypedArray.name`** プロパティは、型付き配列のコンストラクターの名前を文字列値で表します。

{{EmbedInteractiveExample("pages/js/typedarray-name.html","shorter")}}

## 値

この `TypedArray` の型に応じた値の文字列です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`TypedArray` オブジェクトは、要素ごとのバイト数とそのバイト列を解釈する方法とがお互いに異なります。`name` プロパティは、配列がどのデータ型からなるのかを説明します。

- 最初の部分は `Int` が整数 (_integer_) に対して、 `Uint` が符号なし整数 (_unsigned integer_) に対して、 `Float` が浮動小数点数 (_floating point_) に対して使用されます。
- 第二の部分は配列のビット長を説明する数値です。64 ビット整数は大きすぎて、JavaScript の数値では精度を落とさずに表せませんので、代わりに要素は [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 値として格納され、最初の部分に "Big" をつけて `BigInt` または `BigUint` となります。
- 最後に、オブジェクト型は `Array` になりますが、特殊な場合は `ClampedArray` になります。{{jsxref("Uint8ClampedArray")}} で _clamped array_ について詳しく説明しています。

## 例

### name の使用

```js
Int8Array.name; // "Int8Array"
Uint8Array.name; // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name; // "Int16Array"
Uint16Array.name; // "Uint16Array"
Int32Array.name; // "Int32Array"
Uint32Array.name; // "Uint32Array"
Float32Array.name; // "Float32Array"
Float64Array.name; // "Float64Array"
BigInt64Array.name; // "BigInt64Array"
BigUint64Array.name; // "BigUint64Array"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
