---
title: 入門編
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

本章では JavaScript について紹介し、その基本的な概念について説明します。

## 事前に知っておくべきこと

このガイドは、以下の基礎的な予備知識を持っていることを前提としています。

- インターネットと World Wide Web ([WWW](/ja/docs/Glossary/World_Wide_Web)) についての一般的な理解。
- HyperText Markup Language ([HTML](/ja/docs/Glossary/HTML)) についての実用的な知識。
- 多少のプログラミングの経験。プログラミングが初めての方は、 [JavaScript](/ja/docs/Web/JavaScript) についてのメインページにあるチュートリアルをお試しください。

## JavaScript の情報はどこにあるか

MDN には以下の JavaScript 関連ドキュメントがあります。

- [JavaScript による動的スクリプト処理](/ja/docs/Learn_web_development/Core/Scripting)は、初心者向けの体系的な JavaScript ガイドを提供し、プログラミングとインターネットの基本概念を紹介しています。
- [JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)（このガイド）では、JavaScript 言語とその対象に関する概要を提供しています。
- [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)は、JavaScript の詳細なリファレンス素材を提供しています。

## JavaScript とは何か

JavaScript は、クロスプラットフォームで動作するオブジェクト指向のスクリプト言語で、ウェブページをインタラクティブにするために使用されます（例えば、複雑なアニメーション、押下可能なボタン、ポップアップメニューなどを設けることです）。 Node.js のような、より高度なサーバー側のバージョンの JavaScript もあり、ファイルをダウンロードするだけでなく（複数のコンピューター間でのリアルタイムの連携など）、ウェブサイトに多くの機能を追加することができます。ホスト環境（例えばウェブブラウザー）内では、 JavaScript とその環境のオブジェクトが結びつけられ、プログラム制御が可能になっています。

JavaScript には、`Array`、`Date`、 `Math` といったオブジェクトからなる基本的なライブラリー、そして演算子、制御構造、文といったプログラミング言語の要素からなる主要な機能が含まれています。 JavaScript のコア機能は、追加のオブジェクトを補うことで、様々な目的に拡張することができます。例えば以下のようなものです。

- _クライアントサイド JavaScript_ は、ブラウザーとその*ドキュメントオブジェクトモデル* (DOM) を制御するオブジェクトを提供することにより、コア言語を拡張します。例えば、クライアントサイドでの拡張により、アプリケーションが HTML フォーム上に要素を配置したり、マウスクリック、フォーム入力、ページ移動といったユーザーのイベントに応答したりできます。
- _サーバーサイド JavaScript_ は、 JavaScript を使ったサーバーの稼働に関連するオブジェクトを提供することにより、コア言語を拡張します。例えば、サーバーサイドでの拡張により、アプリケーションがデータベースとやり取りしたり、アプリケーション内のある呼び出しから別の呼び出しまでの間を情報が連続性を保ったり、サーバー上のファイルを操作したりできます。

これはつまり、ブラウザー内で JavaScript がウェブページ (DOM) の見た目を変更できるということです。同様に、サーバー上の Node.js の JavaScript は、ブラウザー内に記述されたコードからの独自のリクエストに応答できます。

## JavaScript と Java

JavaScript と Java はいくつかの点では似ていますが、その他の点では全くの別物です。 JavaScript 言語は Java と共通点がありますが、Java のような静的型付けと強い型検査を持っていません。 LiveScript から JavaScript へ改名する理由ともなった、Java が持つ多くの式構文、命名規則と基本的な制御フローを JavaScript は踏襲しています。

宣言によって作られたクラスから構成される Java のコンパイル時システムとは対照的に、JavaScript は、数値や論理値、文字列を表す少数のデータ型をベースにしたランタイムシステムに対応しています。 JavaScript は、より一般的であるクラスベースのオブジェクトモデルの代わりに、プロトタイプベースのオブジェクトモデルを持っています。プロトタイプベースモデルは動的な継承を実現します。つまり、様々なオブジェクトから継承できるということです。また JavaScript は、特殊な宣言型を必要としない関数に対応しています。関数はオブジェクトのプロパティに設定することができ、弱い型付けのメソッドとして実行することができます。

