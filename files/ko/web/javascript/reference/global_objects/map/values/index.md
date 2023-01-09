---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

**`values()`** 메서드는 `Map`객체에 삽입한 순서대로 요소의 값을 가지는 새로운
[반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## 구문

```js-nolint
values()
```

### 반환 값

새로운 {{jsxref("Map")}}의 반복자 객체

## 예제

### values() 사용하기

```js
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

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
