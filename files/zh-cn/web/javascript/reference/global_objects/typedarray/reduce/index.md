---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
---

{{JSRef}}

**`reduce()`** 方法接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值。这个方法和{{jsxref("Array.prototype.reduce()")}}使用了同样的算法。_TypedArray_ 是一个 [类型数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects).

## 语法

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### 参数

- `callback`
  - : 对类型数组的每一个值应用的函数，它接受以下参数：
    - `previousValue`
      - : 在上一次迭代中，调用 callback 的返回值，或者是提供的 `initialValue`。
    - `currentValue`
      - : 类型化数组中当前要处理的值。
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `array`
      - : `reduce` 在其上调用的类型化数组。
- `initialValue`
  - : 可选。用作 `callback` 首次调用`的第一个参数的对象。

### 返回值

由归约返回的结果。

## 描述

`reduce`方法对类型化数组中出现的每个元素执行`callback`函数，除了类型化数组的空隙。它接受四个参数：初始值（或者来自之前`callback`调用的值），当前元素的值，当前下标，以及被遍历的类型化数组。

第一次调用回调函数的时候， `previousValue` 和 `currentValue` 可以是两个值之一。如果 `initialValue` 在`reduce`的调用中提供， `previousValue` 会等于`initialValue` 并且`currentValue` 会等于类型化数组的第一个值。如果 `initialValue` 没有提供，则`previousValue`等于类型化数组的第一个值，`currentValue`会等于第二个值。

如果类型化数组为空并且没有提供 `initialValue`，会抛出 {{jsxref("Global_Objects/TypeError", "TypeError")}} 。如果类型化数组中只有一个元素（无论位置）并且没有提供`initialValue` ，或者如果提供了`initialValue` 但是类型化数组为空，会返回唯一的值，但不会调用 `callback`。

## 示例

### 累加数组中的所有值

```js
var total = new Uint8Array([0, 1, 2, 3]).reduce(function (a, b) {
  return a + b;
});
// total == 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
