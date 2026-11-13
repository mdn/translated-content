---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Int32Array`** は型付き配列で、プラットフォームのバイト順による 2 の補数形式の 32 ビット符号付き整数値の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Int32Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## コンストラクター

- {{jsxref("Int32Array/Int32Array", "Int32Array()")}}
  - : 新しい `Int32Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Int32Array` の場合は `4` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Int32Array.prototype` で定義されており、すべての `Int32Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Int32Array` の場合は `4` です。
- {{jsxref("Object/constructor", "Int32Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Int32Array` インスタンスの場合、初期値は {{jsxref("Int32Array/Int32Array", "Int32Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Int32Array を作成

```js
// 長さから
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// 配列から
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Int32Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Int32Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
