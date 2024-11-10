---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`findLastIndex()`** は {{jsxref("Array")}} のメソッドで、この配列を逆順に反復処理し、指定されたテスト関数を満たす配列の最後の要素のインデックスを返します。
テスト関数を満たす要素がなかった場合は、 -1 を返します。

{{jsxref("Array/findLast", "findLast()")}} メソッドも参照してください。こちらはテスト関数を満たす最後の要素の（位置ではなく）値を返します。

{{EmbedInteractiveExample("pages/js/array-findlastindex.html", "shorter")}}

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

`findLastIndex()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列のそれぞれの要素に対して、インデックスの降順に一度ずつ指定された `callbackFn` 関数を実行し、 `callbackFn` が[真値](/ja/docs/Glossary/Truthy)を返すまで続けます。そして、 `findLastIndex()` がその要素のインデックスを返し、配列のイテレーターを停止します。もし `callbackFn` が真値を返さなかった場合、 `findLastIndex()` は `-1` を返します。

`callbackFn` は値が割り当てられている要素だけではなく、配列の「すべての」インデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で空のスロットは `undefined` と同じ動作をします。

`findLastIndex()` メソッドは呼び出し元の配列を変更しませんが、 `callbackFn` に指定された関数は変更することがあります。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は `findLastIndex()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値はその要素が取得される時点の値になります。[削除された](/ja/docs/Web/JavaScript/Reference/Operators/delete) 要素は `undefined` であるかのように処理されます。

> [!WARNING]
> 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

`findLastIndex()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列内の最後の素数の位置を探す

以下の例では、配列の最後の要素が素数である場合のインデックスを返します。素数が存在しない場合は `-1` を返します。

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
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
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
