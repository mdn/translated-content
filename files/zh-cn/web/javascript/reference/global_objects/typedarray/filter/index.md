---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
---

{{JSRef}}

**`filter()`** 创建新的类型化数组，含有所有通过了测试的元素，测试由提供的函数实现。这个方法的算法和 {{jsxref("Array.prototype.filter()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 参数

- `callback`
  - : 测试类型化数组每个元素的函数，以参数 `(element, index, typedarray)`调用。如果返回 `true`则保留该元素，如果返回`false`则相反。
- `thisArg {{optional_inline}}`
  - : 可选，执行`callback`时作为`this`的值。

### 返回值

新的类型化数组，含有通过测试的元素

## 描述

`filter`方法对类型化数组中的元素调用提供的 `callback`函数，并且会为`callback`返回 true 的那些元素构造新的类型化数组。 `callback` 只对拥有值的类型化数组下标调用。它不会对未定义的，被删除的或者没有赋值的下标调用。没有传给`callback`的类型化数组的元素只是简单跳过，不会包含在新数组中。

`callback`以三个参数调用：

1. 元素的值
2. 元素下标
3. 被遍历的类型化数组对象

如果将`thisArg`参数提供给`filter`，它会在调用时传递给`callback`，作为它的 `this`值。否则，会传递`undefined` 作为它的`this` 值。 `callback`最终观测到的`this`值由 [用于决定函数可见的`this`值的一般规则](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)来决定。

`filter()`不改变在其上调用的类型化数组。

由 `filter`处理的元素范围在`callback`调用之前就确定了。在 `filter`调用之后添加到数组的元素不会由 `callback`访问。如果类型化数组的现有元素被改变，或被删除，它们传给`callback`的值是`filter` 访问它们时候的值。已删除的元素不会被访问。

## 示例

### 过滤所有较小的值

下面的示例使用了 `filter()` 来创建过滤后的类型化数组，小于 10 的元素都被移除了。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

### 使用箭头函数过滤类型化数组的元素

[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 为相同测试提供了更短的语法。

```js
new Uint8Array([12, 5, 8, 130, 44]).filter((elem) => elem >= 10);
// Uint8Array [ 12, 130, 44 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.filter()")}}
