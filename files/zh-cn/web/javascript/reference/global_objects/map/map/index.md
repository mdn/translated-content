---
title: Map() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
---

{{JSRef}}

**`Map()`** 构造函数创建 {{jsxref("Map")}} 对象。

## 语法

```js-nolint
new Map()
new Map(iterable)
```

> **备注：** `Map()` 只能用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 构造。尝试不使用 `new` 调用它会抛出 {{jsxref("TypeError")}}。

### 参数

- `iterable` {{optional_inline}}
  - : 一个元素是键值对的{{jsxref("Array", "数组", "", 1)}}或其他[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)对象。（例如，包含两个元素的数组，如 `[[ 1, 'one' ],[ 2, 'two' ]]`。）每个键值对都被添加到新的 `Map` 中。

## 示例

### 创建一个新的 Map

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Map` 的 polyfill](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
