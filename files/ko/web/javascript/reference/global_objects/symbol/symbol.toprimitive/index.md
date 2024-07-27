---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
original_slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`[@@toPrimitive]()`** 메서드는 Symbol 객체를 원시 값으로 변환합니다.

## 구문

```js-nolint
Symbol()[Symbol.toPrimitive](hint)
```

### 반환 값

명시된 {{jsxref("Symbol")}} 객체의 원시 값입니다.

## 설명

{{jsxref("Symbol")}}의 `[@@toPrimitive]()` 메서드는 Symbol 객체의 원시 값을
Symbol 데이터 유형으로 반환합니다. `hint` 인자는 사용되지 않습니다.

JavaScript는 객체를 원시 값으로 변환하기 위해 `[@@toPrimitive]()` 메서드를 호출합니다. 여러분은
`[@@toPrimitive]()` 메서드를 직접 호출할 필요가 거의 없습니다. 원시 값이 예상되는 객체를 만나면 JavaScript가
자동으로 호출합니다.

## 예제

### @@toPrimitive 사용하기

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
