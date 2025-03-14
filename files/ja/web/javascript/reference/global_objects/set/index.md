---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{JSRef}}

**`Set`** オブジェクトは、{{Glossary("Primitive", "プリミティブ値")}}やオブジェクト参照を問わず、あらゆる型で多数の一意の値を格納することができます。

## 解説

`Set` オブジェクトは値の集合です。 `Set` に**重複する値は格納出来ません**。 `Set` 内の値は集合内で一意になります。 `Set` はその要素について挿入順で反復処理を行うことができます。挿入順は、各要素が [`add`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/add) メソッドによって正常に `Set` に挿入された順番に対応します。

仕様書では `Set` の実装について「平均アクセス時間が集合内の要素数に対して線形探索以下」であることが要求されています。したがって、計算量が O(N) よりも優れている限り、内部的にはハッシュ表（ルックアップは O(1)）、探索木（ルックアップは O(log(N))）、または他のデータ構造として表すことができます。

### 値の等価性

値の等値性は、 [SameValueZero](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#同値ゼロ等価性) アルゴリズムに基づいています。（以前は [SameValue](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#object.is_を使用した同値等価性) を使用しており、0 と -0 は異なるものとして扱われていました。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)の "Key equality for -0 and 0" を参照してください。）つまり、 {{jsxref("NaN")}} は `NaN` と同じとみなされ（例え `NaN !== NaN` であっても）、それ以外の値は `===` 演算子の挙動に従って等しいとみなされます。

### パフォーマンス

[`has`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/has) メソッドは、値が `Set` 内にあるかどうかをチェックします。これは、以前に `Set` に追加された要素のほとんどを確認するよりも平均すると高速なアプローチを使用します。特に、 `Array` オブジェクトの `length` が `Set` オブジェクトの `size` と等しい場合、平均して [`Array.prototype.includes`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) メソッドより速くなります。

### Set の合成

`Set` オブジェクトは、数学演算のように集合を合成するためのいくつかのメソッドを提供します。これらのメソッドには、以下のようなものがあります。

<table>
  <thead>
    <tr>
      <th scope="col">メソッド</th>
      <th scope="col">返値の型</th>
      <th scope="col">数学の同等のもの</th>
      <th scope="col">ベン図</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Set/difference", "A.difference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi></mrow><annotation encoding="TeX">A\setminus B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="A Venn diagram where two circles overlap. The difference of A and B is the part of A that is not overlapping B." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="A Venn diagram where two circles overlap. The intersection of A and B is the part where they overlap." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="A Venn diagram where two circles overlap. The symmetric difference of A and B is the region contained by either circle but not both." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="A Venn diagram where two circles overlap. The symmetric difference of A and B is the region contained by either or both circles." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="A Venn diagram with two circles. A and B are disjoint because the circles have no region of overlap." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSubsetOf", "A.isSubsetOf(B)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSubsetOf/diagram.svg" alt="A Venn diagram with two circles. A is a subset of B because A is completely contained in B." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSupersetOf", "A.isSupersetOf(B)")}}</td>
      <td><code>論理型</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi></mrow><annotation encoding="TeX">A\supseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSupersetOf/diagram.svg" alt="A Venn diagram with two circles. A is a superset of B because B is completely contained in A." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
  </tbody>
</table>

