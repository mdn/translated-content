---
title: 実行時コンパイル (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**JIT**（_実行時コンパイル_）とは、実行前ではなく、実行時にコードを高水準言語 (JavaScript など) や中間表現 (Java バイトコードなど)からマシンコードに変換する {{glossary("compile", "Compile (コンパイル)")}} 処理です。この手法は、インタープリター方式と AOT(Ahead-of-Time) (事前)コンパイルの両方の利点を兼ね備えています。

JIT コンパイラは通常、コードの実行中に継続的に解析を行い、頻繁に実行される部分（ホットスポット）を特定します。コンパイルによるオーバーヘッドよりも高速化効果が大きい場合、JIT コンパイラはそれらの部分をマシンコードにコンパイルします。コンパイルされたコードはプロセッサによって直接実行されるため、大幅なパフォーマンス向上につながります。

JIT は、JavaScript コードのパフォーマンスを最適化するために、現代の {{glossary("browser", "ブラウザー")}} で一般的に使用されています。

## 関連情報

- Wikipedia の [実行時コンパイラ](https://ja.wikipedia.org/wiki/%E5%AE%9F%E8%A1%8C%E6%99%82%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9)
- 関連用語集：
  - {{glossary("compile", "Compile (コンパイル)")}}
