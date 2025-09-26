---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
---

{{JSRef}}

{{jsxref("Map")}} 实例的 **`size`** 访问器属性返回此 map 中元素的数量。

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// Expected output: 3
```

## 描述

`size` 的值是一个整数，表示 `Map` 对象有多少个键值对。`size` 的设置访问器函数是 `undefined`；你无法更改此属性的值。

## 示例

### 使用 size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
