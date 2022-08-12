---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Map/values
original_slug: Web/JavaScript/Reference/Global_Objects/Map/values
browser-compat: javascript.builtins.Map.values
---
**`values()`** 方法返回一个新的 Iterator 对象。它包含按顺序插入 Map 对象中每个元素的 value 值。

## 语法

```plain
myMap.values()
```

### 返回值

一个新的 [`Map`](/zh-CN/docs/Web/JavaScript/Reference/Map) 可迭代对象。

## 例子

### `使用 values()`

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.values();

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
