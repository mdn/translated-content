---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef}}

setMilliseconds () 메서드는 현지 시간에 따라 지정된 날짜의 밀리 초를 설정합니다.

## Syntax

```js
dateObj.setMilliseconds(millisecondsValue);
```

### Parameters

- `millisecondsValue`
  - : 밀리 초를 나타내는 0에서 999 사이의 숫자입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

예상되는 범위를 벗어난 숫자를 지정하면 {{jsxref ( "Date")}} 객체의 날짜 정보가 그에 따라 업데이트됩니다. 예를 들어, 1005를 지정하면 초 수가 1 씩 증가하고 5는 밀리 초 단위로 사용됩니다.

## Examples

### Using `setMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
