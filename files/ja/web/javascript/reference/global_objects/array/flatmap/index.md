---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`flatMap()`** メソッドは、最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内にフラット化します。これは、{{jsxref("Array.prototype.map","map()")}} の後に深さ 1 の {{jsxref("Array.prototype.flat","flat()")}} を行うのと同じですが (`arr.map(...args).flat()`)、これら 2 つのメソッドを別々に呼び出すよりもわずかに効率的です。

{{EmbedInteractiveExample("pages/js/array-flatmap.html","shorter")}}

## 構文

```js
// アロー関数
flatMap((currentValue) => {
  /* … */
});
flatMap((currentValue, index) => {
  /* … */
});
flatMap((currentValue, index, array) => {
  /* … */
});

// コールバック関数
flatMap(callbackFn);
flatMap(callbackFn, thisArg);

// インラインコールバック関数
flatMap(function (currentValue) {
  /* … */
});
flatMap(function (currentValue, index) {
  /* … */
});
flatMap(function (currentValue, index, array) {
  /* … */
});
flatMap(function (currentValue, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 新しい配列の要素を生成する関数。

    この関数は以下の引数と共に呼び出されます。

    - `currentValue`
      - : 配列で現在処理されている要素です。
    - `index`
      - : 配列で現在処理されている要素の添字です。
    - `array`
      - : `flatMap` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用する値です。

### 返値

各要素がコールバック関数の結果であり、深さが 1 にフラット化された新しい配列です。

## 解説

コールバック関数の詳細な説明は {{jsxref("Array.prototype.map()")}} を参照してください。`flatMap` メソッドは、[`map`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) の後に深さ 1 の [`flat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) を呼び出すのと同じです。

### 代替手段

#### 事前割り当てと明示的な反復処理

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// is equivalent to
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

この場合、 `flatMap` の手法は for ループの手法よりも遅いことに注意してください。これは、ガベージコレクションが必要な一時的な配列が生成されるためと、返される配列のサイズを頻繁に変更する必要がないためです。しかし、柔軟性と可読性が求められる場合には、 `flatMap` が正しい解決策となる可能性があります。

## 例

### `map()` と `flatMap()`

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

上記は map を使用することでも実現できますが、ここでは `flatMap` の使用方法をよりよく示す例を紹介します。

文章のリストから単語のリストを生成してみましょう。

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

出力リストの長さは入力リストの長さとは異なる場合があることに注意してください。

### `map()` のアイテムの追加と削除

`flatMap` は、`map` 中にアイテムの追加と削除（アイテムの数を変更）を行う方法として利用できます。つまり、常に*一対一*ではなく、_多くのアイテムを多くのアイテムに_（入力されたアイテムを個別に扱うことで）マップできるようになります。この意味では、 [filter](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) の逆のような働きをします。単純に、アイテムを保持するには 1 要素の配列を返し、アイテムを追加するには複数要素の配列を返し、アイテムを削除するには 0 要素の配列を返します。

```js
// 例えば、すべての負の数を取り除き、
// 奇数を偶数と 1 に分割したいとします。
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
// expected output: [4, 1, 4, 20, 16, 1, 18]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.flatMap` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
