---
title: サーバーサイドウェブサイトプログラミング
short-title: サーバーサイドウェブサイト
slug: Learn_web_development/Extensions/Server-side
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

**動的ウェブサイト** (_Dynamic Websites_) – **サーバーサイドプログラミング**のトピックは、動的なウェブサイト（HTTP リクエストに応じてカスタマイズされた情報を届けるウェブサイト）の作り方を説明する一連のモジュールです。各モジュールは、一般的なサーバーサイドプログラミングへの導入となる情報を提供するほか、特に初学者に向けて、Django (Python) や Express (Node.js/JavaScript) といった基礎的なアプリケーションを構築するためのウェブフレームワークの使用方法について説明しています。

ほとんどの有名なウェブサイトでは、必要に応じてさまざまなデータを動的に表示するために、何らかのサーバーサイドの技術を使用しています。例えば Amazon の場合を考えてみましょう。非常にたくさんの商品が扱われていますね。また Facebook にも大量の投稿があります。これら全てを表示するために別々の静的なページをいくつも作っていっても、絶対に非効率です。ですのでその代わりに、こういったサイトでは静的なテンプレート（[HTML](/ja/docs/Learn_web_development/Core/Structuring_content), [CSS](/ja/docs/Learn_web_development/Core/Styling_basics), [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) で構築します）を表示し、テンプレートの内部で必要に応じテ、例えば Amazon で今見ている商品とは違う商品を見ようとするときに、表示される情報を動的に更新しています。

現代のウェブ開発においては、サーバーサイド開発を学ぶことが強く推奨されています。

## 前提条件

サーバーサイドプログラミングを始めるのは、一般的にいってクライアントサイドの開発を始めるよりも簡単です。なぜなら動的なウェブサイトはどれも非常によく似た操作 (データベースからデータを読み出してそれをページに表示し、ユーザーが入力したデータをヴァリデーションしてそれをデータベースに保存し、ユーザーの権限をチェックした後にユーザーをログインさせる、といったようなことです) を行うからです。また、動的なウェブサイトはこういった一般的なウェブサーバー側での操作を簡単にしてくれるウェブフレームワークを用いて作られているからです。

プログラミング概念の基本知識 (あるいは特定のプログラミング言語の知識) は役立ちますが、必要ではありません。つまり、クライアントサイドコーディングの熟達は必要ではなく、基本知識はクライアントサイドのウェブ「フロントエンド」の開発者とうまく共同作業するのに役立つでしょう。

「ウェブの動作原理」を理解する必要があります。最初に次のトピックを読むのをお勧めします:

- [ウェブサーバーとは](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [ウェブサイトを作るのにどんなソフトウェアが必要か](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [ウェブサーバーにファイルをアップロードする方法](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

基本的な理解があれば、この節のモジュールに進む準備ができているでしょう。

## モジュール

このトピックには次のモジュールがあります。最初のモジュールから始めるべきで、次に続くモジュールのどれかに進んで、そこでウェブフレームワークを使ってとても有名な 2 つのサーバーサイド言語を使う方法を示しています。

- [サーバーサイドウェブサイトプログラミングの最初の一歩](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : このモジュールでは、サーバーサイドのウェブサイトプログラミングに関する、特定の技術に依存しない情報を提供します。具体的には、「サーバーサイドプログラミングとは何か」、「クライアントサイドプログラミングとどう違うのか」、「なぜ有用なのか」といった点について解説します。また、広く利用されているサーバーサイドウェブフレームワークの概要を紹介し、サイトに最適なものを選択するための指針を示します。最後に、ウェブサーバーのセキュリティに関する基礎知識についても解説します。
- [Django ウェブフレームワーク (Python)](/ja/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django は Python で書かれた、極めて人気のある、完全な機能のあるサーバーサイドフレームワークです。このモジュールではなぜ Django がこうも良いウェブサーバーフレームワークであるのかや、開発環境のセットアップ方法や、これを使ってよくあるタスクを行う方法を説明します。
- [Express ウェブフレームワーク (Node.js/JavaScript)](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express は JavaScript で書かれて node.js の実行環境でホストされる、人気のあるウェブフレームワークです。このモジュールではこのフレームワークの主な利点や、開発環境のセットアップ方法や、よくあるウェブ開発・デプロイのタスクを行う方法を説明します。

## 関連情報

- [フレームワークなしの Node サーバー](/ja/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : この記事では、フレームワークを使用せずに、Node.js だけで構築された単純な静的ファイルサーバーを紹介します。
- [サーバーで MIME タイプを正しく設定する](/ja/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : ブラウザーがコンテンツを正しく処理・表示できるようにするためには、正しい {{Glossary("MIME type", "MIME タイプ")}}（メディア種別やコンテンツタイプとも呼ばれます）をブラウザーに送信するよう、サーバーを設定することが重要です。
    同時に、悪意のあるコンテンツが無害なコンテンツを装うことを防ぐことも重要です。
- [Apache の設定: .htaccess](/ja/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Apache の .htaccess ファイルを使用すると、ユーザーはメインの設定ファイルを変更することなく、自分が制御するウェブサーバーのディレクトリーを設定することができます。
