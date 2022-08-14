---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
browser-compat: javascript.builtins.Date.setSeconds
---
{{JSRef}}

setSeconds () 메서드는 현지 시간에 따라 지정된 날짜의 초를 설정합니다.

## Syntax

```js
    dateObj.setSeconds(secondsValue[, msValue])
```

### Versions prior to JavaScript 1.3

```js
    dateObj.setSeconds(secondsValue)
```

### Parameters

- `secondsValue`
  - : 초를 나타내는 0에서 59 사이의 정수입니다.
- `msValue`
  - : 선택 과목. 밀리 초를 나타내는 0에서 999 사이의 숫자입니다.

### Return value

1970 년 1 월 1 일 00:00:00 UTC와 업데이트 된 날짜 사이의 밀리 초 숫자입니다.

## Description

msValue 매개 변수를 지정하지 않으면 {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} 메서드에서 반환 된 값이 사용됩니다.

지정한 매개 변수가 예상 범위를 벗어나면 setSeconds ()는 {{jsxref("Date")}} 객체의 날짜 정보를 그에 따라 업데이트하려고 시도합니다. 예를 들어, secondsValue에 100을 사용하면 {{jsxref("Date")}} 객체에 저장된 분이 1 씩 증가하고 40 초 동안 사용됩니다.

## Examples

### Using `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
