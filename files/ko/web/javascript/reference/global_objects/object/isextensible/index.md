---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef}}

**`Object.isExtensible()`** 메서드는 객체가 확장 가능한지(객체에 새 속성을 추가할 수 있는지 여부)를 결정합니다.

{{EmbedInteractiveExample("pages/js/object-isextensible.html")}}

## 구문

```js
Object.isExtensible(obj);
```

### 매개변수

- `obj`
  - : 판별할 객체.

### 반환 값

객체의 확장 가능 여부를 나타내는 {{jsxref("Boolean")}}.

## 설명

객체는 기본으로 확장 가능입니다: 새로운 속성이 추가될 수 있고 ([`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} 속성을 지원하는 엔진에서는) 수정될 수 있습니다. 객체는 {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} 또는 {{jsxref("Object.freeze()")}}를 사용하여 확장 불가로 표시될 수 있습니다.

## 예제

```js
// 새로운 객체는 확장 가능입니다.
var empty = {};
Object.isExtensible(empty); // === true

// ...하지만 변경될 수 있습니다.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 봉인된 객체는 정의에 의해 확장 불가입니다.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 동결된 객체 또한 정의에 의해 확장 불가입니다.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## 주의

ES5에서, 이 메서드의 인수가 비객체(원시형)인 경우, 그러면 {{jsxref("TypeError")}}가 발생합니다. ES6에서, 비객체 인수는 확장 불가인 보통 객체처럼 다뤄집니다, 그저 `false`를 반환하는.

```js
Object.isExtensible(1);
// TypeError: 1은 객체가 아닙니다 (ES5 코드)

Object.isExtensible(1);
// false                         (ES6 코드)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
