---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

**`add()`** 메서드는 `Set` 개체의 맨 뒤에 주어진 `value`의 새 요소를 추가합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

## 구문

```js
mySet.add(value);
```

### 매개변수

- `value`
  - : `Set` 객체에 추가할 요소의 값.

### 반환 값

`Set` 객체.

## 예제

### `add` 메서드 사용하기

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("어떤 문자열"); // 계속 붙일 수 있음

console.log(mySet);
// Set [1, 5, "어떤 문자열"]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
