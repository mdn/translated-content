---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("String")}} 값의 **`valueOf()`** 메서드는 {{jsxref("String")}} 이 문자열 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: String.valueOf()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## 구문

```js-nolint
valueOf()
```

### 매개변수

없음.

### 반환 값

주어진 {{jsxref("String")}} 객체의 원시 값을 나타내는 문자열.

## 설명

{{jsxref("String")}} 의 `valueOf()` 메서드는 {{jsxref("String")}} 객체의 원시 값을 문자열 데이터 타입으로 반환 합니다. 이 값은 {{jsxref("String.prototype.toString()")}}.과 동일합니다.

이 메서드는 보통 JavaScript에 의해 내부적으로 호출되며, 코드에서 명시적으로 사용하지는 않습니다.

## 예제

### `valueOf()` 사용하기

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
