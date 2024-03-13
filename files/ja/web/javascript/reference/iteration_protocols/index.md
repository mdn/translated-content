---
title: 反復処理プロトコル
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: 144332479d3f90d12008866bc91df77da62451c2
---

{{jsSidebar("More")}}

**反復処理プロトコル**は、新しい組み込みオブジェクトや構文ではなく**プロトコル**です。これらのプロトコルは以下のような単純な約束事によって、すべてのオブジェクトで実装することができます。

プロトコルは 2 つあります。[反復可能プロトコル](#反復可能プロトコル)と[イテレータープロトコル](#イテレータープロトコル)です。

## 反復可能プロトコル

**反復可能プロトコル** (The iterable protocol) によって、 JavaScript のオブジェクトは反復動作を定義またはカスタマイズすることができます。例えば、 {{jsxref("Statements/for...of", "for...of")}} 構造の中でどの値がループに使われるかです。一部の組み込み型は既定の反復動作を持つ[組み込み反復可能オブジェクト](#組み込み反復可能オブジェクト)で、これには {{jsxref("Array")}} や {{jsxref("Map")}} がありますが、他の型 ({{jsxref("Object")}} など) はそうではありません。

**反復可能**であるために、オブジェクトは **`@@iterator`** メソッドを実装する必要があります。これはつまり、オブジェクト（または、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)上のオブジェクトの一つ）が {{jsxref("Symbol.iterator")}} 定数にて利用できる `@@iterator` キーのプロパティを持つ必要があります。

- `[Symbol.iterator]`
  - : [イテレータープロトコル](#イテレータープロトコル)に準拠するオブジェクトを返す、引数なしの関数。

（{{jsxref("Statements/for...of", "for...of")}} ループの始まりのように）オブジェクトが反復される必要があるときはいつでも、その `@@iterator` メソッドが引数なしで呼ばれます。そして、返される**イテレーター**は、反復される値を取得するために使用されます。

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
  - : 0 または 1 つの引数を受け入れ、`IteratorResult` インターフェイスに適合したオブジェクトを返す関数で、通常 `value` は渡された `value` と等しく、`done` は `true` と等しくなります。このメソッドを呼び出すと、呼び出し側がこれ以上 `next()` を呼び出さないことをイテレーターに指示し、任意のクリーンアップ処理を実行することができます。
- `throw(exception)` {{optional_inline}}
  - : 0 個または 1 個の引数を受け入れ、`IteratorResult` インターフェースに適合したオブジェクトを返す関数であり、通常 `done` は `true` に等しくなります。このメソッドを呼び出すと、呼び出し側がエラー状態を検出したことをイテレーターに指示し、`exception` は通常 {{jsxref("Error")}} インスタンスとなります。

> **メモ:** 特定のオブジェクトがイテレータープロトコルを実装しているかどうかを反射的に（つまり、実際に `next()` を呼び出して、返された結果を検証することなく）知ることは不可能です。

イテレーターはとても簡単に反復可能オブジェクトにすることができます。`[@@iterator]()` メソッドを実装して `this` を返すだけです。

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
// "function" — （正しいイテレーターを返す）@@iterator メソッドを持っているので反復可能オブジェクト

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true — @@iterator メソッドは自分自身（イテレータ）を返すので、反復可能なイテレーター
```

組み込みのイテレーターはすべて {{jsxref("Iterator", "Iterator.prototype")}} を継承しており、 `[@@iterator]()` メソッドは `this` を返すものとして実装されているので、組み込みイテレーターも反復可能なものとなっています。

しかし、可能であれば `iterable[Symbol.iterator]` が [`Set.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) が行うように、常に先頭から始まる別のイテレーターを返すほうが良いでしょう。

## 非同期イテレーターと非同期反復可能プロトコル

非同期の反復処理に用いるプロトコルには、**非同期イテレーター**と**非同期反復可能オブジェクト**という名前の別の組があります。これらは反復可能オブジェクトとイテレータープロトコルに比べて非常によく似たインターフェイスを持っていますが、イテレーターメソッドの呼び出しからの返値がそれぞれプロミスでラップされている点が異なります。

オブジェクトが非同期イテレータープロトコルを実装するのは、以下のメソッドを実装している場合です。

- [`[Symbol.asyncIterator]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
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

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、[`Segments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) （[`Intl.Segmenter.prototype.segment()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) で返される）は、すべて組み込み反復可能オブジェクトです。それらの `prototype` オブジェクトはそれぞれ `@@iterator` メソッドを実装しています。また、[`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトや {{domxref("NodeList")}} などの一部の DOM コレクション型も反復可能です。
[`ReadableStream`](/ja/docs/Web/API/ReadableStream)は、執筆時点では唯一の組み込み非同期反復可能オブジェクトです。

[ジェネレータ関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)は、反復可能なイテレーターである[ジェネレータオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)を返します。[非同期ジェネレータ関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)は、非同期反復可能なイテレータである[非同期 ジェネレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)を返します。

組み込み反復可能オブジェクトから返されるイテレーターは、実際にはすべて共通のクラス {{jsxref("Iterator")}} （現在は未公開）を継承しており、前述の `[Symbol.iterator]() { return this; }` メソッドを実装しているので、すべて反復可能イテレーターとなっています。将来的には、これらの組み込みイテレーターは、イテレータープロトコルが要求する `next()` メソッドに加えて、追加の[ヘルパーメソッド](https://github.com/tc39/proposal-iterator-helpers)を持つことができます。イテレーターのプロトタイプチェーンは、グラフィカルコンソールにログ出力することで検査することができます。

```
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

一部の文や式は反復可能オブジェクトを期待します。例えば、 {{jsxref("Statements/for...of", "for...of")}} ループ、[配列と引数のスプレッド](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、{{jsxref("Operators/yield*", "yield*")}}、[配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)などです。

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

組み込み API がイテレーターを反復処理していて、最後の結果の `done` が `false` （イテレーターがさらに値を生成できる状態）だが、それ以上の値は必要ない場合、`return` メソッドが存在すれば、それが呼び出されますこれは例えば、`for...of` ループの中で `break` や `return` に遭遇した場合や、配列の分割代入ですべての識別子が既に結合されている場合などに発生します。

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

const [b] = obj;
// Returning 1
// Closing

const [a, b, c] = obj;
// Returning 1
// Returning 2
// Returning 3
// Already reached the end (the last call returned `done: true`),
// so `return` is not called

for (const b of obj) {
  break;
}
// Returning 1
// Closing
```

非同期反復可能オブジェクトと対話する唯一の方法は、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループと、[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)での [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*)（ただし[同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)ではありません）です。非同期反復可能オブジェクトであるが、同期反復可能ではない（つまり `[@@asyncIterator]()` はあるが `[@@iterator]()` はない）ものに `for...of` や配列の展開などを使用すると、TypeError: x is not iterable 例外が発生します。

### 非正規形反復可能オブジェクト

反復可能オブジェクトの `@@iterator` メソッドがイテレーターオブジェクトを返さない場合、それは**非正規形**反復可能オブジェクトと見なされます。

これを使用すると、ランタイムエラーやバグの挙動をもたらす可能性があります。

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

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

### 単純なイテレーター

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
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(["yo", "ya"]);

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

状態のカプセル化は、[プライベートプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields)でも行うことができます。

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
      // 注: アロー関数を使用すると、`next()` の代わりに `[@@iterator]()` の方を `this` が指すようになります。
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

`String` の[既定のイテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)は、文字列のコードポイントを 1 つずつ返します。

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

自分自身で `@@iterator` を用意することで、反復処理の動作を再定義することができます。

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

`@@iterator` の再定義が、反復処理を使用する組み込みの構成要素の動作にどのような影響を与えるかに注目してください。

```js
console.log([...someString]); // ["bye"]
console.log(`${someString}`); // "hi"
```

## 仕様書

{{Specifications}}

## 関連情報

- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Symbol.iterator")}}
- {{jsxref("Iterator")}}
