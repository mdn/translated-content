---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
original_slug: Web/JavaScript/Reference/Global_Objects/Map/get
---
{{JSRef}}

**`get()`** 方法返回某个 `Map` 对象中的一个指定元素。

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## 语法

```plain
myMap.get(key);
```

### 参数

- `key`
  - : 要从目标 `Map` 对象中获取的元素的键。

### 返回值

返回一个 `Map` 对象中与指定键相关联的值，如果找不到这个键则返回 `undefined`。

## 示例

### 使用 get()

```js
const myMap = new Map();
myMap.set('bar', 'foo');

console.log(myMap.get('bar'));   // 返回 "foo"
console.log(myMap.get('baz'));   // 返回 undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
