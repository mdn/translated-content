---
title: クライアントサイド Web API
slug: Learn/JavaScript/Client-side_web_APIs
tags:
  - API
  - CodingScripting
  - DOM
  - JavaScript
  - Landing
  - WebAPI
  - グラフィック
  - データ
  - メディア
  - モジュール
  - 初心者向け
  - 学習
  - 記事
translation_of: Learn/JavaScript/Client-side_web_APIs
---
{{LearnSidebar}}

Web サイトやアプリケーション用にクライアント側の JavaScript を書いていると、すぐに**アプリケーションプログラミングインターフェース** (**A**pprication **P**rogramming **I**nterfaces、**API**) にでくわします。API とはブラウザーやサイトが動作している OS の様々な面を操作したり、他の Web サイト、サービスから取得したデータを操作するためのプログラムされた機能です。このモジュールでは API とは何か、開発作業の中でよく見かける最もよく利用される API のいくつかについて、どのように使うかを説明していきます。

## 前提条件

このモジュールをよく理解するためには、ここまでの一連の JavaScript に関するモジュール ([First steps](/ja/docs/Learn/JavaScript/First_steps), [Building blocks](/ja/docs/Learn/JavaScript/Building_blocks) と [JavaScript objects](/ja/docs/Learn/JavaScript/Objects)) の学習をすませているべきです。これらのモジュールでは大抵簡単な API を使っていますが、その助けなしにクライアント側の JavaScript を書き上げるのは難しいからです。このチュートリアルの中では、JavaScript 言語のコア部分については十分理解しているものとして、よく使われる Web API についてもう少し詳しく探っていきます。

[HTML](/ja/docs/Learn/HTML) と [CSS](/ja/docs/Learn/CSS) に関する基礎知識も役に立つでしょう。

> **Note:** もし自分のファイルを作成できないようなデバイス上で作業しているなら、大半のコード例を [JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) のようなオンラインプログラム作成・実行環境で試してみることもできます。

## ガイド

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : まずは API を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの API が何なのか、どんな使い方があるのかも見ていきます。
- [文章の操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Web ページやアプリを書く場合に、最も多く必要になるのは Web 文書をどうかして操作する事でしょう。これは普通ドキュメントオブジェクトモデル(**D**ocument **O**bject **M**odel、DOM)、これは HTML とスタイルに関する情報を {{domxref("Document")}} オブジェクトを使いまくって操作するための一連の API です、を用いて行ないます。この記事では、DOM の使い方を詳しく見ながら、面白い方法であなたの環境を変える事ができる興味深い他の API もいくつか見ていきます。
- [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : また別に、モダンな Web サイトやアプリケーションでしょっちゅう必要になるのは、サーバから個々のデータを取ってきて、新しいページ全体を読んでくることなしに、ページの一部を書き換える事です。この一見ちょっとした事が、サイトのパフォーマンスや振舞いに巨大なインパクトを与えました。この記事ではそのコンセプトを解説し、これを可能にした技術 {{domxref("XMLHttpRequest")}} と [Fetch API](/ja/docs/Web/API/Fetch_API) について見ていきます。
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : これまでに説明した API はブラウザーに組込まれていますが、全ての API が組込まれているのではありません。グーグルマップや Twitter、Facebook、ペイパルなど、多くの巨大な Web サイトやサービスが、開発者に対して彼らのデータを利用したり(例:あなたのブログに twitter のタイムラインを表示させる)、サービスを利用したり(例:あなたのサイトに独自のグーグルマップを表示したり、あなたのサービス利用者に Facebook でログインできたり)するための API を提供しています。この記事ではブラウザー API とサードパーティ API の違いを見ていき、典型的な後者の使い方をお見せします。
- [絵を描く](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : ブラウザーにはグラフィックを描くためのとても強力なツールがいくつか組込まれています。[SVG](/ja/docs/Web/SVG)(Scalable Vector Graphics) 言語から、HTML の {{htmlelement("canvas")}} キャンバス要素に描画するための API まで ([キャンバス API ](/ja/docs/Web/API/Canvas_API)や [WebGL](/ja/docs/Web/API/WebGL_API)を参照)。 この記事ではキャンバス API への導入を説明し、もっと深く学習していくためのリソースをご紹介します。
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 には文書にリッチなメディアを埋め込むための要素が備わっています — {{htmlelement("video")}} と {{htmlelement("audio")}} — それぞれに再生やシークなどの操作するための独自 API を備えています。この記事では独自の再生操作パネルを作成するような、よくある仕事をどうやればいいのかお見せします。
- [クライアント側でのデータ保存](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : モダンなブラウザーには、Web サイトに関するデータを保存し必要なときに取り出すための様々に異なる技術が実装されており、これを使ってデータを長期間保存したり、サイトをオフラインに保存したりなどなどができます。この記事ではこれらがいかに動作するのか、その基本の基本について説明します。
