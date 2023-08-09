---
title: Math.sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
---

{{JSRef}}

**`Math.sign()`** 함수는 주어진 수의 부호를 나타내는 +/-1을 반환합니다. 단, `Math.sign()`에 제공한 수가 0일 경우 부호에 따라 +/-0을 반환합니다.

{{EmbedInteractiveExample("pages/js/math-sign.html")}}

## 구문

```js
Math.sign(x);
```

### 매개변수

- `x`
  - : 숫자. `number` 자료형이 아닐 경우 자동으로 변환합니다.

### 반환 값

주어진 값의 부호를 나타내는 수.

- 값이 양의 수일 경우 `1`을 반환합니다.
- 값이 음의 수일 경우 `-1`을 반환합니다.
- 값이 양의 0일 경우 `0`을 반환합니다.
- 값이 음의 0일 경우 `-0`을 반환합니다.
- 이외의 경우 {{jsxref("NaN")}}을 반환합니다.

## 설명

`sign()`은 `Math`의 정적 메서드이므로, 사용자가 생성한 `Math` 객체의 메서드가 아니라 `Math.sign()`으로 호출해야 합니다. (`Math`는 생성자가 아닙니다)

## 예제

### `Math.sign()` 사용하기

```js
Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Math.sign` 폴리필](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.trunc()")}}
