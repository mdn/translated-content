---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`BigInt.asUintN()`** 정적 메서드는 `BigInt` 값을 주어진 최하위 비트 수로 자르고 해당 값을 부호 없는 정수로 반환합니다.

{{InteractiveExample("JavaScript Demo: BigInt.asUintN()", "taller")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (wraps to zero)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (wraps on multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## 구문

```js-nolint
BigInt.asUintN(bits, bigint)
```

### 매개변수

- `bits`
  - : 반환된 BigInt에 사용할 수 있는 비트의 양입니다. 0에서 2<sup>53</sup> - 1 이하의 정수여야 합니다.
- `bigint`
  - : 제공된 비트에 맞게 잘라낼 BigInt 값입니다.

### 반환 값

부호 없는 정수인, `bigint`와 2^`bits`의 나머지 연산 값입니다.

### 예외

- {{jsxref("RangeError")}}
  - : `bits`가 음수이거나 2<sup>53</sup> - 1 보다 크면 발생합니다.

## 설명

`BigInt.asUintN` 메서드는 `BigInt` 값을 주어진 비트 수로 잘라내고 그 결과를 부호 없는 정수로 해석합니다. 부호가 없는 정수는 부호 비트가 없으며 언제나 음수가 아닙니다. 예를 들어, `BigInt.asUintN(4, 25n)`의 경우 `25n` 값은 `9n`으로 잘립니다.

```plain
25n = 00011001 (이진수)
         ^==== 오직 남은 4개의 비트만 사용
===>      1001 (이진수) = 9n
```

> **참고:** `BigInt` 값은 언제나 이진수 2의 보수로 인코딩됩니다.

{{jsxref("Number.prototype.toExponential()")}}와 같은 유사한 언어 API와 달리 `asUintN`은 {{jsxref("BigInt")}}의 정적 속성이므로 항상 BigInt 값의 메서드가 아닌 `BigInt.asUintN()`으로 사용합니다. `asUintN()`을 "표준 라이브러리 함수"로 노출하면 [asm.js와의 상호 운용](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs)을 할 수 있습니다.

## 예제

### 64비트 범위에 머무르기

64비트 연산 범위를 유지하는 데 `BigInt.asUintN()` 메서드가 유용할 수 있습니다.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max); // 18446744073709551615n

BigInt.asUintN(64, max + 1n); // 0n
// 오버플로우때문에 0입니다. 가장 하위 64비트는 모두 0입니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("BigInt")}}
- {{jsxref("BigInt.asIntN()")}}
