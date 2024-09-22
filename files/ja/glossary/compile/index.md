---
title: Compile (コンパイル)
slug: Glossary/Compile
l10n:
  sourceCommit: 06fb3fd5a4967ea68a766f318d08fd9d1bd46e9d
---

{{GlossarySidebar}}

**コンパイル**とは、指定された{{Glossary("computer programming", "言語")}}で書かれたコンピュータープログラムを、別の形式や言語の一連の命令に変換する作業のことです。**コンパイラー**は、その作業を実行するコンピュータープログラムのことです。

通常、コンパイラーは [C++](https://ja.wikipedia.org/wiki/C++)、[Rust](<https://ja.wikipedia.org/wiki/Rust_(プログラミング言語)>)、[Java](https://ja.wikipedia.org/wiki/Java) などの高級言語で書かれたコードを実行可能な（実行可能な）コード、いわゆる**バイナリーコード**や**機械語**に変換します。例えば、[WebAssembly](/ja/docs/WebAssembly) は実行可能なバイナリコードという形で、[C++、Rust、C#、Go、Swift、その他いくつかの言語で書かれたコードからコンパイルし](https://webassembly.org/getting-started/developers-guide/)、任意のウェブページ上で実行することができ、ほとんどの機能に現行ブラウザーが対応しています（[ブラウザー互換性表](/ja/docs/WebAssembly#ブラウザーの互換性)を参照）。

ほとんどのコンパイラーは、AOT (ahead-of-time) コンパイルまたは JIT (just-in-time) コンパイルを行います。

GNU の `gcc` コンパイラーは AOT コンパイラーの有名な例です。AOT コンパイラーは通常、シェル環境のコマンドラインから（端末やコンソールから）、あるいは {{Glossary("IDE")}} 内で呼び出されます。

JIT コンパイラーは通常、直接呼び出されるのではなく、パフォーマンスを向上させる目的で、ソフトウェアのランタイムに内部的に組み込まれています。例えば、主要なブラウザーはすべて、JIT コンパイラーを内蔵した JavaScript エンジンを使用しています。

コンパイラーは、例えば TypeScript から {{Glossary("JavaScript")}} へのように、より高いレベルの言語間で翻訳することもあり、この場合はよく**トランスパイラー** (transpiler) と呼ばれます。

## 関連情報

- [コンパイラ](https://ja.wikipedia.org/wiki/コンパイラ)（ウィキペディア）
- [WebAssembly](/ja/docs/WebAssembly)
