---
title: 编译
slug: Glossary/Compile
l10n:
  sourceCommit: 06fb3fd5a4967ea68a766f318d08fd9d1bd46e9d
---

**编译**是将使用特定{{Glossary("computer programming", "编程语言")}}编写的计算机程序转换为一组其他格式的指令或其他语言的过程。**编译器**是执行该任务的计算机程序。

通常，编译器会将使用高级语言（如 [C++](https://zh.wikipedia.org/wiki/C++)、[Rust](https://zh.wikipedia.org/wiki/Rust) 或 [Java](https://zh.wikipedia.org/wiki/Java)）编写的代码转换为可执行的（可运行的）代码——即所谓的**二进制码**或**机器码**。[WebAssembly](/zh-CN/docs/WebAssembly) 就是一种可执行的二进制代码形式，[可以从使用 C++、Rust、C#、Go、Swift 等多种语言编写的代码进行编译](https://webassembly.org/getting-started/developers-guide/)，可以在现代浏览器中的任何网页上运行，并且大部分的功能都得到支持（详见[浏览器兼容性表](/zh-CN/docs/WebAssembly#浏览器兼容性)）。

大多数编译器执行的是预先编译（AOT）或即时编译（JIT）之一。

GNU `gcc` 编译器是 AOT 编译器的一个最常见的案例。AOT 编译器通常在命令行中通过 shell 环境（从终端或控制台内部）或在 {{Glossary("IDE")}} 中调用。

JIT 编译器通常不会直接调用，而是内部构建到软件运行时中，以提高性能。例如，所有主要浏览器现在都使用具有内置 JIT 编译器的 JavaScript 引擎。

编译器还可以在高级语言之间进行转换——例如，从 TypeScript 到 {{Glossary("JavaScript")}}——在这种情况下，它们通常被称为**转换器**。

## 参见

- 维基百科上的[编译器](https://zh.wikipedia.org/wiki/編譯器)
- [WebAssembly](/zh-CN/docs/WebAssembly)
