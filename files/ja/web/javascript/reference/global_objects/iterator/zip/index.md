---
title: Iterator.zip()
short-title: zip()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/zip
l10n:
  sourceCommit: dc02b8a490ea0ff4ac1236546f32270ca0cc0aa5
---

{{JSRef}}{{SeeCompatTable}}

**`Iterator.zip()`** は静的メソッドで、複数の反復可能オブジェクトから要素を集約し、同じ位置の要素を含む配列を生成する新しい {{jsxref("Iterator")}} オブジェクトを生成します。これは本質的に入力反復可能オブジェクトを「まとめ」、それらを同時に反復処理できるようにします。

{{jsxref("Iterator.zipKeyed()")}} メソッドも同様ですが、配列ではなく、指定可能なキーを持つオブジェクトを返します。

## 構文

```js-nolint
Iterator.zip(iterables)
Iterator.zip(iterables, options)
```

### 引数

- `iterables`
  - : 集約される反復可能オブジェクトの反復可能オブジェクトです。[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)でなければならず、[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)であってはいけません。要素が無限の反復可能オブジェクトであっても、有限であるべきです。それぞれの要素は[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反覆可能プロトコル)プロトコルを実装しているるか、それが不可能な場合は[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)プロトコルを実装している必要があります。文字列は拒否されます。文字列をまとめるには、 {{jsxref("Iterator.from()")}} を使用して明示的に反復可能オブジェクトに変換してください。
- `options` {{optional_inline}}
  - : 入力したものの長さが一致しない場合の挙動を指定するオブジェクト。以下のプロパティを持つことができます。
    - `mode` {{optional_inline}}
      - : 以下のいずれかです。
        - `"shortest"` （デフォルト）: 結果として生成されるイテレーターは、いずれか一方の入力反復可能オブジェクトが枯渇した時点で停止します。
        - `"longest"`: 生成されたイテレーターは、すべての入力反復可能オブジェクトが枯渇した時点で停止します。短い反復可能オブジェクトからの欠落値は、`padding` オプションに従って埋められます。
        - `"strict"`: すべての反復可能オブジェクトが同時に終了しなければ {{jsxref("TypeError")}} が発生します。
    - `padding` {{optional_inline}}
      - : 反復可能オブジェクト（イテレーターではない）。`mode` が `"longest"` の場合にのみ取得・検証されます。`undefined` または存在しない場合、短い反復可能オブジェクトからの欠落値は `undefined` で埋められます（これは空の反復可能オブジェクトを渡すことと等価です）。反復可能オブジェクトが指定された場合、`Iterator.zip()` が呼び出された直後に、`iterables` の要素数と同回数だけ反復処理されます。`padding[i]` は `iterables[i]` の欠落値として使用されます（`padding` と `iterables` が配列として指定されている場合。必ずしも配列である必要はありません）。`padding` が `iterables` より短い場合、残りの反復可能オブジェクトに対して `undefined` が使用されます。

### 返値

新しい {{jsxref("Iterator")}} オブジェクト。そのそれぞれの要素は、入力された反復可能オブジェクトの数に等しい長さの配列であり、入力されたそれぞれの反復可能オブジェクトからの要素を対応する位置に持ちます。`iterables` オブジェクトが空の場合、結果のイテレーターは完了済みとして生成されます。

## 解説

