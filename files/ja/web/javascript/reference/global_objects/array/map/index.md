---
title: Array.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`map()`** は {{jsxref("Array")}} インスタンスのメソッドで、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。

{{InteractiveExample("JavaScript デモ: Array.prototype.map()")}}

```js interactive-example
const array = [1, 4, 9, 16];

// 関数を map に渡す
const mapped = array.map((x) => x * 2);

console.log(mapped);
// 予想される結果: Array [2, 8, 18, 32]
```

## 構文

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### 引数

- `callbackFn`
  - : 配列のそれぞれの要素に対して実行する関数。その返値は、新しい配列の単一の要素として追加されます。この関数は、以下の引数で呼び出されます。
    - `element`
      - : 配列内で現在処理中の要素です。
    - `index`
      - : 現在処理中の要素の配列内における添字です。
    - `array`
      - : `map()` が呼び出された配列です。
- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使う値です。[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)を参照してください。

### 返値

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列です。

## 解説

`map()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ呼び出し、その結果から新しい配列を構築します。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧下さい。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で空のスロットに対しては呼び出されません。

`map()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

`map` は新しい配列を作成するので、返された配列を使わない場合、map を使うのはパターンに合いません。代わりに {{jsxref("Array/forEach", "forEach")}} または {{jsxref("Statements/for...of", "for...of")}} を使用してください。

## 例

### 数値の配列を平方根の配列にマッピング

次のコードは、数値からなる配列を取り、それらの数値の平方根からなる新しい配列を生成します。

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] のまま
```

### map を使用して配列内のオブジェクトを再フォーマット

次のコードは、オブジェクトの配列を受け取り、新たにフォーマットされた新しい配列を生成しています。

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### parseInt() を map() で使用

コールバックは、1 つの引数（走査中の要素）とともに使用するのが一般的です。一部の関数は、追加のオプション引数を取っても、1 つの引数とともに使用されることがよくあります。このような習慣は、混乱を招く動作につながる可能性があります。次の例を考えてみましょう。

```js
["1", "2", "3"].map(parseInt);
```

返値は `[1, 2, 3]` となりそうですが、実際には `[1, NaN, NaN]` となります。

{{jsxref("parseInt")}} は大抵一つの引数のみで使われますが、実際には 2 つの引数を取っています。 1 つ目は数値文字列、 2 つ目は基数です。 `Array.prototype.map` はコールバックに、要素、インデックス、配列の 3 つの引数を与えています。 {{jsxref("parseInt")}} は 3 つ目の引数を無視しますが、 2 つ目の引数は無視しません。これは混乱を起こす可能性があるソースです。

繰り返し手順の正確な例は以下の通りです。

```js
/* 最初の反復処理  （インデックスは 0）: */ parseInt("1", 0); // 1
/* 2 つ目の反復処理（インデックスは 1）: */ parseInt("2", 1); // NaN
/* 3 つ目の反復処理（インデックスは 2）: */ parseInt("3", 2); // NaN
```

これを解決するには、引数を 1 つだけ取る別の関数を定義します。

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

また、引数を 1 つだけ取る {{jsxref("Number")}} 関数を使用することもできます。

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// parseInt() とは違って、 Number() は float または (解決した) 指数表現を返します。
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// 比較のために、上記の配列に parseInt() を用いると次のようになります。
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

詳しい説明は、 [A JavaScript optional argument hazard](https://wirfs-brock.com/allen/posts/166) (Allen Wirfs-Brock) を参照してください。

### undefined を持つ対応付けられた配列

{{jsxref("undefined")}} が返されるか、または何も返されない場合、結果の配列には `undefined` が含まれます。要素を削除したい場合は、 {{jsxref("Array/filter", "filter()")}} メソッドをチェーンするか、 {{jsxref("Array/flatMap", "flatMap()")}} メソッドを使用して、削除を示す空の配列を返します。

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index は 0 から始まるので、 filterNumbers は 1,2,3 および undefined になります。
// filteredNumbers は [1, 2, 3, undefined]
// numbers は [1, 2, 3, 4] のまま
```

### 副作用のある対応付け

コールバックには副作用があります。

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

なぜなら、コピーメソッドは純粋関数とともに使用するのが最適だからです。この場合、配列を 2 回反復処理することを選べます。

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

このパターンが極端になり、 `map()` が行う有益なことが副作用を発生させることだけになってしまうことがあります。

```js
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
```

前回述べたように、これはパターンに反します。 `map()` の返値を使用しない場合は、代わりに `forEach()` または `for...of` ループを使用してください。

```js
products.forEach((product) => {
  product.price = 100;
});
```

あるいは、代わりに新しい配列を作成することもできます。

```js
const productsWithPrice = products.map((product) => ({
  ...product,
  price: 100,
}));
```

### callbackFn の第 3 引数の使用

`array` 引数は、配列の別の要素にアクセスしたい場合、特に、その配列を参照する既存の変数がない場合に便利です。次の例では、まず `filter()` を使用して正の値を抽出し、次に `map()` を使用して、それぞれの要素が隣接する要素とその自身の平均値である新しい配列を作成しています。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // arr 引数がない場合、変数に保存せずに中間配列に
    // 簡単にアクセスする方法はない
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // 小数点以下 2 桁を保持する
    return Math.round(average * 100) / 100;
  });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

`array` 引数は、構築中の配列ではありません。コールバック関数から構築中の配列にアクセスする方法はありません。

### 疎配列に対する map() の使用

疎配列は `map()` の後も疎配列のままです。空のスロットのインデックスは返された配列においても空のままであり、コールバック関数が呼び出されることはありません。

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  }),
);
// Visit 0
// Visit 2
// [2, empty, 6]
```

### 配列以外のオブジェクトに対する map() の呼び出し

`map()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length が 3 なので map() 空は無視される
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

この例では、 `querySelectorAll` によって収集されたオブジェクトのコレクションを反復処理する方法を示します。これは `querySelectorAll` が `NodeList` （オブジェクトの集合）を返すためです。この場合、画面に選択されているすべての `option` の値を返します。

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

もっと簡単な方法は {{jsxref("Array.from()")}} メソッドを使用することです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.map` のポリフィル](https://www.npmjs.com/package/array.prototype.map)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
