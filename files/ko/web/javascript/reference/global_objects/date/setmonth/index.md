---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMonth
browser-compat: javascript.builtins.Date.setMonth
---
{{JSRef}}

setMonth () 메서드는 현재 설정된 연도에 따라 지정된 날짜의 월을 설정합니다.

## Syntax

```js
    dateObj.setMonth(monthValue[, dayValue])
```

### Versions prior to JavaScript 1.3

```js
    dateObj.setMonth(monthValue)
```

### Parameters

- `monthValue`
  - : 1 월에서 12 월까지의 월을 나타내는 0에서 11 사이의 정수입니다.
- `dayValue`
  - : 선택 과목. 한 달의 날짜를 나타내는 1에서 31 사이의 정수입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

dayValue 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getDate()", "getDate()")}} 메서드에서 반환 된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 setMonth ()는 그에 따라 {{jsxref("Date")}} 객체의 날짜 정보를 업데이트하려고 시도합니다. 예를 들어 monthValue에 15를 사용하면 연도가 1 씩 증가하고 3은 월에 사용됩니다.

현재 날짜가이 메서드의 동작에 영향을 미칩니다. 개념적으로 새로운 날짜를 반환하기 위해 매개 변수로 지정된 새 달의 첫 번째 날에 해당 월의 현재 날짜로 지정된 일 수를 추가합니다. 예를 들어 현재 값이 2016 년 8 월 31 일인 경우 setMonth를 1로 설정하면 2016 년 3 월 2 일에 반환됩니다. 이는 2016 년 2 월에 29 일이 있었기 때문입니다.

## Examples

### Using `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);

//Watch out for end of month transitions
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
