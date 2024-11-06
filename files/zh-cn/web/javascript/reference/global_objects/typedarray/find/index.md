---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
---

{{JSRef}}

如果某个元素满足所提供的测试函数，**`find()`** 方法返回类型化数组中的**值**，否则返回 {{jsxref("undefined")}}。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

同时请参见 {{jsxref("TypedArray.findIndex", "findIndex()")}} 方法，它返回了类型化数组中所发现元素的**下标**，而不是它的值。

## 语法

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
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

如果元素通过了测试，则为该元素，否则为{{jsxref("undefined")}}。

## 描述

`find` 方法对类型化数组中的每个元素执行一次 `callback` 函数，直到它找到一个使 `callback` 返回 *true*的元素。如果发现了一个这样的元素，`find` 方法将会立即返回该元素的值。否则，`find` 方法会返回{{jsxref("undefined")}}。`callback` 只会对那些已经被赋值的索引调用。不会对那些被删除或从来没被赋值的索引调用。

`callback` 以三个参数调用：元素的值，元素索引，以及要遍历的数组对象。

如果将`thisArg`参数提供给`find`，它会在调用时传递给`callback`，作为它的 `this`值。如果没有提供，会使用`undefined`。

`find` 不修改在其上调用的类型化数组。

由 `find`处理的元素范围在`callback`调用之前就确定了。在 `find`调用之后添加到数组的元素不会由 `callback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`callback`的值是`find` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 在类型化数组中寻找质数

下面的示例在类型化数组中寻找质数（如果没有质数则返回 [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)）。

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

var uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.every()")}}
