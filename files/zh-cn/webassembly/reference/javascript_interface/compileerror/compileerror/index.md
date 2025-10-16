---
title: WebAssembly.CompileError() 构造函数
slug: WebAssembly/Reference/JavaScript_interface/CompileError/CompileError
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

**`WebAssembly.CompileError()`** 构造函数创建一个新的 WebAssembly `CompileError` 对象，用于表示 WebAssembly 解码或验证期间出现的错误。

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
  - : 人类可读的错误描述。
- `options` {{optional_inline}}
  - : 一个拥有下列属性的对象：
    - `cause` {{optional_inline}}
      - : 表示特定错误原因的属性。在捕获并用更特定或有用的错误消息重新抛出错误时，可以使用这个属性传递原始错误。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 导致异常的代码所在的文件的名字。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 导致异常的代码所在的行的行号。

## 示例

### 创建一个新的 CompileError 实例

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
