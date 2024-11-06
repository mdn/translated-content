---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`map()`** は {{jsxref("Array")}} インスタンスのメソッドで、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

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

`map()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。指定された関数 `callbackFn` を配列に含まれる各要素に対して一度ずつ呼び出し、その結果から新しい配列を構築します。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)で空のスロットに対しては呼び出されません。

`map()` メソッドは[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。これは `this` を変更しません。しかし、 `callbackFn` に指定された関数は変更することがあります。ただし、配列の長さは `callbackFn` を最初に呼び出す前に保存されることに注意してください。したがって、

- `callbackFn` は `map()` の呼び出しを始めたときの配列の長さを超えて追加された要素にはアクセスしません。
- 既に処理したインデックスを変更しても、 `callbackFn` が再度呼び出されることはありません。
- まだ処理していない既存の配列要素が `callbackFn` によって変更された場合、 `callbackFn` に渡される値はその要素が取得される時点の値になります。[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)された要素は処理されません。

> [!WARNING]
> 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

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

### 引数を含む関数を使用して数値配列を対応付ける

次のコードは、1 つの引数を必要とする関数を使用するときに `map` がどのように動作するかを示しています。引数は元の配列を通した `map` ループとして、配列の各要素に自動的に割り当てられます。

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]
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
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
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

### map() を汎用的に NodeList で使用

この例では、 `querySelectorAll` によって収集されたオブジェクトのコレクションを反復処理する方法を示します。これは `querySelectorAll` が `NodeList` （オブジェクトの集合）を返すためです。

この場合、画面に選択されているすべての `option` の値を返します。

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

もっと簡単な方法は {{jsxref("Array.from()")}} メソッドを使用することです。

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

### parseInt() を map() で使用

([このブログの記事に創発されました](https://wirfs-brock.com/allen/posts/166))

コールバック関数は第一引数（変換するべき要素）だけを意識して指定するケースがほとんどだと思います。
しかし一般的に第一引数しか使わないような関数でも、実は追加のオプション引数を受け取っている場合があります。これは混乱につながる可能性があります。

まずこの例をご覧ください。

```js
["1", "2", "3"].map(parseInt);
```

返値は `[1, 2, 3]` となりそうですが、実際には `[1, NaN, NaN]` となります。

{{jsxref("parseInt")}} は大抵一つの引数のみで使われますが、実際には 2 つの引数を取っています。 1 つ目は数値文字列、 2 つ目は基数です。 `Array.prototype.map` はコールバックに次の 3 つの引数を与えています。

- その要素
- その添字
- その配列

{{jsxref("parseInt")}} は 3 つ目の引数を無視しますが、 2 つ目の引数は無視*しません*。これは混乱を起こす可能性があるソースです。

繰り返し手順の正確な例は以下の通りです。

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN
```

解決策を考えてみましょう。

```js
const returnInt = (element) => parseInt(element, 10);

["1", "2", "3"].map(returnInt); // [1, 2, 3]
// 期待した通り、数値の配列が返る。

// アロー関数構文を使って、より簡潔に上記と同じ結果を得ることが出来ます。
["1", "2", "3"].map((str) => parseInt(str)); // [1, 2, 3]

// ちなみにこの命題ではもっと簡単に同じ結果を得る方法があります。
["1", "2", "3"].map(Number); // [1, 2, 3]

// parseInt() とは違って、 Number() は float または (解決した) 指数表現を返します。
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// 比較のために、上記の配列に parseInt() を用いると次のようになります。
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str)); // [1, 2, 3]
```

{{jsxref("parseInt")}} を引数として呼び出された map メソッドの代替出力の 1 つは、次のように実行されます。

```js
const strings = ["10", "10", "10"];
const numbers = strings.map(parseInt);

console.log(numbers);
// 実際の結果 [10, NaN, 2] は上記の説明からすると意外なものかもしれません。
```

### undefined を持つ対応付けられた配列

{{jsxref("undefined")}} または nothing を返すと、以下のものを返します。

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index は 0 から始まるので、 filterNumbers は 1,2,3 および undefined になります。
// filteredNumbers は [1, 2, undefined, undefined]
// numbers は [1, 2, 3, 4] のまま
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.map` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Map")}}
