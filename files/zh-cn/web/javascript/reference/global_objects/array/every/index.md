---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

**`every()`** 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

> **备注：** 若收到一个空数组，此方法在任何情况下都会返回 `true`。

{{EmbedInteractiveExample("pages/js/array-every.html")}}

## 语法

```js
// 箭头函数
every((element) => { /* … */ } )
every((element, index) => { /* … */ } )
every((element, index, array) => { /* … */ } )

// 回调函数
every(callbackFn)
every(callbackFn, thisArg)

// 内联回调函数
every(function(element) { /* … */ })
every(function(element, index) { /* … */ })
every(function(element, index, array){ /* … */ })
every(function(element, index, array) { /* … */ }, thisArg)
```

### 参数

- `callback`

  - : 用来测试每个元素的函数，它可以接收三个参数：

    - `element`
      - : 用于测试的当前值。
    - `index`
      - : 用于测试的当前值的索引。
    - `array`
      - : 调用 `every` 的当前数组。

- `thisArg`{{Optional_inline}}
  - : 执行 `callback` 时使用的 `this` 值。

### 返回值

如果回调函数的每一次返回都为 {{Glossary("truthy")}} 值，返回 **`true`**，否则返回 **`false`**。

## 描述

`every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 {{Glossary("falsy")}} 的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。

`callback` 被调用时可传入三个参数：元素值，元素的索引，原数组。

如果为 `every` 提供一个 `thisArg` 参数，则该参数为调用 `callback` 时的 `this` 值。如果省略该参数，则 `callback` 被调用时的 `this` 值，在非严格模式下为全局对象，在严格模式下传入 `undefined`。详见 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 条目。

`every` 不会改变原数组。

`every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

`every` 和数学中的"所有"类似，当所有的元素都符合条件才会返回 `true`。正因如此，若传入一个空数组，无论如何都会返回 `true`。（这种情况属于[无条件正确](http://en.wikipedia.org/wiki/Vacuous_truth)：正因为一个[空集合](https://en.wikipedia.org/wiki/Empty_set#Properties)没有元素，所以它其中的所有元素都符合给定的条件。)

## 例子

### 检测所有数组元素的大小

下例检测数组中的所有元素是否都大于 10。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### 使用箭头函数

[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)为上面的检测过程提供了更简短的语法。

```js
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
