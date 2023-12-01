---
title: 나머지 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
---

{{jsSidebar("Operators")}}

나머지 연산자(`%`)는 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 구합니다. 부호는 항상 왼쪽 피연산자의 부호를 따릅니다.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## 구문

```js
x % y;
```

## 예제

### 양의 피제수의 나머지

```js
12 % 5; //  2
1 % -2; //  1
1 % 2; //  1
2 % 3; //  2
5.5 % 2; // 1.5
```

### 음의 피제수의 나머지

```js
(-12 % 5) - // -2
  (1 % 2) - // -1
  (4 % 2); // -0
```

### NaN의 나머지

```js
NaN % 2; // NaN
```

### Infinity의 나머지

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
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
- [거듭제곱 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [증가 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Increment)
- [감소 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Decrement)
- [단항 부정 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [단항 플러스 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)
