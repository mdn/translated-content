---
title: 実行時コンパイル (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**JIT**（_実行時コンパイル_）とは、実行前ではなく、実行時にコードを高水準言語 (JavaScript など) や中間表現 (Java バイトコードなど)からマシンコードに変換する {{glossary("compile", "Compile (コンパイル)")}} 処理です。この手法は、インタープリター方式と AOT(Ahead-of-Time) (事前)コンパイルの両方の利点を兼ね備えています。

JIT compilers typically continuously analyze the code as it is executed, identifying parts of the code that are executed frequently (hot spots). If the speedup gains outweigh the compilation overhead, then the JIT compilers will compile those parts into machine code. The compiled code is then executed directly by the processor, which can result in significant performance improvements.

JIT is commonly used in modern {{glossary("browser", "web browsers")}} to optimize the performance of JavaScript code.

## See also

- [Just-In-Time Compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) on Wikipedia
- Related glossary terms:
  - {{glossary("compile")}}
