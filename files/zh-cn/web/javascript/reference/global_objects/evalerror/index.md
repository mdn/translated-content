---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
---

{{JSRef}}

本对象代表了一个关于 {{jsxref("Global_Objects/eval", "eval()")}} 全局函数的错误。此异常不再会被 JavaScript 抛出，但是 EvalError 对象仍然存在，以保持兼容性。

`EvalError` 是一个{{Glossary("serializable object", "可序列化对象")}}，所以可以使用 {{DOMxRef("Window.structuredClone", "structuredClone()")}} 对它进行克隆，也可以使用 {{domxref("Worker/postMessage()", "postMessage()")}} 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : 创建一个新的 `EvalError` 对象。

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

`EvalError` 不在当前的 ECMAScript 规范中使用，因此不会被运行时抛出。但是对象本身仍然与规范的早期版本向后兼容。

### 创建 EvalError

```js
try {
  throw new EvalError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.fileName); // "someFile.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
