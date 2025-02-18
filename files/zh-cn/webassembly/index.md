---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: 06dad97d3bd2c2296ac6344fad5a1ae1a768e4d0
---

WebAssembly 是一种新的编码方式，可以在现代的 Web 浏览器中运行——它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如 C/C++、C# 和 Rust 等语言提供编译目标，以便它们可以在 Web 上运行。它也被设计为可以与 JavaScript 共存，允许两者一起工作。

## 简而言之

对于 Web 平台而言，WebAssembly 具有巨大的意义——它提供了一条使得以各种语言编写的代码都可以接近原生的速度在 Web 中运行的途径，使得以前无法在 Web 上运行的客户端应用程序得以在 Web 上运行。

WebAssembly 被设计为可以和 JavaScript 一起协同工作——通过使用 WebAssembly 的 JavaScript API，你可以把 WebAssembly 模块加载到 JavaScript 应用中并且在两者之间共享功能。这允许你在同一个应用中利用 WebAssembly 的性能和能力以及 JavaScript 的表达力和灵活性，即使你可能并不知道如何编写 WebAssembly 代码。

而且，更棒的是，这是由 [W3C WebAssembly 工作组](https://www.w3.org/wasm/)和[社区组](https://www.w3.org/community/webassembly/)开发的 Web 标准，并得到了来自各大主要浏览器厂商的积极参与。

## 指南

- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Guides/Concepts)
  - : 通过阅读 WebAssembly 背后的上层概念开始——它是什么、它为什么如此有用、它是如何适应 Web 平台（以及其他平台）的和如何使用它。
- [将新的 C/C++ 模块编译为 WebAssembly](/zh-CN/docs/WebAssembly/Guides/C_to_Wasm)
  - : 当你使用 C/C++ 编写了代码后，你可以使用诸如 [Emscripten](https://emscripten.org/) 等工具把它编译为 Wasm。让我们看看这是如何工作的。
- [将现有的 C 模块编译为 WebAssembly](/zh-CN/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : WebAssembly 的核心用例是将现有的 C 库生态系统带到 Web 上，并允许开发者使用它们。
- [将 Rust 代码编译为 WebAssembly](/zh-CN/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : 如果你已经编写了一些 Rust 代码，你可以把它编译为 WebAssembly！本教程将带你了解所有你需要知道的内容，以便把一个 Rust 项目编译为 Wasm 并在现有的 Web 应用中使用它。
- [加载和运行 WebAssembly 代码](/zh-CN/docs/WebAssembly/Guides/Loading_and_running)
  - : 本文介绍如何通过将 [Fetch](/zh-CN/docs/Web/API/Fetch_API) 或者 [XHR](/zh-CN/docs/Web/API/XMLHttpRequest) API 与 [WebAssembly JavaScript](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface) API 结合在一起以获取、编译和实例化 Wasm 模块。
- [使用 WebAssembly 的 JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : 在加载了一个 Wasm 模块之后，你就会想要使用它。在本文中，我们向你展示了如何通过 WebAssembly 的 JavaScript API 来使用 WebAssembly。
- [导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)
  - : 导出的 WebAssembly 函数是 WebAssembly 函数的 JavaScript 反射，并且允许从 JavaScript 中调用 WebAssembly 代码。本文描述了它们的概念。
- [理解 WebAssembly 的文本格式](/zh-CN/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : 本文介绍了 Wasm 的文本格式。这是调试时在浏览器开发者工具中展现出来的 Wasm 模块的一种低级文本表示。
- [把 WebAssembly 文本格式转换为 Wasm](/zh-CN/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : 本文提供了一个如何把编写的文本格式的 WebAssembly 模块转换为 Wasm 二进制的指南。

## API 参考

- [WebAssembly 指令参考](/zh-CN/docs/WebAssembly/Reference)
  - : 包含 WebAssembly 运算符的交互式示例的参考文档。
- [WebAssembly JavaScript 接口](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface)
  - : 该对象充当所有与 WebAssembly 相关的功能的命名空间。
- [`WebAssembly.Global()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : `WebAssembly.Global` 对象表示一个全局变量实例，可以从 JavaScript 访问，并且可以在一个或多个 [`WebAssembly.Module`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module) 实例之间导入/导出。这允许动态链接多个模块。
- [`WebAssembly.Module()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : `WebAssembly.Module` 对象包含了已经被浏览器编译的无状态 WebAssembly 代码。该代码能够高效地[与 Worker 共享](/zh-CN/docs/Web/API/Worker/postMessage)，并多次实例化。
- [`WebAssembly.Instance()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : `WebAssembly.Instance` 对象是一个有状态的、可执行的模块（`Module`）的实例。实例对象包含了所有能够从 JavaScript 调用 WebAssembly 代码的[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Guides/Exported_functions)。
- [`WebAssembly.compile()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : `WebAssembly.compile()` 函数将 WebAssembly 二进制代码编译为 `WebAssembly.Module` 对象。
- [`WebAssembly.compileStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : `WebAssembly.compileStreaming()` 函数直接从流式底层源编译 `WebAssembly.Module`。
- [`WebAssembly.instantiate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : `WebAssembly.instantiate()` 函数允许你编译和实例化 WebAssembly 代码。
- [`WebAssembly.instantiateStreaming()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : `WebAssembly.instantiateStreaming()` 函数是编译和实例化 WebAssembly 代码的主要的 API，它返回 `Module` 及其第一个实例。
- [`WebAssembly.validate()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : `WebAssembly.validate()` 函数验证给定的 WebAssembly 二进制代码的类型化数组。
- [`WebAssembly.Memory()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : `WebAssembly.Memory` 对象是一个存储了可被实例（`Instance`）访问的内存原始字节的可变长 {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}。
- [`WebAssembly.Table()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : `WebAssembly.Table` 对象是一个用于存储可被实例（`Instance`）访问的不透明值（例如函数引用）的可变长类型化数组。
- [`WebAssembly.Tag()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : `WebAssembly.Tag` 对象用于定义 WebAssembly 的异常类型，可以在 WebAssembly 代码中抛出/捕获。
- [`WebAssembly.Exception()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : `WebAssembly.Exception` 对象表示从 WebAssembly 抛出到 JavaScript 的运行时异常，或者从 JavaScript 抛出到 WebAssembly 的异常处理器的异常。
- [`WebAssembly.CompileError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : 创建一个新的 WebAssembly `CompileError` 对象。
- [`WebAssembly.LinkError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : 创建一个新的 WebAssembly `LinkError` 对象。
- [`WebAssembly.RuntimeError()`](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : 创建一个新的 WebAssembly `RuntimeError` 对象。

## 示例

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- 参考我们的 [WebAssembly 示例](https://github.com/mdn/webassembly-examples/)仓库来获取一些其他的示例。

## 规范

{{Specifications}}

## 参见

- [Mozilla Research 关于 WebAssembly 的研究](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [Mozilla Hacks 博客上关于 WebAssembly 的文章](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly 社区组](https://www.w3.org/community/webassembly/)
- [为 Wasm 编写一个 C 库脚本](https://web.developers.google.cn/articles/emscripting-a-c-library)
