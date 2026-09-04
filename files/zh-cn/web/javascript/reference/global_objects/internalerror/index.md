---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{Non-standard_Header}}

**`InternalError` 对象**表示出现在 JavaScript 引擎内部的错误。通常描述某种数量过多的情况，例如：

- "too many switch cases"（过多 `case` 子句）；
- "too many parentheses in regular expression"（正则表达式中括号过多）；
- "array initializer too large"（数组初始化器过大）；
- "too much recursion"（递归过深）。

## 构造函数

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{Non-standard_Inline}}
  - : 创建一个新的 `InternalError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message")}}
  - : 错误消息。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.name")}}
  - : 错误名称。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.cause")}}
  - : 表示导致当前错误被抛出的原因。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
  - : 引发此错误的文件的路径。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码所在的文件的行号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码在文件中所在行的列号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : 堆栈跟踪。继承自 {{jsxref("Error")}}。

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
