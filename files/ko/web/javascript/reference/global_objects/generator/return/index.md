---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

제너레이터의 **`return()`** 메서드는 현재 중단된 위치에서 제너레이터 본체에 리턴 문이 삽입 된 것처럼 작동합니다. 이는 [`try...finally`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) 블록을 사용하여 제너레이터를 정리 할 수 있도록 합니다.

## 구문

<!-- We don't usually add the "generatorObject" subject for methods. However, it is necessary here, because "return" is a keyword, so otherwise it's invalid syntax. -->

```js
generatorObject.return(value);
```

## 매개변수

- `value`
  - : 반환할 값입니다.

## 반환 값

두 개의 속성을 가진 {{jsxref("Global_Objects/Object", "객체")}}이고, 이 속성은 다음과 같습니다.

- `done`
  - : 불리언 값입니다.
    - 제너레이터 함수의 제어 흐름이 끝에 도달한 경우 `true`입니다.
    - 제너레이터 함수의 제어 흐름이 끝에 도달하지 않고 더 많은 값을 생성할 수 있는 경우 `false`입니다. 이는 `return`이 [`try...finally`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block)에서 실행되었고 `finally` 블록에는 더 많은 `yield` 식이 있을때만 발생할 수 있습니다.
- `value`
  - : 인수로 지정된 값이며, 만약 `yield` 식이 [`try...finally`](/ko/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block)로 감싸진 경우, 이 값은 `finally` 블록에서 yield 되거나 반환된 값입니다.

## 설명

`return()` 메서드는 현재 중단된 위치의 제너레이터 본체에 삽입된 `return value;`처럼 보일 수 있습니다. 여기서 `value`는 `return()` 메서드에 전달된 값입니다. 따라서 일반적인 흐름에서 `return(value)`를 호출하면 `{ done: true, value: value }`가 반환됩니다. 그러나 `yield` 식이 `try...finally` 블록으로 감싸진 경우, 제어 흐름은 함수를 종료 하지 않고 `finally` 블록이 실행되도록 합니다. 이 경우 반환되는 값은 다를 수 있으며 `finally` 블록 내에 더 많은 `yield`식이 있다면 `done`도 `false`일 수 있습니다.

## 예제

### return() 사용하기

다음 예제에서는 간단한 제너레이터와 `return` 메서드 사용을 보여줍니다.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

제너레이터가 이미 "완료" 상태 일때 `return(value)`가 호출되면 제너레이터는 "완료" 상태를 유지합니다.

인수를 지정하지 않으면 반환된 객체의 `value` 속성은 `undefined`가 됩니다. 인수가 제공되면 `yield` 식이 `try...finally`로 감싸지지 않는 한 반환된 객체의 `value` 속성은 해당 값이 됩니다.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### try...finally와 함께 return() 사용하기

`yield` 식이 `try...finally` 블록으로 감싸진 경우에만 `return` 메소드가 호출되었다는 사실을 제너레이터에게 알릴 수 있습니다.

`try...finally` 문에서 `finally` 블록은 항상 실행되기 때문에 `try` 블록 안 일시 중단된 제너레이터에서 `return` 메서드가 호출되면 제너레이터의 실행이 `finally` 블록으로 진행됩니다.

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// try...finally 전에 실행이 일시 중단됩니다.
g1.return("early return"); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// try...finally 내에서 실행이 일시 중단됩니다.
g2.return("early return"); // { value: 'cleanup', done: false }

// 완료 값은 유지됩니다.
g2.next(); // { value: 'early return', done: true }

// 제너레이터가 완료된 상태입니다.
g2.return("not so early return"); // { value: 'not so early return', done: true }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/function*", "function*")}}
