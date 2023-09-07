---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`findLastIndex()`** メソッドは、指定されたテスト関数を満たす配列の最後の要素の添字を返します。
テスト関数を満たす要素がなかった場合は、 -1 を返します。

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

{{jsxref("Array/findLast", "findLast()")}} メソッドも参照してください。こちらはテスト関数を満たす最後の要素の（位置ではなく）値を返します。

## 構文

```js
// アロー関数
findLastIndex((element) => {
  /* … */
});
findLastIndex((element, index) => {
  /* … */
});
findLastIndex((element, index, array) => {
  /* … */
});

// コールバック関数
findLastIndex(callbackFn);
findLastIndex(callbackFn, thisArg);

// インラインコールバック関数
findLastIndex(function (element) {
  /* … */
});
findLastIndex(function (element, index) {
  /* … */
});
findLastIndex(function (element, index, array) {
  /* … */
});
findLastIndex(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 配列内の要素をテストするのに使用される関数。

    この関数は以下の引数で呼び出されます。

    - `element`
      - : 配列内で現在処理されている要素。
    - `index`
      - : 配列内で現在処理されている要素の位置。
    - `array`
      - : `findLastIndex()` を呼び出した元の配列。

    コールバックは適切な要素が見つかったときに、[真値](/ja/docs/Glossary/Truthy)を返す必要があります。
    この要素の位置が `findLastIndex()` から返されます。

- `thisArg` {{optional_inline}}
  - : `callbackFn` の実行時に `this` として使用するオブジェクト。

### 返値

配列内で、テストを満たした最後の（最も大きな）要素の添字。
それ以外の場合は，一致する要素が見つからなければ -1 となります。

## 解説

`findLastIndex()` メソッドは、配列のそれぞれの要素に対して、添字の降順に一度ずつ `callbackFn` 関数を実行し、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで続けます。
そして、 `findLastIndex()` がその要素の添字を返し、配列のイテレーターを停止します。
もし `callbackFn` が真値を返さなかった場合、 `findLastIndex()` は `-1` を返します。

`callbackFn` は値が割り当てられている要素だけではなく、配列の「すべての」添字に対して呼び出されます。
すなわち、不連続な配列では、割り当てられた値のみを参照するメソッドと比較して、効率が悪くなります。

`thisArg` 引数が `findLastIndex()` に指定された場合、これを `this` の値として `callbackFn` のそれぞれの呼び出しが行われます。
指定されなかった場合は、 {{jsxref("undefined")}} が使用されます。

`findLastIndex()` メソッドは呼び出し元の配列を変更しませんが、 `callbackFn` に指定された関数は変更することがあります。
`findLastIndex()` が処理する要素は、 `callbackFn` の最初の呼び出しの「前」に設定されます。
したがって、

- `callbackFn` は、 `findLastIndex()` の呼び出しが始まった後に配列に追加された要素に対しては呼び出されません。
- 既に呼び出されたことのある添字に割り当てられた要素に対して、再び `callbackFn` が呼び出されることはありません。
- 範囲外の添字に割り当てられた要素に対しては、 `callbackFn` は呼び出されません。
- 既存の、まだ呼び出されていない配列の要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値は、 `findLastIndex()` がその要素の添字を呼び出したときの値になります。
- {{jsxref("Operators/delete", "削除", "", 1)}}された要素に対しても呼び出されます。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

## 例

### 配列内の最後の素数の位置を探す

以下の例では、配列の最後の要素が素数である場合の添字を返します。は素数が存在しない場合は `-1` を返します。

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

### アロー関数を使用した添字の検索

以下の例では、アロー関数を使用して果物の添字を探します。
結果は {{jsxref("Array/findIndex", "findIndex()")}} を使用した場合と同じになることに注意してください。

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findLastIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
