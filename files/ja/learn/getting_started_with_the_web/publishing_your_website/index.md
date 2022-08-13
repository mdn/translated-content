---
title: ウェブサイトの公開
slug: Learn/Getting_started_with_the_web/Publishing_your_website
tags:
  - Beginner
  - CodingScripting
  - FTP
  - GitHub
  - Google App Engine
  - Learn
  - Web
  - l10n:priority
  - publishing
  - web server
  - 初心者
  - 学習
translation_of: Learn/Getting_started_with_the_web/Publishing_your_website
original_slug: Learn/Getting_started_with_the_web/ウェブサイトを公開する
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}</div>

<div class="summary">
<p>ウェブサイトを構成するコードやファイルの整理が終わったら、それをオンラインで公開して、人々が見つけられるようにする必要があります。この記事では、簡単なサンプルコードを手軽にオンラインに公開する方法を説明します。</p>
</div>

<h2 id="What_are_the_options">どんな選択肢があるのか</h2>

<p>ウェブサイトの公開には、さまざまな方法があるため、複雑なテーマです。この記事では、すべての可能な方法を説明するつもりはありません。その代わりに、初心者にとって実用的な 3 つのアプローチのメリットとデメリットを説明します。そして、多くの読者がすぐに使える方法を紹介します。</p>

<h3 id="Getting_hosting_and_a_domain_name">ホストとドメイン名を手に入れる</h3>

<p>コンテンツやウェブサイトの外観をより自由にコントロールするために、多くの人はウェブホスティングとドメイン名の購入を選択します。</p>

<ul>
 <li>ウェブホスティングとは、ホスティング会社の<a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">ウェブサーバー</a>上のファイルスペースを借りることです。ウェブサイトのファイルはウェブサーバー上に置きます。ウェブサーバーは、ウェブサイトのコンテンツをウェブサイトの訪問者に提供します。</li>
 <li>ドメイン名は、 <code>http://www.mozilla.org</code> や <code>http://www.bbc.co.uk</code> のように、お客様のウェブサイトを見つけるための固有のアドレスです。ドメイン名は、<strong>ドメインレジストラー</strong>から何年でも借りることができます。</li>
</ul>

<p>多くのプロの手によるウェブサイトはこんな風にして、公開されているわけです。</p>

<p>さらに、ウェブサイトのファイルを実際にサーバーに転送するには、{{Glossary("FTP", "File Transfer Protocol (FTP、ファイル転送プロトコル)")}} のプログラム  (詳しくは、<a href="/ja/docs/Learn/Common_questions/How_much_does_it_cost#software">どのくらいコストがかかりますか: ソフトウェア</a>を参照) が必要です。 FTP プログラムの種類は様々ですが、一般的には、ホスティング会社から提供された詳細情報 (通常、ユーザー名、パスワード、ホスト名) を使ってウェブサーバーに接続する必要があります。その後、プログラムはローカルファイルとウェブサーバーのファイルを 2 つのウィンドウに表示し、ファイルのやり取りを行うことができます。</p>

<p><img alt="" src="ftp.jpg" style="display: block; margin: 0px auto;"></p>

<h4 id="Tips_for_finding_hosting_and_domains">ホスティングとドメインを見つけるためのヒント</h4>

<ul>
 <li>MDN は、特定の商用ホスティング会社やドメイン名レジストラーを推奨してはいません。ホスティング会社やレジストラーを見つけるには、「ウェブホスティング」や「ドメイン名」で検索してください。どのレジストラーにも、希望するドメイン名が利用可能かどうかを確認する機能があります。</li>
 <li>自宅やオフィスの{{Glossary("ISP", "インターネットサービスプロバイダー")}}が、小規模なウェブサイトのための限定的なホスティングを提供している場合もあります。利用できる機能は限られていますが、初めての試みには最適かもしれません。</li>
 <li><a href="https://neocities.org/">Neocities</a>、Google Sites、<a href="https://www.blogger.com">Blogger</a>、<a href="https://wordpress.com/">WordPress</a> のような無料のサービスもあります。有料のものもありますが、最初の実験にはこれらのリソースで十分な場合もあります。</li>
 <li>ホスティングをドメインの両方を提供している会社もたくさんあります。</li>
</ul>

<h3 id="Using_an_online_tool_like_GitHub_or_Google_App_Engine">GitHub や Google App Engine のようなオンラインツールの利用</h3>

<p>ウェブサイトをオンラインで公開できるツールもあります。</p>

<ul>
 <li><a href="https://github.com/">GitHub</a> は、「ソーシャルコーディング」サイトです。コードリポジトリーをアップロードして <a href="https://git-scm.com/">Git</a> <strong>バージョン管理システム</strong>に保存することができます。このシステムは既定でオープンソースになっており、世界中の誰もが GitHub のコードを見つけ、それを使い、そこから学び、改良することができます。また、 GitHub には <a href="https://pages.github.com/">GitHub Pages</a> という便利な機能があり、ウェブサイトのコードをウェブ上で公開することができます。</li>
 <li><a href="https://cloud.google.com/appengine/" title="App Engine - Build Scalable Web &amp; Mobile Backends in Any Language  |  Google Cloud Platform">Google App Engine</a> Google のインフラ上でアプリケーションを構築・実行できる強力なプラットフォームです。複数階層のウェブアプリケーションをゼロから構築する場合も、静的なウェブサイトをホスティングする場合も同様です。詳細は、<a href="/ja/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine">Google App Engine でウェブサイトをホスティングするには</a>を参照してください。</li>
