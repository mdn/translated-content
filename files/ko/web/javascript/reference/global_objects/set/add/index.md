---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`add()`** 메서드는 같은 값인 요소가 이 Set에 없다면 지정된 값과 함께 새로운 요소를 이 Set에 삽입합니다.

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## 구문

```js-nolint
add(value)
```

### 매개변수

- `value`
  - : `Set` 객체에 추가할 요소의 값.

### 반환 값

추가된 값이 포함된 `Set` 객체.

## 예제

### `add` 메서드 사용하기

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 계속 붙일 수 있음

console.log(mySet);
// Set [1, 5, "some text"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
