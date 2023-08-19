---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`fill()`** メソッドは、開始位置（既定値は `0`）から終了位置（既定値は `array.length`）までのすべての要素を、静的な値に変更した配列を返します。

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## 構文

```js
fill(value);
fill(value, start);
fill(value, start, end);
```

### 引数

- `value`
  - : 配列に設定する値です。
- `start` {{optional_inline}}
  - : 開始する位置です。既定値は `0` です。
- `end` {{optional_inline}}
  - : 終了する位置です。既定値は `arr.length` です。

### 返値

`value` で埋められて変更された配列です。

## 解説

- `start` が負の場合 `array.length + start` として扱われます。
- `end` が負の場合 `array.length + end` として扱われます。
- `fill` は意図的に一般化されています。 `this` が `Array` オブジェクトである必要はありません。
- `fill` は変更を行うメソッドです。配列そのものを変更して返します。コピーを返すのではありません。
- 最初の引数がオブジェクトの場合、配列の各スロットはそのオブジェクトを参照します。

> **メモ:** `Array.prototype.fill()` を空の配列に対して使用すると、配列に変更するものがないので何も変更されません。
> 配列を宣言する際に `Array.prototype.fill()` を使用する場合は、スロットを配列に割り当てるようにしてください。
> [例はこちら](#fill_を使用して空の配列を生成)。

## 例

### fill の使用

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4)); // {0: 4, 1: 4, 2: 4, length: 3}

// 配列の各スロットから参照される、単一のオブジェクト。
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### fill() を使用してすべて 1 の行列を作成

この例では、 Octave や MATLAB の `ones()` 関数のように、すべて 1 の行列を作成する方法を示しています。

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 大きさが 4、内容が 1 の配列を作成
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### fill() を使用して空の配列を生成

この例では、配列に値を入力し、すべての要素に詳細な値を設定する方法を示しています。
`end` 引数を指定する必要はありません。

```js
const tempGirls = Array(5).fill("girl", 0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.fill` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
