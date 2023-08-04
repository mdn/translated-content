---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## 概述

**`message`** 属性是有关错误信息，人类易读的（human-readable）描述。

## 描述

如果该属性已经被设置，则该属性包含了错误的一个简短描述。[SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey) 大量应用 `message` 属性在异常方面。 `message` 属性结合 {{jsxref("Error.prototype.name", "name")}} 属性一起被 {{jsxref("Error.prototype.toString()")}} 方法用来创建错误的字符串形式。

默认情况下，`message` 属性是一个空字符串，但是可以通过指定一段信息作为 {{jsxref("Error", "Error constructor")}} 的第一个参数创建一个实例来改变该属性值。

## 示例

### 示例：抛出一个自定义错误

```js
var e = new Error("Could not parse input"); // e.message is "Could not parse input"
throw e;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
