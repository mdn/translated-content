---
title: JavaScript 技術概説
slug: Web/JavaScript/Reference/JavaScript_technologies_overview
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

[HTML](/ja/docs/Web/HTML) がウェブページの構造と内容を定義し、[CSS](/ja/docs/Web/CSS) が書式と外観を定義しているのに対し、[JavaScript](/ja/docs/Web/JavaScript) はインタラクティブ機能をウェブページに追加し、豊かなウェブアプリケーションを作成します。

しかしながら、ウェブブラウザーの文脈で解釈されるこの "JavaScript" という包括的用語は、まったく異なる複数の要素を含んでいます。その要素とは、中核となるプログラミング言語 (ECMAScript)、もう一つは DOM（Document Object Model）を含む [Web API](/ja/docs/Web/API) 群です。

## JavaScript: コア言語 (ECMAScript)

JavaScript のコア言語は、ECMA TC39 委員会によって ECMAScript という名称の言語として標準化されています。"ECMAScript" は言語標準の正式名称ですが、"ECMAScript" と "JavaScript" は互換性のある用語として使用できます。

このコア言語はまた、[Node.js](https://nodejs.org/) などのブラウザー以外の環境でも使用されています。

### ECMAScript の該当範囲

とりわけ、ECMAScript は以下のものを定義しています。

- 言語文法（構文解析ルール、キーワード、制御フロー、オブジェクトリテラルの初期化、...）
- エラー処理の仕組み（{{jsxref("Statements/throw", "throw")}}、{{jsxref("Statements/try...catch", "try...catch")}}、ユーザー定義の {{jsxref("Error")}} 型の作成機能）
- 型（論理型、数値、文字列、関数、オブジェクト、…）
- プロトタイプベースの継承の仕組み
- 組み込みオブジェクトと関数、たとえば {{jsxref("JSON")}}、{{jsxref("Math")}}、[Array](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) のメソッド、{{jsxref("parseInt")}}、{{jsxref("decodeURI")}}、など
- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
- [モジュールシステム](/ja/docs/Web/JavaScript/Guide/Modules)
- 基本的なメモリーモデル

### 標準化プロセス

ECMAScript の各版は、ECMA 総会によって毎年標準として承認・公開されています。開発の全過程は、提案書、公式仕様書、会議議事録を公開している [Ecma TC39 GitHub organization](https://github.com/tc39) で公開されています。

ECMAScript 第 6 版（ES6 と呼ばれる）以前は、仕様は数年ごとに公開されており、一般的にメジャーバージョン番号（ES3、ES5 など）で参照されていました。ES6 後、仕様は公開年（ES2017、ES2018 など）で命名されるようになりました。ES6 は ES2015 と同義です。_ESNext_ は、執筆時点での次期バージョンを参照する動的な名称です。ESNext の機能は、定義上、仕様がまだ確定していないため、より正確には「提案」と呼ぶべきものです。

委員会で承認された ECMA-262 の最新版は、Ecma International の [ECMA-262 言語仕様ページ](https://ecma-international.org/publications-and-standards/standards/ecma-262/)にて、PDF および HTML 書式で利用できます。ECMA-262 および ECMA-402 は、仕様編集者によって継続的に保守・更新されています。TC39 のウェブサイトは、最新の [ECMA-262](https://tc39.es/ecma262/) および [ECMA-402](https://tc39.es/ecma402/) のバージョンをホストしています。

新しい構文や API の導入、既存の動作の見直しなど、言語の新機能については、提案という形で議論されます。それぞれの提案は [4 段階のプロセス](https://tc39.es/process-document/)を踏んで、通常はステージ 3 またはステージ 4 で JavaScript エンジンに実装され、一般に利用できる状態となります。

ECMAScript の歴史に関する情報については、[ウィキペディアの ECMAScript の項目](https://ja.wikipedia.org/wiki/ECMAScript)をご覧ください。

### 国際化 API

[ECMAScript 国際化 API 仕様](https://402.ecma-international.org/1.0/)は Ecma TC39 によって標準化された ECMAScript 言語仕様の増補仕様です。国際化 API は JavaScript アプリケーションのための照合機能（文字列比較）、数値フォーマット、日時フォーマットを提供し、アプリケーション上で言語を選択して必要に応じて各種機能を調整可能にします。標準仕様は 2012 年 12 月に承認されました。ブラウザーでの実装状況は {{jsxref("Intl")}} オブジェクトのドキュメントにて随時更新されています。国際化標準は昨今、毎年承認されてブラウザーは常に実装を改良しています。

### 関連リソース

ECMAScript 言語仕様や ECMAScript 国際化 API 仕様、および関連リソースに関する現在の取り組みに、参加したり、その進捗状況を追跡したりするには、さまざまな方法があります。

- [ECMAScript Language Specification repo](https://github.com/tc39/ecma262)
- [ECMAScript Internationalization API Specification repo](https://github.com/tc39/ecma402)
- [ECMAScript proposals repo](https://github.com/tc39/proposals)
- [ECMAScript conformance test suite repo](https://github.com/tc39/test262)
- [TC39 meeting notes](https://github.com/tc39/notes)
- [ECMAScript spec discussion; current mailing list](https://es.discourse.group/)
- [ECMAScript spec discussion; historical mailing-list archives (until March 2021)](https://esdiscuss.org/)

## DOM API

### WebIDL

[WebIDL 仕様](https://dev.w3.org/2006/webapi/WebIDL/)は DOM 技術と ECMAScript とを繋ぐ機能を提供します。

### DOM の中核

Document Object Model (DOM) は HTML、XHTML、XML 文書内のオブジェクトを表し、その情報をやりとりするための、クラスプラットフォームな**言語に依存しない取り決め**です。**DOM ツリー**内のオブジェクトはそのオブジェクトのメソッドを使って処理、操作できます。現在、[DOM コア](https://dom.spec.whatwg.org/)仕様は [WHATWG](/ja/docs/Glossary/WHATWG) によって維持管理されています（[W3C](/ja/docs/Glossary/W3C) 版に取って代わっています）。この仕様では、HTML および XML ブンショをオブジェクトとして抽象化する言語非依存のインターフェイスを定義すると同時に、この抽象化を操作するためのメカニズムも定義しています。これには、{{domxref("Node")}}、{{domxref("Element")}}、{{domxref("DocumentFragment")}}、{{domxref("Document")}}、{{domxref("DOMImplementation")}}、{{domxref("Event")}}、{{domxref("EventTarget")}} などです。

ECMAScript から見た場合に、DOM 仕様で定義されるオブジェクトのことを「ホストオブジェクト」と呼びます。

### HTML DOM

ウェブのマークアップ言語である [HTML](https://html.spec.whatwg.org/multipage/) は、DOM に関しても規定しています。HTML は DOM Core 内で定義された抽象概念の上位レイヤーを形成し、更に要素の意味も定義しています。HTML DOM には HTML 要素の `className` プロパティ、あるいは {{domxref("Document.body")}} といった API などが含まれます。

HTML 仕様はドキュメント上の制約事項についても定義しています。例えば、「順序なしリストを意味する {{htmlelement("ul")}} 要素のすべての子は、そのリストアイテムを意味する {{htmlelement("li")}} 要素でなければならない」などです。一般に、標準で定義されていない要素や属性を使用することは禁止されています。

{{domxref("Document")}} オブジェクトや、{{domxref("Window")}} オブジェクトや、その他の DOM 要素についてお探しであれば、[DOM ドキュメント](/ja/docs/Web/API/Document_Object_Model)をご覧ください。

## その他の重要な API

- {{domxref("Window.setTimeout", "setTimeout()")}} や {{domxref("Window.setInterval", "setInterval()")}} 関数は、当初は HTML 標準の {{domxref("Window")}} インターフェイスによって規定されていました。
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) は非同期の HTTP リクエストを送ることを可能にする API です。
- [フェッチ API](https://fetch.spec.whatwg.org/) は、ネットワークリクエストに対してより使いやすい抽象化を提供します。
- [CSS オブジェクト モデル](https://dev.w3.org/csswg/cssom/) (CSSOM) は CSS のルールをオブジェクトとして抽象化したものです。
- [WebWorkers](https://www.whatwg.org/specs/web-workers/current-work/) は並列処理を可能にする API です。
- [WebSockets](https://www.whatwg.org/C/#network) は双方向通信を可能にする API です。
- [Canvas 2D コンテキスト](https://www.whatwg.org/html/#2dcontext)は[`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas) 要素の描画 API です。
- [WebAssembly インターフェイス](https://webassembly.github.io/spec/js-api/)は、JavaScript コードと [WebAssembly](/ja/docs/WebAssembly) モジュール間の通信を行うためのユーティリティを提供しています。

Node.js のようなブラウザー以外の環境では、文書とやり取りを行わないため、DOM API を持たないことが多くの場合ありますが、それでも {{domxref("Window.fetch", "fetch()")}} や {{domxref("Window.setTimeout", "setTimeout()")}} など、多くの Web API が実装されているのが一般的です。

## JavaScript 実装

現在のウェブブラウザーで使用されている JavaScript エンジンには、次のようなものがあります。

- Mozilla の [SpiderMonkey](https://spidermonkey.dev/) は、Firefox、Servo、Flow などで使用されています。ブラウザー以外では、MongoDB や CouchDB などでも利用されています。これは、Netscape の Brendan Eich 氏によって作成された、史上初の JavaScript エンジンです。
- Google の [V8](https://v8.dev/) は、Chrome や、Opera、Edge、Brave などの Chromium ベースのブラウザーで使用されています。ブラウザー以外でのその他の利用例として、[Node.js](https://nodejs.org/)、[Deno](https://deno.com/)、[Electron](https://www.electronjs.org/) などがあります。
- Apple の [JavaScriptCore](https://docs.webkit.org/Deep%20Dive/JSC/JavaScriptCore.html) （SquirrelFish/Nitro とも呼ばれています）は、Safari やその他の WebKit ベースのブラウザーで使用されています。ブラウザー以外での利用例としては、[Bun](https://bun.com/) などがあります。
- [LibJS](https://serenityos.github.io/libjs-website/) は、[Ladybird](https://ladybird.org/) で使用されています。

以前のブラウザーで使用されていた JavaScript エンジンには、次のようなものがあります。

- [Carakan](<https://en.wikipedia.org/wiki/Presto_(browser_engine)#ECMAScript_engines>) は、Opera が Chromium ベースのブラウザーになるまで使われていました。
- Microsoft の [Chakra](https://ja.wikipedia.org/wiki/Chakra) は、Internet Explorer で使用されていました（ただし、商標上の問題を避けるため、実装されている言語は正式には "JScript" と呼ばれています）。Edge が Chromium ベースのブラウザーになる前は、以前のバージョンでは別の JavaScript エンジンが使用されていましたが、紛らわしいことに、同時に [Chakra](https://ja.wikipedia.org/wiki/Chakra) と呼ばれていました。

ブラウザー以外での用途に特化した JavaScript エンジンには、次のようなものがあります：

- [Engine262](https://engine262.js.org/) は、JavaScript で記述されており、本質的にはこの言語のリファレンス実装として意図されています。
- Meta の [Hermes](https://github.com/facebook/hermes) は、[React Native](https://reactnative.dev/docs/hermes) 向けに最適化されています。
- Mozilla の [Rhino](<https://en.wikipedia.org/wiki/Rhino_(JavaScript_engine)>) は、Java で記述されています。
- Oracle の [GraalJS](https://www.graalvm.org/) は、Java で記述され、GraalVM を基盤として構築されています。
- [Moddable XS](https://www.moddable.com/) は、IoT／埋め込みシステム向けに意図されています。
- [QuickJS](https://bellard.org/quickjs/) は、コンパクトで軽量であることを意図しています。

JavaScript エンジンは、アプリケーション開発者が JavaScript を自身のソフトウェアに組み込むために利用できる公開 API を提供しています。JavaScript にとって、最も一般的な実行環境はウェブブラウザーです。ウェブブラウザーは通常、この公開 API を使用して、[DOM](https://dom.spec.whatwg.org/) を JavaScript で反映する役割を担う**ホストオブジェクト**を作成します。

JavaScript のもう一つの一般的なアプリケーションは、（ウェブ）サーバーサイドのスクリプト言語としての利用です。JavaScript のウェブサーバーは、HTTP リクエストやレスポンスを表すホストオブジェクトを公開し、JavaScript プログラムがこれらを操作することで、ウェブページを動的に生成することができます。[Node.js](https://nodejs.org/) は、その代表的な例です。

## シェル

JavaScript シェルを使用すれば、ウェブページを再読み込みすることなく、JavaScript コードの断片をすばやく検査することができます。コードの開発やデバッグにおいて、非常に有益です。

### スタンドアロンの JavaScript シェル

以下の JavaScript シェルは、Perl や Python と同様に、独立した実行環境です。

- [Node.js](https://nodejs.org/) - Node.js は、高速でスケーラブルなネットワークアプリケーションを簡単に構築できるプラットフォームです。
- [ShellJS](https://github.com/shelljs/shelljs) - Node.js 用のポータブル Unix シェルコマンドです。

### ブラウザーベースの JavaScript シェル

以下の JavaScript シェルは、ブラウザーの JavaScript エンジンを通じてコードを実行します。

- Firefox には、複数行の編集に対応した[組み込みの JavaScript コンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html)が搭載されています。
- [Babel REPL](https://babeljs.io/repl) - ブラウザーベースの [REPL](https://en.wikipedia.org/wiki/REPL) で、次世代の JavaScript を試すことができます。
- [TypeScript playground](https://www.typescriptlang.org/play/) — 新しい JavaScript の機能（tsc コンパイラー経由）と TypeScript の構文の両方を試すことができる、ブラウザーベースの実験環境です。

## ツールとリソース

JavaScript コードの作成やデバッグに役立つツールです。

- [Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)、[JavaScript プロファイラー](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)、[デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)、など。
- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す方にとって素晴らしい学習リソースです。自動化された評価機能によるガイドのもと、短いレッスンとインタラクティブなテストを通じて、対話型の環境で JavaScript を学ぶことができます。最初の 40 レッスンは無料で、コース全体は少額の 1 回限りの支払いで利用可能です。
- [TogetherJS](https://togetherjs.com/)
  - : コラボレーションが簡単に。サイトに TogetherJS を追加するだけで、ユーザー同士がウェブサイト上でリアルタイムに助け合えるようになります！
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Stack Overflow の質問で、"JavaScript" とタグ付けされたもの。
- [JSFiddle](https://jsfiddle.net/)
  - : JavaScript、CSS、HTML を編集して、リアルタイムで結果を取得できます。外部リソースを使用し、チームとオンラインで共同作業を行えます。
- [Plunker](https://plnkr.co/)
  - : Plunker は、ウェブ開発のアイディアを作成・共同作業・共有するためのオンラインコミュニティです。JavaScript、CSS、HTML ファイルを編集すると、リアルタイムで結果やファイル構造を取得できます。
- [JS Bin](https://jsbin.com/)
  - : JS Bin は、オープンソースの共同ウェブ開発用デバッグツールです。
- [CodePen](https://codepen.io/)
  - : CodePen は、リアルタイムで結果を確認できるウェブ開発環境として使用されている、もう一つの共同ウェブ開発ツールです。
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz は、React や Angular などを使用したフルスタックアプリケーションをホスト・展開可能で、もうひとつのオンライン開発環境／デバッグツールです。
- [RunJS](https://runjs.app/)
  - : RunJS は、デスクトップ用のテスト環境／メモ帳ツールであり、リアルタイムで結果を確認できるほか、ノードおよびブラウザーの API の両方を提供します。
