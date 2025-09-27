---
title: 오른쪽 시프트 (>>)
slug: Web/JavaScript/Reference/Operators/Right_shift
---

{{jsSidebar("Operators")}}

**오른쪽 시프트 (`>>`)** 연산자는 첫 번째 피연산자를 명시된 비트 수(32의 나머지)만큼 오른쪽으로 이동합니다. 오른쪽으로 이동된 초과 비트는 폐기됩니다. 왼쪽은 이동한 비트 수만큼 **부호 비트**(가장 왼쪽 비트)로 채워집니다.

{{InteractiveExample("JavaScript Demo: Expressions - Right shift operator", "shorter")}}

```js interactive-example
const a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

console.log(a >> b); //  00000000000000000000000000000001
// Expected output: 1

console.log(c >> b); //  11111111111111111111111111111110
// Expected output: -2
```

## 구문

```js-nolint
x >> y
```

## 설명

이 연산자는 첫 번째 피연산자를 명시한 비트 수만큼 오른쪽으로 이동합니다. 오른쪽으로 이동된 초과 비트는 폐기됩니다. 왼쪽은 이동한 비트 수만큼 부호 비트로 채워집니다.

예를 들어, `9 >> 2`은 2가 도출됩니다.

```
     9 (10진수): 00000000000000000000000000001001 (2진수)
                  --------------------------------
9 >> 2 (10진수): 00000000000000000000000000000010 (2진수) = 2 (10진수)
```

임의의 숫자 `x`를 오른쪽으로 `y`비트 이동하면 `x / (2 ** y)`의 정수 부분과 같습니다. 부호 비트가 유지되므로 양수일 때는 `Math.trunc(x / 2 ** y)`와 같고, 음수일 때는 `Math.floor(x / 2 ** y)`와 같습니다.

예를 들어 `9 >> 3`은 `Math.trunc(9 / 8) = 1`이고, `-9 >> 2`는 `Math.floor(-9 / 4) = -3`입니다.

왼쪽 피연산자는 32비트 정수로 변환됩니다. 따라서 부동 소수점 숫자는 잘리고, 32비트 범위를 넘어가는 경우 오버플로우 또는 언더플로우가 발생합니다.

오른쪽 피연산자는 부호 없는 32비트 정수로 변환된 뒤 32로 나눈 나머지를 취합니다. 따라서 실제 시프트 오프셋은 항상 0에서 31 사이의 정수입니다. 예를 들어, `100 >> 32`는 `100 >> 0`과 같으며 결과는 `100`입니다.

`BigInt` 값에도 `>>` 연산자를 사용할 수 있습니다. 이 경우 시프트 오프셋 역시 `BigInt`여야 하며, `Number`와 달리 `32` 나머지 연산이 적용되지 않습니다. 따라서 임의의 크기만큼 시프트할 수 있습니다.

## 예제

### 오른쪽 시프트 사용하기

```js
9 >> 2; // 2
-9 >> 2; // -3

9n >> 2n; // 2n
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript에서 비트 연산자 가이드](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%eb%b9%84%ed%8a%b8_%ec%97%b0%ec%82%b0%ec%9e%90)
- [Right shift assignment (>>=)](/ko/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
- [Unsigned right shift (>>>)](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
