---
title: 나머지 할당 (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
---

{{jsSidebar("Operators")}}

나머지 할당 연산자(`%=`)는 오른쪽 피연산자의 값으로 변수를 나눴을 때의 나머지를 다시 변수에 할당합니다.

{{InteractiveExample("JavaScript Demo: Expressions - Remainder assignment operator")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## 구문

```js
x %= y; // x = x % y
```

## 예제

### 나머지 할당 사용하기

```js
// bar = 5
// 위와 같은 변수를 가정할 때

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 안내서의 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [나머지 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
