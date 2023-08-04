---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{JSRef}}

**`delete()`** 方法會一個 `Set` 物件中移除指定元素。

{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## 語法

```js
mySet.delete(value);
```

### 參數'

- `value`
  - : 要從 `Set` 物件中移除的值。

### 回傳值

`true` 如果成功從 `Set` 物件中移除；反之 `false`。

## 範例

### 使用 `delete` 方法

```js
var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // Returns false. No "bar" element found to be deleted.
mySet.delete("foo"); // Returns true.  Successfully removed.

mySet.has("foo"); // Returns false. The "foo" element is no longer present.
```

下方展示了如何從一個 Set 中移除物件。

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

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
