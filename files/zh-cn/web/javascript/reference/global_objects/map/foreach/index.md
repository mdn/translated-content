---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---

{{jsxref("Map")}} 实例的 **`forEach()`** 方法按插入顺序对该 map 中的每个键/值对执行一次提供的函数。

{{InteractiveExample("JavaScript Demo: Map.prototype.forEach()")}}

```js interactive-example
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为 map 中每个元素执行的函数。使用以下参数调用该函数：
    - `value`
      - : 每个迭代的值。
    - `key`
      - : 每个迭代的键。
    - `map`
      - : 正在迭代的 map。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。

### 返回值

无，{{jsxref("undefined")}}。

## 描述

`forEach` 方法会对 map 中每个真实存在的键执行一次提供的 `callback`。它不会为被删除的键执行函数。然而，它会为存在但值为 `undefined` 的值执行函数。

`callbackFn` 接收**三个参数**：

- 当前的 `value`
- 当前的 `key`
- 正在被遍历的 **`Map` 对象**

如果向 `forEach` 提供了 `thisArg` 参数，那么每次 `callback` 被调用时，其都会被传入以用作 `this` 的值。否则，`undefined` 将会被传入以用作 `this` 的值。最终 `callback` 可观察到的 `this` 值将会根据[确定函数所观察到 `this` 的常用规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)来确定。

每个值只被访问一次，除非它在 `forEach` 结束前被删除并被重新添加。对于被访问前就删除的值，`callback` 不会为其调用。在 `forEach` 结束前被新添加的值都将会被访问。

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
// 打印：
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
