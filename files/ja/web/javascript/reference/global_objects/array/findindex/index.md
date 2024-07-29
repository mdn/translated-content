---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`findIndex()`** は {{jsxref("Array")}} インスタンスのメソッドで、配列内の指定されたテスト関数に合格する最初の要素のインデックスを返します。
テスト関数に合格する要素がなかった場合は `-1` を返します。

{{jsxref("Array/find", "find()")}} メソッドも参照してください。こちらのメソッドは、配列内で見つかった要素の位置ではなく、値を返します。

{{EmbedInteractiveExample("pages/js/array-findindex.html", "shorter")}}

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

`findIndex()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。配列の要素のそれぞれに対して、インデックスの昇順に一度ずつ `callbackFn` 関数を実行し、`callbackFn` 関数が[真値](/ja/docs/Glossary/Truthy)を返すまで繰り返します。 `findIndex()` はその要素を返し、配列の反復処理を停止します。もし `callbackFn` が真値を返さない場合、 `findIndex()` は `-1` を返します。

`callbackFn` は、値が割り当てられているものに限らず、配列中の*すべて*のインデックスに対して呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)では、空のスロットは `undefined` と同じ動作をします。

`findIndex()` は、呼び出した配列を変更 (mutate) しませんが、`callbackFn` で提供された関数は変更する可能性があります。しかし、配列の長さは最初に `callbackFn` が呼び出される*前に*設定されます。したがって、

- `callbackFn` は `findIndex()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に訪問した位置を変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ訪問していない既存の配列要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値はその要素が取得される時点の値になります。[削除された](/ja/docs/Web/JavaScript/Reference/Operators/delete) 要素は `undefined` であるかのように処理されます。

> [!WARNING]
> 上で説明したような同時進行の変更は、理解しにくいコードになることが多いので、（特別な場合を除いて）避けるのが一般的です。

`findIndex()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

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

### 疎配列における find() の使用

疎配列で `undefined` を検索することで、空スロットのインデックスを取得することができます。

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### 配列でないオブジェクトに対する find() の呼び出し

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
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
