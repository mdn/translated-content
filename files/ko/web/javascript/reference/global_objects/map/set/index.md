---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

{{jsxref("Map")}} 인스턴스의 **`set()`** 메서드는 이 Map에서 명시진 키와 값을 추가하거나 갱신합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## 구문

```js-nolint
set(key, value)
```

### 매개변수

- `key`
  - : `Map` 객체에 추가되는 요소의 키. 이 키는 모든 종류의 [JavaScript 유형](/ko/docs/Web/JavaScript/Data_structures)(모든 [원시형](/ko/docs/Web/JavaScript/Data_structures#primitive_values) 혹은 모든 [Javascript 객체](/ko/docs/Web/JavaScript/Data_structures#objects))가 될 수 있습니다.
- `value`
  - : `Map` 객체에 추가되는 요소의 값. 이 값은 모든 종류의 [JavaScript 유형](/ko/docs/Web/JavaScript/Data_structures)(모든 종류의 [원시형](/ko/docs/Web/JavaScript/Data_structures#primitive_values) 혹은 모든 종류의 [Javascript 객체](/ko/docs/Web/JavaScript/Data_structures#objects))가 될 수 있습니다.

### 반환 값

`Map` 객체.

## 예제

### set() 사용하기

```js
const myMap = new Map();

// map에 새로운 요소를 추가합니다
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// map에 요소를 갱신합니다
myMap.set("bar", "baz");
```

### 연속으로 set() 사용

`set()`메서드는 같은 `Map` 객체를 반환하기 때문에 아래와 같이 연속으로 호출할 수 있습니다.

```js
// 연속적으로 새로운 요소를 추가합니다.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
