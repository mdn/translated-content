---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint8ClampedArray`** は型付き配列で、 0-255 に制約される 8 ビット符号なし整数値の配列を表します。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Uint8ClampedArray` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## コンストラクター

- {{jsxref("Uint8ClampedArray.Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : 新しい `Uint8ClampedArray` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint8ClampedArray` の場合は `1` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Uint8ClampedArray.prototype` で定義されており、すべての `Uint8ClampedArray` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint8ClampedArray` の場合は `1` です。
- {{jsxref("Object/constructor", "Uint8ClampedArray.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Uint8ClampedArray` インスタンスの場合、初期値は {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Uint8ClampedArray を作成

```js
// 長さから
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (制約を受けた)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// 配列から
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8ClampedArray` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
