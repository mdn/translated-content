---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Int8Array`** は型付き配列で、2 の補数形式の 8 ビット符号付き整数値の配列を表します。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Int8Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## コンストラクター

- {{jsxref("Int8Array/Int8Array", "Int8Array()")}}
  - : 新しい `Int8Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Int8Array` の場合は `1` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Int8Array.prototype` で定義されており、すべての `Int8Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Int8Array` の場合は `2` です。
- {{jsxref("Object/constructor", "Int8Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Int8Array` インスタンスの場合、初期値は {{jsxref("Int8Array/Int8Array", "Int8Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Int8Array を作成

```js
// 長さから
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 配列から
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Int8Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Int8Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
