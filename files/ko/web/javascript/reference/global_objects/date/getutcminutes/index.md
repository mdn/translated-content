---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

**getUTCMinutes()** 메서드는 표준시에 따라 지정된 날짜의 분을 반환합니다.

## Syntax

```js
dateObj.getUTCMinutes();
```

### Return value

0부터 59까지의 정수로, 표준시에 따라 지정된 날짜의 분을 나타냅니다.

## Examples

### Using `getUTCMinutes()`

다음 예제에서는 현재 시간의 분 부분을 minutes 변수에 할당합니다.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
