---
title: "Error: message"
slug: Web/JavaScript/Reference/Global_Objects/Error/message
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Error")}} 实例的 **`message`** 数据属性是错误的人类可读描述。

## 值

一个字符串，对应于作为第一个参数传递给 [`Error()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) 构造函数的值。

{{js_property_attributes(1, 0, 1)}}

## 描述

此属性包含错误的简要描述（如果存在或已被设置）。`message` 属性与 {{jsxref("Error/name", "name")}} 属性一起被 {{jsxref("Error.prototype.toString()")}} 方法使用来创建错误的字符串表示形式。

默认情况下，`message` 属性为空字符串，但可以通过将消息作为第一个参数传递给 {{jsxref("Error/Error", "Error")}} 构造函数来覆盖实例的此行为。

## 示例

### 抛出自定义错误

```js
const e = new Error("无法解析输入");
// e.message 是“无法解析输入”
throw e;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