より一般化できるように、これらのメソッドは Set オブジェクトだけでなく、[Set 風](#set_風オブジェクト)オブジェクトも受け入れます。

### Set 風オブジェクト

すべての [Set 合成メソッド](#set-の合成)では、 {{jsxref("Operators/this", "this")}} が実際の `Set` インスタンスであることが要求されますが、引数は Set 風であるだけで構いません。Set 風オブジェクトとは、次のことを提供するオブジェクトです。

- {{jsxref("Set/size", "size")}} プロパティが数値を保持すること。
- {{jsxref("Set/has", "has()")}} メソッドが要素を取り、論理値を返すこと。
- {{jsxref("Set/keys", "keys()")}} メソッドが Set 内の要素の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返すこと。

例えば、{{jsxref("Map")}} オブジェクトは Set 風です。なぜなら、{{jsxref("Map/size", "size")}}、{{jsxref("Map/has", "has()")}}、{{jsxref("Map/keys", "keys()")}} を保有しており、Set メソッドで使用する際に、キーの Set のように動作するからです。

```js
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
```

> [!NOTE]
> Set 風プロトコルは、要素を生成するために `keys()` メソッドを [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) の代わりに呼び出します。これは、Map を有効な Set 風オブジェクトにするためです。なぜなら、Map の場合、イテレーターは項目を生成しますが、`has()` メソッドはキーを取得するからです。

[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)は、`has()` メソッドや `size` プロパティを持っておらず、`keys()` メソッドが要素ではなくインデックスを生成するため、Set 風ではありません。{{jsxref("WeakSet")}} オブジェクトも、`keys()` メソッドを持たないため、Set 風ではありません。

### Set 風のブラウザー API

ブラウザーの **`Set` 風オブジェクト**（または「集合風オブジェクト」）とは、[ウェブ API](/ja/docs/Web/API) の中で多くの点で `Set` のように動作するインターフェイスです。

`Set` のように、要素はオブジェクトに追加した順番に反復処理することができます。
`Set` 風オブジェクトと `Set` には、名前と動作が同じプロパティとメソッドもあります。
しかし Set とは異なり、各アイテムには特定の定義済みの型しか使用できません。

許可されている型には仕様書の IDL 定義に設定されています。
例えば、 {{domxref("GPUSupportedFeatures")}} は `Set` 風オブジェクトですが、キーと値として文字列を使用する必要があります。
これは下記の仕様 IDL で定義されています。

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

`Set` 風オブジェクトは、読み取り専用か読み書き可能かのどちらかです（上記の IDL で `readonly` キーワードを確認してください。

- 読み取り専用の `Set` 風オブジェクトには [`size`](#set.prototype.size) プロパティがあり、 [`entries()`](#set.prototype.entries), [`forEach()`](#set.prototype.foreach), [`has()`](#set.prototype.has), [`keys()`](#set.prototype.keys), [`values()`](#set.prototype.values), [`[Symbol.iterator]()`](#set.prototypesymbol.iterator) の各メソッドがあります。
- 読み書き可能な `Set` 風オブジェクトには、それに加えて [`clear()`](#set.prototype.clear), [`delete()`](#set.prototype.delete), [`add()`](#set.prototype.add) の各メソッドがあります。

メソッドとプロパティは `Set` の等価なエンティティと同じ動作をしますが、項目のの型に制限があります。

以下のものが、読み取り専用の `Set` 風ブラウザーオブジェクトの例です。

- {{domxref("GPUSupportedFeatures")}}
- {{domxref("XRAnchorSet")}}

以下のものが、読み書き可能な `Set` 風ブラウザーオブジェクトの例です。

- {{domxref("CustomStateSet")}}
- {{domxref("FontFaceSet")}}
- {{domxref("Highlight")}}

## コンストラクター

- {{jsxref("Set/Set", "Set()")}}
  - : 新しい `Set` オブジェクトを生成します。

## 静的プロパティ

- [`Set[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : 派生オブジェクトを生成するために使用されるコンストラクター関数です。

## インスタンスプロパティ

これらのプロパティは `Set.prototype` で定義されており、すべての `Set` インスタンスから共有されます。

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : このインスタンスオブジェクトを生成したコンストラクター関数です。 `Set` インスタンスの場合、初期値は {{jsxref("Set/Set", "Set")}} コンストラクターです。
- {{jsxref("Set.prototype.size")}}
  - : `Set` オブジェクト内の値の数を返します。
- `Set.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列の `"Set"` です。 このプロパティは {{jsxref("Object.prototype.toString()")}} で利用されます。

## インスタンスメソッド

- {{jsxref("Set.prototype.add()")}}
  - : この `Set` オブジェクト内に同じ値を持つ要素がまだ存在しなかった場合、指定した値を持つ新しい要素を `Set` オブジェクトに挿入します。
- {{jsxref("Set.prototype.clear()")}}
  - : この `Set` オブジェクトからすべての要素を取り除きます。
- {{jsxref("Set.prototype.delete()")}}
  - : `value` に関連した要素を取り除き、要素の削除に成功したかどうかを示す論理値を返します。 `Set.prototype.has(value)` はその後は `false` を返します。
- {{jsxref("Set.prototype.difference()")}}
  - : 集合を取り、この `Set` の中にあって与えられた集合の中にない要素が入った新しい `Set` を返します。
- {{jsxref("Set.prototype.entries()")}}
  - : `Set` オブジェクト内の各要素を **`[value, value]` の配列**の形で挿入順で返す、新しいイテレーターオブジェクトを返します。これは {{jsxref("Map")}} オブジェクトと似ていますが、それぞれの項目の _key_ が `Set` では _value_ と同じになります。
- {{jsxref("Set.prototype.forEach()")}}
  - : この `Set` オブジェクト内に存在する各値に対して、挿入順に一度ずつ `callbackFn` を呼びます。`thisArg` 引数が指定された場合、それぞれの `callbackFn` の呼び出しにおいて `this` の値として使用されます。
- {{jsxref("Set.prototype.has()")}}
  - : この `Set` オブジェクト内に引数で与えられた値をもつ要素が存在するかどうかを示す論理値を返します。
- {{jsxref("Set.prototype.intersection()")}}
  - : 集合を取り、この `Set` の中と与えられた集合の中の両方にある要素が入った新しい `Set` を返します。
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : 集合を取り、この `Set` の中に与えられた集合の中の要素がないかどうかを示す論理値を返します。
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : 集合を取り、この `Set` の中のすべての要素が与えられた集合の中に存在するかどうかを示す論理値を返します。
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : 集合を取り、与えられた集合の中のすべての要素がこの `Set` に存在するかどうかを示す論理値を返します。
- {{jsxref("Set.prototype.keys()")}}
  - : {{jsxref("Set.prototype.values()")}} の別名です。
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : 集合を取り、この `Set` または与えられた集合の中に存在するものの、両方には存在しない要素が入った新しい `Set` を返します。
- {{jsxref("Set.prototype.union()")}}
  - : 集合を取り、この `Set` または与えられた集合の中のどちらか、または両方に存在する要素が入った新しい `Set` を返します。
- {{jsxref("Set.prototype.values()")}}
  - : `Set` オブジェクト内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。
- [`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : `Set` オブジェクト内の各要素の**値**を挿入順に返す、新しいイテレーターオブジェクトを返します。

## 例

### Set オブジェクトの使用

```js
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o は別なオブジェクトを参照しているので、これは良い

mySet1.has(1); // true
mySet1.has(3); // false。 3 はセットに追加されないため
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // セットから 5 を取り除く
mySet1.has(5); // false。 5 は削除された

mySet1.size; // 4。 1 つの値を削除したばかりであるため

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 }。 一度削除された要素は、新しい要素として追加されるため削除前の位置は保持されない

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

### Set の反復処理

挿入順に要素を訪問する集合に対する反復処理です。

```js
for (const item of mySet1) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// ここではキーと値は同じ
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Set オブジェクトを Array オブジェクトに Array.from で変換
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// HTML 文書内であれば以下のものも動作する
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// Set と Array の間の変換
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// 交差する様子をシミュレートすることができる
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// 差をシミュレートすることができる
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// セット内の項目を forEach() で反復処理
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### 基本的な集合演算の実装

```js
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// 例
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // returns Set {3, 4}
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
difference(setA, setC); // returns Set {1, 2}
```

### 配列との関係

```js
const myArray = ["value1", "value2", "value3"];

// 通常の Set コンストラクターを使用して、 Array を Set に変換
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// スプレッド演算子を使って、集合を配列に変換
console.log([...mySet]); // myArray と全く同じ Array が表示されます。
```

### 配列から重複した要素を取り除く

```js
// 配列から重複する要素を取り除くために使用
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### 文字列との関係

```js
// 大文字小文字の区別あり（集合に "F" と "f" が入る）
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// 重複削除（"f" は文字列中に 2 回現れるが、1 つしか入らない）
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Set を使用して、リスト中の値の一意性を保証

```js
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
