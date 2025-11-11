---
title: Map.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{jsxref("Map")}} 实例的 **`entries()`** 方法返回一个新的 [_map 迭代器_](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)对象，该对象包含了此 map 中的每个元素的 `[key, value]` 对，按插入顺序排列。

{{InteractiveExample("JavaScript 演示：Map.prototype.entries()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.entries();

console.log(iterator.next().value);
// 预期输出：Array ["0", "foo"]

console.log(iterator.next().value);
// 预期输出：Array [1, "bar"]
```

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

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
