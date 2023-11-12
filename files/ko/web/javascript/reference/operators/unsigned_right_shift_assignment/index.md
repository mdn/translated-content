---
title: Unsigned 오른쪽 시프트 할당 연산자 (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Operators")}}

**unsigned 오른쪽 시프트 할당(`>>>=`)** 연산자는 지정된 수 만큼 [unsigned 오른쪽 시프트 연산](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)을 수행하고 그 결과를 왼쪽 피연산자에 할당합니다.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## 구문

```js-nolint
x >>>= y
```

## 설명

`x >>>= y` 는 `x = x >>> y`와 같은 의미를 가집니다.

## 예제

### unsigned 오른쪽 시프트 할당 연산자 사용

```js
let a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)

let c = 5n;
c >>>= 2n; // 1n
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Assignment operators in the JS guide](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#할당_연산자)
- [Unsigned 오른쪽 시프트 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
