---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

**getUTCMonth()** 는 지정된 날짜의 월을 0부터 시작하는 값 (0은 첫 해를 나타냄)으로 표준시에 따라 반환합니다.

## Syntax

```js
dateObj.getUTCMonth();
```

### Return value

0부터 11까지의 정수로, 표준시에 따라 주어진 날짜의 달에 해당합니다. 1 월은 0, 2 월은 1, 3 월은 2 등입니다.

## Examples

### Using `getUTCMonth()`

다음 예제에서는 현재 날짜의 월 부분을 month 변수에 할당합니다.

```js
var today = new Date();
var month = today.getUTCMonth();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
