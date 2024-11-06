---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

{{JSRef}}

**setFullYear()** 메서드는 현지 시간에 따라 지정된 날짜의 전체 연도를 설정합니다. 새로운 타임 스탬프를 반환합니다.

## Syntax

```js
    dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

### Parameters

- `yearValue`
  - : 연도의 숫자 값을 지정하는 정수입니다 (예 : 1995).
- `monthValue`
  - : 선택 과목. 1 월에서 12 월까지의 월을 나타내는 0에서 11 사이의 정수입니다.
- `dayValue`
  - : 선택 과목. 한 달의 날짜를 나타내는 1 - 31 사이의 정수입니다. dayValue 매개 변수를 지정하는 경우 monthValue도 지정해야합니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

monthValue 및 dayValue 매개 변수를 지정하지 않으면 {{jsxref ("Date.prototype.getMonth()", "getMonth()")}} 및 {{jsxref("Date.prototype.getDate)","getDate()")}} 메소드가 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 setFullYear ()가 다른 매개 변수와 {{jsxref ( "Date")}} 객체의 날짜 정보를 그에 따라 업데이트하려고 시도합니다. 예를 들어, monthValue에 15를 지정하면 연도가 1 (yearValue + 1)만큼 증가하고 3은 해당 월에 사용됩니다.

## Examples

### Using `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
