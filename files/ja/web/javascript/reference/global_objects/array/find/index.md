---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

`find()` メソッドは、提供されたテスト関数を満たす配列内の最初の要素を返します。
テスト関数を満たす値がない場合は、 {{jsxref("undefined")}} を返します。

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

- 配列内で見つかった要素の**添字**が必要な場合は、{{jsxref("Array/findIndex", "findIndex()")}} を使用してください。
- **値の添字**を検索する必要がある場合は、{{jsxref("Array/indexOf", "indexOf()")}} を使用してください。({{jsxref("Array/findIndex", "findIndex()")}} と似ていますが、それぞれの要素の等価性はテスト関数ではなく値でチェックします。)
- 配列内に値が**存在する**かどうかを調べる必要がある場合は、 {{jsxref("Array/includes", "includes()")}} を使用してください。
- 指定したテスト関数を満たす要素があるかどうかを調べる必要がある場合は、 {{jsxref("Array/some", "some()")}} を使用してください。

## 構文

```js
// アロー関数
find((element) => {
  /* … */
});
find((element, index) => {
  /* … */
});
find((element, index, array) => {
  /* … */
});

// コールバック関数
find(callbackFn);
find(callbackFn, thisArg);

// インラインコールバック関数
find(function (element) {
  /* … */
});
find(function (element, index) {
  /* … */
});
find(function (element, index, array) {
  /* … */
});
find(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列内の各要素に対して実行する関数です。

    この関数は以下の引数を伴って呼び出されます。

    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素の添字 (位置) です。
    - `array`
      - : `find` を呼び出した元の配列です。

    コールバック関数は、一致する要素が見つかった場合は[真値](/ja/docs/Glossary/Truthy)を返す必要があります。

- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で {{jsxref("Operators/this", "this")}} として使われるオブジェクトです。

### 返値

配列の中で、提供されたテスト関数を満たす最初の要素です。
見つからなかった場合は {{jsxref("undefined")}} を返します。

## 解説

`find` メソッドは、配列のそれぞれの添字に対して一度ずつ、`callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。その場合、`find` は直ちにその要素の値を返します。そうでなければ、`find` は {{jsxref("undefined")}} を返します。

`callbackFn` は、値が割り当てられているものに限らず、配列中の<em>すべて</em>の添字に対して呼び出されます。すなわち、疎配列では値が割り当てられているもののみを呼び出すメソッドに比べて効率的ではないことを意味します。

`thisArg` 引数が `find` に与えられた場合、`callbackFn` の呼び出しのたびに、その内部で `this` 値として使用されます。この引数を省略した場合は {{jsxref("undefined")}} が使用されます。

`find` は、呼び出した配列を変更 (mutate) しませんが、`callbackFn` で提供された関数は変更する可能性があります。その場合、`find` によって処理される各要素は、最初に `callbackFn` が呼び出される*前に*設定されます。したがって、

- `callbackFn` は `find` の呼び出しが始まった後に追加された要素に対しては実行されません。
- 既に処理した位置に割り当てられた要素、または範囲外のr要素であった場合は、 `callbackFn` が実行されません。
- 配列の、既存のまだ呼び出していない要素が `callbackFn` によって変更された場合、`callbackFn` に渡される値は `find` がその要素の添字を処理した時点での値になります。
- {{jsxref("Operators/delete", "削除")}}された要素も処理されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

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

次の例は、配列内の素数を探します (配列内に素数が見つからない場合は {{jsxref("undefined")}} を返します)。

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

以下の例は存在せず削除された要素が処理*される*こと、コールバックに渡される値が処理時点での値であることを示しています。

```js
// 添字が 2, 3, 4 の位置に要素がない配列を宣言
const array = [0, 1, , , , 5, 6];

// 値が割り当てられているものに限らず、すべての添字を表示
array.find((value, index) => {
  console.log("Visited index ", index, " with value ", value);
});

// 削除されたものを含め、すべての添字を表示
array.find((value, index) => {
  // 初回で要素 5 を削除
  if (index === 0) {
    console.log("Deleting array[5] with value ", array[5]);
    delete array[5];
  }
  // 要素 5 は削除されても処理される
  console.log("Visited index ", index, " with value ", value);
});
// 期待される出力:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// array[5] にある値 5 を削除
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.find` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findIndex()")}} – 要素を見つけて位置を返す
- {{jsxref("Array.prototype.includes()")}} – 配列内に値が存在するかどうかをテストする
- {{jsxref("Array.prototype.filter()")}} – 一致しない要素をすべて除外する
- {{jsxref("Array.prototype.every()")}} – すべての要素をテストする
- {{jsxref("Array.prototype.some()")}} – 1 つの要素が一致するまでテストする
