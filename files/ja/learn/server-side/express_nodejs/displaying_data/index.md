---
title: 'Express チュートリアル Part 5: ライブラリデータの表示'
slug: Learn/Server-side/Express_Nodejs/Displaying_data
tags:
  - Express
  - nodejs
  - pug
  - コントローラ
  - テンプレート
  - ビュー
  - 初心者
  - 学習
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">これで<a href="/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">地域図書館</a>の Web サイトの書籍やその他のデータを表示するページを追加する準備が整いました。このページには、各モデルタイプのレコード数と、すべてのモデルのリストおよび詳細ページを示すホームページが含まれます。その過程で、データベースからレコードを取得したり、テンプレートを使用したりする際の実際的な経験を積むことになります。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>以前のチュートリアルのトピック (<a href="/ja/docs/Learn/Server-side/Express_Nodejs/routes">Express チュートリアル Part 4: ルートとコントローラ</a>を含む) を完了してください。</td>
  </tr>
  <tr>
   <th scope="row">目標:</th>
   <td>async モジュールと Pug テンプレート言語の使い方、そしてコントローラ関数の URL からデータを取得する方法を理解すること。</td>
  </tr>
 </tbody>
</table>

<h2 id="概要">概要</h2>

<p>前回のチュートリアル記事では、データベースとやり取りするために使用できる <a href="/ja/docs/Learn/Server-side/Express_Nodejs/mongoose">Mongoose モデル</a>を定義し、いくつかの初期ライブラリレコードを作成しました。その後、LocalLibrary Web サイトに必要な<a href="/ja/docs/Learn/Server-side/Express_Nodejs/routes">すべてのルートを作成しました</a>が、"ダミーコントローラ" 関数 (ページにアクセスすると "未実装" のメッセージを返すだけのスケルトンコントローラ関数) を使用しました。</p>

<p>次のステップは、私たちの図書館情報を表示するページに適切な実装をすることです (後の記事で情報を作成、更新、または削除するフォームを特徴とする実装ページを見ます)。これには、モデルを使用してレコードを取得するためのコントローラ機能の更新、およびこの情報をユーザに表示するためのテンプレートの定義が含まれます。</p>

<p>はじめに、コントローラ関数で非同期操作を管理する方法と Pug を使用してテンプレートを作成する方法を説明する概要/入門トピックを提供します。それから、主要な "読み取り専用" ページのそれぞれに、それらが使用する特別な機能や新しい機能についての簡単な説明を付けて実装を提供します。</p>

<p>この記事が終わるときには、ルート、非同期関数、ビュー、およびモデルが実際にどのように機能するのかについてのエンドツーエンドの理解が十分にあるはずです。</p>

<h2 id="ライブラリデータチュートリアルサブ記事の表示">ライブラリデータチュートリアルサブ記事の表示</h2>

<p>次のサブ記事では、必要な Web サイトページを表示するために必要なさまざまな機能を追加するプロセスについて説明します。次のものに進む前に、順番にこれらのそれぞれを読み、作業する必要があります。</p>

<ol>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async">async を使用した非同期フロー制御</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer">テンプレートプライマー</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template">LocalLibrary 基本テンプレート</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page">ホームページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page">ブックリストページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page">ブックインスタンスリストページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment">moment を使用した日付のフォーマット</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page">著者リストページとジャンルリストページのチャレンジ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page">ジャンル詳細ページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page">本の詳細ページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page">著者詳細ページ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge">ブックインスタンス詳細ページとチャレンジ</a></li>
</ol>

<h2 id="まとめ">まとめ</h2>

<p>これで、サイトのすべての "読み取り専用" ページを作成しました。各モデルのインスタンスの数を表示するホームページ、および書籍、書籍のインスタンス、作家、ジャンルのリストと詳細ページです。その過程でコントローラ、非同期操作を使用したときのフロー制御の管理、Pug を使用したビューの作成、モデルを使用したデータベースの照会、ビューからテンプレートへの情報の受け渡し方法などについて多くの基礎知識を得て、そしてテンプレートを作成および拡張しました。チャレンジを完了した人たちはまた、moment を使った日付処理について少し学んだことでしょう。</p>

<p>次回の記事では、サイトに格納されているデータの変更を開始するための HTML フォームとフォーム処理コードを作成して、私たちの知識に基づいて構築します。</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li><a href="http://caolan.github.io/async/docs.html">Async module</a> (Async ドキュメント)</li>
 <li><a href="https://expressjs.com/en/guide/using-template-engines.html">Using Template engines with Express</a> (Express ドキュメント)</li>
 <li><a href="https://pugjs.org/api/getting-started.html">Pug</a> (Pug ドキュメント)</li>
 <li><a href="http://momentjs.com/docs/">Moment</a> (Moment ドキュメント)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}</p>

<h2 id="このモジュール">このモジュール</h2>

<ul>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node のイントロダクション</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/development_environment">Node 開発環境の設定</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express チュートリアル: 地域図書館の Web サイト</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express チュートリアル Part 2: スケルトン Web サイトの作成</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/mongoose">Express チュートリアル Part 3: データベースを使う (Mongoose を使用)</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/routes">Express チュートリアル Part 4: ルートとコントローラ</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express チュートリアル Part 5: ライブラリデータの表示</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/forms">Express チュートリアル Part 6: フォームの操作</a></li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs/deployment">Express チュートリアル Part 7: プロダクションへのデプロイ</a></li>
</ul>
