---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Landing page
  - Learn
  - l10n:priority
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (**JS**) は軽量で、インタープリター型、あるいは[実行時](https://ja.wikipedia.org/wiki/%E5%AE%9F%E8%A1%8C%E6%99%82%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9)コンパイルされる、{{Glossary("First-class Function", "第一級関数")}}を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、[多くの非ブラウザー環境](https://ja.wikipedia.org/wiki/JavaScript#その他の環境での利用)、例えば {{Glossary("Node.js")}} や  [Apache CouchDB](https://couchdb.apache.org/) や [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html) などでも使用されています。 JavaScript は{{Glossary("Prototype-based programming", "プロトタイプベース")}}で、シングルスレッドで、動的型付けを持ち、そしてオブジェクト指向、命令型、宣言型 (関数プログラミングなど) といったスタイルをサポートするマルチパラダイムのスクリプト言語です。詳しくは [JavaScript について](/ja/docs/Web/JavaScript/About_JavaScript)をお読みください。

この章では JavaScript 言語自体について、すなわちウェブページや他のホスト環境に限定されないコアの部分に限定して解説しています。ウェブページ特有の {{Glossary("API")}} 群の情報を得たい場合は [Web API](/ja/docs/Web/API) と {{Glossary("DOM")}} を参照してください。

JavaScript の標準仕様は [ECMAScript Language Specification](https://tc39.es/ecma262/) および [ECMAScript Internationalization API specification](https://tc39.es/ecma402/) (ECMA-402) です。 MDN 至る所にある JavaScript のドキュメントは ECMA-262 と ECMA-402 の最新の草稿に基づいています。また、 [ECMAScript の新機能の提案](https://github.com/tc39/proposals) の一部がすでにブラウザーに実装されている場合、 MDN の記事のドキュメントや例には、その新機能の一部が使用されることがあります。

JavaScript を[プログラミング言語 Java](https://ja.wikipedia.org/wiki/Java) と混同しないでください。 Java と JavaScript は両方ともアメリカやその他の国においてオラクルの商標または登録商標です。しかし、この 2 つのプログラミング言語は構文、セマンティック、利用形態が大きく異なります。

> **Callout:** **フロントエンドのウェブ開発者を目指している方へ**
>
> ゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。
>
> [**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## チュートリアル

ガイドやチュートリアルを使って JavaScript をプログラムする方法を学びましょう。

### 完全な初心者向け

JavaScript について学びたいと思っているが、JavaScript あるいはプログラミングについて過去に経験がないのであれば、 [JavaScript 学習エリアのトピック](/ja/docs/Learn/JavaScript)<a href="/ja/docs/Learn/JavaScript">JavaScript 学習エリア</a>に向かいましょう。以下のモジュールが利用可能です。

- [JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)
  - : 変数、文字列、数値、配列のような JavaScript の基本機能の解説に加え、「JavaScript とは何か」「何に似ているか」「何ができるか」といった基本的な質問に答えます。
- [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)
  - : 引き続き JavaScript の基本機能について、条件分岐、ループ、関数、イベントなどのよく目にするタイプのコードブロックに注意を向けつつ説明します。
- [JavaScript のオブジェクトの紹介](/ja/docs/Learn/JavaScript/Objects)
  - : 言語に関する知識をさらに深め、より効率的なコードを書きたいのであれば、JavaScript のオブジェクト指向の性質を理解することは重要です。このため、私たちが提供するこのモジュールが役立つでしょう。
- [非同期 JavaScript](/ja/docs/Learn/JavaScript/Asynchronous)
  - : 非同期 JavaScript について、なぜ重要なのか、どのように使用してサーバーからのリソースの読み取りなどのブロックが発生する可能性がある操作を効果的に扱うことができるのかを説明します。
- [クライアント側ウェブ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs)
  - : API とは何か、開発作業でよく見かける、最も一般的な API の一部の使い方を説明します。

### JavaScript ガイド

- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)
  - : JavaScript や他の言語でのプログラミング経験がある方を対象とした、より詳細な JavaScript 言語のガイドです。

### 中級者向け

- [クライアント側の JavaScript フレームワークの理解](/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript フレームワークは、最新のフロントエンドウェブ開発に欠かせないもので、拡張性のある双方向のウェブアプリケーションを構築するための、試行錯誤されたツールを開発者に提供します。幾つかの有名なツールについて取り扱うチュートリアルに移動する前に、クライアントサイドのフレームワークがどのように動作するのか、自分のツールセットにどのように適合させるか、についての基本的な背景知識を提供します。
- [JavaScript 再入門](/ja/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : JavaScript について知っている*と思っている*人のための概要です。
- [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Data_structures)
  - : JavaScript で利用可能なデータ構造の概要です。
- [等値比較と同一性](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript には 3 つの異なる値の比較演算子があります。 `===` を用いる厳格な等値性比較、 `==` を用いる緩い等値性比較、そして {{jsxref("Global_Objects/Object/is", "Object.is()")}} メソッドです。
- [クロージャ](/ja/docs/Web/JavaScript/Closures)
  - : クロージャとは、関数と、その関数が宣言された字句環境の組み合わせです。

### 上級者向け

- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : よく誤解されたり過小評価されたりしているプロトタイプベースの継承に対する説明です。
- [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
  - : Strict モードは変数を初期化前に使えないようにします。これは ECMAScript 5 の厳格版で、性能をより高めたりデバッグをより簡単にしたりするためのものです。
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript の型付き配列は未加工のバイナリーデータにアクセスするメカニズムを提供します。
- [メモリー管理](/ja/docs/Web/JavaScript/Memory_Management)
  - : JavaScript におけるメモリーのライフサイクルとガベージコレクションです。
- [同時実行モデルとイベントループ](/ja/docs/Web/JavaScript/EventLoop)
  - : JavaScript は「イベントループ」に基づく同時実行モデルを持っています。

## リファレンス

完全な [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)ドキュメントをご覧ください。

- [標準オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects)
  - : 標準組み込みオブジェクトである {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}} などについて理解しましょう。
- [式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)
  - : JavaScript の演算子である {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}} などの挙動、そして[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)などについて学びましょう。
- [文と宣言](/ja/docs/Web/JavaScript/Reference/Statements)
  - : {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} などの JavaScript の文やキーワードがどのように機能するか学びましょう。
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
  - : JavaScript の関数を使ってアプリケーションを開発する方法を学びましょう。

## ツールとリソース

**JavaScript** のコードを書いたりデバッグしたりするのに役立つツールです。

- [Firefox 開発ツール](/ja/docs/Tools)
  - : [ウェブコンソール](/ja/docs/Tools/Web_Console)、[JavaScript プロファイラー](/ja/docs/Tools/Performance)、[デバッガー](/ja/docs/Tools/Debugger)など。
- [JavaScript シェル](/ja/docs/Web/JavaScript/Shells)
  - : JavaScript シェルで、 JavaScript コードの断片をすばやくテストすることができます。
- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す方のための優れた教材です。短いレッスンとインタラクティブなテスト、自動評価によるガイドにより、インタラクティブな環境で JavaScript を学ぶことができます。最初の 40 レッスンは無料で、全コースはわずかな一回の支払いで利用できます。
- [TogetherJS](https://togetherjs.com/)
  - : コラボレーションが簡単に。あなたのサイトに TogetherJS を追加することで、ユーザーはウェブサイト上でリアルタイムに助け合うことができます。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : "JavaScript" でタグ付けされた Stack Overflow の質問です。<br>(訳注: 日本語情報となると <a href="https://qiita.com/tags/JavaScript">Qiita</a> がよいかもしれません。)
- [JSFiddle](https://jsfiddle.net/)
  - : JavaScript、CSS、HTML を編集し、リアルタイムで実行結果を表示できるサイト。外部リソースを使い、オンライン上でチームと共同作業が行えます。
- [Plunker](https://plnkr.co/)
  - : Plunker はウェブ開発のアイデアを作成、共同作業、共有するためのオンラインコミュニティです。JavaScript や CSS、HTML ファイルを編集し、ライブでの実行結果やファイル構造を取得することができます。
- [JSBin](https://jsbin.com/)
  - : JS Bin は、オープンソースの共同ウェブ開発デバッグツールです。
- [Codepen](https://codepen.io/)
  - : Codepen はライブの結果の実行環境を使用した、もう一つの共同開発ウェブ開発ツールです。
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz はもう一つの実行・デバッグツールであり、 React や Angular などを使用したアプリケーションのスタック全体をホスティングして配置することができます。
- [RunJS](https://runjs.app/)
  - : RunJS はデスクトップの遊び場/お絵描きツールで、ライブの結果を提供し、 Node と Browser の両方の API にアクセスすることができます。
