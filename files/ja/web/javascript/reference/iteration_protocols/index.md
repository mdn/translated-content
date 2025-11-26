---
title: 反復処理プロトコル
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 21916b17fcbfdae0058e713dd2a1953fd88106f4
---

{{jsSidebar("More")}}

**反復処理プロトコル**は、新しい組み込みオブジェクトや構文ではなく**プロトコル**です。これらのプロトコルは以下のような単純な約束事によって、すべてのオブジェクトで実装することができます。

プロトコルは 2 つあります。[反復可能プロトコル](#反復可能プロトコル)と[イテレータープロトコル](#イテレータープロトコル)です。

## 反復可能プロトコル

**反復可能プロトコル** (iterable protocol) によって、 JavaScript のオブジェクトは反復動作を定義またはカスタマイズすることができます。例えば、 {{jsxref("Statements/for...of", "for...of")}} 構造の中でどの値がループに使われるかです。一部の組み込み型は既定の反復動作を持つ[組み込み反復可能オブジェクト](#組み込み反復可能オブジェクト)で、これには {{jsxref("Array")}} や {{jsxref("Map")}} がありますが、他の型 ({{jsxref("Object")}} など) はそうではありません。

**反復可能**であるために、オブジェクトは **`[Symbol.iterator]()`** メソッドを実装する必要があります。これはつまり、オブジェクト（または、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)上のオブジェクトの一つ）が `[Symbol.iterator]` キー（{{jsxref("Symbol.iterator")}} 定数にて利用可）のプロパティを持つ必要があります。

- `[Symbol.iterator]()`
  - : [イテレータープロトコル](#イテレータープロトコル)に準拠するオブジェクトを返す、引数なしの関数。

（{{jsxref("Statements/for...of", "for...of")}} ループの始まりのように）オブジェクトが反復される必要があるときはいつでも、その `[Symbol.iterator]()` メソッドが引数なしで呼ばれます。そして、返される**イテレーター**は、反復される値を取得するために使用されます。

なお、この引数なしの関数が呼び出されると、反復可能オブジェクト上のメソッドとして呼び出されます。従って関数の中では、 `this` キーワードを反復可能オブジェクトのプロパティにアクセスするために使用して、反復の間に何を提供するかを決めることができます。

この関数は普通の関数、またはジェネレーター関数にすることができ、そのため呼び出されると、イテレーターオブジェクトが返されます。このジェネレーター関数の中では `yield` を使用してそれぞれの項目を提供することができます。

## イテレータープロトコル

**イテレーター（反復子）プロトコル** (The iterator protocol)
は、値の並び（有限でも無限でも）を生成するための標準的な方法と、すべての値が生成された場合の返値を定義します。

以下の意味で **`next()`** メソッドを実装していれば、オブジェクトはイテレーターになります。

- `next()`
  - : 0 個または 1 個の引数を受け入れ、`IteratorResult` インターフェイス（下記参照）に適合したオブジェクトを返す関数です。組み込み言語機能（`for...of` など）がイテレーターを使用しているときに、オブジェクト以外の値（`false` や `undefined` など）を返した場合、{{jsxref("TypeError")}} (`"iterator.next() returned a non-object value"`) が発生します。

イテレータープロトコルのすべてのメソッド（`next()`、`return()`、`throw()`）は、`IteratorResult` インターフェイスを実装したオブジェクトを返すことが期待されています。このオブジェクトは以下のプロパティを持つ必要があります。

- `done` {{optional_inline}}
  - : イテレーターがシーケンス内の次の値を生成できるとき `false` の値になります。（これは `done` プロパティが指定されていない場合も同じです。）

    イテレーターが反復シーケンスを終了した場合、`true` の値になります。この場合、`value` は任意でイテレーターの返値を指定します。

- `value` {{optional_inline}}
  - : イテレーターによって返される任意の JavaScript 値。`done` が `true` のときは省略することができます。

実際には、どちらのプロパティも厳密には必要ありません。どちらのプロパティも持たないオブジェクトを返した場合、それは事実上 `{ done: false, value: undefined }` と同じです。

イテレーターが `done: true` の結果を返した場合、それ以降に `next()` を呼び出すと、同様に `done: true` を返すことが期待されますが、これは言語レベルでは強制されるものではありません。

`next` メソッドは、メソッド本体が利用できるようになる値を受け取ることができます。組み込みの言語機能では、値を渡すことはありません。[ジェネレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)の `next` メソッドに渡される値は、対応する `yield` 式の値になる。

オプションとして、イテレーターは **`return(value)`** と **`throw(exception)`** メソッドも実装することができます。これらのメソッドは、呼び出されると、呼び出し側がイテレーターの反復処理を終了し、（データベース接続を閉じるなどの）必要なクリーンアップを実行できることをイテレーターに指示します。

- `return(value)` {{optional_inline}}
  - : 0 または 1 つの引数を受け入れ、`IteratorResult` インターフェイスに適合したオブジェクトを返す関数で、通常 `value` は渡された `value` と等しく、`done` は `true` と等しくなります。このメソッドを呼び出すと、呼び出し側がこれ以上 `next()` を呼び出さないことをイテレーターに指示し、任意のクリーンアップ処理を実行することができます。組み込みの言語機能がクリーンアップのために `return()` を呼び出すと、 `value` は常に `undefined` となります。
- `throw(exception)` {{optional_inline}}
  - : 0 個または 1 個の引数を受け入れ、`IteratorResult` インターフェイスに適合したオブジェクトを返す関数であり、通常 `done` は `true` に等しくなります。このメソッドを呼び出すと、呼び出し側がエラー状態を検出したことをイテレーターに指示し、`exception` は通常 {{jsxref("Error")}} インスタンスとなります。言語機能に組み込まれたものではないため、クリーンアップの目的で `throw()` を呼び出すことはできません。これは、`return`/`throw` の対称性のためにジェネレータに特別に用意された機能です。

> [!NOTE]
> 特定のオブジェクトがイテレータープロトコルを実装しているかどうかを反射的に（つまり、実際に `next()` を呼び出して、返された結果を検証することなく）知ることは不可能です。

イテレーターはとても簡単に反復可能オブジェクトにすることができます。`[Symbol.iterator]()` メソッドを実装して `this` を返すだけです。

```js
// イテレーターと反復可能の両プロトコルを満たす
const myIterator = {
  next() {
    // ...
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

このようなオブジェクトは**反復可能イテレーター**と呼ばれます。このように実装することで、反復可能オブジェクトを期待する様々な構文でイテレーターが利用できるようになります。したがって、反復可能プロトコルを実装せずにイテレータープロトコルを実装することは、ほとんど有益ではありません。（実際、ほとんどすべての構文と API はイテレーターではなく反復可能を期待しています。）[ジェネレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)がその例です。

```js
const aGeneratorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof aGeneratorObject.next);
// "function" — （正しい結果を返す）next メソッドを持っているのでイテレーター

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function" — （正しいイテレーターを返す）[Symbol.iterator] メソッドを持っているので反復可能オブジェクト

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — Symbol.iterator メソッドは自分自身（イテレーター）を返すので、反復可能なイテレーター
```

組み込みのイテレーターはすべて {{jsxref("Iterator", "Iterator.prototype")}} を継承しており、 `[Symbol.iterator]()` メソッドは `this` を返すものとして実装されているので、組み込みイテレーターも反復可能なものとなっています。

しかし、可能であれば `iterable[Symbol.iterator]` が [`Set.prototype[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) が行うように、常に先頭から始まる別のイテレーターを返すほうが良いでしょう。

## 非同期イテレーターと非同期反復可能プロトコル

非同期の反復処理に用いるプロトコルには、**非同期イテレーター**と**非同期反復可能オブジェクト**という名前の別の組があります。これらは反復可能オブジェクトとイテレータープロトコルに比べて非常によく似たインターフェイスを持っていますが、イテレーターメソッドの呼び出しからの返値がそれぞれプロミスでラップされている点が異なります。

オブジェクトが非同期イテレータープロトコルを実装するのは、以下のメソッドを実装している場合です。

- [`[Symbol.asyncIterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : 非同期イテレータープロトコルに準拠し、オブジェクトを返す引数ゼロの関数です。

オブジェクトが非同期イテレータープロトコルを実装するのは、以下のメソッドを実装している場合です。

- `next()`
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `IteratorResult` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。
- `return(value)` {{optional_inline}}
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `IteratorResult` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。
- `throw(exception)` {{optional_inline}}
  - : 0 個または 1 個の引数を受け入れ、プロミスを返す関数です。プロミスは `IteratorResult` インターフェイスに準拠したオブジェクトに履行され、プロパティは同期イテレーターのものと同じ意味づけを持ちます。

## 言語と反復処理プロトコルの対話

この言語では、反復可能オブジェクトとイテレーターを生成または使用する API を規定しています。

### 組み込み反復可能オブジェクト

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、[`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) （[`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) で返される）は、すべて組み込み反復可能オブジェクトです。それらの `prototype` オブジェクトはそれぞれ `[Symbol.iterator]()` メソッドを実装しています。また、[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトや {{domxref("NodeList")}} などの一部の DOM コレクション型も反復可能です。
JavaScript のコア言語には、非同期反復可能オブジェクトはありません。{{domxref("ReadableStream")}} などの一部のウェブ API は、`Symbol.asyncIterator` メソッドが既定で設定されています。

[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)は、反復可能なイテレーターである[ジェネレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)を返します。[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)は、非同期反復可能なイテレーターである[非同期 ジェネレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)を返します。

組み込み反復可能オブジェクトから返されるイテレーターは、実際にはすべて共通のクラス {{jsxref("Iterator")}} を継承しており、前述の `[Symbol.iterator]() { return this; }` メソッドを実装しているので、すべて反復可能イテレーターとなっています。 `Iterator` クラスは、イテレータープロトコルが要求する `next()` メソッドに加えて、追加の[ヘルパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods)も提供しています。イテレーターのプロトタイプチェーンは、グラフィカルコンソールにログ出力することで検査することができます。

```plain
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> 配列のイテレーターに共通するプロトタイプ
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> すべての組み込みイテレーターに共通するプロトタイプ
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> これは Object.prototype
```

### 反復可能オブジェクトを受け入れる組み込み API

反復可能オブジェクトを受け入れる API はたくさんあります。以下はその例です。

- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
- {{jsxref("Set/Set", "Set()")}}
- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.race()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}

```js
const myObj = {};

new WeakSet(
  (function* () {
    yield {};
    yield myObj;
    yield {};
  })(),
).has(myObj); // true
```

### 反復可能オブジェクトを期待する構文

一部の文や式は反復可能オブジェクトを期待します。例えば、 {{jsxref("Statements/for...of", "for...of")}} ループ、[配列と引数のスプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、{{jsxref("Operators/yield*", "yield*")}}、[配列の構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)などです。

```js
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

組み込み API がイテレーターを反復処理していて、最後の結果の `done` が `false` （イテレーターがさらに値を生成できる状態）だが、それ以上の値は必要ない場合、`return` メソッドが存在すれば、それが呼び出されますこれは例えば、`for...of` ループの中で `break` や `return` に遭遇した場合や、配列の構造分解ですべての識別子が既に結合されている場合などに発生します。

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Returning", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Closing");
        return { done: true };
      },
    };
  },
};

