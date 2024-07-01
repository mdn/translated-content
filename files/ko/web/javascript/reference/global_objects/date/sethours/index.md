---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
---

{{JSRef}}

setHours () 메서드는 현지 시간에 따라 지정된 날짜의 시간을 설정하고 1970 년 1 월 1 일 00:00:00 UTC 이후 업데이트 된 {{jsxref ( "Date")}}에 의해 표시되는 시간 (밀리 초)을 반환합니다. 예.

## Syntax

```js
    dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### Versions prior to JavaScript 1.3

```js
dateObj.setHours(hoursValue);
```

### Parameters

- `hoursValue`
  - : 시를 나타내는 0에서 23 사이의 정수입니다.
- `minutesValue`
  - : 선택 과목. 분을 나타내는 0에서 59 사이의 정수입니다.
- `secondsValue`
  - : 선택 과목. 초를 나타내는 0에서 59 사이의 정수입니다. secondsValue 매개 변수를 지정하면 minutesValue도 지정해야합니다.
- `msValue`
  - : 선택 과목. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다. msValue 매개 변수를 지정하는 경우 minutesValue 및 secondsValue도 지정해야합니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

minutesValue, secondsValue 및 msValue 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}에서 반환 된 값, {{jsxref("Date.prototype.getSeconds()","getSeconds()")}} 및 {{jsxref("Date.prototype.getMilliseconds()","getMilliseconds()")}} 메서드가 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 setHours ()는 그에 따라 {{jsxref ("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 secondsValue에 100을 사용하면 분은 1 (minutesValue + 1)만큼 증가하고 40은 초 단위로 사용됩니다.

## Examples

### Using `setHours()`

```js
var theBigDay = new Date();
theBigDay.setHours(7);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
