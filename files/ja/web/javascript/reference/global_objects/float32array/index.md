---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Float32Array`** は型付き配列で、プラットフォームのバイト順による 32 ビット浮動小数点数の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な配列の添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Float32Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## コンストラクター

- {{jsxref("Float32Array/Float32Array", "Float32Array()")}}
  - : 新しい `Float32Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Float32Array` の場合は `4` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Float32Array.prototype` で定義されており、すべての `Float32Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Float32Array` の場合は `4` です。
- {{jsxref("Object/constructor", "Float32Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Float32Array` インスタンスの場合、初期値は {{jsxref("Float32Array/Float32Array", "Float32Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Float32Array を作成

```js
// 長さから
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 8

// 配列から
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Float32Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32FromIterable = new Float32Array(iterable);
console.log(float32FromIterable);
// Float32Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Float32Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
