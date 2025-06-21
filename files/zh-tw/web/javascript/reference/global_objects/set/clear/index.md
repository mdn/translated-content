---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

**`clear()`** 方法會從一個 `Set` 物件中移除其所有元素。

{{InteractiveExample("JavaScript Demo: Set.prototype.clear()")}}

```js interactive-example
const set1 = new Set();
set1.add(1);
set1.add("foo");

console.log(set1.size);
// Expected output: 2

set1.clear();

console.log(set1.size);
// Expected output: 0
```

## 語法

```js
mySet.clear();
```

### 回傳值

{{jsxref("undefined")}}。

## 範例

### 使用 `clear` 方法

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size; // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size; // 0
mySet.has("bar"); // false
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
