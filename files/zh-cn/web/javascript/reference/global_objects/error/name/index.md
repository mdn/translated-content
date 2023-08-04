---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef("Global_Objects", "Error", "EvalError,InternalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError")}}

## 概述

**`name`** 属性表示 error 类型的名称。初始值为"Error".

## 描述

默认情况下，{{jsxref("Error")}}对象的`name`属性值为"Error".`name 属性和`{{jsxref("Error.prototype.message", "message")}}属性一起，通过调用{{jsxref("Error.prototype.toString()")}}方法，会作为最后异常信息的字符串表示。

## 示例

### 示例：抛出一个自定义错误

```js
var e = new Error("Malformed input"); // e.name 默认是"Error"

e.name = "ParseError"; // 修改之后，e.toString() 会成为下面这样的字符串
throw e; // "ParseError: Malformed input"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
