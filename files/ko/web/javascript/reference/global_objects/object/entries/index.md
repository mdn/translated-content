---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}}

**`Object.entries()`** 메서드는 {{jsxref("Statements/for...in", "for...in")}}와 같은 순서로 주어진 객체 자체의 enumerable 속성 `[key, value]` 쌍의 배열을 반환합니다. (`for-in` 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).

**`Object.entries()`** 에 의해 반환된 배열(array)의 순서는 객체가 정의된 방법과 관련이 없습니다. 배열 순서가 쓸 곳이 있다면, 다음과 같이 정렬을 먼저 하시는 것이 좋습니다 `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

{{EmbedInteractiveExample("pages/js/object-entries.html", "taller")}}

## Syntax

```js
Object.entries(obj);
```

### Parameters

- `obj`
  - : 객체 자체의 열거 가능한 문자열 키를 가진 속성 `[key, value]` 쌍이 반환되는 객체입니다.

### Return value

지정된 객체 자체의 열거 가능한 문자속성 `[key, value]` 쌍의 배열입니다.

## Description

`Object.entries()`는 `object`에 직접있는 enumerable 속성 `[key, value]` 쌍에 해당하는 배열을 반환합니다. 속성의 순서는 개체의 속성 값을 수동으로 반복하여 주어진 순서와 동일합니다.

## Polyfill

기본적으로 지원하지 않는 이전 환경에서 호환 가능한 `Object.entries` 지원을 추가하려면 [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries)에 Object.entries의 데모 구현을 찾을 수 있습니다 (IE에 대한 지원이 필요하지 않은 경우) , [es-shims/Object.entries](https://github.com/es-shims/Object.entries) 저장소에있는 polyfill을 사용하거나 아래에 나열된 polyfill을 간단하게 배치 할 수 있습니다.

```js
if (!Object.entries)
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
```

For the above polyfill code snippet, if you need support for IE < 9, then you will also need an Object.keys polyfill (such as the one found on the {{jsxref("Object.keys")}} page).

위의 polyfill 코드 스 니펫의 경우 Internet Explorer (9버전 이전)를 지원해야하는 경우 Object.keys polyfill ( {{jsxref("Object.keys")}} 페이지에 있는 것과 같은)도 필요합니다.

## Examples

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
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
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// returns an empty array for any primitive type, since primitives have no own properties
console.log(Object.entries(100)); // [ ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Converting an `Object` to a `Map`

{{jsxref("Map", "new Map()")}} 생성자는 반복 가능한 항목을 허용합니다. `Object.entries`를 사용하면 {{jsxref("Object")}}에서 {{jsxref("Map")}}로 쉽게 변환 할 수 있습니다.

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

### Iterating through an `Object`

[Array Destructuring](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)을 사용하면 객체를 쉽게 반복 할 수 있습니다.

```js
const obj = { foo: "bar", baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
