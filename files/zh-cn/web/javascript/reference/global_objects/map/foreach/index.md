---
title: Map.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
original_slug: Web/JavaScript/Reference/Global_Objects/Map/forEach
---
{{JSRef}}

**`forEach()`** 方法按照插入顺序依次对 `Map` 中每个键/值对执行一次给定的函数。

{{EmbedInteractiveExample("pages/js/map-prototype-foreach.html")}}

## 语法

```js
// 箭头函数
forEach(() => { /* … */ } )
forEach((value) => { /* … */ } )
forEach((value, key) => { /* … */ } )
forEach((value, key, map) => { /* … */ } )

// 回调函数
forEach(callbackFn)
forEach(callbackFn, thisArg)

// 内联回调函数
forEach(function() { /* … */ })
forEach(function(value) { /* … */ })
forEach(function(value, key) { /* … */ })
forEach(function(value, key, map) { /* … */ })
forEach(function(value, key, map) { /* … */ }, thisArg)
```

### 参数

- `callback`

  - : `myMap` 中每个元素所要执行的函数。它具有如下的参数：

    - `value` {{Optional_Inline}}
      - : 每个迭代的值。
    - `key` {{Optional_Inline}}
      - : 每个迭代的键。
    - `map` {{Optional_Inline}}
      - : 被迭代的 map（上文语法框中的 `myMap`）。

- `thisArg` {{Optional_Inline}}
  - : 在 `callback` 执行中使用的 `this` 的值。

### 返回值

{{jsxref("undefined")}}.

## 描述

`forEach` 方法会对 map 中每个真实存在的键执行一次给定的 `callback` 函数。它不会对被删除的键执行函数。然而，它会对每个值为 `undefined` 的键执行函数。

`callback` 接收**三个参数**：

- 当前的 `value`
- 当前的 `key`
- 正在被遍历的 **`Map` 对象**

如果 `forEach` 中含有 `thisArg` 参数，那么每次 `callback` 被调用时，都会被用作 `this` 的值。否则，`undefined` 将会被用作 `this` 的值。按照[函数观察到 `this` 的常用规则](/en-US/docs/Web/JavaScript/Reference/Operators/this)，`callback` 函数最终可观察到 `this` 值。

每个值只被访问一次，除非它被删除了或者在 `forEach` 结束前被改变了。`callback` 不会对在被访问前就删除的元素执行。在 `forEach` 结束前被添加的元素将会被访问。

`forEach` 会对 `Map` 对象中的每个元素执行一次 `callback`。它不会返回值。

## 示例

### 输出一个 `Map` 对象中的内容

以下的代码在每行中打印一个 `Map` 对象中的元素：

```js
function logMapElements(value, key, map) {
    console.log(`map.get('${key}') = ${value}`)
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements)
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
