---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
---

{{JSRef}}

**`SyntaxError`**（语法错误）对象代表尝试解析不符合语法的代码的错误。当 Javascript 引擎解析代码时，遇到了不符合语法规范的标记（token）或标记顺序，则会抛出 `SyntaxError`。

`SyntaxError` 是一个{{Glossary("serializable object", "可序列化对象")}}，所以可以使用 {{DOMxRef("Window.structuredClone", "structuredClone()")}} 对它进行克隆，也可以使用 {{domxref("Worker/postMessage()", "postMessage()")}} 在 [Worker](/zh-CN/docs/Web/API/Worker) 之间拷贝它。

## 构造函数

- {{jsxref("Global_Objects/SyntaxError/SyntaxError", "SyntaxError()")}}
  - : 创建一个新的 `SyntaxError` 对象。

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

### 捕获 SyntaxError

```js
try {
  eval("hoo bar");
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### 创建 SyntaxError

```js
try {
  throw new SyntaxError("Hello", "someFile.js", 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message); // Hello
  console.error(e.name); // SyntaxError
  console.error(e.fileName); // someFile.js
  console.error(e.lineNumber); // 10
  console.error(e.columnNumber); // 0
  console.error(e.stack); // @debugger eval code:3:9
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Error")}}
