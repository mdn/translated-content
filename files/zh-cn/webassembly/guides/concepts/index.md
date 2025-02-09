---
title: WebAssembly 概念
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: b9a41e258e656b57f41e8aaf88f93e51bb27974d
---

本文解释了 WebAssembly 如何工作的概念，包括它的目标、它解决的问题以及它是如何在网络浏览器的渲染引擎中运行的。

## WebAssembly 是什么？

WebAssembly 是一种运行在现代 web 浏览器中的新型代码，并且提供新的性能特性，同时提升了性能。它设计的目的不是为了手写代码，而是为诸如 C、C++ 和 Rust 等源语言提供一个有效的编译目标。

对于 Web 平台而言，这具有巨大的意义——这为客户端 App 提供了一种在 Web 平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端 App 是不可能做到的。

而且，你在不知道如何编写 WebAssembly 代码的情况下就可以使用它。WebAssembly 的模块可以被导入的到一个 Web App（或 Node.js）中，并且暴露出供 JavaScript 使用的 WebAssembly 函数。JavaScript 框架不但可以使用 WebAssembly 获得巨大性能优势和新特性，而且还能使得各种功能保持对网络开发者的易用性。

## WebAssembly 的目标

作为 [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)中的一项开放标准，WebAssembly 是为下列目标而生的：

- 快速、高效、可移植——通过利用[常见的硬件能力](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution)，WebAssembly 代码在不同平台上能够以接近本地速度运行。
- 可读、可调试——WebAssembly 是一门低阶语言，但是它有确实有一种人类可读的文本格式（其标准即将得到最终版本），这允许通过手工来写代码，看代码以及调试代码。
- 保持安全——WebAssembly 被限制运行在一个安全的沙箱执行环境中。像其他网络代码一样，它遵循浏览器的同源策略和授权策略。
- 不破坏 Web——WebAssembly 的设计原则是与其他网络技术和谐共处并保持向后兼容。

