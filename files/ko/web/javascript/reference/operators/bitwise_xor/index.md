---
title: XOR 비트연산(^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**XOR 비트 연산자(`^`)**는 각 비트 위치에 `1`이 있는 이진 표현의 숫자 또는 BigInt를 반환합니다. 해당 피연산자 중 하나가 `1`이지만 두 피연산자 모두는 아닙니다.

{{InteractiveExample("JavaScript 데모: Bitwise XOR (^) 연산자", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// 예상 출력: 6
```

## 구문

```js-nolint
x ^ y
```

## 설명

`^` 연산자는 숫자와 [BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)의 두 가지 피연산자 타입에 대해 오버로드됩니다. 숫자의 경우 연산 결과는 32비트 정수로 반환되고, BigInt의 경우 BigInt로 반환됩니다. 먼저 두 피연산자를 [숫자형으로 강제 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#숫자_강제_변환)하고 타입을 검사합니다. 두 값이 모두 BigInt면 BigInt XOR을 수행하고, 그렇지 않으면 두 값을 [32비트 정수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)로 변환하여 숫자 비트 XOR 연산을 수행합니다. 한 피연산자가 BigInt가 되고 다른 피연산자가 숫자로 변환될 경우 {{jsxref("TypeError")}}가 발생합니다.

이 연산자는 피연산자의 비트 표현을 [2의 보수](https://en.wikipedia.org/wiki/Two's_complement) 방식으로 연산합니다. 첫 번째 피연산자의 각 비트는 두 번째 피연산자의 해당 비트와 쌍을 이룹니다. 즉, *첫 번째 비트*는 *첫 번째 비트*에, *두 번째 비트*는 *두 번째 비트*에, 이런 식으로 계속됩니다. 이 연산자는 각 비트 쌍에 적용되며, 결과는 비트 단위로 구성됩니다.

XOR 연산의 진리표는 다음과 같습니다.

| x   | y   | x XOR y |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```plain
     9 (10진수) = 00000000000000000000000000001001 (2진수)
    14 (10진수) = 00000000000000000000000000001110 (2진수)
                   --------------------------------
14 ^ 9 (10진수) = 00000000000000000000000000000111 (2진수) = 7 (10진수)
```

32비트를 초과하는 숫자는 최상위 비트가 삭제됩니다. 예를 들어, 32비트를 초과하는 다음 정수는 32비트 정수로 변환됩니다.

```plain
변환 전: 11100110111110100000000000000110000000000001
변환 후:              10100000000000000110000000000001
```

> [!WARNING]
> 숫자를 정수로 자르기 위해 `^ 0`을 사용하는 사람들을 볼 수 있습니다. 임의의 숫자 `x`와 `0`을 비트 배타적 논리합하면 `x`가 32비트 정수로 변환되고, -2147483648에서 2147483647 범위를 벗어나는 숫자의 선행 비트가 제거됩니다. 대신 [`Math.trunc()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)를 사용하세요.

`BigInt`에서는 잘림(truncation)이 없습니다.
양의 `BigInt`는 개념적으로 무한히 많은 선행 `0` 비트를 갖고,
음의 `BigInt`는 무한히 많은 선행 `1` 비트를 갖는다고 이해하면 됩니다.

## 예시

### 비트 XOR 사용하기

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)

14n ^ 9n; // 7n
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Bitwise operators in the JS guide](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#비트_연산자)
- [Bitwise XOR assignment (`^=`)](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
