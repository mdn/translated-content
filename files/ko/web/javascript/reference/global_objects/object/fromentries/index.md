---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

**`Object.fromEntries()`** 메서드는 키값 쌍의 목록을 객체로 바꿉니다.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## 구문

```js
Object.fromEntries(iterable);
```

### 매개변수

- `iterable`
  - : 반복 가능한 객체. 즉, {{jsxref("Array")}}, {{jsxref("Map")}} 또는 [반복 규약](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 구현한 기타 객체.

### 반환 값

속성의 키와 값을 반복 가능한 객체에서 가져온 새로운 객체.

## 설명

`Object.fromEntries()` 메서드는 키값 쌍 목록을 받고, 그 목록을 사용해 속성을 부여한 새로운 객체를 반환합니다. `iterable` 인자는 `@@iterator` 메서드를 구현하여 반복기 객체를 반환해야 하고, 그 반복기는 또 배열 형태의 객체로 요소 2개를 반환해야 합니다. 반환된 요소 중 첫 번째는 생성할 객체의 속성 키로, 두 번째는 속성 값으로 사용합니다.

`Object.fromEntries()`는{{jsxref("Object.entries()")}}의 역을 수행합니다.

## 예제

### `Map`에서 `Object`로

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### `Array`에서 `Object`로

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### 객체 변환

`Object.fromEntries()`와 그 역인 {{jsxref("Object.entries()")}}, 그리고 [배열 변형 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#메서드_2)를 통해 객체를 변환할 수 있습니다.

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
