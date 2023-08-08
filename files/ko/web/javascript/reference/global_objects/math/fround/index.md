---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
---

{{JSRef}}

**`Math.fround()`** 함수는 [single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) 포맷으로 표현할 수 있는 실수들 중에서 가장 가까운 숫자를 리턴합니다.

## 문법

```js
Math.fround(x);
```

### 파라메터

- `x`
  - : 숫자.

## 설명

`fround()` 가 `Math` 객체의 정적 메소드이기 때문에, 반드시 `Math.fround()` 같은 형태로 사용해야 합니다. `Math` 객체를 직접 만들어서 호출하는 방식으로 사용하지 않습니다 (`Math` 는 생성자가 아닙니다).

## 예제

### `Math.fround() 사용법`

```js
Math.fround(0); // 0
Math.fround(1); // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5); // 1.5
Math.fround(NaN); // NaN
```

## Polyfill

만약 {{jsxref("Float32Array")}} 가 지원된다면, Math.fround() 를 다음 함수로 흉내낼 수 있습니다.

```js
Math.fround =
  Math.fround ||
  (function (array) {
    return function (x) {
      return (array[0] = x), array[0];
    };
  })(Float32Array(1));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Math.round()")}}
