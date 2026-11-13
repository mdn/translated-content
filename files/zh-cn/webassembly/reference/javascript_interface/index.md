---
title: WebAssembly
slug: WebAssembly/Reference/JavaScript_interface
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`WebAssembly`** JavaScript 对象是所有 [WebAssembly](/zh-CN/docs/WebAssembly) 相关功能的命名空间。

和大多数全局对象不一样，`WebAssembly` 不是一个构造函数（它不是一个函数对象）。它类似于 {{jsxref("Math")}} 对象或者 {{jsxref("Intl")}} 对象，Math 对象也是一个命名空间对象，用于保存数学常量和函数；Intl 则是用于国际化和其他语言相关函数的命名空间对象。

## 描述

`WebAssembly` 对象主要用于：

- 使用 [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) 函数加载 WebAssembly 代码。
- 通过 [`WebAssembly.Memory()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory)/[`WebAssembly.Table()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table) 构造函数创建新的内存和表实例。
- 由 [`WebAssembly.CompileError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)/[`WebAssembly.LinkError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)/[`WebAssembly.RuntimeError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 构造函数来提供 WebAssembly 中的错误信息。

## 接口

- [`WebAssembly.CompileError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : 表示在 WebAssembly 解码或验证时发生的错误。
- [`WebAssembly.Global`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : 表示全局变量实例，既可从 JavaScript 访问，也可在多个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 实例间导入/导出。这支持多个模块的动态链接。
- [`WebAssembly.Instance`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : 表示 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 的带状态可执行实例。
- [`WebAssembly.LinkError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : 表示模块实例化过程中的错误（除启动函数中的[陷阱](https://webassembly.github.io/simd/core/intro/overview.html#trap)外）。
- [`WebAssembly.Memory`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : 该对象的 [`buffer`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) 属性是一个可调整大小的 {{jsxref("ArrayBuffer")}}，用于存储 WebAssembly `Instance` 访问的原始内存字节。
- [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : 包含已被浏览器编译的无状态 WebAssembly 代码，可高效地[与 Worker 共享](/zh-CN/docs/Web/API/Worker/postMessage)，并支持多次实例化。
- [`WebAssembly.RuntimeError`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : 每当 WebAssembly 指定一个[陷阱](https://webassembly.github.io/simd/core/intro/overview.html#trap)时抛出的错误类型。
- [`WebAssembly.Table`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : 表示 WebAssembly 表的数组样式结构，用于存储[引用](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype)，例如函数引用。
- [`WebAssembly.Tag`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : 表示 WebAssembly 异常类型的对象。
- [`WebAssembly.Exception`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : 可在 WebAssembly/JavaScript 边界内及跨边界抛出、捕获和重新抛出的 WebAssembly 异常对象。

## 静态方法

- [`WebAssembly.compile()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : 把 WebAssembly 二进制代码编译为一个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)，不进行实例化。
- [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : 直接从流式底层源代码编译 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)，将实例化作为一个单独的步骤。
- [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : 用于编译和实例化 WebAssembly 代码的主 API，返回一个 `Module` 和它的第一个 `Instance` 实例。
- [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : 直接从流式底层源编译和实例化 WebAssembly 模块，同时返回 `Module` 及其第一个 `Instance` 实例。
- [`WebAssembly.validate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : 校验 WebAssembly 二进制代码的类型数组是否合法，合法则返回 `true`，否则返回 `false`。

## 示例

下面的示例（请参见 GitHub 上的 [Instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) 演示，并查看[在线演示](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）直接从流式底层源传输 .wasm 模块，然后对其进行编译和实例化，并通过 `ResultObject` 兑现 promise。由于 `instantiateStreaming()` 函数接受对 {{domxref("Response")}} 对象的 promise，因此你可以直接向其传递 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 调用，然后它将把兑现的响应传递给随后的函数。

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

随后访问 `ResultObject` 的 `.instance` 属性，并调用其中包含的导出函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) 概览
- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
- [使用 WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
