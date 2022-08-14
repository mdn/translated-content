---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
browser-compat: javascript.builtins.Date.setUTCMonth
---
{{JSRef}}

setUTCMonth () 메서드는 표준시에 따라 지정된 날짜의 월을 설정합니다.

## Syntax

```js
    dateObj.setUTCMonth(monthValue[, dayValue])
```

### Parameters

- `monthValue`
  - : 1 월에서 12 월까지의 월을 나타내는 0에서 11 사이의 정수입니다.
- `dayValue`
  - : 선택 과목. 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

dayValue 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} 메서드에서 반환 된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어난 경우 setUTCMonth()는 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 monthValue에 15를 사용하면 연도가 1 씩 증가하고 3은 월에 사용됩니다.

## Examples

### Using `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
