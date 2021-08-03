---
title: AND 비트연산(&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_and
---

{{jsSidebar("Operators")}}

AND 비트 연산자(`&`)는 두 개의 피연산자의 각 자리마다 대응하는 비트가 모두 `1`일 경우 `1`을 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html")}}

## 구문

```js
a & b;
```

## 설명

피연산자는 32비트 정수로 변환되며 일련의 비트(0과 1)로 표현됩니다. 32비트 이상인 숫자는 최상위 비트가 삭제됩니다. 예를 들어 32비트 이상인 다음 정수는 32비트 정수로 변환됩니다.

```js
Before: 11100110111110100000000000000110000000000001;
After: 10100000000000000110000000000001;
```

첫 번째 피연산자의 각 비트는 두 번째 피연산자의 해당 비트(_첫 번째 비트_ 와 _첫 번째 비트_, _두 번째 비트_ 와 _두 번째 비트_ 등등)와 쌍을 이룹니다.

연산자가 각 비트의 쌍에 적용되며, 결과는 완성된 비트 연산된 값입니다.

AND 연산에 대한 진리표는 다음과 같습니다:

| a   | b   | a AND b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```js
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

어떤 수 `x`에 `0`을 AND 비트 연산한 결과는 `0`가 됩니다.

## 예제

### AND 비트 연산 사용하기

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JS의 비트 연산 가이드](/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise)
- [비트 AND 할당연산자](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
