---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`findLast()`** メソッドは、指定されたテスト関数を満たす配列の最後の要素の値を返します。
テスト関数を満たす要素がない場合は {{jsxref("undefined")}} が返されます。

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

検索する必要がある場合、以下のメソッドがあります。

- 一致する最初の要素を得るには、 {{jsxref("Array/find", "find()")}} を使用してください。
- 配列内で一致する最後の位置を得るには、 {{jsxref("Array/findLastIndex", "findLastIndex()")}} を使用してください。
- 値の位置を得るには、 {{jsxref("Array/indexOf", "indexOf()")}} を使用してください。
  （これは {{jsxref("Array/findIndex", "findIndex()")}} に似ていますが、テスト関数を使用するのではなく、それぞれの要素が値と等しいかどうかを調べます。）
- 配列に値が存在するかどうかを調べるには、 {{jsxref("Array/includes", "includes()")}} を使用してください。
  こちらも、テスト関数を使用する代わりに、各要素が値と等しいかどうかを調べます。
- 指定されたテスト関数を満たす要素を得るには {{jsxref("Array/some", "some()")}} を使用してください。

## 構文

```js
// アロー関数
findLast((element) => {
  /* … */
});
findLast((element, index) => {
  /* … */
});
findLast((element, index, array) => {
  /* … */
});

// コールバック関数
findLast(callbackFn);
findLast(callbackFn, thisArg);

// インラインコールバック関数
findLast(function (element) {
  /* … */
});
findLast(function (element, index) {
  /* … */
});
findLast(function (element, index, array) {
  /* … */
});
findLast(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列の要素をテストするために使用する関数です。

    この関数は以下の引数で呼び出されます。

    - `element`
      - : 配列の現在の要素。
    - `index`
      - : 配列内の現在の要素の添字（位置）。
    - `array`
      - : `findLast()` が呼び出された配列。

    コールバックは適切な要素が得られたことを示すために、[真値](/ja/docs/Glossary/Truthy)を返さなければなりません。
    この要素の値が `findLast()` によって返されます。

- `thisArg` {{optional_inline}}
  - : `callbackFn` の実行時に {{jsxref("Operators/this", "this")}} として使用するオブジェクト。

### 返値

指定されたテスト関数を満たす、配列中の最も大きい添字の値を持つ要素の値。一致する要素が見つからない場合は {{jsxref("undefined")}} となります。

## 解説

`findLast()` メソッドは `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで、配列のそれぞれの要素に対して、添字の降順で `callbackFn` 関数を一度ずつ実行します。
その後、 `findLast()` はその要素の値を返し、配列の反復処理を停止します。
もし `callbackFn` が真値を返さなかった場合、 `findLast()` は {{jsxref("undefined")}} を返します。

`callbackFn` は、値が割り当てられている添字だけでなく、配列のすべての添字に対して呼び出されます。
これは、代入された値のみを参照するメソッドと比較して、不連続の配列では効率が悪くなることを意味しています。

`findLast()` に `thisArg` 引数が指定された場合は、 `callbackFn` を呼び出すたびに `this` の値として使用されます。
指定されなかった場合は、{{jsxref("undefined")}} が使用されます。

`findLast()` メソッドは呼び出された配列を変更しませんが、 `callbackFn` に指定された関数は変更することができます。
`findLast()` が処理する要素は、 `callbackFn` の最初の呼び出しの前に設定されます。
したがって、

- `callbackFn` は、 `findLast()` の呼び出しが始まった後に配列に追加された要素に対しては呼び出されません。
- 既に呼び出されたことのある添字に割り当てられた要素に対して、再び `callbackFn` が呼び出されることはありません。
- 範囲外の添字に割り当てられた要素に対しては、 `callbackFn` は呼び出されません。
- 既存の、まだ呼び出されていない配列の要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値は、 `findLast()` がその要素の添字を呼び出したときの値になります。
- {{jsxref("Operators/delete", "削除", "", 1)}}された要素に対しても呼び出されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

### 要素のプロパティに一致する配列の最後のオブジェクトを探す

この例では、配列要素のプロパティに基づいたテストを作成する方法を示します。

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// 在庫がない場合は真値を返す
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### アロー関数と分割代入の使用

先の例は、アロー関数と[オブジェクトの分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#オブジェクトの分割代入)を使用して書くことができるかもしれません。

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);

console.log(result);
// { name: "fish", quantity: 1 }
```

### 配列中の最後の素数を探す

以下の例では、配列の最後の要素で素数を探します（素数がない場合は {{jsxref("undefined")}} を返しています）。

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### 存在しない要素や削除された要素に対しても呼び出される

以下の例では、存在しない要素や削除された要素に対してもコールバックが呼び出され、渡された値が訪問時の値であることを示しています。

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// Shows all indexes, including deleted
array.findLast((value, index) => {
  // Delete element 5 on first iteration
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log(`Visited index ${index} with value ${value}`);
});
// expected output:
// > "Visited index 6 with value 6"
// > "Visited index 5 with value 5"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
// > "Deleting array[5] with value 5"
// > "Visited index 6 with value 6"
// > "Visited index 5 with value undefined"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findLast` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findIndex()")}} – 最後の要素を見つけて位置を返す
- {{jsxref("Array.prototype.includes()")}} – 配列内に値が存在するかどうかをテストする
- {{jsxref("Array.prototype.filter()")}} – 一致しない要素をすべて除外する
- {{jsxref("Array.prototype.every()")}} – すべての要素をテストする
- {{jsxref("Array.prototype.some()")}} – 1 つの要素が一致するまでテストする