JavaScript は Java に比べてとても自由な形式を持つ言語です。変数、クラス、メソッドをあまねく宣言する必要はありません。メソッドが public か private か、あるいは protected かどうかを気に掛けることも、インターフェイスを実装する必要もありません。変数、引数、そして型を返す関数は厳密に型付けされていません。

Java は高速実行と型安全のために設計されたクラスベースのプログラミング言語です。型安全というのは、例えば、 Java の整数値をオブジェクトの参照に型変換したり、有害な Java のバイトコードがプライベートなメモリーにアクセスしたりすることができないということです。 Java のクラス継承と強い型付けは、一般的に密結合されたオブジェクト階層を必要とします。こうした前提条件によって Java のプログラミングは JavaScript のプログラミングに比べて複雑なものとなります。

それに対して、 JavaScript は HyperTalk や dBase といった一連の小規模で動的型付けを持つ言語の精神を受け継いでいます。これらのスクリプト言語は、より簡素な構文、専門化された組み込み関数、最小限の要件でオブジェクトを生成できることなどで、より多くの人々にプログラミングツールを提供しています。

| JavaScript                                                                                                                                                         | Java                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| オブジェクト指向。オブジェクトのデータ型に区別はない。継承はプロトタイプベースの機構を通して行われ、プロパティとメソッドはどんなオブジェクトにも動的に追加できる。 | クラスベース。オブジェクトはクラスとそのクラス階層によって継承されたインスタンスとに分かれている。クラスとインスタンスは動的にプロパティやメソッドを追加することができない。 |
| 変数のデータ型は宣言が不要 (動的型付け、弱い型付け)。                                                                                                              | 変数のデータ型は宣言が必須 (静的型付け、強い型付け)。                                                                                                                        |
| ハードディスクには自動的に書き込みできない。                                                                                                                       | ハードディスクには自動的に書き込みできる。                                                                                                                                   |

## JavaScript と ECMAScript 仕様書

