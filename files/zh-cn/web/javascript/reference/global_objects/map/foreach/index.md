---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---

{{JSRef}}

**`forEach()`** 方法按照插入顺序依次对 `Map` 中每个键/值对执行一次给定的函数。

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : Map 中每个元素所要执行的函数。它具有如下的参数：
    - `value` {{Optional_Inline}}
      - : 每个迭代的值。
    - `key` {{Optional_Inline}}
      - : 每个迭代的键。
    - `map` {{Optional_Inline}}
      - : 正在迭代的 Map。
- `thisArg` {{Optional_Inline}}
  - : 在 `callbackFn` 执行中使用的 `this` 的值。

### 返回值

{{jsxref("undefined")}}。

## 描述

`forEach` 方法会对 map 中每个真实存在的键执行一次给定的 `callbackFn` 函数。它不会对被删除的键执行函数。然而，它会对每个值为 `undefined` 的键执行函数。

`callbackFn` 接收**三个参数**：

- 当前的 `value`
- 当前的 `key`
- 正在被遍历的 **`Map` 对象**

如果 `forEach` 中含有 `thisArg` 参数，那么每次 `callbackFn` 被调用时，都会被用作 `this` 的值。否则，`undefined` 将会被用作 `this` 的值。按照[函数观察到 `this` 的常用规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，`callbackFn` 函数最终可观察到 `this` 值。

每个值只被访问一次，除非它在 `forEach` 结束前被删除并被重新添加。`callbackFn` 不会对在被访问前就删除的元素执行。在 `forEach` 结束前被添加的元素都将会被访问。

## 示例

### 输出一个 Map 对象中的内容

以下的代码在每行中打印一个 `Map` 对象中的元素：

```js
function logMapElements(value, key, map) {
  console.log(`map.get('${key}') = ${value}`);
}
new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);
// logs:
// "map.get('foo') = 3"
// "map.get('bar') = [object Object]"
// "map.get('baz') = undefined"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
