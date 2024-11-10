---
title: ゲーム開発のためのツール
slug: Games/Tools
---

{{GamesSidebar}}

このページにはゲーム開発ツールに関する記事へのリンクがまとまっています。ゆくゆくはフレームワークやコンパイラー、デバッグ用ツールもカバーすることを目指しています。

- [asm.js](/ja/docs/Games/Tools/asm.js)
  - : asm.js は極めて限定された JavaScript のサブセットで、ahead-of-time (AOT) コンパイラーで最適化されて、通常の JavaScript コードよりも極めて高速に動作します。これはもちろん、ゲーム用に優れています。
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : LLVM から JavaScript へのコンパイラーです。これを利用することで、C++ や LLVM バイトコードを出力する言語のコードを、高速に動作する JavaScript へコンパイル可能です。これはアプリをウェブに移植する優秀なツールです! [有用な Emscripten のチュートリアルはこちらです。](https://github.com/emscripten-core/emscripten/wiki/Tutorial) なお [MDN にも Emscripten の記事を執筆中](/ja/docs/Emscripten)です。
- [Firefox プロファイラー](https://profiler.firefox.com/docs/#/)
  - : Gecko プロファイラーを利用すると、パフォーマンス上の問題を引き起こしている箇所の特定が容易になります。その結果あなたのゲームは最高速で動作できます。
- [Shumway](/ja/docs/Mozilla/Projects/Shumway)
  - : Shumway は Adobe Flash で作成されたものを JavaScript や WebGL などを用いてレンダリングします。これを利用することで Flash とオープンなウェブ標準との間の溝を埋められます。この文書では Shumway の利用方法と、バグ修正にコントリビュートする方法について解説します。
- ゲーム開発とデバッグのためのツールチェーン

  - : 通常のウェブアプリのデバッグとの違いや、ツールについて解説します。多くは[開発ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)でカバーされますが、特に有用なツールチェーンのチュートリアルはこちらです。

    - 基本的なツールの概要
    - [シェーダエディター](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - パフォーマンスツール
