---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/clear
original_slug: Web/JavaScript/Reference/Global_Objects/Map/clear
browser-compat: javascript.builtins.Map.clear
---
{{JSRef}}

`clear()` 方法会移除 Map 对象中的所有元素。

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## 语法

```plain
myMap.clear();
```

### 返回值

{{jsxref("undefined")}}.

## 示例

### 调用`clear`方法

```js
var myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

myMap.size;       // 2
myMap.has("bar"); // true

myMap.clear();

myMap.size;       // 0
myMap.has("bar")  // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map")}}