const [a] = obj;
// Returning 1
// Closing

const [b, c, d] = obj;
// Returning 1
// Returning 2
// Returning 3
// Already reached the end (the last call returned `done: true`),
// so `return` is not called
console.log([b, c, d]); // [1, 2, undefined]; the value associated with `done: true` is not reachable

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

非同期反復可能オブジェクトと対話する唯一の方法は、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループと、[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)での [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*)（ただし[同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)ではありません）です。非同期反復可能オブジェクトであるが、同期反復可能ではない（つまり `[Symbol.asyncIterator]()` はあるが `[Symbol.iterator]()` はない）ものに `for...of` や配列の展開などを使用すると、 TypeError: x is not iterable 例外が発生します。

## エラー処理

反復処理では、イテレーターとコンシューマーの間で制御が移譲されるため、エラー処理はどちらの方向にも現れます。つまり、コンシューマーがイテレーターから発生したエラーを処理する方法と、イテレーターがコンシューマーから発生したエラーを処理する方法です。組み込みの反復処理の方法を使用して、反復可能オブジェクトが特定の不変条件を破ったためにエラーが発生する場合もあります。 組み込み構文がエラーを生成し、処理する方法を説明します。これは、イテレーターを段階的に手動で処理する場合に、自分自身でコードを作成する際のガイドラインとして使用することができます。

