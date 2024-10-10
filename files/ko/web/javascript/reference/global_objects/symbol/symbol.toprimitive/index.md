---
title: Symbol.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
original_slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.toPrimitive]()`** 메서드는 Symbol 객체를 원시 값으로 변환합니다.

## 구문

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### 매개변수

- `hint`
  - : 반환할 원시 값을 가리키는 문자열 값입니다. 값은 무시합니다.

### 반환 값

명시된 {{jsxref("Symbol")}} 객체의 원시 값입니다.

## 설명

{{jsxref("Symbol")}}의 `[Symbol.toPrimitive]()` 메서드는 Symbol 객체의
원시 값을 Symbol 데이터 유형으로 반환합니다.
`hint` 인자는 사용되지 않습니다.

JavaScript는 객체를 원시 값으로 변환하기 위해 `[Symbol.toPrimitive]()` 메서드를 호출합니다.
여러분은 `[Symbol.toPrimitive]()` 메서드를 직접 호출할 필요가 거의 없습니다.
원시 값이 예상되는 객체를 만나면 JavaScript가
자동으로 호출합니다.

## 예제

### `[Symbol.toPrimitive]()` 사용하기

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Symbol.toPrimitive")}}
