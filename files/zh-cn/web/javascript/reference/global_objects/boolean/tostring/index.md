---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---
{{JSRef}}

**`toString()`** 方法返回指定的布尔对象的字符串形式。

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## 语法

```plain
bool.toString()
```

### 返回值

表示特定{{jsxref("Boolean")}}对象的字符串。

## 描述

{{jsxref("Boolean")}} 对象覆盖了 {{jsxref("Object")}} 对象的 `toString` 方法。并没有继承 {{jsxref("Object.prototype.toString()")}}。对于布尔对象，`toString` 方法返回该对象的字符串形式。

当一个{{jsxref("Boolean")}}对象作为文本值或进行字符串连接时，JavaScript 会自动调用其 `toString` 方法。

对于{{jsxref("Boolean")}}对象或值，内置的 `toString` 方法返回字符串 "`true`" 或 "`false`"，具体返回哪个取决于布尔对象的值。

## 示例

### 使用 `toString`

下面的代码，`flag.toString` 返回 "`true`"：

```js
var flag = new Boolean(true)
var myVar = flag.toString()
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.prototype.toString()")}}
