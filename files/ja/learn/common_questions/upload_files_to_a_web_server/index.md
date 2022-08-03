---
title: どのようにファイルを Web サーバにアップロードしますか？
slug: Learn/Common_questions/Upload_files_to_a_web_server
tags:
  - FTP
  - GitHub
  - WebMechanics
  - rsync
  - sftp
  - アップロード
  - ホスティング
  - 初心者
translation_of: Learn/Common_questions/Upload_files_to_a_web_server
---
<div class="summary">
<p>この記事ではファイル転送ツールを使用してオンラインでサイトを公開する方法を説明します。</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">学習の前提</th>
   <td><a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">Web サーバが何であるか</a>、<a href="/ja/docs/Learn/Common_questions/What_is_a_domain_name">ドメイン名の仕組み</a>を知っていなければなりません。また、<a href="/ja/docs/Learn/Common_questions/set_up_a_local_testing_server">基本的な環境の設定方法</a>や<a href="/ja/docs/Learn/Getting_started_with_the_web">簡単な Web ページの作成方法</a>も理解しておく必要があります。</td>
  </tr>
  <tr>
   <th scope="row">学習の目的</th>
   <td>FTP を使用してファイルをサーバにプッシュする方法を学びます。</td>
  </tr>
 </tbody>
</table>

<h2 id="概要">概要</h2>

