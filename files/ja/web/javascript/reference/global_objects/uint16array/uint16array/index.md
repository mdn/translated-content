---
title: Uint16Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array/Uint16Array
---

{{JSRef}}

**`Uint16Array()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 16 ビット符号なし整数値の配列を生成します。

## 構文

```
new Uint16Array(); // new in ES2017
new Uint16Array(length);
new Uint16Array(typedArray);
new Uint16Array(object);
new Uint16Array(buffer [, byteOffset [, length]]);
```

### 引数

- `length`
  - : `length` 引数付きで呼び出されると、メモリ内に内部的な配列バッファーを作成し、大きさは `length` _を `BYTES_PER_ELEMENT`_ で乗じたバイト数になり、ゼロになることもあります。
- `typedArray`
  - : `typedArray` 引数付きで呼び出されると、これはあらゆる型付き配列型 (例えば `Int32Array`) にすることができますが、 `typedArray` を新しい型付き配列にコピーします。 `typedArray` の中のそれぞれの値は、新しい配列にコピーされる前にコンストラクターの対応する型に変換されます。新しい型付き配列の長さは `typedArray` 引数の長さと同じになります。
- `object`
  - : `object` 引数付きで呼び出されると、あたかも `TypedArray.from()` メソッドであるかのように新しい型付き配列が生成されます。
- `buffer`, `byteOffset`, `length`
  - : `buffer` と、オプションで `byteOffset` と `length` 引数を指定して呼び出されると、指定された {{jsxref("ArrayBuffer")}} を表示する型付き配列ビューが生成されます。 `byteOffset` および `length` 引数は、型付き配列ビューが表示するメモリ範囲を指定する。 両方を省略した場合は `buffer` の全てを表示し、 `length` のみを省略した場合は `buffer` の残りを表示します。

## 解説

**`Uint16Array()`** は型付き配列のコンストラクターで、プラットフォームのバイト順による 16 ビット符号なし整数値の配列を生成します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

ECMAScript 2015 から、 `Uint16Array` コンストラクターは構築に {{jsxref("Operators/new", "new")}} 演算子が必要になりました。 `Uint16Array` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxref("TypeError")}} が発生するようになりました。

```js example-bad
var dv = Uint16Array([1, 2, 3]);
// TypeError: calling a builtin Uint16Array constructor
// without new is forbidden
```

```js example-good
var dv = new Uint16Array([1, 2, 3]);
```

## 例

### 様々な方法による Uint16Array の生成

```js
// From a length
var uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Uint16Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint16Array([21, 31]);
var y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint16Array(buffer, 0, 4);

// From an iterable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint16 = new Uint16Array(iterable);
// Uint16Array[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Uint16Array.Uint16Array")}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