JavaScript は、ヨーロッパの情報通信システム標準化団体である [Ecma International](https://ecma-international.org/) （ECMA は、以前は European Computer Manufacturers Association の頭字語）で標準化されており、 JavaScript をベースとした国際的なプログラミング言語の標準化を実現しています。この標準化された JavaScript は ECMAScript と呼ばれ、この規格に対応するすべてのアプリケーションで同じように動作します。企業は、このオープンスタンダードな言語を使って、 JavaScript の実装を開発することができます。 ECMAScript 標準は、 ECMA-262 仕様書に記載されています。

ECMA-262 標準は、[ISO](https://www.iso.org/home.html)（International Organization for Standardization、国際標準化機構）により ISO-16262 としても承認されています。また仕様書は、[Ecma International のウェブサイト](https://ecma-international.org/publications/standards/ecma-262/)でも確認できます。ECMAScript 仕様書には、[World Wide Web Consortium (W3C)](https://www.w3.org/) によって標準化されているドキュメントオブジェクトモデル (DOM) は記載されていません。 DOM はスクリプトから利用できる HTML 文書のオブジェクトを定義しています。 JavaScript でプログラミングする際に使われる様々な技術のさらに詳しい情報は、[JavaScript 技術概説](/ja/docs/Web/JavaScript/JavaScript_technologies_overview)の記事を参考にしてください。

### JavaScript ドキュメント vs ECMAScript 仕様書

ECMAScript 仕様書は ECMAScript を実装するために必要な一連の要件です。 ECMAScript の実装やエンジン（Firefox の SpiderMonkey や Chrome の V8 など）で、標準に準拠した言語機能を使用したい場合に有益なものです。

ECMAScript のドキュメントは、スクリプトのプログラマーを支援するためのものでは*ありません*。スクリプトを記述する際には JavaScript のドキュメントを使いましょう。

ECMAScript 仕様書は、JavaScript プログラマーにあまり馴染みのない専門用語と文法で書かれています。この言語を解説したものと ECMAScript とは異なるところがあるかもしれませんが、この言語自体は同じものです。JavaScript は、ECMAScript 仕様書で描かれた機能すべてに対応しています。

JavaScript のドキュメントは、JavaScript プログラマーに適した形で言語の特徴について記述しています。

## JavaScript を始めよう

JavaScript を始めるのに必要なものは、最新のウェブブラウザーだけです。 [Firefox](https://www.mozilla.org/ja/firefox/new/)、[Chrome](https://www.google.com/chrome/index.html)、[Microsoft Edge](https://www.microsoft.com/ja-jp/edge)、[Safari](https://www.apple.com/safari/) の最新バージョンは、このガイドで説明されているすべての機能に対応しています。

JavaScript を試すのに非常に便利なツールが JavaScript コンソール（ウェブコンソール、または単にコンソールと呼ばれることもあります）です。これは、JavaScript を入力すると、現在のページで実行できるツールです。

ここに表示されているスクリーンショットは [Firefox のウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/)を示してはいますが、現代のブラウザーにはすべて、これと似た方法で動作するコンソールが搭載されています。

### ウェブコンソールを開く

コンソールを開くための正確な手順は、ブラウザーによって異なります。

- [Firefox でコンソールを開く](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Chrome でコンソールを開く](https://developer.chrome.com/docs/devtools/open)
- [Microsoft Edge でコンソールを開く](https://learn.microsoft.com/ja-jp/microsoft-edge/devtools-guide-chromium/console/)

### JavaScript を入力して実行

コンソールはブラウザーウィンドウの下部に表示されます。コンソールの下部に沿って、 JavaScript を入力するための入力行があり、出力は上のパネルに表示されます。

![下部にウェブコンソールを開くためのブラウザーウインドウで、 2 行の入出力を含む。その下記にはテキストを入力することができます。](2019-04-04_00-15-29.png)

コンソールは `eval` と全く同じように動作します。最後に入力された式が返されます。分かりやすくするために、コンソールに何か入力されるたびに、実際には `eval` の周りを `console.log` で囲むと想像してみると、このようになります。

```js
console.log(eval("3 + 5"));
```

### コンソールでの複数行入力

既定では、コード行を入力した後で <kbd>Enter</kbd> キー（または、キーボードによっては <kbd>Return</kbd> キー）を押すと、入力した文字列が実行されます。複数行の入力を行うには、次のようにします。

- 入力した文字列が不完全であった場合（例えば、`function foo() {` と入力した場合）、コンソールは <kbd>Enter</kbd> を改行と見なし、別の行を入力できるようになります。
- <kbd>Shift</kbd> キーを押しながら <kbd>Enter</kbd> キーを押すと、コンソールはこれを改行として扱い、別の行を入力できるようになります。
- Firefox だけですが、[複数行の入力モード](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode)を有効にすると、ミニエディターに複数の行を入力し、準備ができたらすべてを実行することができます。

JavaScript を書き始めるには、コンソールを開き、次のコードをコピーしてプロンプトに貼り付けます。

```js
(function () {
  "use strict";
  /* コードの開始 */
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("World");
  /* コードの終了 */
})();
```

展開をブラウザーで見るには、 <kbd>Enter</kbd> キーを押してください。

## 次に来るもの

このガイドの以降のページでは、より複雑なアプリケーションを作成できるように、 JavaScript の構文と言語の特徴を紹介します。

ですが、しばらくの間、常にあなたのコードの先頭に `(function(){"use strict";` を、コードの最後に `})();` を記述することを忘れないでください。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)と [IIFE](/ja/docs/Glossary/IIFE) の記事でこれらが何であるかを説明していますが、今のところは次のように捉えておいてください。

1. 初心者をつまずかせる、 JavaScript のセマンティクスを避ける。
2. コンソールで実行されたコードスニペットが相互に影響することを防止する（たとえば、あるコンソールの実行で作成されたものが別のコンソールの実行に使用されるなど）。

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
