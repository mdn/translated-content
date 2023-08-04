---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

**`values()`** 方法回傳一個 `Iterator` 物件，包含著 `Set` 物件中所有元素，由插入順序排序。

**`keys()`** 是這個方法的替身（為了與 {{jsxref("Map")}} 物件保持相似性）；他運行的完全一模一樣，回傳 `Set` 中元素的 **values**。

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## 語法

```js
mySet.values();
```

### 回傳值

一個 `Iterator` 物件，包含著 `Set` 物件中所有元素，由插入順序排序。

## 範例

### 使用 `values()`

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set.prototype.entries()")}}
