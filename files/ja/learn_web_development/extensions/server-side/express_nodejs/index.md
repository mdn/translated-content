---
title: Express ウェブフレームワーク (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}

Express は、JavaScript で書かれ、Node.js 実行環境内でホストされている、人気の指図しないウェブフレームワークです。このモジュールでは、このフレームワークの主な利点、開発環境の設定方法、一般的なウェブ開発と配置作業の実行方法について説明します。

## 前提条件

このモジュールを始める前に、サーバーサイドのウェブプログラミングとウェブフレームワークが何かを理解する必要があります。理想的なのは[サーバーサイドのウェブサイトプログラミングの第一歩](/ja/docs/Learn_web_development/Extensions/Server-side/First_steps)モジュールのトピックを読むことです。プログラミングの概念と [JavaScript](/ja/docs/Web/JavaScript) の一般的な知識があることを強くお勧めしますが、中核となる概念を理解するために不可欠ではありません。

> [!NOTE]
> このウェブサイトには、クライアントサイド開発のコンテキストで JavaScript を学習するための多くの有用なリソースがあります。[JavaScript](/ja/docs/Web/JavaScript)、[JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)、[JavaScript の基本](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)、[JavaScript](/ja/docs/Learn_web_development/Core/Scripting)(学習)。JavaScript のコアとなる言語と概念は、Node.js でのサーバーサイド開発と同じであり、この資料は関連性があります。Node.js は、ブラウザーレス環境で役立つ機能をサポートするための[追加の API](https://nodejs.org/dist/latest-v10.x/docs/api/) を提供します (たとえば、HTTP サーバーを作成してファイルシステムにアクセスするため。ただし、ブラウザーおよび DOM を操作するための JavaScript API はサポートしません)。
>
> このガイドは Node.js と Express を使った作業についての情報を提供します。インターネットや本には他にもたくさんの優れたリソースがあります。これらのうち一部は [How do I get started with Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) と [What are the best resources for learning Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora) からリンクされています。

## ガイド

- [Express/Node の紹介](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : この最初の Express 記事では、"Node とは何ですか？"、"Express とは何ですか？" という質問に答えます。Express ウェブフレームワークが特別になった理由の概要を説明します。主な機能の概要を説明し、Express アプリケーションの主な構成要素をいくつか紹介します (ただし、現時点ではテスト用の開発環境はまだありません)。
- [Node (Express) 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Express の目的がわかったので、Windows、Linux (Ubuntu)、および macOS 上で Node/Express 開発環境を設定およびテストする方法を説明します。この記事は、オペレーティングシステム共通の、Express アプリの開発を始めるために必要なものを提供します。
- [Express チュートリアル: 地域図書館のウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : 私たちの実用的なチュートリアルシリーズの最初の記事はあなたが何を学ぶかについて説明して、それを通して研究し、そしてその後の記事で進化するであろう "地域図書館" の例のウェブサイトの概要を提供します。
- [Express チュートリアル Part 2: スケルトンウェブサイトの作成](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : この記事ではどのようにして "スケルトン"ウェブサイトプロジェクトを作成し、その後サイト固有のルート、テンプレート/ビュー、およびデータベースを追加するかを説明します。
- [Express チュートリアル Part 3: データベースの使用 (Mongoose を使用)](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : この記事では、Node/Express 用のデータベースについて簡単に紹介します。続いて、[Mongoose](http://mongoosejs.com/) を使用して「地域図書館」ウェブサイトへのデータベースアクセスを提供する方法を説明します。オブジェクトスキーマとモデルの宣言方法、主なフィールドタイプ、および基本的な検証について説明します。また、モデルデータにアクセスするための主な方法のいくつかについても簡単に説明します。
- [Express チュートリアル Part 4: ルートとコントローラー](/ja/docs/Learn/Server-side/Express_Nodejs/routes)
  - : このチュートリアルでは、「地域図書館」ウェブサイトで最終的に必要なすべてのリソースエンドポイントに対して、"ダミー" ハンドラー関数を使用してルート (URL 処理コード) を設定します。完成したら、次の記事で実際のハンドラー関数を使って拡張できるように、ルート処理コードのためのモジュール構造を作ります。Express を使用してモジュラールートを作成する方法についても、非常によく理解できるでしょう。
- [Express チュートリアル Part 5: ライブラリーデータの表示](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : これで、「地域図書館」のウェブサイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したりテンプレートを使用したりする実際的な経験を積むことになります。
- [Express チュートリアル Part 6: フォームの操作](/ja/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : このチュートリアルでは Pug を使用して Express で [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)を操作する方法、特にデータベースからドキュメントを作成、更新、削除するためのフォームを作成する方法を説明します。
- [Express チュートリアル Part 7: プロダクションへのデプロイ](/ja/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : これで素晴らしい「地域図書館」ウェブサイトを作成したので、それを公共のウェブサーバーにインストールして、図書館のスタッフとメンバーがインターネットを介してアクセスできるようにします。この記事では、ウェブサイトをデプロイするためのホストを見つける方法、およびサイトを運用に向けて準備するために必要な作業の概要について説明します。

## チュートリアルを追加する

既存のチュートリアル記事は以上となります。あなたがそれを拡張したいならば、カバーする他の興味深いトピックは以下の通りです。

- セッションの使用
- ユーザー認証
- ユーザーの認可と権限
- Express ウェブアプリケーションをテストする
- Express ウェブアプリケーションのウェブセキュリティ

そしてもちろん、評価作業を行うのは素晴らしいことです。

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}
