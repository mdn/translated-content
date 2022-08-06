---
title: 全くの初心者のための GitHub
slug: conflicting/MDN/Community/Contributing/Getting_started
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
translation_of: MDN/Contribute/GitHub_beginners
original_slug: MDN/Contribute/GitHub_beginners
---
<p>{{MDNSidebar}}</p>

<p><a href="https://git-scm.com/">Git</a> と <a href="https://github.com/">GitHub</a> は学習したり使いこなしたりするのが難しいツールですが、いくつかの簡単なコマンドと適切なアドバイスがあれば、 MDN への協力を始めるのに十分な程度のことが、さほど苦労せずにできるはずです。この記事の目的は、 Git や GitHub を使いこなすことではなく、基本的なレベルで生産的になり、 MDN に協力するために必要なことを紹介することです。</p>

<p>すでに Git/GitHub の基本に慣れている人は、おそらくここで新しいことを学ぶことはないでしょうが、それでもこの記事をリファレンスとして活用することはできるでしょう。また、長い説明を省いてコマンドだけを掲載している <a href="/ja/docs/MDN/Contribute/GitHub_cheatsheet">GitHub の早見表</a>もあります。</p>

<h2 id="essential_concepts">基本的な概念</h2>

<p>以下のものは Git と GitHub を最大限に活用するために知っておかなければならない基本的な概念です。</p>

<ul>
  <li>Git は<em>バージョン管理システム</em>のツールで、開発ワークフローには欠かせないものです。複数の開発者が同じコードベースで、互いの邪魔にならないように作業したり、コードベースをリモートの場所に安全に保管したり、必要に応じてコードを以前の状態に戻したりといったことができます。</li>
  <li>GitHub は、保存されたコードベースを操作するための便利なツールを Git の上に提供し、コードベースを保存するためのサーバースペースの提供も行うウェブアプリケーションです。この分野の他のアプリケーションである <a href="https://about.gitlab.com/">GitLab</a> や <a href="https://bitbucket.org/">Bitbucket</a> などと同様の機能を持っています。</li>
  <li>それぞれのコードベースは、リポジトリー (<em>repository</em> または <em>repo</em>) と呼ばれるコンテナーに格納されます。</li>
  <li>リポジトリーに変更を加える最小限の手順は次の通りです。
    <ul>
      <li>そのリポジトリーの自分用のコピーを作成する (フォーク (<em>fork</em>) といいます)。</li>
      <li>リポジトリーのフォークに別なバージョンのコードを作成し (ブランチ (<em>branch</em>) といいます)、その別なバージョンに変更を加える。</li>
      <li>プルリクエスト (<em>pull request</em>) によって元のリポジトリーのコピーに変更を加えることを提案する。このガイドでは、これらの手順をすべて学ぶことができます。</li>
    </ul>
  </li>
</ul>

<h2 id="assumptions_made_by_this_article">この記事の前提条件</h2>

<p>この記事では以下のことを前提としています。</p>

<ul>
  <li>コマンドライン／端末の利用に慣れていること。コマンドラインを使うのが初めての方は、<a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">コマンドラインの短期集中コース</a>をご覧ください。</li>
  <li>標準的な UNIX スタイルのコマンドラインのコマンドを解釈できるシステムで作業をしている。 macOS/Linux ではこの機能がすぐに使えます。 <a href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#windows">Windows はこの点ではそれほど単純ではありません</a> が、 Gitbash のように Windows でこの機能をエミュレートする便利なアプリケーションがあります。</li>
  <li>Git/GitHub の操作にはコマンドラインを使います。 Git や GitHub 用の GUI ツールはいくつかありますが、このガイドでは利用できません。</li>
</ul>

<h2 id="initial_setup">初期設定</h2>

<p>特定のリポジトリーでの作業を開始する前に、以下の手順を実行してください。</p>

