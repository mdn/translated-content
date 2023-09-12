---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef}}

**`valueOf()`** 메서드는 {{jsxref("Number")}} 객체가 감싼(wrapped) {{Glossary("primitive", "원시")}} 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## 구문

```js
numObj.valueOf();
```

### 반환 값

{{jsxref("Number")}} 객체의 원시 값.

## 설명

`valueOf()` 메서드는 보통 JavaScript에 의해 내부적으로 호출되고, 웹 코드에서는 명시적으로 호출하지 않습니다.

## 예제

### `valueOf` 사용하기

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.prototype.toSource()")}}
