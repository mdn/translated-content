---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`find()`** は {{jsxref("Array")}} インスタンスのメソッドで、提供されたテスト関数を満たす配列内の最初の要素を返します。
テスト関数を満たす値がない場合は、 {{jsxref("undefined")}} を返します。

- 配列内で見つかった要素の**インデックス**が必要な場合は、{{jsxref("Array/findIndex", "findIndex()")}} を使用してください。
- **値のインデックス**を検索する必要がある場合は、{{jsxref("Array/indexOf", "indexOf()")}} を使用してください。({{jsxref("Array/findIndex", "findIndex()")}} と似ていますが、それぞれの要素の等価性はテスト関数ではなく値でチェックします。)
- 配列内に値が**存在する**かどうかを調べる必要がある場合は、 {{jsxref("Array/includes", "includes()")}} を使用してください。
- 指定したテスト関数を満たす要素があるかどうかを調べる必要がある場合は、 {{jsxref("Array/some", "some()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/array-find.html", "shorter")}}

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

`find()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの昇順に一度ずつ `callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。 `find()` はその要素を返し、配列の反復処理を停止します。もし `callbackFn` が真値を返さない場合、 `find()` は {{jsxref("undefined")}} を返します。

`callbackFn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`find()` は、呼び出した配列を変更 (mutate) しませんが、`callbackFn` で提供された関数は変更する可能性があります。しかし、配列の長さは最初に `callbackFn` が呼び出される*前に*設定されます。したがって、

- `callbackFn` は `find()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値はその要素が取得される時点の値になります。[削除された](/ja/docs/Web/JavaScript/Reference/Operators/delete) 要素は `undefined` であるかのように処理されます。

> [!WARNING]
> 上で説明したような同時進行の変更は、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

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

#### アロー関数と分割代入の使用

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 配列内の素数の検索

次の例は、配列内の素数を探します（配列内に素数が見つからない場合は {{jsxref("undefined")}} を返します）。

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, 見つからない
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### 疎配列における find() の使用

疎配列の空のスロットは処理され、 `undefined` と同じように扱われます。

```js
// インデックスが 2, 3, 4 の位置に要素がない配列を宣言
const array = [0, 1, , , , 5, 6];

// 値が割り当てられているものに限らず、すべてのインデックスを表示
array.find((value, index) => {
  console.log("Visited index", index, "with value", value);
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
