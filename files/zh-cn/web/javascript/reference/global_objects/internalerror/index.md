---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}} {{non-standard_header}}

**`InternalError` 对象**表示出现在 JavaScript 引擎内部的错误。例如： **"InternalError**: too much recursion"（内部错误：递归过深）。

## 语法

```plain
new InternalError([message[, fileName[, lineNumber]]])
```

### 参数

- `message`
  - : 可选。人类可读的错误描述信息。
- `fileName` {{non-standard_inline}}
  - : 可选。触发该错误的代码所在文件的文件名。
- `lineNumber` {{non-standard_inline}}
  - : 可选。触发该错误的代码所在的代码行号。

## 描述

当 JavaScript 引擎出现内部错误时将会抛出 `InternalError`。

示例场景通常为某些成分过大，例如：

- "too many switch cases"（过多`case`子句）；
- "too many parentheses in regular expression"（正则表达式中括号过多）；
- "array initializer too large"（数组初始化器过大）；
- "too much recursion"（递归过深）。

## 属性

- {{jsxref("InternalError.prototype")}}
  - : 允许向`InternalError`对象添加属性。

## 方法

全局 `InternalError` 对象自身不包含任何方法，但从原型链中继承了一些方法。

## `InternalError` 实例

### 属性

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', '属性')}}

### 方法

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', '方法')}}

## 规范

尚未成为任何规范的一部分。

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Error","错误")}}
- {{jsxref("InternalError.prototype")}}
