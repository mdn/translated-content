---
title: Object.prototype.__proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
---

{{JSRef}}{{Deprecated_header}}

> **주의:** 객체의 `[[Prototype]]`을 변경하는 것은 최신 JavaScript 엔진이 속성 접근을 최적화하는 방식의 특성상 **모든** 브라우저 및 JavaScript 엔진에서 매우 느린 작업입니다. 상속 구조를 변경하는 것이 성능에 미치는 영향은 미묘하고 광범위하며, `obj.__proto__ = ...` 문에 소요되는 시간 뿐만 아니라 `[[Prototype]]`이 변경된 객체에 접근할 수 있는 **모든** 코드들에 대해서도 영향을 줄 수 있습니다. 성능에 관심이 있다면 객체의 `[[Prototype]]` 설정을 피해야 합니다. 대신 {{JSxRef("Object.create()")}}를 사용하여 원하는 `[[Prototype]]`으로 새 객체를 만드세요.

> **주의:** `Object.prototype.__proto__`는 오늘날 대부분의 브라우저에서 지원되지만, 그 존재와 정확한 동작은 오직 웹 브라우저와의 호환성을 보장하기 위한 레거시 기능으로서 ECMAScript 2015 사양에서 비로소 표준화되었습니다. 더 나은 지원을 위해 대신 {{JSxRef("Object.getPrototypeOf()")}}를 사용하세요.

{{JSxRef("Object.prototype")}}의 `__proto__` 속성은 접근하고자 하는 객체의 내부 속성인 `[[Prototype]]`(객체 또는 {{JSxRef("Global_Objects/null", "null")}})를 노출하는 접근자 속성(getter 및 setter 함수)입니다.

`__proto__`의 사용은 논란의 여지가 있으며 권장하지 않습니다. 원래는 ECMAScript 언어 사양에 포함되지 않았음에도 불구하고 최신 브라우저에서는 이를 구현했습니다. 최근에서야 ECMAScript 2015 사양에서 웹 브라우저와의 호환성을 위해 표준화되었으므로 향후에도 지원은 될 것입니다. 그러나 `__proto__`는 더이상 사용하지 않길 바라며, 대신 {{JSxRef("Object.getPrototypeOf")}} / {{JSxRef("Reflect.getPrototypeOf")}} 및 {{JSxRef("Object.setPrototypeOf")}} / {{JSxRef("Reflect.setPrototypeOf")}}를 권장합니다(객체의 `[[Prototype]]` 설정은 성능을 고려할 경우 피해야 하는 느린 작업입니다).

객체 리터럴을 정의할 때 {{JSxRef("Object.create()")}} 대신 `__proto__` 속성을 사용함으로써 객체의 `[[Prototype]]`을 설정할 수도 있습니다. 참고: [object initializer / literal syntax](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## 설명

`__proto__` getter 함수는 객체의 내부 `[[Prototype]]` 값을 노출합니다. 객체 리터럴을 사용하여 생성된 객체의 경우 이 값은 {{JSxRef("Object.prototype")}}입니다. 배열 리터럴을 사용하여 생성된 객체의 경우 이 값은 {{JSxRef("Array.prototype")}}입니다. 함수의 경우 이 값은 {{JSxRef("Function.prototype")}}입니다. `new fun`을 사용하여 생성된 객체의 경우 (여기서 `fun`은 JavaScript에서 제공하는 내장 생성자 함수 중 하나입니다. {{JSxRef("Array")}}, {{JSxRef("Boolean")}}, {{ JSxRef("Date")}}, {{JSxRef("Number")}}, {{JSxRef("Object")}}, {{JSxRef("String")}} 등 - JavaScript가 발전함에 따라 추가된 새로운 생성자 포함) 이 값은 항상 `fun.prototype`입니다. `new fun`을 사용하여 생성된 객체의 경우 `fun`은 스크립트에 정의된 함수이며 이 값은 `fun.prototype`의 값입니다. (즉, 생성자가 다른 객체를 명시적으로 반환하지 않았거나 인스턴스가 생성된 이후에 `fun.prototype`이 다시 할당된 경우입니다.)

`__proto__` setter를 사용하면 객체의 `[[Prototype]]`이 변경될 수 있습니다. 객체는 {{JSxRef("Object.isExtensible()")}}에 따라 확장 가능해야 합니다. 그렇지 않으면 {{JSxRef("Global_Objects/TypeError", "TypeError")}}가 발생합니다. 제공된 값은 객체 또는 {{JSxRef("Global_Objects/null", "null")}}여야 합니다. 다른 값을 제공하면 아무 효과가 없습니다.

프로토타입이 상속에 사용되는 방식을 이해하려면 가이드 문서 [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)를 참조하세요.

`__proto__` 속성은 getter 및 setter 함수로 구성된 {{JSxRef("Object.prototype")}}의 간단한 접근자 속성입니다. {{JSxRef("Object.prototype")}}를 참조하는 경우 `__proto__`에 접근하면 {{JSxRef("Object.prototype")}}를 찾지만, {{JSxRef("Object.prototype")}}를 참조하지 않는 경우에는 찾을 수 없습니다. {{JSxRef("Object.prototype")}}보다 먼저 다른 `__proto__` 속성이 발견되는 경우 이 속성에 의해 {{JSxRef("Object.prototype")}}는 숨겨집니다.

## 예제

### \_\_proto\_\_ 사용하기

```js
function Circle() {}
const shape = {};
const circle = new Circle();

// Set the object prototype
// DEPRECATED. 예시용일 뿐입니다. 실제 코드에서는 이렇게 하지 마세요.
shape.__proto__ = circle;

// Get the object prototype
console.log(shape.__proto__ === Circle); // false

const ShapeA = function () {};
const ShapeB = {
  a() {
    console.log("aaa");
  },
};
console.log((ShapeA.prototype.__proto__ = ShapeB));

const shapea = new ShapeA();
shapea.a(); // aaa
console.log(ShapeA.prototype === shapea.__proto__); // true

// 또는
const ShapeC = function () {};
const ShapeD = {
  a() {
    console.log("a");
  },
};

const shapeC = new ShapeC();
shapeC.__proto__ = ShapeD;
shapeC.a(); // a
console.log(ShapeC.prototype === shapeC.__proto__); // false

// 또는
function Test() {}
Test.prototype.myname = function () {
  console.log("myname");
};

const a = new Test();
console.log(a.__proto__ === Test.prototype); // true
a.myname(); // myname

// 또는
const fn = function () {};
fn.prototype.myname = function () {
  console.log("myname");
};

var obj = {
  __proto__: fn.prototype,
};

obj.myname(); // myname
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{JSxRef("Object.prototype.isPrototypeOf()")}}
- {{JSxRef("Object.getPrototypeOf()")}}
- {{JSxRef("Object.setPrototypeOf()")}}
