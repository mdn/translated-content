---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`size`** 접근자 속성은 {{jsxref("Map")}} 객체의 요소 수를 반환합니다.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

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
