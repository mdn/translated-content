---
title: "Django チュートリアル: 地域図書館ウェブサイト"
short-title: "1: 地域図書館ウェブサイト"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

この記事では、MDN の Django チュートリアルの概要を説明し、次の数ページにわたって使用していく "local library" というサンプルウェブサイトを紹介します。
このチュートリアルで扱う内容、始め方、助けを求める方法、そして初めてのサーバーサイド Python アプリを構築・デプロイするために必要なあらゆる情報を学ぶことができます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django の紹介</a>を読んでください。
        以下の記事では、<a href="/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Django 開発環境をセットアップ</a>する必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        このチュートリアルで使用されているサンプルアプリケーションを紹介し、読者が何をするかを理解できるようにします。
      </td>
    </tr>
  </tbody>
</table>

## 概要

MDN 「地域図書館」 Django チュートリアルへようこそ。ここでは、地域図書館のカタログを管理するためのウェブサイトを開発します。

この一連のチュートリアルの記事でやることは次の通りです。

- Django のツールを使用して、ウェブサイトのスケルトンとアプリケーションを作成します。
- 開発用サーバーを起動および停止します。
- アプリケーションのデータを表すモデルを作成します。
- Django 管理サイトを使用してサイトのデータを設定します。
- さまざまな要求に応じて特定のデータを取得するためのビューを作成し、ブラウザーに表示する HTML として、データをレンダリングするためのテンプレートを作成します。
- 異なる URL パターンを特定のビューに関連付けるためのマッパーを作成します。
- ユーザーの認可とセッションを追加して、サイトの動作とアクセスを制御します。
- フォームを使います。
- アプリケーションのテストコードを書きます。
- Django のセキュリティを効果的に使用します。
- アプリケーションを本番環境にデプロイします。

これらの話題のいくつかについて学び、他の話題にも簡単に触れました。チュートリアルシリーズの最後は、あなた自身で簡単な Django アプリケーションを開発するのに十分な知識が必要です。

## 地域図書館ウェブサイト

地域図書館 (_LocalLibrary_) は、この一連のチュートリアルの過程で作成および展開するウェブサイトの名前です。ご存じのように、ウェブサイトの目的は、利用可能な書籍を閲覧してアカウントを管理できる小さな地域図書館のオンラインカタログを提供することです。

この例は慎重に選択されています。なぜなら、必要に応じて細かく表示することができ、ほぼすべての Django 機能を表示するために使用できます。さらに重要なことは、Djangoウェブフレームワークの最も重要な機能をガイドする方法を提供できることです。

- 最初のいくつかのチュートリアルの記事では、図書館員が利用可能な書籍を見つけるために使用できる簡単なブラウズ専用図書館を定義します。これにより、ほぼすべてのウェブサイトに共通する操作、つまりデータベースからの内容の読み取りと表示を探ります。
- 進めていくと、図書館の例は、より高度な Django の機能を説明するために自然に拡張していきます。たとえば、ユーザーが書籍を予約できるように図書館を拡張し、これを使ってフォームの使用方法をデモし、ユーザー認証をサポートできます。

これは非常に拡張可能な例ですが、地域図書館と呼んでいます。理由は、Django をすぐに起動して実行するのに役立つ最小限の情報を表示したいと考えているからです。つまり、書籍、本のコピー、作者関する情報、およびその他の重要な情報は保存します。しかし、図書館が保管する可能性のある他のアイテムに関する情報を保管したり、複数の図書館サイトやその他の「大きな図書館」機能をサポートするために必要なインフラストラクチャーを提供することはありません。

## 行き詰まっています、どこでソースを入手できますか？

チュートリアルを進めるうちに、各ポイントでコピー＆ペーストするための適切なコードスニペットが提供されます。また、この他に自分で拡張してほしいコードもあります（いくつかのガイダンスがあります）。

行き詰まった場合は、ウェブサイトの完全に開発されたバージョンを[Github 上](https://github.com/mdn/django-locallibrary-tutorial)で見ることができます。

## まとめ

地域図書館ウェブサイトについてと、何を学ぶのかをもう少し知りました。今度は例を含む[スケルトンプロジェクト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)を作成しましょう。

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