</ul>

<p>これらのオプションは通常無料ですが、限定された機能セットでしか成長させることができません。</p>

<h3 id="Using_a_web-based_IDE_such_as_CodePen">CodePen のようなウェブベースの IDE の利用</h3>

<p>ウェブサイトの開発環境をエミュレートするウェブアプリは数多くあり、HTML、CSS、JavaScript を入力すると、そのコードの結果をウェブサイトとして表示することができます。一般的に、これらのツールは比較的簡単で、学習にも適しており、コードを共有するのにも適しています (例えば、別のオフィスにいる同僚とテクニックを共有したり、デバッグの助けを求めたりする場合など)。また、 (基本的な機能については) 無料です。レンダリングされたページを、固有のウェブアドレスでホスティングしてくれます。ただし、機能は限られており、通常はアセット (画像など) のホスティングスペースは提供されていません。</p>

<p>これらを試してみて、一番合ったものを見つけてみましょう。</p>

<ul>
 <li><a href="https://jsfiddle.net/">JSFiddle</a></li>
 <li><a href="https://glitch.com/">Glitch</a></li>
 <li><a href="https://jsbin.com/">JS Bin</a></li>
 <li><a href="https://codepen.io/">CodePen</a></li>
</ul>

<p><img alt="" src="jsbin-screen.png" style="display: block; margin: 0px auto;"></p>

<h2 id="Publishing_via_GitHub">GitHub 経由での公開</h2>

<p>では、GitHub Pages 経由でどれくらい簡単にサイトを公開できるかを実際にやってみましょう。</p>

<ol>
 <li>まず、 <a href="https://github.com/">GitHub にサインアップして</a>、メールアドレスの認証を受けましょう。</li>
 <li>次に ファイルを入れるための<a href="https://github.com/new">リポジトリーを作成</a>しましょう。</li>
 <li>このページ上の、 <em>Repository name</em> ボックスに <em>ユーザー名</em>.github.io と入力してください。 <em>ユーザー名</em> はあなたのユーザー名です。例えば、私の友達の Bob Smith であれば <em>bobsmith.github.io</em> と入力します。<br>
  さらに、 "Initialize this repository with a README" ボックスをチェックし、 "Create repository" をクリックしてください。<img alt="" src="github-create-repo.png" style="display: block; margin: 0px auto;"></li>
 <li>ウェブサイトのフォルダーをリポジトリーの中にドラッグアンドドロップしたら、 <em>Commit changes</em> をクリックしましょう。<br>

  <div class="note">
  <p><strong>注</strong>: フォルダーの中に <code>index.html</code> ファイルがあるかを確認しましょう。</p>
  </div>
 </li>
 <li>
  <p>では、ウェブサイトをオンライン上で見るために、ブラウザーから username.github.io に移動しましょう。例えば、ユーザーネームが chrisdavidmills なら、<a href="https://chrisdavidmills.github.io/">chrisdavidmills.github.io</a> に移動しましょう。</p>

  <div class="note">
  <p><strong>注</strong>: ウェブサイトに使えるようになるには少し時間がかかるかもしれません。ウェブサイトがすぐに表示されない場合は、少し待ってみてください。そしてもう一度試してみましょう。</p>
  </div>
 </li>
</ol>

<p>もっと詳しく知りたい人は <a href="https://help.github.com/categories/github-pages-basics/">GitHub Pages Help</a> を見てください。</p>

<h2 id="Further_reading">参考文献</h2>

<ul>
 <li><a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">ウェブサーバーとは何か</a></li>
 <li><a href="/ja/docs/Learn/Common_questions/What_is_a_domain_name">ドメイン名を理解する</a></li>
 <li><a href="/ja/docs/Learn/Common_questions/How_much_does_it_cost">ウェブサイトで何かするのにいくらかかるか?</a></li>
 <li><a href="https://www.codecademy.com/learn/deploy-a-website">Deploy a Website</a>: Codecademy の良いチュートリアルで、もう少し詳しく追加のテクニック含めて示しています。</li>
 <li><a href="https://alignedleft.com/resources/cheap-web-hosting">Cheap or Free Static Website Hosting</a> Scott Murray による利用できるサービスについての使えるアイデアがあります。</li>
</ul>

<p>{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works", "Learn/Getting_started_with_the_web")}}</p>

<h2 id="In_this_module">このモジュール</h2>

<ul>
 <li id="Installing_basic_software"><a href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software">基本的なソフトウェアのインストール</a></li>
 <li id="What_will_your_website_look_like"><a href="/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like">ウェブサイトをどんな外見にするか</a></li>
 <li id="Dealing_with_files"><a href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files">ファイルの扱い</a></li>
 <li id="HTML_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML の基本</a></li>
 <li id="CSS_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS の基本</a></li>
 <li id="JavaScript_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript の基本</a></li>
 <li id="Publishing_your_website"><a href="/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website">ウェブサイトの公開</a></li>
 <li id="How_the_web_works"><a href="/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works">ウェブのしくみ</a></li>
</ul>
