---
title: Array.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`find()`** は {{jsxref("Array")}} インスタンスのメソッドで、提供されたテスト関数を満たす配列内の最初の要素を返します。
テスト関数を満たす値がない場合は、 {{jsxref("undefined")}} を返します。

- 配列内で見つかった要素の**インデックス**が必要な場合は、{{jsxref("Array/findIndex", "findIndex()")}} を使用してください。
- **値のインデックス**を検索する必要がある場合は、{{jsxref("Array/indexOf", "indexOf()")}} を使用してください。({{jsxref("Array/findIndex", "findIndex()")}} と似ていますが、それぞれの要素の等価性はテスト関数ではなく値でチェックします。)
- 配列内に値が**存在する**かどうかを調べる必要がある場合は、 {{jsxref("Array/includes", "includes()")}} を使用してください。
- 指定したテスト関数を満たす要素があるかどうかを調べる必要がある場合は、 {{jsxref("Array/some", "some()")}} を使用してください。
- 指定された検査関数を満たすすべての要素を探す必要がある場合は、 {{jsxref("Array/filter", "filter()")}} を使用してください。

{{InteractiveExample("JavaScript デモ: Array.prototype.find()", "shorter")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// 予想される結果: 12
```

## 構文

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返してください。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `array`
      - : `find()` を呼び出した元の配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

配列の中で、提供されたテスト関数を満たす最初の要素です。
見つからなかった場合は {{jsxref("undefined")}} を返します。

## 解説

`find()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの昇順に一度ずつ `callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。 `find()` はその要素を返し、配列の反復処理を停止します。もし `callbackFn` が真値を返さない場合、 `find()` は {{jsxref("undefined")}} を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節を参照してください。

`callbackFn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`find()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列内のオブジェクトをプロパティの一つで検索

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### アロー関数と構造分解の使用

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 配列内の最初の素数の検索

次の例は、配列の中で最初の素数である要素を返します。素数がない場合は、{{jsxref("undefined")}} を返します。

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

console.log([4, 6, 8, 12].find(isPrime)); // undefined, 見つからない
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

> [!NOTE]
> `isPrime()` の実装は、説明のみを目的としています。実際のアプリケーションでは、繰り返し計算を避けるために、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)などの、高度に最適化されたアルゴリズムを使用することをお勧めします。

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスする場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、まず `filter()` を使用して正の値を抽出し、次に `find()` を使用して、その値よりも小さい最初の要素を見つけます。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### 疎配列における find() の使用

疎配列の空のスロットは処理され、 `undefined` と同じように扱われます。

```js
// インデックスが 2, 3, 4 の位置に要素がない配列を宣言
const array = [0, 1, , , , 5, 6];

// 値が割り当てられているものに限らず、すべてのインデックスを表示
array.find((value, index) => {
  console.log("Visited index", index, "with value", value);
  return false;
});
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6

// 削除されたものを含め、すべてのインデックスを表示
array.find((value, index) => {
  // 最初の反復処理で要素 5 を削除
  if (index === 0) {
    console.log("Deleting array[5] with value", array[5]);
    delete array[5];
  }
  // 要素 5 は削除されたが、なお処理対象となる
  console.log("Visited index", index, "with value", value);
  return false;
});
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

### 配列でないオブジェクトに対する find() の呼び出し

`find()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // -1 < 0 であるため find() からは無視される
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.find` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.find` のポリフィル](https://www.npmjs.com/package/array.prototype.find)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
