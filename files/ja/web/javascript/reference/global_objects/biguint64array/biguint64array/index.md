---
title: BigUint64Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array
---

{{JSRef}}

**`BigUint64Array()`** は型付き配列のコンストラクターで、新しい {{jsxref("BigUint64Array")}} オブジェクト、すなわち 64 ビット符号なし整数の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxref("DataView")}} を使用してください。中身は `0n` で初期化されます。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。

## 構文

```
new BigUint64Array();
new BigUint64Array(length);
new BigUint64Array(typedArray);
new BigUint64Array(object);
new BigUint64Array(buffer [, byteOffset [, length]]);
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

### BigUint64Array を生成するための様々な方法

```js
// From a length
var biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new BigUint64Array([21n, 31n]);
console.log(arr[1]); // 31n

// From another TypedArray
var x = new BigUint64Array([21n, 31n]);
var y = new BigUint64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigUint64Array(buffer, 0, 4);

// From an iterable
var iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
var biguint64 = new BigUint64Array(iterable);
// BigUint64Array[1n, 2n, 3n]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript typed arrays](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("BigInt64Array")}}
- {{jsxref("DataView")}}
