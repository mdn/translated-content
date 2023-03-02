---
title: AND 비트 할당 연산 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Operators")}}

**AND 비트 할당 (`&=`)** 연산자는 두 피연산자의 이진 표현을 사용하고, 피연산자에 대한 AND 비트 연산 수행 결과를 변수에 할당합니다.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html", "shorter")}}

## 구문

```js-nolint
x &= y // x = x & y
```

## 예제

### Using bitwise AND assignment 사용하기

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

- [Assignment operators in the JS guide](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)
- [Bitwise AND operator](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
