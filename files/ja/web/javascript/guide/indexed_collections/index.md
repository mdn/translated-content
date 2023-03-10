---
title: インデックス付きコレクション
slug: Web/JavaScript/Guide/Indexed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}

この節では、インデックス値により順序付けされたデータのコレクションを紹介します。これには配列と、 {{jsxref("Array")}} オブジェクトや {{jsxref("TypedArray")}} オブジェクトなどの配列風の構造物があります。

## `Array` オブジェクト

**配列**は、名前やインデックスで参照する値からなる順序付きリストです。

例えば、 `emp` という配列を作成し、従業員番号と従業員の名前を対応付けたとします。つまり、`emp[0]` が従業員番号 0、`emp[1]` が従業員番号 1、のようになります。

JavaScript は明確な配列データ型を持っていません。しかし、アプリケーションでは配列として機能する定義済みの `Array` オブジェクトとそのメソッドを利用することができます。`Array` オブジェクトには、結合、反転、ソートなど様々な方法で配列を操作するメソッドがあります。また、配列の長さを特定するプロパティや、正規表現で使用するプロパティなどがあります。

### 配列の生成

以下の文は同じ配列を生成します。

```js
let arr = new Array(element0, element1, ..., elementN)
let arr = Array(element0, element1, ..., elementN)
let arr = [element0, element1, ..., elementN]
```

`element0, element1, ..., elementN` は配列要素になる値のリストです。これらの値が指定されると、この配列の要素はそれらの値に初期化されます。配列の `length` プロパティは引数の数に設定されます。

角括弧による構文は「配列リテラル」または「配列初期化子」と呼ばれます。この構文はその他の形式による配列作成よりも短いため、一般的に好まれる方法です。詳細については、[配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)をご覧ください。

長さがゼロではないが項目のない配列を作成するには、以下の方法が使用できます。

```js
// これは...
let arr = new Array(arrayLength)

// ...このような結果になります
let arr = Array(arrayLength)


// これも同じ効果があります
let arr = []
arr.length = arrayLength
```

> **メモ:** 上記のコードでは、 `arrayLength` は `Number` (数値) である必要があります。さもないと、 (指定した値の) 単一の要素を持つ配列が生成されます。 `arr.length` を呼び出すと `arrayLength` が返されますが、実際には配列は空要素 (undefined) で構成されます。この配列で {{jsxref("Statements/for...in","for...in")}} ループを実行しても、配列の要素は返されません。

上記のように新規に定義した変数に割り当てるだけでなく、新規または既存のオブジェクトのプロパティに配列を割り当てることができます。

```js
let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// または
let obj = {prop: [element0, element1, ...., elementN]}
```

単一の要素で配列を初期化しようとして、その要素が `Number` である場合、角括弧の構文を使用する必要があります。単一の `Number` 値が `Array()` コンストラクターや関数に渡されると、単一の数値要素としてではなく、`arrayLength` として解釈されます。

```js
let arr = [42]       // 42 という数の要素を
                     // 1 個だけ持つ配列が作られます。

let arr = Array(42)  // 要素がなく、arr.length が
                     // 42 に設定された配列が作られます。
                     //
                     // 以下のコードと同様です。
let arr = []
arr.length = 42
```

`N` の値が小数部分がゼロではない実数である場合、 `Array(N)` を呼び出すと、結果は `RangeError` になります。以下の例ではこの動作を示します。

```js
let arr = Array(9.3)   // RangeError: Invalid array length
```

任意のデータ型の単一の要素を持つ配列を作成したければ、配列リテラルを使用する方が安全です。あるいは、単一の要素を追加する前に空の配列を作成しましょう。

ES2015 から単一の要素を持つ配列を生成するために {{jsxref("Array.of")}} 静的メソッドを使用することができます。

```js
let wisenArray = Array.of(9.3)   // wisenArray は 1 つの要素 9.3 だけを持つ配列
```

### 配列要素の参照

要素はプロパティでもあるので、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使ってアクセスすることができます。以下の配列を定義するとします。

```js
let myArray = ['Wind', 'Rain', 'Fire']
```

要素のインデックスは 0 から始まるので、配列の 1 番目の要素を `myArray[0]`、2 番目の要素を `myArray[1]` と呼ぶことができます。

