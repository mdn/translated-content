---
title: 编译
slug: Glossary/Compile
original_slug: Glossary/编译
---

编译是将相同的程序从一种计算机程序语言转换到另一种语言计算机语言的过程。编译器是运行上述任务的软件。有时候，任务也被称为“汇编”或“构建”，这通常表示不仅仅编译完成，例如，用二进制格式进行打包。

通常，编译器转换一个人类理解的高级语言例如 c 或者 java 到机器语言，例如 cpu 理解的汇编语言。一些编译器转化同级别语言的被称为转换器或者交叉编译器，例如从 TypeScript 到 JavaScript 的编译。这些通常被理解为效率工具。

绝大多数编译器以预先编译（AOT）或实时编译（JIT）形式工作。作为一个开发者，你通常使用命令行或者集成开发环境（IDE）调用预先编译（AOT）的编译器。最出名的就是 gcc 编译器了。

实时编译器通常是用来提高性能的，令你没有感知的。例如在浏览器中，Firefox 的 SpiderMonkey 的 JavaScript 引擎又一个内置的实时编译器会在你浏览时将网页中的 JavaScript 代码编译为机器码，从而提供运行效率。类似 WebAssembly 的项目正在使这些工作做的更好。

## 了解更多

### 基础知识

- [Compiler](https://zh.wikipedia.org/wiki/Compiler) on Wikipedia
- The [GNU Compiler Collection (GCC)](https://gcc.gnu.org)

### 学习资料

- [Base CS Introduction on Compilers](https://medium.com/basecs/a-deeper-inspection-into-compilation-and-interpretation-d98952ebc842)
- [A big list of learning material on StackOverflow](https://stackoverflow.com/a/1672/133203)
