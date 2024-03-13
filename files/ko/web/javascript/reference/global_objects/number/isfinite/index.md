---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

**`Number.isFinite()`** 메서드는 주어진 값이 유한수인지 판별합니다.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## 구문

```js
Number.isFinite(value);
```

### 매개변수

- `value`
  - : 유한수인지 판별할 값.

### 반환 값

유한수 여부에 대한 {{jsxref("Boolean")}} 값.

## 설명

전역 함수 {{jsxref("isFinite", "isFinite()")}}와 비교했을 때, `Number.isFinite()` 메서드는 매개변수를 숫자로 변환하지 않습니다. 즉 값이 숫자이며 동시에 유한수일 때만 `true`를 반환합니다.

## 예제

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false
// 전역함수 isFinite('0')라면 true
Number.isFinite(null); // false
// 전역함수 isFinite(null)라면 true
```

## 폴리필

```js
if (Number.isFinite === undefined)
  Number.isFinite = function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 메서드가 속한 {{jsxref("Number")}} 객체.
- 전역 함수 {{jsxref("isFinite")}}.