> [!NOTE]
> WebAssembly 也用在网络和 JavaScript 环境之外（参考[非网络嵌入](http://webassembly.org/docs/non-web/)）。

## WebAssembly 如何适应网络平台？

网络平台可以被想象成拥有两个部分：

- 一个运行网络程序（Web app）代码的虚拟机（比如给你的程序提供能力的 JavaScript）
- 一系列网络程序能够调用从而控制网络浏览器/设备功能，并且能够让事物发生变化的 Web API（[DOM](/zh-CN/docs/Web/API/Document_Object_Model)、[CSSOM](/zh-CN/docs/Web/API/CSS_Object_Model)、[WebGL](/zh-CN/docs/Web/API/WebGL_API)、[IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)、[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 等）。

从历史角度讲，虚拟机过去只能加载 JavaScript。这对我们而言足够了，因为 JavaScript 足够强大从而能够解决人们在当今网络上遇到的绝大部分问题。尽管如此，当试图把 JavaScript 应用到诸如 3D 游戏、虚拟现实、增强现实、计算机视觉、图像/视频编辑以及大量的要求原生性能的其他领域的时候，我们遇到了性能问题（参考 [WebAssembly 使用案例](http://webassembly.org/docs/use-cases/)获取更多细节）。

而且，下载、解析以及编译巨大的 JavaScript 应用程序的成本是过高的。移动平台和其他资源受限平台进一步放大了这些性能瓶颈。

WebAssembly 是一门不同于 JavaScript 的语言，但是，它不是用来取代 JavaScript 的。相反，它被设计为和 JavaScript 一起协同工作，从而使得网络开发者能够利用两种语言的优势：

- JavaScript 是一门高级语言。对于写网络应用程序而言，它足够灵活且富有表达力。它有许多优势——它是动态类型的，不需要编译环节以及一个巨大的能够提供强大框架、库和其他工具的生态系统。
- WebAssembly 是一门低级的类汇编语言。它有一种紧凑的二进制格式，使其能够以接近原生性能的速度运行，并且为诸如 C++ 和 Rust 等拥有低级的内存模型语言提供了一个编译目标，以便它们能够在网络上运行。（注意，WebAssembly 有一个在将来支持使用了垃圾回收内存模型的语言的[高级目标](https://webassembly.org/docs/high-level-goals/)。）

随着 WebAssembly 出现在了浏览器中，我们前面提到的虚拟机将会加载和运行两种类型的代码——JavaScript 和 WebAssembly。

不同类型的代码能够按需进行相互调用——[WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface) 将需要导出的 WebAssembly 代码封装成 JavaScript 函数，使其能够像常规 JavaScript 函数一样被调用，并且 WebAssembly 代码还可以导入并同步调用常规 JavaScript 函数。事实上，WebAssembly 代码的基本单元被称作模块，并且 WebAssembly 的模块在很多方面都和 ES 的模块是等价的。

### WebAssembly 关键概念

为了理解 WebAssembly 如何在浏览器中运行，需要了解几个关键概念。所有这些概念在 [WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Reference/JavaScript_interface) 中都存在一一映射。

- **模块**：表示一个已经被浏览器编译为可执行机器码的 WebAssembly 二进制代码。一个模块是无状态的，并且像一个[二进制大对象](/zh-CN/docs/Web/API/Blob)（`Blob`）一样在 Window 和 Worker 之间进行共享（通过 [`postMessage()`](/zh-CN/docs/Web/API/MessagePort/postMessage) 函数）。一个模块能够像一个 ES 的模块一样声明导入和导出。
- **内存**：一个可变长的 ArrayBuffer。本质上是连续的字节数组，WebAssembly 的低级内存存取指令可以对它进行读写操作。
- **表格**：一个可变长的类型化数组。表格中的项存储了不能作为原始字节存储在内存里的对象的引用（为了安全和可移植性的原因）。
- **实例**：一个模块及其在运行时使用的所有状态，包括内存、表格和一系列导入值。一个实例就像一个已经被加载到一个拥有一组特定导入的特定的全局变量的 ES 模块。

JavaScript API 为开发者提供了创建模块、内存、表格和实例的能力。给定一个 WebAssembly 实例，JavaScript 代码能够调用普通 JavaScript 函数暴露出来的导出代码。通过把 JavaScript 函数导入到 WebAssembly 实例中，任意的 JavaScript 函数都能被 WebAssembly 代码同步调用。

因为 JavaScript 能够完全控制 WebAssembly 代码如何下载、编译运行，所以，JavaScript 开发者甚至可以把 WebAssembly 想象成一个高效地生成高性能函数的 JavaScript 特性。

将来，WebAssembly 模块将会[像 ES 模块那样加载](http://webassembly.org/docs/modules/#integration-with-es6-modules)（使用 `<script type='module'>`），这也就意味着 JavaScript 代码能够像轻松地使用一个 ES 模块那样来获取、编译和导入一个 WebAssembly 模块。

## 如何在我的 app 中使用 WebAssembly？

上面我们讨论了 WebAssembly 向网络平台增加的基本要素：代码的二进制格式、加载运行该二进制代码的 API。现在让我们讨论如何在实践中使用这些基本要素。

WebAssembly 生态系统处在初始阶段；更多的工具会毫无疑问得不断出现。当前，有四个主要的着手点：

- 使用 [Emscripten](https://emscripten.org/) 移植一个 C/C++ 应用程序。
- 直接在汇编层，编写或生成 WebAssembly 代码。
- 编写 Rust 程序，将 WebAssembly 作为它的输出。
- 使用 [AssemblyScript](https://www.assemblyscript.org/)，它类似于 TypeScript 并且可编译成二进制 WebAssembly 代码。

让我们讨论这几项：

### 从 C/C++ 移植

创建 WASM 代码的众多选项中有两个是在线 WASM 汇编程序或 [Emscripten](/zh-CN/docs/Mozilla/Projects/Emscripten)。有许多在线 WASM 汇编程序可供选择，例如：

- [WasmFiddle++](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer](https://mbebenita.github.io/WasmExplorer/)

对于那些想知道从何入手的人来说，这些都是很好的资源，但它们缺少 Emscripten 的一些工具和优化功能。

Emscripten 工具可以将任何 C/C++ 源代码编译成 Wasm 模块，再加上必要的 JavaScript 粘合代码，用于加载和运行模块，以及显示代码结果的 HTML 文档。

[图：Emscripten 将 C/C++ 源代码编译成一个 Wasm 模块、一个 HTML 文档以及 JavaScript 的粘合代码。](emscripten-diagram.png)

简而言之，工作流程如下所示：

1. Emscripten 首先把 C/C++ 提供给 clang+LLVM——一个成熟的开源 C/C++ 编译器工具链，比如，在 OSX 上是 XCode 的一部分。
2. Emscripten 将 clang+LLVM 编译的结果转换为 Wasm 二进制文件。
3. 目前，WebAssembly 本身无法直接访问 DOM；它只能调用 JavaScript，并且只能传入整型和浮点型的原始数据类型作为参数。这就是说，为了使用任何 Web API，WebAssembly 需要调用 JavaScript，然后由 JavaScript 进行 Web API 调用。因此，Emscripten 创建了 HTML 和 JavaScript 粘合代码以便完成这些功能。

> [!NOTE]
> 计划将来[允许 WebAssembly 直接调用 Web API](https://github.com/WebAssembly/gc/blob/master/README.md)。

JavaScript 粘合代码并不是像你想象的那么简单。首先，Emscripten 实现了流行的 C/C++ 库，比如，[SDL](https://zh.wikipedia.org/wiki/SDL)、[OpenGL](https://zh.wikipedia.org/wiki/OpenGL)、[OpenAL](https://zh.wikipedia.org/wiki/OpenAL) 以及部分 [POSIX](https://zh.wikipedia.org/wiki/可移植操作系统接口)。这些库以 Web API 的形式实现，并且每个库需要一个 JavaScript 粘合代码来连接 WebAssembly 和低层的 Web API。

因此，部分粘合代码实现了 C/C++ 代码使用的库的功能。而且，粘合代码还包括调用前面提到的 WebAssembly 的 JavaScript API 来获取、加载和运行 Wasm 文件的逻辑。

生成的 HTML 文档加载 JavaScript 胶水文件，并且将 stdout 输出到 {{htmlelement("textarea")}}。如果应用程序使用了 OpenGL，HTML 文档还会包含一个用来渲染目标的 {{htmlelement("canvas")}} 标签。修改 Emscripten 的输出文件并将其转换为需要的 Web App 是很容易的。

你可以在 [emscripten.org](http://emscripten.org) 找到关于 Emscripten 的完整文档以及在[将 C/C++ 编译为 WebAssembly](/zh-CN/docs/WebAssembly/Guides/C_to_Wasm) 找到一个实现工具链并交叉编译你自己的 C/C++ 应用程序为 wasm 的指南。

### 直接编写 WebAssembly 代码

你想构建自己的编译器，或者你自己的工具，或者创建一个能够在运行时生成 WebAssembly 代码的 JavaScript 库吗？

就像真实的汇编语言一样，WebAssembly 的二进制格式也有文本表示——两者之间 1:1 对应。你可以手工书写或者生成这种格式然后使用这些工具（[WebAssembly 文本转化为二进制工具](http://webassembly.org/getting-started/advanced-tools/)）中的任何一个把它转换为二进制格式。

有关如何完成此操作的简单指南，请参阅我们的[转换 WebAssembly 文本格式为 Wasm](/zh-CN/docs/WebAssembly/Guides/Text_format_to_Wasm) 指南。

### 编写以 WebAssembly 为目标的 Rust 代码

在 Rust WebAssembly 工作组（Rust WebAssembly Working Group）的不懈努力下，编写 Rust 代码并编译到 WebAssembly 也成为可能。你可以在我们的[从 Rust 编译到 WebAssembly](/zh-CN/docs/WebAssembly/Guides/Rust_to_Wasm) 一文中开始安装必要的工具链，将 Rust 示例程序编译到 WebAssembly npm 包中，并在示例 Web 应用程序中使用。

### 使用 AssemblyScript

对于想尝试 WebAssembly 而又不需要学习 C 或 Rust 细节的网络开发者来说，AssemblyScript 将是最好的选择。AssemblyScript 将 TypeScript 的严格变体编译为 WebAssembly，让网络开发者可以继续使用他们熟悉的 TypeScript 兼容工具，如 Prettier、ESLint、VS Code IntelliSense 等。你可以在 <https://www.assemblyscript.org/> 上查看其文档。

## 总结

本文给你解释了 WebAssembly 是什么，它为什么如此有用，它是如何适应网络的以及你如何才能使用它。

## 参考

- [Mozilla Hacks 博客上关于 WebAssembly 的文章](https://hacks.mozilla.org/category/webassembly/)
- [Mozilla Research 上关于 WebAssembly 的文章](https://research.mozilla.org/webassembly/)
- [加载运行 WebAssembly 代码](/zh-CN/docs/WebAssembly/Guides/Loading_and_running)——探究如何把你自己的 WebAssembly 模块加载到网页中。
- [使用 WebAssembly 的 JavaScript API](/zh-CN/docs/WebAssembly/Guides/Using_the_JavaScript_API)——探究如何使用 WebAssembly 的 JavaScript API 的其他主要特性。
