---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Float16Array`** は型付き配列で、プラットフォームのバイト順による 16 ビット浮動小数点数の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な配列の添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Float16Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

> [!NOTE]
> Float16 のサポートは、JavaScript API と CPU アーキテクチャの両方において万能ではありません。これを使用すると、プラットフォームによってはパフォーマンスが低下する可能性があります。これは、[float-backed canvases](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md)、WebGPU、WebGL、[stable diffusion](https://github.com/huggingface/blog/blob/main/stable_diffusion.md) を含む深層学習モデルなど、高度に最適化されパフォーマンスに敏感なシステムとのやり取りを想定しています。

## コンストラクター

- {{jsxref("Float16Array/Float16Array", "Float16Array()")}}
  - : 新しい `Float16Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Float16Array` の場合は `2` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Float16Array.prototype` で定義されており、すべての `Float16Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Float16Array` の場合は `2` です。
- {{jsxref("Object/constructor", "Float16Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Float16Array` インスタンスの場合、初期値は {{jsxref("Float16Array/Float16Array", "Float16Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Float16Array を作成

```js
// 長さから
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// 配列から
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Float16Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
