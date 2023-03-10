---
title: WebAssembly
slug: WebAssembly
---

{{WebAssemblySidebar}}

WebAssembly 是一种新的编码方式，可以在现代的网络浏览器中运行 － 它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如 C / C ++等语言提供一个编译目标，以便它们可以在 Web 上运行。它也被设计为可以与 JavaScript 共存，允许两者一起工作。

## 简而言之

对于网络平台而言，WebAssembly 具有巨大的意义——它提供了一条途径，以使得以各种语言编写的代码都可以以接近原生的速度在 Web 中运行。在这种情况下，以前无法以此方式运行的客户端软件都将可以运行在 Web 中。

WebAssembly 被设计为可以和 JavaScript 一起协同工作——通过使用 WebAssembly 的 JavaScript API，你可以把 WebAssembly 模块加载到一个 JavaScript 应用中并且在两者之间共享功能。这允许你在同一个应用中利用 WebAssembly 的性能和威力以及 JavaScript 的表达力和灵活性，即使你可能并不知道如何编写 WebAssembly 代码。

而且，更棒的是，这是通过[W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)开发的一项网络标准，并得到了来自各大主要浏览器厂商的积极参与。

## 指南

- [WebAssembly 概念](/zh-CN/docs/WebAssembly/Concepts)
  - : 通过阅读 WebAssembly 后面的高层概念开始——也就是说，它为什么如此有用，它是如何适应网络平台的（以及其他）和如何使用它。
- [从 C/C++编译为 WebAssembly](/zh-CN/docs/WebAssembly/C_to_wasm)
  - : 当你使用 C/C++编写了代码后，你可以使用诸如 Emscripten 的工具把它编译为.wasm 文件。让我们看看这是如何工作的。
- [加载运行 WebAssembly 代码](/zh-CN/docs/WebAssembly/Loading_and_running)
  - : 本文介绍如何通过把[Fetch](/zh-CN/docs/Web/API/Fetch_API)或者[XHR](/zh-CN/docs/Web/API/XMLHttpRequest) API 与[WebAssembly JavaScript](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) API 结合在一起来获取、编译和实例化.wasm 文件。
- [缓存编译后的 WebAssembly 模块](/zh-CN/docs/WebAssembly/Caching_modules)
  - : 就提升应用启动速度而言，在客户端缓存大的 WebAssembly 模块是有用的。本文解释了如何使用[IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)来实现这一点。
- [使用 WebAssembly 的 JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
  - : 当加载了一个.wasm 模块之后，你就想要使用它。在本文中，我们向你展示了如何通过 WebAssembly 的 JavaScript API 来使用 WebAssembly。
- [导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Exported_functions)
  - : 导出的 WebAssembly 函数是 WebAssembly 函数的 JavaScript 表现形式，并且允许从 JavaScript 中调用 WebAssembly 代码。本文描述它们。
- [理解 WebAssembly 的文本格式](/zh-CN/docs/WebAssembly/Understanding_the_text_format)
  - : 本文介绍了 wasm 的文本格式。这是在进行调试的时候浏览器开发者工具中展现出来的.wasm 模块的一种低级文本表示。
- [把 WebAssembly 文本格式转换为 wasm](/zh-CN/docs/WebAssembly/Text_format_to_wasm)
  - : 本文提供了一个如何把编写的文本格式的 WebAssembly 模块转换为 wasm 二进制的指南。

## API 参考

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : 本对象是所有与 WebAssembly 相关功能的命名空间。
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module")}}
  - : 一个`WebAssembly.Module`对象包括了无状态的 WebAssembly 代码。该代码已经被浏览器编译并且能够[通过 Workers 高效地共享](/zh-CN/docs/Web/API/Worker/postMessage)，[缓存到 IndexedDB 中](/zh-CN/docs/WebAssembly/Caching_modules)以及多次实例化。
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance")}}
  - : 一个`WebAssembly.Instance`对象是一个有状态的、可执行的模块的实例。实例对象包含所有的能够从 JavaScript 调用到 WebAssembly 代码的[导出的 WebAssembly 函数](/zh-CN/docs/WebAssembly/Exported_functions)。
- {{jsxref("Global_objects/WebAssembly/instantiate", "WebAssembly.instantiate()")}}
  - : `WebAssembly.instantiate()` 函数是编译和实例化 WebAssembly 代码的主要的 API，它返回一个`Module`及其第一个实例。
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : 一个`WebAssembly.Memory` 对象是一个可变长的{{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}}。它拥有能够被实例存取的原始字节内存。
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : `WebAssembly.Table`对象是一个可变长类型数组。它存储诸如函数引用之类的不透明值并且能够被实例存取。
- {{jsxref("WebAssembly.CompileError()")}}
  - : 创建一个新的 WebAssembly `CompileError`对象。
- {{jsxref("WebAssembly.LinkError()")}}
  - : 创建一个新的 WebAssembly `LinkError`对象。
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : 创建一个新的 WebAssembly `RuntimeError`对象。

## 示例

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- 参考我们的[WebAssembly 示例](https://github.com/mdn/webassembly-examples/)库来获取一些其他的例子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [webassembly.org](http://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Large-Allocation HTTP header](/zh-CN/docs/Web/HTTP/Headers/Large-Allocation)