### 非正規形反復可能オブジェクト

反復可能オブジェクトからイテレーターを取得する際にエラーが現れる可能性があります。ここで要求される言語の不変条件は、反復可能オブジェクトは有効なイテレーターを生成しなければならないということです。

- 呼び出し可能な `[Symbol.iterator]()` メソッドを持っていること。
- `[Symbol.iterator]()` メソッドがオブジェクトを返すこと。
- `[Symbol.iterator]()` から返されるオブジェクトに呼び出し可能な `next()` メソッドがあること。

組み込み構文を使用して、正しく形成されていない反復可能オブジェクトの反復処理を開始すると、 TypeError が発生します。

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable is not iterable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError: nonWellFormedIterable[Symbol.iterator]().next is not a function
```

非同期反復可能オブジェクトの場合、 `[Symbol.asyncIterator]()` プロパティの値が `undefined` または `null` である場合、 JavaScript は代わりに `[Symbol.iterator]` プロパティを使用します（そして、メソッドを[転送](#転送)することで、結果として得られるイテレーターを非同期イテレーターにラップします）。 それ以外の場合は、 `[Symbol.asyncIterator]` プロパティも上記不変条件に適合する必要があります。

この種類のエラーは、反復処理を試みる前に最初の反復可能オブジェクトを検証することで防ぐことができます。しかし、通常は反復処理するオブジェクトの型がわかっているため、このようなエラーは発生することはほとんどありません。もし、他にもコードから反復可能オブジェクトを受け取っている場合は、不正な入力が指定されたことを呼び出し側に知らせるために、エラーを呼び出し側に伝播させるべきです。

### 反復処理中のエラー

ほとんどのエラーは、イテレーターの進行（`next()` の呼び出し）で発生します。ここで強制される言語の不変条件は、 `next()` メソッドはオブジェクト（非同期イテレーターの場合は、待機後のオブジェクト）を返さなければならないということです。そうでない場合は、 TypeError が発生します。

不変条件が破られた場合、または `next()` メソッドでエラーが発生した場合（非同期イテレーターの場合は、拒否されたプロミスを返す場合もあります）、エラーは呼び出し側に伝播されます。組み込みの構文の場合、進行中の反復処理は再試行やクリーンアップなしで中止されます（`next()` メソッドがエラーを発生させた場合、すでにクリーンアップが完了しているという前提で）。手動で `next()` を呼んでいる場合は、エラーを捕捉して `next()` の呼び出しを再試行することができますが、一般的にはイテレーターはすでに閉じられたと想定すべきです。

呼び出し側が、前の段落で述べたエラー以外の理由で反復処理を終了する場合、例えば自身のコードでエラー状態になった場合（例えば、イテレーターによって生成された不正な値を処理している場合など）、イテレーターに `return()` メソッドが存在する場合は、そのメソッドを呼び出す必要があります。これにより、イテレーターがクリーンアップ処理を実行できるようになります。 `return()` メソッドは、早期終了の場合のみに呼び出されます。 `next()` が `done: true` を返した場合、イテレーターがすでにクリーンアップ済みであるという前提のもと、 `return()` メソッドは呼び出されません。

`return()` メソッドも不正になる可能性があります。言語では、 `return()` メソッドはオブジェクトを返さなければならず、そうでない場合は TypeError が発生します。 `return()` メソッドでエラーが発生した場合、そのエラーは呼び出し側に伝播します。 ただし、呼び出し側が自分自身でコードにエラーが発生したために `return()` メソッドが呼ばれた場合、このエラーは `return()` メソッドが発生したエラーを上書きします。

通常、呼び出し側では、エラー処理を次のように実装します。

```js
try {
  for (const value of iterable) {
    // ...
  }
} catch (e) {
  // Handle the error
}
```

`catch` は、`iterable` が有効な反復可能オブジェクトでない場合、`next()` がエラーを発生した場合、`return()` がエラーを発生した場合（`for` ループが早期に終了した場合）、および `for` ループ本体でエラーが発生した場合に発生するエラーを捕捉することができます。

ほとんどのイテレーターはジェネレーター関数で実装されているため、ジェネレーター関数が通常どのようにエラーを処理するのかを紹介します。

```js
function* gen() {
  try {
    yield doSomething();
    yield doSomethingElse();
  } finally {
    cleanup();
  }
}
```

ここで `catch` が存在しないため、`doSomething()` または `doSomethingElse()` で発生したエラーが `gen` の呼び出し側に伝播してしまいます。 これらのエラーがジェネレーター関数内で捕捉される場合（同様に推奨されます）、ジェネレーター関数は値の生成を続けるか、または早期に終了するかを決定することができます。 しかし、リソースを開いたままにするジェネレーターでは、 `finally` ブロックが必要です。 `finally` ブロックは、最後の `next()` が呼び出されるか、 `return()` が呼び出されるかのいずれかのタイミングで実行することが保証されています。

### エラーの転送

組み込みの構文の中には、イテレーターを別のイテレーターでラップするものがあります。これには、 {{jsxref("Iterator.from()")}} で生成されたイテレーター、[イテレーターヘルパーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator#イテレーターヘルパーメソッド) (`map()`, `filter()`, `take()`, `drop()`, `flatMap()`)、[`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*)、および同期イテレーターで非同期反復処理 (`for await...of`, `Array.fromAsync`) を使用する場合の隠しラッパーがあります。ラップされたイテレーターは、内部イテレーターと呼び出し側の間でエラーを転送する役割を担います。

