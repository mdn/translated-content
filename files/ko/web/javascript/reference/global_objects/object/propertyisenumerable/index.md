---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

**`propertyIsEnumerable()`** 메서드는 특정 속성이 열거가능한지 여부를 나타내는 불리언 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html")}}

## 구문

```js
obj.propertyIsEnumerable(prop);
```

### 매개변수

- `prop`
  - : 테스트 할 속성의 이름.

### 반환 값

특정 속성이 열거가능한지 여부를 나타내는 {{jsxref("Boolean")}}.

## 설명

모든 객체는 `propertyIsEnumerable` 메소드를 가지고 있습니다. 이 메소드는 프로토타입 체인을 통해 상속된 특성을 제외하고 개체에 지정된 속성을 {{jsxref("Statements/for...in", "for...in")}} 루프로 열거할 수 있는지 여부를 확인할 수 있습니다. 개체에 지정된 속성이 없으면 이 메소드는 `false`를 반환합니다.

## 예제

### A basic use of `propertyIsEnumerable`

The following example shows the use of `propertyIsEnumerable` on objects and arrays:

```js
var o = {};
var a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // returns true
a.propertyIsEnumerable(0); // returns true
```

### User-defined versus built-in objects

The following example demonstrates the enumerability of user-defined versus built-in properties:

```js
var a = ["is enumerable"];

a.propertyIsEnumerable(0); // returns true
a.propertyIsEnumerable("length"); // returns false

Math.propertyIsEnumerable("random"); // returns false
this.propertyIsEnumerable("Math"); // returns false
```

### Direct versus inherited properties

```js
var a = [];
a.propertyIsEnumerable("constructor"); // returns false

function firstConstructor() {
  this.property = "is not enumerable";
}

firstConstructor.prototype.firstMethod = function () {};

function secondConstructor() {
  this.method = function method() {
    return "is enumerable";
  };
}

secondConstructor.prototype = new firstConstructor();
secondConstructor.prototype.constructor = secondConstructor;

var o = new secondConstructor();
o.arbitraryProperty = "is enumerable";

o.propertyIsEnumerable("arbitraryProperty"); // returns true
o.propertyIsEnumerable("method"); // returns true
o.propertyIsEnumerable("property"); // returns false

o.property = "is enumerable";

o.propertyIsEnumerable("property"); // returns true

// These return false as they are on the prototype which
// propertyIsEnumerable does not consider (even though the last two
// are iteratable with for-in)
o.propertyIsEnumerable("prototype"); // returns false (as of JS 1.8.1/FF3.6)
o.propertyIsEnumerable("constructor"); // returns false
o.propertyIsEnumerable("firstMethod"); // returns false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Enumerability and ownership of properties](/ko/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
