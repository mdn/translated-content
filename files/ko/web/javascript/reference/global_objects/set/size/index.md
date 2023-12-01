---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
---

{{JSRef}}

**`size`** 접근자 속성은 {{jsxref("Set")}} 객체의 원소 수를 반환합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

## 설명

`size`의 값은 `Set` 객체가 가진 원소의 수를 나타내는 정수입니다. `size` 값의 설정자는 {{jsxref("undefined")}}입니다. 즉 값을 직접 바꿀 수는 없습니다.

## 예제

### `size` 사용하기

```js
var mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

mySet.size; // 3
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
