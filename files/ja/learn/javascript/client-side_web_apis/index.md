---
title: クライアントサイド Web API
slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: 904cdf09c7e328b7a15a6a4db6bc6bd31f969cce
---

{{LearnSidebar}}

ウェブサイトやアプリケーション用にクライアント側の JavaScript を書いていると、すぐに**アプリケーションプログラミングインターフェース** (**A**pplication **P**rogramming **I**nterfaces、**API**) にでくわします。API とはブラウザーやサイトが動作している OS の様々な面を操作したり、他のウェブサイト、サービスから取得したデータを操作するためのプログラムされた機能です。このモジュールでは API とは何か、開発作業の中でよく見かける最もよく利用される API のいくつかについて、どのように使うかを説明していきます。

> **注目:**
>
> #### フロントエンドのウェブ開発者を目指している方へ
>
> ゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。
>
> [**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## 前提条件

このモジュールをよく理解するためには、ここまでの一連の JavaScript に関するモジュール（[第一歩](/ja/docs/Learn/JavaScript/First_steps)、[構成要素](/ja/docs/Learn/JavaScript/Building_blocks) と [JavaScript オブジェクト](/ja/docs/Learn/JavaScript/Objects)）の学習をすませているべきです。これらのモジュールでは大抵簡単な API を使っていますが、その助けなしにクライアント側の JavaScript を書き上げるのは難しいからです。このチュートリアルの中では、JavaScript 言語のコア部分については十分理解しているものとして、よく使われる Web API についてもう少し詳しく探っていきます。

[HTML](/ja/docs/Learn/HTML) と [CSS](/ja/docs/Learn/CSS) に関する基礎知識も役に立つでしょう。

> **メモ:** もし自分のファイルを作成できないような端末上で作業しているなら、大半のコード例を [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) のようなオンラインプログラム作成・実行環境で試してみることもできます。

## ガイド

- [Web API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : まずは API を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの API が何なのか、どんな使い方があるのかも見ていきます。
- [文書の操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : ウェブページやアプリケーションを書くとき、最も一般的なことのひとつは、何らかの方法でウェブ文書を操作することでしょう。これは通常、ドキュメントオブジェクトモデル (DOM) を使用することで行われます。これは HTML とスタイル設定情報をコントロールするための API のセットで、 {{domxref("Document")}} オブジェクトを多用します。この記事では、 DOM を使用する方法を詳しく見ていきます。また、他にも興味深い方法であなたの環境を変化させることができる API もいくつか紹介します。
- [サーバーからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : また、現代のウェブサイトやアプリケーションでは、新しいページ全体を読み込むことなくウェブページの節を更新するために、サーバーから個々のデータ項目を取得することも非常に一般的なタスクです。この一見小さなことが、サイトのパフォーマンスや動作に大きな影響を及ぼしています。この記事では、この概念を説明し、 {{domxref("XMLHttpRequest")}} や [Fetch API](/ja/docs/Web/API/Fetch_API) など、これを可能にする技術について見ていきます。
- [サードパーティの API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : これまで取り上げた API はブラウザーに内蔵されていますが、すべての API が内蔵されているわけではありません。 Google マップ、Twitter、Facebook、PayPal など、多くの大規模なウェブサイトやサービスが API を提供しており、開発者はそれらのデータ（例：ブログに Twitter のストリームを表示する）やサービス（例：サイトにカスタム Google マップを表示したり、 Facebook ログインを使ってユーザーにログインしてもらう）を使用することができます。この記事では、ブラウザー API とサードパーティ API の違いを見て、後者の典型的な使用方法をいくつか示します。
- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : ブラウザーにはグラフィックを描くためのとても強力なツールがいくつか組み込まれています。[SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics) 言語から、 HTML の {{htmlelement("canvas")}} キャンバス要素に描画するための API （[キャンバス API](/ja/docs/Web/API/Canvas_API) や [WebGL](/ja/docs/Web/API/WebGL_API)を参照）まで。 この記事ではキャンバス API への導入を説明し、もっと深く学習していくためのリソースをご紹介します。
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML には文書にリッチなメディアを埋め込むための要素 — {{htmlelement("video")}} と {{htmlelement("audio")}} — が備わっています。それぞれに再生やシークなどの操作するための独自 API を備えています。この記事では独自の再生操作パネルを作成するような、よくある仕事をどうやればいいのかお見せします。
- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : 現代のブラウザーには、ウェブサイトに関するデータを保存し必要なときに取り出すための様々に異なる技術が実装されており、これを使ってデータを長期間保存したり、サイトをオフラインに保存したりなどなどができます。この記事ではこれらがいかに動作するのか、その基本の基本について説明します。
