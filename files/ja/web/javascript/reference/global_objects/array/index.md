---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Array`** オブジェクトは、他のプログラミング言語の配列と同様に、[複数のアイテムの集合を単一の変数名の下に格納](/ja/docs/Learn_web_development/Core/Scripting/Arrays)することができ、[共通の配列操作を行う](#例)ためのメンバーを持っています。

## 解説

JavaScript では、配列は[プリミティブ](/ja/docs/Glossary/Primitive)ではなく、主に次のような性質を持つ `Array` オブジェクトです。

- **JavaScript の配列はリサイズ可能**であり、**異なる[データ型](/ja/docs/Web/JavaScript/Guide/Data_structures)を交ぜて格納することができます**。（これらの性質が望ましくない場合は、代わりに[型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)を使用してください）。
- **JavaScript の配列は連想配列ではありません**。配列の要素は添字として任意の文字列を使用してアクセスすることができません。非負の整数（またはそれぞれの文字列表現）を添字として使用してアクセスする必要があります。
- **JavaScript の配列は[ゼロオリジン](https://ja.wikipedia.org/wiki/オリジン)です**。配列の最初の要素は `0` の位置にあり、 2 番目の要素は `1` の位置にあるといった具合です。そして、最後の要素は配列の {{jsxref("Array/length", "length")}} プロパティの値から `1` を引いた位置になります。
- **JavaScript の[配列コピー操作](#配列のコピー)は[シャローコピー](/ja/docs/Glossary/Shallow_copy)を生成します**。（JavaScript オブジェクトに対するすべての標準組み込みコピー操作は、[ディープコピー](/ja/docs/Glossary/Deep_copy)ではなく、シャローコピーを作成します）。

### 配列の添字

`Array` オブジェクトは要素の添字として任意の文字列を（[連想配列](https://en.wikipedia.org/wiki/Associative_array)のように）使用することはできません。非負の整数（またはその文字列形式）を使用しなければなりません。整数以外の値で設定したりアクセスしたりすると、配列のリスト自体の要素を設定したり取り出したりすることはできませんが、その配列の[オブジェクトプロパティの集合](/ja/docs/Web/JavaScript/Guide/Data_structures#プロパティ)に関連する変数を設定したりアクセスしたりすることができます。配列のオブジェクトプロパティと配列要素のリストは別個のものであり、配列の[探索や変更操作](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列のメソッド)はこれらの名前付きプロパティに適用することができません。

`toString` が一つのプロパティであるのと同様に（ただし厳密には `toString()` はメソッドですが）、配列における配列要素はオブジェクトのプロパティです。しかし、次のように配列にアクセスしようとすると、プロパティ名が妥当でないため、構文エラーが発生します。

```js-nolint example-bad
arr.0; // 構文エラー
```

JavaScript の構文では、数字で始まるプロパティには[ブラケット記法](/ja/docs/Web/JavaScript/Guide/Working_with_objects#オブジェクトとプロパティ)を使う必要があり、[ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)を使うことはできません。また、配列の添字を引用符で囲むことができますが（`years[2]` の代わりに `years['2']` のように）、ふつうはそうする必要はありません。

`years[2]` の `2` は最終的に、JavaScript エンジンが内部的に `toString` メソッドで型変換することで文字列にされます。これは '2' と '02' が `years` オブジェクトの異なる場所を指すようにするためでです。このため、以下の例は `true` がログ出力されます。

```js
console.log(years["2"] !== years["02"]);
```

`years['2']` だけが実際の配列の添字です。 `years['02']` は自由な文字列のプロパティであり、配列の反復処理では処理されません。

### length と数値プロパティとの関係

JavaScript の配列の {{jsxref("Array/length", "length")}} プロパティと数値プロパティは関連しています。

配列の一部の組込みメソッド（例えば {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, など）は、配列の {{jsxref("Array/length", "length")}} プロパティの値はメソッドの呼び出し時の値を考慮します。

他にも（例えば {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, など）、結果として配列の {{jsxref("Array/length", "length")}} プロパティを更新するメソッドがあります。

```js
const fruits = [];
fruits.push("バナナ", "りんご", "もも");
console.log(fruits.length); // 3
```

JavaScript の配列で、配列の添字として妥当なプロパティであり、かつ現在の配列の範囲の外にある添字を設定すると、エンジンは配列の {{jsxref("Array/length", "length")}} プロパティを更新します。

```js
fruits[5] = "マンゴー";
console.log(fruits[5]); // "マンゴー"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

{{jsxref("Array/length", "length")}} を増やすと、 `undefined` でもなく、新しい要素を作成せずに空のスロットを追加して配列を拡張します。

