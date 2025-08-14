---
title: Array.prototype.flatMap()
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`flatMap()`** は {{jsxref("Array")}} インスタンスのメソッドで、最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内に平坦化します。これは、 {{jsxref("Array/map", "map()")}} の後に深さ 1 の {{jsxref("Array/flat","flat()")}} を行うのと同じですが (`arr.map(...args).flat()`)、これら 2 つのメソッドを別々に呼び出すよりもわずかに効率的です。

{{InteractiveExample("JavaScript デモ: Array.prototype.flatMap()", "shorter")}}

```js interactive-example
const arr = [1, 2, 1];

const result = arr.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// 予想される結果: Array [1, 2, 2, 1]
```

## 構文

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数。この関数は、新しい配列の要素を格納した配列を返すか、新しい配列に追加する 1 つの配列以外の値を返します。この関数は、以下の引数で呼び出されます。
    - `element`
      - : 配列で現在処理中の要素です。
    - `index`
      - : 配列で現在処理中の要素のインデックスです。
    - `array`
      - : `flatMap()` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用する値です。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

各要素がコールバック関数の結果であり、深さが 1 に平坦化された新しい配列です。

## 解説

`flatMap()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。コールバック関数の詳細な説明は {{jsxref("Array.prototype.map()")}} を参照してください。`flatMap()` メソッドは、[`map(callbackFn, thisArg)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) の後にの [`flat(1)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) を呼び出すのと同じです。要素ごとに、新しい要素の配列を生成し、できた配列を連結して新しい配列を形成します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧ください。

`flatMap()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。ただし、 `callbackFn` から返される値は、平坦化する場合は配列でなければなりません。

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

### map() と flatMap()

```js
const arr = [1, 2, 3, 4];

arr.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 1つのレベルだけがフラット化される
arr.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

上記は map を使用することでも実現できますが、ここでは `flatMap()` の使用方法をよりよく示す例を紹介します。

文章のリストから単語のリストを生成してみましょう。

```js
const arr = ["it's Sunny in", "", "California"];

arr.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

出力リストの長さは入力リストの長さとは異なる場合があることに注意してください。

### map() のアイテムの追加と削除

`flatMap` は、`map` 中にアイテムの追加と削除（アイテムの数を変更）を行う方法として利用できます。
つまり、常に一対一ではなく、_多くのアイテムを多くのアイテムに_（入力されたアイテムを個別に扱うことで）マップできるようになります。
この意味では、 [filter](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) の逆のような働きをします。
単純に、アイテムを保持するには 1 要素の配列を返し、アイテムを追加するには複数要素の配列を返し、アイテムを削除するには 0 要素の配列を返します。

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
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### callbackFn の第 3 引数の使用

`array` 引数は、配列内の別の要素にアクセスしたい場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、最初に `filter()` を使用して運用ステーションを抽出し、次に `flatMap()` を使用して、それぞれの要素が駅とその次の駅を含む新しい配列を作成しています。最後の駅では、最終的な配列からその駅を除外するために、空の配列を返しています。

```js
const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に簡単に
    // アクセスする方法はありません。
    if (idx === arr.length - 1) return []; // 指定された駅に次の駅がない
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']
```

`array` 引数は、構築中の配列ではありません。コールバック関数から構築中の配列にアクセスする方法はありません。

### 疎配列に対する flatMap() の使用

`map()` は呼び出されず、 `flat()` は返す配列の空のスロットを無視するので、 `callbackFn` は元の配列の空のスロットに対しては呼び出されません。

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### 配列以外のオブジェクトに対する flatMap() の呼び出し

`flatMap()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。コールバック関数の返り値が配列でない場合は、常に結果の配列に直接追加されます。

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // length が 3 であるため flatMap() から無視される
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// コールバックから返された配列風のオブジェクトは平坦化されない
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.flatMap` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.flatMap` のポリフィル](https://www.npmjs.com/package/array.prototype.flatmap)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
