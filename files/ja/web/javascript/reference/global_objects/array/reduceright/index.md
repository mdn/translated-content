---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`reduceRight()`** は {{jsxref("Array")}} インスタンスのメソッドで、アキュームレーターと配列のそれぞれの値に対して（右から左へ）関数を適用して、単一の値にします。

左から右へ適用する場合は {{jsxref("Array.prototype.reduce()")}} を参照してください。

{{InteractiveExample("JavaScript デモ: Array.prototype.reduceRight()")}}

```js interactive-example
const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result);
// 予想される結果: Array [4, 5, 2, 3, 0, 1]
```

## 構文

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### 引数

- `callbackFn`
  - : 配列の各要素に対して実行される関数です。その返値は、次に `callbackFn` を呼び出す際の `accumulator` 引数の値になります。最後の呼び出しでは、返値は `reduceRight()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumulator`
      - : 前回の `callbackFn` の呼び出し結果の値です。初回の呼び出しでは `initialValue` が指定されていた場合はその値、そうでない場合はこの配列の末尾の要素の値です。
    - `currentValue`
      - : 現在の要素の値です。初回の呼び出しでは `initialValue` が指定された場合は末尾の要素の値であり、そうでない場合は末尾から 2 番目の要素の値です。
    - `currentIndex`
      - : `currentValue` のインデックス位置です。初回の呼び出しでは、 `initialValue` が指定された場合は `array.length - 1`、そうでない場合は `array.length - 2` です。
      - : `reduceRight()` が呼び出された配列です。

- `initialValue` {{optional_inline}}
  - : `callbackFn` の最初の呼び出しのときに、アキュームレーターとして使用する値です。初期値がが渡されなかった場合は、配列の最後の要素が適用され、その要素が飛ばされます。また、 `reduceRight()` を空の配列に対して初期値なしで呼び出すと `TypeError` になります。

### 返値

畳み込みによって得られた値です。

## 解説

`reduceRight()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。「縮小」コールバック関数を配列に含まれる各要素に対して昇順に一度ずつ呼び出し、その結果を単一の値に積算します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧下さい。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

他の[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)とは異なり、 `reduceRight()` は `thisArg` 引数を受け入れません。 `callbackFn` は常に `undefined` を `this` として呼び出され、 `callbackFn` が厳格モードでない場合は `globalThis` に置き換えられます。

`reduceRight()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

[reduce() を使用すべきでない場合](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#reduce_を使用すべきでない場合)で説明されている `reduce` に関するすべての注意点は、`reduceRight` にも当てはまります。JavaScript には遅延評価の意味づけがないため、`reduce` と `reduceRight` の間にパフォーマンスの違いはありません。

## 例

### 初期値がない場合の reduceRight() の動作

reduceRight の `callbackFn` の呼び出しは次のようになります：

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

### 初期値がある場合の reduceRight() の動作

ここでは、同じアルゴリズムを使用して同じ配列を縮小しますが、 `reduceRight()` の 2 つ目の引数である `initialValue` として `10` を使用します。

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

### 配列内のすべての値を合計する

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
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
const mul3 = (callback, x) => {
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

const computation = waterfall(add5, mul3, sub2, split, add, div4);
computation(console.log, 5); // 14 をログ出力

// 次のものと同じ

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mul3(f3, x);
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

### reduceRight() を疎配列で使用

`reduceRight()` は疎配列の欠落している要素をスキップしますが、値が `undefined` の場合はスキップしません。

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### 配列以外のオブジェクトに対する reduceRight() の呼び出し

`reduceRight()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // length が 3 であるため reduceRight() からは無視される
};
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y));
// -1 すなわち 4 - 3 - 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.reduceRight` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.reduceRight` のポリフィル](https://www.npmjs.com/package/array.prototype.reduceright)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
