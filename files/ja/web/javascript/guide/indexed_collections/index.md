---
title: インデックス付きコレクション
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

この章では、インデックス値により順序付けされたデータのコレクションを紹介します。これには配列と、{{jsxref("Array")}} オブジェクトや {{jsxref("TypedArray")}} オブジェクトなどの配列風の構造物があります。

**配列**は、名前やインデックスで参照する値からなる順序付きリストです。

例えば、`emp` という配列を作成し、数値の従業員番号でインデックス付けして従業員名を格納するとします。つまり、`emp[0]` が従業員番号 0、`emp[1]` が従業員番号 1、のようになります。

JavaScript は明確な配列データ型を持っていません。しかし、アプリケーションでは配列として機能する定義済みの `Array` オブジェクトとそのメソッドを利用することができます。`Array` オブジェクトには、結合、反転、ソートなど様々な方法で配列を操作するメソッドがあります。また、配列の長さを特定するプロパティや、正規表現で使用するプロパティなどがあります。

この記事では配列を中心に説明しますが、配列と型付き配列には共通するメソッドが多いため、同じ概念の多くが型付き配列にも当てはまります。型付き配列の詳細については、[型付き配列ガイド](/ja/docs/Web/JavaScript/Guide/Typed_arrays)を参照してください。

## 配列の生成

以下の文は同じ配列を生成します。

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` は配列要素になる値のリストです。これらの値が指定されると、この配列の要素はそれらの値に初期化されます。配列の `length` プロパティは引数の数に設定されます。

角括弧による構文は「配列リテラル」または「配列初期化子」と呼ばれます。この構文はその他の形式による配列作成よりも短いため、一般的に好まれる方法です。詳細については、[配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)をご覧ください。

長さがゼロではないが項目のない配列を作成するには、以下の方法が使用できます。

```js
// これは...
const arr1 = new Array(arrayLength);

// ...このような結果になります
const arr2 = Array(arrayLength);

// これもまったく同じ効果です。
const arr3 = [];
arr3.length = arrayLength;
```

> [!NOTE]
> 上記のコードでは、`arrayLength` は `Number`（数値）である必要があります。さもないと、（指定した値の）単一の要素を持つ配列が生成されます。`arr.length` を呼び出すと `arrayLength` が返されますが、配列には要素が存在していません。この配列で {{jsxref("Statements/for...in","for...in")}} ループを実行しても、配列の要素は返されません。

上記のように新規に定義した変数に割り当てるだけでなく、新規または既存のオブジェクトのプロパティに配列を割り当てることができます。

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// または
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

単一の要素で配列を初期化しようとして、その要素が `Number` である場合、角括弧の構文を使用する必要があります。単一の `Number` 値が `Array()` コンストラクターや関数に渡されると、単一の数値要素としてではなく、`arrayLength` として解釈されます。

これは、数値 42 の要素一つだけの配列を生成します。

```js
const arr = [42];
```

これは、要素がなく arr.length が 42 に設定された配列を生成します。

```js
const arr = Array(42);
```

これは次のコードと同じです。

```js
const arr = [];
arr.length = 42;
```

`N` の値が小数部分がゼロではない実数である場合、 `Array(N)` を呼び出すと、結果は `RangeError` になります。以下の例ではこの動作を示します。

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

任意のデータ型の単一の要素を持つ配列を作成したければ、配列リテラルを使用した方が安全です。あるいは、単一の要素を追加する前に空の配列を作成しましょう。

ES2015 から単一の要素を持つ配列を生成するために {{jsxref("Array.of")}} 静的メソッドを使用することができます。

```js
const wisenArray = Array.of(9.3); // wisenArray は 1 つの要素 9.3 だけを持つ配列
```

## 配列要素の参照

要素はプロパティでもあるので、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使ってアクセスすることができます。以下の配列を定義するとします。

```js
const myArray = ["Wind", "Rain", "Fire"];
```

要素のインデックスは 0 から始まるので、配列の 1 番目の要素を `myArray[0]`、2 番目の要素を `myArray[1]` と呼ぶことができます。

> [!NOTE]
> [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使用して、オブジェクトのように配列の他のプロパティにアクセスすることもできます。
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## 配列へのデータ追加

下記のように、要素に値を割り当てることで配列にデータを追加することができます。

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> 上記のコードで配列演算子（角括弧）内に整数ではない値を指定すると、配列要素ではなく配列を表すオブジェクトのプロパティとして作成されます。
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

配列を作成するときにも、データを追加することができます。

```js
const myArray = new Array("Hello", myVar, 3.14159);
// または
const myArray = ["Mango", "Apple", "Orange"];
```

### 配列の長さの理解

実装レベルでは、JavaScript の配列は、配列のインデックスをプロパティ名として使用して、その要素を標準的なオブジェクトのプロパティとして格納します。

`length` プロパティは特別です。これは常に、存在する最後の要素のインデックスより大きな正の整数をになります。（次の例では、`'Dusty'` のインデックスは `30` なので、`cats.length` は `30 + 1` を返します。）

JavaScript の配列のインデックスは `0` から始まるものであり、 `1` からではないことを思い出してください。これは、`length` プロパティは配列に格納されている最大のインデックスより 1 つ大きい値になるということです。

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

`length` プロパティに値を割り当てることもできます。

格納されているアイテムの数より小さい値を設定すると、配列は切り捨てられます。すなわち、`0` に設定すると完全に配列を空にします。

```js
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy は削除される