<p>シンプルな Web ページを作成している場合 (例として <a href="/ja/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML の基本</a>を参照)、Web サーバ上にオンラインで転送したいと思うかもしれません。この記事では SFTP クライアント、RSync、GitHub などの選択肢をとおして、その方法を説明します。</p>

<h2 id="SFTP">SFTP</h2>

<p> SFTP クライアントには、いくつもの選択肢があります。ここのデモは <a href="https://filezilla-project.org/">FileZilla</a> を使うことにします。 Windows、macOS、Linux で使え、無料だからです。FileZilla をインストールするには、<a href="https://filezilla-project.org/download.php?type=client">FileZilla ダウンロードページ</a>に移動し、大きなダウンロードボタンをクリックしてから、通常の方法でインストーラファイルからインストールします。</p>

<div class="note">
<p><strong>メモ</strong>: もちろん他にもたくさんのオプションがあります。詳細については<a href="/ja/docs/Learn/Common_questions/How_much_does_it_cost#Publishing_tools.3A_FTP_client">パブリッシングツール</a>を参照してください。</p>
</div>

<p>FileZilla アプリケーションを開きます。次のようなものが表示されます。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15767/filezilla-ui.png" style="display: block; height: 451px; margin: 0px auto; width: 690px;"></p>

<h3 id="ログイン">ログイン</h3>

<p>この例では、ホスティングプロバイダ (私たちの HTTP Web サーバをホストするサービス) は架空の会社 "Example Hosting Provider" であり、URL は次のようになります：<code>mypersonalwebsite.examplehostingprovider.net</code></p>

<p>私たちはアカウントを開設し、その情報を受け取ったばかりです：</p>

<blockquote>
<p>Example Hosting Provider でアカウントを開設しましたことをお祝いします。</p>

<p>アカウント: <code>demozilla</code></p>

<p>あなたのWebサイトは <code>demozilla.examplehostingprovider.net</code> で表示されます。</p>

<p>このアカウントに公開するには、SFTP を使用して次の資格情報で接続してください：</p>

<ul>
 <li>SFTP サーバ: <code>sftp://demozilla.examplehostingprovider.net</code></li>
 <li>ユーザ名: <code>demozilla</code></li>
 <li>パスワード: <code>quickbrownfox</code></li>
 <li>ポート: <code>5548</code></li>
 <li>Web 上に公開するには、ファイルを <code>Public/htdocs</code> ディレクトリに置きます</li>
</ul>
</blockquote>

<p>最初に <code>http://demozilla.examplehostingprovider.net/</code> を見てみましょう。見ての通り、まだそこには何もありません：</p>

<p><img alt="Our demozilla personal website, seen in a browser: it's empty" src="https://mdn.mozillademos.org/files/9615/demozilla-empty.png" style="border-style: solid; border-width: 1px; display: block; height: 233px; margin: 0 auto; width: 409px;"></p>

<div class="note">
<p><strong>メモ</strong>: ホスティングプロバイダによっては、最初にあなたの Web アドレスに行ったときに、「このWebサイトは[ホスティングサービス]によってホストされています。」というようなページが表示されます。</p>
</div>

<p>SFTP クライアントを遠隔のサーバに接続するには、次の手順を実行します。</p>

<ol>
 <li>メインメニューから <em>ファイル &gt; サイトマネージャ と選択します</em></li>
 <li>[サイトマネージャ] ウィンドウで、[新規サイト] ボタンをクリックし、提供されたスペースにサイト名を <strong>demozilla</strong> として入力します</li>
 <li>ホスティングプロバイダから提供された SFTP サーバのホストを<em> Host:</em> フィールドに入力します</li>
 <li>[ログオンの種類] ドロップダウンで [標準] を選択し、提供されたユーザ名とパスワードを該当するフィールドに入力します</li>
 <li>正しいポートおよびその他の情報を入力します</li>
</ol>

<p>ウィンドウは次のようになります：</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15769/site-manager.png" style="display: block; height: 561px; margin: 0px auto; width: 684px;"></p>

<p>次に Connect を押して SFTP サーバに接続します。</p>

<p>注意: ホスティングプロバイダがホスティングスペースへの SFTP (セキュア FTP) 接続を提供していることを確認してください。FTP は本質的に安全ではないため、使用しないでください。</p>

<h3 id="こちらとあちら：ローカルビューとリモートビュー">こちらとあちら：ローカルビューとリモートビュー</h3>

<p>一度接続すると、画面は次のようになります (私たちはあなた自身のアイデアを伝えるために例を挙げています)。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15768/connected.png" style="border-style: solid; border-width: 1px; display: block; height: 199px; margin: 0px auto; width: 700px;"></p>

<p>あなたが見ているものを調べてみましょう：</p>

<ul>
 <li>中央の左ペインには、ローカルファイルが表示されます。Web サイトを保存しているディレクトリ (例: <code>mdn</code>) に移動します</li>
 <li>中央の右ペインには、リモートファイルが表示されます。遠くの FTP ルート (このケースでは、<code>users/demozilla</code>) にログインしています</li>
 <li>今のところ、下部と上部のペインを無視することができます。それぞれ、あなたのコンピュータと SFTP サーバ間の接続状態を示すメッセージのログ、SFTP クライアントとサーバ間のすべてのインタラクションのライブログです</li>
</ul>

<h3 id="サーバへのアップロード">サーバへのアップロード</h3>

<p>私たちのホスト命令の例では、「Web 上に公開するには、ファイルを <code>Public/htdocs</code> ディレクトリに入れてください」となっています。右ペインの指定されたディレクトリに移動する必要があります。このディレクトリは実質的にあなたの Web サイトのルートで、<code>index.html</code> ファイルやその他のアセットがどこに行くかを示します。</p>

<p>ファイルを置く正しいリモートディレクトリが見つかったら、サーバにファイルをアップロードしますが、それにはファイルを左ペインから右ペインにドラッグ &amp; ドロップする必要があります。</p>

<h3 id="本当にオンラインですか？">本当にオンラインですか？</h3>

<p>これまでのところとても良いですが、ファイルは本当にオンラインですか？ ブラウザでWebサイト (例えば <code>http://demozilla.examplehostingprovider.net/</code>) に戻って再確認することができます。</p>

<p><img alt="Here we go: our website is live!" src="https://mdn.mozillademos.org/files/9627/here-we-go.png" style="border-style: solid; border-width: 1px; display: block; height: 442px; margin: 0 auto; width: 400px;"></p>

<p>そしてやりました！ Web サイトは動いています！</p>

<h2 id="Rsync">Rsync</h2>

<p>{{Glossary("Rsync")}} はローカルからリモートへのファイル同期ツールで、ほとんどの Unix ベースのシステム (macOS や Linux など) で一般的に利用可能ですが、Windows 版も存在します。</p>

<p>デフォルトではコマンドラインで使用されるため、SFTP よりも高度なツールと見なされています。基本的なコマンドはこんな感じです：</p>

<pre class="brush: bash line-numbers"><code>rsync [-options] SOURCE user@x.x.x.x:DESTINATION</code></pre>

<ul>
 <li><code>-options</code> はダッシュの後に1つ以上の文字が続きます。たとえば、詳細エラーメッセージの場合は <code>-v</code>、バックアップを作成する場合は <code>-b</code> です。完全なリストは <a href="https://linux.die.net/man/1/rsync">rsync の man ページ</a>にあります ("Options summary" を検索してください)。</li>
 <li><code>SOURCE</code> は、ファイルのコピー元となるローカルファイルまたはディレクトリへのパスです。</li>
 <li><code>user@</code> は、ファイルのコピー先となるリモートサーバ上のユーザの資格情報です。</li>
 <li><code>x.x.x.x</code> はリモートサーバのIPアドレスです。</li>
 <li><code>DESTINATION</code> は、リモートサーバ上のディレクトリまたはファイルをコピーする場所へのパスです。</li>
</ul>

<p>あなたはホスティングプロバイダからそのような詳細を得る必要があるでしょう。</p>

<p>詳細およびその他の例については、 <a href="https://www.atlantic.net/hipaa-compliant-cloud-hosting-services/how-to-use-rsync-copy-sync-files-servers/">How to Use Rsync to Copy/Sync Files Between Servers</a> を参照してください。</p>

<p>もちろん、FTP の時と同じように安全な接続のもとで使用することをお勧めします。Rsync の場合は <code>-e</code> オプションを使用して、SSH を介した接続を確立するための SSH 詳細を指定します。例えば：</p>

<pre class="brush: bash line-numbers"><code>rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION</code></pre>

<p>必要なものの詳細については、<a href="https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh">How To Copy Files With Rsync Over SSH</a> を参照してください。</p>

<h3 id="Rsync_GUI_ツール">Rsync GUI ツール</h3>

<p>他のコマンドラインツールと同様に、コマンドラインの使用に慣れていない人向けに Rsync 用の GUI ツールもあります。<a href="https://acrosync.com/mac.html">Acrosync</a> はそのようなツールの1つで、Windows と macOS で利用可能です。</p>

<p>繰り返しになりますが、ホスティングプロバイダから接続認証情報を取得する必要がありますが、この方法でそれらを入力するための GUI が得られます。</p>



<h2 id="GitHub">GitHub</h2>

<p>GitHub では、<a href="https://pages.github.com/">GitHub pages</a> (gh-pages) を介して Web サイトを公開することができます。</p>

<p>これの使い方の基本については、<a href="/ja/docs/Learn/Getting_started_with_the_web">Web 入門</a>の <a href="/ja/docs/Learn/Getting_started_with_the_web/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B">Web サイトの公開</a>の記事で説明しているので、ここでは繰り返しません。</p>

<p>ただし、GitHub で Web サイトをホストすることはできますが、カスタムドメインを使用することもできます。詳しいガイドは <a href="https://help.github.com/articles/using-a-custom-domain-with-github-pages/">Using a custom domain with GitHub Pages</a> をご覧ください。</p>



<h2 id="ファイルをアップロードするその他の方法">ファイルをアップロードするその他の方法</h2>

<p>FTP プロトコルは、Web サイトを公開するためのよく知られた方法の1つですが、唯一の方法ではありません。 他にもいくつかのやり方があります。</p>

<ul>
 <li><strong>Web インターフェイス</strong>。リモートファイルアップロードサービスのフロントエンドとして機能する HTML インターフェイス。ホスティングサービスから提供されます。</li>
 <li><strong>{{Glossary("WebDAV")}}</strong>。より高度なファイル管理を可能にする {{Glossary("HTTP")}} プロトコルの拡張。</li>
</ul>