> **メモ:** [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用して、オブジェクトのように配列の他のプロパティにアクセスすることもできます。
>
> ```js
> let arr = ['one', 'two', 'three']
> arr[2]          // three
> arr['length']   // 3
> ```

### 配列へのデータ追加

下記のように、要素に値を割り当てることで配列にデータを追加することができます。

```js
let emp = []
emp[0] = 'Casey Jones'
emp[1] = 'Phil Lesh'
emp[2] = 'August West'
```

> **メモ:** 上記のコードで配列演算子 (角括弧) 内に非整数値を指定すると、配列要素ではなく配列を表すオブジェクトのプロパティとして作成されます。
>
> ```js
> let arr = []
> arr[3.4] = 'Oranges'
> console.log(arr.length)                 // 0
> console.log(arr.hasOwnProperty(3.4))    // true
> ```

配列を作成するときにも、データを追加することができます。

```js
let myArray = new Array('Hello', myVar, 3.14159)
// または
let myArray = ['Mango', 'Apple', 'Orange']
```

### 配列の長さの理解

実装レベルでは、 JavaScript の配列は、配列のインデックスをプロパティ名として使用して、その要素を標準的なオブジェクトのプロパティとして格納します。

`length` プロパティは特別です。これは常に最終要素のインデックス +1 を返します (次の例では、`'Dusty'` のインデックスは `30` なので、`cats.length` は `30 + 1` を返します)。

JavaScript の配列のインデックスは `0` から始まるものであり、 `1` からではないことを覚えておいてください。これは、`length` プロパティは配列に格納されている最大のインデックスより 1 つ大きい値になるということです。

```js
let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31
```

`length` プロパティに値を割り当てることもできます。

格納されているアイテムの数より小さい値を設定すると、配列は切り捨てられます。すなわち、`0` に設定すると完全に配列を空にします。

```js
let cats = ['Dusty', 'Misty', 'Twiggy']
console.log(cats.length)  // 3

cats.length = 2
console.log(cats)  // ログに "Dusty, Misty"  - Twiggy は削除される

cats.length = 0
console.log(cats)  // ログに [ ] 、配列 cats は空になる

cats.length = 3
console.log(cats)  // ログに [ <3 個の空スロット> ]
```

### 配列の反復処理

よく行われるのは配列に含まれる値に対し、それぞれの値について、なんらかの処理を行うことです。これを行う一番簡単な方法は次のとおりです。

```js
let colors = ['red', 'green', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}
```

配列内の要素がいずれも論理値としては `false` に評価されないことがわかっている場合 ― 例えば配列が [DOM](/ja/docs/Web/API/Document_Object_Model) ノードのみで構成されている場合などには、例のように、より効率的な表現を使用できます。

```js
let divs = document.getElementsByTagName('div')
for (let i = 0, div; div = divs[i]; i++) {
  /* div に対して何らか処理をする */
}
```

この例では、配列の長さのチェックに掛かるオーバーヘッドを回避しています。そしてより便利に使えるように、ループの反復のたびに `div` 変数に現在の項目を代入するようにしています。

配列を反復処理する別の方法として {{jsxref("Array.forEach", "forEach()")}} メソッドがあります。

```js
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue
```

あるいは、ES2015 のアロー関数式を forEach の引数にしてコードを短縮することもできます。

```js
let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))
// red
// green
// blue
```

`forEach` に渡される関数では、その関数への引数に配列の要素が渡されて、配列内の各項目ごとに 1 回ずつ実行されます。値が割り当てられていない要素は `forEach` ループで反復されません。

配列定義の際に省略された要素は、`forEach` によって反復処理されるときには現れませんが、配列要素に `undefined` が割り当てられている場合は現れることに注意してください。

```js
let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// fourth

if (array[2] === undefined) {
  console.log('array[2] is undefined')  // true
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
// first
// second
// undefined
// fourth
```

JavaScript では、配列の要素は標準的なオブジェクトプロパティとして保存されるので、{{jsxref("Statements/for...in","for...in")}} ループを使って JavaScript 配列を反復処理するのはお勧めできません。というのも、通常の要素とすべての列挙可能なプロパティが現れるからです。

### 配列のメソッド

{{jsxref("Array")}} オブジェクトには以下のようなメソッドがあります。

{{jsxref("Array.concat", "concat()")}} は 2 つの配列を結合し、新しい配列を返します。

```js
let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
// myArray は ["1", "2", "3", "a", "b", "c"] になる
```

{{jsxref("Array.join", "join(delimiter = ',')")}} は配列のすべての要素を文字列に結合します。

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
let list = myArray.join(' - ')  // list は "Wind - Rain - Fire" になる
```

{{jsxref("Array.push", "push()")}} は 1 つ以上の要素を配列の最後に追加し、その新しい配列の長さを返します。

```js
let myArray = new Array('1', '2')
myArray.push('3')  // myArray は ["1", "2", "3"] になる
```

{{jsxref("Array.pop", "pop()")}} は配列から最後の要素を取り除き、その要素を返します。

```js
let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray は ["1", "2"] に、last は "3" になる
```

{{jsxref("Array.shift", "shift()")}} は配列から最初の要素を取り除き、その要素を返します。

```js
let myArray = new Array('1', '2', '3')
let first = myArray.shift()
// myArray は ["2", "3"]に、first は "1" になる
```

{{jsxref("Array.shift", "unshift()")}} は 1 つ以上の要素を配列の先頭に追加し、その新しい配列の長さを返します。

```js
let myArray = new Array('1', '2', '3')
myArray.unshift('4', '5')
// myArray は ["4", "5", "1", "2", "3"] になる
```

{{jsxref("Array.slice", "slice(start_index, upto_index)")}} は配列の一部を抽出し、新しい配列を返します。

```js
let myArray = new Array('a', 'b', 'c', 'd', 'e')
myArray = myArray.slice(1, 4)  // インデックス 1 から始め、インデックス 3 まですべての要素を
                               // 展開して、[ "b", "c", "d"] を返す
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} は要素を配列から取り除き、 (必要に応じて) 置き換えます。

