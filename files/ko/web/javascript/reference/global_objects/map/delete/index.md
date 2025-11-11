---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

{{jsxref("Map")}} 인스턴스의 **`delete()`** 메서드는 이 Map 에서 특정 요소를 제거합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## 구문

```js-nolint
delete(key)
```

### 매개변수

- `key`
  - : `Map` 객체에서 제거할 요소의 키

### 반환 값

`Map` 객체에서 요소가 존재하고 제거된 경우 `true`, 그렇지 않고 해당 요소가 존재하지 않으면 `false`를 반환합니다.

## 예제

### delete() 사용하기

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // true를 반환합니다. 성공적으로 제거되었습니다.
console.log(myMap.has("bar")); // false를 반환합니다. "bar" 요소는 더 이상 존재하지 않습니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
