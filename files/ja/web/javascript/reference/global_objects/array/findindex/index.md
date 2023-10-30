---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`findIndex()`** メソッドは、配列内の**指定されたテスト関数に合格する**最初の要素の**位置**を返します。テスト関数に合格する要素がない場合を含め、それ以外の場合は `-1` を返します。

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

{{jsxref("Array/find", "find()")}} メソッドも参照してください。このメソッドは、配列内で見つかった要素の位置ではなく、**値**を返します。

## 構文

```js
// アロー関数
findIndex((element) => {
  /* … */
});
findIndex((element, index) => {
  /* … */
});
findIndex((element, index, array) => {
  /* … */
});

// コールバック関数
findIndex(callbackFn);
findIndex(callbackFn, thisArg);

// インラインコールバック関数
findIndex(function (element) {
  /* … */
});
findIndex(function (element, index) {
  /* … */
});
findIndex(function (element, index, array) {
  /* … */
});
findIndex(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列内のそれぞれの値に対して実行される関数で、条件を満たす要素が発見されたことを示す `true` が返るまで続けられます。

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列内で現在処理されている要素。
    - `index`
      - : 配列内で現在処理されている要素の位置。
    - `array`
      - : `findIndex()` を呼び出した元の配列。

    コールバックは適切な要素が見つかったときに、[真値](/ja/docs/Glossary/Truthy)を返す必要があります。
    この要素の位置が `findIndex()` から返されます。

- `thisArg` {{optional_inline}}
  - : 任意で、 `callbackFn` を実行する時に `this` として使うオブジェクト。

### 返値

テストに合格した配列の要素の位置を返します。それ以外の場合は、 `-1` を返します。

## 解説

`findIndex()` メソッドは、配列のそれぞれの位置に対して `callbackFn` を 1 回ずつ呼び出し、 `callbackFn` が{{Glossary("truthy", "真値")}}を返すものを見つけるまで繰り返します。

そのような要素が見つかったら、 `findIndex()` はすぐにその要素の位置を返します。 `callbackFn` が真値を返すものがなかった場合（または配列の `length` が `0` であった場合）、 `findIndex()` は `-1` を返します。

> **メモ:** {{jsxref("Array/some", "some()")}} などの他の配列メソッドとは異なり、 `callbackFn` は値が割り当てられていない位置でも実行されます。

`callbackFn` は 3 つの引数で呼び出されます。

1. その要素の値
2. その要素の位置
3. 走査されている配列オブジェクト

`thisArg` 引数を `findIndex()` に与えた場合、それぞれの `callbackFn` の呼び出し時に、その与えたオブジェクトが `this` として使用されます。この引数を省略した場合は {{jsxref("undefined")}} になります。

`findIndex()` で処理される要素の範囲は、 `callbackFn` が最初に呼び出される前に設定されます。既に処理済みの位置に割り当てられた要素や、その範囲を超えた要素に対しては、 `callbackFn` が実行されません。 `callbackFn` は最初の `findIndex()` の呼び出し以降に配列に追加された要素は処理しません。配列内で未処理の既存の要素が `callbackFn` によって変更された場合、 `callbackFn` へ渡される値は `findIndex()` がその要素の位置を処理する時点での値になります。{{jsxref("Operators/delete", "削除", "", 1)}}された値も処理対象になります。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

### 配列内の素数の位置を検索する

次の例では、配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は `-1` を返します。

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

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### アロー関数を使用して位置を検索する

次の例では、アロー関数を使用してフルーツの位置を検索しています。

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
