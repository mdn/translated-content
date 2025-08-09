---
title: Array.prototype.findLastIndex()
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`findLastIndex()`** は {{jsxref("Array")}} のメソッドで、この配列を逆順に反復処理し、指定されたテスト関数を満たす配列の最後の要素のインデックスを返します。
テスト関数を満たす要素がなかった場合は、 -1 を返します。

{{jsxref("Array/findLast", "findLast()")}} メソッドも参照してください。こちらはテスト関数を満たす最後の要素の（位置ではなく）値を返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.findLastIndex()", "shorter")}}

```js interactive-example
const array = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array.findLastIndex(isLargeNumber));
// 予想される結果: 3
// Index of element with value: 130
```

## 構文

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返してください。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `array`
      - : `findLastIndex()` を呼び出した元の配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

配列内で、テストを満たした最後の（最も大きな）要素のインデックス。
それ以外の場合は，一致する要素が見つからなければ `-1` となります。

## 解説

`findLastIndex()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列のそれぞれの要素に対して、インデックスの降順に一度ずつ指定された `callbackFn` 関数を実行し、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで続けます。そして、 `findLastIndex()` がその要素のインデックスを返し、配列のイテレーターを停止します。もし `callbackFn` が真値を返さなかった場合、 `findLastIndex()` は `-1` を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧ください。

`callbackFn` は、値が割り当てられているものに限らず、配列中のすべてのインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findLastIndex()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列内の最後の素数の位置を探す

以下の例では、配列の最後の要素が素数である場合のインデックスを返します。素数が存在しない場合は `-1` を返します。

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

> [!NOTE]
> `isPrime()` の実装は、説明のみを目的としています。実際のアプリケーションでは、繰り返し計算を避けるために、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)などの、高度に最適化されたアルゴリズムを使用することをお勧めします。

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスする場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、最初に `filter()` を使用して正の値を抽出し、次に `findLastIndex()` を使用して、その隣よりも小さい最後の要素を探します。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 6
```

### 疎配列に対する findLastIndex() の使用

疎配列から `undefined` を検索し、空のスロットのインデックスを取得することができます。

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### 配列でないオブジェクトに対する findLastIndex() の呼び出し

`findLastIndex()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // length が 3 であるため findLastIndex() から無視される
};
console.log(
  Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findLastIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#array-find-from-last)
- [es-shims による `Array.prototype.findLastIndex` のポリフィル](https://www.npmjs.com/package/array.prototype.findlastindex)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