<ol>
  <li>Git をコンピューターにインストールしてください。 <a href="https://git-scm.com/downloads">Git ダウンロードページ</a>にアクセスして、自分のコンピューター用の最新バージョンをダウンロードし、インストールしてください。 Windows ユーザーの場合は、 <a href="https://gitforwindows.org/">Git for Windows</a> パッケージに Gitbash が含まれているのでインストールしてください。</li>
  <li>ついでに、 MDN をローカルで作業するために必要な他の依存関係、すなわち <a href="https://nodejs.org/en/download/">Node.js</a> と <a href="https://classic.yarnpkg.com/en/docs/install">yarn</a> もインストールしてください。
    <ol>
      <li>Node.js をインストールするには、上記のリンクをクリックして、自分のコンピューター用の最新バージョンをダウンロードしてインストールしてください。</li>
      <li>Node.js をインストールしたら、 <code>npm install --global yarn</code> を実行して yarn をインストールしてください。</li>
    </ol>
  </li>
  <li>すべての Git リポジトリーを保存するための別のディレクトリーを、コンピューターのどこか、コマンドラインで簡単に見つけて移動できるところに作成します。 mdn-git というディレクトリーを home/user ディレクトリーの中に作成するといいでしょう。</li>
  <li>まだない場合は、 <a href="https://github.com/join">GitHub アカウントをサインアップ</a>してください。 MDN のリポジトリーに貢献するのに必要です。</li>
</ol>

<h3 id="setting_up_ssh_authentication_on_github">GitHub での SSH 認証の設定</h3>

<p>この時点で、 SSH キーを GitHub のアカウントに設定する必要があります。これは基本的に、 GitHub に自分を識別させるためのセキュリティ機構であり、 GitHub のサービスを利用するたびに認証する必要がなくなります。</p>

<p>GitHub は、この設定に関する便利なガイドを用意しています。まずは <a href="https://docs.github.com/ja/github/authenticating-to-github/connecting-to-github-with-ssh">GitHub に SSH で接続する</a>を参照してください。ここで紹介する手順に従って、 Github で SSH を利用するための設定を行います。</p>

<p>これを行わなくても MDN に貢献することはできますが、 GitHub とやり取りするたびに (例えば、後で触れるようにプルリクエストを送信するたびに) ユーザー名とパスワードを入力しなければならなくなります。</p>

<h2 id="setting_up_to_work_on_a_specific_repo">特定のリポジトリーで作業するためのセットアップ</h2>

<p>MDN のさまざまなタスクに取り組む際には、いくつかの異なるリポジトリーを更新する必要がありますが (<a href="/ja/docs/MDN/Contribute/Where_is_everything">MDN 上のものはどこにあるのか - リポジトリーのガイド</a>を参照)、作業するどのリポジトリーでも、より簡単で一貫した作業を行うために従うべきセットアップ手順がいくつかあります。</p>

<h3 id="forking_and_cloning">フォークとクローン</h3>

<p><em>フォーク</em>と<em>クローン</em>という二つの用語は、 Git の世界ではよく遭遇するものです。</p>

<ul>
  <li>フォークは GitHub 上でリポジトリーの自分用のコピーを作成するという意味です。</li>
  <li>クローンは作業用のリポジトリーのローカルコピーを作成するという意味です (すなわちローカルのハードディスク上に)。</li>
</ul>

<p>この二つは個別に行うことができますが、実際には他人のプロジェクトに協力する場合、ほとんどは一緒に行うことになるでしょう。まず、作業したいと思っている各リポジトリーのフォークを作成してください。これは、そのリポジトリーのメインバージョンに変更要求を出すために必要となります (プルリクエストの作成方法については後ほど説明します)。セキュリティ上の理由から、メインバージョンのリポジトリーに直接変更を加えることはできません。</p>

<p>今ここで <a href="https://github.com/mdn/content">https://github.com/mdn/content</a> をフォークしてみましょう。いつか必ずこのリポジトリーに貢献することになるでしょう。以下の手順に従ってください。</p>

<ol>
  <li>
    <p>content リポジトリーのページの右上にある Fork ボタンを探して押してください。</p>

    <p><img src="fork-button.png" alt="Fork と書かれたボタン、その隣に 609 という数値がある"></p>
  </li>
  <li>
    <p>リポジトリーをどこにフォークするかを尋ねるモーダルウィンドウが表示されます。個人の GitHub アカウントを選択してください。</p>

    <p>"Forking mdn/content. It should only take a few seconds." というようなメッセージが表示されます。 GitHub がフォークを完了すると、ブラウザーは新しいフォークのページにリダイレクトされます。たとえば、私がフォークした <a href="https://github.com/mdn/content">https://github.com/mdn/content</a> は <a href="https://github.com/chrisdavidmills/content">https://github.com/chrisdavidmills/content</a> で利用できます。</p>
  </li>
