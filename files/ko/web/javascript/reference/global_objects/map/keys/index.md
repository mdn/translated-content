---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Map")}} 인스턴스의 **`keys()`** 메서드는 맵에서 각 요소의 키를 삽입 순서대로 가지는 새로운 [맵 반복자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.keys()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// Expected output: "0"

console.log(iterator1.next().value);
// Expected output: 1
```

## 구문

```js-nolint
keys()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 예제

### keys() 사용하기

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
