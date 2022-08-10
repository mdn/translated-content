---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
---
{{JSRef("Global_Objects", "Array")}}

**`toString()`** 返回一个字符串，表示指定的数组及其元素。

{{EmbedInteractiveExample("pages/js/array-tostring.html")}}

## 语法

```js
arr.toString()
```

### 返回值

一个表示指定的数组及其元素的字符串。

## 描述

{{jsxref("Array")}}对象覆盖了{{jsxref("Object")}}的 `toString` 方法。对于数组对象，`toString` 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。

当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 `toString` 方法。

### ECMAScript 5 semantics

从 JavaScript 1.8.5 (Firefox 4) 开始，和 ECMAScript 第 5 版语义（semantics）一致，`toString()` 方法是通用的，可被用于任何对象。将调用{{jsxref("Object.prototype.toString()")}}，并返回结果值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
