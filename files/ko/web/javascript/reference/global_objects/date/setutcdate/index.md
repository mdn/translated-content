---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
browser-compat: javascript.builtins.Date.setUTCDate
---
{{JSRef}}

**setUTCDate()** 메서드는 표준시에 따라 지정된 날짜의 날짜를 설정합니다.

## Syntax

```js
    dateObj.setUTCDate(dayValue)
```

### Parameters

- `dayValue`
  - : 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

지정한 매개 변수가 예상 범위를 벗어난 경우 setUTCDate ()는 그에 따라 {{jsxref ( "Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어, dayValue에 40을 사용하고 {{jsxref ( "Date")}} 객체에 저장된 달이 6 월이면 일이 10으로 변경되고 월이 7 월로 증가합니다.

## Examples

### Using `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
