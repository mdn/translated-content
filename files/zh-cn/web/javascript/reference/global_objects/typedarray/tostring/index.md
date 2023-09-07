---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
---

{{JSRef}}

**`toString()`** 方法返回一个表示指定数组及其元素的字符串。这个方法的算法和 {{jsxref("Array.prototype.toString()")}} 一样。_TypedArray_ 在这是[typed array types](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 之一。

## 语法

```js-nolint
values()
```

### 返回值

一个字符串，表示类型数组 (typed array) 的元素。

## 描述

{{jsxref("TypedArray")}} 对象重写了{{jsxref("Object")}}的 `toString`方法。对 TypedArray 对象来说，`toString` 方法联结了数组，并返回一个字符串，它包含由逗号分隔的数组元素。例如，下面的代码创建了一个类型数组，使用`toString` 将数组转化为字符串。

```js
var numbers = new Uint8Array([2, 5, 8, 1, 4]);
numbers.toString(); // "2,5,8,1,4"
```

当一个类型数组表示为文本值，或者当一个数组被用于字符串连接，则 JavaScript 将自动调用 `toString` 方法。

### 兼容性

如果浏览器还不支持`TypedArray.prototype.toString()` 方法，JavaScript 将调用{{jsxref("Object")}}的 `toString` 方法：

```js
var numbers = new Uint8Array([2, 5, 8, 1, 4]);
numbers.toString(); // "[object Uint8Array]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("TypedArray.prototype.join()")}}