cats.length = 0;
console.log(cats); // []; 配列 cats は空になる

cats.length = 3;
console.log(cats); // [ <3 つの空アイテム> ]
```

### 配列の反復処理

よく行われるのは配列に含まれる値に対し、それぞれの値について、次のようになんらかの処理を行うことです。

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

配列内の要素がいずれも論理値としては `false` に評価されないことがわかっている場合 ― 例えば配列が [DOM](/ja/docs/Web/API/Document_Object_Model) ノードのみで構成されている場合などには、例のように、より効率的な表現を使用できます。

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* div に対して何らか処理をする */
}
```

この例では、配列の長さのチェックに掛かるオーバーヘッドを回避しています。そしてより便利に使えるように、ループの反復のたびに `div` 変数に現在の項目を代入するようにしています。

配列を反復処理する別の方法として [`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) メソッドがあります。

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

`forEach` に渡される関数では、その関数への引数に配列の要素が渡されて、配列内の各項目ごとに 1 回ずつ実行されます。値が割り当てられていない要素は `forEach` ループで反復されません。

配列定義の際に省略された要素は、`forEach` によって反復処理されるときには現れませんが、配列要素に `undefined` が割り当てられている場合は現れることに注意してください。

```js
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] is undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth
```

JavaScript では、配列の要素は標準的なオブジェクトプロパティとして保存されるので、{{jsxref("Statements/for...in", "for...in")}} ループを使って JavaScript 配列を反復処理するのはお勧めできません。というのも、通常の要素とすべての列挙可能なプロパティが現れるからです。

### 配列のメソッド

{{jsxref("Array")}} オブジェクトには以下のようなメソッドがあります。

[`concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) は 2 つの配列を結合し、新しい配列を返します。

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray は ["1", "2", "3", "a", "b", "c"] になる
```

[`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) は、配列のすべての要素を文字列に結合します。

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list は "Wind - Rain - Fire" になる
```

[`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) は 1 つ以上の要素を配列の最後に追加し、その新しい配列の長さを返します。

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray は ["1", "2", "3"] になる
```

[`pop()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) は配列から最後の要素を取り除き、その要素を返します。

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray は ["1", "2"] に、last は "3" になる
```

[`shift()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) は配列から最初の要素を取り除き、その要素を返します。

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray は ["2", "3"]に、first は "1" になる
```

[`unshift()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) は 1 つ以上の要素を配列の先頭に追加し、その新しい配列の長さを返します。

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray は ["4", "5", "1", "2", "3"] になる
```

[`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) は配列の一部を抽出し、新しい配列を返します。

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// インデックス 1 から始め、 3 まですべての要素を
// 展開する
```

[`at()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at) メソッドは、配列の指定したインデックスの要素を返し、インデックスが範囲外の場合は `undefined` を返します。特に、負のインデックスを使用して配列の末尾から要素にアクセスする場合に使用されます。

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

[`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) は要素を配列から取り除き、 (必要に応じて) 置き換えます。配列から削除された項目を返します。

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray は ["1", "a", "b", "c", "d", "5"] になる
// このコードは、インデックス 1 の要素（"2" のあった場所）から始まり、
// 3 つの要素を削除して、そこに後続のすべての要素を挿入します。
```

[`reverse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) は、配列の中の要素をその場で反転させます。配列の最初の要素が最後に、最後の要素が最初になります。配列への参照を返します。

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// 配列要素が入れ替えられ、myArray = ["3", "2", "1"] になる
```

[`flat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) メソッドは、すべてのサブ配列要素が指定した深さまで再帰的に連結された新しい配列を返します。

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray は [1, 2, 3, 4] になります。サブ配列 [3, 4] は展開されます。
```

[`sort()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) は配列の要素をその場でソートし、その配列の参照を返します。

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// 配列がソートされ、myArray = ["Fire", "Rain", "Wind"] になる
```

`sort()` は、配列要素をどのように比較するかを決定するコールバック関数を取ることができます。コールバック関数は、配列内の2つの値を引数として呼び出されます。この関数は、これら 2 つの値を比較し、2 つの値の順序を示す正の値、負の値、または 0 を返します。例えば、以下は文字列の最後の文字で配列をソートするものです。

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // 負の数 => a < b、a は b の前に来る
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // 正の数 => a > b、a は b の後に来る
  }
  return 0; // ゼロ => a = b、a と b は元の順序を維持する
};
myArray.sort(sortFn);
// 配列がソートされ、 myArray = ["Wind","Fire","Rain"] となる
```

- このソートシステムにおいて `a` が `b` より小さい場合、`-1`（または任意の負の数）を返します。
- このソートシステムにおいて `a` が `b` より大きい場合、`1`（または任意の正の数）を返します。
- `a` と `b` が等値と見なされる場合、 `0` を返します。

[`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) は配列から `searchElement` を検索します。そして、最初に一致した位置のインデックスを返します。

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1 がログに出力される

// 最初から最後への検索を試してみる
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1。'z' が見つからなかったため。
```

[`lastIndexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) は `indexOf` のように動作しますが、最後の要素から開始して前方に検索します。

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// 最後から最初への検索を試してみる
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

