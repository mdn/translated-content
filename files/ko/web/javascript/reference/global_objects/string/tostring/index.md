---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toString
browser-compat: javascript.builtins.String.toString
---

{{JSRef}}

**`toString()`** 메서드는 객체의 문자열 표현을 반환합니다.

{{EmbedInteractiveExample("pages/js/string-tostring.html")}}

## 구문

```js
toString()
```

### 반환 값

메서드를 호출하는 객체의 문자열 표현.

## 설명

{{jsxref("String")}} 객체는 {{jsxref("Object")}} 객체의 `toString()` 메서드를 상속하지 않고 재정의합니다. {{jsxref("String")}} 의 `toString()` 메서드는 객체의 문자열 표현을 반환하며 {{jsxref("String.prototype.valueOf()")}} 메서드와 동일합니다.

## 예제

### `toString()` 사용하기

{{jsxref("String")}} 객체의 문자열 값을 표시하는 예제입니다.

```js
var x = new String('Hello world')

console.log(x.toString()) // logs 'Hello world'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.valueOf()")}}
