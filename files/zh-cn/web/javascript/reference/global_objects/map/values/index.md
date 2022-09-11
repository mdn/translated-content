---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
original_slug: Web/JavaScript/Reference/Global_Objects/Map/values
---
**`values()`** 方法返回一个新的 `Iterator` 对象。它包含按顺序插入 `Map` 对象中每个元素的 `value` 值。

## 语法

```js
values()
```

### 返回值

## 例子

一个新的 {{jsxref("Map")}} 可迭代对象。

### 使用 values()

```js
const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
