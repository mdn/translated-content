---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
---

{{JSRef}}

{{jsxref("Map")}} 实例的 **`has()`** 方法返回一个布尔值，指示具有指定键的元素是否存在。

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

## 语法

```js-nolint
has(key)
```

### 参数

- `key`
  - : 用于测试 `Map` 对象中是否存在的元素的键。

### 返回值

如果 `Map` 对象中存在具有指定键的元素，则返回 `true`；否则返回 `false`。

## 示例

### 使用 has()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
