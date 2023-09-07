---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: ab97df6ce8865569507bcfc884206a1ed297a690
---

{{JSRef}}

**`entries()`** 메서드는 새 [반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)
객체를 반환합니다. 이 객체에는 `Map` 객체의 각 요소에 대한 `[key, value]` 쌍이 삽입 순서대로 포함됩니다.
이 특별한 경우, 이 반복자 객체도 반복이 가능하므로 for-of 루프를 사용할 수 있습니다. `[Symbol.iterator]` 프로토콜이
사용될 경우, 호출될 때 반복자 자체를 반환하는 함수를 반환합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## 구문

```js-nolint
entries()
```

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
