---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
---

{{JSRef}}

**setDate()** 메서드는 현재 설정된 월의 시작 부분을 기준으로 {{jsxref ( "Date")}} 객체의 날짜를 설정합니다.

## Syntax

```js
dateObj.setDate(dayValue);
```

### Parameters

- `dayValue`
  - : 월의 일을 나타내는 정수입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 밀리 초 ({{jsxref ( "Date")}} 개체도 변경됩니다).

## Description

dayValue가 해당 월의 날짜 값 범위를 벗어나면 setDate ()는 그에 따라 {{jsxref ( "Date")}} 객체를 업데이트합니다. 예를 들어, dayValue에 0이 제공되면 날짜는 이전 달의 마지막 날로 설정됩니다.

## Examples

### Using `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01
theBigDay.setDate(22); // 1962-08-22
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