- すべてのラッパーイテレーターは、内部イテレーターの `next()` メソッドを、その返値と発生したエラーを含めて直接転送します。
- ラッパーイテレーターは通常、内部イテレーターの `return()` メソッドを直接転送します。内部イテレーターに `return()` メソッドが存在しない場合は、代わりに `{ done: true, value: undefined }` を返します。イテレーターヘルパーの場合で、イテレーターヘルパーの `next()` メソッドがまだ一度も呼び出されていない場合、内部イテレーターの `return()` を呼び出そうとした後、現在のイテレーターは常に `{ done: true, value: undefined }` を返します。これは、まだ `yield*` 式が実行されていないジェネレーター関数と同じです。
- `yield*` は、内側のイテレーターの `throw()` メソッドを転送する唯一の組み込み構文です。 [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*) が `return()` および `throw()` メソッドを転送する方法に関する情報は、自分自身で参照してください。

## 例

### ユーザー定義の反復可能オブジェクト

次のようにして、独自の反復可能オブジェクトを作ることができます。

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### 基本的なイテレーター

イテレーターはもともとステートフルなものです。[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)として定義していない場合（上の例が示すように）、クロージャで状態をカプセル化したいと思うことでしょう。

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### 無限のイテレーター

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### ジェネレーターで反復可能プロトコルを定義

