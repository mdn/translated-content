---
title: クライアントサイド Web API
slug: Learn_web_development/Extensions/Client-side_APIs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions")}}

**アプリケーションプログラミングインターフェイス** (Application Programming Interfaces、**API**) とは、ブラウザーやサイトが動作している OS の様々な面を操作したり、他のウェブサイト、サービスから取得したデータを操作するためのプログラムされた機能です。このモジュールでは API とは何か、開発作業の中でよく見かける最もよく利用される API のいくつかについて、どのように使うかを説明していきます。

## 前提条件

このモジュールをよく理解するためには、 [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) の基本、特に [JavaScript オブジェクトの基本](/ja/docs/Learn_web_development/Core/Scripting/Object_basics) と [DOM スクリプティング](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting)や[ネットワークリスクエスト](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)などのコア API を扱っているものを学んでおいてください。

[HTML](/ja/docs/Learn_web_development/Core/Structuring_content) や [CSS](/ja/docs/Learn_web_development/Core/Styling_basics) に関する基礎知識も役に立つでしょう。

> [!NOTE]
> もし自分のファイルを作成できないような端末上で作業しているなら、（大半の）コード例を [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) のようなオンラインプログラム作成・実行環境で試してみることもできます。

## ガイド

- [Web API の紹介](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
  - : まずは API を高い視点から見ていきます — これは何なのか、どう働くのか、あなたのコードでどう使うのか、どういう風に作られているのか? また様々なクラスの API が何なのか、どんな使い方があるのかも見ていきます。
- [動画と音声の API](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs)
  - : HTML には文書にリッチなメディアを埋め込むための要素 — {{htmlelement("video")}} と {{htmlelement("audio")}} — が備わっています。それぞれに再生やシークなどの操作するための独自 API を備えています。この記事では独自の再生操作パネルを作成するような、よくある仕事をどうやればいいのかお見せします。
- [グラフィックの描画](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
  - : ブラウザーにはグラフィックを描くためのとても強力なツールがいくつか組み込まれています。 [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics) 言語から、 HTML の {{htmlelement("canvas")}} キャンバス要素に描画するための API （[キャンバス API](/ja/docs/Web/API/Canvas_API) や [WebGL](/ja/docs/Web/API/WebGL_API) を参照）まで。 この記事ではキャンバス API への導入を説明し、もっと深く学習していくためのリソースをご紹介します。
- [クライアント側ストレージ](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)
  - : 現代のブラウザーには、ウェブサイトに関するデータを保存し必要なときに取り出すための様々に異なる技術が実装されており、これを使ってデータを長期間保存したり、サイトをオフラインに保存したりなどなどができます。この記事ではこれらがいかに動作するのか、その基本の基本について説明します。
- [サードパーティの API](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs)
  - : これまで取り上げた API はブラウザーに内蔵されていますが、すべての API が内蔵されているわけではありません。 Google マップ、Twitter、Facebook、PayPal など、多くの大規模なウェブサイトやサービスが API を提供しており、開発者はそれらのデータ（例：ブログに Twitter のストリームを表示する）やサービス（例：サイトにカスタム Google マップを表示したり、 Facebook ログインを使ってユーザーにログインしてもらう）を使用することができます。この記事では、ブラウザー API とサードパーティ API の違いを見て、後者の典型的な使用方法をいくつか示します。

{{NextMenu("Learn_web_development/Extensions/Client-side_APIs/Introduction", "Learn_web_development/Extensions")}}
