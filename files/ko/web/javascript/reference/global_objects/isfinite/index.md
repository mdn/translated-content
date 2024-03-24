---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
---

{{jsSidebar("Objects")}}

**`isFinite()`** 전역 함수는 주어진 값이 유한수인지 판별합니다. 필요한 경우 매개변수를 먼저 숫자로 변환합니다.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## 구문

```js
isFinite(testValue);
```

### 매개변수

- `testValue`
  - : 유한한지 판별할 값.

### 반환 값

`testValue`가 양 또는 음의 {{jsxref("Infinity")}}, {{jsxref("NaN")}}, 또는 {{jsxref("undefined")}}면 `false`, 아니면 `true`.

## 설명

`isFinite()`은 최상위 함수로 어떤 객체와도 연결되지 않았습니다.

숫자가 유한수인지 판별하기 위해 `isFinite()`을 사용할 수 있습니다. `isFinite()`은 주어진 수를 검사해 그 값이 `NaN`, 양의 무한대, 또는 음의 무한대이면 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.

## 예제

### `isFinite()` 사용하기

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

isFinite(null); // true, would've been false with the
// more robust Number.isFinite(null)

isFinite("0"); // true, would've been false with the
// more robust Number.isFinite("0")
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN()")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
