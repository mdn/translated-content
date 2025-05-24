---
title: WebAssembly.LinkError
slug: WebAssembly/Reference/JavaScript_interface/LinkError
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.LinkError`** 对象表示模块实例化期间的错误（除启动函数中的[陷阱](https://webassembly.github.io/simd/core/intro/overview.html#trap)）。

## 构造函数

- [`WebAssembly.LinkError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError/LinkError)
  - : 创建一个新的 `WebAssembly.LinkError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : 错误消息。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : 错误名字。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.cause", "WebAssembly.LinkError.prototype.cause")}}
  - : 错误原因。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}} {{non-standard_inline}}
  - : 引发此错误的文件所在的路径。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}} {{non-standard_inline}}
  - : 在引发此错误的文件中的行号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}} {{non-standard_inline}}
  - : 在引发此错误的行中的列号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}} {{non-standard_inline}}
  - : 堆栈跟踪。继承自 {{jsxref("Error")}}。

## 实例方法

- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : 返回一个表示指定的 `Error` 对象的字符串。继承自 {{jsxref("Error")}}。

## 示例

### 创建一个新的 LinkError 实例

下面的代码片段创建一个新的 `LinkError` 实例，并将其详情输出到控制台：

```js
try {
  throw new WebAssembly.LinkError("你好", "某个文件", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "你好"
  console.log(e.name); // "LinkError"
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

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
