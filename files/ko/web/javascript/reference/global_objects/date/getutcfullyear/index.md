---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

**getUTCFullYear()** 메서드는 표준시에 따라 지정된 날짜의 연도를 반환합니다.

## Syntax

```js
dateObj.getUTCFullYear();
```

### Return value

주어진 날짜의 연도를 표준시에 따라 나타내는 숫자입니다.

## Description

**getUTCFullYear()** 에 의해 반환 된 값은 1995 년과 같이 2000 년과 호환되는 절대 숫자입니다.

## Examples

### Using `getUTCFullYear()`

다음 예제에서는 현재 연도의 4 자리 값을 변수 year에 할당합니다.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
