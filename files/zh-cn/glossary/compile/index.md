---
title: 编译
slug: Glossary/Compile
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

编译是将使用特定{{Glossary("computer programming", "编程语言")}}编写的计算机程序转换为另一种格式或语言的一种过程。编译器是执行该任务的计算机程序。

通常，编译器会将使用高级语言（如 [C++](https://zh.wikipedia.org/wiki/C++)、[Rust](https://zh.wikipedia.org/wiki/Rust) 或 [Java](https://zh.wikipedia.org/wiki/Java)）编写的代码转换为可执行的（可运行的）代码——即所谓的*二进制码*或*机器码*。例如，WebAssembly 就是一种可执行的二进制代码形式，可以从[使用 C++、Rust、C#、Go、Swift 等多种语言编写的代码进行编译](https://webassembly.org/getting-started/developers-guide/)，并且大部分的功能都可以在任何网页上、在现代浏览器中运行（详见[兼容性](/zh-CN/docs/WebAssembly#browser_compatibility)）。

大多数编译器执行的是预先编译（AOT）或即时编译（JIT）之一。

GNU `gcc` 编译器是 AOT 编译器的一个著名示例。AOT 编译器通常在命令行中通过 shell 环境（从终端或控制台内部）或在 {{Glossary("IDE")}} 中调用。

JIT 编译器通常不会直接调用，而是内部构建到软件运行时中，以提高性能。例如，所有主要浏览器现在都使用具有内置 JIT 编译器的 JavaScript 引擎。

编译器还可以在高级语言之间进行转换——例如，从 TypeScript 到 {{Glossary("JavaScript")}}——在这种情况下，它们通常被称为转换器。

## 参见

- [WebAssembly](/en-US/docs/WebAssembly)
- 维基百科上的[编译器](https://zh.wikipedia.org/wiki/編譯器)
