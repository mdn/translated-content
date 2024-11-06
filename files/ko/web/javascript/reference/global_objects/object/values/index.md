---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

{{JSRef}}

**`Object.values()`** 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 이 배열은 {{jsxref("Statements/for...in", "for...in")}} 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntax

```js
Object.values(obj);
```

### Parameters

- `obj`
  - : 배열로 변환할 열거 가능한 속성을 가지는 객체

### Return value

전달된 객체의 속성 값들을 포함하는 배열

## Description

`Object.values()` 는 파라미터로 전달된 객체가 가지는 열거 가능한 속성의 값들로 구성된 배열을 반환합니다. 배열의 값들이 순서는 오브젝트의 속성을 for in 구문등으로 반복한 결과와 동일합니다. (참고로 for in 구문은 순서를 보장하지 않습니다)

## Examples

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 유사 배열 (숫자를 속성으로 사용하는 객체)
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// 유사 배열의 경의 속성으로 사용한 숫자의 크기 순으로 정렬되어 반환됩니다.
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo는 열거 가능한 속성이 아니라서 배열에 포함되지 않습니다.
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// 객체가 아닌 경우에는 객체로 강제로 변환되어 적용됩니다.
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

## Polyfill

`Object.values` 메소드는 구형 브라우저에서 지원하지 않습니다. 구형 브라우저와의 호환성을 고려하기 위해 폴리필을 찾아 볼 수 있습니다. [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) 혹은 [es-shims/Object.values](https://github.com/es-shims/Object.values) 를 참조해보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
