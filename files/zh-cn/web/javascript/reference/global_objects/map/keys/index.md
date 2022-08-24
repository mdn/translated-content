---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
original_slug: Web/JavaScript/Reference/Global_Objects/Map/keys
---
{{JSRef}}

**`keys()`** 返回一个引用的 **`Iterator`** 对象。它包含按照顺序插入 `Map` 对象中每个元素的 key 值。

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## 语法

```js
keys()
```

### 返回值

一个存在引用关系的 {{jsxref("Map")}} iterator 对象。

## 例子

### 使用 `keys()`

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