`Iterator.zip()` 関数は[転置](https://ja.wikipedia.org/wiki/転置行列)操作と同様に振る舞い、各入力の一致する位置にある要素を含む配列を生成します。反復可能オブジェクトを配列として表現すると、入力は次のようになります。

```js
[
  [a1, a2, a3, a4], // Iterable a
  [b1, b2, b3], // Iterable b
  [c1, c2, c3, c4, c5], // Iterable c
];
```

結果として生成されるイテレーターは、オプションにかかわらず、最初に次の配列を生成します。

```js
[a1, b1, c1];
[a2, b2, c2];
[a3, b3, c3];
```

最初の 3 つの配列が反復処理された後、入力反復可能オブジェクト `b` は 4 回目の `next()` 呼び出しで終了します。つまり `{ done: true }` を返します。その後何が起こるかは `mode` オプションによって異なります。`mode`が `"shortest"` （デフォルト）の場合、結果のイテレーターはここで停止します。他の 2 つの入力イテレーターは[閉じられた状態](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#errors_during_iteration)になります。`mode` が `"strict"` の場合、2 番目のイテレータが結果 `{ done: true }` を生成した時点で他の 2 つの反復可能オブジェクトが完了していないため、エラーが発生します。`mode` が `"longest"` の場合、結果のイテレーターは配列の生成を続け、不足している値を埋めます。例えば、`padding` が指定されていない場合、デフォルトは `undefined` になります。

```js
[a4, undefined, c4];
[undefined, undefined, c5];
```

`padding` が反復可能オブジェクトとして指定された場合、入力反復可能オブジェクトが 3 つ存在するため、`padding` 反復可能オブジェクトの最初の 3 つの値が欠損値の埋め込みに使用されます。`padding` が `[p1, p2, p3]` の値を持つ配列であると仮定します。すると、入力反復可能オブジェクト `b` の欠損値には `p2` を、入力反復可能オブジェクト `a` の欠損値には `p1` をそれぞれ使用します。

```js
[a4, p2, c4];
[p1, p2, c5];
```

`padding` 反復可能オブジェクトの値が 3 つ未満の場合、不足している値は `undefined` で埋められます。

## 例

### インデックス付きのマップを走査

`Iterator.zip()` を使用すると、任意の反復可能オブジェクト（文字列はデフォルトで対応していません）を反復処理しながら、インクリメントされるカウンターにもアクセスできます。

```js
const ages = new Map([
  ["Caroline", 30],
  ["Danielle", 25],
  ["Evelyn", 35],
]);

const numbers = (function* () {
  let n = 0;
  while (true) {
    yield n++;
  }
})();
for (const [index, [name, age]] of Iterator.zip([numbers(), ages])) {
  console.log(`${index}: ${name} is ${age} years old.`);
}

// 出力:
// 0: Caroline is 30 years old.
// 1: Danielle is 25 years old.
// 2: Evelyn is 35 years old.
```

`numbers()` は `0` から始まる増加する数値を生成する無限イテレーターです。`Iterator.zip()` はデフォルトで最短の入力反復可能オブジェクトが終了すると停止するため、ループは正確に 3 回反復処理します。`numbers()` イテレーターはループ終了後に適切に閉じられるため、無限ループは発生しません。

### キーと値のリストからマップを作成

2 つの配列があるとします。1 つはキー、もう 1 つは値です。`Iterator.zip()` を使用することで、これらを {{jsxref("Map")}} に結合することができます。

```js
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const temperatures = [22, 21, 23, 20, 19];

const dayTemperatureMap = new Map(Iterator.zip([days, temperatures]));
console.log(dayTemperatureMap);
// Map(5) { 'Mon' => 22, 'Tue' => 21, 'Wed' => 23, 'Thu' => 20, 'Fri' => 19 }
```

### 複数のデータソースを通して反復処理を結合

複数のマイクロサービスやデータベースなど、複数のソースからデータが流入するとします。それぞれのソースが関連データを同じ順序で提供していることが分かっており、それらをまとめて処理したい場合、`Iterator.zip()` を使用することができます。

```js
const names = fetchNames(); // e.g., ["Caroline", "Danielle", "Evelyn"]
const ages = fetchAges(); // e.g., [30, 25, 35]
const cities = fetchCities(); // e.g., ["New York", "London", "Hong Kong"]

for (const [name, age, city] of Iterator.zip([names, ages, cities])) {
  console.log(`${name}, aged ${age}, lives in ${city}.`);
}

// 出力:
// Caroline, aged 30, lives in New York.
// Danielle, aged 25, lives in London.
// Evelyn, aged 35, lives in Hong Kong.
```

### 不均等な反復可能オブジェクトに対するパディングの提供

`mode` を `"longest"` に設定して長さの異なる反復可能オブジェクトをまとめる際、`padding` 反復可能オブジェクトを指定することで、欠落項目の埋め込みに使用する値を定義できます。

```js
const letters = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3];

// 反復可能オブジェクトごとに 1 つのパディング値
const padding = ["[Letter missing]", "[Number missing]"];
const it = Iterator.zip([letters, numbers], { mode: "longest", padding });
for (const [letter, number] of it) {
  console.log(`${letter}: ${number}`);
}
// 出力:
// a: 1
// b: 2
// c: 3
// d: [Number missing]
// e: [Number missing]
```

### 文字列をまとめる

文字列は `Iterator.zip()` の入力反復可能オブジェクトとして受け入れられません。これは、文字列を暗黙的に反復可能にすることが誤りとみなされるようになったためです。文字列をまとめるには、明示的に {{jsxref("Iterator.from()")}} を使用してイテレーターに変換してください。

```js
const str1 = "abc";
const str2 = "1234";
const it = Iterator.zip([Iterator.from(str1), Iterator.from(str2)]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// 出力:
// a - 1
// b - 2
// c - 3
```

場合によっては、コード単位ではなく[書記素クラスター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_文字、unicode_コードポイント、書記素クラスター)で分割したいことがあります。その場合は、{{jsxref("Intl.Segmenter")}} API を使用することができます。

```js
const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
const str1 = "🤷‍♂️🤷‍♀️🤷";
const str2 = "123";
const it = Iterator.zip([
  segmenter.segment(str1).map(({ segment }) => segment),
  segmenter.segment(str2).map(({ segment }) => segment),
]);
for (const [char1, char2] of it) {
  console.log(`${char1} - ${char2}`);
}
// 出力:
// 🤷‍♂️ - 1
// 🤷‍♀️ - 2
// 🤷 - 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator.zip` のポリフィル (`core-js`)](https://core-js.io/docs/features/proposals/joint-iteration)
- [es-shims による `Iterator.zip` のポリフィル](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.zipKeyed()")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Iterator.concat()")}}
