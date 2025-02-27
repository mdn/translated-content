---
title: "Function: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

{{jsxref("Function")}} 인스턴스의 **`name`** 속성은 함수가 생성될 때 지정된 대로 함수의 이름을 나타내거나 익명으로 생성된 함수의 경우 `anonymous` 또는 `''`(빈 문자열)일 수 있습니다.

{{InteractiveExample("JavaScript Demo: Function.name")}}

```js interactive-example
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "func1"

console.log(object.func2.name);
// Expected output: "func2"
```

## 값

문자열.

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> 비표준, ES6 이전 구현에서는 `configurable` 속성 또한 `false` 였습니다.

## 설명

`name` 속성은 함수 이름 또는 (ES6 구현 이전) 익명(anonymous) 함수에 대해서는 빈 문자열을 반환합니다.

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

## 같이 보기

- A polyfill for functions' `.name` property is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
