---
title: 나누기 (/)
slug: Web/JavaScript/Reference/Operators/Division
---

{{jsSidebar("Operators")}}

나누기 연산자(`/`)는 왼쪽 피연산자를 피제수, 오른쪽 피연산자를 제수로 하여 몫을 구합니다.

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## 구문

```js
x / y;
```

## 예제

### 기본 나눗셈

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5
```

### 0으로 나누기

```js
2.0 / 0; // Infinity

2.0 / 0.0; // Infinity, 0.0 === 0이기 때문

2.0 / -0.0; // -Infinity
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [더하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Addition)
- [빼기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [곱하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [나머지 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [거듭제곱 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [단항 플러스 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
