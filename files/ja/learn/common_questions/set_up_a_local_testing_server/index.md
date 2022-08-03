---
title: ローカルのテストサーバーはどのようにセットアップしますか？
slug: Learn/Common_questions/set_up_a_local_testing_server
tags:
  - Express
  - Flask
  - Node
  - PHP
  - Python
  - django
  - lamp
  - サーバ
  - サーバーサイド
  - 初心者
  - 学習
translation_of: Learn/Common_questions/set_up_a_local_testing_server
---
<div class="summary">
<p>この記事では、マシン上に簡単なローカルテストサーバを設定する方法と、その使い方の基本について説明します。</p>
</div>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>最初に<a href="/ja/docs/Learn/Common_questions/How_does_the_Internet_work">インターネットの仕組み</a>や <a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">Web サーバについて</a>知っておく必要があります。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>ローカルのテストサーバを設定する方法を学習します。</td>
  </tr>
 </tbody>
</table>

<h2 id="ローカルファイルとリモートファイル">ローカルファイルとリモートファイル</h2>

<p>ほとんどの学習領域では、ブラウザでサンプルを直接開くだけで済みます。HTML ファイルをダブルクリックするか、ブラウザウィンドウにドラッグ ＆ ドロップするか、ファイル &gt; 開く...を選択して HTML ファイルを選択するなどです。これを達成する方法はたくさんあります。</p>

<p>Web アドレスのパスが <code>file://</code> で始まり、その後にローカルハードドライブのファイルへのパスが続く場合、ローカルファイルが使用されています。対照的に、GitHub でホストされている例 (または他のリモートサーバの例) を見ると、Web アドレスは <code>http://</code> または <code>https://</code> で始まっており、ファイルが HTTP 経由で受信されたことを示します。</p>

<h2 id="ローカルファイルのテストに関する問題">ローカルファイルのテストに関する問題</h2>

<p>一部のサンプルはローカルファイルとして開くと実行されません。これにはさまざまな理由があります。最も可能性が高いのは、</p>

<ul>
 <li><strong>それらは非同期リクエストを特徴とします。</strong>一部のブラウザ (Chrome を含む) は、ローカルファイルからサンプルを実行するだけでは非同期リクエストは実行しません (<a href="/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">サーバからのデータの取得</a>を参照)。これはセキュリティ上の制限があるためです (Web セキュリティの詳細については、<a href="/ja/docs/Learn/Server-side/First_steps/Website_security">Web サイトのセキュリティ</a>を参照してください)</li>
 <li><strong>それらはサーバサイドの言語を備えています。</strong>サーバサイドの言語 (PHP や Python など) では、コードを解釈して結果を提供する特別なサーバが必要です</li>
</ul>

<h2 id="シンプルなローカル_HTTP_サーバの実行">シンプルなローカル HTTP サーバの実行</h2>

<p>非同期リクエストの問題を回避するには、ローカル Web サーバを介して実行することによって、そのようなサンプルをテストする必要があります。私たちの目的のためにこれを行う最も簡単な方法の1つは、Python の <code>SimpleHTTPServer</code> モジュールを使うことです。</p>

<p>これをするためには：</p>

<ol>
 <li>
  <p>Python をインストールします。Linux または Mac OS X を使用している場合は、既にシステム上で使用可能になっているはずです。Windows ユーザの方は、Python ホームページからインストーラを入手し、インストーラの指示に従ってインストールすることができます：</p>

  <ul>
   <li><a href="https://www.python.org/">python.org</a> に進みます</li>
   <li>ダウンロードセクションの下で、Python "3.xxx" のリンクをクリックします</li>
   <li>ページ下部の Windows x86 実行可能インストーラを選択してダウンロードします</li>
   <li>ダウンロードしたら、それを実行します</li>
   <li>インストーラの最初のページで、"Add Python 3.xxx to PATH" チェックボックスをオンにします</li>
   <li>[インストール]をクリックし、インストールが完了したら[閉じる]をクリックします</li>
  </ul>
 </li>
 <li>
  <p>コマンドプロンプト (Windows)/ターミナル (OS X/Linux) を開きます。Python がインストールされていることを確認するには、次のコマンドを入力します</p>

  <pre class="brush: bash">python -V</pre>
 </li>
 <li>
  <p>これによりバージョン番号が返されます。OK の場合は、<code>cd</code> コマンドを使用してサンプルが入っているディレクトリに移動します</p>

  <pre class="brush: bash"># include the directory name to enter it, for example
cd Desktop
# use two dots to jump up one directory level if you need to
cd ..</pre>
 </li>
 <li>
  <p>ディレクトリの中でサーバを起動するコマンドを入力します</p>

  <pre class="brush: bash"># If Python version returned above is 3.X
python -m http.server
# If Python version returned above is 2.X
python -m <code>SimpleHTTPServer</code></pre>
 </li>
 <li>
  <p>デフォルトでは、これはローカル Web サーバ上のディレクトリの内容を 8000 番ポート上で実行します。このサーバにアクセスするには、Web ブラウザで <code>localhost:8000</code> のURL に移動します。ここにディレクトリの内容が表示されるので、実行する HTML ファイルをクリックします</p>
 </li>
</ol>

<div class="note">
<p><strong>メモ</strong>: すでに 8000 番ポートで何かが稼働している場合は、server コマンドを実行して別のポート番号を選択することができます。例えば <code>python3 -m http.server 7800</code> (Python 3.x) または <code>python -m SimpleHTTPServer 7800</code> (Python 2.x) です。これで <code>localhost:7800</code> でコンテンツにアクセスできます。</p>
</div>

<h2 id="サーバサイドの言語をローカルで実行する">サーバサイドの言語をローカルで実行する</h2>

<p>Python の SimpleHTTPServer (python 2.0) http.server (python 3.0) モジュールは便利ですが、Python、PHP、JavaScript などの言語で書かれたコードの実行方法はわかりません。これを処理するには、必要なことがあります。必要なのは、実行しようとしているサーバサイドの言語に依存します。いくつかの例があります：</p>

<ul>
 <li>Python のサーバサイドコードを実行するには、Python Web フレームワークを使用する必要があります。Django フレームワークの使い方については、<a href="/ja/docs/Learn/Server-side/Django">Django Web Framework (Python)</a> を参照してください。<a href="http://flask.pocoo.org/">Flask</a> はまた、Django の代わりとしても良い (わずかに重量の少ない) 代替品です。これを実行するには <a href="/ja/docs/Learn/Server-side/Django/development_environment#Installing_Python_3">Python/PIP をインストール</a>し、 <code>pip3 install flask</code> を使用して Flask をインストールする必要があります。この段階で、<code>python3 python-example.py</code> を使ってPython Flaskのサンプルを実行し、ブラウザの <code>localhost:5000</code> に遷移することができます</li>
 <li>Node.js (JavaScript) サーバサイドコードを実行するには、生のノードまたはその上に構築されたフレームワークを使用する必要があります。Express は良い選択です - <a href="/ja/docs/Learn/Server-side/Express_Nodejs">Express Web Framework (Node.js/JavaScript)</a> を参照してください</li>
 <li>PHP サーバサイドコードを実行するには、<a href="http://php.net/manual/ja/features.commandline.webserver.php">PHP の組み込み開発サーバ</a>を起動します</li>
</ul>

<pre class="shellcode">$ cd path/to/your/php/code
$ php -S localhost:8000</pre>
