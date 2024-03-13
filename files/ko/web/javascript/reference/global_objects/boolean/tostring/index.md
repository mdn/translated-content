---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef}}

**`toString()`** 메서드는 {{jsxref("Boolean")}} 객체를 나타내는 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## 구문

```js
bool.toString();
```

### 반환 값

{{jsxref("Boolean")}} 객체를 나타내는 문자열.

## 설명

{{jsxref("Boolean")}} 객체는 {{jsxref("Object.prototype.toString()")}} 메서드를 상속받지 않고 재정의합니다. `Boolean` 객체에서 `toString()` 메서드는 객체의 문자열 표현을 반환합니다.

JavaScript는 {{jsxref("Boolean")}}을 문자열로 표현해야 할 때나 문자열 결합에 사용할 때 `toString()`을 자동으로 호출합니다.

`toString()`은 불리언 객체의 값에 따라 문자열 "`true`" 또는 "`false`"를 반환합니다.

## 예제

### `toString()` 사용하기

```js
var flag = new Boolean(true);
flag.toString(); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.toString()")}}
