---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

{{JSRef}}

**`toDateString()`** 메서드는 미국 영어로 사람이 읽을 수있는 형태로 {{jsxref("Date")}} 객체의 날짜 부분을 반환합니다.

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## 구문

```js
    dateObj.toDateString()
```

### 반환 값

주어진 {{jsxref ( "Date")}} 객체의 날짜 부분을 사람이 읽을 수있는 형태로 미국 영어로 나타내는 문자열입니다.

## 설명

{{jsxref ( "Date")}} 인스턴스는 특정 시점을 참조합니다. {{jsxref ( "Date.prototype.toString ()", "toString ()")}}을 호출하면 사람이 읽을 수있는 형식의 미국식 영어로 된 날짜가 반환됩니다. SpiderMonkey에서는 날짜 부분 (일, 월, 연도)과 시간 부분 (시, 분, 초 및 시간대)으로 구성됩니다. 때로는 날짜 부분의 문자열을 얻는 것이 바람직합니다. 이러한 일은 toDateString () 메서드를 사용하여 수행 할 수 있습니다.

toDateString () 메서드는 ECMA-262를 구현하는 호환 엔진이 {{jsxref ( "Date.prototype.toString ()", "toString ()")}} 날짜 ")}} 객체를 사용할 수 있습니다. 형식은 구현에 따라 다르며 간단한 문자열 분할 방법은 여러 엔진에서 일관된 결과를 생성하지 않을 수 있습니다.

## 예제

### A basic usage of `toDateString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // logs Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // logs Wed Jul 28 1993
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
