---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

**`delete()`** 메서드는 키로 `Map` 객체에서 특정 요소를 제거합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## 구문

```js-nolint
delete(key)
```

### 매개 변수

- `key`
  - : `Map` 객체에서 제거할 요소의 키

### 반환 값

`Map` 객체에서 요소가 존재하고 제거된 경우 `true`, 그렇지 않고 해당 요소가 존재하지 않으면 `false`를 반환합니다.

## 예제

### delete() 사용하기

```js
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.delete('bar')); // Returns true. Successfully removed.
console.log(myMap.has('bar')); // Returns false. The "bar" element is no longer present.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
