---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
---

{{JSRef}}

**`URIError`** 对象用来表示以一种错误的方式使用全局 URI 处理函数而产生的错误。

`URIError` 是 {{Glossary("serializable object", "可序列化对象")}}，所以可以使用 {{domxref("structuredClone()")}} 克隆它，或者在 [Worker](/zh-CN/docs/Web/API/Worker) 间使用 {{domxref("Worker/postMessage()", "postMessage()")}} 拷贝这个对象。

## 构造函数

- {{jsxref("Global_Objects/URIError/URIError", "URIError()")}}
  - : 创建一个新的 `URIError` 对象。

## 实例属性

- {{jsxref("Error.prototype.message", "URIError.prototype.message")}}
  - : 错误消息。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.name", "URIError.prototype.name")}}
  - : 错误名称。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.cause", "URIError.prototype.cause")}}
  - : 导致错误的原因。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.fileName", "URIError.prototype.fileName")}} {{non-standard_inline}}
  - : 引发此错误的文件的路径。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.lineNumber", "URIError.prototype.lineNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码所在的文件的行号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.columnNumber", "URIError.prototype.columnNumber")}} {{non-standard_inline}}
  - : 引发此错误的代码在文件中所在行的列号。继承自 {{jsxref("Error")}}。
- {{jsxref("Error.prototype.stack", "URIError.prototype.stack")}} {{non-standard_inline}}
  - : 堆栈跟踪。继承自 {{jsxref("Error")}}。

## 示例

### 捕获一个 URIError

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### 创建一个 URIError

```js
try {
  throw new URIError("Hello", "someFile.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
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
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
