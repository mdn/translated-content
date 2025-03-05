---
title: 왼쪽 시프트 할당 연산자 (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
---

{{jsSidebar("Operators")}}

**왼쪽 시프트 할당 (`<<=`)** 연산자는 지정된 비트 수 만큼 왼쪽으로 비트를 이동시키고 그 결과를 변수에 반영합니다.

{{InteractiveExample("JavaScript Demo: Expressions - Left shift assignment operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## 구문

```js-nolint
x <<= y // x = x << y
```

## 예제

### 왼쪽 시프트 할당하기

```js
let a = 5;
// 00000000000000000000000000000101
a <<= 2; // 20
// 00000000000000000000000000010100
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 가이드에서 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%ed%95%a0%eb%8b%b9_%ec%97%b0%ec%82%b0%ec%9e%90)
- [왼쪽 시프트 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Left_shift)
