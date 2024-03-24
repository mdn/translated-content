---
title: "TypeError: 'x' is not iterable"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
---

{{jsSidebar("Errors")}}

JavaScript の例外 "is not iterable" は、 [for…of](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) の右辺として与えられた値や、 {{jsxref("Promise.all")}} または {{jsxref("TypedArray.from")}} のような関数の引数として与えられた値が[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)ではなかった場合に発生します。

## エラーメッセージ

```js
TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
```

## エラー種別

{{jsxref("TypeError")}}

## エラーの原因

[for…of](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) の右辺、 {{jsxref("Promise.all")}} や {{jsxref("TypedArray.from")}} などの引数として指定された値が[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)ではありません。反復可能なものは、{{jsxref("Array")}}、{{jsxref("String")}}、{{jsxref("Map")}} 等のような組み込み反復可能型や、ジェネレーターの結果、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装しているオブジェクトが成ることができます。</p>

## 例

### オブジェクトのプロパティの反復処理

JavaScript では、 {{jsxref("Object")}} は[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)を実装していない限り反復処理できません。したがって、オブジェクトのプロパティを反復処理するために [for…of](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) を使用することはできません。</p>

```js example-bad
var obj = { France: "Paris", England: "London" };
for (let p of obj) {
  // TypeError: obj is not iterable
  // …
}
```

代わりに、オブジェクトのプロパティを反復処理するためには {{jsxref("Object.keys")}} か {{jsxref("Object.entries")}} を使用してください。

```js example-good
var obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
  var capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
  console.log(country, capital);
```

この使用例のそのほかの選択肢として、{{jsxref("Map")}} を使用することもできます。

```js example-good
var map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
for (let country of map.keys()) {
  let capital = map[country];
  console.log(country, capital);
}

for (let capital of map.values()) console.log(capital);

for (const [country, capital] of map.entries()) console.log(country, capital);
```

### ジェネレーターの反復処理

[ジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators)は反復可能オブジェクトを生成するために呼び出す関数です。</p>

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
  console.log(x);
```

ジェネレーターを呼び出していないとき、ジェネレーターに対応した {{jsxref("Function")}} オブジェクトは呼び出し可能ですが、反復処理はできません。ジェネレーターを呼び出すと、ジェネレーターの実行中に生成された値を反復処理する反復可能オブジェクトが生成されます。

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate(1, 2)) console.log(x);
```

### 独自の反復可能オブジェクトでの反復処理

独自の反復可能オブジェクトは、 {{jsxref("Symbol.iterator")}} メソッドを実装することで作成することができます。 iterator メソッドはイテレーターであるオブジェクト、すなわち next メソッドを返す必要があります。

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] は反復可能ですが、イテレーターではありません。 -- next メソッドがないからです。
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
- [ジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators)
- [for…of](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
