---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: 4776b8fddca8ed71adc9c0f12712820db8d02371
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`clear()`** 메서드는 이 Set의 모든 요소를 삭제합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 구문

```js-nolint
clear()
```

### 매개변수

없음.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

### `clear()` 사용하기

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
