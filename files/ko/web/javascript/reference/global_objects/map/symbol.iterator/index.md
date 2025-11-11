---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
---

{{JSRef}}

`Map` 객체의 **`@@iterator`** 메서드는 [반복가능 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 구현하여
[전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)와 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프같은
반복이 필요한 대부분의 구문에서 맵을 사용할 수 있게 합니다. 맵의 키-값 쌍을 생성하는 반복자를 반환합니다.

이 속성의 초기 값은 {{jsxref("Map.prototype.entries")}} 속성의 초기 값과 동일한 함수 객체입니다.

{{InteractiveExample("JavaScript Demo: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

## 구문

```js-nolint
map[Symbol.iterator]()
```

### 반환 값

{{jsxref("Map.prototype.entries()")}}과 동일한 반환 값을 반환합니다. 이는 맵의 키-값 쌍을 생성하는
새로운 반복자 객체입니다.

## 예제

### for...of 루프를 사용한 반복

이 메서드를 직접 호출할 필요는 거의 없다는 점을 명심하시기 바랍니다. `@@iterator` 메서드의 존재는 `Map` 객체를
[반복 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)하게 만들고,
`for...of` 루프와 같은 반복 구문이 자동으로 이 메서드를 호출하여 루프를 도는 반복자를 얻기 위함입니다.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### 수동으로 반복자 돌리기

반복 프로세스를 최대로 제어하기 위해 반환된 반복자 객체의 `next()` 메서드를 수동으로 호출할 수도 있습니다.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