[`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) は配列のすべての項目にコールバック関数 `callback` を実行し、`undefined` を返します。

```js
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// 出力:
// a
// b
// c
```

コールバックを受け取る `forEach` メソッド（および下記のもの）は、配列全体を何らかの方法で反復処理するため、_反復処理メソッド_ として知られています。それぞれのメソッドは、オプションで `thisArg` という 2 つ目の引数を取ります。指定された場合、`thisArg`はコールバック関数の本体の中で `this` キーワードの値となります。指定されなかった場合、関数が明示的なオブジェクトコンテキストの外で呼び出される他のケースと同様に、`this` はグローバルオブジェクト（[`window`](/ja/docs/Web/API/Window)、[`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) など）を参照しています。これは関数が[厳格モードでない場合](/ja/docs/Web/JavaScript/Reference/Strict_mode)であり、関数が厳格モードの場合は `undefined` となります。

> [!NOTE]
> 上で紹介した `sort()` メソッドは反復処理メソッドではありません。そのコールバック関数は比較のためにのみ使用され、要素の順序に基づく特定の順序で呼び出されることはないためです。`sort()` は `thisArg` という引数も受け入れません。

[`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) はすべての配列アイテムごとにコールバック関数 `callback` を実行し、返値からなる新しい配列を返します。

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

[`flatMap()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) メソッドは、`map()` に続いて深さ 1 の `flat()` を実行します。

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

[`filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) はコールバック関数 `callback` が `true` を返す項目からなる新しい配列を返します。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

[`find()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find) メソッドは、 `callback` が `true` を返した最初の項目を返します。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

[`findLast()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) メソッドは、`callback` が `true` を返した最後の項目を返します。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

[`findIndex()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) メソッドは、`callback` が `true` を返した最初の項目のインデックスを返します。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

[`findLastIndex()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) メソッドは、`callback` が `true` を返した最後の項目のインデックスを返します。

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

[`every()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every) はコールバック関数 `callback` が配列内のすべてのアイテムで `true` を返す場合に `true` を返します。

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

[`some()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some) はコールバック関数 `callback` が配列内の少なくとも一つのアイテムで `true` を返す場合に `true` を返します。

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

[`reduce()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) は、配列の各値に対して `callback(accumulator, currentValue, currentIndex, array)` を適用し、項目のリストを 1 つの値に減らすことを目的としています。 `reduce` 関数は、 `callback` 関数によって返された最終的な値を返します。

`initialValue` が指定された場合は、`initialValue` を第 1 引数の値として、配列の最初の項目の値を第 2 引数の値として `callback` が呼び出されます。

`initialValue` が指定されて*いない*場合、`callback` の最初の 2 つの引数の値は、配列の最初と 2 番目の要素になります。後続の*すべての*呼び出しで、最初の引数の値は前の呼び出しで `callback` が返した値になり、2 番目の引数の値は配列の次の値になります。

`callback` が処理対象の項目のインデックスにアクセスする必要がある場合は、配列全体にアクセスするときに、オプションの引数として利用できます。

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

