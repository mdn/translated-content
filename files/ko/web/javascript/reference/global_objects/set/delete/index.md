---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{JSRef}}

**`delete()`** 메서드는 지정한 요소를 `Set` 객체에서 제거합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## 구문

```js
mySet.delete(value);
```

### 매개변수

- `value`
  - : `Set` 객체에서 제거할 요소의 값.

### 반환 값

요소를 제거했으면 `true`, 아니면 `false`.

## 예제

### `delete()` 사용하기

```js
var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // Returns false. No "bar" element found to be deleted.
mySet.delete("foo"); // Returns true.  Successfully removed.

mySet.has("foo"); // Returns false. The "foo" element is no longer present.
```

다음 예제는 `Set`에서 객체를 제거하는 방법을 보입니다.

```js
var setObj = new Set(); // Create a New Set.

setObj.add({ x: 10, y: 20 }); // Add object in the set.

setObj.add({ x: 20, y: 30 }); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach(function (point) {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
