---
title: Uint8ClampedArray() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray
---

{{JSRef}}

**`Uint8ClampedArray()`** は型付き配列のコンストラクターで、 0-255 に制約される 8 ビット符号なし整数値の配列を生成します。指定された値が \[0,255] の範囲を超えた場合、 0 または 255 が代わりに設定されます。整数以外を指定しようとすると、最も近い整数が設定されます。中身は `0` で初期化されます。生成されると、配列の中の要素はオブジェクトのメソッドを使用するか、配列の標準的な添字の構文を使用するか (すなわち、ブラケット構文を使用するか) して参照することができます。

## 構文

```
new Uint8ClampedArray(); // new in ES2017
new Uint8ClampedArray(length);
new Uint8ClampedArray(typedArray);
new Uint8ClampedArray(object);
new Uint8ClampedArray(buffer [, byteOffset [, length]]);
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

## 例

### 様々な方法による Uint8ClampedArray の生成

```js
// 長さを指定
var uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// 配列から
var arr = new Uint8ClampedArray([21, 31]);
console.log(arr[1]); // 31

// 他の型付き配列から
var x = new Uint8ClampedArray([21, 31]);
var y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// ArrayBuffer から
var buffer = new ArrayBuffer(8);
var z = new Uint8ClampedArray(buffer, 1, 4);

// 反復可能オブジェクトから
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uintc8 = new Uint8ClampedArray(iterable);
// Uint8ClampedArray[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Uint8ClampedArray.Uint8ClampedArray")}}

### 互換性メモ

ECMAScript 2015 から、 `Uint8ClampedArray` コンストラクターは構築に {{jsxref("Operators/new", "new")}} 演算子が必要になりました。 `Uint8ClampedArray` コンストラクターを `new` なしで関数として呼び出すと、 {{jsxref("TypeError")}} が発生するようになりました。

```js example-bad
var dv = Uint8ClampedArray([1, 2, 3]);
// TypeError: calling a builtin Uint8ClampedArray constructor
// without new is forbidden
```

```js example-good
var dv = new Uint8ClampedArray([1, 2, 3]);
```

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
