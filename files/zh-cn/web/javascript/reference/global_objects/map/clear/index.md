---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---

{{JSRef}}

`clear()` 方法会移除 `Map` 对象中的所有元素。

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## 语法

```js-nolint
clear()
```

### 返回值

{{jsxref("undefined")}}。

## 示例

### 使用 clear()

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
