---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: 9b38f886d21c5d0a428f58acb20c4d0fc6c2e098
---

{{JSRef}}

**`reduceRight()`** メソッドは、アキュームレーターと配列のそれぞれの値に対して (右から左へ) 関数を適用して、単一の値にします。

{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}

左から右へ適用する際は {{jsxref("Array.prototype.reduce()")}} を参照してください。

## 構文

```js
// アロー関数
reduceRight((accumulator, currentValue) => {
  /* … */
});
reduceRight((accumulator, currentValue, index) => {
  /* … */
});
reduceRight((accumulator, currentValue, index, array) => {
  /* … */
});
reduceRight((accumulator, currentValue, index, array) => {
  /* … */
}, initialValue);

// コールバック関数
reduceRight(callbackFn);
reduceRight(callbackFn, initialValue);

// コールバック畳み込み関数
reduceRight(function (accumulator, currentValue) {
  /* … */
});
reduceRight(function (accumulator, currentValue, index) {
  /* … */
});
reduceRight(function (accumulator, currentValue, index, array) {
  /* … */
});
reduceRight(function (accumulator, currentValue, index, array) {
  /* … */
}, initialValue);
```

### 引数

- `callbackFn`

  - : 配列内のそれぞれの値に対して実行される関数です。

    この関数は、以下の引数と共に呼び出されます。

    - `accumulator`
      - : コールバック関数の前回の呼び出しで返された値、もしくは、指定されていれば `initialValue` です。（下記参照）
    - `currentValue`
      - : 配列内で現在処理中の要素です。
    - `index`
      - : 配列内で現在処理中の要素の位置です。
    - `array`
      - : `reduceRight()` が呼び出された配列です。

- `initialValue` {{optional_inline}}
  - : `callbackFn` の最初の呼び出しのときに、アキュームレーターとして使用する値です。初期値がが渡されなかった場合は、配列の最後の要素が適用され、その要素が飛ばされます。また、 reduce または reduceRight を空の配列に対して初期値なしで呼び出すと `TypeError` になります。

### 返値

畳み込みによって得られた値です。

## 解説

`reduceRight` は、配列内に存在するそれぞれの要素に対してコールバック関数を一度ずつ実行します。配列内の穴は対象外です。初期値 (あるいは直前のコールバックの呼び出し結果)、現在の要素の値、現在の位置、繰り返しが行われる配列の 4 つの引数を受け取ります。

reduceRight の `callbackFn` の呼び出しは、以下のように見えるでしょう。

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

関数が初めて呼び出されたとき、`accumulator` と `currentValue` は、2 つの値のいずれかになります。 `initialValue` を指定して `reduceRight` を呼び出した場合、`accumulator` は `initialValue` と等しくなり、`currentValue` は配列の最後の値と等しくなります。`initialValue` が指定されなかった場合、`accumulator` は配列の最後の値に等しく、`currentValue` は最後から 2 番目の値に等しくなります。

配列が空で、`initialValue` が指定されなかった場合は、{{jsxref("TypeError")}} が発生します。配列に (位置に関わらず) 要素が 1 つしかなく、`initialValue` が指定されなかった場合、または `initialValue` が指定されたが配列が空だった場合は、`callbackFn` を呼び出されずに単独の値が返されます。

この関数を使用した場合について見てみましょう。

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

コールバックは 4 回呼び出され、ぞれぞれの呼び出しの引数と返値は次のようになります。

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `4`           | `3`            | `3`     | `7`          |
| Second call | `7`           | `2`            | `2`     | `9`          |
| Third call  | `9`           | `1`            | `1`     | `10`         |
| Fourth call | `10`          | `0`            | `0`     | `10`         |

`reduceRight` の返値は、コールバック呼び出しの最後の返値である (`10`) になります。

`initialValue` を渡した場合、結果は次のようになります。

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `10`          | `4`            | `4`     | `14`         |
| Second call | `14`          | `3`            | `3`     | `17`         |
| Third call  | `17`          | `2`            | `2`     | `19`         |
| Fourth call | `19`          | `1`            | `1`     | `20`         |
| Fifth call  | `20`          | `0`            | `0`     | `20`         |

`reduceRight` から返される値はこのときのもので、もちろん `20` です。

## 例

### 配列内のすべての値を合計する

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### 配列中の配列を平坦化する

```js
const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flattened = arrays.reduceRight((a, b) => a.concat(b), []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### 一連のコールバックを使用して非同期関数のリストを実行し、それぞれの結果を次のコールバックに渡す

```js
const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback,
    )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5); // -> 14

// same as:

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mult3(f3, x);
  add5(f2, input);
};
```

### reduce と reduceRight の違い

```js
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
```

### 合成可能な関数の定義

関数合成とは、各関数の出力を次の関数に渡し、最後の関数の出力を最終的な結果とする、関数を組み合わせるための仕組みです。この例では `reduceRight()` を使って、関数合成を実現しています。

Wikipedia の [Function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) も参照してください。

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// 渡された数値をインクリメントする
const inc = (n) => n + 1;

// 渡された数値を 2 倍にする
const double = (n) => n * 2;

// 合成関数を使用する
console.log(compose(double, inc)(2)); // 6

// 合成関数を使用する
console.log(compose(inc, double)(2)); // 5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.reduceRight` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduce()")}}
