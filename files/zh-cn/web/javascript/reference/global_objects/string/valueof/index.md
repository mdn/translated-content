---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回 {{jsxref("String")}} 对象的原始值

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## 语法

```plain
str.valueOf()
```

### 返回结果

A string representing the primitive value of a given {{jsxref("String")}} object.

## 描述

The `valueOf()` method of {{jsxref("String")}} returns the primitive value of a {{jsxref("String")}} object as a string data type. This value is equivalent to {{jsxref("String.prototype.toString()")}}.

此方法通常由 JavaScript 在内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
var x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
