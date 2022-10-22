---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
---

{{JSRef}}

**`entries()`** 方法返回一个新的[_迭代器_](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)对象，其中包含 `Map` 对象中按插入顺序排列的每个元素的 `[key, value]` 对。在这种情况下，这个迭代器对象也是一个可迭代对象，因此可以使用 for-of 循环。当使用 `[Symbol.iterator]` 时，它返回一个函数，该函数在调用时返回迭代器本身。

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## 语法

```js-nolint
entries()
```

### 返回值

一个新的 {{jsxref("Map")}} 迭代器对象。

## 示例

### 使用 entries()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
