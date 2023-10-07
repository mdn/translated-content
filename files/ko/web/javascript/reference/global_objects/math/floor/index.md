---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
---

{{JSRef}}

**`Math.floor()`** 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## 구문

```js
Math.floor(x);
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

주어진 수 이하의 가장 큰 정수.

## 설명

`floor()`는 `Math`의 정적 메서드이므로, 사용자가 생성한 `Math` 객체의 메서드로 호출할 수 없고 항상 `Math.floor()`를 사용해야 합니다. (`Math`는 생성자가 아닙니다)

> **참고:** `Math.floor(null)`은 {{jsxref("NaN")}} 대신 0을 반환합니다.

## 예제

### `Math.floor()` 사용하기

```js
Math.floor(45.95); //  45
Math.floor(45.05); //  45
Math.floor(4); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
```

### 십진수 조절

```js
// Closure
(function () {
  /**
   * 십진수 조절
   *
   * @param {String}  type  조정 타입.
   * @param {Number}  value 숫자.
   * @param {Integer} exp   지수 (10 로그의 조정값).
   * @returns {Number} 조정값
   */
  function decimalAdjust(type, value, exp) {
    // exp가 undefined 또는 0인 경우...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // 값이 숫자가 아니거나 정수형이 아닌 경우...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Shift back
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // 십진수 round
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // 십진수 floor
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // 십진수 ceil
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
// Floor
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Ceil
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
