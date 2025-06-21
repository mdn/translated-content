---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

{{jsxref("Map")}} 인스턴스의 **`has()`** 메서드는 주어진 키에 해당하는 요소의 존재 여부를 가리키는 불리언 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

## 구문

```js-nolint
has(key)
```

### 매개변수

- `key`
  - : `Map` 객체에서 존재를 확인할 요소의 키

### 반환 값

만약 주어진 키에 해당하는 요소가 `Map`객체에 존재한다면 `true`, 그렇지 않으면 `false`

## 예제

### has() 사용하기

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
