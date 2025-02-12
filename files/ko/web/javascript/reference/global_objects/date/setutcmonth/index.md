---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

{{JSRef}}

**`setUTCMonth()`** 메서드는 표준시에 따라 지정된 날짜의 월을 설정합니다.

{{InteractiveExample("JavaScript Demo: Date.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## 문법

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dayValue)
```

### 매개변수

- `monthValue`
  - : 1월에서 12월까지의 월을 나타내는 0에서 11 사이의 정수입니다.
- `dayValue`
  - : 선택적 입력 값. 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### 반환값

1970년 1월 1일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## 설명

`dayValue` 매개 변수를 명시하지 않으면 {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} 메소드에서 반환된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어난 경우 `setUTCMonth()`는 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 `monthValue`에 15를 사용하면 연도가 1씩 증가하고 3은 월에 사용됩니다.

## 예제

### `setUTCMonth()` 사용하기

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
