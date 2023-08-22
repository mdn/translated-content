---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 8eef3c0803bdbd1e911761742c0e05fa42b5395b
---

{{JSRef}}

**`Array`** オブジェクトは、他のプログラミング言語の配列と同様に、[複数の項目の集合を単一の変数名の下に格納](/ja/docs/Learn/JavaScript/First_steps/Arrays)することができ、[共通の配列操作を行う](#例)ためのメンバーを持っています。

## 解説

JavaScript では、配列は[プリミティブ](/ja/docs/Glossary/Primitive)ではなく、次のようなコアの性質を持つ `Array` オブジェクトです。

- **JavaScript の配列はリサイズ可能**であり、**異なる[データ型](/ja/docs/Web/JavaScript/Data_structures)を交ぜて格納することができます**。（これらの性質が望ましくない場合は、代わりに[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)を使用してください）。

- **JavaScript の配列は連想配列ではありません**。[配列の要素は添字として任意の文字列を使用してアクセスすることができません](#メモ)。非負の整数（またはそれぞれの文字列表現）を添字として使用してアクセスする必要があります。

- **JavaScript の配列は[ゼロオリジン](https://ja.wikipedia.org/wiki/オリジン)です**。配列の最初の要素は `0` の位置にあり、 2 番目の要素は `1` の位置にあるといった具合です。そして、最後の要素は配列の {{jsxref("Array/length", "length")}} プロパティの値から `1` を引いた位置になります。

### 配列の添字

`Array` オブジェクトは要素の添字として任意の文字列を（[連想配列](https://en.wikipedia.org/wiki/Associative_array)のように）使用することはできません。非負の整数（またはその文字列形式）を使用しなければなりません。整数以外の値で設定したりアクセスしたりすると、配列のリスト自体の要素を設定したり取り出したりすることはできませんが、その配列の[オブジェクトプロパティの集合](/ja/docs/Web/JavaScript/Data_structures#プロパティ)に関連する変数を設定したりアクセスしたりすることができます。配列のオブジェクトプロパティと配列要素のリストは別個のものであり、配列の[探索や変更操作](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列のメソッド)はこれらの名前付きプロパティに適用することができません。

`toString` が一つのプロパティであるのと同様に（ただし厳密には `toString()` はメソッドですが）、配列における配列要素はオブジェクトのプロパティです。しかし、次のように配列にアクセスしようとすると、プロパティ名が妥当でないため、構文エラーが発生します。

```js example-bad
console.log(arr.0); // 構文エラー
```

JavaScript の構文では、数字で始まるプロパティには[ブラケット記法](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties)を使う必要があり、[ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使うことはできません。また、配列の添字を引用符で囲むことができますが（`years[2]` の代わりに `years['2']` のように）、ふつうはそうする必要はありません。

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

{{jsxref("Array/length", "length")}} を増加させてみます。

```js
fruits.length = 10;
console.log(fruits); // ["バナナ", "りんご", 'もも', 空 x 2, "マンゴー", 空 x 4]
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

[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)において空のスロットは、配列のメソッド間で一貫性のない動作をします。一般に、古いメソッドは空のスロットをスキップしますが、新しいメソッドはそれを `undefined` として扱う傾向があります。

複数の要素を反復処理するメソッドのうち、以下のものはインデックスにアクセスする前に [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) によるチェックを行い、空のスロットと `undefined` を混同しないようにします。

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/copyWithin", "copyWithin()")}}
- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/indexOf", "indexOf()")}}
- {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}
- {{jsxref("Array/reverse", "reverse()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/some", "some()")}}
- {{jsxref("Array/sort", "sort()")}}
- {{jsxref("Array/splice", "splice()")}}

空のスロットを具体的にどのように扱うかについては、各メソッドのページを参照してください。

以下のメソッドは、空のスロットを `undefined` であるかのように扱います。

- {{jsxref("Array/entries", "entries()")}}
- {{jsxref("Array/fill", "fill()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/group", "group()")}} {{Experimental_Inline}}
- {{jsxref("Array/groupToMap", "groupToMap()")}} {{Experimental_Inline}}
- {{jsxref("Array/includes", "includes()")}}
- {{jsxref("Array/join", "join()")}}
- {{jsxref("Array/keys", "keys()")}}
- {{jsxref("Array/toLocaleString", "toLocaleString()")}}
- {{jsxref("Array/values", "values()")}}

### コピーメソッドと変更メソッド

メソッドの中には、メソッドが呼び出された既存の配列を変化させず、代わりに新しい配列を返すものがあります。その際、最初に [`this.constructor[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species) にアクセスして、新しい配列に使用するコンストラクターを特定します。そして、新しく構築された配列に要素を入れていきます。コピーは常に [シャローコピー](/ja/docs/Glossary/Shallow_copy)が行われます。このメソッドは、最初に作成された作成された配列を越えて何かをコピーすることはありません。元の配列の要素は、次のように新しい配列にコピーされます。

- オブジェクトの場合は、オブジェクトの参照が新しい配列にコピーされます。元の配列と新しい配列の両方が同じオブジェクトを参照します。つまり、参照するオブジェクトが変更された場合、その変更は新しい配列と元の配列の両方に反映されます。
- 文字列、数値、論理値などのプリミティブ型（{{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Global_Objects/Boolean", "Boolean")}} オブジェクトではないもの）の場合、値は新しい配列へコピーされます。

他にも、メソッドが呼び出された配列を変更するメソッドがあります。この場合、メソッドによって返値が異なります。あるものは同じ配列への参照を、あるものは新しい配列の長さを返します。

以下のメソッドは、`@@species`で新しい配列を作成します。

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/splice", "splice()")}}（返される要素を取り除いた配列を構成するため）

なお、{{jsxref("Array/group", "group()")}} と {{jsxref("Array/groupToMap", "groupToMap()")}} では `@@species` を使用して各グループ項目について新しい配列を作成しておらず、常に素の `Array` コンストラクターを使用しています。概念的には、これらのメソッドもコピーされるメソッドではありません。

以下のメソッドは、元の配列を変更します。

- {{jsxref("Array/copyWithin", "copyWithin()")}}
- {{jsxref("Array/fill", "fill()")}}
- {{jsxref("Array/pop", "pop()")}}
- {{jsxref("Array/push", "push()")}}
- {{jsxref("Array/reverse", "reverse()")}}
- {{jsxref("Array/shift", "shift()")}}
- {{jsxref("Array/sort", "sort()")}}
- {{jsxref("Array/splice", "splice()")}}
- {{jsxref("Array/unshift", "unshift()")}}

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

引数 `thisArg` （既定値は `undefined`）は、`callbackFn` を呼び出す際に `this` 値として使用されます。`callbackFn` から最終的に見える `this` 値は、[通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決定します。もし `callbackFn` が[厳格モードではない](/ja/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution)のであれば、`this` の値がプリミティブ型であった場合はオブジェクトにラップされ、`undefined`/`null` の場合は [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) に置き換わります。`callbackFn` が[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)で定義されていた場合は、`thisArg` 引数は関係ありません。アロー関数には自分自身の `this` のバインディングがないためです。

すべての反復可能オブジェクトは[コピー可能](#コピーメソッドと変更メソッド)で[汎用性](#汎用的な配列メソッド)がありますが、[空のスロット](#配列メソッドと空のスロット)では異なる形で動作します。

以下のメソッドは反復可能です。

- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/group", "group()")}}
- {{jsxref("Array/groupToMap", "groupToMap()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/some", "some()")}}

具体的には、{{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/some", "some()")}} は常にすべての要素に対して `callbackFn` を呼び出すわけではなく、返値が決定するとすぐに反復処理を停止します。

他にもコールバック関数を受け取り、配列のそれぞれの要素に対して最大1回実行するメソッドが2種類ありますが、一般的な反復処理メソッドとは少し異なる形式を持っています（`thisArg` を受け入れないなど）。

- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}

{{jsxref("Array/sort", "sort()")}} メソッドもコールバック関数を取りますが、反復処理するメソッドではありません。配列の配置を変更し、`thisArg` を受け入れず、1 つのインデックスに対して複数回コールバックを呼び出すことがあります。

### 汎用的な配列メソッド

配列メソッドは常に汎用的であり、配列オブジェクトの内部データにはアクセスしません。配列の要素には `length` プロパティを通してアクセスし、添字の要素にはアクセスするだけです。つまり、配列風のオブジェクトに対しても呼び出すことができます。

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### length プロパティの正規化

`length` プロパティは[整数に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)され、0 から 2<sup>53</sup> - 1 までの範囲に収められます。`NaN` は `0` となるので、`length` が存在しないか `undefined` であっても `0` という値を持つものとして扱われます。

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

[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)とは、上記の `length` の処理で例外が発生しないオブジェクトのことです。具体的に言うと、このようなオブジェクトには実際に `length` プロパティがあり、`0` から `length - 1` までのインデックスつき要素を持つことが期待されます（すべてのインデックスが存在するわけではない場合は、機能的に[疎配列](#配列メソッドと空のスロット)と同等となります）。

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

- {{jsxref("Array/@@species", "get Array[@@species]")}}
  - : `Array` コンストラクターを返します。

## 静的メソッド

- {{jsxref("Array.from()")}}
  - : 新しい `Array` インスタンスを配列風 (array-like) または反復可能 (iterable) オブジェクトから生成します。
- {{jsxref("Array.isArray()")}}
  - : 配列であれば `true` を、配列でなければ `false` を返します。
- {{jsxref("Array.of()")}}
  - : 可変個の引数から、引数の個数や型に関わらず、新しい `Array` インスタンスを生成します。

## インスタンスプロパティ

- {{jsxref("Array.prototype.length")}}
  - : 配列内の要素数を反映します。
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : ES2015 版以前の ECMAScript 標準に含まれておらず、 [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) による文のバインドの目的には無視されるプロパティ名を含みます。

## インスタンスメソッド

- {{jsxref("Array.prototype.at()")}}
  - : 指定された位置にある配列の項目を返します。負の整数も指定可能で、末尾の項目から戻ります。
- {{jsxref("Array.prototype.concat()")}}
  - : この配列に他の配列や値を結合して新しい配列を返します。
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 配列内で配列内の連続した要素を複写します。
- {{jsxref("Array.prototype.entries()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)オブジェクトを返します。このオブジェクトは、配列中のそれぞれの位置に対するキー/値の組を保持しています。
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
- {{jsxref("Array.prototype.group()")}} {{Experimental_Inline}}
  - : テスト関数が返す文字列に従って、配列の要素をオブジェクトにグループ化します。
- {{jsxref("Array.prototype.groupToMap()")}} {{Experimental_Inline}}
  - : テスト関数が返す値に従って、配列の要素を {{jsxref("Map")}} にグループ化します。
- {{jsxref("Array.prototype.includes()")}}
  - : この配列が特定の要素を含むかどうか判定し、その結果を `true` または `false` で返します。
- {{jsxref("Array.prototype.indexOf()")}}
  - : 指定された値と等しい値を持つ最初の（添字の一番小さい）要素の添字を返します。見つからない場合、`-1` を返します。
- {{jsxref("Array.prototype.join()")}}
  - : 配列のすべての要素を結合した文字列を返します。
- {{jsxref("Array.prototype.keys()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)を返します。このオブジェクトは配列中の各添字のキーを保持します。
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
- {{jsxref("Array.prototype.toString()")}}
  - : 配列とその要素を表す文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きしています。
- {{jsxref("Array.prototype.unshift()")}}
  - : 配列の最初に 1 個以上の要素を追加し、配列の変更後の `length` を返します。
- {{jsxref("Array.prototype.values()")}}
  - : 新しい[_配列イテレーター_](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)オブジェクトを返します。このオブジェクトは、配列中の各添字の値を保持します。
- [`Array.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : 既定では [`values()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/values) 関数を返します。

## 例

この節では、 JavaScript で一般的な配列操作の例をいくつか紹介します。

> **メモ:** まだ配列の基本に慣れていない場合は、最初に [JavaScript の第一歩: 配列](/ja/docs/Learn/JavaScript/First_steps/Arrays) の[配列とは何かの説明](/ja/docs/Learn/JavaScript/First_steps/Arrays#配列とは何か)、およびよくある配列の操作の他の例を読んでみてください。

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

### 配列内の項目の添字を検索

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

> **メモ:** `pop()` は配列の最後の項目を削除するためだけに使用できます。配列の最後にある複数の項目を削除したい場合は、次の例を参照してください。

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

> **メモ:** `shift()` は最初の項目を配列から取り除く場合にのみ使用できます。複数の項目を配列の先頭から取り除く場合は、次の例を参照してください。

### 配列の先頭から複数の項目を取り除く

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

### 配列に最初の項目を追加

この例では [`unshift()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) メソッドを使用して、配列 `fruits` の添字 `0` に新しい項目を追加します。これを配列の新しい先頭の項目にします。

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

この例では、既存の配列 `fruits` から新しい配列を生成する方法を 3 通り示します。最初のものは[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用するもので、次は [`from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) メソッドを使用するもの、その次は [`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 円そっどを使用するものです。

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

また、 [`structuredClone()`](/ja/docs/Web/API/structuredClone) メソッドを使用してディープコピーを作成することもできます。これは、ソース内の{{Glossary("transferable objects", "移譲可能オブジェクト")}}を、コピーするのではなく、新しいコピーに移譲できる利点があります。

最後に、既存の配列を新しい変数に代入しても、配列やその要素のコピーは作成されないことを理解することが重要です。つまり、元の配列の名前と新しい変数の名前は、まったく同じオブジェクトの名前に過ぎません（したがって、常に[厳密等価](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#_による厳密な等価性)であると評価されます）。したがって、元の配列の値や新しい変数の値に何らかの変更を加えると、もう片方も変更されます。

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

### 配列の要素をグループ化

{{jsxref("Array.prototype.group()")}} メソッドを使用して、配列の要素をグループ化することができます。現在の要素のグループを示す文字列を返すテスト関数を使用します。

ここでは、`name` と `type` を持つ "food" オブジェクトを含む、単純な配列 inventory を用意しています。

```js
const inventory = [
  { name: "アスパラガス", type: "vegetables" },
  { name: "バナナ", type: "fruit" },
  { name: "羊", type: "meat" },
  { name: "さくらんぼ", type: "fruit" },
  { name: "魚", type: "meat" },
];
```

`group()` を使用するには、現在の要素、およびオプションで現在の添字と配列を指定して呼び出され、要素のグループを示す文字列を返すコールバック関数を指定します。

以下のコードでは、アロー関数を使用してそれぞれの配列要素の `type` を返しています（これは、[関数引数のオブジェクト構造化構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#関数の引数として渡されたオブジェクトからのプロパティの展開)を使用して、渡されたオブジェクトから型要素を展開するものです）。
結果は、コールバックから返された一意の文字列を名前とするプロパティを持つオブジェクトになります。
各プロパティには、グループ内の要素を含む配列が割り当てられます。

```js
const result = inventory.group(({ type }) => type);
console.log(result.vegetables);
// 期待される出力: Array [Object { name: "アスパラガス", type: "vegetables" }]
```

返されたオブジェクトは、元の配列と*同じ*要素を参照していることに注意してください（ディープコピーではありません）。
これらの要素の内部構造を変更すると、元の配列と返されたオブジェクトの両方に反映されます。

例えば、グループ化する情報が変更される可能性のあるオブジェクトに関連する場合など、キーとして文字列を使用できない場合は、代わりに {{jsxref("Array.prototype.groupToMap()")}} を使用することができます。
これは `group` ととても似ていますが、配列の要素を、任意の値（{{Glossary("object", "オブジェクト")}}または{{Glossary("primitive", "プリミティブ")}}）をキーとして使用できる {{jsxref("Map")}} にグループ化する点が異なります。

## その他の例

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

## メモ

`Array` オブジェクトは要素の添字として任意の文字列を（[連想配列](https://en.wikipedia.org/wiki/Associative_array)のように）使用することはできません。非負の整数（またはその文字列形式）を使用しなければなりません。整数以外の値で設定したりアクセスしたりすると、配列のリスト自体の要素を設定したり取り出したりすることはできませんが、その配列の[オブジェクトプロパティの集合](/ja/docs/Web/JavaScript/Data_structures#プロパティ)に関連する変数を設定したりアクセスしたりすることができます。配列のオブジェクトプロパティと配列要素のリストは別個のものであり、配列の[探索や変更操作](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列のメソッド)はこれらの名前付きプロパティに適用することができません。

`toString` が一つのプロパティであるのと同様に（ただし厳密には `toString()` はメソッドですが）、配列における配列要素はオブジェクトのプロパティです。しかし、次のように配列にアクセスしようとすると、プロパティ名が妥当でないため、構文エラーが発生します。

```js example-bad
console.log(arr.0); // 構文エラー
```

JavaScript の構文では、数字で始まるプロパティには[ブラケット記法](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties)を使う必要があり、[ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使うことはできません。また、配列の添字を引用符で囲むことができますが（`years[2]` の代わりに `years['2']` のように）、ふつうはそうする必要はありません。

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
console.log(fruits[5]); // 'マンゴー'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

{{jsxref("Array/length", "length")}} を増加させてみます。

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
console.log(execResult); // Array(3) [ "dbBd", "bB", "d" ]
```

照合結果についての詳しい情報は、 {{jsxref("RegExp.prototype.exec()")}} および {{jsxref("String.prototype.match()")}} のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- JavaScript ガイドより

  - [オブジェクトプロパティのインデックス付け](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#オブジェクトプロパティのインデックス付け)
  - [インデックス付きコレクション: `Array` オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#array_object)

- [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
