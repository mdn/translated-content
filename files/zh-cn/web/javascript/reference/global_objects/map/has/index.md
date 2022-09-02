---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
original_slug: Web/JavaScript/Reference/Global_Objects/Map/has
---
{{JSRef}}

方法 **`has()`** 返回一个布尔值，用来表明 `Map` 中是否存在指定元素。

## 语法

```js
has(key)
```

### 参数

- `key`
  - : 必填。用来检测是否存在指定元素的键值。

### 返回值

- Boolean
  - : 如果指定元素存在于 `Map` 中，则返回 `true`；其他情况返回 `false`。

## 案例

### 使用 has()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar"));  // 返回 true
console.log(myMap.has("baz"));  // 返回 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
