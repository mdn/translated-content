---
title: Array.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`reduce()`** は {{jsxref("Array")}} インターフェイスのメソッドで、配列のそれぞれの要素に対して、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素の計算結果の返値を渡します。配列のすべての要素に対して「縮小」コールバック関数を実行した最終結果は、単一の値となります。

コールバックの初回実行時には「直前の計算の返値」は存在しません。初期値が与えらえた場合は、代わりに使用されることがあります。そうでない場合は、配列の要素 0 が初期値として使用され、次の要素（0 の位置ではなく 1 の位置）から反復処理が開始されます。

{{InteractiveExample("JavaScript デモ: Array.prototype.reduce()")}}

```js interactive-example
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// 予想される結果: 10
```

## 構文

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 引数

- `callbackFn`
  - : 配列の各要素に対して実行される関数です。その返値は、次に `callbackFn` を呼び出す際の `accumulator` 引数の値になります。最後の呼び出しでは、返値は `reduce()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumulator`
      - : 前回の `callbackFn` の呼び出し結果の値です。初回の呼び出しでは `initialValue` が指定されていた場合はその値、そうでない場合は `array[0]` の値です。
    - `currentValue`
      - : 現在の要素の値です。初回の呼び出しでは `initialValue` が指定された場合は `array[0]` の値であり、そうでない場合は `array[1]` の値です。
    - `currentIndex`
      - : `currentValue` の位置です。初回の呼び出しでは、 `initialValue` が指定された場合は `0`、そうでない場合は `1` です。
    - `array`
      - : `reduce()` が呼び出された配列です。
- `initialValue` {{optional_inline}}
  - : コールバックが最初に呼び出された時に `accumulator` が初期化される値です。
    `initialValue` が指定された場合、`callbackFn` は配列の最初の値を `currentValue` として実行を開始します。
    もし `initialValue` が指定されなかった場合、`accumulator` は配列の最初の値に初期化され、`callbackFn` は配列の 2 つ目の値を `currentValue` として実行を開始します。この場合、配列が空であれば（`accumulator`として返す最初の値がなければ）エラーが発生します。

### 返値

配列全体にわたって「縮小」コールバック関数を実行した結果の値です。

### 例外

- {{jsxref("TypeError")}}
  - : 配列に要素がなく、かつ `initialValue` が提供されなかった場合に発生します。

## 解説

`reduce()` メソッドは[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)です。「縮小」コールバック関数を配列に含まれる各要素に対して昇順に一度ずつ呼び出し、その結果を単一の値に積算します。毎回、 `callbackFn` の返値は次回の `callbackFn` の呼び出しで `accumulator` として渡されます。最終的な `accumulator` の値（配列の最終反復処理において `callbackFn` から返される値）が `reduce()` の返値となります。これらのメソッドが一般的にどのように動作するのかについての詳細は、[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)の節をご覧下さい。

`callbackFn` は値が割り当てられている配列インデックスに対してのみ呼び出されます。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)の空のスロットに対しては呼び出されません。

他の[反復処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理メソッド)とは異なり、 `reduce()` は `thisArg` 引数を受け入れません。 `callbackFn` は常に `undefined` を `this` として呼び出され、 `callbackFn` が厳格モードでない場合は `globalThis` に置き換えられます。

