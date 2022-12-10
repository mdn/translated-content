---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}}{{Non-standard_Header}}

**`InternalError` 对象**表示出现在 JavaScript 引擎内部的错误。通常描述某种数量过多的情况，例如：

- "too many switch cases"（过多`case`子句）；
- "too many parentheses in regular expression"（正则表达式中括号过多）；
- "array initializer too large"（数组初始化器过大）；
- "too much recursion"（递归过深）。

## 构造器

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{Non-standard_Inline}}
  - : 创建一个新的 `InternalError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message", "InternalError.prototype.message")}}
  - : 错误信息。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.name", "InternalError.prototype.name")}}
  - : 错误名称。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.cause", "InternalError.prototype.cause")}}
  - : 错误原因。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.fileName", "InternalError.prototype.fileName")}} {{Non-standard_Inline}}
  - : 引起错误的文件路径。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.lineNumber", "InternalError.prototype.lineNumber")}} {{Non-standard_Inline}}
  - : 引起错误位置的行编号。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.columnNumber", "InternalError.prototype.columnNumber")}} {{Non-standard_Inline}}
  - : 引起错误位置的列编号。从 {{jsxref("Error")}} 继承。
- {{jsxref("Error.prototype.stack", "InternalError.prototype.stack")}} {{Non-standard_Inline}}
  - : 堆栈跟踪信息。从 {{jsxref("Error")}} 继承。

## 示例

### 递归过深

根据退出条件所述，以下递归函数运行 10 次。

```js
function loop(x) {
  // "x >= 10" 是退出条件
  if (x >= 10) return;

  // 做一些事情
  loop(x + 1); // 递归调用
}
loop(0);
```

如果这个条件值太高，可能不会奏效：

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;

  // 做一些事情
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

要获取更多信息，请参阅 [InternalError: too much recursion](/zh-CN/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)。

## 规范

尚未成为任何规范的一部分。

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
- [InternalError: too much recursion](/zh-CN/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
