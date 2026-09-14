---
title: WebAssembly.LinkError() 构造函数
slug: WebAssembly/Reference/JavaScript_interface/LinkError/LinkError
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly.LinkError()`** 构造函数创建一个新的 WebAssembly `LinkError` 对象，其表示一个在模块初始化期间发生的错误（除了来自启动函数的[陷阱](https://webassembly.github.io/simd/core/intro/overview.html#trap)）。

## 语法

```js-nolint
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, options)
new WebAssembly.LinkError(message, fileName)
new WebAssembly.LinkError(message, fileName, lineNumber)
```

### 参数

- `message` {{optional_inline}}
  - : 人类可读的错误描述。
- `options` {{optional_inline}}
  - : 一个拥有下列属性的对象：
    - `cause` {{optional_inline}}
      - : 表示特定错误原因的属性。在捕获并重新抛出一个拥有更确切或有用的错误消息的错误时，这个属性能被用于传递原始错误。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : 导致异常的代码所在的文件的名字。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : 导致异常的代码所在的行的行号。

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
