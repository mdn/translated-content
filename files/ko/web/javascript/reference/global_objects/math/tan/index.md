---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef}}

**`Math.tan()`** 함수는 탄젠트 값을 반환합니다

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## 문법

```js
Math.tan(x);
```

### 매개변수

- `x`
  - : 라디안 각도를 표현한 수.

### 반환 값

주어진 수의 탄젠트 값

## 설명

`Math.tan()` 메서드는 각도의 탄젠트 값을 표현하는 수를 반환합니다.

`tan()`은 `Math`의 정적 메서드이므로 사용자가 만든 `Math` 객체의 메서드가 아닌 항상 `Math.tan()`으로 사용합니다 (`Math` 는 생성자가 아닙니다).

## 예제

### `Math.tan()`사용하기

```js
Math.tan(1); // 1.5574077246549023
```

`Math.tan()`함수는 라디안 값으로 받지만 각도로 작업하는 것이 더 쉽기 때문에 다음 함수는 각도로 값을 받아서 라디안으로 변환하고 탄젠트를 반환합니다.

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
