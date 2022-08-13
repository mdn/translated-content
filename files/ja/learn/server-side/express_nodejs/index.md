---
title: Express Web フレームワーク (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
tags:
  - Beginner
  - CodingScripting
  - Express
  - Express.js
  - Intro
  - JavaScript
  - Learn
  - Node
  - Server-side programming
  - node.js
  - イントロダクション
  - サーバサイドプログラミング
  - 初心者
  - 学習
translation_of: Learn/Server-side/Express_Nodejs
---
<div>{{LearnSidebar}}</div>

<p class="summary">Express は、JavaScript で書かれ、Node.js 実行環境内でホストされている、人気の指図しないウェブフレームワークです。このモジュールでは、このフレームワークの主な利点、開発環境の設定方法、一般的なウェブ開発と配置作業の実行方法について説明します。</p>

<h2 id="Prerequisites" name="Prerequisites">前提条件</h2>

<p>このモジュールを始める前に、サーバーサイドのウェブプログラミングとウェブフレームワークが何かを理解する必要があります。理想的なのは<a href="/ja/docs/Learn/Server-side/First_steps">サーバーサイドのウェブサイトプログラミングの第一歩</a>モジュールのトピックを読むことです。プログラミングの概念と <a href="/ja/docs/Web/JavaScript">JavaScript</a> の一般的な知識があることを強くお勧めしますが、中核となる概念を理解するために不可欠ではありません。</p>

<div class="note">
<p><strong>メモ</strong>: このウェブサイトには、クライアントサイド開発のコンテキストで JavaScript を学習するための多くの有用なリソースがあります。<a href="/ja/docs/Web/JavaScript">JavaScript</a>、<a href="/ja/docs/Web/JavaScript/Guide">JavaScript ガイド</a>、<a href="/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript の基本</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript </a>(学習)。JavaScript のコアとなる言語と概念は、Node.js でのサーバーサイド開発と同じであり、この資料は関連性があります。Node.js は、ブラウザーレス環境で役立つ機能をサポートするための<a href="https://nodejs.org/dist/latest-v10.x/docs/api/">追加の API</a> を提供します (たとえば、HTTP サーバーを作成してファイルシステムにアクセスするため。ただし、ブラウザーおよび DOM を操作するための JavaScript API はサポートしません)。</p>

<p>このガイドは Node.js と Express を使った作業についての情報を提供します。インターネットや本には他にもたくさんの優れたリソースがあります。これらのうち一部は <a href="http://stackoverflow.com/a/5511507/894359">How do I get started with Node.js</a> (StackOverflow) と <a href="https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?">What are the best resources for learning Node.js?</a> (Quora) からリンクされています。</p>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<dl>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node の入門</a></dt>
 <dd>この最初の Express 記事では、"Node とは何ですか？"、"Express とは何ですか？" という質問に答えます。Express ウェブフレームワークが特別になった理由の概要を説明します。主な機能の概要を説明し、Express アプリケーションの主な構成要素をいくつか紹介します (ただし、現時点ではテスト用の開発環境はまだありません)。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/development_environment">Node (Express) 開発環境の設定</a></dt>
 <dd>Express の目的がわかったので、Windows、Linux (Ubuntu)、および Mac OS X 上で Node/Express 開発環境を設定およびテストする方法を説明します。この記事は、オペレーティングシステム共通の、Express アプリの開発を始めるために必要なものを提供します。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express チュートリアル: 地域図書館のウェブサイト</a></dt>
 <dd>私たちの実用的なチュートリアルシリーズの最初の記事はあなたが何を学ぶかについて説明して、それを通して研究し、そしてその後の記事で進化するであろう "地域図書館" の例のウェブサイトの概要を提供します。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express チュートリアル Part 2: スケルトンウェブサイトの作成</a></dt>
 <dd>この記事ではどのようにして "スケルトン"ウェブサイトプロジェクトを作成し、その後サイト固有のルート、テンプレート/ビュー、およびデータベースを追加するかを説明します。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/mongoose">Express チュートリアル Part 3: データベースの使用 (Mongoose を使用)</a></dt>
 <dd>この記事では、Node/Express 用のデータベースについて簡単に紹介します。続いて、<a href="http://mongoosejs.com/">Mongoose</a> を使用して「地域図書館」ウェブサイトへのデータベースアクセスを提供する方法を説明します。オブジェクトスキーマとモデルの宣言方法、主なフィールドタイプ、および基本的な検証について説明します。また、モデルデータにアクセスするための主な方法のいくつかについても簡単に説明します。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/routes">Express チュートリアル Part 4: ルートとコントローラー</a></dt>
 <dd>このチュートリアルでは、「地域図書館」ウェブサイトで最終的に必要なすべてのリソースエンドポイントに対して、"ダミー" ハンドラ関数を使用してルート (URL 処理コード) を設定します。完成したら、次の記事で実際のハンドラ関数を使って拡張できるように、ルート処理コードのためのモジュール構造を作ります。Express を使用してモジュラールートを作成する方法についても、非常によく理解できるでしょう。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express チュートリアル Part 5: ライブラリデータの表示</a></dt>
 <dd>これで、「地域図書館」のウェブサイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したりテンプレートを使用したりする実際的な経験を積むことになります。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/forms">Express チュートリアル Part 6: フォームの操作</a></dt>
 <dd>このチュートリアルでは Pug を使用して Express で <a href="/ja/docs/Learn/HTML/Forms">HTML フォーム</a>を操作する方法、特にデータベースからドキュメントを作成、更新、削除するためのフォームを作成する方法を説明します。</dd>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/deployment">Express チュートリアル Part 7: プロダクションへのデプロイ</a></dt>
 <dd>これで素晴らしい「地域図書館」ウェブサイトを作成したので、それを公共のウェブサーバーにインストールして、図書館のスタッフとメンバーがインターネットを介してアクセスできるようにします。この記事では、ウェブサイトをデプロイするためのホストを見つける方法、およびサイトを運用に向けて準備するために必要な作業の概要について説明します。</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<dl>
 <dt><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Installing_on_PWS_Cloud_Foundry">PWS/Cloud Foundry に LocalLibrary をインストールする</a></dt>
 <dd>この記事では、<a href="http://run.pivotal.io/">Pivotal Web サービスの PaaS クラウド</a>に「地域図書館」をインストールする方法の実際的なデモンストレーションを行います。これは、上記のチュートリアルの第7部で使用されている PaaS クラウドサービスである Heroku に代わるフル機能のオープンソースです。PWS/Cloud Foundry は、Heroku (または別の PaaS クラウドサービス) に代わるものを探している場合、または単に何か違うことを試したい場合には、絶対にチェックする価値があります。</dd>
</dl>

<h2 id="Adding_more_tutorials" name="Adding_more_tutorials">チュートリアルを追加する</h2>

<div>
<p>既存のチュートリアル記事は以上となります。あなたがそれを拡張したいならば、カバーする他の興味深いトピックは以下の通りです：</p>

<ul>
 <li>セッションの使用</li>
 <li>ユーザー認証</li>
 <li>ユーザーの認可と権限</li>
 <li>Express ウェブアプリケーションをテストする</li>
 <li>Express ウェブアプリケーションの Web セキュリティ</li>
</ul>

<p>そしてもちろん、評価作業を行うのは素晴らしいことです。</p>
</div>
