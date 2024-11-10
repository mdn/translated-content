---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`sort()`** は {{jsxref("Array")}} のメソッドで、配列の要素を[その場 (in-place)](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0) でソートし、ソートされた同じ配列の参照を返します。既定のソート順は昇順で、要素を文字列に変換してから、 UTF-16 コード単位の値の並びとして比較します。

ソートの時間的・空間的予測値は実装に依存するため、保証はできません。

元の配列を変更せずに配列内の要素をソートするには、 {{jsxref("Array/toSorted", "toSorted()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/array-sort.html")}}

## 構文

```js-nolint
sort()
sort(compareFn)
```

### 引数

- `compareFn` {{optional_inline}}

  - : ソート順を定義する関数です。返値は、 2 つの要素の相対順序を示す符号を持つ数値である必要があります。 `a` が `b` より小さい場合は負の値、`a` が `b` より大きい場合は正の値、等しい場合は 0 とします。 `NaN` は `0` として扱われます。この関数は次の引数で呼び出されます。

    - `a`
      - : 比較する第一要素。 `undefined` になることはありません。
    - `b`
      - : 比較する第二要素。 `undefined` になることはありません。

    省略した場合、配列の要素は文字列に変換され、各文字の Unicode コードポイント値に従って並べ替えられます。

### 返値

ソートされた元の配列への参照です。なお、配列は[その場で](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)ソートされ、コピーは作成されません。

## 解説

`compareFn` が与えられなかった場合、`undefined` 以外のすべての配列要素は文字列に変換され、文字列が UTF-16 コード単位順でソートされます。例えば、"banana" は "cherry" の前に来ます。数値のソートでは、9 が 80 の前に来ますが、数値は文字列に変換されるため、Unicode 順で "80" が "9" の前に来ます。`undefined` の要素はすべて、配列の末尾に並べられます。

`sort()` メソッドは空のスロットを保持します。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の場合、空のスロットは配列の末尾に移動され、常にすべての `undefined` の後に置かれます。

> [!NOTE]
> UTF-16 では、`\uFFFF` を超える Unicode 文字は 2 つのサロゲートコード単位にエンコードされ、`\uD800` - `\uDFFF` の範囲になります。それぞれのコード単位の値は比較では別々に扱われます。したがって、`\uD855\uDE51` というサロゲートペアで形成される文字は、`\uFF3A` の文字よりも前に並べられます。

`compareFn` が与えられた場合、`undefined` 以外のすべての配列要素は比較関数の返値に基づきソートされます（`undefined` の要素はすべて、`compareFn` を呼び出すことなく配列の末尾へ並べられます）。

| `compareFn(a, b)` の返値 | ソート順                                   |
| ------------------------ | ------------------------------------------ |
| > 0                      | `a` を `b` の後に並べる（例えば `[b, a]`） |
| < 0                      | `a` を `b` の前に並べる（例えば `[a, b]`） |
| === 0                    | `a` と `b` の元の順序を維持する            |

よって、比較関数は以下のような形式をもちます。

```js-nolint
function compareFn(a, b) {
  if (ある順序の基準において a は b より小さい) {
    return -1;
  } else if (その順序の基準において a は b より大きい) {
    return 1;
  }
  // a は b と等しい
  return 0;
}
```

より正式には、適切なソート動作を保証するために、比較関数は以下の要件を満たすことが求められます。

- _無害_: 比較関数は比較されるオブジェクトや外部の状態を変更しません。（これは重要です。比較関数がいつ、どのように呼び出されるかは保証されていないので、特定の呼び出しが外部に見える影響を及ぼしてはいけません）。
- _安定的_: 比較関数は、同じ組の入力に対して常に同じ結果を返します。
- _反射的_: `compareFn(a, a) === 0` となります。
- _反対称的_: `compareFn(a, b)` と `compareFn(b, a)` はともに `0` であるか、逆の符号でなければなりません。
- _推移的_: `compareFn(a, b)` と `compareFn(b, c)` がともに正、0、負のいずれかであれば、 `compareFn(a, c)` は前の 2 つと同じ符号になります。

上記の制約に適合する比較関数は、常に `1`, `0`, `-1` のすべてを返すか、あるいは一貫して `0` を返すことができます。例えば、比較関数が `1` と `0` のみを返す場合、あるいは `0` と `-1` のみを返す場合は、_反対称性_ が崩れるので、確実にソートすることはできません。常に `0` を返す比較関数では、配列は全く変更されませんが、それでも信頼できます。

既定の字句比較関数は、上記の制約をすべて満たしています。

文字列の代わりに数字を比較する場合、比較関数は単純に `a` から `b` を引けばよいでしょう。次のように比較関数を定義すれば昇順に並べることができます（`Infinity` や `NaN` がなければですが）。

```js
function compareNumbers(a, b) {
  return a - b;
}
```

