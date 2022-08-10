---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/get
original_slug: Web/JavaScript/Reference/Global_Objects/Map/get
browser-compat: javascript.builtins.Map.get
---
{{JSRef}}

**`get()`** 方法返回某个 `Map` 对象中的一个指定元素。

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## 语法

```plain
myMap.get(key);
```

### 参数

- key
  - : 必须参数，也是它唯一的参数，要从目标 `Map` 对象中获取的元素的键。

### 返回值

返回一个 `Map` 对象中与指定键相关联的值，如果找不到这个键则返回 `undefined`。

## 示例

### 使用 `get` 方法

```js
var myMap = new Map();
myMap.set("bar", "foo");

myMap.get("bar");  // 返回 "foo"
myMap.get("baz");  // 返回 undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
