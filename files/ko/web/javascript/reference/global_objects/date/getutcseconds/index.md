---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

**getUTCSeconds()** 메서드는 표준시에 따라 지정된 날짜의 초를 반환합니다.

## Syntax

```js
dateObj.getUTCSeconds();
```

### Return value

0부터 59까지의 정수로, 표준시에 따라 지정된 날짜의 초를 나타냅니다.

## Examples

### Using `getUTCSeconds()`

다음 예제에서는 현재 시간의 초 부분을 초 변수에 지정합니다.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
