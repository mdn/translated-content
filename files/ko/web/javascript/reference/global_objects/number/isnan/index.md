---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

**`Number.isNaN()`** 메서드는 주어진 값이 {{jsxref("NaN")}}인지 판별합니다. 기존부터 존재한 전역 {{jsxref("isNaN", "isNaN()")}} 함수의 더 엄격한 버전입니다.

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## 구문

```js
Number.isNaN(value);
```

### 매개변수

- `value`
  - : {{jsxref("NaN")}}인지 판별할 값.

### 반환 값

주어진 값의 유형이 {{jsxref("Number")}}이고 값이 {{jsxref("NaN")}}이면 `true`, 아니면 `false`.

## 설명

{{jsxref("NaN")}}이 `NaN`인지 계산할 때, 두 동일 연산자 `==`과 `===` 모두 `false`로 평가되므로 값의 `NaN` 여부를 알아내려면 `Number.isNaN()`이 필요합니다. 이 상황은 다른 모든 JavaScript와 다른 특별한 경우입니다.

전역 {{jsxref("isNaN", "isNaN()")}} 함수와 달리, `Number.isNaN()`은 강제로 매개변수를 숫자로 변환하는 문제를 겪지 않습니다. 이는 이제 보통{{jsxref("NaN")}}으로 변환됐을 값이 안전하게 전달되지만, 실제로는 {{jsxref("NaN")}}과 같은 값이 아님을 의미합니다. 이는 또한 오직 숫자형이고 또한 {{jsxref("NaN")}}인 값만이 `true`를 반환함을 뜻합니다.

## 예제

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// 예를 들면 이들은 global isNaN()으로는 true가 됐을 것임
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// 모두
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## 폴리필

```js
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return value !== value;
  };
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
