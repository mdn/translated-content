---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

{{JSRef}}

**`Object.seal()`** 메서드는 객체를 밀봉합니다. 객체를 밀봉하면 그 객체에는 새로운 속성을 추가할 수 없고, 현재 존재하는 모든 속성을 설정 불가능 상태로 만들어줍니다. 하지만 쓰기 가능한 속성의 값은 밀봉 후에도 변경할 수 있습니다(역자 주 : 바로 이 점이 `Object.freeze()`와의 차이라고 할 수 있습니다).

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## 구문

```js
Object.seal(obj);
```

### 매개변수

- `obj`
  - : 봉인할 객체.

### 반환 값

봉인한 객체.

## 설명

객체는 기본적으로 확장이 가능({{jsxref("Object.isExtensible()", "extensible", "", 1)}})합니다. 즉, 새로운 속성을 추가할 수 있습니다. 하지만 객체를 밀봉하면 그 객체에 새로운 속성을 추가할 수 없게되고, 그 객체 내에 존재하는 모든 속성이 설정 불가능(non-configurable)해 집니다. 객체를 밀봉하면 객체의 속성을 고정된 불변의 상태로 만듭니다. 모든 속성을 설정 불가능한 상태로 만드는 것은 데이터 속성(data properties)을 접근자 속성(accessor properties)으로, 또는 접근자 속성을 데이터 속성으로 변경할 수 없게 만듭니다. 하지만 객체를 완전히 얼려서 데이터 속성의 값도 변경할 수 없게 만드는 `Object.freeze()`와 달리, `Object.seal()`은 객체를 밀봉한 후에도 그 객체의 데이터 속성의 값은 여전히 변경할 수 있게 해줍니다. 다만, 밀봉한 후에는 객체를 얼리는 것과 마찬가지로 속성의 추가/삭제나 데이터 속성과 접근자 속성 사이의 전환은 암묵적이든, 아니면 {{jsxref("Strict_mode", "strict mode", "", 1)}} 에서와 같이 명시적으로 {{jsxref("Global_Objects/TypeError", "TypeError")}} 예외를 발생시키든 모두 실패로 끝납니다.

프로토타입 체인은 밀봉 전이나 후나 달라지지 않습니다. 하지만 [`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} 속성은 함께 밀봉됩니다.

## 예제

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// 새 속성이 추가되고, 기존 속성은 변경되거나 제거될 수 있음
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

var o = Object.seal(obj);

assert(o === obj);
assert(Object.isSealed(obj) === true);

// 밀봉한 객체의 속성값은 밀봉 전과 마찬가지로 변경할 수 있음
obj.foo = "quux";
obj.foo; // 'quux' 가 출력됨

// 데이터 속성과 접근자 속성 사이의 전환은 불가
Object.defineProperty(obj, "foo", {
  get: function () {
    return "g";
  },
}); // TypeError 발생

// 속성값의 변경을 제외한 어떤 변경도 적용되지 않음
obj.quaxxor = "the friendly duck"; // 에러가 나지는 않지만 속성은 추가되지 않음
delete obj.foo; // 에러가 나지는 않지만 속성이 삭제되지 않음

// strict mode 에서는 속성값의 변경을 제외한 모든 변경은 TypeError 발생
function fail() {
  "use strict";
  delete obj.foo; // TypeError 발생
  obj.sparky = "arf"; // TypeEror 발생
}
fail();

// Object.defineProperty() 메서드를 이용한 속성의 추가도 TypeError 발생
Object.defineProperty(obj, "ohai", { value: 17 }); // TypeErorr 발생
Object.defineProperty(obj, "foo", { value: "eit" }); // 속성값의 변경은 가능함
```

## 참고

ES5에서는 **`Object.seal()`** 메서드의 인자가 객체가 아닐 때(즉, 원시형일 때)는 {{jsxref("Global_Objects/TypeError", "TypeError")}}가 발생합니다. ES6에서는 원시형 인자도 밀봉된 객체라고 취급해서 {{jsxref("Global_Objects/TypeError", "TypeError")}}를 발생시키지 않고 원시형 인자를 그대로 반환합니다.

```js
> Object.seal(1)
TypeError: 1 is not an object // ES5 code

> Object.seal(1)
1                             // ES6 code
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
