---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`delete()`** 메서드는 지정한 요소가 Set 안에 있다면 Set에서 제거합니다.

{{InteractiveExample("JavaScript Demo: Set.prototype.delete()")}}

```js interactive-example
const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

console.log(set1.size);
// Expected output: 1
```

## 구문

```js-nolint
setInstance.delete(value)
```

### 매개변수

- `value`
  - : `Set` 객체에서 제거할 요소의 값.

### 반환 값

`value`가 이미 `Set`에 있으면 `true`,
그렇지 않으면 `false`.

## 예제

### `delete()` 사용하기

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; 삭제하기 위한 "bar" 요소가 없습니다.
console.log(mySet.delete("foo")); // true; 성공적으로 삭제되었습니다.

console.log(mySet.has("foo")); // false; "foo" 요소가 더 이상 존재하지 않습니다.
```

### Set 에서 객체를 제거하기

객체는 참조로 비교되기 때문에 원본 객체에 대한 참조가 없는 경우 개별 속성을 확인하여 삭제해야 합니다.

```js
const setObj = new Set(); // 새로운 Set을 생성합니다.

setObj.add({ x: 10, y: 20 }); // Set에 새로운 객체를 추가합니다.

setObj.add({ x: 20, y: 30 }); // Set에 새로운 객체를 추가합니다.

// `x > 10`인 point 를 삭제합니다.
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