```js
let myArray = new Array('1', '2', '3', '4', '5')
myArray.splice(1, 3, 'a', 'b', 'c', 'd')
// myArray は ["1", "a", "b", "c", "d", "5"] になる
// このコードは、インデックス 1 の要素 ("2" のあった場所) から始まり、
// 3 つの要素を削除して、そこに後続のすべての要素を挿入します。
```

{{jsxref("Array.reverse", "reverse()")}} は配列の中の要素をその場で反転させます。配列の最初の要素が最後に、最後の要素が最初になります。配列への参照を返します。

```js
let myArray = new Array('1', '2', '3')
myArray.reverse()
// 配列要素が入れ替えられ、myArray = ["3", "2", "1"] になる
```

{{jsxref("Array.sort", "sort()")}} は配列の要素をその場でソートし、その配列の参照を返します。

```js
let myArray = new Array('Wind', 'Rain', 'Fire')
myArray.sort()
// 配列がソートされ、myArray = ["Fire", "Rain", "Wind"] になる
```

`sort()` は要素を比較する方法を指定するための、コールバック関数を引数として取ることがあります。

コールバック関数を引数として取る `sort` メソッド (および以下のメソッド) は、らかの形で配列全体を反復処理することから、**反復メソッド** (iterative method") と呼ばれています。それぞれが任意で `thisObject` と呼ばれる第二引数を受け取ります。`thisObject` が与えられた場合、これがコールバック関数の本体内で `this` キーワードの値になります。与えられなかった場合は、関数が明示的なオブジェクトコンテキストの外で呼び出された場合と同様に、`this` はアロー関数がコールバックとして使用された場合にはグローバルオブジェクト ([`window`](/ja/docs/Web/API/Window)) を参照し、通常の関数の場合には `undefined` になります。

コールバック関数は、配列の要素 2 つを引数として呼び出されます。

以下の関数は 2 つの値を比較して、3 つの値のうち 1 つを返します。

つまり、以下の例は文字列の最後の文字で並べ替えをします。

```js
let sortFn = function(a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn)
// 配列がソートされ、 myArray = ["Wind","Fire","Rain"] になる
```

- このソートシステムにより `a` が `b` より小さいとされた場合、 `-1` (または、任意の負の数) を返します。
- このソートシステムにより `a` が `b` より大きいとされた場合、 `1` (または、任意の正の数) を返します。
- `a` と `b` が等値と見なされる場合、 `0` を返します。

{{jsxref("Array.indexOf", "indexOf(searchElement[, fromIndex])")}} は配列から `searchElement` を検索します。そして、最初に一致した位置のインデックスを返します。

```js
let a = ['a', 'b', 'a', 'b', 'a']
console.log(a.indexOf('b'))     // 1 がログに出力される

// 最初から最後への検索を試してみる
console.log(a.indexOf('b', 2))  // 3 がログに出力される
console.log(a.indexOf('z'))     // 'z' は見つからないので -1 がログに出力される
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement[, fromIndex])")}} は `indexOf` のように動作しますが、最後の要素から開始して前方に検索します。

```js
let a = ['a', 'b', 'c', 'd', 'a', 'b']
console.log(a.lastIndexOf('b'))     // 5 がログに出力される

// 最後から最初への検索を試してみる
console.log(a.lastIndexOf('b', 4))  // 1 がログに出力される
console.log(a.lastIndexOf('z'))     // -1 がログに出力される
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} はすべての配列アイテムにコールバック関数 `callback` を実行し、 `undefined` を返します。

