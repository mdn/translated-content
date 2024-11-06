---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

**`valueOf()`** 메서드는 {{jsxref("Boolean")}} 객체의 원시 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## 구문

```js
bool.valueOf();
```

### 반환 값

{{jsxref("Boolean")}} 객체의 원시 값.

## 설명

`valueOf()` 메서드는 {{jsxref("Boolean")}} 객체나 불리언 리터럴의 원시 값을 Boolean 자료형의 값으로 반환합니다.

`valueOf()` 메서드는 보통 JavaScript 내부에서 호출하며 코드에서 명시적으로 사용하지는 않습니다.

## 예제

### `valueOf` 사용하기

```js
var x = new Boolean();
x.valueOf(); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.valueOf()")}}
