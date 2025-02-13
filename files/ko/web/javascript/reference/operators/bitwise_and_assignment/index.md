---
title: 비트 AND 할당 연산 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Operators")}}

**비트 AND 할당 (`&=`)** 연산자는 두 피연산자의 이진 표현을 사용하고, 피연산자에 대한 AND 비트 연산 수행 결과를 변수에 할당합니다.

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise AND assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## 구문

```js-nolint
x &= y // x = x & y
```

## 예제

### 비트 AND 할당 연산 사용하기

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JS의 할당 연산자 안내서](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%95%A0%EB%8B%B9_%EC%97%B0%EC%82%B0%EC%9E%90)
- [AND 비트 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
