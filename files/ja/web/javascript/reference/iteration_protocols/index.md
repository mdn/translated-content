---
title: 反復処理プロトコル
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - ガイド
  - 中級者
  - 反復可能
  - 反復子
  - JavaScript
  - プロトコル
translation_of: Web/JavaScript/Reference/Iteration_protocols
---
{{jsSidebar("More")}}

ECMAScript 2015 で追加されたいくつかの機能の中で、**反復処理プロトコル**は新しい組み込みオブジェクトや構文ではなく**プロトコル**です。これらのプロトコルは以下のような単純な約束事によって、すべてのオブジェクトで実装することができます。

プロトコルは 2 つあります。[反復可能プロトコル](#反復可能_iterable_プロトコル)と[反復子プロトコル](#反復子_iterator_プロトコル)です。

## 反復可能 (iterable) プロトコル

**反復可能プロトコル**によって、 JavaScript のオブジェクトは反復動作を定義またはカスタマイズすることができます。例えば、 {{jsxref("Statements/for...of", "for...of")}} 構造の中でどの値がループに使われるかです。一部の組み込み型は既定の反復動作を持つ[組み込み反復可能オブジェクト](#組み込み反復可能オブジェクト)で、これには {{jsxref("Array")}} や {{jsxref("Map")}} がありますが、他の型 ({{jsxref("Object")}} など) はそうではありません。

**反復可能**であるために、オブジェクトは **`@@iterator`** メソッドを実装する必要があります。これはつまり、オブジェクト（または、[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)上のオブジェクトの一つ）が {{jsxref("Symbol.iterator")}} 定数にて利用できる `@@iterator` キーのプロパティを持つ必要があります。

| プロパティ            | 値                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | [反復子プロトコル](#反復子_iterator_プロトコル)に準拠するオブジェクトを返す、引数なしの関数。 |

({{jsxref("Statements/for...of", "for...of")}} ループの始まりのように) オブジェクトが反復される必要があるときはいつでも、その `@@iterator` メソッドが引数なしで呼ばれます。そして、返される**反復子**は、反復される値を取得するために使用されます。

なお、この引数なしの関数が呼び出されると、反復可能オブジェクト上のメソッドとして呼び出されます。従って関数の中では、 `this` キーワードを反復可能オブジェクトのプロパティにアクセスするために使用して、反復の間に何を提供するかを決めることができます。

この関数は普通の関数、またはジェネレーター関数にすることができ、そのため呼び出されると、反復子オブジェクトが返されます。このジェネレーター関数の中では `yield` を使用してそれぞれの項目を提供することができます。

## 反復子 (iterator) プロトコル

**反復子プロトコル**は、値の並び（有限でも無限でも）を生成するための標準的な方法と、すべての値が生成された場合の返値を定義します。

以下の意味で **`next()`** メソッドを実装していれば、オブジェクトは反復子になります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">プロパティ</th>
      <th scope="col">値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>next()</code></td>
      <td>
        <p>
          引数が 0 個または 1 個の関数で、少なくとも以下の 2 つのプロパティを持つオブジェクトを返します。 <code>next()</code> メソッドが1つの引数で呼び出された場合、その引数は呼び出された <code>next()</code> メソッドで利用可能です。
        </p>
        <dl>
          <dt><code>done</code> (boolean)</dt>
          <dd>
            <p>
              反復子がシーケンス内の次の値を生成できるとき <code>false</code> の値になります。 (これは <code>done</code> プロパティが指定されていない場合も同じです。)
            </p>
            <p>
              反復子が反復シーケンスを終了した場合、 <code>true</code> の値になります。この場合、 <code>value</code> は任意で反復子の返値を指定します。
            </p>
          </dd>
          <dt><code>value</code></dt>
          <dd>
            反復子によって返される任意の JavaScript 値。 <code>done</code> が <code>true</code> のときは省略することができます。
          </dd>
        </dl>
        <p>
          <code>next()</code> メソッドは常に <code>done</code> や <code>value</code> などの適切なプロパティを持つオブジェクトを返します。オブジェクトでない値が返された場合 (例えば <code>false</code> や <code>undefined</code>)、 {{jsxref("TypeError")}} (<code>"iterator.next() returned a non-object value"</code>) が発生します。
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** 特定のオブジェクトが反復子プロトコルを実装しているかどうかを反射的に知ることはできません。しかし、反復子プロトコルと反復可能プロトコルの**両方**を満たすオブジェクトを作成するのは簡単です（以下の例のように）。
>
>そうすることで、反復可能オブジェクトを期待するさまざまな構文で反復子を使用できます。したがって、反復子プロトコルを実装するには反復可能プロトコルも実装しないと、ほとんど役に立ちません。
>
> ```js
> // 反復子と反復可能の両プロトコルを満たす
> const myIterator = {
>     next: function() {
>         // ...
>     },
>     [Symbol.iterator]: function() { return this; }
> };
> ```
>
> しかし、可能であれば `iterable[Symbol.iterator]` は [`Set.prototype[@@iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator) のように、常に先頭から始まる異なる反復子を返した方がよいでしょう。

## 反復処理プロトコルの使用例

{{jsxref("String")}} は組み込み反復可能オブジェクトの一例です。

```js
const someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"
```

`String` の{{jsxref("String/@@iterator", "既定の反復子", "", 1)}}は文字列のコードポイントを 1 つずつ返します。

```js
const iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

一部の組み込みコンストラクター — 例えば{{jsxref("Operators/Spread_syntax", "スプレッド構文", "", 1)}} — は、まったく同じ反復処理プロトコルを使用しています。

```js
console.log([...someString]); // ["h", "i"]
```

自身の `@@iterator` を提供することによって反復動作を再定義できます。

```js
// オートボックスを避けるために、明示的に String オブジェクトを構築する必要があります。
const someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    // これは反復子オブジェクトであり、単一の要素 (文字列 "bye") を返します。
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
```

`@@iterator` を再定義することによって、反復処理プロトコルを使用する組み込みコンストラクターの動作にどれほど影響を与えるか注意してください。

```js
console.log([...someString]); // ["bye"]
console.log(someString + ''); // "hi"
```

## 反復可能プロトコルの例

### 組み込み反復可能オブジェクト

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} は、すべての組み込み反復可能オブジェクトです。というのも、それらすべてのプロトタイプオブジェクトは `@@iterator` メソッドをもつからです。

### ユーザー定義の反復可能オブジェクト

下記のように反復可能オブジェクトを生成できます。

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable]); // [1, 2, 3]
```

### 反復可能オブジェクトを受け入れる組み込み API

反復可能オブジェクトを受け入れる API はたくさんあります。以下はその例です。

- {{jsxref("Map", "new Map([<var>iterable</var>])")}}
- {{jsxref("WeakMap", "new WeakMap([<var>iterable</var>])")}}
- {{jsxref("Set", "new Set([<var>iterable</var>])")}}
- {{jsxref("WeakSet", "new WeakSet([<var>iterable</var>])")}}

```js
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2); // "b"

