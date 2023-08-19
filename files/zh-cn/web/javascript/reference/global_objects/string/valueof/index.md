---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回 {{jsxref("String")}} 对象的字符串值。

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## 语法

```js-nolint
valueOf()
```

### 返回值

一个字符串，表示给定 {{jsxref("String")}} 对象的原始值。

## 描述

{{jsxref("String")}} 的 `valueOf()` 方法以字符串数据类型返回 {{jsxref("String")}} 对象的原始值。此值等价于 {{jsxref("String.prototype.toString()")}}。

此方法通常由 JavaScript 在内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