```js
fruits.length = 10;
console.log(fruits); // ['バナナ', 'りんご', 'もも', 空 x 2, 'マンゴー', 空 x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

一方、 {{jsxref("Array/length", "length")}} プロパティの数を減らすと、要素が削除されます。

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

これらについては {{jsxref("Array/length")}} のページで詳しく解説します。

### 配列メソッドと空のスロット

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)で空のスロットに遭遇した場合、配列メソッドの挙動はさまざまです。一般的に、古いメソッド（`forEach` など）では、空のスロットと `undefined` の値を格納する位置を異なる方法で処理します。

空のスロットに特別な処理を行うメソッドには、 {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/splice", "splice()")}} があります。`forEach` などの反復処理メソッドは、空のスロットをまったく処理しません。他にも `concat` や `copyWithin` など、コピーする際に空の要素を維持するメソッドもありますが、結局のところ配列は疎のままです。

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// 出力:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', 空 × 2, 'blue', 'yellow', 'red']
```

新しいメソッド（`keys` など）は、空のスロットを特別扱いせず、`undefined` が格納されているかのように扱います。空のスロットと `undefined` 要素を同一視するメソッドには、{{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}}, {{jsxref("Array/with", "with()")}} などがあります。

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// 出力t
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
```

### コピーメソッドと変更メソッド

メソッドの中には、呼び出された既存の配列を変更せずに新しい配列を返すものもあります。その場合は、まず新しい配列を作成し、そこに要素を代入します。コピーは常に[シャローコピー](/ja/docs/Glossary/Shallow_copy)で行われ、メソッドは最初に作成された配列以外をコピーすることはありません。元の配列の要素は、次のように新しい配列にコピーされます。

- オブジェクトの場合は、オブジェクトの参照が新しい配列にコピーされます。元の配列と新しい配列の両方が同じオブジェクトを参照します。つまり、参照するオブジェクトが変更された場合、その変更は新しい配列と元の配列の両方に反映されます。
- 文字列、数値、論理値などのプリミティブ型（{{jsxref("String")}}, {{jsxref("Number")}}, {{jsxref("Boolean")}} オブジェクトではないもの）の場合、値は新しい配列へコピーされます。

他にも、メソッドが呼び出された配列を変更するメソッドがあります。この場合、メソッドによって返値が異なります。あるものは同じ配列への参照を、あるものは新しい配列の長さを返します。

[`this.constructor[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) にアクセスして使用するコンストラクターを決定し、新しい配列を作成するメソッドは、{{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/splice", "splice()")}}（返される要素を取り除いた配列を構成するため）です。

常に `Array` ベースのコンストラクターで新しい配列を作成するメソッドは、{{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/with", "with()")}} です。

次の表は、元の配列を変更メソッドと、それに対応する変更しない代替メソッドの一覧です。

| 変更メソッド                                   | 変更しない代替メソッド                                   |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | 代替メソッドなし                                         |
| {{jsxref("Array/fill", "fill()")}}             | 代替メソッドなし                                         |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

変更メソッドを変更しない代替メソッドに変更する簡単な方法は、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax) や {{jsxref("Array/slice", "slice()")}} を使って最初にコピーを作成することです。

```js-nolint
arr.copyWithin(0, 1, 2); // arr を変更
const arr2 = arr.slice().copyWithin(0, 1, 2); // arr を変更しない
const arr3 = [...arr].copyWithin(0, 1, 2); // arr を変更しない
```

### 反復処理メソッド

多くの配列メソッドは、コールバック関数を引数にとります。コールバック関数は配列のそれぞれの要素に対して順次、最大1回呼び出され、コールバック関数の返値はメソッドの返値を決定するために使用されます。これらはすべて同じ形式です。

```js-nolint
method(callbackFn, thisArg)
```

`callbackFn` は 3 つの引数を取ります。

- `element`
  - : 配列の中で現在処理されている要素。
- `index`
  - : 配列の中で、現在処理中の要素の添字。
- `array`
  - : メソッドが呼び出された配列。

`callbackFn` が何を返すかは、呼び出された配列メソッドによって異なります。

引数 `thisArg` （既定値は `undefined`）は、`callbackFn` を呼び出す際に `this` 値として使用されます。`callbackFn` から最終的に見える `this` 値は、[通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決定します。もし `callbackFn` が[厳格モードではない](/ja/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution)のであれば、`this` の値がプリミティブ型であった場合はオブジェクトにラップされ、`undefined`/`null` の場合は [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) に置き換わります。`callbackFn` が[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)で定義されていた場合は、`thisArg` 引数は関係ありません。アロー関数には自分自身の `this` の{{Glossary("binding", "バインディング")}}がないためです。

`callbackFn` に渡される引数 `array` は、反復処理中に別の要素を読み込みたい場合に最も便利です。なぜなら、現在の配列を参照する既存の変数が常に存在するとは限らないからです。通常、反復処理中に配列を変更すべきではありません（[反復処理内での初期配列の変更](#反復処理内での初期配列の変更)を参照）。しかし、この引数を使用して変更することもできます。配列引数は、`map()`、`filter()`、`flatMap()` などのメソッドの場合、構築中の配列ではありません。構築中の配列にコールバック関数からアクセスする方法はありません。

すべての反復可能オブジェクトは[コピー可能](#コピーメソッドと変更メソッド)で[汎用性](#汎用的な配列メソッド)がありますが、[空のスロット](#配列メソッドと空のスロット)では異なる形で動作します。

反復処理可能なメソッドは、{{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/some", "some()")}} です。

具体的には、{{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/some", "some()")}} は常にすべての要素に対して `callbackFn` を呼び出すわけではなく、返値が決定するとすぐに反復処理を停止します。

{{jsxref("Array/reduce", "reduce()")}} および {{jsxref("Array/reduceRight", "reduceRight()")}} メソッドもコールバック関数を取り、配列のそれぞれの要素に対して最大 1 回実行しますが、一般的な反復処理メソッドとは少し異なる形式を持っています（`thisArg` を受け入れないなど）。

{{jsxref("Array/sort", "sort()")}} メソッドもコールバック関数を取りますが、反復処理するメソッドではありません。配列の配置を変更し、`thisArg` を受け入れず、1 つの要素に対して複数回コールバックを呼び出すことがあります。

反復処理メソッドは、以下のように配列を反復処理します（技術的な詳細は省略します）。

```js
function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // 結果に対して何かをする。早く戻ることもある
    }
  }
}
```

以下の点に注意してください。

1. すべてのメソッドが `i in this` の検査を行うわけではありません。 `find`、`findIndex`、`findLast`、`findLastIndex` の核メソッドは行いませんが、他のメソッドは行います。
2. `length` は、ループ開始前に記憶されます。これは、反復処理中の挿入や削除を処理する方法に影響します（[反復処理内での初期配列の変更](#反復処理内での初期配列の変更)を参照）。
3. このメソッドは配列の要素を記憶しないため、反復処理中に要素が変更された場合、新しい値が取得される可能性があります。
4. 上記のコードは、添字の昇順で配列を反復処理します。添字の降順で反復処理（`for (let i = length - 1; i >= 0; i--)`）するメソッドは `reduceRight()`、`findLast()`、`findLastIndex()` です。
5. `reduce` と `reduceRight` は、シグネチャが若干異なり、常に最初の要素または最後の要素から始めるわけではありません。

### 汎用的な配列メソッド

配列メソッドは常に汎用的であり、配列オブジェクトの内部データにはアクセスしません。配列の要素には `length` プロパティを通してアクセスし、その位置の要素をアクセスするだけです。つまり、配列風オブジェクトに対しても呼び出すことができます。

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### length プロパティの正規化

`length` プロパティは[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数変換)され、0 から 2<sup>53</sup> - 1 までの範囲に収められます。`NaN` は `0` となるので、`length` が存在しないか `undefined` であっても `0` という値を持つものとして扱われます。

言語は `length` を[安全でない整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)に設定することを避けます。もし `length` が 2<sup>53</sup> - 1 より大きい数に設定されると、すべての組み込みメソッドは {{jsxref("TypeError")}} を発生させます。しかし、配列の {{jsxref("Array/length", "length")}} プロパティは、2<sup>32</sup> - 1 より大きい値に設定されるとエラーが発生するので、メソッドが非配列オブジェクトで呼び出されない限り、安全な整数のしきい値に達することは通常ありません。

```js
Array.prototype.flat.call({}); // []
```

配列メソッドの中には、配列オブジェクトの `length` プロパティを設定するものがあります。これらのメソッドは常に正規化後の値を設定するので、`length` は常に整数値になります。

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### 配列風オブジェクト

[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)とは、上記の `length` の処理で例外が発生しないオブジェクトのことです。具体的に言うと、このようなオブジェクトには実際に `length` プロパティがあり、`0` から `length - 1` までの添字つき要素を持つことが期待されます（すべての要素が存在するわけではない場合は、機能的に[疎配列](#配列メソッドと空のスロット)と同等となります）。配列メソッドが配列風オブジェクトを処理するとき、 0 より小さいか `length - 1` より大きい整数の添字は無視されます。

多くの DOM オブジェクトは、例えば [`NodeList`](/ja/docs/Web/API/NodeList) や [`HTMLCollection`](/ja/docs/Web/API/HTMLCollection) は配列風です。また、[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトも配列風です。自分自身に配列メソッドがなくても、その配列メソッドを呼び出すことができます。

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## コンストラクター

- {{jsxref("Array/Array", "Array()")}}
  - : 新しい `Array` オブジェクトを生成します。

## 静的プロパティ

- [`Array[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : `Array` コンストラクターを返します。

## 静的メソッド

- {{jsxref("Array.from()")}}
  - : 新しい `Array` インスタンスを反復可能 (iterable) または配列風 (array-like) オブジェクトから生成します。
- {{jsxref("Array.fromAsync()")}}
  - : 非同期反復可能、反復可能、配列風オブジェクトを元に、新しい `Array` インスタンスを作成します。
- {{jsxref("Array.isArray()")}}
  - : 配列であれば `true` を、配列でなければ `false` を返します。
- {{jsxref("Array.of()")}}
  - : 可変個の引数から、引数の個数や型に関わらず、新しい `Array` インスタンスを生成します。

## インスタンスプロパティ

これらのプロパティは `Array.prototype` で定義されており、すべての `Array` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。 `Array` インスタンスの場合、初期値は {{jsxref("Array/Array", "Array")}} コンストラクターです。
- [`Array.prototype[Symbol.unscopables]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : ES2015 版以前の ECMAScript 標準に含まれておらず、 [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) による文のバインドの目的には無視されるプロパティ名を含みます。

これらのプロパティはそれぞれの `Array` インスタンスが自分自身で持つプロパティです。

- {{jsxref("Array/length", "length")}}
  - : 配列内の要素数を反映します。

## インスタンスメソッド

- {{jsxref("Array.prototype.at()")}}
  - : 指定された位置にある配列の項目を返します。負の整数も指定可能で、末尾の項目から戻ります。
- {{jsxref("Array.prototype.concat()")}}
  - : この配列に他の配列や値を結合して新しい配列を返します。
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 配列内で配列内の連続した要素を複写します。
- {{jsxref("Array.prototype.entries()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。このオブジェクトは、配列中のそれぞれの位置に対するキー/値の組を保持しています。
- {{jsxref("Array.prototype.every()")}}
  - : 指定したテスト関数を配列中のすべての要素が満たした場合に `true` を返します。
- {{jsxref("Array.prototype.fill()")}}
  - : 配列内の指定した開始位置から終了位置までの要素を固定値で埋めます。
- {{jsxref("Array.prototype.filter()")}}
  - : 指定したフィルタリング関数が `true` を返す、配列中の要素を格納した新しい配列を生成します。
- {{jsxref("Array.prototype.find()")}}
  - : 指定されたたテスト関数を満たす、配列の最初の要素の値を返します。適切な要素が見つからなかった場合は `undefined` を返します。
- {{jsxref("Array.prototype.findIndex()")}}
  - : 指定されたテスト関数を満たす、配列の最初の要素の添字を返します。適切な要素が見つからなかった場合は `-1` を返します。
- {{jsxref("Array.prototype.findLast()")}}
  - : 指定されたたテスト関数を満たす、配列の最後の要素の値を返します。適切な要素が見つからなかった場合は `undefined` を返します。
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : 指定されたテスト関数を満たす、配列の最後の要素の添字を返します。適切な要素が見つからなかった場合は `-1` を返します。
- {{jsxref("Array.prototype.flat()")}}
  - : すべての部分配列の要素を指定された深さまで再帰的に連結した新しい配列を返します。
- {{jsxref("Array.prototype.flatMap()")}}
  - : コールバック関数を呼び出し元の配列の各要素に適用し、その結果を一段階平坦化した新しい配列を返します。
- {{jsxref("Array.prototype.forEach()")}}
  - : 配列中のそれぞれの要素について関数を呼び出します。
- {{jsxref("Array.prototype.includes()")}}
  - : この配列が特定の要素を含むかどうか判定し、その結果を `true` または `false` で返します。
- {{jsxref("Array.prototype.indexOf()")}}
  - : 指定された値と等しい値を持つ最初の（添字の一番小さい）要素の添字を返します。見つからない場合、`-1` を返します。
- {{jsxref("Array.prototype.join()")}}
  - : 配列のすべての要素を結合した文字列を返します。
- {{jsxref("Array.prototype.keys()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)を返します。このオブジェクトは配列中の各添字のキーを保持します。
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : 指定された値と等しい値を持つ最後の (添字の一番大きい) 要素の添字を返します。見つからない場合、`-1` を返します。
- {{jsxref("Array.prototype.map()")}}
  - : 配列内のすべての要素に対して与えられた関数を呼び出し、その結果を格納した新しい配列を生成します。
- {{jsxref("Array.prototype.pop()")}}
  - : 配列から最後の要素を取り除き、返値として返します。
- {{jsxref("Array.prototype.push()")}}
  - : 配列の最後に 1 個以上の要素を追加し、新しい配列の `length` を返します。
- {{jsxref("Array.prototype.reduce()")}}
  - : アキュムレーターと配列内のすべての要素に対して (左から右の順で) 関数を適用し、単一の値に還元します。
- {{jsxref("Array.prototype.reduceRight()")}}
  - : アキュムレーターと配列内のすべての要素に対して (右から左の順で) 関数を適用し、単一の値に還元します。
- {{jsxref("Array.prototype.reverse()")}}
  - : 配列の要素の順番を逆転させます (最初の要素は最後に、最後の要素は最初になります)。
- {{jsxref("Array.prototype.shift()")}}
  - : 配列から最初の要素を取り除き、その要素を返します。
- {{jsxref("Array.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列として返します。
- {{jsxref("Array.prototype.some()")}}
  - : 指定したテスト関数を配列中の少なくとも 1 個の要素が満たした場合に `true` を返します。
- {{jsxref("Array.prototype.sort()")}}
  - : 配列内で要素を整列し、配列を返します。
- {{jsxref("Array.prototype.splice()")}}
  - : 配列に対して複数の要素を追加したり取り除いたりします。
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : 配列とその要素を表すロケールに従った文字列を返します。{{jsxref("Object.prototype.toLocaleString()")}} メソッドを上書きします。
- {{jsxref("Array.prototype.toReversed()")}}
  - : 元の配列を変更せずに、要素を逆順に並べた新しい配列を返します。
- {{jsxref("Array.prototype.toSorted()")}}
  - : 元の配列を変更せずに、要素を昇順に並べた新しい配列を返します。
- {{jsxref("Array.prototype.toSpliced()")}}
  - : 元配列を変更することなく、指定された位置の要素を除去または置き換えた新しい配列を返します。
- {{jsxref("Array.prototype.toString()")}}
  - : 配列とその要素を表す文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きしています。
- {{jsxref("Array.prototype.unshift()")}}
  - : 配列の最初に 1 個以上の要素を追加し、配列の変更後の `length` を返します。
- {{jsxref("Array.prototype.values()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)オブジェクトを返します。このオブジェクトは、配列中の各添字の値を保持します。
- {{jsxref("Array.prototype.with()")}}
  - : 指定された位置の要素を指定された値で置き換えた新しい配列を、元の配列に変更を加えることなく返します。
- [`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : 既定では [`values()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/values) 関数を返します。

## 例

この節では、 JavaScript で一般的な配列操作の例をいくつか紹介します。

> [!NOTE]
> まだ配列の基本に慣れていない場合は、最初に [JavaScript の第一歩: 配列](/ja/docs/Learn_web_development/Core/Scripting/Arrays) の[配列とは何かの説明](/ja/docs/Learn_web_development/Core/Scripting/Arrays#配列とは何か)、およびよくある配列の操作の他の例を読んでみてください。

### 配列の作成

ここでは、新しい配列を作る 3 通りの方法を示しています。最初のものは[配列リテラル記法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#配列リテラル記法)を使用したもので、次は [`Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) コンストラクターを使用して、最後は [`String.prototype.split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) を使用して文字列から配列を構築しています。

```js
// 'fruits' 配列が配列リテラル記法で作成されています。
const fruits = ["りんご", "バナナ"];
console.log(fruits.length);
// 2

// 'fruits2' 配列が Array() コンストラクターで作成されています。
const fruits2 = new Array("りんご", "バナナ");
console.log(fruits2.length);
// 2

// 'fruits3' 配列が String.prototype.split() を使用して作成されています。
const fruits3 = "りんご, バナナ".split(", ");
console.log(fruits3.length);
// 2
```

### 配列から文字列を生成

この例では [`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) メソッドを使用して、配列 `fruits` から文字列を生成しています。

```js
const fruits = ["りんご", "バナナ"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "りんご, バナナ"
```

### 添字による配列の要素へのアクセス

この例では配列 `fruits` 内の項目に、配列内の位置を示す添字を指定することでアクセスする方法を示しています。

```js
const fruits = ["りんご", "バナナ"];

// 配列の最初の要素の添字は必ず 0 です。
fruits[0]; // りんご

// 配列の 2 番目の要素の添字は必ず 1 です。
fruits[1]; // バナナ

// 配列の末尾の要素の添字は、常に配列の長さよりも
// 1 だけ小さいものです。
fruits[fruits.length - 1]; // バナナ

// 配列の長さよりも大きな添字を使用すると、
// 'undefined' が返されます。
fruits[99]; // undefined
```

### 配列内のアイテムの添字を検索

この例では [`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) メソッドを使用して、文字列 `"バナナ"` の位置（添字）を配列 `fruits` の中から探します。

```js
const fruits = ["りんご", "バナナ"];
console.log(fruits.indexOf("バナナ"));
// 1
```

### 配列内に特定の項目があるかどうかを検査

この例では、配列 `fruits` が `"バナナ"` と `"さくらんぼ"` を含んでいるかどうかを確認する 2 つの方法を示しています。最初は [`includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) メソッドで、次に [`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) メソッドで、添字の値が `-1` でないことを確認します。

```js
const fruits = ["りんご", "バナナ"];

fruits.includes("バナナ"); // true
fruits.includes("さくらんぼ"); // false

// indexOf() が -1 を返さない場合、その配列はその項目を持っています。
fruits.indexOf("バナナ") !== -1; // true
fruits.indexOf("さくらんぼ") !== -1; // false
```

### 配列に項目を追加

この例では、 [`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) メソッドを使用して新しい文字列を配列 `fruits` に追加しています。

```js
const fruits = ["りんご", "バナナ"];
const newLength = fruits.push("みかん");
console.log(fruits);
// ["りんご", "バナナ", "みかん"]
console.log(newLength);
// 3
```

### 配列から最後の項目を取り除く

この例では、 [`pop()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) メソッドを使用して配列 `fruits` から最後の項目を取り除いています。

```js
const fruits = ["りんご", "バナナ", "みかん"];
const removedItem = fruits.pop();
console.log(fruits);
// ["りんご", "バナナ"]
console.log(removedItem);
// みかん
```

> [!NOTE]
> `pop()` は配列の最後の項目を削除するためだけに使用できます。配列の最後にある複数の項目を削除したい場合は、次の例を参照してください。

### 配列の最後から複数の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、配列 `fruits` から最後の 3 つの項目を取り除いています。

```js
const fruits = ["りんご", "バナナ", "いちご", "マンゴー", "さくらんぼ"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["りんご", "バナナ"]
console.log(removedItems);
// ["いちご", "マンゴー", "さくらんぼ"]
```

### 配列を最初の _N_ 項目ちょうどに切り詰める

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドはを使用して、配列 `fruits` を最初の 2 項目ちょうどに切り詰めます。

```js
const fruits = ["りんご", "バナナ", "いちご", "マンゴー", "さくらんぼ"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["りんご", "バナナ"]
console.log(removedItems);
// ["いちご", "マンゴー", "さくらんぼ"]
```

### 配列の最初から項目を取り除く

この例では [`shift()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) メソッドを使用して、最初の項目を配列 `fruits` から取り除きます。

```js
const fruits = ["りんご", "バナナ"];
const removedItem = fruits.shift();
console.log(fruits);
// ["バナナ"]
console.log(removedItem);
// りんご
```

> [!NOTE]
> `shift()` は最初の項目を配列から取り除く場合にのみ使用できます。複数の項目を配列の先頭から取り除く場合は、次の例を参照してください。

### 配列の先頭から複数のアイテムを取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、配列 `fruits` から先頭の 3 項目を取り除きます。

```js
const fruits = ["りんご", "いちご", "さくらんぼ", "バナナ", "マンゴー"];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["バナナ", "マンゴー"]
console.log(removedItems);
// ["りんご", "いちご", "さくらんぼ"]
```

### 配列に最初のアイテムを追加

この例では [`unshift()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) メソッドを使用して、配列 `fruits` の要素 `0` に新しい項目を追加します。これを配列の新しい先頭の項目にします。

```js
const fruits = ["バナナ", "マンゴー"];
const newLength = fruits.unshift("いちご");
console.log(fruits);
// ["いちご", "バナナ", "マンゴー"]
console.log(newLength);
// 3
```

### 添字を指定して単一の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、文字列 `"バナナ"` を配列 `fruits` から取り除きます。 `"バナナ"` の位置の添字を指定します。

```js
const fruits = ["いちご", "バナナ", "マンゴー"];
const start = fruits.indexOf("バナナ");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["いちご", "マンゴー"]
console.log(removedItems);
// ["バナナ"]
```

### 添字を指定して複数の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、文字列 `"バナナ"` および `"いちご"` を配列 `fruits` から取り除きます。 `"バナナ"` の位置の添字と共に、取り除く項目の総数を指定します。

```js
const fruits = ["りんご", "バナナ", "いちご", "マンゴー"];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["りんご", "マンゴー"]
console.log(removedItems);
// ["バナナ", "いちご"]
```

### 配列の複数の項目を置換

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、配列 `fruits` 内の 2 つの項目を置き換えます。

```js
const fruits = ["りんご", "バナナ", "いちご"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(
  start,
  deleteCount,
  "マンゴー",
  "さくらんぼ",
);
console.log(fruits);
// ["りんご", "マンゴー", "さくらんぼ"]
console.log(removedItems);
// ["バナナ", "いちご"]
```

### 配列の走査

この例では [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して配列 `fruits` を走査し、それぞれの項目をコンソールへログ出力します。

```js
const fruits = ["りんご", "マンゴー", "さくらんぼ"];
for (const fruit of fruits) {
  console.log(fruit);
}
// りんご
// マンゴー
// さくらんぼ
```

ただし `for...of` は配列を走査する数々の方法の一つにすぎません。他の方法は[ループと反復処理](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)を参照したり、 [`every()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [`reduceRight()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) の各メソッドのドキュメントを参照したり、また [`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) メソッドを使用している次の例を参照したりしてください。

### 配列のそれぞれの要素に対して関数を呼び出す

この例では [`forEach()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) メソッドを使用して、配列 `fruits` のそれぞれの要素に対して関数を呼び出しています。この関数ではそれぞれの項目を、その項目の添字の番号と共にコンソールへログ出力します。

```js
const fruits = ["りんご", "マンゴー", "さくらんぼ"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// りんご 0
// マンゴー 1
// さくらんぼ 2
```

### 複数の配列を結合

この例では [`concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) メソッドを使用して、配列 `fruits` を配列 `moreFruits` と結合子、新しい配列 `combinedFruits` を生成します。 `fruits` と `moreFruits` は変更されないことに注意してください。

```js
const fruits = ["りんご", "バナナ", "いちご"];
const moreFruits = ["マンゴー", "さくらんぼ"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["りんご", "バナナ", "いちご", "マンゴー", "さくらんぼ"]

// 配列 'fruits' は変更されないままです。
console.log(fruits);
// ["りんご", "バナナ", "いちご"]

// 配列 'moreFruits' も変更されないままです。
console.log(moreFruits);
// ["マンゴー", "さくらんぼ"]
```

### 配列のコピー

この例では、既存の配列 `fruits` から新しい配列を生成する方法を 3 通り示します。最初のものは[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用するもので、次は [`from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) メソッドを使用するもの、その次は [`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) メソッドを使用するものです。

```js
const fruits = ["いちご", "マンゴー"];

// スプレッド構文でコピーを作成します。
const fruitsCopy = [...fruits];
// ["いちご", "マンゴー"]

// from() メソッドでコピーを作成します。
const fruitsCopy2 = Array.from(fruits);
// ["いちご", "マンゴー"]

// slice() メソッドでコピーを作成します。
const fruitsCopy3 = fruits.slice();
// ["いちご", "マンゴー"]
```

組み込みの配列コピー操作（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)）はすべて、[シャローコピー](/ja/docs/Glossary/Shallow_copy)を生成します。配列の[ディープコピー](/ja/docs/Glossary/Deep_copy)を得る場合は、 {{jsxref("JSON.stringify()")}} で配列を JSON 文字列に変換し、 {{jsxref("JSON.parse()")}} でその文字列を新しい配列に戻せば、元の配列から完全に独立した新しい配列ができます。

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

また、 [`structuredClone()`](/ja/docs/Web/API/Window/structuredClone) メソッドを使用してディープコピーを作成することもできます。これは、ソース内の[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)を、コピーするのではなく、新しいコピーに移譲できる利点があります。

最後に、既存の配列を新しい変数に代入しても、配列やその要素のコピーは作成されないことを理解することが重要です。つまり、元の配列の名前と新しい変数の名前は、まったく同じオブジェクトの名前に過ぎません（したがって、常に[厳密等価](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#_による厳密な等価性)であると評価されます）。したがって、元の配列の値や新しい変数の値に何らかの変更を加えると、もう片方も変更されます。

```js
const fruits = ["いちご", "マンゴー"];
const fruitsAlias = fruits;
// 'fruits' と 'fruitsAlias' は同じオブジェクトとなり、厳密等価になります。
fruits === fruitsAlias; // true
// 配列 'fruits' を変更すると、 'fruitsAlias' も変化します。
fruits.unshift("りんご", "バナナ");
console.log(fruits);
// ['りんご', 'バナナ', 'いちご', 'マンゴー']
console.log(fruitsAlias);
// ['りんご', 'バナナ', 'いちご', 'マンゴー']
```

### 二次元配列の生成

以下では、文字列の二次元配列としてチェス盤を生成しています。最初の動きは `'p'` を `board[6][4]` から `board[4][4]` にコピーすることで行います。古い位置 `[6][4]` は空白にします。

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// キングの前のポーンを 2 つ前へ移動
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

出力を示します。

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### 配列を使って値のセットを表にする

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

結果は次のようになります。

```plain
// 最初の列は添字です
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

### 照合結果を使用して配列を作成

正規表現 ({{jsxref("RegExp")}}) と文字列の照合結果から配列を生成することができます。この配列には、プロパティと、一致したものに関する情報を提供する要素を持ちます。このような配列は {{jsxref("RegExp.prototype.exec()")}} や {{jsxref("String.prototype.match()")}} から返されます。

例えば、次のようになります。

```js
// 1 文字の d と、続く 1 文字以上の b と、続く 1 文字の d に一致します
// 一致した b およびそれに続く d を記憶します
// 大文字小文字は区別しません

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

照合結果についての詳しい情報は、 {{jsxref("RegExp.prototype.exec()")}} および {{jsxref("String.prototype.match()")}} のページを参照してください。

### 反復処理内での初期配列の変更

[反復処理メソッド](#反復処理メソッド)は、呼び出された配列を変更しませんが、`callbackFn` として提供される関数は変更することができます。覚えておくべき重要な原則は、0 から `arrayLength - 1` までの要素のみが参照されるということです。ここで、`arrayLength` は配列メソッドが最初に呼び出された時点での配列の長さですが、コールバックに渡される要素は、その要素が参照された時点での値です。したがって、

- `callbackFn` は、反復処理メソッドの呼び出しが開始された際に、配列の初期長を超えて追加された要素を処理しません。
- 既に処理した要素を変更しても、それらの位置で `callbackFn` が再度呼び出されることはありません。
- 既存の、まだ処理されていない配列要素が `callbackFn` によって変更された場合、`callbackFn` に渡される値は、その要素が処理された時点での値となります。 除去された要素は処理されません。

> [!WARNING]
> 上記のような同時進行の変更は、理解しにくいコードにつながる可能性が高く、一般的に避けるべきです（特別な場合を除く）。

次の例では、`forEach` メソッドを例として使用していますが、他にも昇順で要素を巡回するメソッドであれば、同じように動作します。 最初のヘルパー関数を定義します。

```js
function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`配列: [${arr.join(", ")}], 添字: ${index}, 要素: ${elem}`);
    effect(arr, index);
  });
  console.log(`最終的な配列: [${arr.join(", ")}]`);
}
```

まだ処理されていない要素を変更した場合、要素に到達したときに見えます。

```js
testSideEffect((arr, index) => {
  if (index + 1 < arr.length) arr[index + 1] += "*";
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2*, e3, e4], 添字: 1, 要素: e2*
// 配列: [e1, e2*, e3*, e4], 添字: 2, 要素: e3*
// 配列: [e1, e2*, e3*, e4*], 添字: 3, 要素: e4*
// 最終的な配列: [e1, e2*, e3*, e4*]
```

既に処理した位置の要素を変更しても、反復処理する挙動は変わりませんが、配列はその後で異なったものになります。

```js
testSideEffect((arr, index) => {
  if (index > 0) arr[index - 1] += "*";
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2, e3, e4], 添字: 1, 要素: e2
// 配列: [e1*, e2, e3, e4], 添字: 2, 要素: e3
// 配列: [e1*, e2*, e3, e4], 添字: 3, 要素: e4
// 最終的な配列: [e1*, e2*, e3*, e4]
```

未処理の要素に、初期配列の長さよりも小さい要素を _n_ 個挿入すると、それらの要素が処理済みになります。これで初期配列の長さを超える添字を持つようになった元の配列の最後の _n_ 個の要素は、処理されません。

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 0, "new");
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2, e3, e4], 添字: 1, 要素: e2
// 配列: [e1, e2, new, e3, e4], 添字: 2, 要素: new
// 配列: [e1, e2, new, e3, e4], 添字: 3, 要素: e3
// 最終的な配列: [e1, e2, new, e3, e4]
// e4 is not visited because it now has index 4
```

配列の最初の要素数よりも大きな添字を持つ要素を _n_ 個挿入しても、それらの要素が処理されることはありません。

```js
testSideEffect((arr) => arr.push("new"));
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2, e3, e4, new], 添字: 1, 要素: e2
// 配列: [e1, e2, e3, e4, new, new], 添字: 2, 要素: e3
// 配列: [e1, e2, e3, e4, new, new, new], 添字: 3, 要素: e4
// 最終的な配列: [e1, e2, e3, e4, new, new, new, new]
```

既に処理した要素に _n_ 個の要素を挿入しても、それらが処理されることはありませんが、残りの要素が _n_ 個分後ろにずれるため、現在の要素と、その前の _n - 1_ 個の要素が再び処理されることになります。

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [new, e1, e2, e3, e4], 添字: 1, 要素: e1
// 配列: [new, new, e1, e2, e3, e4], 添字: 2, 要素: e1
// 配列: [new, new, new, e1, e2, e3, e4], 添字: 3, 要素: e1
// 最終的な配列: [new, new, new, new, e1, e2, e3, e4]
// e1は、常にシフトバックされるため、処理され続けます。
```

未処理の要素から _n_ 個の要素を削除すると、それらはもはや処理されなくなります。配列が縮小したため、最後の _n_ 回の反復処理では、範囲外の添字が処理されます。メソッドが存在しない要素を無視する場合（[配列メソッドと空のスロット](#配列メソッドと空のスロット)を参照）、最後の _n_ 回の反復処理はスキップされます。そうでなければ、それらは `undefined` となります。

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2, e3, e4], 添字: 1, 要素: e2
// 配列: [e1, e2, e4], 添字: 2, 要素: e4
// 最終的な配列: [e1, e2, e4]
// 範囲外なので要素 3 は処理しません。

// Compare this with find(), which treats nonexistent indexes as undefined:
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`配列: [${arr.join(", ")}], 添字: ${index}, 要素: ${elem}`);
  if (index === 1) arr.splice(2, 1);
  return false;
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e1, e2, e3, e4], 添字: 1, 要素: e2
// 配列: [e1, e2, e4], 添字: 2, 要素: e4
// 配列: [e1, e2, e4], 添字: 3, 要素: undefined
```

既に処理した要素から _n_ 個の要素を削除しても、それらが削除される前に処理されていたという事実は変わりません。配列が縮小されたため、現在の要素の次の _n_ 個の要素はスキップされます。このメソッドが存在しない添字を無視する場合は、最後の _n_ 回の反復処理がスキップされます。そうでない場合は、`undefined` が返されます。

```js
testSideEffect((arr, index) => arr.splice(index, 1));
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// e2 は処理されない。e2 の要素は 0 となり、既に処理されているため
// 配列: [e2, e3, e4], 添字: 1, 要素: e3
// e4 は処理されない。e4 の要素は 1 となり、既に処理されているため
// 最終的な配列: [e2, e4]
// 添字 2 は範囲外なので、アクセスされない

// find() は、存在しない要素を undefined として扱います。これと比較してください。
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`配列: [${arr.join(", ")}], 添字: ${index}, 要素: ${elem}`);
  arr.splice(index, 1);
  return false;
});
// 配列: [e1, e2, e3, e4], 添字: 0, 要素: e1
// 配列: [e2, e3, e4], 添字: 1, 要素: e3
// 配列: [e2, e4], 添字: 2, 要素: undefined
// 配列: [e2, e4], 添字: 3, 要素: undefined
```

添字の降順で反復処理するメソッドでは、挿入により要素がスキップされ、削除により要素が複数回アクセスされます。 上記のコードを自分で調整して、効果を確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
