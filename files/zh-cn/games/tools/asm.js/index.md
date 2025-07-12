---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

> [!WARNING]
> [asm.js](http://asmjs.org/) 规范已被视为**弃用**。开发者可以考虑使用 [WebAssembly](/zh-CN/docs/WebAssembly) 作为在浏览器中运行高性能代码的 asm.js 替代方案。

[Asm.js](http://asmjs.org/) 是一个定义了 JavaScript 子集的高度可优化的规范。本文将介绍 asm.js 子集允许的内容、带来的性能提升、使用场景及更多资源和示例。

## 什么是 asm.js？

它是 JavaScript 的一个非常小且严格的子集，只允许 `while`、`if`、数字、顶层命名函数等简单结构。不允许对象、字符串、闭包以及任何需要堆分配的内容。asm.js 代码在许多方面类似于 C，但它仍然是完全有效的 JavaScript，可以在所有当前引擎中运行。它推动 JS 引擎优化这类代码，并为 [Emscripten](https://github.com/emscripten-core/emscripten) 等编译器提供了明确的代码生成标准。我们将展示 asm.js 代码的样例，并解释其优势及用法。

这种 JavaScript 子集已经在许多 JS 引擎中通过高级即时编译（JIT）技术得到了高度优化。然而，通过定义明确的标准，我们可以进一步优化这类代码，挖掘其最大性能潜力。它也便于多个 JS 引擎之间的协作，因为标准易于讨论和基准测试。理论上，这类代码**应该**在每个引擎中都运行得非常快，如果没有，就是引擎的 bug，并且有明确的规范可供优化。

它还方便了希望在 Web 上生成高性能代码的编译器开发者。他们可以参考 asm.js 规范，只要遵循 asm.js 模式就能保证代码高效运行。[Emscripten](https://github.com/emscripten-core/emscripten)（C/C++ 到 JavaScript 编译器）会生成 asm.js 代码，使其在多个浏览器上以接近原生的性能运行。

此外，如果某个引擎选择专门识别 asm.js 代码，还可以做更多优化。目前只有 Firefox 浏览器这样做。

## asm.js 语言概述

asm.js 是一种中间编程语言。由于它仅限于极其受限的 JavaScript 子集，只提供严格类型的整数、浮点数、算术、函数调用和堆访问，因此性能非常可预测，接近原生代码。asm.js 已被主流浏览器支持。由于 asm.js 在浏览器中运行，因此高度依赖于浏览器和硬件。
