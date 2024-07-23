---
title: Date.prototype.getYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getYear
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{Deprecated_Header}}

{{jsxref("Date")}} 인스턴스의 `getYear()` 메서드는 현지 시간에 따라 이 날짜의 연도를 반환합니다. `getYear()`는 전체 연도("2000년도 문제")를 반환하지 않기 때문에 더 이상 사용되지 않으며 {{jsxref("Date/getFullYear", "getFullYear()")}} 메서드로 대체되었습니다.

## 구문

```js-nolint
getYear()
```

### 매개변수

없음.

### 반환 값

현지 시간 기준 지정된 날짜의 연도를 나타내는 정수에서 1900을 뺀 값입니다. 날짜가 [유효하지 않은](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) 경우 `NaN`을 반환합니다.

- 연도가 2000보다 크거나 같은 경우 값은 100보다 큽니다. 예를 들어 연도가 2026인 경우 `getYear()`는 126을 반환합니다.
- 1900년부터 1999년까지 연도의 경우 `getYear()`가 반환하는 값은 0에서 99 사이입니다. 예를 들어 연도가 1976인 경우 `getYear()`는 76을 반환합니다.
- 1900보다 작은 연도의 경우 `getYear()`가 반환하는 값은 0보다 작습니다. 예를 들어 연도가 1800인 경우 `getYear()`는 -100을 반환합니다.

이 메서드는 기본적으로 {{jsxref("Date/getFullYear", "getFullYear()")}}의 값에서 1900을 뺀 값을 반환합니다. 대신 전체 연도가 명시된 `getFullYear()`를 사용해야 합니다.

## 예제

### 1900과 1999 사이의 연도

두 번째 문은 변수 `year`에 95를 할당합니다.

```js
const xmas = new Date("1995-12-25");
const year = xmas.getYear(); // returns 95
```

### 1999 이후의 연도

두 번째 문은 변수 `year`에 100을 할당합니다.

```js
const xmas = new Date("2000-12-25");
const year = xmas.getYear(); // returns 100
```

### 1900년 미만의 연도

두 번째 문은 변수 `year`에 -100을 할당합니다.

```js
const xmas = new Date("1800-12-25");
const year = xmas.getYear(); // returns -100
```

### 1900과 1999 사이의 연도 설정하기 및 가져오기

세 번째 문은 1995년을 나타내기 위해 변수 `year`에 95를 할당합니다.

```js
const xmas = new Date("2015-12-25");
xmas.setYear(95);
const year = xmas.getYear(); // returns 95
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Date.prototype.getYear` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
