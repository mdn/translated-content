---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef}}

**getUTCDay()** 메서드는 지정된 날짜의 요일을 표준시에 따라 반환합니다. 여기서 0은 일요일을 나타냅니다.

## Syntax

```js
dateObj.getUTCDay();
```

### Return value

지정된 날짜의 요일에 해당하는 표준시에 따른 정수입니다 (일요일은 0, 월요일은 1, 화요일은 2 등).

## Examples

### Using `getUTCDay()`

다음 예제에서는 현재 날짜의 평일 부분을 weekday 변수에 할당합니다.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