```js
function* makeGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// ...
```

### クラスで反復可能プロトコルを定義

状態のカプセル化は、[プライベートフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)でも行うことができます。

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // それぞれのイテレーターに新しいインデックスを使用します。これにより
    // break の使用や同じ反復可能オブジェクトに対する入れ子ループなど、自明でない用途で、
    // 反復可能オブジェクトに対する複数の反復処理を安全に行うことができます。
    let index = 0;

    return {
      // 注: アロー関数を使用すると、`next()` の代わりに `[Symbol.iterator]()` の方を `this` が指すようになります。
      next: () => {
        if (index < this.#data.length) {
          return { value: this.#data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### 組み込み反復可能オブジェクトのオーバーライド

例えば、{{jsxref("String")}} は、組み込みのイテレーターオブジェクトです。

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String` の[既定のイテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)は、文字列のコードポイントを 1 つずつ返します。

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

自分自身で `[Symbol.iterator]()` を用意することで、反復処理の動作を再定義することができます。

```js
// 自動ボックス化を避けるため、文字列オブジェクトを明示的に構築する必要があります。
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element (the string "bye")
    next() {
      return this._first
        ? { value: "bye", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

`[Symbol.iterator]()` の再定義が、反復処理を使用する組み込みの構成要素の動作にどのような影響を与えるかに注目してください。

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

### 反復処理時の同時進行の変更

ほとんどすべての反復可能オブジェクトは、同じ基本的な意味を持っています。反復処理が開始された時点でデータがコピーされることはなく、ポインターが保持され、それが移動します。そのため、集合を反復処理しながらその集合内の要素を追加、削除、または変更すると、集合内の他にも変更されていない要素が訪問されるかどうかを、うっかり変更してしまう可能性があります。これは[反復可能な配列メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#反復処理内での初期配列の変更)の動きととてもよく似ています。

{{domxref("URLSearchParams")}} を使用した次のようなケースがあったとします。

```js
const searchParams = new URLSearchParams(
  "deleteme1=value1&key2=value2&key3=value3",
);

// Delete unwanted keys
for (const [key, value] of searchParams) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    searchParams.delete(key);
  }
}

// 出力:
// deleteme1
// key3
```

`key2` がまったくログに記録されていないことに注意してください。これは、`URLSearchParams` が根底ではキーと値の組のリストであるためです。 `deleteme1` が処理され削除されると、他の項目がすべて左に 1 つずつ移動し、 `key2` が `deleteme1` が以前にあった位置を占めることになり、ポインターが次のキーに移動すると、 `key3` に移動します。

反復処理可能なオブジェクトの実装では、残りの値をシフトしないように「墓石」値を設定することで、この問題を避けることができます。 `Map` を使用する類似のコードを考えてみましょう。

```js
const myMap = new Map([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myMap.delete(key);
  }
}

// 出力:
// deleteme1
// key2
// key3
```

すべてのキーをログ出力していることに注意してください。これは、`Map` がキーを削除した際に残りのキーをシフトしないためです。同様の実装を行いたい場合、以下のような形になるでしょう。

```js
const tombstone = Symbol("tombstone");

class MyIterable {
  #data;
  constructor(data) {
    this.#data = data;
  }
  delete(deletedKey) {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i][0] === deletedKey) {
        this.#data[i] = tombstone;
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i] !== tombstone) {
        yield this.#data[i];
      }
    }
  }
}

const myIterable = new MyIterable([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
for (const [key, value] of myIterable) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myIterable.delete(key);
  }
}
```

> [!WARNING]
> 一般的に、同時進行の変更はバグが発生しやすく、混乱を招きやすいものです。反復可能オブジェクトがどのように実装されているかを正確に把握していない限り、その集合を反復処理している間は変更しない方が良いでしょう。

## 仕様書

{{Specifications}}

## 関連情報

- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
