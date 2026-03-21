---
title: 実行時コンパイル (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**JIT**（_実行時コンパイル_）とは、実行前ではなく、実行時にコードを高水準言語 (JavaScript など) や中間表現 (Java バイトコードなど)からマシンコードに変換する {{glossary("compile", "Compile (コンパイル)")}} 処理です。この手法は、インタープリター方式と AOT(Ahead-of-Time) (事前)コンパイルの両方の利点を兼ね備えています。

JIT コンパイラは通常、コードの実行中に継続的に解析を行い、頻繁に実行される部分（ホットスポット）を特定します。コンパイルによるオーバーヘッドよりも高速化効果が大きい場合、JIT コンパイラはそれらの部分をマシンコードにコンパイルします。コンパイルされたコードはプロセッサによって直接実行されるため、大幅なパフォーマンス向上につながります。

JIT is commonly used in modern {{glossary("browser", "web browsers")}} to optimize the performance of JavaScript code.

## See also

- [Just-In-Time Compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) on Wikipedia
- Related glossary terms:
  - {{glossary("compile")}}
