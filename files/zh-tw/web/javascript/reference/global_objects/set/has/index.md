---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

**`has()`** 方法對一個指定值元素在 `Set` 物件中的存在與否回傳一個布林值。

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## 語法

```js
mySet.has(value);
```

### 參數

- `value`
  - : 要測試是否存在在 `Set` 中的值。

### 回傳值

回傳 `true` 如果給定值存在在 `Set` 物件中；反之回傳 `false`。

> **備註：** 技術上來說，`has()` 使用了 [`sameValueZero`](/zh-TW/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) 算法來判斷給定元素的存在與否。

## 範例

### 使用 `has` 方法

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // returns true
mySet.has("bar"); // returns false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // returns true
set1.has({ key1: 1 }); // returns false because they are different object references
set1.add({ key1: 1 }); // now set1 contains 2 entries
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
