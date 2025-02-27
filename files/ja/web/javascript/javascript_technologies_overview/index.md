---
title: JavaScript 技術概説
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

## はじめに

[HTML](/ja/docs/Web/HTML) がウェブページの構造と内容を定義し、[CSS](/ja/docs/Web/CSS) が書式と外観を定義しているのに対し、[JavaScript](/ja/docs/Web/JavaScript) はインタラクティブ機能をウェブページに追加し、豊かなウェブアプリケーションを作成します。

しかしながら、ウェブブラウザーの文脈で解釈されるこの「JavaScript」という包括的用語は、まったく異なる複数の要素を含んでいます。その要素とは、中核となるプログラミング言語（ECMAScript）、もう一つは DOM（Document Object Model）を含んだ [Web API](/ja/docs/Web/API) 群です。

## JavaScript: コア言語 (ECMAScript)

JavaScript の中核となる言語は [ECMAScript](/ja/docs/Web/JavaScript/JavaScript_technologies_overview) という名前の言語として ECMA TC39 委員会で標準化されています。

このコア言語はまた、[node.js](https://nodejs.org/) といったブラウザー以外の環境でも使用されています。

### ECMAScript の該当範囲

とりわけ、ECMAScript は以下のものを定義しています。

- 言語文法（構文解析のルール、キーワード、制御フロー、オブジェクトリテラルの初期化、…）
- エラー処理のメカニズム （`throw`、`try/catch`、ユーザー定義エラー型の作成機能）
- 型 （真偽値、数値、文字列、関数、オブジェクト、…）
- グローバルオブジェクト。ブラウザー環境では、このグローバルオブジェクトは `window` オブジェクトですが、ECMAScript ではブラウザーとは直接関係のない API のみが定義されています。例えば `parseInt`、`parseFloat`、`decodeURI`、`encodeURI`……
- プロトタイプベースの継承メカニズム。その対象は次のもの:
- ビルトインオブジェクトと関数（`JSON`、`Math`、`Array.prototype` メソッド、オブジェクト内部確認メソッド……）
- Strict モード ([ここ](/ja/docs/Web/JavaScript/Reference/Strict_mode)を見てください)

### ブラウザーサポート

2016 年 10 月以降、主要ウェブブラウザーの現在のバージョンは、[ECMAScript 5.1](/ja/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) と [ECMAScript 2015（ES6 としても知られる）](/ja/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla)を実装していますが、（まだ使用中の）古いバージョンは ECMAScript 5 のみが実装されています。

### 将来

ECMAScript の第 6 版は、ECMA 総会で 2015 年 6 月 17 日に正式に承認され、標準として公開されました。それ以来、ECMAScript の版は毎年発行されています。

### 国際化 API

[ECMAScript 国際化 API 仕様](https://ecma-international.org/ecma-402/1.0/)は Ecma TC39 によって標準化された ECMAScript 言語仕様の増補仕様です。国際化 API は JavaScript アプリケーションのための照合機能（文字列比較）、数値フォーマット、日時フォーマットを提供し、アプリケーション上で言語を選択して必要に応じて各種機能を調整可能にします。標準仕様は 2012 年 12 月に承認されました。ブラウザーでの実装状況は [`Intl` オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)のドキュメントにて随時更新されています。国際化標準は昨今、毎年承認されてブラウザーは常に実装を改良しています。

## DOM API

### WebIDL

[WebIDL 仕様](https://dev.w3.org/2006/webapi/WebIDL/)は DOM 技術と ECMAScript とを繋ぐ機能を提供します。

### DOM の中核

Document Object Model (DOM) は HTML、XHTML、XML ドキュメント内のオブジェクトを表し、その情報をやりとりするための、クラスプラットフォームな**言語に依存しない取り決め**です。**DOM ツリー**内のオブジェクトはそのオブジェクトのメソッドを使って処理、操作できます。{{glossary("W3C")}} によって Document Object Model の中核部分が標準化されており、これにより HTML や XML ドキュメントをオブジェクトとして抽象化して言語に依存しないインターフェイスを定義し、その抽象化したものを取り扱うメカニズムも定義されます。DOM によって定義されているものには、次のものがあります :

- [DOM core](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html) で定義されている、文書構造、ツリーモデルや DOM イベントアーキテクチャ。`Node`、`Element`、`DocumentFragment`、`Document`、`DOMImplementation`、`Event`、`EventTarget` など。
- DOM イベントアーキテクチャの大まかな定義に加え、[DOM events](https://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html) で定義されるより具体的なイベント。
- その他、[DOM Traversal](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html) や [DOM Range](https://html5.org/specs/dom-range.html) など。

ECMAScript から見た場合に、DOM 仕様で定義されるオブジェクトのことを「ホストオブジェクト」と呼びます。

### HTML DOM

ウェブのマークアップ言語である [HTML](https://www.whatwg.org/html) は、DOM に関しても規定しています。HTML は DOM Core 内で定義された抽象概念の上位レイヤーを形成し、更に要素の意味も定義しています。HTML DOM には HTML 要素の `className` プロパティ、あるいは {{domxref("document.body")}} といった API などが含まれます。

HTML 仕様はドキュメント上の制約事項についても定義しています。例えば、「順序なしリストを意味する `ul` 要素のすべての子は、そのリストアイテムを意味する `li` 要素でなければならない」などです。一般に、標準で定義されていない要素や属性を使用することは禁止されています。

[`Document` オブジェクト](/ja/docs/Web/API/Document)や、[`Window` オブジェクト](/ja/docs/Web/API/Window)や、その他の DOM 要素についてお探しであれば、[DOM ドキュメント](/ja/docs/Web/API/Document_Object_Model)をご覧ください。

## その他の重要な API

- `setTimeout` や `setInterval` 関数は HTML 標準の [`Window`](https://www.whatwg.org/html/#window) インターフェイスによって最初に規定されていました。
- [XMLHttpRequest](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) は非同期の HTTP リクエストを送ることを可能にする API です。
- [CSS オブジェクト モデル](https://dev.w3.org/csswg/cssom/) (CSSOM) は CSS のルールをオブジェクトとして抽象化したものです。
- [WebWorkers](https://www.whatwg.org/specs/web-workers/current-work/) は並列処理を可能にする API です。
- [WebSockets](https://www.whatwg.org/C/#network) は双方向通信を可能にする API です。
- [Canvas 2D コンテキスト](https://www.whatwg.org/html/#2dcontext)は{{htmlelement("canvas")}} 要素の描画 API です。

### ブラウザーサポートについて

どのウェブ開発者も「[DOM は面倒である](http://ejohn.org/blog/the-dom-is-a-mess/)」ということに悩まされてきました。ブラウザーのサポートの統一性はその機能によって大きく異なります。この状況の主な理由は、DOM の重要な機能の多くが、仮にあったとしてもその仕様が非常に不明確であったという事実です。また様々なウェブブラウザーが、例えば Internet Explorer によるイベントモデルの使用実態と一致させようと、互換性の無い機能を追加してきました。2011 年 6 月以降、W3C と特に WHATWG が相互運用性を改善するために細部にわたって古い機能を定義しており、これらの仕様に基づいて、ブラウザーへの実装は日々改善されています。

ブラウザー間の互換性保持のための一般的な (おそらく最も信頼できるわけではない) アプローチのひとつとして、JavaScript のライブラリーの使用が挙げられます。これらのライブラリーは DOM の機能を抽象化し、異なるブラウザーでこれらの API が同じように動作するようにします。最も広く使われているフレームワークには、[jQuery](https://jquery.com/) や [prototype](http://www.prototypejs.org/)、[YUI](https://developer.yahoo.com/yui/) があります。