const myObj = {};

new WeakMap([
    [{}, 'a'],
    [myObj, 'b'],
    [{}, 'c']
]).get(myObj);             // "b"

new Set([1, 2, 3]).has(3); // true
new Set('123').has('2');   // true

new WeakSet(function* () {
    yield {}
    yield myObj
    yield {}
}()).has(myObj);           // true
```

#### 関連情報

- {{jsxref("Promise.all()", "Promise.all(<var>iterable</var>)")}}
- {{jsxref("Promise.race()", "Promise.race(<var>iterable</var>)")}}
- {{jsxref("Array.from()", "Array.from(<var>iterable</var>)")}}

### 反復可能オブジェクトを期待する構文

いくつかの文や式は反復可能オブジェクトを期待します。例えば、 {{jsxref("Statements/for...of", "for...of")}} ループ、{{jsxref("Operators/Spread_syntax", "スプレッド演算子", "", "1")}}、{{jsxref("Operators/yield*", "yield*")}}、{{jsxref("Operators/Destructuring_assignment", "分割代入", "", "1")}} などです。

```js
for (const value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"

console.log([...'abc']);   // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(['a', 'b', 'c']);
console.log(a);            // "a"
```

### 非正規形反復可能オブジェクト

反復可能オブジェクトの `@@iterator` メソッドが反復子オブジェクトを返さない場合、それは**非正規形**反復可能オブジェクトと見なされます。

これを使用すると、ランタイムエラーやバグの挙動をもたらす可能性があります。

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [] is not a function
```

## 反復子の例

### 簡単な反復子

```js
function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function() {
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

const it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

### 無限の反復子

```js
function idMaker() {
  let index = 0;
  return {
    next: function() {
      return {
        value: index++,
        done: false
      };
    }
  };
}

const it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### ジェネレーターで

```js
function* makeSimpleGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker()

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

<h3 id="With_ES2015_class" name="With_ES2015_class">ES2015 クラスで</h3>

```js
class SimpleClass {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    // 各反復子に新しいインデックスを使用します。これにより、 break を使用したり
    // 同じ反復可能オブジェクトに対する入れ子ループのような自明でない場合に、
    // 反復可能オブジェクトに対する複数の反復処理を安全に行うことができます。
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return {value: this.data[index++], done: false}
        } else {
          return {done: true}
        }
      }
    }
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val); // '1' '2' '3' '4' '5'
}
```

## ジェネレーターは反復子か反復可能か

{{jsxref("Generator", "ジェネレーターオブジェクト", "", 1)}} は、反復子でも反復可能でもあります。

```js
const aGeneratorObject = function* () {
  yield 1;
  yield 2;
  yield 3;
}();

console.log(typeof aGeneratorObject.next);
// "function", because it has a next method, so it's an iterator

console.log(typeof aGeneratorObject[Symbol.iterator]);
// "function", because it has an @@iterator method, so it's an iterable

console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject);
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable

console.log([...aGeneratorObject]);
// [1, 2, 3]

console.log(Symbol.iterator in aGeneratorObject)
// true, because @@iterator method is a property of aGeneratorObject
```

## 関連情報

- {{jsxref("Statements/function*", "<code>function*</code> のドキュメント", "", 1)}}
- [Iteration in the ECMAScript specification](https://tc39.es/ecma262/#sec-iteration)
