---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
l10n:
  sourceCommit: ab97df6ce8865569507bcfc884206a1ed297a690
---

{{JSRef}}

**`values()`** 메서드는 배열의 각 아이템의 값을 순회하는 새로운 [맵 반복자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## 구문

```js-nolint
values()
```

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 예제

### values() 사용하기

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
