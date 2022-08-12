---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Map/entries
original_slug: Web/JavaScript/Reference/Global_Objects/Map/entries
browser-compat: javascript.builtins.Map.entries
---
{{JSRef}}

**`entries()`** 方法返回一个新的包含 `[key, value]` 对的 **`Iterator`** 对象，返回的迭代器的迭代顺序与 `Map` 对象的插入顺序相同。

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## 语法

```plain
myMap.entries()
```

### 返回值

一个新的 {{jsxref("Map")}} 迭代器对象。

## 示例

### `entries()`的使用

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
