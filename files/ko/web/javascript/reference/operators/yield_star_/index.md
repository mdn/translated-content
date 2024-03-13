---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

**`yield*` 표현식**은 다른 {{jsxref("Statements/function*", "generator")}} 또는 이터러블(iterable) 객체에 yield를 위임할 때 사용됩니다.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## 구문

```js-nolint
yield* [[expression]];
```

- `expression`
  - : 이터러블(iterable) 객체를 반환하는 표현식.

## 설명

yield\* 표현은 피연산자를 반복하고 반환되는 값을 yield합니다.

yield\* 표현 자체의 값은 반복자(iterator)가 종료될 때 반환되는 값입니다. (i.e., done이 true일 때)

## 예제

### 다른 생성기(generator)에 위임하기

다음 코드는, next() 호출을 통해 g1()으로부터 yield 되는 값을 g2()에서 yield 되는 것처럼 만듭니다.

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

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### 다른 이터러블(iterable) 객체

생성기 객체 말고도, yield\*는 다른 반복 가능한 객체도 yield 할 수 있습니다. e.g. 배열, 문자열 또는 arguments 객체

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### `yield*` 표현 자체의 값

`yield*` 는 구문이 아닌 표현입니다. 따라서 값으로 평가됩니다.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// g4() 는 여기서 { value: "foo", done: true }를 반환합니다

console.log(result); // "foo"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [The Iterator protocol](/ko/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
