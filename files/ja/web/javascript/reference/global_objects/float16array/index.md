---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

**`Float16Array`** 型配列は、プラットフォームのバイトオーダーで 16 ビット浮動小数点数の配列を表します。バイトオーダーの制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に与えられない限り、内容は `0` に初期化されます。一旦初期化されると、オブジェクトのメソッドを使用するか、標準的な配列インデックスの構文（つまりブラケット記法）を使用して配列の要素を参照できます。

`Float16Array` は隠された {{jsxref("TypedArray")}} クラスのサブクラスです。

> [!NOTE]
> Float16 のサポートは、JavaScript API と CPU アーキテクチャの両方において万能ではありません。これを使用すると、プラットフォームによってはパフォーマンスが低下する可能性があります。これは、[float-backed canvases](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md)、WebGPU、WebGL、[stable diffusion](https://github.com/huggingface/blog/blob/main/stable_diffusion.md) を含む深層学習モデルなど、高度に最適化されパフォーマンスに敏感なシステムとのやり取りを想定しています。

## コンストラクター

- {{jsxref("Float16Array/Float16Array", "Float16Array()")}}
  - : 新しい `Float16Array` オブジェクトを作成します。

## 静的プロパティ

以下に加えて、親である {{jsxref("TypedArray")}} から静的プロパティを継承します。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : 要素サイズを数値で返します。`Float16Array` の場合は `2` を返します。

## 静的メソッド

親である {{jsxref("TypedArray")}} から静的メソッドを継承します。

## インスタンスプロパティ

以下に加えて、親である {{jsxref("TypedArray")}} からインスタンスプロパティを継承します。

これらのプロパティは `Float16Array.prototype` で定義され、すべての `Float16Array` インスタンスで共有されます。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素サイズを数値で返します。`Float16Array` の場合は `2` を返します。
- {{jsxref("Object/constructor", "Float16Array.prototype.constructor")}}
  - : インスタンスオブジェクトを生成したコンストラクター関数です。`Float16Array` インスタンスの場合、初期値は {{jsxref("Float16Array/Float16Array", "Float16Array")}} コンストラクターです。

## インスタンスメソッド

親である {{jsxref("TypedArray")}} からインスタンスメソッドを継承します。

## 例

### Float16Array を作成する様々な方法

```js
// From a length
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
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

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
