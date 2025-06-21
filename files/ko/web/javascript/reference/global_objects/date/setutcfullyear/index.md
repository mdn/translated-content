---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
---

{{JSRef}}

**`setUTCFullYear()`** 메서드는 지정된 날짜의 전체 연도를 표준시에 따라 설정합니다.

{{InteractiveExample("JavaScript Demo: Date.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## 구문

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dayValue)
```

### 매개변수

- `yearValue`
  - : 연도의 숫자 값을 지정하는 정수입니다 (예 : 1995).
- `monthValue`
  - : 선택적 입력값. 1월에서 12월까지의 월을 나타내는 0에서 11 사이의 정수입니다.
- `dayValue`
  - : 선택적 입력값. 한 달의 날짜를 나타내는 1부터 31사이의 정수입니다. `dayValue` 매개 변수를 지정하는 경우 `monthValue`도 지정해야합니다.

### 반환값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`monthValue` 및 `dayValue` 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getUTCMonth", "getUTCMonth()")}} 및 {{jsxref("Date.prototype.getUTCDate()","getUTCDate()")}} 메소드가 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어난 경우 `setUTCFullYear()`는 다른 매개 변수와 {{jsxref("Date")}} 객체의 날짜 정보를 그에 따라 업데이트하려고 시도합니다. 예를 들어, `monthValue`에 15를 지정하면 연도가 1(`yearValue + 1`)만큼 증가하고 3은 해당 월에 사용됩니다.

## 예제

### `setUTCFullYear()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
