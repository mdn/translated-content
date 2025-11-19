---
title: Array.prototype.findIndex()
short-title: findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`findIndex()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列内の指定されたテスト関数に合格する最初の要素のインデックスを返します。
テスト関数に合格する要素がなかった場合は `-1` を返します。

{{jsxref("Array/find", "find()")}} メソッドも参照してください。こちらのメソッドは、配列内で見つかった要素の位置ではなく、値を返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.findIndex()", "shorter")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));
// 予想される結果: 3
```

## 構文

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数です。一致する要素が得られたことを示すには[真値](/ja/docs/Glossary/Truthy)を返し、そうでなければ[偽値](/ja/docs/Glossary/Falsy)を返してください。この関数は以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 配列内で現在処理されている要素のインデックス（位置）です。
    - `array`
      - : `findIndex()` を呼び出した元の配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` 内で `this` として使われるオブジェクトです。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

テストに合格した配列の要素の位置を返します。それ以外の場合は、 `-1` を返します。

## 解説

`findIndex()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの昇順に一度ずつ `callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。 `findIndex()` はその要素を返し、配列の反復処理を停止します。もし `callbackFn` が真値を返さない場合、 `findIndex()` は `-1` を返します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧ください。

`callbackFn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findIndex()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列内の最初の素数の位置を検索する

次の例では、配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は `-1` を返します。

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

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

> [!NOTE]
> `isPrime()` の実装は、説明のみを目的としています。実際のアプリケーションでは、繰り返し計算を避けるために、[エラトステネスの篩](https://ja.wikipedia.org/wiki/エラトステネスの篩)などの、高度に最適化されたアルゴリズムを使用することをお勧めします。

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスする場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、最初に `filter()` を使用して正の値を抽出し、次に `findIndex()` を使用して、その値よりも小さい最初の要素を探します。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### 疎配列における findIndex() の使用

疎配列で `undefined` を検索することで、空スロットのインデックスを取得することができます。

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### 配列でないオブジェクトに対する findIndex() の呼び出し

`findIndex()` メソッドは `this` の `length` プロパティを読み込み、そのキーが `length` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // -1 < 0 なので findIndex() 空は無視される
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.findIndex` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.findIndex` のポリフィル](https://www.npmjs.com/package/array.prototype.findindex)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
