---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - Array
  - クラス
  - 例
  - グローバルオブジェクト
  - JavaScript
  - リファレンス
browser-compat: javascript.builtins.Array
translation_of: Web/JavaScript/Reference/Global_Objects/Array
---
{{JSRef}}

**`Array`** オブジェクトは、他のプログラミング言語の配列と同様に、[複数の項目の集合を単一の変数名の下に格納](/ja/docs/Learn/JavaScript/First_steps/Arrays)することができ、[共通の配列操作を行う](#例)ためのメンバーを持っています。

## 解説

JavaScript では、配列は[プリミティブ](/ja/docs/Glossary/Primitive)ではなく、次のようなコアの性質を持つ `Array` オブジェクトです。

- **JavaScript の配列はリサイズ可能**であり、**異なる[データ型](/ja/docs/Web/JavaScript/Data_structures)を交ぜて格納することができます**。（これらの性質が望ましくない場合は、代わりに[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)を使用してください）。

- **JavaScript の配列は連想配列ではなく**、[配列の要素は添字として文字列を使用してアクセスすることができません](#メモ)。整数を添字として使用してアクセスする必要があります。

- **JavaScript の配列は[ゼロオリジン](https://ja.wikipedia.org/wiki/オリジン)です**。配列の最初の要素は `0` の位置にあり、 2 番目の要素は `1` の位置にあるといった具合です。そして、最後の要素は配列の {{jsxref("Array.length", "length")}} プロパティの値から `1` を引いた位置になります。

- **JavaScript の[複製操作](#配列の複製)は[浅い複製](/ja/docs/Glossary/Shallow_copy)を生成します**。（あらゆる JavaScript オブジェクトに対する標準の組み込みの複製操作はすべて、[深い複製](/ja/docs/Glossary/Deep_copy)ではなく浅い複製を生成します。）

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
  - : 指定したテスト関数を満たす、配列中の要素の値を返します。1 個も見つからない場合は `undefined` を返します。
- {{jsxref("Array.prototype.findIndex()")}}
  - : 指定したテスト関数を満たす、配列中の要素のインデックスを返します。1 個も見つからない場合は `-1` を返します。
- {{jsxref("Array.prototype.flat()")}}
  - : すべての部分配列の要素を指定された深さまで再帰的に連結した新しい配列を返します。
- {{jsxref("Array.prototype.flatMap()")}}
  - : コールバック関数を呼び出し元の配列の各要素に適用し、その結果を一段階平坦化した新しい配列を返します。
- {{jsxref("Array.prototype.forEach()")}}
  - : 配列中のそれぞれの要素について関数を呼び出します。
- {{jsxref("Array.prototype.groupBy()")}} {{Experimental_Inline}}
  - : テスト関数が返す文字列に従って、配列の要素をオブジェクトにグループ化します。
- {{jsxref("Array.prototype.groupByToMap()")}} {{Experimental_Inline}}
  - : テスト関数が返す値に従って、配列の要素を {{jsxref("Map")}} にグループ化します。
- {{jsxref("Array.prototype.includes()")}}
  - : この配列が特定の要素を含むかどうか判定し、その結果を `true` または `false` で返します。
- {{jsxref("Array.prototype.indexOf()")}}
  - : 指定された値と等しい値を持つ最初の (添字の一番小さい) 要素の添字を返します。見つからない場合、`-1` を返します。
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

> **Note:** まだ配列の基本に慣れていない場合は、最初に [JavaScript の第一歩: 配列](/ja/docs/Learn/JavaScript/First_steps/Arrays) の[配列とは何かの説明](/ja/docs/Learn/JavaScript/First_steps/Arrays#配列とは何か)、およびよくある配列の操作の他の例を読んでみてください。

### 配列の作成

ここでは、新しい配列を作る 3 通りの方法を示しています。最初のものは[配列リテラル記法](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation)を使用したもので、次は [`Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) コンストラクターを使用して、最後は [`String.prototype.split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) を使用して文字列から配列を構築しています。

```js
// 'fruits' 配列が配列リテラル記法で作成されています。
const fruits = ['りんご', 'バナナ'];
console.log(fruits.length);
// 2

// 'fruits' 配列が Array() コンストラクターで作成されています。
const fruits = new Array('りんご', 'バナナ');
console.log(fruits.length);
// 2

// 'fruits' 配列が String.prototype.split() を使用して作成されています。
const fruits = 'りんご, バナナ'.split(', ');
console.log(fruits.length);
// 2
```

### 配列から文字列を生成

この例では [`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) メソッドを使用して、配列 `fruits` から文字列を生成しています。

```js
const fruits = ['りんご', 'バナナ'];
const fruitsString = fruits.join(', ');
console.log(fruitsString);
// "りんご, バナナ"
```

### 添字による配列の要素へのアクセス

この例では配列 `fruits` 内の項目に、配列内の位置を示す添字を指定することでアクセスする方法を示しています。

```js
const fruits = ['りんご', 'バナナ'];

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

この例では [`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) メソッドを使用して、文字列 "`バナナ`" の位置（添字）を配列 `fruits` の中から探します。

```js
const fruits = ['りんご', 'バナナ'];
console.log(fruits.indexOf('バナナ'));
// 1
```

### 配列内に特定の項目があるかどうかを検査

この例では、配列 `fruits` が "`バナナ`" と "`さくらんぼ`" を含んでいるかどうかを確認する 2 つの方法を示しています。最初は [`includes()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) メソッドで、次に [`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) メソッドで、添字の値が `-1` でないことを確認します。

```js
const fruits = ['りんご', 'バナナ'];

fruits.includes('バナナ'); // true
fruits.includes('さくらんぼ'); // false

// indexOf() が -1 を返さない場合、その配列はその項目を持っています。
fruits.indexOf('バナナ') !== -1; // true
fruits.indexOf('さくらんぼ') !== -1; // false
```

### 配列に項目を追加

この例では、 [`push()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push) メソッドを使用して新しい文字列を配列 `fruits` に追加しています。

```js
const fruits = ['りんご', 'バナナ'];
const newLength = fruits.push('Orange');
console.log(fruits);
// ["りんご", "バナナ", "Orange"]
console.log(newLength);
// 3
```

### 配列から最後の項目を取り除く

この例では、 [`pop()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) メソッドを使用して配列 `fruits` から最後の項目を取り除いています。

```js
const fruits = ['りんご', 'バナナ', 'Orange'];
const removedItem = fruits.pop();
console.log(fruits);
// ["りんご", "バナナ"]
console.log(removedItem);
// Orange
```

> **Note:** `pop()` は配列の最後の項目を削除するためだけに使用できます。配列の最後にある複数の項目を削除したい場合は、次の例を参照してください。

### 配列の最後から複数の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、配列 `fruits` から最後の 3 つの項目を取り除いています。

```js
const fruits = ['りんご', 'バナナ', 'いちご', 'マンゴー', 'さくらんぼ'];
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
const fruits = ['りんご', 'バナナ', 'いちご', 'マンゴー', 'さくらんぼ'];
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
const fruits = ['りんご', 'バナナ'];
const removedItem = fruits.shift();
console.log(fruits);
// ["バナナ"]
console.log(removedItem);
// りんご
```

> **Note:** `shift()` は最初の項目を配列から取り除く場合にのみ使用できます。複数の項目を配列の先頭から取り除く場合は、次の例を参照してください。

### 配列の先頭から複数の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、配列 `fruits` から先頭の 3 項目を取り除きます。

```js
const fruits = ['りんご', 'いちご', 'さくらんぼ', 'バナナ', 'マンゴー'];
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
const fruits = ['バナナ', 'マンゴー'];
const newLength = fruits.unshift('いちご');
console.log(fruits);
// ["いちご", "バナナ", "マンゴー"]
console.log(newLength);
// 2
```

### 添字を指定して単一の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、文字列 "`バナナ`" を配列 `fruits` から取り除きます。 "`バナナ`" の位置の添字を指定します。

```js
const fruits = ['いちご', 'バナナ', 'マンゴー'];
const start = fruits.indexOf('バナナ');
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["いちご", "マンゴー"]
console.log(removedItems);
// ["バナナ"]
```

### 添字を指定して複数の項目を取り除く

この例では [`splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) メソッドを使用して、文字列 "`バナナ`" および "`いちご`" を配列 `fruits` から取り除きます。 "`バナナ`" の位置の添字と共に、取り除く項目の総数を指定します。

```js
const fruits = ['りんご', 'バナナ', 'いちご', 'マンゴー'];
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
const fruits = ['りんご', 'バナナ', 'いちご'];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, 'マンゴー', 'さくらんぼ');
console.log(fruits);
// ["りんご", "マンゴー", "さくらんぼ"]
console.log(removedItems);
// ["バナナ", "いちご"]
```

### 配列の走査

この例では [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用して配列 `fruits` を走査し、それぞれの項目をコンソールへログ出力します。

```js
const fruits = ['りんご', 'マンゴー', 'さくらんぼ'];
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
const fruits = ['りんご', 'マンゴー', 'さくらんぼ'];
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// りんご 0
// マンゴー 1
// さくらんぼ 2
```

### 複数の配列を結合

この例では [`concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) メソッドを使用して、配列 `fruits` を配列 `moreFruits` と結合子、新しい配列 `combinedFruits` を生成します。 `fruits` と `moreFruits` は変更されないことに注意してください。

```js
const fruits = ['りんご', 'バナナ', 'いちご'];
const moreFruits = ['マンゴー', 'さくらんぼ'];
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

### 配列の複製

この例では、既存の配列 `fruits` から新しい配列を生成する方法を 3 通り示します。最初のものは[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用するもので、次は [`from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) メソッドを使用するもの、その次は [`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 円そっどを使用するものです。

```js
const fruits = ['いちご', 'マンゴー'];

// スプレッド構文で複製を作成します。
const fruitsCopy = [...fruits];
// ["いちご", "マンゴー"]

// from() メソッドで複製を作成します。
const fruitsCopy = Array.from(fruits);
// ["いちご", "マンゴー"]

// slice() メソッドで複製を作成します。
const fruitsCopy = fruits.slice();
// ["いちご", "マンゴー"]
```

組み込みの配列複製操作（[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.concat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)）はすべて、[浅い複製](/ja/docs/Glossary/Shallow_copy)を生成します。配列の[深い複製](/ja/docs/Glossary/Deep_copy)を得る場合は、 {{jsxref("JSON.stringify()")}} で配列を JSON 文字列に変換し、 {{jsxref("JSON.parse()")}} でその文字列を新しい配列に戻せば、元の配列から完全に独立した新しい配列ができます。

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

また、 [`structuredClone()`](/ja/docs/Web/API/structuredClone) メソッドを使用して深い複製を作成することもできます。これは、ソース内の{{Glossary("transferable objects", "転送可能オブジェクト")}}を、複製するのではなく、新しい複製に転送できる利点があります。

最後に、既存の配列を新しい変数に代入しても、配列やその要素のコピーは作成されないことを理解することが重要です。つまり、元の配列の名前と新しい変数の名前は、まったく同じオブジェクトの名前に過ぎません（したがって、常に[厳密等価](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using_)であると評価されます）。したがって、元の配列の値や新しい変数の値に何らかの変更を加えると、もう片方も変更されます。

```js
const fruits = ['いちご', 'マンゴー'];
const fruitsAlias = fruits;
// 'fruits' と 'fruitsAlias' は同じオブジェクトとなり、厳密等価になります。
fruits === fruitsAlias // true
// 配列 'fruits' を変更すると、 'fruitsAlias' も変化します。
fruits.unshift('りんご', 'バナナ');
console.log(fruits);
// ['りんご', 'バナナ', 'いちご', 'マンゴー']
console.log(fruitsAlias);
// ['りんご', 'バナナ', 'いちご', 'マンゴー']
```

### 配列の要素をグループ化

{{jsxref("Array.prototype.groupBy()")}} メソッドを使用して、配列の要素をグループ化することができます。現在の要素のグループを示す文字列を返すテスト関数を使用します。

ここでは、`name` と `type` を持つ "food" オブジェクトを含む、単純な配列 inventory を用意しています。

```js
const inventory = [
  { name: 'アスパラガス', type: 'vegetables' },
  { name: 'バナナ',  type: 'fruit' },
  { name: '羊', type: 'meat' },
  { name: 'さくらんぼ', type: 'fruit' },
  { name: '魚', type: 'meat' }
];
```

`groupBy()` を使用するには、現在の要素、およびオプションで現在の添字と配列を指定して呼び出され、要素のグループを示す文字列を返すコールバック関数を指定します。

以下のコードでは、アロー関数を使用してそれぞれの配列要素の `type` を返しています（これは、[関数引数のオブジェクト構造化構文](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_fields_from_objects_passed_as_a_function_parameter)を使用して、渡されたオブジェクトから型要素を展開するものです）。
結果は、コールバックから返された一意の文字列を名前とするプロパティを持つオブジェクトになります。
各プロパティには、グループ内の要素を含む配列が割り当てられます。

```js
let result = inventory.groupBy( ({ type }) => type );
console.log(result.vegetables)
// expected output: Array [Object { name: "アスパラガス", type: "vegetables" }]
```

返されたオブジェクトは、元の配列と*同じ*要素を参照していることに注意してください（深い複製ではありません）。
これらの要素の内部構造を変更すると、元の配列と返されたオブジェクトの両方に反映されます。

例えば、グループ化する情報が変更される可能性のあるオブジェクトに関連する場合など、キーとして文字列を使用できない場合は、代わりに {{jsxref("Array.prototype.groupByToMap()")}} を使用することができます。
これは `groupBy` と非常に似ていますが、配列の要素を、任意の値（{{Glossary("object", "オブジェクト")}}または{{Glossary("primitive", "プリミティブ")}}）をキーとして使用できる {{jsxref("Map")}} にグループ化する点が異なります。

## その他の例

### 二次元配列の生成

以下では、文字列の二次元配列としてチェス盤を生成しています。最初の動きは `'p'` を `board[6][4]` から `board[4][4]` に複製することで行います。古い位置 `[6][4]` は空白にします。

```js
const board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// キングの前のポーンを 2 つ前へ移動
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
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
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
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

`Array` オブジェクトは要素の添字として（[連想配列](https://ja.wikipedia.org/wiki/連想配列)のように）文字列を使用することはできず、整数を使用する必要があります。[ブラケット記法](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties)（または [ドット記法](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)）を使用して設定またはアクセスすると、配列のリスト自身からは要素が設定または取得されませんが、その配列に結びつけられた[オブジェクトのプロパティ集合](/ja/docs/Web/JavaScript/Data_structures#properties)に関連付けられた変数に設定またはアクセスされます。配列のオブジェクトプロパティと配列のリストの要素は別なものであり、配列の[走査や変更操作](/ja/docs/Web/JavaScript/Guide/Indexed_collections#array_methods)をこれらの名前付きプロパティに適用することはできません。

`toString` が一つのプロパティであるのと同様に（ただし厳密には `toString()` はメソッドですが）、配列における配列要素はオブジェクトのプロパティです。しかし、次のように配列にアクセスしようとすると、プロパティ名が妥当でないため、構文エラーが発生します。

```js
console.log(arr.0); // 構文エラー
```

これは、JavaScript の配列とそのプロパティに限った話ではありません。数字から始まるプロパティは、ドット演算子を用いて参照できないため、ブラケット記法を用いる必要があります。

例えば `3d` というプロパティを持つオブジェクトがあった場合は、ドット記法ではなくブラケット記法を用いて参照しなければなりません。

```js
const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years.0);   // 構文エラー
console.log(years[0]);  // 正しく動作
```

```js
renderer.3d.setTexture(model, 'character.png');     // 構文エラー
renderer['3d'].setTexture(model, 'character.png');  // 正しく動作
```

`3d` の例では、`'3d'` は（数字で始まるため）引用符で括らなければならないことに注意してください。 JavaScript 配列の添字も同様に引用符でくくることができますが (例えば `years[2]` でなく `years['2']`)、そうする必要はないでしょう。

`years[2]` の `2` は最終的に、JavaScript エンジンが内部的に `toString` メソッドで型変換することで文字列にされます。これは '2' と '02' が `years` オブジェクトの異なる場所を指すようにするためでです。このため、以下の例は `true` がログ出力されます。

```js
console.log(years['2'] != years['02']);
```

### length と数値プロパティとの関係

JavaScript の配列の {{jsxref("Array.length", "length")}} プロパティと数値プロパティは関連しています。

配列の一部の組込みメソッド (例えば {{jsxref("Array.join", "join()")}}, {{jsxref("Array.slice", "slice()")}}, {{jsxref("Array.indexOf", "indexOf()")}}, など) は、配列の {{jsxref("Array.length", "length")}} プロパティの値はメソッドの呼び出し時の値を考慮します。

他にも (例えば {{jsxref("Array.push", "push()")}}, {{jsxref("Array.splice", "splice()")}}, 等)、結果として配列の {{jsxref("Array.length", "length")}} プロパティを更新するメソッドがあります。

```js
const fruits = [];
fruits.push('バナナ', 'りんご', 'peach');
console.log(fruits.length); // 3
```

JavaScript の配列に、配列の添字として妥当なプロパティであり、かつ現在の配列の範囲の外にある添字を設定すると、エンジンは配列の {{jsxref("Array.length", "length")}} プロパティを更新します。

```js
fruits[5] = 'マンゴー';
console.log(fruits[5]);            // 'マンゴー'
console.log(Object.keys(fruits));  // ['0', '1', '2', '5']
console.log(fruits.length);        // 6
```

{{jsxref("Array.length", "length")}} を増加させてみます。

```js
fruits.length = 10;
console.log(fruits);              // ['バナナ', 'りんご', 'peach', empty x 2, 'マンゴー', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length);       // 10
console.log(fruits[8]);           // undefined
```

一方、 {{jsxref("Array.length", "length")}} プロパティの数を減らすと、要素が削除されます。

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length);       // 2
```

これらについては {{jsxref("Array.length")}} のページで詳しく解説します。

### 照合の結果を使用して配列を作成

正規表現 ({{jsxref("RegExp")}}) と文字列の照合の結果から配列を生成することができます。この配列には、プロパティと、一致したものに関する情報を提供する要素を持ちます。このような配列は {{jsxref("RegExp.exec()")}} や {{jsxref("String.match()")}} から返されます。

これらのプロパティと要素を理解しやすくするために、以下の例と表を参照してください。

```js
// 1 文字の d と、続く 1 文字以上の b と、続く 1 文字の d に一致します
// 一致した b およびそれに続く d を記憶します
// 大文字小文字は区別しません

const myRe = /d(b+)(d)/i;
const myArray = myRe.exec('cdbBdbsbz');
```

この一致から返されるプロパティと要素は次の通りです。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">プロパティ/要素</th>
      <th class="header" scope="col">説明</th>
      <th class="header" scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input</code><br />{{ReadOnlyInline}}</td>
      <td>
        正規表現が一致する文字列を反映する読み取り専用プロパティです。
      </td>
      <td><code>"cdbBdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>index</code><br />{{ReadOnlyInline}}</td>
      <td>文字列中で一致する場所を、0 から始まる位置で示します。</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>[0]</code><br />{{ReadOnlyInline}}</td>
      <td>最後に一致した文字列です。</td>
      <td><code>"dbBd"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code><br />{{ReadOnlyInline}}</td>
      <td>
        正規表現に含まれる場合、括弧で囲まれた一致た部分文字列を指定する読み取り専用の要素です。括弧で囲まれた部分文字列の数は無制限です。
      </td>
      <td>
        <code>[1]: "bB"<br />[2]: "d"</code>
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- JavaScript ガイドより

  - [オブジェクトプロパティのインデックス付け](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)
  - [インデックス付きコレクション: `Array` オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#array_object)

- [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
