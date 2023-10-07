---
title: Float64Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
---

{{JSRef}}

**`Float64Array()`** は型付き配列のコンストラクターで、新しい {{jsxref("Float64Array")}} オブジェクト、すなわち 64 ビット浮動小数点数 (C 言語の `double` データ型に相当) の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxref("DataView")}} を使用してください。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。

## 構文

```
new Float64Array(); // new in ES2017
new Float64Array(length);
new Float64Array(typedArray);
new Float64Array(object);
new Float64Array(buffer [, byteOffset [, length]]);
```

### 引数

- `length`
  - : `length` 引数付きで呼び出された場合、 `length` を *`BYTES_PER_ELEMENT` バイトで掛けた大きさ*で、内部の配列バッファーがメモリ内に生成され、内容がゼロになります。
- `typedArray`
  - : `typedArray` 引数は任意の型付き配列 (`Int32Array` など) で、 `typedArray` を付けて呼び出された場合、その内容が新しい型付き配列に複写されます。 `typedArray` に含まれるそれぞれの値は、新しい配列にコピーされる前に、このコンストラクターに対応する型に変換されます。新しい型付き配列の長さは、 `typedArray` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出された場合、新しい型付き配列は `TypedArray.from()` メソッドのようにして生成されます。
- `buffer`, `byteOffset`, `length`
  - : `buffer` 引数と、任意で `byteOffset` および `length` 引数をつけて呼び出された場合、新しい型付き配列のビューが作成され、そのビューが指定された {{jsxref("ArrayBuffer")}} となります。 `byteOffset` および `length` 引数は、型付き配列のビューで公開するメモリの範囲を指定します。両方が省略された場合は、 `buffer` 全体がビューとなり、 `length` のみが省略された場合は、 `buffer` の残りがビューとなります。

## 例

### Float64Array を生成するための様々な方法

```js
// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Float64Array.Float64Array")}}

### 互換性ノート

ECMAScript 2015 から、 `Float64Array` コンストラクターは {{jsxref("Operators/new", "new")}} 演算子を使用して構築する必要があります。 `new` 演算子を使用せずに `Float64Array` コンストラクターを呼び出した場合、 {{jsxref("TypeError")}} が発生するようになりました。

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## 関連情報

- [JavaScript typed arrays](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
