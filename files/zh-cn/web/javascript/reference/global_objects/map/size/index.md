---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
---

{{JSRef}}

**`size`** 是可访问属性，返回 {{jsxref("Map")}} 对象的成员数量。

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## 描述

`size` 属性的值是一个整数，表示 `Map` 对象有多少个键值对。`size` 是只读属性，用 set 方法修改 `size` 返回 `undefined`，即不能改变它的值。

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
