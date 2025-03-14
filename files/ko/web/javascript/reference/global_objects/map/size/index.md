---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

{{jsxref("Map")}} 인스턴스의 **`size`** 접근자 속성은 이 Map 객체의 요소 수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// Expected output: 3
```

## 설명

`size` 값은 `Map` 객체에 몇 개의 항목이 있는지 나타내는 정수입니다. `size` 설정 접근자 함수는 `undefined` 이므로
이 속성을 변경할 수 없습니다.

## 예제

### size 사용하기

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Map")}}
