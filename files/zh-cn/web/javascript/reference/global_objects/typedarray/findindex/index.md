---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
---

{{JSRef}}

如果某个元素满足所提供的测试函数，**`findIndex()`** 方法返回类型化数组中的**下标**，否则返回 -1。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

同时请参见 {{jsxref("TypedArray.findIndex", "find()")}} 方法，它返回了类型化数组中所发现元素的**值**，而不是它的下标。

## 语法

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 用于在类型化数组中的每个元素上执行的函数，接受三个参数：
    - `element`
      - : 要处理的类型化数组的当前元素。
    - `index`
      - : 要处理的当前元素在类型化数组中的下标
    - `array`
      - : `find` 在其上调用的类型化数组
- `thisArg`
  - : 可选，执行`callback`时的`this`值。

### 返回值

如果元素通过了测试，则为数组下标，否则为 -1。

## 描述

`findIndex` 方法对类型化数组中的每个元素执行一次 `callback` 函数，直到它找到一个使 `callback` 返回 *true*的元素。如果发现了一个这样的元素，`find` 方法将会立即返回该元素的下标。否则，`findIndex` 方法会返回 -1。`callback` 只会对那些已经被赋值的索引调用。不会对那些被删除或从来没被赋值的索引调用。

`callback` 以三个参数调用：元素的值，元素索引，以及要遍历的数组对象。

如果将`thisArg`参数提供给`findIndex`，它会在调用时传递给`callback`，作为它的 `this`值。如果没有提供，会使用`undefined`。

`findIndex` 不修改在其上调用的类型化数组。

由 `findIndex`处理的元素范围在`callback`调用之前就确定了。在 `findIndex`调用之后添加到数组的元素不会由 `callback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`callback`的值是`findIndex` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 在类型化数组中寻找质数的下标

下面的示例在类型化数组中寻找质数元素的下标（如果没有质数则返回 -1）.

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1，未发现
console.log(uint16.findIndex(isPrime)); // 2
```

## Polyfill

```js
TypedArray.prototype.findIndex = Array.prototype.findIndex =
  Array.prototype.findIndex ||
  function (evaluator, thisArg) {
    "use strict";
    if (!this) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }

    if (typeof evaluator !== "function") {
      if (typeof evaluator === "string") {
        // 尝试将其转换为函数
        if (!(evaluator = eval(evaluator))) {
          throw new TypeError();
        }
      } else {
        throw new TypeError();
      }
    }

    var i;
    if (thisArg === undefined) {
      // 为 thisArg 优化
      for (i in this) {
        if (evaluator(this[i], i, this)) {
          return i;
        }
      }
      return -1;
    }
    for (i in this) {
      if (evaluator.call(thisArg, this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
