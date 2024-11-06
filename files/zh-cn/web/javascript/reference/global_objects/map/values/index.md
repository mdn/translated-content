---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

{{jsxref("Map")}} 实例的 **`values()`** 方法返回一个新的 [_map 迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Iteration)对象，该对象包含此 map 中每个元素的值，按插入顺序排列。

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## 语法

```js-nolint
values()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 示例

### 使用 values()

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
