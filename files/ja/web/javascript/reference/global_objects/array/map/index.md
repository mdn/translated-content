---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: f1b0423793182c7025b15815bb2a70defea39c2b
---

{{JSRef}}

**`map()`** メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる**新しい配列を生成します**。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 構文

```js-nolint
// アロー関数
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// コールバック関数
map(callbackFn)
map(callbackFn, thisArg)

// インラインコールバック関数
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)
```

### 引数

- `callbackFn`

  - : `arr` の要素ごとに呼び出される関数です。 `callbackFn` が実行されるたびに、返された値が `newArray` に追加されます。

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列内で現在処理中の要素です。
    - `index`
      - : 現在処理中の要素の配列内における添字です。
    - `array`
      - : `map` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使う値です。

### 返値

与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列です。

## 解説

`map` は、与えられた `callbackFn` 関数を配列の順番通りに、**各要素に対して一度ずつ呼び出し**、その結果から新しい配列を生成します。 `callbackFn` は、値が代入されている配列の要素に対してのみ呼び出されます ({{jsxref("undefined")}} が代入されているものも含みます)。

これは配列の中で存在しない要素、すなわち以下の要素に対しては呼び出し*ません*。

- 設定されたことがない添字
- 削除された要素
- 値を割り当てられたことがない要素

### map() を使用すべきではない場合

`map` は新しい配列を作成するので、返された配列を使わない場合、map を使うのはパターンに合いません。代わりに {{jsxref("Array/forEach", "forEach")}} または {{jsxref("Statements/for...of", "for...of")}} を使用してください。

`map` を使用するべきでないのは以下の場合です。

- 返された配列を使用しない場合
- コールバックから値を返さない場合

### 引数の詳細

`callbackFn` は、要素の値、要素の添字、走査されている Array オブジェクトという 3 つの引数をともなって呼び出されます。

`thisArg` 引数が与えられた場合は、それがコールバックの `this` として使用されます。引数が省略された場合は、 {{jsxref("undefined")}} が `this` の値として使用されます。 `callbackFn` によって最終的に識別できる `this` の値は、[関数における通常の `this` を決定するルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決まります。

`map` は呼び出された配列を変化させません (ただし、呼び出された `callbackFn` が配列を変更する可能性はあります)。

`map` によって処理される要素の範囲は、最初に `callbackFn` が呼び出される前に設定されます。既に訪問した位置に割り当てられている要素や、範囲外の位置に割り当てられている要素に対しては、`callbackFn` が呼び出されることはありません。
既存の配列要素が変更されたり、削除された場合、 `callbackFn` に渡される値は `map` がそれらを訪れた時点での値になり、 `map` が削除された要素を訪問することはありません。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

仕様書で定義されているアルゴリズムによって、 `map` が呼び出された配列がまばらである場合、結果の配列もまばらとなり、要素を空欄のままにします。

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

// フォーマットされた配列の内容は [{1: 10}, {2: 20}, {3: 30}]となる

// kvArray は以下のまま
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### 引数を含む関数を使用して数値配列を対応付ける

次のコードは、1 つの引数を必要とする関数を使用するときに `map` がどのように動作するかを示しています。引数は元の配列を通した `map` ループとして、配列の各要素に自動的に割り当てられます。

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```

### 汎用的な map の使用

次の例は、 {{jsxref("String")}} に対して map を使用することで、文字列内の文字を UTF-16 コードユニットので表す数値の配列を取得します。

```js
const map = Array.prototype.map;
const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));

// a の内容は [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100] となる
```

### 汎用的な map の使用: querySelectorAll

この例では、 `querySelectorAll` によって収集されたオブジェクトのコレクションを反復処理する方法を示します。これは `querySelectorAll` が `NodeList` （オブジェクトの集合）を返すためです。

この場合、画面に選択されているすべての `option` の値を返します。

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

もっと簡単な方法は {{jsxref("Array.from()")}} メソッドを使用することです。

### トリッキーな使用例

([このブログの記事に創発されました](https://wirfs-brock.com/allen/posts/166))

コールバック関数は第一引数（変換するべき要素）だけを意識して指定するケースがほとんどだと思います。しかし一般的に第一引数しか使わないような関数でも、実は追加のオプション引数を受け取っている場合があります。これは混乱につながる可能性があります。

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
/*  first iteration  (index is 0): */ parseInt("1", 0); // 1
/*  second iteration (index is 1): */ parseInt("2", 1); // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2); // NaN
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
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
