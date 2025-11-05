---
title: Array.prototype.findLast()
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`findLast()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列を逆順に反復処理し、指定されたテスト関数を満たす最初の要素の値を返します。
テスト関数を満たす要素がない場合は {{jsxref("undefined")}} が返されます。

検索を行う場合は以下のメソッドが必要です。

- 一致する最初の要素を得るには、 {{jsxref("Array/find", "find()")}} を使用してください。
- 配列内で一致する最後の位置を得るには、 {{jsxref("Array/findLastIndex", "findLastIndex()")}} を使用してください。
- 値の位置を得るには、 {{jsxref("Array/indexOf", "indexOf()")}} を使用してください。
  （これは {{jsxref("Array/findIndex", "findIndex()")}} に似ていますが、テスト関数を使用するのではなく、それぞれの要素が値と等しいかどうかを調べます。）
- 配列に値が存在するかどうかを調べるには、 {{jsxref("Array/includes", "includes()")}} を使用してください。
  こちらも、テスト関数を使用する代わりに、各要素が値と等しいかどうかを調べます。
- 指定されたテスト関数を満たす要素を得るには {{jsxref("Array/some", "some()")}} を使用してください。

{{InteractiveExample("JavaScript デモ: Array.prototype.findLast()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const found = array.findLast((element) => element > 45);

console.log(found);
// 予想される結果: 130
```

## 構文

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返してください。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `array`
      - : `findLast()` を呼び出した元の配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

指定されたテスト関数を満たす、配列中の最も大きいインデックス値を持つ要素の値。一致する要素が見つからない場合は {{jsxref("undefined")}} となります。

## 解説

`findLast()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの降順に一度ずつ `callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。 `findLast()` はその要素を返し、配列の反復処理を停止します。もし `callbackFn` が真値を返さない場合、 `findLast()` は {{jsxref("undefined")}} を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧ください。

`callbackFn` は、値が割り当てられているものに限らず、配列中のすべてのインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findLast()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

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

#### アロー関数と構造分解の使用

先の例は、アロー関数と[オブジェクトの構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#オブジェクトの構造分解)を使用して書くことができるかもしれません。

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

以下の例では、配列の最後の要素で素数の最後の要素を返します。素数がない場合は {{jsxref("undefined")}} を返しています。

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

> [!NOTE]
> `isPrime()` の実装は、説明のみを目的としています。実際のアプリケーションでは、繰り返し計算を避けるために、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)などの、高度に最適化されたアルゴリズムを使用することをお勧めします。

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスする場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、最初に `filter()` を使用して正の値を抽出し、次に `findLast()` を使用して、その隣よりも小さい最後の要素を探します。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLast((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 2
```

### findLast() を疎配列で使用

疎配列の空のスロットは処理され、 `undefined` と同じように扱われます。

```js
// インデックス 2、3、4 に要素がない配列の宣言
const array = [0, 1, , , , 5, 6];

// 値が割り当てられているインデックスだけでなく、すべてのインデックスを表示
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
  return false;
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0

// 削除されたインデックスを含め、すべてのインデックスを表示
array.findLast((value, index) => {
  // Delete element 5 on first iteration
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // 要素 5 は削除されたにもかかわらず、処理される
  console.log(`Visited index ${index} with value ${value}`);
  return false;
});
// Deleting array[5] with value 5
// Visited index 6 with value 6
// Visited index 5 with value undefined
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0
```

### 配列でないオブジェクトに対する findLast() の呼び出し

`findLast()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // length が 3 なので findLast() は無視される
};
console.log(
  Array.prototype.findLast.call(arrayLike, (x) => Number.isInteger(x)),
); // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findLast` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-find-from-last)
- [es-shims による `Array.prototype.findLast` のポリフィル](https://www.npmjs.com/package/array.prototype.findlast)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
