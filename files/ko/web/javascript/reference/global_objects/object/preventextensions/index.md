---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

**`Object.preventExtensions()`** 메서드는 새로운 속성이 이제까지 객체에 추가되는 것을 방지합니다 (즉 객체의 장래 확장을 막습니다).

{{EmbedInteractiveExample("pages/js/object-preventextensions.html")}}

## 구문

```js
Object.preventExtensions(obj);
```

### 매개변수

- `obj`
  - : 확장 불가로 해야 할 객체.

## 설명

객체는 새로운 속성이 추가될 수 있는 경우 확장 가능입니다. `Object.preventExtensions()`는 객체를 이제 확장 불가로 표시하므로 표시된 그 시점에 있던 것 이외의 속성을 갖지 않습니다. 보통 확장 불가인 객체의 속성은 여전히 _삭제될_ 수 있음을 주의하세요. 확장 불가인 객체에 새로운 속성을 추가하려는 시도는 실패합니다, 조용히든 {{jsxref("TypeError")}}가 발생해서든 (가장 흔하나 오로지 {{jsxref("Functions_and_function_scope/Strict_mode", "엄격 모드", "", 1)}}인 경우에서만은 아님).

`Object.preventExtensions()`는 자신의 속성 추가만을 방지합니다. 속성은 여전히 객체의 프로토타입에 추가될 수 있습니다. 그러나, 객체에 `Object.preventExtensions()`를 호출하면 그 [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} 속성의 확장 또한 막습니다.

ECMAScript 5에서 확장 가능 객체를 확장 불가로 바꾸는 법이 있더라도, 반대로 하는 법은 없습니다.

## 예제

```js
// Object.preventExtensions는 확장 불가된 객체를 반환합니다.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// 객체는 기본으로 확장 가능입니다.
var empty = {};
Object.isExtensible(empty); // === true

// ...하지만 바뀔 수 있습니다.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty는 확장 불가 객체에 새 속성을 추가할 때 오류가 발생합니다.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // TypeError 발생

// 엄격 모드에서, 확장 불가 객체에 새 속성을 추가하려는 시도는 TypeError가 발생합니다.
function fail() {
  "use strict";
  nonExtensible.newProperty = "FAIL"; // TypeError 발생
}
fail();

// 확장 (__proto__(는 사라집니다. 대신 Object.getPrototypeOf를 쓰세요)를
// 지원하는 엔진에서만 동작합니다):
// 확장 불가 객체의 프로토타입은 불변합니다.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // TypeError 발생
```

## 참고

ES5에서, 이 메서드의 인수가 비객체(원시형)인 경우, 그러면 {{jsxref("TypeError")}}가 발생합니다. ES6에서, 비객체 인수는 마치 확장 불가인 보통 객체였던 것처럼 취급됩니다, 그저 자신을 반환하는.

```js
Object.preventExtensions(1);
// TypeError: 1은 객체가 아닙니다 (ES5 코드)

Object.preventExtensions(1);
// 1                            (ES6 코드)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