```js
let a = ['a', 'b', 'c']
a.forEach(function(element) { console.log(element) })
// 順番にそれぞれのアイテムをログに出力する
```

{{jsxref("Array.map", "map(callback[, thisObject])")}} はすべての配列アイテムごとにコールバック関数 `callback` を実行し、返値からなる新しい配列を返します。

```js
let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase() })
console.log(a2) // ['A', 'B', 'C'] がログに出力される
```

{{jsxref("Array.filter", "filter(callback[, thisObject])")}} はコールバック関数 `callback` が true を返すアイテムからなる新しい配列を返します。

```js
let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // [10, 20, 30] がログに出力される
```

{{jsxref("Array.every", "every(callback[, thisObject])")}} はコールバック関数 `callback` が配列内のすべてのアイテムで true を返す場合に true を返します。

```js
function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.every(isNumber))  // true がログに出力される
let a2 = [1, '2', 3]
console.log(a2.every(isNumber))  // false がログに出力される
```

{{jsxref("Array.some", "some(callback[, thisObject])")}} はコールバック関数 `callback` が配列内の少なくとも一つのアイテムで true を返す場合に true を返します。

```js
function isNumber(value) {
  return typeof value === 'number'
}
let a1 = [1, 2, 3]
console.log(a1.some(isNumber))  // true がログに出力される
let a2 = [1, '2', 3]
console.log(a2.some(isNumber))  // true がログに出力される
let a3 = ['1', '2', '3']
console.log(a3.some(isNumber))  // false がログに出力される
```

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} は、配列の各値に対して `callback(accumulator, currentValue[, currentIndex[, array]])` を適用し、項目のリストを一つの値に減らすことを目的としています。 `reduce` 関数は、 `callback` 関数によって返された最終的な値を返します。

`initialValue` が指定された場合は、`initialValue` を第 1 引数の値として、配列の最初の項目の値を第 2 引数の値として`コールバック`が呼び出されます。

`initialValue` が指定されて*いない*場合、`コールバックの`の最初の 2 つの引数の値は、配列の最初と 2 番目の要素になります。後続の*すべての*呼び出しで、最初の引数の値は前の呼び出しで`コールバック`が返した値になり、2 番目の引数の値は配列の次の値になります。

`コールバック`が処理対象の項目のインデックスにアクセスする必要がある場合は、配列全体にアクセスするときに、オプションの引数として利用できます。

```js
let a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator + currentValue }, 0)
console.log(total) // 60 がログに出力される
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} は `reduce()` のように機能します。しかし最後の要素から適用を開始します。

`reduce` と `reduceRight` もある意味では配列の反復メソッドです。要素列を単一の値に還元するために、再帰的に 2 つの値を組み合わせるアルゴリズムにこれらのメソッドを使用してください。

### 多次元配列

配列をネストすることができます、つまり配列要素として配列を含めることができることを意味します。JavaScript の配列の特徴を活かして、多次元配列を生成できます。

以下のコードでは 2 次元配列を作成しています。

```js
let a = new Array(4)
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}
```

この例では、次のテーブル行を持つ配列を作成しています。

```
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

### 配列を使用して他のプロパティを格納する

配列は、オブジェクトのように関連する情報を格納するために使用することもできます。

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property);  // "value" がログに出力される
```

### 配列と正規表現

配列が正規表現と文字列との間の一致結果である場合、その配列は一致についての情報を提供するプロパティと要素を返します。{{jsxref("Global_Objects/RegExp/exec","RegExp.exec()")}}、{{jsxref("Global_Objects/String/match","String.match()")}}、{{jsxref("Global_Objects/String/split","String.split()")}} による返値がこうした配列となります。正規表現とともに配列を使用する際の情報については、当ガイドの[正規表現](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)の章をご覧ください。

### 配列風オブジェクトを利用する

[`document.getElementsByTagName()`](/ja/docs/Web/API/Document/getElementsByTagName) によって返される [`NodeList`](/ja/docs/Web/API/NodeList) や、関数本体内で利用できる {{jsxref("Functions/arguments","arguments")}} オブジェクトのように、表面上は配列のようにふるまう JavaScript オブジェクトがありますが、これらはメソッドすべてを共有してはいません。例えば、 `arguments` オブジェクトには {{jsxref("Global_Objects/Function/length","length")}} 属性がありますが、{{jsxref("Array.forEach", "forEach()")}} メソッドは実装されていません。

配列風オブジェクトに対して配列メソッドを直接呼び出すことはできません。

```js example-bad
function printArguments() {
  arguments.forEach(function(item) {  // TypeError: arguments.forEach is not a function
    console.log(item);
  });
}
```

これを行うには、 {{jsxref("Global_Objects/Function/call","Function.prototype.call()")}} を使って間接的に呼び出します。

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, function(item) {
    console.log(item);
  });
}
```

