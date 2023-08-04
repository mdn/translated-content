---
title: WebAssembly.RuntimeError()
slug: WebAssembly/JavaScript_interface/RuntimeError
---

{{WebAssemblySidebar}}

**`WebAssembly.RuntimeError()`**构造函数创建一个新的 WebAssembly RuntimeError 对象 --- 一个每当 WebAssembly 陷入指定陷阱时将抛出的类型。

## 语法

```plain
new WebAssembly.RuntimeError(message, fileName, lineNumber)
```

### 参数

- `message` {{optional_inline}}
  - : 有可读性的错误信息。
- `fileName` {{optional_inline}}{{non-standard_inline}}
  - : 包含导致异常的代码的文件名。
- `lineNumber` {{optional_inline}}{{non-standard_inline}}
  - : 导致异常的代码的行号。

## 属性

_`RuntimeError`构造函数不包含其自身特有的属性，但是，它确实通过原型链继承了某些属性。_

- `WebAssembly.RuntimeError.prototype.constructor`
  - : 创建示例原型的特定函数。
- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : 错误信息。尽管 ECMA-262 指定{{jsxref("URIError")}}应提供自己的`message`属性，但在[SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey)中，它继承了{{jsxref("Error.prototype.message")}}。
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : 错误名称。继承自 {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}
  - : 报出错误的文件路径。继承自 {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}
  - : 报出错误的代码所在文件中的行数。继承自{{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}
  - : 报出错误的代码所在文件中的列数。继承自 {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}
  - : 堆栈跟踪。继承自 {{jsxref("Error")}}.

## 方法

_`RuntimeError`构造函数不包含自己的方法，但是，它确实通过原型链继承了一些方法。_

- {{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}
  - : 返回可能导致相同错误的代码。继承自{{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : 返回表示代表指定的`Error`对象的字符串。从{{jsxref("Error")}}.

## 样例

以下代码段创建了一个新的 RuntimeError 实例，并将其详细信息记录到控制台：

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // 返回代码运行的位置
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
