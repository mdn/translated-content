---
title: JavaScript について
slug: conflicting/Web/JavaScript
original_slug: Web/JavaScript/About_JavaScript
---

{{JsSidebar}}

## JavaScript とは何か?

**JavaScript**® (よく **JS** と略されます) は[第一級関数](https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E9%96%A2%E6%95%B0)を持つ軽量、インタプリタ方式、オブジェクト指向の言語です。Web ページ向けのスクリプティング言語としてもっとも知られていますが、[ブラウザ以外の多くの環境でも使用されています](https://ja.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages)。JavaScript は[プロトタイプベース](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%83%88%E3%82%BF%E3%82%A4%E3%83%97%E3%83%99%E3%83%BC%E3%82%B9)の動的なスクリプティング言語であり、オブジェクト指向、命令型、関数型のプログラミング方式をサポートします。

JavaScript は Web のクライアントサイドで実行され、イベントが発生したら Web ページがどのようにふるまうかを設計およびプログラムするために使用できます。JavaScript は学習が容易かつ強力なスクリプティング言語であり、Web ページの動作を制御するために広く使用されています。

よくある誤解に反して、**JavaScript は _"インタープリット可能な Java" ではありません_**。一言で言えば、JavaScript は [プロトタイプベース](/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-Based_vs._Prototype-Based_Languages)のオブジェクト構文をサポートした動的なスクリプティング言語です。基本的な構文はこの言語を習得するのに必要な新しい概念を減らすために、Java と C++ の両方にわざと似せてあり、`if` 文、`for`、`while` ループと `switch`、`try ... catch` ブロックなどの言語要素はそれらの言語と同じように (あるいはそれに近い) 働きます。

JavaScript は [手続き型 (procedural) 言語](http://en.wikipedia.org/wiki/Procedural_programming) ([日本語訳](http://ja.wikipedia.org/wiki/%E6%89%8B%E7%B6%9A%E3%81%8D%E5%9E%8B%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)) と[オブジェクト指向 (object oriented) 言語](/ja/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)の両方として機能することができます。JavaScript では、C++ や Java のようなコンパイラ型言語において一般的な構文クラス定義と反対に、オブジェクトは**実行時に**メソッドとプロパティをそれ以外の空のオブジェクトに加えることでプログラム上に作成されます。一度オブジェクトが構築されると、そのオブジェクトは同じようなオブジェクトを作成するための青写真 (あるいはプロトタイプ) として使われます。

JavaScript の動的な性質は、実行時のオブジェクト構築、可変の引数リスト、関数変数、([`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) による) 動的スクリプト生成、(`for ... in` による) オブジェクトの内部参照、あるいはソースコード復元 (JavaScript のプログラムは関数本体をソーステキストに逆コンパイルできる) を含んでいます。

JavaScript プログラミングに関するより深い議論については、下の [JavaScript リソース](#JavaScript_resources)のリンクから得られます。

## どのような JavaScript の実装を利用できますか?

Mozilla プロジェクトは二つの JavaScript 実装を提供しています。**最初の** JavaScript は Netscape の Brendan Eich が作成して、ECMA-262 改訂 5 版に適合するようアップデートされてきました。このエンジンは、[SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) というコードネームで、C/C++ で実装されています。[Rhino](/ja/docs/Rhino) エンジンは、主に Norris Boyd (この人も Netscape) によって作成され、Java による JavaScript の実装です。SpiderMonkey のように、Rhino も ECMA-262 改訂 5 版に準拠しています。

時々、SpiderMonkey の JavaScript エンジンには、TraceMonkey (Firefox 3.5) や JägerMonkey (Firefox 4)、IonMonkey のようないくつかの最適化が加えられました。JavaScript の実行パフォーマンスを向上させるための取り組みは継続しています。

上記の実装の他にも、以下のような人気の JavaScript エンジンがあります。

- Google の [V8](https://code.google.com/p/v8/)。これは Google Chrome ブラウザや最近のバージョンの Opera ブラウザが使用しています。また、[Node.js](http://nodejs.org) もこのエンジンを使用しています。
- Safari (Apple) などの WebKit ブラウザで使われている [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro)
- 過去のバージョンの Opera の [Carakan](http://my.opera.com/ODIN/blog/carakan-faq)
- Internet Explorer で使われている [Chakra](https://ja.wikipedia.org/wiki/Chakra) エンジン (ただし、実装している言語は商標の問題を避けるため、公式には "JScript" と呼ばれています)

Mozilla の各 JavaScript エンジンは、アプリケーション開発者がソフトウェアに JavaScript を統合するために使用できる公開 API を公開しています。JavaScript をサポートした最も一般的なホスト環境はウェブブラウザです。ウェブブラウザは主に [DOM](http://www.w3.org/DOM/) の JavaScript への実装を担当する '**ホストオブジェクト**' を作成するのに公開 API を使っています。

JavaScript によってもう一つの一般的なアプリケーションは、(ウェブ) サーバーサイドスクリプティング言語です。JavaScript を使うウェブサーバーでは、実際の HTTP リクエスト／レスポンスオブジェクトに代わるものとして、ホストオブジェクトを他のプログラムから見える形で置くことになり、JavaScript プログラムは、そのオブジェクトを操作して動的にウェブページを生成することができます。人気のある実例が、[Node.js](http://nodejs.org) です。

## JavaScript リソース

- [SpiderMonkey](/ja/docs/SpiderMonkey)
  - : C/C++エンジンで Mozilla が実装した JavaScript (SpiderMonkey と呼ばれている) について、アプリケーションへの組込方法を含む詳細情報。
- [Rhino](/ja/docs/Rhino)
  - : Java で記述された JavaScript 実装(Rhino と呼ばれている) についての詳細情報
- [言語リソース](/ja/docs/JavaScript_Language_Resources)
  - : 公布されている JavaScript の標準を指します。
- [JavaScript「再」入門](/ja/docs/JavaScript/A_re-introduction_to_JavaScript)
  - : [JavaScript ガイド](/ja/docs/JavaScript/Guide) および [JavaScript リファレンス](/ja/docs/JavaScript/Reference)

JavaScript® は、米国およびその他の国における、Oracle の商標または登録商標です。
