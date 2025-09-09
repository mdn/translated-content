---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`TypedArray.BYTES_PER_ELEMENT`** プロパティは、型付き配列内の各要素の大きさをバイト単位で表します。

{{InteractiveExample("JavaScript デモ: TypedArray.BYTES_PER_ELEMENT", "shorter")}}

```js interactive-example
console.log(Float64Array.BYTES_PER_ELEMENT);
// Expected output: 8

console.log(Int8Array.BYTES_PER_ELEMENT);
// Expected output: 1
```

## 値

`TypedArray` の方に応じた値を持つ数値です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`TypedArray`オブジェクトは、要素ごとのバイト数とバイトの解釈の仕方がそれぞれ異なります。`BYTES_PER_ELEMENT` 定数は、指定された `TypedArray` の各要素のバイト数を格納します。

`BYTES_PER_ELEMENT` プロパティはインスタンスプロパティでも静的プロパティでもあります。これは `TypedArray` サブクラスのコンストラクターとコンストラクターのインスタンスの両方で利用することができます。

インスタンスプロパティとして、`BYTES_PER_ELEMENT` はコンストラクターの `prototype` で定義されます。

```js
console.log(Object.hasOwn(Int8Array.prototype, "BYTES_PER_ELEMENT")); // true
```

## 例

### BYTES_PER_ELEMENT の使用

静的プロパティとして

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
BigInt64Array.BYTES_PER_ELEMENT; // 8
BigUint64Array.BYTES_PER_ELEMENT; // 8
```

インスタンスプロパティとして

```js
new Int8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8ClampedArray([]).BYTES_PER_ELEMENT; // 1
new Int16Array([]).BYTES_PER_ELEMENT; // 2
new Uint16Array([]).BYTES_PER_ELEMENT; // 2
new Int32Array([]).BYTES_PER_ELEMENT; // 4
new Uint32Array([]).BYTES_PER_ELEMENT; // 4
new Float32Array([]).BYTES_PER_ELEMENT; // 4
new Float64Array([]).BYTES_PER_ELEMENT; // 8
new BigInt64Array([]).BYTES_PER_ELEMENT; // 8
new BigUint64Array([]).BYTES_PER_ELEMENT; // 8
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