配列のプロトタイプメソッドは、配列と同様の方法で文字に逐次アクセスできるため、文字列にも使用できます。

```js
Array.prototype.forEach.call('a string', function(chr) {
  console.log(chr)
})
```

## 型付き配列

[JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)は配列風オブジェクトで、生のバイナリーデータにアクセスする仕組みをもたらします。ご存知のように、{{jsxref("Array")}} オブジェクトは動的に拡大・縮小し、 JavaScript におけるいかなる値でも保持することができます。 JavaScript エンジンは最適化を行うため、これらの配列は高速に機能します。しかし、ウェブアプリケーションがますます強力になり、音声や動画の操作、 [WebSocket](/ja/docs/Web/API/WebSockets_API) を使った生データへのアクセス等の機能が追加されるつれ、 JavaScript コードが型付き配列の生のバイナリデータを素早く簡単に操作できると便利な場合があることが明らかになりました。

### バッファとビュー : 型付き配列のアーキテクチャ

最大の柔軟性と効率性を達成するため、JavaScript 型付き配列の実装を**バッファ**と**ビュー**に分離しました。バッファ ({{jsxref("ArrayBuffer")}} オブジェクトによる実装) はデータのかたまりを表すオブジェクトです。語るほどのフォーマットはなく、データの中身にアクセスするためのメカニズムを提供しません。バッファに含まれるメモリーにアクセスするには、ビューを使用する必要があります。ビューはデータを実際の型付き配列に変換する**コンテキスト** — つまり、データ型、開始位置のオフセット、要素数 — を提供します。

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}} は汎用的な固定長のバイナリーデータバッファを表すために使用されるデータ型です。`ArrayBuffer` の内容は直接操作できません。かわりに、型付き配列ビューか特定のフォーマットでバッファを表す {{jsxref("DataView")}} を生成し、それらをバッファの内容の読み書きに使用します。

### 型付き配列ビュー

型付き配列ビューは自己記述的な名前を持っていて、そのすべてが `Int8`, `Uint32`, `Float64` などといったよく見られる数値型用のビューを提供しています。`Uint8ClampedArray` という 1 つ特別な型付き配列ビューがあります。これは、0〜255 の範囲に値を固定します。これは、例えば、[Canvas のデータ処理](/ja/docs/Web/API/ImageData)に便利です。

| 型                                       | 値の範囲                          | サイズ (バイト数) | 説明                                                           | Web IDL 型            | 同等の C 型                     |
| ---------------------------------------- | --------------------------------- | ----------------- | -------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` から `127`                 | 1                 | 8 ビット 2 の補数方式の符号付き整数値                          | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` から `255`                    | 1                 | 8 ビット 符号なし整数値                                        | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` から `255`                    | 1                 | 8 ビット 符号なし整数値 (切り詰め)                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` から `32767`             | 2                 | 16 ビット 2 の補数方式の符号付き整数値                         | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` から `65535`                  | 2                 | 16 ビット 符号なし整数値                                       | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` から `2147483647`   | 4                 | 32 ビット 2 の補数方式の符号付き整数値                         | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` から `4294967295`             | 4                 | 32 ビット 符号なし整数値                                       | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2`×`10-38` から `3.4`×`1038`   | 4                 | 32 ビット IEEE 浮動小数点数 (7 桁の有効数字 例：`1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5.0`×`10-324` から `1.8`×`10308` | 8                 | 64 ビット IEEE 浮動小数点数 (16 桁の有効数字 例：`1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-263` から `263-1`               | 8                 | 64 ビット 2 の補数方式の符号付き整数値                         | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` から `264-1`                  | 8                 | 64 ビット 符号なし整数値                                       | `bigint`              | `uint64_t (unsigned long long)` |

詳細については、[JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)と様々な {{jsxref("TypedArray")}} オブジェクトに関するリファレンスをご覧ください。

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Keyed_Collections")}}
