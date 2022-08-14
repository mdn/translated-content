---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
browser-compat: javascript.builtins.Date.setUTCMilliseconds
---
{{JSRef}}

**setUTCMilliseconds()** 메서드는 표준시에 따라 지정된 날짜의 밀리 초를 설정합니다.

## Syntax

```js
    dateObj.setUTCMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : 밀리 초를 나타내는 0에서 999 사이의 숫자입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

지정한 매개 변수가 예상 범위를 벗어난 경우 setUTCMilliseconds ()는 그에 따라 {{jsxref ( "Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 millisecondsValue에 1100을 사용하면 {{jsxref ( "Date")}} 객체에 저장된 초가 1 씩 증가하고 100은 밀리 초 단위로 사용됩니다.

## Examples

### Using `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
