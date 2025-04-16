---
title: WebAssembly.CompileError
slug: WebAssembly/Reference/JavaScript_interface/CompileError
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`WebAssembly.CompileError`** 对象表示 WebAssembly 解码或验证期间的错误。

## 构造函数

- [`WebAssembly.CompileError()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/CompileError/CompileError)
  - : 创建一个新的 `WebAssembly.CompileError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : 错误消息。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : 错误名字。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.cause", "WebAssembly.CompileError.prototype.cause")}}
  - : 错误原因。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}} {{non-standard_inline}}
  - : 引发这个错误的文件的路径。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}} {{non-standard_inline}}
  - : 引发这个错误的行在该文件中的行号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}} {{non-standard_inline}}
  - : 引发这个错误的列在该行中的列号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}} {{non-standard_inline}}
  - : 栈追踪。继承自 {{jsxref("Error")}}。

## 实例方法

- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : 返回一个能够表示指定的 `Error` 对象的字符串。继承自 {{jsxref("Error")}}。

## 示例

## 创建一个新的 CompileError 实例

下面的片段创建一个新的 `CompileError` 实例，并将其详细信息打印到控制台：

```js
try {
  throw new WebAssembly.CompileError("你好", "某个文件", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "你好"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "某个文件"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // 返回运行代码的位置
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览页
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
