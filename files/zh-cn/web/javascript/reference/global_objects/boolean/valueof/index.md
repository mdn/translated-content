---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 86aba12ebfdca9fb1de77afb08cc78a0c9e44d45
---

{{JSRef}}

{{jsxref("Boolean")}} 值的 **`valueOf()`** 方法返回 {{jsxref("Boolean")}} 对象的原始值。

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## 语法

```js-nolint
valueOf()
```

### 参数

无。

### 返回值

给定 {{jsxref("Boolean")}} 对象的原始值。

## 描述

{{jsxref("Boolean")}} 的 `valueOf()` 方法返回 `Boolean` 对象或字面量 `Boolean` 的原始值作为布尔数据类型。

该方法通常在 JavaScript 内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf()`

```js
const x = new Boolean();
const myVar = x.valueOf(); // 给 myVar 赋值 false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.valueOf()")}}
