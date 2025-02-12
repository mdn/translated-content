---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

**`valueOf()`** 함수는 {{jsxref("Date")}} 객체의 원시값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Date.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## Syntax

```js
dateObj.valueOf();
```

### Return value

반환되는 milliseconds 값은 1 January 1970 00:00:00 UTC 와 주어진 일시 사이의 값입니다.

## Description

`valueOf()` 함수는 01 January, 1970 UTC 이후의 milliseconds 단위의 자연수 타입인 {{jsxref("Date")}} 객체의 원시값을 반환합니다.

이 함수는 {{jsxref("Date.prototype.getTime()")}} 함수와 동일한 결과값을 반환합니다.

이 함수는 사용자 코드에 명시된 것이 아닌, JavaScript 자체에 포함되어 있습니다.

## Examples

### Using `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf(); // myVar에 -424713600000를 할당합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