[`reduceRight()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) は `reduce()` のように機能します。しかし最後の要素から適用を開始します。

`reduce` と `reduceRight` もある意味では配列の反復処理メソッドです。要素列を単一の値に還元するために、再帰的に 2 つの値を組み合わせるアルゴリズムにこれらのメソッドを使用してください。

## 配列の変換

配列と他のデータ構造の間で相互に変換することができます。

### 配列の要素のグループ化

{{jsxref("Object.groupBy()")}} メソッドを使用して、現在の要素のグループを示す文字列を返すテスト関数を使用して、配列の要素をグループ化することができます。

こちらは商品の配列で、 `name` と `type` がある "food" オブジェクトがあります。

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

`Object.groupBy()` を使用するにあたっては、現在の要素で呼び出されるコールバック関数を指定します。オプションで現在のインデックスと配列を指定することもでき、要素のグループを示す文字列を返します。

次のコードでは、アロー関数を使用して配列のそれぞれの要素の型を返します（これは、[関数の引数にオブジェクトの構造分解構文を使用](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring#関数の引数として渡されたオブジェクトからのプロパティの展開)して、渡されたオブジェクトから型要素を展開します）。結果は、コールバック関数によって返された一意の文字列を名前とするプロパティを持つオブジェクトとなります。それぞれのプロパティには、グループ内の要素を含む配列が割り当てられます。

```js
const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);
// Logs
// {
//   vegetables: [{ name: 'asparagus', type: 'vegetables' }],
//   fruit: [
//     { name: 'bananas', type: 'fruit' },
//     { name: 'cherries', type: 'fruit' }
//   ],
//   meat: [
//     { name: 'goat', type: 'meat' },
//     { name: 'fish', type: 'meat' }
//   ]
// }
```

返されたオブジェクトは元の配列と同じ要素を参照していることに注意してください（{{Glossary("deep copy", "ディープコピー")}}ではありません）これらの要素の内部構造を変更すると、元の配列と返されたオブジェクトの両方に反映されます。

文字列をキーとして使用できない場合、例えばグループ化する情報が変更される可能性のあるオブジェクトに関連付けられた場合、代わりに {{jsxref("Map.groupBy()")}} を使用することができます。これは、配列の要素を任意の値（{{Glossary("object", "オブジェクト")}} または{{Glossary("primitive", "プリミティブ")}}）をキーとして使用することができる {{jsxref("Map")}} にグループ化するという点を除いて、 `Object.groupBy()` とよく似ています。

## 疎配列

配列は「空のスロット」を格納することができます。これは、値が `undefined` で満たされたスロットとは異なります。空のスロットは、以下のいずれかの方法で作成することができます。

```js
// Array コンストラクター:
const a = Array(5); // [ <5 つの空の項目> ]

// 配列リテラルの連続したカンマ:
const b = [1, 2, , , 5]; // [ 1, 2, <2 つの空の項目>, 5 ]

// array.length より大きいインデックスを持つスロットを直接設定:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 つの空の項目>, 5 ]

// .length を直接設定して配列を延長する:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 つの空の項目> ]

// 要素の削除:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 つの空の項目>, 4, 5 ]
```

一部の操作では、空のスロットに `undefined` が入ったように動作することがあります。

```js
const arr = [1, 2, , , 5]; // 疎配列を生成

// インデックスによるアクセス
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}
// 出力: 1 2 undefined undefined 5

// 構造分解
const another = [...arr]; // "another" は [ 1, 2, undefined, undefined, 5 ]
```

しかし、他の場合（特に配列反復処理）には、空のスロットはスキップされます。

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 つの空の項目>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Property enumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// 出力: '0' '1' '4'
// オブジェクトへの展開は、配列のイテレーターではなく、プロパティの列挙を使用する。
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

配列メソッドが疎配列でどのように動作するかの完全なリストは、[`Array` のリファレンスページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列メソッドと空のスロット)を参照してください。

## 多次元配列

配列をネストすることができます、つまり配列要素として配列を含めることができることを意味します。JavaScript の配列の特徴を活かして、多次元配列を生成できます。

以下のコードでは 2 次元配列を作成しています。

```js
const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
  }
}
```

この例では、次のテーブル行を持つ配列を作成しています。

```plain
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## 配列を使用して他のプロパティを格納する

配列は、オブジェクトのように関連する情報を格納するために使用することもできます。

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

例えば、配列が正規表現と文字列の一致した結果である場合、配列は一致した情報を提供するプロパティや要素を返します。[`RegExp.prototype.exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype. match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match), [`String.prototype.split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) は配列を返します。正規表現での配列の使用に関する情報については、[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)を参照してください。

### 配列風オブジェクトの扱い

[`document.getElementsByTagName()`](/ja/docs/Web/API/Document/getElementsByTagName) によって返される [`NodeList`](/ja/docs/Web/API/NodeList) や、関数本体内で利用できる {{jsxref("Functions/arguments", "arguments")}} オブジェクトのように、表面上は配列のようにふるまう JavaScript オブジェクトがありますが、これらはメソッドすべてを共有してはいません。例えば、 `arguments` オブジェクトには {{jsxref("Function/length","length")}} 属性がありますが、 [`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) メソッドは実装されていません。

配列風オブジェクトに対して配列メソッドを直接呼び出すことはできません。

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

これを行うには、 {{jsxref("Function.prototype.call()")}} を使って間接的に呼び出します。

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

配列のプロトタイプメソッドは、配列と同様の方法で文字に逐次アクセスできるため、文字列にも使用できます。

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
