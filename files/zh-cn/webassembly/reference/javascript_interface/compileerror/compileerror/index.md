---
title: WebAssembly.CompileError() 构造函数
slug: WebAssembly/Reference/JavaScript_interface/CompileError/CompileError
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

The **`WebAssembly.CompileError()`** constructor creates a new
WebAssembly `CompileError` object, which indicates an error during
WebAssembly decoding or validation.

## 语法

```js-nolint
new WebAssembly.CompileError()
new WebAssembly.CompileError(message)
new WebAssembly.CompileError(message, options)
new WebAssembly.CompileError(message, fileName)
new WebAssembly.CompileError(message, fileName, lineNumber)
```

### 参数

- `message` {{optional_inline}}
  - : Human-readable description of the error.
- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `cause` {{optional_inline}}
      - : A property indicating the specific cause of the error.
        When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : The name of the file containing the code that caused the exception.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : The line number of the code that caused the exception.

## 示例

### 创建一个新的 CompileError 实例

The following snippet creates a new `CompileError` instance, and logs its
details to the console:

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
