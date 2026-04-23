---
title: OR 비트연산(|)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**OR 비트 연산자(`|`)**는 두 피연산자의 각 비트를 비교하여, 둘 중 하나라도 `1`인 경우 해당 비트를 `1`로 설정한 숫자 또는 BigInt 값을 반환합니다.
{{InteractiveExample("JavaScript 데모: Bitwise OR (|) 연산자", "shorter")}}

```js interactive-example
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// 예상 출력: 7
```

## 구문

```js-nolint
x | y
```

## 설명

`|` 연산자는 숫자와 [BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 두 가지 피연산자 타입에 대해 오버로드됩니다. 숫자의 경우 연산 결과는 32비트 정수로 반환되고, BigInt의 경우 BigInt로 반환됩니다. 연산자는 먼저 두 피연산자를 [숫자형으로 강제 변환](/ko/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion)한 뒤, 두 피연산자의 타입을 검사합니다. 두 값이 모두 BigInt로 변환되면 BigInt OR 연산을 수행하고, 그렇지 않으면 두 값을 [32비트 정수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)로 변환하여 숫자 비트 OR 연산을 수행합니다. 한쪽은 BigInt로, 다른 쪽은 숫자로 변환될 경우 {{jsxref("TypeError")}}가 발생합니다.

이 연산자는 [2의 보수(two's complement)](https://en.wikipedia.org/wiki/Two's_complement) 표현을 기반으로 피연산자의 비트 표현에 대해 동작합니다. 첫 번째 피연산자의 각 비트는 두 번째 피연산자의 해당 위치 비트와 쌍을 이루며 각 비트 쌍에 대해 OR 연산이 적용되고, 결과는 비트 단위로 구성됩니다.

OR 연산에 대한 진리표는 다음과 같습니다.

| x   | y   | x OR y |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```plain
     9 (10진수) = 00000000000000000000000000001001 (2진수)
    14 (10진수) = 00000000000000000000000000001110 (2진수)
                 --------------------------------
14 | 9 (10진수) = 00000000000000000000000000001111 (2진수) = 15 (10진수)
```

32비트를 초과하는 숫자는 상위 비트가 버려집니다. 예를 들어, 다음과 같은 32비트보다 큰 정수는 다음과 같이 변환됩니다.

```plain
변환 전: 11100110111110100000000000000110000000000001
변환 후:             10100000000000000110000000000001
```

> [!WARNING]
> 일부 코드에서는 `| 0` 을 사용해 숫자를 정수로 잘라내기도 합니다. 하지만 `x | 0`은 `x`를 32비트 정수로 변환하면서, -2147483648 ~ 2147483647 범위를 벗어난 숫자의 상위 비트를 제거합니다. 이런 경우에는 [`Math.trunc()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)를 사용하는 것이 더 안전합니다.

BigInt의 경우에는 이런 잘림이 발생하지 않습니다. 양의 BigInt는 무한히 많은 선행 `0`비트, 음의 BigInt는 무한히 많은 선행 `1`비트를 가진 것으로 간주됩니다.

## 예시

### 비트 OR 사용하기

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)

14n | 9n; // 15n
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JS 가이드의 비트 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#비트_연산자)
- [비트 단위 OR 할당(`|=`)](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
