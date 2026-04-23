---
title: Symbol() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: 6a557b06944a0a6eaa1e9e352fc58b973b2e03a1
---

{{JSRef}}

**`Symbol()`** 함수는 타입 Symbol의 원시 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Symbol - Constructor", "taller")}}

```js interactive-example
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// Expected output: "symbol"

console.log(symbol2 === 42);
// Expected output: false

console.log(symbol3.toString());
// Expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// Expected output: false
```

## 구문

```js-nolint
Symbol()
Symbol(description)
```

> [!NOTE]
> `Symbol()`은 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)를 사용하지 않고 호출해야 합니다.
> `new`와 함께 생성하려하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `description` {{optional_inline}}
  - : 문자열. 디버깅에는 사용할 수 있지만 심볼 자체에 접근하기 위해 사용할 수 없는, 심볼에 대한 설명입니다.

## 예제

### Symbol 생성하기

새로운 원시 심볼을 만들기 위해서는 아래와 같이 설명으로 사용할 선택적 문자열과 함께 `Symbol()`을 사용하면 됩니다.

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

위의 코드는 세 개의 새로운 심볼을 생성합니다. `Symbol("foo")`는 문자열 `"foo"`를 강제로 심볼로 만들지 않습니다.
매번 새로운 심볼을 생성합니다.

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

{{jsxref("Operators/new", "new")}} 연산자를 사용한 아래 구문은 {{jsxref("TypeError")}}를 발생시킵니다.

```js example-bad
const sym = new Symbol(); // TypeError
```

이는 작성자가 새 심볼 값 대신 명시적인 `Symbol` 래퍼 개체를 만드는 것을 방지하며 원시 데이터 타입을 중심으로 명시적인 래퍼 개체를
만드는 것이 일반적으로 가능하기 때문에 놀랄 수 있습니다(예: `new Boolean`, `new String` and `new Number`).

정말로 `Symbol` 래퍼 객체를 생성하려면 `Object()` 함수를 사용할 수 있습니다.

```js
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
