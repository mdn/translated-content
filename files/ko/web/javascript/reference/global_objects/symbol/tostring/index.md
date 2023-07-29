---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`toString()`** 메서드는 지정된 심볼 값을 나타내는 문자열을 반환합니다.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## 구문

```js-nolint
toString()
```

### 반환 값

지정된 심볼 값을 나타내는 문자열.

## 설명

{{jsxref("Symbol")}} 객체는 {{jsxref("Object")}}의 `toString` 메서드를 재정의하며,
{{jsxref("Object.prototype.toString()")}}을 상속하지 않습니다.
`Symbol` 값의 경우 `toString` 메서드는 `"Symbol(description)"` 형식의 설명 문자열을 반환하며,
여기서 `description`은 심볼의 [설명](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)입니다.

`toString()` 메서드는 `this` 값이 `Symbol` 원시 값 또는 래퍼 객체여야 합니다. 이 외의 `this` 값에 대해서는 심볼 값으로 강제 변환하지 않고 {{jsxref("TypeError")}}를 던집니다.

`Symbol`에는 [`[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) 메서드가 있기 때문에 `Symbol` 객체를 [문자열로 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)할 때 이 메서드가 항상 `toString()`보다 우선합니다.
그러나 `Symbol.prototype[@@toPrimitive]()`는 심볼 원시 값을 반환하고 심볼 원시 값은 문자열로 암시적으로 변환될 때 {{jsxref("TypeError")}}가 발생하기 때문에 언어에서 `toString()` 메서드는 절대 암시적으로 호출되지 않습니다.
심볼을 문자열화하려면 해당 심볼의 `toString()` 메서드를 명시적으로 호출하거나 [`String()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol) 함수를 사용해야 합니다.

## 예제

### toString() 사용하기

```js
Symbol("desc").toString(); // "Symbol(desc)"

// 잘 알려진 심볼
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// 글로벌 심볼
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### 암시적 toString() 호출

JavaScript가 심볼 래퍼 객체에서 [`[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive) 대신 `toString()`을 암시적으로 호출하도록 하는 유일한 방법은 `@@toPrimitive` 메서드를 먼저 [삭제](/ko/docs/Web/JavaScript/Reference/Operators/delete) 처리하는 방법 뿐 입니다.

> **주의:** 실제로 이 작업을 수행하지 마세요. 정확히 무엇을 하고 있는지 알지 못하면 기본 제공 객체를 변경하지 마세요.

```js
delete Symbol.prototype[Symbol.toPrimitive];
console.log(`${Object(Symbol("foo"))}`); // "Symbol(foo)"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.prototype.toString()")}}
