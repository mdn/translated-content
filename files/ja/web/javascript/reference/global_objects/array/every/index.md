---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`every()`** メソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}

## 構文

```js
// アロー関数
every((element) => {
  /* … */
});
every((element, index) => {
  /* … */
});
every((element, index, array) => {
  /* … */
});

// コールバック関数
every(callbackFn);
every(callbackFn, thisArg);

// インラインコールバック関数
every(function (element) {
  /* … */
});
every(function (element, index) {
  /* … */
});
every(function (element, index, array) {
  /* … */
});
every(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 各要素に対してテストを実行する関数です。

    この関数は、以下の引数を伴って呼び出されます。

    - `element`
      - : 現在処理されている要素です。
    - `index`
      - : 現在処理されている要素の添字です。
    - `array`
      - : `every` が実行されている配列です。

- `thisArg` {{Optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用すされる値です。

### 返値

`callbackFn` 関数が配列のすべての要素について{{Glossary("truthy", "真値")}}を返した場合は **`true`**。それ以外は **`false`**。

## 解説

`every` は、与えられた `callbackFn` 関数を、配列に含まれる各要素に対して一度ずつ、`callbackFn` が{{Glossary("falsy", "偽値")}}を返す要素が見つかるまで呼び出します。そのような要素が見つかると、`every` メソッドはただちに `false` を返します。`callbackFn` がすべての要素に対して{{Glossary("truthy", "真値")}}を返した場合、`every` は `true` を返します。

> **メモ:** このメソッドを空の配列に対して呼び出すと、無条件に `true` を返します。

`callbackFn` は値が代入されている配列の要素に対してのみ呼び出されます。つまり、すでに削除された要素や、まだ値が代入されていない要素に対しては呼び出されません。

`callbackFn` は、要素の値、要素の添字、走査されている Array オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が `every` に与えられると、それがコールバックの `this` として使用されます。それ以外の場合は `undefined` が `this` の値として使われます。`callbackFn` が最終的に監視できる `this` の値は、[関数から見た `this` の決定に関する一般的なルール](/ja/docs/Web/JavaScript/Reference/Operators/this)によって決定されます。

`every` は呼び出された配列を変化させません。

`every` によって処理される要素の範囲は、`callbackFn` が最初に呼び出される前に設定されます。`callbackFn` は、`every` の呼び出しが開始された後に追加された要素に対しては、実行されません。既存の配列要素が変更されたり、削除された場合、`callbackFn` に渡される値は `every` がそれらを訪れた時点での値になり、`every` が削除された要素を訪問することはありません。

`every` は数学における「∀ （すべての / for all）」記号と同様のふるまいをします。具体的に言うと、空の配列に対しては `true` を返します。([空集合](https://ja.wikipedia.org/wiki/空集合#性質)のすべての要素が与えられた任意の条件を満たすことは[空虚に真](https://en.wikipedia.org/wiki/Vacuous_truth)です。)

## 例

### すべての配列要素の大きさをテストする

次の例は、配列内のすべての要素が 10 よりも大きいかどうかテストします。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### ある配列が別の配列の部分集合であるかどうかを調べる

以下の例では、ある配列のすべての要素が別の配列に存在するかどうかをテストしています。

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### アロー関数の使用

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)はより短い構文で同じテストを提供します。

```js
[12, 5, 8, 130, 44].every((x) => x >= 10); // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true
```

### 初期配列への影響（変更、追加、削除）

次の例は、配列が変更されたときに `every` メソッドの動作をテストするものです。

```js
// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.every` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
