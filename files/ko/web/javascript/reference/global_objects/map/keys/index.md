---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
---

{{JSRef}}

**`keys()`** 메서드는 객체의 각 요소에 대한 키를 삽입한 순서대로 가지고 있는 새
[반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) 객체를 반환합니다.
특별한 경우에 이 반복자 객체도 반복 가능하므로
[for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프를 사용할 수 있습니다.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## 구문

```js-nolint
keys()
```

### 반환 값

새로운 {{jsxref("Map")}} 반복자 객체.

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
