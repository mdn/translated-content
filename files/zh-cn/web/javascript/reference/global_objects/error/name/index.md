---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

`Error.prototype` 的 **`name`** 数据属性是所有 {{jsxref("Error")}} 实例所共享的。它表示当前错误类型的名称。对于 `Error.prototype.name`，其初始值为 `"Error"`。像 {{jsxref("TypeError")}} 和 {{jsxref("SyntaxError")}} 这样的子类会提供它们自己的 `name` 属性。

## 值

字符串。对于 `Error.prototype.name`，其初始值为 `"Error"`。

{{js_property_attributes(1, 0, 1)}}

## 描述

默认情况下，为 {{jsxref("Error")}} 实例提供的名称为“Error”。{{jsxref("Error.prototype.toString()")}} 方法会同时使用 `name` 和 {{jsxref("Error/message", "message")}} 属性来创建错误信息的字符串表示。

## 示例

### 抛出一个自定义错误

```js
const e = new Error("Malformed input"); // e.name 为“Error”

e.name = "ParseError";
throw e;
// e.toString() 会返回“ParseError: Malformed input”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
