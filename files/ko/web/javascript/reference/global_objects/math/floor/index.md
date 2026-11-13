---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`Math.floor()`** 정적 메서드는 언제나 버림 처리하고 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
```

## 구문

```js-nolint
Math.floor(x)
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

`x`와 같거나 작은 정수 중 가장 큰 수. [`-Math.ceil(-x)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)와 같은 값입니다.

## 설명

`floor()`는 `Math`의 정적 메서드이므로, 생성한 `Math` 객체(`Math`는 생성자가 아닙니다)의 메서드 보다는 항상 `Math.floor()`를 사용하세요.

## 예제

### Math.floor() 사용하기

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### 십진수 조절

이 예시에서, 우리는 `Math.floor()`, `Math.ceil()`, 그리고 `Math.round()`를 확장한 메서드인 `decimalAdjust()`를 구현합니다. 세 가지 `Math` 함수가 항상 입력을 정수 단위로 조정하는 반면, `decimalAdjust`는 숫자를 조정해야 하는 소수점 왼쪽의 자릿수를 지정하는 `exp` 매개변수를 받습니다. 예를 들어, `-1`은 소수점 이후 한 자리를 남긴다는 의미입니다 ("× 10<sup>-1</sup>"와 같이). 또한, `type` 매개변수를 통해 조정 방식 - `round`, `floor`, 또는 `ceil` - 을 선택할 수 있습니다.

이는 숫자에 10의 거듭제곱을 곱한 다음, 결과를 가장 가까운 정수로 반올림하고, 그 다음 10의 거듭제곱으로 나누는 방식으로 작동합니다. 정밀도를 더 잘 유지하기 위해, 이 방법은 Number의 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 메서드를 활용합니다. 이 메서드는 큰 숫자나 작은 숫자를 과학적 표기법(예: `6.02e23`)으로 표현합니다.

```js
/**
 * 명시된 자리수의 숫자 조정하기
 *
 * @param {"round" | "floor" | "ceil"} type 조정의 유형.
 * @param {number} value 숫자 값.
 * @param {number} exp 지수(조정 기준의 10 로그)입니다.
 * @returns {number} 조정된 값.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // 뒤로 이동
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// 십진법 반올림
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// 십진법 버림
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// 십진법 올림
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// 반올림
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// 버립
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// 올림
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