`reduce()` は[関数型プログラミング](https://ja.wikipedia.org/wiki/関数型プログラミング)の中心的な概念です。ここでは、どの値も変異させることができないので、配列のすべての値を積算するには、反復処理のたびに新しい積算値を返さなければなりません。この約束事は JavaScript の `reduce()` にも当てはまります。[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)や他の可能な限りコピーする方法を使用して、既存のものを変更せずに、アキュームレーターとして新しい配列やオブジェクトを作成すべきなのです。もし、アキュームレーターをコピーする代わりに変化させることにした場合、コールバックで変更したオブジェクトを返すことを忘れないでください、さもなければ、次の反復処理で undefined を受け取ることになります。ただし、アキュムレーターをコピーすると、メモリー使用量が増加し、パフォーマンスが低下する可能性があることに注意してください。詳細については、 [reduce() を使用すべきでない場合用しない場合](#reduce_を使用すべきでない場合) を参照してください。このような場合、パフォーマンスの低下やコードの可読性の低下を避けるために、代わりに `for` ループを使用することをお勧めします。

`reduce()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

### 稀な場合

配列が（位置に関わらず） 1 つの要素しか持たず、 `initialValue` が指定されなかった場合、または `initialValue` が指定されていても配列が空だった場合、 `callbackFn` は*実行されずに*要素が返却されます。

`initialValue` が提供され、配列が空でない場合、 reduce メソッドは常に 0 の位置からコールバック関数を呼び出し始めます。

`initialValue` が提供されなかった場合、 reduce メソッドは、次の例に示すように、長さが 1 より大きい配列、長さが 1 の配列、長さが 0 の配列に対して異なる動作をします。

```js
const getMax = (a, b) => Math.max(a, b);

// コールバックは 0 の位置から配列内の全要素に対して呼び出される
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// コールバックは 1 の位置に対して 1 度だけ呼び出される
[1, 100].reduce(getMax); // 100

// コールバックは呼び出されない
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## 例

### 初期値がない場合の reduce() の動作

下記のコードは、初期値がない場合に配列に `reduce()` を呼び出したときに何が起こるかを示します。

```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

コールバック関数は 4 回呼び出され、各回の引数の内容は以下のようになります。

|                  | `accumulator` | `currentValue` | `index` | 返値 |
| ---------------- | ------------- | -------------- | ------- | ---- |
| 最初の呼び出し   | `15`          | `16`           | `1`     | `31` |
| 2 番目の呼び出し | `31`          | `17`           | `2`     | `48` |
| 3 番目の呼び出し | `48`          | `18`           | `3`     | `66` |
| 4 番目の呼び出し | `66`          | `19`           | `4`     | `85` |

`array` の要素は処理中に変化しません。常に `[15, 16, 17, 18, 19]` です。 `reduce()` の返値は、コールバック呼び出しの最後の返値である (`85`) となるでしょう。

### 初期値がある場合の reduce() の動作

ここでは、同じアルゴリズムで同じ配列を減らしますが、 `reduce()` の 2 番目の引数として `10` という `initialValue` を渡します。

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

コールバックは 5 回呼び出され、それぞれの呼び出しにおける引数と返値は次のようになります。

|                  | `accumulator` | `currentValue` | `index` | 返値 |
| ---------------- | ------------- | -------------- | ------- | ---- |
| 最初の呼び出し   | `10`          | `15`           | `0`     | `25` |
| 2 番目の呼び出し | `25`          | `16`           | `1`     | `41` |
| 3 番目の呼び出し | `41`          | `17`           | `2`     | `58` |
| 4 番目の呼び出し | `58`          | `18`           | `3`     | `76` |
| 5 番目の呼び出し | `76`          | `19`           | `4`     | `95` |

この場合の `reduce()` の返値は `95` となります。

### オブジェクト配列の値の合計値

オブジェクトの配列に含まれた値の合計値を出すには、すべての項目を関数内で取得できるようにするために `initialValue` を指定する**必要があります**。

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // logs 6
```

### 関数を直列にパイプ接続

`pipe` 関数は一連の関数を受け取り、新しい関数を返します。新しい関数が引数で呼び出されると、一連の関数が順番に呼び出され、それぞれが前回関数の返値を受け取ります。

```js
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// 合成に使用する素材
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// 特定の値の乗算のための合成関数
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// 使用方法
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### プロミスを直列に実行

[プロミスシーケンス](/ja/docs/Web/JavaScript/Guide/Using_promises#composition)は、非同期で行われることを除けば、基本的に前回の節で示された関数のパイプ接続です。

```js
// パイプと比較すると、 fn(acc) は acc.then(fn) に変更され、
// initialValue はプロミスであることが保証されます。
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// 合成に使用する構成要素
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// 構成された関数は、最終的にすべてプロミスで包まれるため、
// プロミス以外を返すこともできます。
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
```

`asyncPipe` は `async`/`await` を使用して実装することもでき、 `pipe` との類似性をよりよく示しています。

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### reduce() を疎配列で使用

`reduce()` は疎配列の欠落している要素をスキップしますが、値が `undefined` の場合はスキップしません。

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### 配列以外のオブジェクトに対する reduce() の呼び出し

`reduce()` メソッドは `this` の `length` プロパティを読み込み、次にキーが `length` より小さい非負の整数である各プロパティにアクセスします。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // length が 3 であるため reduce() からは無視される
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
```

### reduce() を使用すべきでない場合

`reduce()` のような多目的の高次関数は強力ですが、特に経験の浅い JavaScript の開発者にとっては理解しにくい場合があります。他の配列メソッドを使用した方がコードが明快になる場合、開発者は `reduce()` を使用する他の利点と読み取り可能性のトレードオフを比較検討する必要があります。

`reduce()` は常に `for...of` ループと同等ですが、上位スコープの変数を変更する代わりに、各反復処理で新しい値を返すことに注意してください。

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// これは、次のものと同等です
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

前述のように、人々が `reduce()` を使用したいと思う理由は、データを不変とする関数型プログラミングの手法を模倣するためです。したがって、アキュムレーターの不変性を支持する開発者は、次のように反復処理ごとにアキュムレーター全体をコピーする傾向があります。

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
```

このコードは非効率的です。というのも、各イテレーターは `allNames` オブジェクト全体をコピーする必要があり、これは固有の名前がいくつあるかによってサイズが大きくなってしまうからです。このコードは最悪の場合、 `N` が `names` の長さだとすると `O(N^2)` のパフォーマンスになります。

各反復処理で `allNames` オブジェクトを変更したほうがよりよいでしょう。しかし、 `allNames` がいずれにせよ変更されるのであれば、 `reduce()` を `for` ループに変換した方がより明確です。

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  // allNames を返さないと、次の反復処理で undefined を受け取る
  return allNames;
}, Object.create(null));
```

```js example-good
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = Object.create(null);
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
```

したがって、アキュムレーターが配列やオブジェクトで、反復処理ごとに配列やオブジェクトをコピーしている場合、誤ってコードに 2 次的な複雑さを導入してしまい、大きなデータですぐにパフォーマンスが低下してしまう可能性があります。これは実際のコードでも現れています。例えば、 [Making Tanstack Table 1000x faster with a 1 line change](https://jpcamara.com/2023/03/07/making-tanstack-table.html) を参照してください。

`reduce()` の受け入れられる用途のいくつかは上で指定されたものです（特に、配列の合計、プロミスの順序付け、関数のパイプ処理）。他にも `reduce()` よりも優れた代替手段が存在する場合があります。

- 配列の平坦化。代わりに {{jsxref("Array/flat", "flat()")}} を使用してください。

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- プロパティによるオブジェクトのグループ化。代わりに {{jsxref("Object.groupBy()")}} を使用してください。

  ```js example-bad
  const groups = array.reduce((acc, obj) => {
    const key = obj.name;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
  ```

  ```js example-good
  const groups = Object.groupBy(array, (obj) => obj.name);
  ```

- オブジェクトの配列に格納されている配列の連結。代わりに {{jsxref("Array/flatMap", "flatMap()")}} を使用してください。

  ```js example-bad
  const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
  ];
  const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
  ```

  ```js example-good
  const allBooks = friends.flatMap((person) => person.books);
  ```

- 配列内の重複項目の除去。代わりに {{jsxref("Set")}} と {{jsxref("Array.from()")}} を使用してください。

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- 配列の要素の削除や追加。代わりに {{jsxref("Array/flatMap", "flatMap()")}} を使用してください。

  ```js example-bad
  // 数値の配列を受け取り、完全二乗を平方根に分割します。
  const roots = array.reduce((acc, cur) => {
    if (cur < 0) return acc;
    const root = Math.sqrt(cur);
    if (Number.isInteger(root)) return [...acc, root, root];
    return [...acc, cur];
  }, []);
  ```

  ```js example-good
  const roots = array.flatMap((val) => {
    if (val < 0) return [];
    const root = Math.sqrt(val);
    if (Number.isInteger(root)) return [root, root];
    return [val];
  });
  ```

  配列から要素を取り除くだけなら {{jsxref("Array/filter", "filter()")}} も使用できます。

- 要素の検索、または要素が条件を満たすかどうかのテスト。代わりに {{jsxref("Array/find", "find()")}} と {{jsxref("Array/find", "findIndex()")}} または {{jsxref("Array/some", "some()")}} と {{jsxref("Array/every", "every()")}} を使用してください。これらのメソッドには、配列全体を反復処理することなく、結果が確定したらすぐに返すという好ましいこともあります。

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

`reduce()` が最良の選択である場合は、ドキュメント化と変数名の意味づけをすることで、可読性の欠点を軽減する手助けになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.reduce` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.reduce` のポリフィル](https://www.npmjs.com/package/array.prototype.reduce)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
