---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Array
  - Array method
  - JavaScript
  - Method
  - Prototype
  - Sorting
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
---
{{JSRef}}

**`sort()`** メソッドは、配列の要素を _[in place](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)_ でソートします。既定のソート順は昇順で、要素を文字列に変換してから、UTF-16 コード単位の値の並びとして比較します。

このソートで消費される CPU 時間やメモリースペースは実装に依存するので、ここで言及することは出来ません。

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 構文

```
arr.sort([compareFunction])
```

### 引数

- `firstEl`
  - : 比較対象の一つ目の要素を指定します。
- `secondEl`
  - : 比較対象の二つ目の要素を指定します。

<!---->

- `compareFunction` {{optional_inline}}
  - : ソート順を定義する関数を指定します。省略された場合、配列の各要素は文字列に変換され、各文字の [Unicode](/ja/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode) のコードポイント順に従ってソートされます。

### 返値

ソートされた結果の配列。ソートは対象配列上で _[in place](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)_ に行われることに注意して下さい。コピーされた別の配列が準備されることはありません。

## 解説

`compareFunction` (比較関数) が与えられなかった場合、`undefined` 以外のすべての配列要素は文字列に変換され、文字列が UTF-16 コード単位順でソートされます。例えば、"banana" は "cherry" の前に来ます。数値のソートでは、9 が 80 の前に来ますが、数値は文字列に変換されるため、Unicode 順で "80" が "9" の前に来ます。`undefined` の要素はすべて、配列の末尾に並べられます。

> **Note:** **注:** UTF-16 では、`\uFFFF` を超える Unicode 文字は 2 つのサロゲートコード単位にエンコードされ、`\uD800`-`\uDFFF` の範囲になります。それぞれのコード単位の値は比較では別々に扱われます。したがって、`\uD655\uDE55` というサロゲートペアで形成される文字は、`\uFF3A` の文字よりも前に並べられます。

`compareFunction` が与えられた場合、`undefined` 以外のすべての配列要素は比較関数の返値に基づきソートされます (`undefined` の要素はすべて、`compareFunction` を呼び出すことなく配列の末尾へ並べられます)。もし `a` と `b` を比較しようとする場合は、次のようになります。

- `compareFunction(a, b)` が 0 未満の場合、`a` を `b` より小さいインデックスにソートします。(つまり、`a` が先に来るようにします)
- `compareFunction(a, b)` が 0 を返した場合、`a` と `b` は互いに変更せず、他のすべての要素に対してソートします。注意: ECMAScript 標準はこの振る舞いを保証していないため、一部のブラウザー (例えば、遅くとも 2003 年以前のバージョンの Mozilla) はこれを遵守していません。
- `compareFunction(a, b)` が 0 より大きい場合、`b` を `a` より小さいインデックスにソートします。(つまり、`b` が先に来るようにします)
- `compareFunction(a, b)` に与えられた引数が同じなら返値も同じでなければなりません。もし一貫性のない値を返した場合の挙動は未定義となります。

よって、比較関数は以下のような形式をもちます。

```js
function compare(a, b) {
  if (ある順序の基準において a が b より小) {
    return -1;
  }
  if (その順序の基準において a が b より大) {
    return 1;
  }
  // a は b と等しいはず
  return 0;
}
```

文字列の代わりに数字を比較する場合、比較関数は単純に `a` から `b` を引けばよいでしょう。次のように比較関数を定義すれば昇順に並べることができます (`Infinity` や `NaN` がなければですが)。

```js
function compareNumbers(a, b) {
  return a - b;
}
```

比較関数には{{jsxref("Operators/function", "関数式", "", 1)}}を使うと便利です。

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

ES2015 では{{jsxref("Functions/Arrow_functions", "アロー関数式", "", 1)}}によるより短い構文も利用できます。

```js
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

オブジェクトはプロパティの値の 1 つを指定して並べ替えることができます。

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// 値順にソート
items.sort(function (a, b) {
  return a.value - b.value;
});

// 名前順にソート
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // 大文字と小文字を無視する
  var nameB = b.name.toUpperCase(); // 大文字と小文字を無視する
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

## 例

### 配列の生成、表示、ソート

以下の例は 4 つの配列を生成し、元の配列を表示したのちに、ソートした配列を表示します。数値の配列は比較関数なしでソートされたのち、比較関数ありでソートされます。

```js
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('ソート結果:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('比較関数なしのソート結果:', numberArray.sort());
console.log('compareNumbers でのソート結果:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('比較関数なしのソート結果:', numericStringArray.sort());
console.log('compareNumbers でのソート結果:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('比較関数なしのソート結果:', mixedNumericArray.sort());
console.log('compareNumbers でのソート結果:', mixedNumericArray.sort(compareNumbers));
```

この例は以下のような出力をもたらします。出力結果が示すように、比較関数が使われた場合、数値はそれが数値か数字の文字列かにかかわらず正しくソートされます。

```
stringArray: Blue,Humpback,Beluga
ソート結果: Beluga,Blue,Humpback

numberArray: 40,1,5,200
比較関数なしのソート結果: 1,200,40,5
compareNumbers でのソート結果: 1,5,40,200

numericStringArray: 80,9,700
比較関数なしのソート結果: 700,80,9
compareNumbers でのソート結果: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
比較関数なしのソート結果: 1,200,40,5,700,80,9
compareNumbers でのソート結果: 1,5,9,40,80,200,700
```

### 非 ASCII 文字のソート

非 ASCII 文字、つまりアクセント記号付き文字 (e, é, è, a, ä など) を含む文字列をソートする場合、英語以外の文字列は {{jsxref("String.localeCompare")}} を使用してください。この関数は、それらの文字を比較して正しい順序で表示することができます。

```js
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items は ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### map を利用したソート

`compareFunction` (比較関数) は、配列内の要素毎に複数回呼び出すことができます。ただ `compareFunction` の性質によっては、これが多大なオーバーヘッドをもたらす可能性もあります。`compareFunction` がたくさんの処理を行えば行うほど、そしてソート対象の要素数が多ければ多いほど、ソートに [map](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を利用すると効率が上がるでしょう。すなわち、対象の配列を一度だけ走査してソート対象の実際の値を取り出し、一時的な配列に格納した上でソートを行い、その上で一時的な配列を走査して正しい並び順を実現するやりかたです。

```js
// ソートする配列
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});
```

There is an open source library available called [mapsort](https://null.house/open-source/mapsort) which applies this approach.

## 仕様

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.sort', 'Array.prototype.sort')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.sort")}}

## 関連情報

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- [About the stability of the algorithm used by V8 engine](https://v8.dev/blog/array-sort)
