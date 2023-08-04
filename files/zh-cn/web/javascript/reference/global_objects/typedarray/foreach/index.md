---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
---

{{JSRef}}

**`forEach()`** 方法对类型化数组的每个元素调用提供的函数。这个方法的算法和 {{jsxref("Array.prototype.forEach()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 产生新的类型化数组的元素的函数，接受三个函数：
    - `currentValue`
      - : 类型化数组中要处理的当前元素
    - `index`
      - : 类型化数组中要处理的当前元素的下标
    - `array`
      - : `forEach()`在其上调用的类型化数组
- `thisArg`
  - : 可选，执行`callback`时作为`this`的值。

### 返回值

{{jsxref("undefined")}}.

## 描述

`forEach`方法对类型化数组中的元素按升序调用提供的 `callback`函数。它不会对删除或者省略的下标调用，但是会对存在并且值为{{jsxref("undefined")}}的元素调用。

`callback` 以 **三个参数**调用：

- the **元素的值**
- the **元素下标**
- the **被遍历的类型化数组**

如果将`thisArg`参数提供给`forEach`，它会在调用时传递给`callback`，作为它的 `this`值。否则，会传递`undefined` 作为它的`this` 值。 `callback`最终观测到的`this`值由 [用于决定函数可见的`this`值的一般规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)来决定。

由 `forEach`处理的元素范围在`callback`调用之前就确定了。在 `forEach`调用之后添加到数组的元素不会由 `callback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`callback`的值是`forEach` 访问它们时候的值。已删除的元素不会被访问。

`forEach()`对每个数组元素执行一次`callback` 函数；不像 {{jsxref("TypedArray.prototype.every()", "every()")}} 和{{jsxref("TypedArray.prototype.some()", "some()")}}，它始终返回 {{jsxref("undefined")}}。

## 示例

### 记录类型化数组的内容

下面的代码为数组中的每个元素记录一行日志：

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// 日志：
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
