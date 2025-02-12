---
title: 곱하기 할당 (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
---

{{jsSidebar("Operators")}}

곱하기 할당 연산자(`*=`)는 오른쪽 피연산자의 값을 변수에 곱한 결과를 다시 변수에 할당합니다.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication assignment operator")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## 구문

```js
x *= y; // x = x * y
```

## 예제

### 곱하기 할당 사용하기

```js
// bar = 5
// 위와 같은 변수를 가정할 때

bar *= 2; // 10
bar *= "foo"; // NaN
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [곱하기 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Multiplication)
