---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

**`yield*` 式**は別の{{jsxref("Statements/function*", "ジェネレーター", "", 1)}}や反復可能なオブジェクトに委任するために使用されます。

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## 構文

```js-nolint
yield* expression;
```

- `expression`
  - : 反復可能なオブジェクトを返す式。

## 解説

`yield*` 式はオペランドを反復し、それによって返されたそれぞれの値をもたらします。

`yield*` 式自体の値は、イテレーターが閉じたとき（つまり `done` が `true` のとき）に返される値です。

## 例

### 別のジェネレータに委任する

次のコードでは、 `g1()` によってもたらされる値は、 `g2()` で得られているものと同じように `next()` の呼び出しから返されます。

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const iterator = g2();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### 他の反復可能なオブジェクト

ジェネレータオブジェクトのほかに、 `yield*` は他の種類の反復 (例えば、配列、文字列、 {{jsxref("Functions/arguments", "arguments")}} オブジェクト) を `yield` することができます。

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

const iterator = g3(5, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "3", done: false}
console.log(iterator.next()); // {value: "4", done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

### `yield*` 式自体の値

`yield*` は式であり、文ではありません。そのため、値に評価されます。

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const iterator = g5();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(iterator.next()); // {value: 'foo', done: true}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Iterator プロトコル](/ja/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
