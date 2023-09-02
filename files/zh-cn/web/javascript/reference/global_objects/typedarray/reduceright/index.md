---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
---

{{JSRef}}

**`reduceRight()`** 在累加器和类型化数组的每个元素上（从右到左）调用函数，使其归约为单一的值。这个方法的算法和 {{jsxref("Array.prototype.reduceRight()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### 参数

- `callback`
  - : 对类型数组的每一个值应用的函数，它接受四个参数：
    - `previousValue`
      - : 回调函数上一次调用所返回的值，或者是提供的 `initialValue`。
    - `currentValue`
      - : 类型化数组中当前要处理的值。
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `array`
      - : `reduceRight` 在其上调用的类型化数组
- `initialValue`
  - : 可选。用作 `callback` 首次调用的第一个参数的对象。

### 返回值

由归约返回的结果。

## 描述

`reduceRight`方法对类型化数组中出现的每个元素执行`callback`函数，除了类型化数组的空隙。它接受四个参数：初始值（或者来自之前`callback`调用的值），当前元素的值，当前下标，以及被遍历的类型化数组。

`reduceRight`回调函数的调用是这样：

```js
typedarray.reduceRight(
  function (previousValue, currentValue, index, typedarray) {
    // ...
  },
);
```

第一次调用回调函数的时候， `previousValue` 和 `currentValue` 可以是两个值之一。如果 `initialValue` 在`reduce`的调用中提供， `previousValue` 会等于`initialValue` 并且`currentValue` 会等于类型化数组的最后一个值。如果 `initialValue` 没有提供，则`previousValue`等于类型化数组的最后一个值，`currentValue`会等于倒数第二个值。

如果类型化数组为空并且没有提供 `initialValue`，会抛出 {{jsxref("Global_Objects/TypeError", "TypeError")}} 。如果类型化数组中只有一个元素（无论位置）并且没有提供`initialValue` ，或者如果提供了`initialValue` 但是类型化数组为空，会返回唯一的值，但不会调用 `callback`。

## 示例

### 累加数组中的所有值

```js
var total = new Uint8Array([0, 1, 2, 3]).reduceRight(function (a, b) {
  return a + b;
});
// total == 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
