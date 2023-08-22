---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Object.keys()`** 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과
동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## 구문

```js-nolint
Object.keys(obj)
```

### 매개변수

- `obj`
  - : 객체

### 반환 값

주어진 객체 자체의 열거 가능한 문자열로된 속성 키를 나타내는 문자열 배열.

## 설명

`Object.keys()`는 `object` 에서 직접 찾은 열거 가능한 문자열 키 속성 이름에 해당하는 문자열을 요소로 하는
배열을 반환합니다. 이는 `for...in` 루프가 프로토타입 체인의 속성도 열거한다는 점을 제외하면
{{jsxref("Statements/for...in", "for...in")}} 루프를 사용하여 반복하는 것과 동일합니다.
`Object.keys()`가 반환하는 배열의 순서는 {{jsxref("Statements/for...in", "for...in")}}
루프에서 제공하는 것과 동일합니다.

속성 값이 필요한 경우 {{jsxref("Object.values()")}}를 대신 사용하시기 바랍니다.
속성 키와 값이 모두 필요한 경우 {{jsxref("Object.entries()")}}를 대신 사용하시기 바랍니다.

## 예제

### Object.keys() 사용하기

```js
// 단순 배열
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 배열형 객체
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 키와 순서가 무작위인 유사 배열 객체
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo 는 열거할 수 없는 속성입니다.
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

만약 열거할 수 없는 속성도 포함한 문자열이 키인 객체 자체 속성을 원한다면,
{{jsxref("Object.getOwnPropertyNames()")}}을 참고하시기 바랍니다.

### 원시형애서 Object.keys() 사용하기

객체가 아닌 인수는 [강제로 객체로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)됩니다.
문자열만 자체 열거 가능한 속성을 가질 수 있으며, 다른 모든 원시형은 빈 배열을 반환합니다.

```js
// 문자열은 열거가능한 자체 속성처럼 인덱스를 가지고 있습니다.
console.log(Object.keys("foo")); // ['0', '1', '2']

// 다른 원시형은 자체 속성이 없숩니다.
console.log(Object.keys(100)); // []
```

> **참고:** ES5에서는 비객체를 `Object.keys()`에 전달하면 {{jsxref("TypeError")}}가 발생합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Object.keys` 의 폴리필 코드는 아래에서 확인할 수 있습니다. [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
