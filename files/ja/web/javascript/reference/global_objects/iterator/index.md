---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

**`Iterator`** オブジェクトは、イテレーターの結果オブジェクトを返す `next()` メソッドを提供することで、[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)に準拠したオブジェクトです。すべての組み込みイテレーターは `Iterator` クラスを継承しています。 `Iterator` クラスはイテレーターオブジェクト自身を返す [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) メソッドを提供し、イテレーターを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)にしています。また、イテレーターを操作するためのヘルパーメソッドもいくつか提供しています。

## 解説

以下のものは、すべて JavaScript の組み込みイテレーターです。

- 配列イテレーター: {{jsxref("Array.prototype.values()")}}、{{jsxref("Array.prototype.keys()")}}、{{jsxref("Array.prototype.entries()")}}、[`Array.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)、{{jsxref("TypedArray.prototype.values()")}}、{{jsxref("TypedArray.prototype.keys()")}}、{{jsxref("TypedArray.prototype.entries()")}}、[`TypedArray.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)、[`arguments[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) で返されます。
- String イテレーター: [`String.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) で返されます。
- Map イテレーター: {{jsxref("Map.prototype.values()")}}、{{jsxref("Map.prototype.keys()")}}、{{jsxref("Map.prototype.entries()")}}、[`Map.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) で返されます。
- Set イテレーター: {{jsxref("Set.prototype.values()")}}、{{jsxref("Set.prototype.keys()")}}、{{jsxref("Set.prototype.entries()")}}、[`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) で返されます。
- RegExp String イテレーター: [`RegExp.prototype[Symbol.matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)、{{jsxref("String.prototype.matchAll()")}} で返されます。
- {{jsxref("Generator")}} オブジェクト: [ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)で返されます。
- Segments イテレーター: [`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) で返される [`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) オブジェクトの [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator) メソッドで返されます。
- イテレーターヘルパーは、 {{jsxref("Iterator.prototype.filter()")}} や {{jsxref("Iterator.prototype.map()")}} などのイテレーターヘルパーメソッドで返されます。

Web API はイテレーターを返すこともあります。 JavaScript のコアのイテレーターを再利用するものもあれば、自分自身でイテレーターを定義するものもあります。 例を示します。

- [配列風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列風オブジェクト)オブジェクト（[`NodeList`](/ja/docs/Web/API/NodeList) など）は、配列イテレーターを `keys()`、`values()`、`entries()`、`[Symbol.iterator]()` メソッドそれぞれで返します。
- Web API の [Map 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#map_風のブラウザー_api)オブジェクト、たとえば [`Headers`](/ja/docs/Web/API/Headers) は、独自のイテレーター型（Headers イテレーターなど）を `keys()`、`values()`、`entries()`、`[Symbol.iterator]()` メソッドそれぞれで返します。
- Web API の [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風のブラウザー_api)オブジェクト、たとえば [`FontFaceSet`](/ja/docs/Web/API/FontFaceSet) は、独自のイテレーター型（FontFaceSet イテレーターなど）を `keys()`、`values()`、`entries()`、`[Symbol.iterator]()` メソッドそれぞれで返します。

> **メモ:** [`NodeIterator`](/ja/docs/Web/API/NodeIterator) やその他の古いインターフェイスはそのような名前が付いていますが、[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)や[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)には適合していません。

これらのイテレーターはそれぞれ個別のプロトタイプオブジェクトを持っており、特定のイテレーターが使用する `next()` メソッドを定義しています。例えば、すべての String イテレーターオブジェクトは、隠しオブジェクトである `StringIteratorPrototype` を継承しており、このオブジェクトは、その文字列をコードポイントごとに反復処理する `next()` メソッドを持っています。また、 `StringIteratorPrototype` は [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティを持っており、初期値は文字列 `"String Iterator"` となります。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用します。同様に、他のイテレータープロトタイプも自分自身で `[Symbol.toStringTag]` の値を持ち、それは上で指定された名前と同じです。

これらのプロトタイプオブジェクトはすべて `Iterator.prototype` を継承しており、イテレーターオブジェクト自身を返す [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドを提供し、イテレーターを[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)にもしています。

### イテレーターヘルパーメソッド

> [!NOTE]
> これらのメソッドは、イテレーターヘルパーであり、反復処理可能オブジェクトヘルパーではありません。反復処理可能オブジェクトであるために要求されるのは、`[Symbol.iterator]()` メソッドが存在することだけだからです。これらのメソッドをインストールするための共有プロトタイプはありません。

`Iterator` クラス自体は、イテレーターを扱うためのいくつかのヘルパーメソッドを提供しています。例えば、次のようなことをしたくなるかもしれません。

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

これは、最初に {{jsxref("Map.prototype.values()")}} が返すイテレーターを配列に変換し、次に {{jsxref("Array.prototype.reduce()")}} メソッドを使用して合計を計算します。しかし、これはどちらも中間配列を作成し、その配列を 2 回反復処理します。代わりに、イテレーター自体の `reduce()` メソッドを使用することができます。

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

このメソッドは、特にメモリー効率の面でより効率的かもしれません。なぜなら、中間値を記憶することなく、イテレーターを1度だけ反復処理するだけだからです。無限イテレーターで作業するには、イテレーターのヘルパーメソッドが必要です。

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

`seq` は無限であるため、配列に変換することはできません。その代わり、イテレーター自体の `find()` メソッドを使用することができます。このメソッドは、条件を満たす最初の値を見つけるために必要な範囲で `seq` を反復処理します。

次のように、配列のメソッドに類似した多くのイテレーターのメソッドが見つかります。

| イテレーターのメソッド                     | 配列のメソッド                          |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} と {{jsxref("Iterator.prototype.take()")}} を組み合わせると、 {{jsxref("Array.prototype.slice()")}} に似たものになります。

### イテレーターヘルパーオブジェクト

> **メモ:** 「イテレーターヘルパーオブジェクト」と「イテレーターヘルパーメソッド」は、 2 つの異なる概念です。イテレーターヘルパーオブジェクトは実行時に検出可能ですが、「イテレーターヘルパーメソッド」は、理解を助けるための一連のメソッドの名前にすぎません。「イテレーターヘルパー」は、コンテキストに応じて、オブジェクトまたはメソッドのどちらかを指す場合があります。

イテレーターヘルパーメソッドのうち、{{jsxref("Iterator/filter", "filter()")}}、{{jsxref("Iterator/flatMap", "flatMap()")}}、{{jsxref("Iterator/map", "map()")}}、{{jsxref("Iterator/drop", "drop()")}}、{{jsxref("Iterator/take", "take()")}} は、新しいイテレーターヘルパーオブジェクトを返します。 イテレーターヘルパーは、 `Iterator` のインスタンスでもあり、これらのヘルパーメソッドを連結可能にします。 イテレーターヘルパーオブジェクトはすべて、イテレータープロトコルを実装する共通のプロトタイプオブジェクトを継承しています。

- `next()`
  - : 基礎となるイテレーターの `next()` メソッドを呼び出し、結果にヘルパーメソッドを適用し、結果を返します。
- `return()`
  - : 基になるイテレーターの `return()` メソッドを呼び出し、結果を返します。

イテレーターヘルパーは、基盤となるイテレーターと同じデータソースを共有しているため、イテレーターヘルパーを反復処理すると、基盤となるイテレーターも反復処理されます。イテレーターを「フォーク」して、反復処理を複数回できるようにする方法はありません。

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // 基本的にはコピー
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### 正規イテレーター

「イテレーター」には 2 種類あります。[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)に適合するオブジェクト（最小限、 `next()` メソッドの存在のみが要求されます）と、ヘルパーメソッドが利用できる `Iterator` クラスを継承するオブジェクトです。これらは互いに必要条件ではありません。 `Iterator` クラスは `next()` メソッドを定義していないため、 `Iterator` を継承するオブジェクトは自動的にイテレーターになるわけではありません。代わりに、オブジェクトは `next()` メソッドを自身で定義する必要があります。正規イテレーターとは、イテレータープロトコルに適合し、 `Iterator` を継承するものを指します。ほとんどのコードでは、イテレーターは正規イテレーターであることを前提とし、反復可能オブジェクトは正規イテレーターを返すことを前提としています。正規イテレーターを作成するには、 {{jsxref("Iterator/Iterator", "Iterator")}} を継承するクラスを定義するか、 {{jsxref("Iterator.from()")}} メソッドを使用するかしてください。

```js
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## コンストラクター

- {{jsxref("Iterator/Iterator", "Iterator()")}}
  - : イテレーターを作成する他のクラスによって[継承](/ja/docs/Web/JavaScript/Reference/Classes/extends)するためのものです。単独で作成された場合はエラーが発生します。

## 静的メソッド

- {{jsxref("Iterator.from()")}}
  - : イテレーターまたは反復可能オブジェクトから、新しい`Iterator`オブジェクトを作成します。

## インスタンスプロパティ

これらのプロパティは `Iterator.prototype` で定義され、すべての `Iterator` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : インスタンスオブジェクトを作成するコンストラクター関数です。 `Iterator` インスタンスの場合、初期値は {{jsxref("Iterator/Iterator", "Iterator")}} コンストラクターです。
- `Iterator.prototype[Symbol.toStringTag]`

  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Iterator"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

    > [!NOTE]
    > ウェブの互換性のため、多くの組み込みクラスの `[Symbol.toStringTag]` とは異なり、 `Iterator.prototype[Symbol.toStringTag]` は書き込み可能です。

## インスタンスメソッド

- {{jsxref("Iterator.prototype.drop()")}}
  - : このイテレーターの開始位置で指定された要素数をスキップする、新しいイテレーターヘルパーオブジェクトを返します。
- {{jsxref("Iterator.prototype.every()")}}
  - : イテレーターによって生成されたすべての要素が、指定された関数で実装しているテストに合格するかどうかをテストします。
- {{jsxref("Iterator.prototype.filter()")}}
  - : 新しいイテレーターヘルパーオブジェクトを返します。このオブジェクトは、指定されたコールバック関数が `true` を返すイテレーターの要素のみを生成します。
- {{jsxref("Iterator.prototype.find()")}}
  - : イテレーターが生成した最初の要素を返します。指定されたテスト関数を満たす値がない場合は、返値は {{jsxref("undefined")}} となります。
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : 元のイテレーターの各要素を取り、それを（別のイテレーターまたは反復可能オブジェクトに含まれている）マッピング関数に通し、マッピング関数から返された要素を生成する新しいイテレーターヘルパーオブジェクトを返します。
- {{jsxref("Iterator.prototype.forEach()")}}
  - : このイテレーターによって生成された各要素に対して、指定された関数を一度ずつだけ実行します。
- {{jsxref("Iterator.prototype.map()")}}
  - : 新しいイテレーターヘルパーオブジェクトを返します。このオブジェクトは、マッピング関数によって変換されたイテレーターの要素を反復処理します。
- {{jsxref("Iterator.prototype.reduce()")}}
  - : イテレーターによって生成された各要素に対して、ユーザーが指定した「縮約」コールバック関数を実行し、前の要素の計算の返値を渡します。すべての要素に対して縮約を実行した最終結果は、単一の値となります。
- {{jsxref("Iterator.prototype.some()")}}
  - : イテレータ内の少なくとも 1 つの要素が、指定された関数で実装されているテストに合格しているかどうかを判定します。論理値を返します。
- {{jsxref("Iterator.prototype.take()")}}
  - : このイテレーターで指定された数の要素を反復処理し、その後終了する新しいイテレーターヘルパーオブジェクトを返します。
- {{jsxref("Iterator.prototype.toArray()")}}
  - : イテレーターから反復処理された要素で満たされた新しい配列インスタンス ({{jsxref("Array")}}) を作成します。
- [`Iterator.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : イテレーターオブジェクト自身を返します。これにより、イテレーターオブジェクトが反復可能にもなります。

## 例

### イテレーターを反復可能オブジェクトとして使用

すべての組み込みイテレーターは反復可能でもあるので、`for...of` ループの中で使うことができます。

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Statements/function*", "function*")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
