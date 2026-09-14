---
title: 即时编译 (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: fabc398130abaab48f84f0e21c6755c8fb6dc836
---

**JIT**（_即时编译_，Just-In-Time Compilation）是一种{{glossary("compile", "编译")}}过程，代码会在运行时（而不是执行前）从中间表示或高级语言（如 {{glossary("JavaScript")}}、Java 字节码）翻译为机器码。这种方式结合了解释执行和预先编译（AOT）的优点。

JIT 编译器通常会在代码执行时持续分析代码，识别出被频繁执行的部分（热点）。如果加速带来的收益大于编译的开销，JIT 编译器就会将这些部分编译为机器码。编译后的代码由处理器直接执行，从而显著提升性能。

JIT 在现代 {{glossary("browser", "Web 浏览器")}}中被广泛用于优化 JavaScript 代码的性能。

## 参见

- 维基百科上的[即时编译](https://zh.wikipedia.org/wiki/即時編譯)
- 相关术语：
  - {{glossary("compile", "编译")}}
