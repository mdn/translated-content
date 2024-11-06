---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

**`toJSON()`** 메서드는 {{jsxref("Date")}} 객체의 문자열 표현을 반환합니다.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## 구문

```js
dateObj.toJSON();
```

### 반환 값

주어진 날짜의 문자열 표현.

## 설명

{{jsxref("Date")}} 인스턴스는 시간의 특정 지점을 가리킵니다. `toJSON()`을 호출하면 {{jsxref("Date.prototype.toISOString()", "toISOString()")}} 사용해 그 인스턴스가 가리키는 시간의 문자열 표현을 반환합니다. `toJSON()`은 `Date` 값을 {{Glossary("JSON")}}으로 직렬화할 때 유용하게 사용할 수 있도록 만들어졌습니다.

## 예제

### `toJSON()` 사용하기

```js
const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