</ol>

<p>リポジトリーをフォークしたら、今度はフォークしたものをローカルにクローンしましょう。これは次のように行います。</p>

<ol>
  <li>
    <p>github.com の自分のフォークのページ (例えば <code>https://github.com/<em>&lt;ユーザー名&gt;</em>/content</code>) へ行ってください。</p>
  </li>
  <li>
    <p>ファイル一覧の上にある緑色の "Code" ボタンを押してください。そうすると、以下のポップアップのようなものが現れます。</p>

    <p><img src="code-popup.png" alt="クローン URL と共に open with github desktop や download zip などの選択肢を表示しているポップアップウィンドウ"></p>
  </li>
  <li>
    <p>上で説明したように、 SSH 認証を設定した場合は "SSH" タブをクリックし、ボックス内のテキストフィールドから <code>git@github.com:<em>&lt;ユーザー名&gt;</em>/content.git</code> の URL をコピーしてください。 SSH 認証を設定していない場合は、代わりに "HTTPS" タブのテキストフィールドから <code>https://github.com/<em>&lt;ユーザー名&gt;</em>/content.git</code> のような URL をコピーしてください。</p>
  </li>
  <li>
    <p>そして自分のコンピューターでコマンドラインを開き、 cd コマンドで先ほど git リポジトリーのローカルのクローンを保存するために設定したディレクトリーに移動します。</p>

    <pre class="brush: bash">cd git</pre>
  </li>
  <li>
    <p>次のような形でコマンドを入力し、フォークをクローンしてください。</p>

    <pre class="brush: bash">git clone <em>the-url-you-copied</em></pre>

    <p>例えば、私がクローンするときのコマンドは次のようになります。</p>

    <pre class="brush: bash">git clone git@github.com:chrisdavidmills/content.git</pre>
  </li>
</ol>

<p>これで git ディレクトリーの中に content ディレクトリーができ、そこにリポジトリーの内容が入っているはずです。</p>

<h3 id="setting_up_a_remote_to_point_to_the_main_version_of_the_repo">リポジトリーのメインバージョンを指すようリモートを設定する</h3>

<p>次に進む前の最後の作業として、リモートを設定してメインバージョンのリポジトリーを指すようにしましょう。この例では <a href="https://github.com/mdn/content">https://github.com/mdn/content</a> とします。リモートとは基本的に、GitHub 上の特定のリモートリポジトリーの場所を指すものです。後述するように、ローカルのクローンを最新のメインリポジトリーに更新するために最もよく使われます。</p>

<p>リモートの設定は、次のように <code>git remote add</code> コマンドで行います。</p>

<pre class="brush: bash">git remote add <em>リモート名</em> <em>指す先のリポジトリー</em></pre>

<ul>
  <li><em>リモート名</em> は自分で決めた名前で、後にリモートを参照するために使用されます。同じ目的を持つ異なるリポジトリー間では、一貫したリモート名にこだわるのと良いでしょう。同じリモート名であれば、どこでも同じことができ、混乱することも少なくなります。例えば、自分のバージョンをフォークしたリポジトリーのメインバージョンは「upstream (上流) リポジトリー」と呼ばれることが多く、そのためよく "upstream" がリモートの上流の場所を表す名前として使われます。私は通常、上流のリモートを "mozilla" と呼んでいますが、これは Mozilla のメインのリポジトリーを指していることを示すためです。</li>
  <li><em>指す先のリポジトリー</em> は、指す先の SSH (またはHTTPS) の URL で、先ほどフォークのクローンを作ったときと同じ方法で取得します。</li>
</ul>

<p>したがって、リモートを追加するには以下のようにします。</p>

<ol>
  <li>
    <p>github.com のリポジトリーのメインバージョンのページへ行き (この例では <a href="https://github.com/mdn/content">https://github.com/mdn/content</a> とします)、必要に応じて "Code" ポップアップから SSH または HTTPS の URL を取得します。</p>
  </li>
  <li>
    <p>コマンドラインから、 <code>cd</code> で自分の content ディレクトリーに移動します。</p>

    <pre class="brush: bash">cd content</pre>
  </li>
  <li>
    <p>次のようなコマンドを、 <em>リモート名</em> と <em>指す先のリポジトリー</em> を適切に置き換えて実行してください。</p>

    <pre class="brush: bash">git remote add <em>リモート名</em> <em>指す先のリポジトリー</em></pre>

    <p>したがって、例えば私は SSH の URL を使用してリモートの "mozilla" を呼び出したので、次のようにしました。</p>

    <pre class="brush: bash">git remote add mozilla git@github.com:mdn/content.git</pre>
  </li>
</ol>

<p>これで、リモートの設定が完了しました。端末で <code>git remote -v</code> というコマンドを実行するとこれを確認できます。このコマンドは、自分のリモートの名前とその場所の一覧を出力します。以下のようなものが表示されるでしょう。</p>

<pre>mozilla    git@github.com:mdn/content.git (fetch)
mozilla    git@github.com:mdn/content.git (push)
origin    git@github.com:chrisdavidmills/content.git (fetch)
origin    git@github.com:chrisdavidmills/content.git (push)</pre>

<h2 id="preparing_to_make_a_change_to_the_repo">リポジトリーに変更を加えるための準備</h2>

<p>これで、ローカルのフォーククローンで作業できるようになりましたが、新しい変更を行う前に実行しておくべき一連のコマンドがあります。</p>

<h3 id="switch_to_the_main_branch">メインブランチへの切り替え</h3>

<p>それぞれのリポジトリーにはいくつかの異なるブランチがあり、これは基本的に同じリポジトリーの中にあるコードベースの異なるバージョンです。つまり、コードベースに変更を加えるたびに、別のブランチで変更を加え、まずそこでテストしてから、コードのメインコピーに変更を反映させるという考え方です。</p>

<p>コンテンツリポジトリーのメインブランチは "main" と呼ばれています (他のリポジトリーでは "master" などと呼ばれているかもしれません。その場合は、以下に示すすべてのコマンドでその名前を読み替える必要があります)。リポジトリーをクローンしたばかりのときは既定ででこのブランチにいることになりますが、すでに作業を終えている場合は別のブランチにいるかもしれません。

何か作業をする前に、次のコマンドを実行してメインブランチに切り替えるようにしましょう。

<pre class="brush: bash">git switch main</pre>

<div class="notecard note">
  <h4>注</h4>

  <p>他のチュートリアルで、リポジトリーのブランチを変更するのに <code>git checkout</code> を使っているのを見たことがあるかもしれません。このチュートリアルでは、より新しい <code>git switch</code> コマンドをお勧めします。これは純粋にブランチを変更するために設計されたもので、失敗する可能性が低いからです。これらのコマンドの関連性や違いに興味がある方は、 <a href="https://github.blog/2019-08-16-highlights-from-git-2-23/#experimental-alternatives-for-git-checkout">Highlights from Git 2.23 > Experimental alternatives for git checkout</a> が良くまとまっています。</p>
</div>

<h3 id="update_your_main_branch">自分のメインブランチの更新</h3>

<p>次は、メインブランチを更新して、メインリポジトリーのメインブランチと同じ内容になるようにします。 content リポジトリーは数多くの貢献者によって毎日何度も更新されているので、これをやらないとバージョンが古くなってしまい、更新を投稿する際に問題が発生します。ここで、リモートが役に立つのです。</p>

<p>リポジトリーを更新するには次のようにします。</p>

<ol>
  <li>
    <p>まず、以下のコマンドで、リモートの更新されたコンテンツを取得してください。</p>

    <pre class="brush: bash">git fetch <em>リモート名</em></pre>

    <p>例えば次のようになります。</p>

    <pre class="brush: bash">git fetch mozilla</pre>
  </li>
  <li>
    <p>次に、自分のメインブランチの内容を、リモートリポジトリーのメインブランチに置き換えます。いろいろな方法がありますが、私は <code>rebase</code> コマンドをよく使います。</p>

    <pre class="brush: bash">git rebase <em>リモート名</em>/<em>メインブランチ名</em></pre>

    <p>例えば次のようになります。<p>

    <pre class="brush: bash">git rebase mozilla/main</pre>
  </li>
  <li>
    <p>最後に、次のようにして自分のフォークのリモートバージョンに変更をプッシュしてください。</p>

    <pre class="brush: bash">git push</pre>
  </li>
</ol>

<p>更新が正しく行われたかどうかは、 github.com で自分のフォークのページを見ればわかります (例えば、私の場合は <a href="https://github.com/chrisdavidmills/content">https://github.com/chrisdavidmills/content</a> です。)。そこには "This branch is even with mdn:main." のような記述があるはずです。もし自分のメインブランチがたくさんのコミットで mdn:main より遅れている (behind) と表示された場合は、もう一度試してみるか、<a href="#troubleshooting">トラブルシューティング</a>を行う必要があります。</p>

<h3 id="create_a_new_branch_to_do_your_work_in">作業用のブランチを作成する</h3>

<p>フォークでメインブランチを最新の状態にした後は、必ず新しいブランチを作成して変更を加えなければなりません。メインブランチで作業を行い、そこから送信するようなことは<em>しないでください</em>。すぐに面倒なことになってしまいます。すべての作業を別々のブランチで行ったほうが、はるかにすっきりしていて、ミスも起こりにくいのです。</p>

<p>新しいブランチを作成する方法です。</p>

<ol>
  <li>
    <p>github.com で自分のフォークのページ (例えば、私の場合は <a href="https://github.com/chrisdavidmills/content">https://github.com/chrisdavidmills/content</a>) に行くと、ファイル一覧の左上に、おそらく "main" と書かれているブランチボタンが見つかります。</p>

    <p><img src="branch-button.png" alt="main と表示されたボタン"></p>
  </li>
  <li>
    <p>これをクリックすると、ブランチの一覧が表示され、 "Find or create a branch..." というテキストフィールドが表示されます。</p>

    <p><img src="branch-menu.png" alt="ブランチ名の一覧が表示されているメニューと、 find or create a branch と書かれたテキストボックス"></p>
  </li>
  <li>
    <p>テキストフィールドに既存のブランチ名の一部を入力すると、その文字列によってブランチの一覧が絞り込まれ、既存のブランチを検索しやすくなります。しかし、ここでは新しいブランチを作成したいと思います。まだ存在していないブランチ名を入力すると (test-branch などを試してみてください)、表示が変わり、 "Create branch: test-branch from 'main'" というラベルのついたボタンが表示されます。</p>

    <p><img src="new-branch.png" alt="テキストボックスに入力された新しいブランチ名 test-branch と、その下にある create branch ボタンが表示されたメニュー"></p>
  </li>
  <li>
    <p>ブランチ名が決定したら、このボタンをクリックすると表示が更新され、ブランチボタンにそのブランチ名が表示されます。</p>

    <p><img src="branch-button-new-branch.png" alt="Button labeled test-branch"></p>
  </li>
</ol>

<p>これで完了です。これで、作業を行うための新しいブランチが作成されました。このブランチは、作成した時点でのメインブランチの状態と同じです。ここから作業を始めるといいでしょう。</p>

<p>豆知識:</p>

<ul>
  <li>新しいブランチを作成する前には、前のセクションで説明したように、常にメインブランチを mozilla のメインブランチと同期するように更新するようにしてください。</li>
  <li>新しいブランチは常に main から作成するようにし、他のブランチから作成しないようにしてください。そのために、ブランチボタンに "main" と表示されており、他のブランチではないことを確認してから作業を始めましょう。そうしないと、新しいブランチが非常に古くなってしまい、コンテンツの問題が発生する可能性があります。</li>
</ul>

<h3 id="get_your_branch_locally_and_switch_to_it">ブランチをローカルに取得して切り替える</h3>

<p>前の節では、フォークに新しいブランチを作成する方法を説明しましたが、現在はリモートバージョンのフォークにしか存在していません。このブランチで作業をするには、それを自分のローカルバージョンに取り込む必要があります。</p>

<p>これを行うには、端末に戻って、作業しているリポジトリーのディレクトリー (この例では <code>content</code>) の中にいることを確認してください。</p>

<ol>
  <li>リモートで変更した内容をローカルのクローンに取り込むには、 <code>git pull</code> コマンドを実行してください。</li>
  <li><code>* [new branch]          test-branch -> origin/test-branch</code> のような数行のメッセージが表示されます。</li>
  <li>自分のブランチに切り替える (つまり、 "main" から切り替えてそのブランチで作業する) には、 <code>git switch test-branch</code> コマンドを実行してください。</li>
</ol>

<p>成功すると、 git は次のように表示します。</p>

<pre>Branch 'test-branch' set up to track remote branch 'test-branch' from 'origin'.
Switched to a new branch 'test-branch'</pre>

<p>なお、どのブランチにいるのかなど、自分のリポジトリーの状態は <code>git status</code> コマンドを実行すればいつでも確認できます。このコマンドを実行すると、git は次のように表示します。</p>

<pre>On branch test-branch
Your branch is up to date with 'origin/test-branch'.

nothing to commit, working tree clean</pre>

<p>だいたい良いようですね。現在は "test-branch" ブランチにいて、まだ変更は何も行っていません。</p>

<h2 id="adding_committing_and_pushing_changes">変更の追加、コミット、プッシュ</h2>

<p>この時点で、作業しているリポジトリーに変更を加える準備が整いました。 MDN のバグを修正したり、何かをするためです。この部分はこのチュートリアルの目的ではないので、ほとんど省略します。 MDN で実際の問題を修正したい場合は、<a href="https://github.com/mdn/content/issues/">コンテンツの問題一覧</a>から修正するバグを選択するか、より詳しいガイダンスが必要であれば <a href="/ja/docs/MDN/Contribute">MDN への貢献</a>をお読みください。</p>

<p>例としての性質上、このチュートリアルに沿って進めるのであれば、簡単なことをやってみましょう。</p>

<ol>
  <li>
    <p><code>content/README.md</code> ファイルに入り、 README の一番上の見出しに 1 文字を追加してください。</p>
  </li>
  <li>
    <p>次に、コマンドラインに戻って <code>git status</code> コマンドを再度入力します。今度は、git が次のように教えてくれるはずです。</p>

    <pre>Your branch is up to date with 'origin/test-branch'.

    Changes not staged for commit:
      (use "git add &lt;file&gt;..." to update what will be committed)
      (use "git restore &lt;file&gt;..." to discard changes in working directory)
        modified:   README.md

    no changes added to commit (use "git add" and/or "git commit -a")</pre>
  </li>
  <li>
    <p>つまり、この時点で変更したファイルを教えてくれるのです。次の段階では、そのファイルを「追加」します。つまり、リモートフォークにプッシュするために、コミットしたいファイルの一覧にそのファイルを追加します。このファイルをコミット一覧に追加するには、次のように入力します。</p>

    <pre class="brush: bash">git add README.md</pre>

    <div class="notecard note">
      <h3>注</h3>

      <p><code>README.md</code> は、変更したファイルの名前だけではなく、そのファイルへのパスを書きます。サブディレクトリーの中にあった場合は、そのファイルのフルパスを書かなければなりません。
    </div>
  </li>
  <li>
    <p>もう一度 <code>git status</code> を実行すると、このように表示されます。</p>

    <pre>On branch test-branch
    Your branch is up to date with 'origin/test-branch'.

    Changes to be committed:
      (use "git restore --staged &lt;file&gt;..." to unstage)
        modified:   README.md</pre>
  </li>
  <li>
    <p>Git は <code>README.md</code> がコミット一覧に入ったことを教えてくれました。コミット一覧にあるすべてのファイルをコミット (後にメインブランチに送信しようとする、ひとつの変更セット) に含めるには、次のように入力します (<code>-m</code> オプションは "message" の略です)。

    <pre class="brush: bash">git commit -m 'my first commit'</pre>

    <p>Git は次のように表示します。</p>

    <pre>[test-branch 44b207ef6] my first commit
     1 file changed, 1 insertion(+), 1 deletion(-)</pre>

    <p>コミットを登録したことを示すためです。</p>
  </li>
  <li>
    <p>もう一度 <code>git status</code> を実行すると、次のような情報が得られます。</p>

    <pre>On branch test-branch
    Your branch is ahead of 'origin/test-branch' by 1 commit.
      (use "git push" to publish your local commits)

    nothing to commit, working tree clean</pre>
  </li>
</ol>

<p>情報の読み出しは基本的にリセットされています。 — 前回の変更をコミットとしてシステムに送信したので、コミットする変更がないことを伝えています。先ほどとの大きな違いは、 "Your branch is ahead of 'origin/test-branch' by 1 commit." という行です。 — ローカル版の "test-branch" ブランチは、リモート版 "test-branch" よりも 1 コミット分進んでいます。言い換えれば、リモートブランチにはない変更をローカルで行ったということです。</p>

<p>ローカルで行った変更をリモートブランチに送りましょう。そのためには <code>git push</code> というコマンドを実行します。 — やってみましょう。エラーが出なければ、次のような内容が表示されます。</p>

<pre>Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 292 bytes | 292.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:chrisdavidmills/content.git
    77215e31e..44b207ef6  test-branch -> test-branch</pre>

<h2 id="creating_a_pull_request">プルリクエストの作成</h2>

<p>この時点で、 github.com のリモートフォークのページに戻ってみましょう。すると、 "This branch is 1 commit ahead of mdn:main." というメッセージが表示されるはずです。これは、私たちのフォークのコンテンツには、 mozilla の "main" ブランチにはない内容の変更 (コミット) があることを意味しています。</p>

<ol>
  <li>
    <p>自分の変更をリポジトリーのメインコピーに送るには、プルリクエストを作成する必要があります。この作業は、ブランチに変更がプッシュされたときにファイル一覧の一番上に表示される "Compare & pull request" ボタンを使って簡単に行うことができます。</p>

    <p><img src="compare-and-pull-request.png" alt="test ブランチに最近のプッシュがあるというテキスト、そして compare and pull request と書かれたボタンが表示されているバナー"></p>

    <p>このボタンを押すと、次のような新しい画面が表示されます。</p>

    <p><img src="open-pull-request.png" alt="open pull request フォーム、その中にタイトルと説明のテキストフィールドがある"></p>

    <div class="notecard warning">
      <h3>警告</h3>

      <p>ここから先の手順は、実際にリポジトリーに変更を加える場合にのみ行ってください。実際にテスト PR をリポジトリーに提出しないでください。</p>
    </div>
  </li>
  <li>
    <p>ここでは、プルリクエストに役立つタイトルと説明を入力し、変更した内容、それがなぜ良いことなのかを正確に書いてください。必要に応じて、修正された関連する問題を書いてください。具体的には、 <code>Fixes <em>issue-url</em></code> という行を入れます。 GitHub は、自動的にこれを <code>Fixes #1234</code> のような課題番号へのリンクとして表示し、さらにプルリクエストがマージされると関連する課題を自動的にクローズします。 (訳注: <code>Fixes <em>issue-url</em></code> の部分は英語で入力してください。日本語で書くと自動的にクローズする機能が動作しないことがあります。)</p>
  </li>
  <li>
    <p>プルリクエストを送信する準備ができたら、 "Create pull request" ボタンをクリックしてください。これにより、自分のプルリクエスト (PR) がリポジトリーの<a href="https://github.com/mdn/content/pulls">プルリクエスト一覧</a>に表示され、レビューチームによるレビューを経て、メインのコードベースにマージされることになります。</p>

    <p>レビューチームが変更を加えてほしい場合は、プルリクエストのスレッドのコメントで教えてくれます (その旨の通知メールが届くはずです)。</p>
  </li>
  <li>
    <p>すでに提出したプルリクエストにさらに変更を加えたい場合は、同じローカルブランチ上でさらにコミットを行い、先ほど説明したようにプッシュすることで変更を加えることができます。全く新しいプルリクエストを作成する必要はありません。ただ、<strong>以前と同じブランチにコミットしていることを確認してください</strong>。</p>
  </li>
</ol>

<h2 id="troubleshooting">トラブルシューティング</h2>

<p>上記のチュートリアルは、 GitHub のリポジトリーに貢献するために必要な git と GitHub の基礎知識を基本レベルで提供することを目的としています。お役に立ちましたでしょうか。また、ウェブ業界の標準的なバージョン管理システムであるにもかかわらず、 Git は学ぶのも使うのも非常に難しいツールであるという神話的・伝説的な評判があることについても触れておきましょう。</p>

<p>私たちは、これが完全に公平だとは思いません。 Git には多くのコマンドがあり、その使い方は時に非常に不可解で、マスターするには長い時間がかかります。また、コマンドのいくつかを忘れたり、間違った順序で実行したりすると、なかなか抜け出せない面白い混乱に陥る可能性があるのも事実です。しかし、上記のような良い習慣を身につけていれば、大きく間違えることはないでしょう。また、 Git は10年前に比べてはるかに使いやすくなっていることも特筆すべき点です。</p>

<p>この節は今後拡充してゆき、一般的な問題を解決するのに役立つコマンドやシーケンスを紹介します。</p>

<h3 id="reverting_a_change_you_made_to_a_file_that_you_havent_yet_added_to_the_commit_list">コミット一覧に追加されていないファイルに加えた変更を元に戻す</h3>

<p>ファイルを変更したものの、まだそれをコミット一覧に追加するための <code>git add <em>ファイルパス</em></code> コマンドを実行していない場合は、次のように実行すれば、そのファイルをブランチを最初にチェックアウトしたときの状態に戻すことができます。</p>

<pre class="brush: bash">git restore <em>ファイルパス</em></pre>

<h3 id="removing_a_file_from_the_commit_list">コミット一覧からのファイルの削除</h3>

<p><code>git add <em>ファイルパス</em></code> コマンドを実行してファイルをコミット一覧に追加した後で、そのファイルをコミット一覧から削除したい場合は、次のようなコマンドを使います。</p>

<pre class="brush: bash">git restore --staged <em>ファイルパス</em></pre>

<h3 id="reversing_a_commit">コミットの取り消し</h3>

<p><code>git commit -m 'my commit message'</code> を使ってコミット一覧をコミットした後、まだプッシュしていないが、何か削除したいものを入れてしまったことに気づいた場合、次のようにしてローカルのコミットを取り消すことができます。</p>

<pre class="brush: bash">git reset HEAD~1</pre>

<p>これで、そのコミットの変更がまだコミット一覧に追加されていない状態に戻ります (問題を解決した後で、再度 git add する必要があります)。これは、このセッションで何かをコミットし始める前の状態に戻ることに注意しましょう。これでは、たとえば 3 つのコミットのうち真ん中のコミットだけを戻したいといった複雑なことをするときには役に立ちません。このレッスンでは、このままにしておきましょう。</p>

<h3 id="reversing_a_commit_that_has_been_pushed_to_the_remote_fork">リモートフォークにプッシュされたコミットを元に戻す</h3>

<p>ここまで来ると、実際には戻ることも巻き戻すこともできません。代わりに、削除したいコミットの効果を逆にするために、別のコミットをプッシュする必要があります。上記で紹介したツールを使って手動で行うこともできますが、これを簡単に行うことができる組み込みのコマンド、 <code>git revert</code> があります。これを使うと、指定した時点に変更を戻すコミットを自動的に作成することができます。</p>

<ol>
  <li>
    <p>最もシンプルな方法は、以下のコマンドを実行して、リモートブランチをコミット開始前の状態に戻すコミットを作成することです。</p>

    <pre class="brush: bash">git revert HEAD</pre>
  </li>
  <li>
    <p>すると、コミットメッセージファイルが既定のテキストエディターで開かれるので、それを見て納得できるかどうか確認しましょう。これを閉じると、 git はコミットの作成を完了します。</p>
  </li>
  <li>
    <p>あとはプッシュする必要があるだけです。</p>

    <pre class="brush: bash">git push</pre>
  </li>
</ol>

<p>github.com でリモートフォークのページを再度見ると、元に戻したかったコミットと、それを元に戻したコミットが表示されています。</p>

<h3 id="want_to_see_more">もっと見たいですか？</h3>

<p>他にもこのトラブルシューティングガイドに情報を盛り込むべきだと思われる場合は、<a href="https://github.com/mdn/content/issues/new">課題を作成</a>して提案してください。</p>

<h2 id="see_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Learn/Tools_and_testing/GitHub">MDN 学習 > Git と GitHub</a></li>
  <li><a href="https://dangitgit.com/en">Dangit, Git</a> — その他の有用なトラブルシューティング技術</li>
  <li><a href="https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612">45 Github Issues Dos and Don'ts</a></li>
  <li><a href="https://cli.github.com/">GitHub CLI tool</a> — リポジトリーの管理に git の CLI コマンドを使うことに慣れてきたら、 GitHub 独自の GitHub CLI ツールのインストールを検討してみてはいかがでしょうか。</li>
</ul>
