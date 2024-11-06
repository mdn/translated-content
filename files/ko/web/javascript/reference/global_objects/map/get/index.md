---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`get()`** 메서드는 `Map` 객체에서 특정 요소를 반환합니다. 만약 주어진 키와 관련된 값이 객체라면 해당 객체에 대한
참조만 가져오고, 해당 객체에 대한 모든 변경은 `Map` 내에서 효율적으로 수정됩니다.

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## 구문

```js-nolint
get(key)
```

### 매개변수

- `key`
  - : `Map` 객체에서 반환받을 요소의 키

### 반환 값

명시된 키와 연관된 요소 혹은 `Map` 객체에서 해당 키를 찾을 수 없는 경우 {{jsxref("undefined")}}.

## 예제

### get() 사용하기

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // "foo" 를 반환합니다.
console.log(myMap.get("baz")); // undefined 을 반환합니다.
```

### get()을 사용하여 객체에 대한 참조 검색

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

맵이 원본 객체에 대한 참조만 보유하고 있다는 것은 해당 객체가 가비지 콜렉션되지 않을 수 있으며 이로 인해 예측하지 못한
메모리 문제가 일어날 수 있음을 의미합니다. 만약 맵에 저장되어 있는 객체가 원본 객체와 동일한 수명을 가지게 하려면
{{jsxref("WeakMap")}}을 고려하시기 바랍니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
