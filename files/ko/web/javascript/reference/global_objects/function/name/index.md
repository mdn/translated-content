---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

**`function.name`** 속성(property)은 함수 이름을 반환합니다.

{{js_property_attributes(0,0,1)}}

비표준, ES6 이전 구현에서는 설정가능(`configurable`) attribute도 `false`였음을 주의하세요.

## 설명

`name` 속성은 함수 이름 또는 (ES6 구현 이전) 익명(anonymous) 함수에 대해서는 빈 문자열을 반환합니다:

```js
function doSomething() {}

console.log(doSomething.name); // logs "doSomething"
```

`new Function(...)` 또는 그냥 `Function(...)` 구문으로 생성된 함수는 `name` 속성을 빈 문자열로 설정합니다. 다음 예에서는 익명 함수가 생성되므로 `name`은 빈 문자열을 반환합니다:

```js
var f = function () {};
var object = {
  someMethod: function () {},
};

console.log(f.name == ""); // true
console.log(object.someMethod.name == ""); // 역시 true
```

ES6 함수를 구현한 브라우저는 익명 함수 이름을 그 구문상 위치로부터 추측할 수 있습니다. 예를 들어:

```js
var f = function () {};
console.log(f.name); // "f"
```

{{jsxref("Operators/Function", "function 식", "", 1)}}에서 이름으로 함수를 정의할 수 있습니다:

```js
var object = {
  someMethod: function object_someMethod() {},
};
console.log(object.someMethod.name); // logs "object_someMethod"

try {
  object_someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: object_someMethod가 정의되지 않음
```

함수 이름은 바꿀 수 없습니다, 이 속성은 읽기 전용입니다:

```js
var object = {
  // 익명
  someMethod: function () {},
};

object.someMethod.name = "someMethod";
console.log(object.someMethod.name); // 빈 문자열, someMethod는 익명
```

그러나 바꾸려면, {{jsxref("Object.defineProperty()")}}를 사용할 수 있습니다.

## 예

객체의 'class'를 확인하기 위해 `obj.constructor.name`을 사용할 수 있습니다:

```js
function a() {}

var b = new a();

console.log(b.constructor.name); // logs "a"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
