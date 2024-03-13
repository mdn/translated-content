---
title: 단항 부정 (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
---

{{jsSidebar("Operators")}}

단항 부정 연산자(`-`)는 피연산자 앞에 위치하며, 피연산자의 부호를 부정합니다. 즉 양수는 음수로, 음수는 양수로 바꿉니다.

{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}

## 구문

```js
-x;
```

## 예제

### 숫자 부정하기

```js
const x = 3;
const y = -x;

// y = -3
// x = 3
```

### 숫자가 아닌 값을 부정하기

단항 부정 연산자는 숫자가 아닌 값을 숫자로 변환할 수 있습니다.

```js
const x = "4";
const y = -x;

// y = -4
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)
- [빼기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [나누기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Division)
- [곱하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [나머지 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [지수 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
