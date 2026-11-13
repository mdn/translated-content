---
title: "TypeError: 'x' is not iterable"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "is not iterable" は、[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)で配列や関数呼び出しに展開される値、[`for...of`](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) の右辺として指定された値、{{jsxref("Promise.all")}} や {{jsxref("Set/Set", "Set()")}} などの関数の引数として指定された値、あるいは配列の[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)の右辺として指定された値が、[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)でない場合に発生します。また、{{jsxref("Array.fromAsync()")}} や {{jsxref("Statements/for-await...of", "for await...of")}} を、[非同期ではない反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)と共に使用した場合にも、このエラーが発生します。

## エラーメッセージ

```plain
TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function (V8-based & Safari)
TypeError: %Array%.from requires that the property of the first argument, items[Symbol.iterator], when exists, be a function (V8-based & Safari)
TypeError: Array.fromAsync requires that the property of the first argument, items[Symbol.asyncIterator], when exists, be a function (V8-based & Safari)
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator)) (V8-based)
TypeError: x is not async iterable (V8-based)
TypeError: x is not iterable (V8-based & Firefox)
TypeError: undefined is not a function (near '...y of x...') (Safari)
TypeError: Array.from: no function (Safari)
TypeError: Type error (Safari)
```

## エラー型

{{jsxref("TypeError")}}

## エラーの原因

配列または関数呼び出しへの[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、[`for...of`](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_文) の右辺、 {{jsxref("Promise.all")}} や {{jsxref("Set/Set", "Set()")}} などの引数、配列の[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)パターンの元などとして指定された値が[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)ではありません。
反復可能なものは、{{jsxref("Array")}}、{{jsxref("String")}}、{{jsxref("Map")}} などのような組み込み反復可能型や、ジェネレーターの結果、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装しているオブジェクトが成ることができます。

```js
const nonIterable1 = {};
const nonIterable2 = { [Symbol.iterator]: 1 };

[...nonIterable1];
Math.max(...nonIterable1);
for (const x of nonIterable1);
new Set(nonIterable1);
Array.from(nonIterable2);
new Int8Array(nonIterable2);
const [] = nonIterable1;
```

## 例

### 反復可能でないオブジェクトの配列への構造分解

```js example-bad
const myObj = { arrayOrObjProp1: {}, arrayOrObjProp2: [42] };

const {
  arrayOrObjProp1: [value1],
  arrayOrObjProp2: [value2],
} = myObj; // TypeError: object is not iterable

console.log(value1, value2);
```

反復可能ではないオブジェクトは、実行環境によっては `undefined` になることがあります。

### オブジェクトのプロパティの反復処理

JavaScript では、 {{jsxref("Object")}} は[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装していない限り反復処理できません。したがって、オブジェクトのプロパティを反復処理するために [`for...of`](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_文) を使用することはできません。</p>

```js example-bad
const obj = { France: "Paris", England: "London" };
for (const p of obj) {
  // …
} // TypeError: obj is not iterable
```

代わりに、オブジェクトのプロパティを反復処理するためには {{jsxref("Object.keys")}} か {{jsxref("Object.entries")}} を使用してください。

```js example-good
const obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj)) {
  console.log(country, capital);
}
```

この使用例のそのほかの選択肢として、{{jsxref("Map")}} を使用することもできます。

```js example-good
const map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
for (const country of map.keys()) {
  const capital = map.get(country);
  console.log(country, capital);
}

for (const capital of map.values()) {
  console.log(capital);
}

for (const [country, capital] of map.entries()) {
  console.log(country, capital);
}
```

### ジェネレーターの反復処理

[ジェネレーター関数](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators#ジェネレーター関数)は反復可能オブジェクトを生成するために呼び出す関数です。

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate) {
  console.log(x);
} // TypeError: generate is not iterable
```

ジェネレーターを呼び出していないとき、ジェネレーターに対応した {{jsxref("Function")}} オブジェクトは呼び出し可能ですが、反復処理はできません。ジェネレーターを呼び出すと、ジェネレーターの実行中に生成された値を反復処理する反復可能オブジェクトが生成されます。

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate(1, 2)) {
  console.log(x);
}
```

### 独自の反復可能オブジェクトでの反復処理

独自の反復可能オブジェクトは、 {{jsxref("Symbol.iterator")}} メソッドを実装することで作成することができます。 iterator メソッドはイテレーターであるオブジェクト、すなわち next メソッドを返す必要があります。

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] は反復可能ですが、イテレーターではありません。 - next メソッドがないからです。
  },
};

Array.from(myEmptyIterable); // TypeError: myEmptyIterable is not iterable
```

こちらは正しい実装です。

```js example-good
const myEmptyIterable = {
  [Symbol.iterator]() {
    return [][Symbol.iterator]();
  },
};

Array.from(myEmptyIterable); // []
```

## 関連情報

- [反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [ジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators#ジェネレーター関数)
- [for...of](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_文)
