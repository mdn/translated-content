---
title: イテレーターとジェネレーター
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}

コレクション内の各アイテムに対する処理は非常に一般的な操作です。JavaScript では簡単な {{jsxref("Statements/for","for")}} ループから {{jsxref("Global_Objects/Array/map","map()")}}、{{jsxref("Global_Objects/Array/filter","filter()")}} にいたるまで、コレクションに対する反復処理の複数の方法を提供します。

イテレーターとジェネレーターは、コア言語の内部に反復処理が直接的に取り入れられており、{{jsxref("Statements/for...of","for...of")}} ループの動作を簡単にカスタマイズできる仕組みをもたらします。

詳細についてはこちらもご覧ください:

- [Iteration protocols](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} と {{jsxref("Generator","ジェネレーター","","true")}}
- {{jsxref("Operators/yield","yield")}} と {{jsxref("Operators/yield*","yield*")}}

## イテレーター

JavaScript では、**イテレーター**はシーケンスおよび潜在的には終了時の戻り値を定義するオブジェクトです。

より具体的に言うと、イテレーターは、次の 2 つのプロパティを持つオブジェクトを返す `next()` メソッドを持つことによってイテレータープロトコルを実装するオブジェクトです。

- `value`
  - : 反復シーケンスの次の値
- `done`
  - : シーケンスの最後の値が既に消費されている場合に `true` となります。`done` と並んで `value` が存在する場合、それがイテレーターの戻り値となります。

イテレーターオブジェクトが作成されると、`next()` を繰り返し呼び出すことによって、明示的に反復することができます。イテレーターを反復することを、イテレーターを消費すると言います。一般的に 1 回しか実行できないためです。終了値が返された後、さらに `next()` を呼び出しても、単に `{done: true}` を返し続けます。

Javascript で最も一般的なイテレーターは配列イテレーターで、配列の各値を順番に返します。

すべてのイテレーターを配列として表現できるとは想像するのは容易ですが、これは真実ではありません。配列は完全に割り当てなければなりませんが、イテレーターは必要なだけで消費されるため、0 から Infinity までの整数の範囲など、無限のサイズのシーケンスを表現できます。

ここでは、それを行うことができる例を示します。`start` (包括) から `end` (排他) までの一連の整数を定義する単純な範囲のイテレーターの作成を可能にします。最終的な戻り値は、作成したシーケンスのサイズあり、変数 `iterationCount` で追跡されます。

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
```

このイテレーターを使えば、次のようになります:

```js
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
```

> **メモ:** 特定のオブジェクトがイテレーターであるかどうかは考えても知ることはできません。それが必要な場合は、[反復可能オブジェクト](#Iterables)を使用してください。

## ジェネレーター関数

カスタムイテレーターは便利なツールですが、その作成には内部状態を明示的に維持する必要があるため、慎重なプログラミングが必要です。ジェネレーター関数は強力な代替手段を提供します。実行が連続していない単一の関数を記述することによって反復アルゴリズムを定義できます。ジェネレーター関数は、{{jsxref("Statements/function*","function*")}} 構文を使用して記述されます。

最初に呼び出されると、ジェネレーター関数はコードを実行せず、ジェネレーターと呼ばれるある種のイテレーターを返します。ジェネレーターの **next** メソッドを呼び出すことによって値が消費されると、ジェネレーター関数は **yield** キーワードを検出するまで実行します。

この関数は、必要な回数だけ呼び出すことができ、毎回新しいジェネレーターを返しますが、各ジェネレーターは 1 回のみ反復することができます。

上の例に適用してみましょう。このコードの動作は同じですが、実装は書くのも読むのもはるかに容易になります。

```js
function* makeRangeIterator(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
```

## 反復可能オブジェクト

オブジェクトは、{{jsxref("Statements/for...of", "for...of")}} 構文でループされる値など反復動作を定義する場合、**反復可能オブジェクト**です。{{jsxref("Array")}} や {{jsxref("Map")}} のような組み込み型の中にはデフォルトの反復動作を持つものがありますが、他の型 ({{jsxref("Object")}} など) は持っていません。

**反復可能オブジェクト**にするには、オブジェクトは **@@iterator** メソッドを実装する必要があります。つまり、オブジェクト (またはプロトタイプチェーン上のオブジェクトのうちの 1 つ) に {{jsxref("Symbol.iterator")}} キーを持つプロパティが必要です 。

反復可能オブジェクトは 1 回だけでも 2 回以上でも反復することができます。どちらが当てはまるかは、プログラマに任されています。

一度しか反復することができない反復可能オブジェクト (例えば、ジェネレーター) は、通常 **@@iterator** メソッドから **this** を返します。何度も繰り返し可能なものは、**@@iterator** の各呼び出しで新しいイテレーターを返す必要があります。

```js
function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
```

### ユーザー定義の反復可能オブジェクト

以下のようにして反復可能オブジェクトを自作することができます:

```js
var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) {
    console.log(value);
}
// 1
// 2
// 3

or

[...myIterable]; // [1, 2, 3]
```

### 組み込み反復可能オブジェクト

{{jsxref("String")}}、{{jsxref("Array")}}、{{jsxref("TypedArray")}}、{{jsxref("Map")}}、{{jsxref("Set")}} はすべて組み込み反復可能オブジェクトです。これらのオブジェクトはすべて、そのプロトタイプオブジェクトに {{jsxref("Symbol.iterator")}} メソッドを備えているためです。

### 反復可能オブジェクトが必要な構文

{{jsxref("Statements/for...of","for-of")}} ループ、{{jsxref("Operators/yield*","yield*")}} などの文や式は、反復可能オブジェクトを必要とします。

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"];
// ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next();
// { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a;
// "a"
```

## 高度なジェネレーター

ジェネレーターは要求に応じて yield 文により生成される値を計算しており、多くの計算が必要な一連のデータを効率的に表現したり、前出のとおり無限のシーケンスを表現したりすることを可能にします。

ジェネレーターの内部状態を変更するのための値を {{jsxref("Global_Objects/Generator/next","next()")}} メソッドで受け入れることもできます。`next()` に渡された値は `yield` が受け取ります。最初 `next()` の呼び出しに値を渡しても常に無視されることに注意してください。

> **メモ:** `next()` の*最初の*呼び出しに渡された値は常に無視されます。

以下のフィボナッチ数列ジェネレーターでは数列を再起動するのに `next(x)` を使っています:

```js
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

ジェネレーターの {{jsxref("Global_Objects/Generator/throw","throw()")}} メソッドを呼び出して発生すべき例外値を渡すことで、ジェネレーターに例外を強制的に発生させることができます。これにより、まるで停止中の `yield` が `throw value` 文に替わったかのように、ジェネレーターが停止した際の状況に応じて例外が発生します。

例外がジェネレーター内部で捕捉されない場合は、`throw()` を通してその例外が呼び出し元へと伝播し、その後 `next()` を呼び出した結果の `done` プロパティは `true` となります。

またジェネレーターは、与えられた値を返してジェネレーター自身の処理を終了させる {{jsxref("Global_Objects/Generator/return","return(value)")}} メソッドを持っています。

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}
