---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`clear()`** 메서드는 `Map` 객체의 모든 요소를 제거합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## 구문

```js-nolint
clear()
```

### 반환 값

{{jsxref("undefined")}}.

## 예제

### clear() 사용하기

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
