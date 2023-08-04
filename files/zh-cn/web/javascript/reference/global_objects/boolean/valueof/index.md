---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

**`valueOf()`** 方法返回一个{{jsxref("Boolean")}}对象的原始值。

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## 语法

```plain
bool.valueOf()
```

### 返回值

给定{{jsxref("Boolean")}}对象的原始值

## 描述

{{jsxref("Boolean")}}的 `valueOf` 方法返回一个{{jsxref("Boolean")}}对象或{{jsxref("Boolean")}}字面量的原始值作为布尔数据类型。

该方法通常在 JavaScript 内部调用，而不是在代码中显式调用。

## 示例

### 使用 `valueOf`

```js
x = new Boolean();
myVar = x.valueOf(); // assigns false to myVar
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.valueOf()")}}
