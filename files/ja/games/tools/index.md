---
title: ゲーム開発のためのツール
slug: Games/Tools
tags:
  - Games
  - Gecko
  - Guide
  - JavaScript
  - NeedsTranslation
  - TopicStub
translation_of: Games/Tools
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

このページにはゲーム開発ツールに関する記事へのリンクがまとまっています。ゆくゆくはフレームワークやコンパイラ、デバッグ用ツールもカバーすることを目指しています。

- [asm.js](/ja/docs/Games/Tools/asm.js)
  - : asm.js は極めて限定された JavaScript のサブセットで、ahead-of-time (AOT) コンパイラで最適化されて、通常の JavaScript コードよりも極めて高速に動作します。これはもちろん、ゲーム用に優れています。
- [Emscripten](https://github.com/kripken/emscripten/wiki)
  - : LLVM から JavaScript へのコンパイラです。これを利用することで、C++ や LLVM バイトコードを出力する言語のコードを、高速に動作する JavaScript へコンパイル可能です。これはアプリを Web に移植する優秀なツールです! [有用な Emscripten のチュートリアルはこちらです。](https://github.com/kripken/emscripten/wiki/Tutorial) なお [MDN にも Emscripten の記事を執筆中](/ja/docs/Mozilla/Projects/Emscripten)です。
- [Gecko プロファイラ](/ja/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler "https://addons.mozilla.org/en-us/firefox/addon/gecko-profiler/")
  - : Gecko プロファイラを利用すると、パフォーマンス上の問題を引き起こしている箇所の特定が容易になります。その結果あなたのゲームは最高速で動作できます。
- [ゲームエンジンとツール](/ja/docs/Games/Tools/Engines_and_tools)
  - : ゲーム開発者にとって有用な、ゲームエンジンとテンプレートのまとめです。
- [Shumway](/ja/docs/Mozilla/Projects/Shumway)
  - : Shumway は Adobe Flash で作成されたものを JavaScript や WebGL などを用いてレンダリングします。これを利用することで Flash とオープンな Web 標準との間の溝を埋められます。この文書では Shumway の利用方法と、バグ修正にコントリビュートする方法について解説します。
- ゲーム開発とデバッグのためのツールチェーン
  - : 通常の Web アプリのデバッグとの違いや、ツールについて解説します。多くは[開発ツール](/ja/docs/Tools)でカバーされますが、特に有用なツールチェーンのチュートリアルはこちらです：\* 基本的なツールの概要
    - [シェーダエディタ](/ja/docs/Tools/Shader_Editor)
    - パフォーマンスツール
