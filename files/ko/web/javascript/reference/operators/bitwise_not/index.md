---
title: NOT 비트연산 (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
---

{{jsSidebar("Operators")}}

<!-- The **bitwise NOT (`~`)** operator inverts the bits of its operand. Like other bitwise operators, it converts the operand to a 32-bit signed integer -->

NOT 비트 연산자(`~`)는 피연산자의 비트를 반전시킵니다. 다른 비트 연산자와 마찬가지로 피연산자를 부호 있는 32비트 정수로 변환합니다.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}

## 구문

```js-nolint
~a
```

## 설명

<!-- The operand is converted to a 32-bit signed integer and expressed as a series of bits (zeroes
and ones). Numbers with more than 32 bits get their most significant bits discarded. For
example, the following integer, with more than 32 bits, will be converted to a 32-bit signed
integer: -->

피연산자는 부호 있는 32비트 정수로 변환되며 일련의 비트(0과 1)로 표현됩니다. 32비트 이상인 숫자는 가장 최상위의 비트를 버립니다. 예를 들어 다음과 같은 32비트 이상인 정수는 부호 있는 32비트 정수로 변환됩니다.  

```
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

<!-- Each bit in the operand is inverted in the result.

The truth table for the `NOT` operation is: -->

피연산자의 각 비트는 반전됩니다.

`NOT` 연산에 대한 진리표는 다음과 같습니다:

| a   | NOT a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```js
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

<!-- The 32-bit signed integer operand is inverted according to
[two's complement](https://en.wikipedia.org/wiki/Two%27s_complement). That is, the
presence of the most significant bit is used to express negative integers. -->

부호 있는 32비트 정수인 피연산자는 [2의 보수](https://ko.wikipedia.org/wiki/2%EC%9D%98_%EB%B3%B4%EC%88%98)에 따라 반전됩니다. 즉, 최상위 비트의 존재는 음수인 정수를 표현하는 데 사용합니다. 

<!-- Bitwise NOTing any number `x` yields `-(x + 1)`. For example,
`~-5` yields `4`. -->

어떤 수 `x`에 대해 NOT 비트 연산을 하면 `-(x + 1)`의 결과를 도출합니다. 예를 들면 `~-5`는 `4`로 계산됩니다.

<!-- Note that due to using 32-bit representation for numbers both `~-1` and
`~4294967295` (2<sup>32</sup> - 1) results in `0`. -->

32비트 표현을 사용하기 때문에 `~-1`과 `~4294967295` (2<sup>32</sup> - 1) 의 결과가 둘 다 `0`으로 나오는 점에 유의해주세요.

## 예제

### NOT 비트 연산 사용하기

```js
~0; // -1
~-1; // 0
~1; // -2
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JS의 비트 연산 가이드](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)