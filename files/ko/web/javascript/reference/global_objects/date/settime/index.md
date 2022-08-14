---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setTime
browser-compat: javascript.builtins.Date.setTime
---
{{JSRef}}

setTime () 메서드는 {{jsxref ( "Date")}} 객체를 1970 년 1 월 1 일 00:00:00 UTC부터 밀리 초 단위로 나타내는 시간으로 설정합니다.

## Syntax

```js
    dateObj.setTime(timeValue)
```

### Parameters

- `timeValue`
  - : 1970 년 1 월 1 일 00:00:00 UTC 이후의 밀리 초 수를 나타내는 정수입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 (사실상 인수의 값) 사이의 밀리 초 수입니다.

## Description

setTime () 메서드를 사용하면 다른 {{jsxref ( "Date")}} 객체에 날짜와 시간을 지정할 수 있습니다.

## Examples

### Using `setTime()`

```js
var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
