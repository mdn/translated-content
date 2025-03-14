---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

getUTCHours () 메서드는 표준시에 따라 지정된 날짜의 시간을 반환합니다.

## Syntax

```js
dateObj.getUTCHours();
```

### Return value

0부터 23까지의 정수로, 표준시에 따라 지정된 날짜의 시간을 나타냅니다.

## Examples

### Using `getUTCHours()`

다음 예제에서는 현재 시간의 시간 부분을 시간 변수로 지정합니다.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
