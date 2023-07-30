---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

**`values()`** 方法返回一个新的[_迭代器_](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象。它包含按顺序插入 `Map` 对象中每个元素的 `value` 值。

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## 语法

```js-nolint
values()
```

### 返回值

一个新的 {{jsxref("Map")}} 可迭代对象。

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
