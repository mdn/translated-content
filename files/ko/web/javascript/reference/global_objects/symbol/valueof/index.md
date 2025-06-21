---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Symbol")}} 값의 **`valueOf()`** 메서드는 심볼 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.valueOf()")}}

```js interactive-example
const symbol1 = Symbol("foo");

console.log(typeof Object(symbol1));
// Expected output: "object"

console.log(typeof Object(symbol1).valueOf());
// Expected output: "symbol"
```

## 구문

```js-nolint
valueOf()
```

### 매개변수

없음.

### 반환 값

명시된 {{jsxref("Symbol")}} 객체의 원시 값.

## 설명

{{jsxref("Symbol")}}의 `valueOf()` 메서드는 Symbol 객체의 원시 값을 Symbol 데이터 유형으로 반환합니다.

JavaScript는 `valueOf()` 메서드를 호출하여 객체를 원시 값으로 변환합니다. 사용자가 직접 `valueOf()` 메서드를 호출할 필요는 거의 없습니다. 원시 값이 예상되는 객체를 만나면 JavaScript가 자동으로 호출합니다.

## 예제

### valueOf() 사용하기

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.valueOf()")}}
