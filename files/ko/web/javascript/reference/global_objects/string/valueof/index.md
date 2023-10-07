---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

**`valueOf()`** 메서드는 {{jsxref("String")}} 객체의 원시값을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## 구문

```js
str.valueOf();
```

### 반환 값

지정된 {{jsxref("String")}} 객체의 원시 값을 나타내는 문자열.

## 설명

{{jsxref("String")}} 의 `valueOf()` 메서드는 {{jsxref("String")}} 객체의 원시 값을 문자열 데이터 타입으로 반환 합니다. 이 값은 {{jsxref("String.prototype.toString()")}}.과 동일합니다.

이 메서드는 보통 자바스크립트에 의해 내부적으로 호출되며, 코드에서 명시적으로 사용하지는 않습니다.

## 예제

### `valueOf()` 사용

```js
var x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world' 가 보여집니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