`sort()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変なので、このメソッドを適用するのには適していません。

## 例

### 配列の生成、表示、ソート

以下の例は 4 つの配列を生成し、元の配列を表示したのちに、ソートした配列を表示します。数値の配列は比較関数なしでソートされたのち、比較関数ありでソートされます。

```js
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
```

### オブジェクトの配列のソート

オブジェクトの配列は、プロパティの値を比較することで並べ替えることができます。

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// value によるソート
items.sort((a, b) => a.value - b.value);

// name によるソート
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // 大文字小文字を無視
  const nameB = b.name.toUpperCase(); // 大文字小文字を無視
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

### 非 ASCII 文字のソート

非 {{Glossary("ASCII")}} 文字、つまりアクセント記号付き文字（e, é, è, a, ä など）を含む文字列をソートする場合、英語以外の文字列は {{jsxref("String.prototype.localeCompare()")}} を使用してください。この関数は、それらの文字を比較して正しい順序で表示することができます。（訳注: 日本語をソートする場合も含みます。）

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items は ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### map を利用したソート

`compareFn` (比較関数) は、配列内の要素毎に複数回呼び出されることがあります。ただ `compareFn` の性質によっては、これが多大なオーバーヘッドをもたらす可能性もあります。`compareFn` がたくさんの処理を行えば行うほど、そしてソート対象の要素数が多ければ多いほど、ソートに [map](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を利用すると効率が上がるでしょう。すなわち、対象の配列を一度だけ走査してソート対象の実際の値を取り出し、一時的な配列に格納した上でソートを行い、その上で一時的な配列を走査して正しい並び順を実現するやりかたです。

```js
// ソートする配列
const data = ["delta", "alpha", "charlie", "bravo"];

// 位置とソート値を持つオブジェクトを保持する一時的な配列です。
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

// 削減された値を含む対応付けられた配列のソート
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
```

この手法を応用した [mapsort](https://github.com/Pimm/mapsort) というオープンソースのライブラリーが利用できます。

### sort() は同じ配列への参照を返す

`sort()` メソッドは元の配列への参照を返すので、返された配列を変更すると、元の配列も変更されます。

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers と sorted は両方とも [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

元の配列を変更せずに `sort()` を行いたいが、他の配列のメソッド（[`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) など）のように[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返したい場合は、 {{jsxref("Array/toSorted", "toSorted()")}} メソッドを使用してください。他にも、 `sort()` を呼び出す前に[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)または [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) を使用してシャローコピーを行うことができます。

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### ソートの安定性

バージョン 10 （または ECMAScript 2019）以降、仕様書では `Array.prototype.sort` が安定していることが決められています。

例えば、成績と横に並んだ生徒のリストがあったとします。生徒のリストはすでにアルファベット順の名前でソートされていることに注意してください。

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

この配列を `grade` で昇順にソートした後、

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

変数 `students` は以下のような値になります。

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

重要なことは、同じ評点を保有する学生（例: Alex と Devlin）は、ソートを呼び出す前と同じ順番のままであることです。これは、安定したソートアルゴリズムが保証するものです。

バージョン 10 （または ECMAScript 2019） 以前は、ソートの安定性が保証されていないため、以下のような結果になる可能性があります。

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

### 正しくない形の比較関数でのソート

比較関数が[解説](#解説)で説明した無害性、安定性、反射性、反対称性、推移性のルールをすべて満たしていない場合、プログラムの動作はうまく定義されません。

例えば、このコードを考えてください。

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

ここでの `compareFn` 関数は、反対称性を満たしていないため、正しい形式ではありません。 `a > b` ならば `1` を返しますが、 `a` と `b` を入れ替えると、負の値ではなく `0` を返すようになります。そのため、生成される配列はエンジンによって異なります。例えば、V8（Chrome、Node.js などで使用）や JavaScriptCore（Safari で使用）は配列を全くソートせず、 `[3, 1, 4, 1, 5, 9]` を返しますが、SpiderMonkey（Firefox で使用）は `[1, 1, 3, 4, 5, 9]` のように昇順に並べた配列を返すことになります。

しかし、`compareFn` 関数を少し変更して、`-1` や `0` を返すようにすると、次のようになります。

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

すると、 V8 や JavaScriptCore では `[9, 5, 4, 3, 1, 1]` のように降順にソートされますが、 SpiderMonkey では `[3, 1, 4, 1, 5, 9]` のようにそのままの値を返します。

この実装上の不整合があるため、常に 5 つの制約に従うことで、比較器を正しい形にすることをお勧めします。

### 疎配列における sort() の使用

空のスロットは配列の末尾に移されます。

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### 配列以外のオブジェクトに対する sort() の呼び出し

`sort()` メソッドは `this` の `length` プロパティを読み取ります。そして、`0` から `length - 1` までの範囲にある既存の整数キーのプロパティをすべて集合し、ソートして書き戻します。範囲内に存在しないプロパティがある場合、対応する末尾のプロパティは[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)され、あたかも存在しないプロパティが末尾にソートされたかのようになります。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.sort.call(arrayLike));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.sort` の安定性などを含んだ現代の実装 (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("String.prototype.localeCompare()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- [Getting things sorted in V8](https://v8.dev/blog/array-sort) on v8.dev (2018)
- [Stable `Array.prototype.sort`](https://v8.dev/features/stable-sort) on v8.dev (2019)
- [`Array.prototype.sort` stability](https://mathiasbynens.be/demo/sort-stability) by Mathias Bynens
