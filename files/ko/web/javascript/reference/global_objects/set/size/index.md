---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`size`** 접근자 속성은 이 집합의 (고유한) 요소의 수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// Expected output: 3
```

## 설명

`size`의 값은 `Set` 객체가 얼마나 많은 개체를 가졌는지 나타내는 정수 값입니다.
`size`의 설정자는 `undefined`입니다. 즉, 이 속성을 변경할 수 없습니다.

## 예제

### `size` 사용하기

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
