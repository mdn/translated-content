---
title: WebAssembly
slug: WebAssembly/JavaScript_interface
---

{{WebAssemblySidebar}}

**`WebAssembly`** JavaScript 对象是所有 [WebAssembly](/zh-CN/docs/WebAssembly) 相关功能的命名空间。

和大多数全局对象不一样，`WebAssembly`不是一个构造函数（它不是一个函数对象）。它类似于 {{jsxref("Math")}} 对象或者 {{jsxref("Intl")}} 对象，Math 对象也是一个命名空间对象，用于保存数学常量和函数；Intl 则是用于国际化和其他语言相关函数的命名空间对象。

## 描述

`WebAssembly` 对象主要用于：

- 使用 {{jsxref("WebAssembly.instantiate()")}} 函数加载 WebAssembly 代码。
- 通过 {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} 构造函数创建新的内存和表实例。
- 由 {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} 构造函数来提供 WebAssembly 中的错误信息。

## 方法

- {{jsxref("WebAssembly.instantiate()")}}
  - : 用于编译和实例化 WebAssembly 代码的主 API，返回一个 `Module` 和它的第一个`Instance`实例。
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : 直接从流式底层源编译和实例化 WebAssembly 模块，同时返回`Module`及其第一个`Instance`实例。
- {{jsxref("WebAssembly.compile()")}}
  - : 把 WebAssembly 二进制代码编译为一个 {{jsxref("WebAssembly.Module")}} ，不进行实例化。
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : 直接从流式底层源代码编译{{jsxref("WebAssembly.Module")}} ，将实例化作为一个单独的步骤。
- {{jsxref("WebAssembly.validate()")}}
  - : 校验 WebAssembly 二进制代码的类型数组是否合法，合法则返回 true，否则返回 false。

## 构造器

- {{jsxref("WebAssembly.Global()")}}
  - : 创建一个新的 WebAssembly `Global` 全局对象。
- {{jsxref("WebAssembly.Module()")}}
  - : 创建一个新的 WebAssembly `Module`模块对象。
- {{jsxref("WebAssembly.Instance()")}}
  - : 创建一个新的 WebAssembly `Instance`实例对象。
- {{jsxref("WebAssembly.Memory()")}}
  - : 创建一个新的 WebAssembly `Memory`内存对象。
- {{jsxref("WebAssembly.Table()")}}
  - : 创建一个新的 WebAssembly `Table`表格对象。
- {{jsxref("WebAssembly.CompileError()")}}
  - : 创建一个新的 WebAssembly `CompileError`编译错误对象。
- {{jsxref("WebAssembly.LinkError()")}}
  - : 创建一个新的 WebAssembly `LinkError`链接错误对象。
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : 创建一个新的 WebAssembly `RuntimeError`运行时错误对象。

## 示例

下面的示例（请参见 GitHub 上的[Instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html)演示，并查看[在线演示](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)）直接从流式底层源传输.wasm 模块，然后对其进行编译和实例化，并通过`ResultObject`实现 promise。由于`instantiateStreaming()`函数接受对 {{domxref("Response")}} 对象的 promise，因此您可以直接向其传递 {{domxref("fetch()")}} 调用，然后它将把返回的 response 传递给随后的函数。

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

返回的`ResultObject`实例的成员可以被随后访问到，可以调用实例中被导出的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
