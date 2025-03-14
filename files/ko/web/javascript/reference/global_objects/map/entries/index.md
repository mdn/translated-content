---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Map")}} 객체의 **`entries()`** 메서드는 이 Map의 각 요소의 `[key, value]`쌍을 삽입 순서대로 가지는 새로운 [맵 반복자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.entries()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.entries();

console.log(iterator1.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator1.next().value);
// Expected output: Array [1, "bar"]
```

## 구문

```js-nolint
entries()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 예제

### entries() 사용하기

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
