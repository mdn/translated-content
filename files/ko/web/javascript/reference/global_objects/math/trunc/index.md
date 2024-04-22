---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
---

{{JSRef}}

**`Math.trunc()`** 함수는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환합니다.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## 구문

```js
Math.trunc(x);
```

### 매개변수

- `x`
  - : 숫자

### 반환 값

주어진 숫자의 정수부분

## 설명

`Math`의 다른 함수 3개 {{jsxref("Math.floor()")}},
{{jsxref("Math.ceil()")}} 그리고 {{jsxref("Math.round()")}} 와는 다르게,
`Math.trunc()` 단순하게 동작합니다. 함수는 주어진 값이 양수이건 음수이건 상관없이
소수점 이하 우측부분을 *제거*하는 매우 단순한 동작을 합니다.

함수인자는 암묵적으로 숫자로 변환되어 메서드에 전달됩니다.

`trunc()` 함수는 `Math`의 정적 메서드이기 때문에 사용자가 생성한
`Math` 객체의 메서드로 호출하는 것이 아닌 항상 `Math.trunc()` 형태로
호출해야 합니다. (`Math` 는 생성자가 아닙니다).

## 예제

### `Math.trunc()`사용하기

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

## 표준

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
