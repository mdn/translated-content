---
title: 'Django チュートリアル: 地域図書館ウェブサイト'
slug: Learn/Server-side/Django/Tutorial_local_library_website
tags:
  - Python
  - django
  - チュートリアル
  - 初心者
translation_of: Learn/Server-side/Django/Tutorial_local_library_website
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}</div>

<p class="summary">実践的なチュートリアルシリーズの最初の記事は、学習する内容を説明し、後の記事で進めていく「地域図書館」のサンプルウェブサイトの概要を示しています。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td><a href="/ja/docs/Learn/Server-side/Django/Introduction">Djangoの紹介</a>を読んでください。以下の記事では、<a href="/ja/docs/Learn/Server-side/Django/development_environment">Django開発環境をセットアップする</a>必要があります。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>このチュートリアルで使用されているサンプルアプリケーションを紹介し、読者が何をするかを理解できるようにします。</td>
  </tr>
 </tbody>
</table>

<h2 id="概要">概要</h2>

<p>MDN "地域図書館" Djangoチュートリアルへようこそ。ここでは、地域図書館のカタログを管理するためのWebサイトを開発します。</p>

<p>この一連のチュートリアルの記事でやることは次の通りです:</p>

<ul>
 <li>Djangoのツールを使用して、Webサイトのスケルトンとアプリケーションを作成します。</li>
 <li>開発用サーバーを起動および停止します。</li>
 <li>アプリケーションのデータを表すモデルを作成します。</li>
 <li>Django管理サイトを使用してサイトのデータを設定します。</li>
 <li>さまざまな要求に応じて特定のデータを取得するためのビューを作成し、ブラウザに表示するHTMLとして、データをレンダリングするためのテンプレートを作成します。</li>
 <li>異なるURLパターンを特定のビューに関連付けるためのマッパーを作成します。</li>
 <li>ユーザーの認可とセッションを追加して、サイトの動作とアクセスを制御します。</li>
 <li>フォームを使います。</li>
 <li>アプリケーションのテストコードを書きます。</li>
 <li>Djangoのセキュリティを効果的に使用します。</li>
 <li>アプリケーションを本番環境にデプロイします。</li>
</ul>

<p>これらの話題のいくつかについて学び、他の話題にも簡単に触れました。チュートリアルシリーズの最後は、あなた自身で簡単なDjangoアプリケーションを開発するのに十分な知識が必要です。</p>

<h2 id="地域図書館ウェブサイト">地域図書館ウェブサイト</h2>

<p><em>地域図書館（LocalLibrary）は、この一連のチュートリアルの過程で作成および展開するWebサイトの名前です。ご存じのように、ウェブサイトの目的は、利用可能な書籍を閲覧してアカウントを管理できる小さな地域図書館のオンラインカタログを提供することです。</em></p>

<p>この例は慎重に選択されています。なぜなら、必要に応じて細かく表示することができ、ほぼすべてのDjango機能を表示するために使用できます。 さらに重要なことは、Django Webフレームワークの最も重要な機能をガイドする方法を提供できることです:</p>

<ul>
 <li>最初のいくつかのチュートリアルの記事では、図書館員が利用可能な書籍を見つけるために使用できる簡単なブラウズ専用図書館を定義します。これにより、ほぼすべてのWebサイトに共通する操作、つまりデータベースからの内容の読み取りと表示を探ります。</li>
 <li>進めていくと、図書館の例は、より高度なDjangoの機能を説明するために自然に拡張していきます。たとえば、ユーザーが書籍を予約できるように図書館を拡張し、これを使ってフォームの使用方法をデモし、ユーザー認証をサポートできます。</li>
</ul>

<p>これは非常に拡張可能な例ですが、地域図書館と呼んでいます。理由は、Djangoをすぐに起動して実行するのに役立つ最小限の情報を表示したいと考えているからです。つまり、書籍、本のコピー、作者関する情報、およびその他の重要な情報は保存します。しかし、図書館が保管する可能性のある他のアイテムに関する情報を保管したり、複数の図書館サイトやその他の「大きな図書館」機能をサポートするために必要なインフラストラクチャーを提供することはありません。</p>

<h2 id="詰まってます、どこでソースを入手できますか？">詰まってます、どこでソースを入手できますか？</h2>

<p>チュートリアルを進めるうちに、各ポイントでコピー＆ペーストするための適切なコードスニペットが提供されます。また、この他に自分で拡張してほしいコードもあります（いくつかのガイダンスがあります）。</p>

<p>詰まった場合は、ウェブサイトの完全に開発されたバージョンを<a href="https://github.com/mdn/django-locallibrary-tutorial">Github上</a>で見ることができます。</p>

<h2 id="要約">要約</h2>

<p>地域図書館ウェブサイトについてと、何を学ぶのかをもう少し知りました。今度は例を含む<a href="/ja/docs/Learn/Server-side/Django/skeleton_website">スケルトンプロジェクト</a>を作成しましょう。</p>

<p>{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}</p>

<p> </p>

<h2 id="このモジュール内">このモジュール内</h2>

<ul>
 <li><a href="/ja/docs/Learn/Server-side/Django/Introduction">Django の紹介</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/development_environment">Django 開発環境の設定</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Tutorial_local_library_website">Django チュートリアル: 地域図書館ウェブサイト</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/skeleton_website">Django チュートリアル Part 2: ウェブサイトの骨組み作成</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Models">Django チュートリアル Part 3: モデルの使用</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Admin_site">Django チュートリアル Part 4: Django 管理サイト</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Home_page">Django チュートリアル Part 5: ホームページの作成</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Generic_views">Django チュートリアル Part 6: 汎用の一覧表示と詳細表示</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Sessions">Django チュートリアル Part 7: セッションフレームワーク</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Authentication">Django チュートリアル Part 8: ユーザー認証と権限</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Forms">Django チュートリアル Part 9: フォームの操作</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Testing">Django チュートリアル Part 10: Django ウェブアプリケーションのテスト</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/Deployment">Django チュートリアル Part 11: Django を本番環境にデプロイする</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/web_application_security">Django ウェブアプリケーションセキュリティ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django ミニブログ</a></li>
</ul>

<p> </p>
