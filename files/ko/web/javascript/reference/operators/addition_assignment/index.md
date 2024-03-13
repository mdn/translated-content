---
title: 더하기 할당 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
---

{{jsSidebar("Operators")}}

더하기 할당 연산자(`+=`)는 오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당합니다. 두 피연산자의
타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능합니다.

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## 구문

```js
x += y; // x = x + y
```

## 예제

### 더하기 할당 사용하기

```js
// foo = 'foo'
// bar = 5
// baz = true
// 위와 같은 변수를 가정할 때

// Number + Number -> 덧셈
bar += 2; // 7

// Boolean + Number -> 덧셈
baz += 1; // 2

// Boolean + Boolean -> 덧셈
baz += false; // 1

// Number + String -> 연결
bar += "foo"; // "5foo"

// String + Boolean -> 연결
foo += false; // "foofalse"

// String + String -> 연결
foo += "bar"; // "foobar"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#할당_연산자)
- [더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)
