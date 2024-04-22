---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef}}

**`Math.abs()`** 함수는 주어진 숫자의 절대값을
반환합니다. `x`가 양수이거나 0이라면 `x`를 리턴하고,
`x`가 음수라면 `x`의 반대값, 즉 양수를 반환합니다.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## 구문

```js
Math.abs(x);
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

주어진 숫자의 절대값.

## 설명

`abs()`는 `Math`의 정적 메서드이므로, 사용자가 생성한
`Math` 객체의 메서드로 호출할 수 없고 항상
`Math.abs()`를 사용해야 합니다. (`Math`는 생성자가
아닙니다)

## 예제

### Math.abs()의 작동 방식

빈 객체, 하나 이상의 요소를 가진 배열, 숫자가 아닌 문자열,
{{jsxref("undefined")}}나 빈 매개변수를 받으면 {{jsxref("NaN")}}을 반환합니다.
{{jsxref("null")}}, 빈 문자열이나 빈 배열을 제공하면 0을 반환합니다.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
