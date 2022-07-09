---
title: フォームデータの送信
slug: Learn/Forms/Sending_and_retrieving_form_data
tags:
  - 初心者
  - CodingScripting
  - ファイル
  - フォーム
  - ガイド
  - HTML
  - HTTP
  - ヘッダー
  - セキュリティ
  - Web
translation_of: Learn/Forms/Sending_and_retrieving_form_data
---
<div>{{LearnSidebar}}{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}</div>

<p class="summary">フォームがクライアント側での検証が終わったら、次はフォームの送信です。前の記事では検証を扱ったので、送信する準備はできています。この記事では、ユーザーがフォームを送信したときに何が起こるか、つまりデータがどこへ行くのか、そこに来たときにどう扱うのかを見ます。また、フォームデータの送信に関連するセキュリティの考慮事項のいくつかも見てみます。</p>

<table>
 <tbody>
  <tr>
   <th scope="row">前提知識:</th>
   <td>基本的なコンピューターリテラシー、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML">HTML の理解</a>、<a href="/ja/docs/Web/HTTP/Basics_of_HTTP">HTTP</a> および<a href="/ja/docs/Learn/Server-side/First_steps">サーバーサイドプログラミング</a>の基本的な知識。</td>
  </tr>
  <tr>
   <th scope="row">目標:</th>
   <td>フォームデータが送信されたら何が起こるかを、データがサーバー上でどのように処理されるかの基本的な考えも含めて理解すること。</td>
  </tr>
 </tbody>
</table>

<p>まずは、フォームが送信されたときにデータに何が起こるかを考えてみましょう。</p>

<h2 id="Clientserver_architecture">クライアント/サーバー構成</h2>

<p>ウェブはごく基本的なクライアント/サーバー構成に基づいており、簡単に言うと次のようになります。クライアント (通常はウェブブラウザー) は、サーバー (ほとんどの場合 <a href="https://httpd.apache.org/" rel="external">Apache</a>、<a href="https://www.nginx.com/" rel="external">Nginx</a>、<a href="https://www.iis.net/" rel="external">IIS</a>、<a href="https://tomcat.apache.org/" rel="external">Tomcat</a> などのウェブサーバー) に <a href="/ja/docs/Web/HTTP">HTTP プロトコル</a>を使用してリクエストを送ります。サーバーは同じプロトコルを使用して、リクエストに応答します。</p>

<p><img alt="基本的なクライアント/サーバー構成" src="client-server.png"></p>

<p>クライアント側において、HTML フォームはサーバーへデータを送信する HTTP リクエストを組み立てるのための、便利でユーザーに使いやすい手段でしかありません。フォームによって、ユーザーが HTTP リクエストで渡す情報を提供することができるようになります。</p>

<div class="note">
<p><strong>メモ</strong>: どのようにクライアント/サーバー構成が動作するかについてもっと知りたい場合は、<a href="/ja/docs/Learn/Server-side/First_steps">サーバーサイドウェブサイトプログラミング入門</a>モジュールをお読みください。</p>
</div>

<h2 id="On_the_client_side_defining_how_to_send_the_data">クライアント側: データ送信方法の定義</h2>

<p>{{HTMLElement("form")}} 要素で、データを送信する方法を定義します。その属性すべてが、ユーザーが送信ボタンを押すと送信されるリクエストを調整できるように設計されています。もっとも重要な属性は {{htmlattrxref("action","form")}} と {{htmlattrxref("method","form")}} の 2 つです。</p>

<h3 id="The_htmlattrxrefactionform_attribute">action 属性</h3>

<p><code><a href="/ja/docs/Web/HTML/Attributes/action">action</a></code> 属性は、どこにデータを送信するかを定義します。値は妥当な相対/絶対 <a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL</a> でなければなりません。この属性が与えられなかった場合は、フォームが含まれているページの URL にデータが送信されます。</p>

<p>この例では、データを絶対 URL の <code>http://</code><code>example.com</code> に送信します。</p>

<pre class="brush: html">&lt;form action="https://example.com"&gt;</pre>

<p>こちらは、相対 URL を使用しています。データは同一オリジン上の別の URL に送信されます。</p>

<pre class="brush: html">&lt;form action="/somewhere_else"&gt;</pre>

<p>以下のように属性を指定しない場合は、{{HTMLElement("form")}} 要素はフォームが表示されているページ自身に対してデータを送信します。</p>

<pre class="brush: html">&lt;form&gt;</pre>

<div class="note">
<p><strong>メモ:</strong> HTTPS (secure HTTP) プロトコルを使用して URL を指定することができます。このようにすると、フォーム自体が HTTP でアクセスされる安全ではないページで提供される場合でも、データはリクエストの残りの部分とともに暗号化されます。一方、フォームが安全なページ提供されていても、{{htmlattrxref("action","form")}} 属性で安全ではない HTTP の URL を指定すると、どのブラウザーでもデータを送信する際にユーザーに対してセキュリティの警告を表示します。これは、データが暗号化されないためです。</p>
</div>

<p>非ファイル型のフォームコントロールの名前/値は&amp;記号で結合された <code>name=value</code> ペアでサーバーに送られます。<code>action</code> の値は、サーバー側の検証を含め入力データを扱うサーバーのファイルです。サーバーは応答して、一般的にはデータを処理して <code>action</code> 属性で定義された URL を読み込み、新しいページの読み込み (または <code>action</code> が同じページを指している場合は既存ページのリフレッシュ)を引き起こします。</p>

<p>データがどう送られるかは <code>method</code> 属性に依存します。</p>

<h3 id="The_htmlattrxrefmethodform_attribute">method 属性</h3>

<p><code><a href="/ja/docs/Web/HTML/Attributes/method">method</a></code> 属性は、どのようにデータを送信するかを定義します。<a href="/ja/docs/Web/HTTP">HTTP プロトコル</a>はリクエストを実行するための方法をいくつか提供しています。HTML フォームのデータは複数の方法で送信することができます。もっとも一般的なものは <code>GET</code> メソッドと <code>POST</code> メソッドです。</p>

<p>これら2つのメソッドの違いを理解するために、一歩戻って <a href="/ja/docs/Web/HTTP/Overview">HTTP の動作</a>についてみていきましょう。ウェブ上のリソースにたどり着こうとするたびに、ブラウザーは URL へリクエストを送信します。HTTP リクエストは 2 つの部分で構成されます。ブラウザーの機能に関する包括的なメタデータのセットを持つヘッダーと、指定されたリクエストをサーバーが処理するために必要な情報を持つ本文です。</p>

<h4 id="The_GET_method">GET メソッド</h4>

<p><a href="/ja/docs/Web/HTTP/Methods/GET"><code>GET</code> メソッド</a>は、サーバーに対して指定したリソースを返すよう求めるためにブラウザーが使用するメソッドです。"やあサーバー、このリソースをくれよ。" この場合、ブラウザーは空の本文を送信します。本文が空であるため、フォームをこのメソッドで送信する場合はデータを URL の後に付加します。</p>

<p>以下のフォームについて考えてみましょう。</p>

<pre class="brush: html">&lt;form action="http://www.foo.com" method="GET"&gt;
  &lt;div&gt;
    &lt;label for="say"&gt;What greeting do you want to say?&lt;/label&gt;
    &lt;input name="say" id="say" value="Hi"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="to"&gt;Who do you want to say it to?&lt;/label&gt;
    &lt;input name="to" id="to" value="Mom"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Send my greetings&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p><code>GET</code> メソッドが使用されているので、フォームを送信するときにブラウザーのアドレスバーに <code>www.foo.com/?say=Hi&amp;to=Mom</code> という URL が見えるでしょう。</p>

<p><img alt="" src="url-parameters.png">URL に追加されたデータは名前/値の組の連続です。URL のウェブアドレスが終了した後、疑問符 (<code>?</code>) に続いて、名前/値の組が、それぞれアンパサンド (<code>&amp;</code>) で区切られて入ります。この場合、2 つのデータの断片がサーバーに渡されます。</p>

<ul>
 <li><code>say</code> の値は <code>Hi</code></li>
 <li><code>to</code> の値は <code>Mom</code></li>
</ul>

<p>HTTP リクエストは次のようになります。</p>

<pre>GET /?say=Hi&amp;to=Mom HTTP/2.0
Host: foo.com</pre>

<div class="note">
<p><strong>メモ</strong>: この例は GitHub にあります。— <a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/get-method.html">get-method.html</a> を参照してください (<a href="https://mdn.github.io/learning-area/html/forms/sending-form-data/get-method.html">ライブはこちら</a>).</p>
</div>

<h4 id="The_POST_method">POST メソッド</h4>

<p><a href="/ja/docs/Web/HTTP/Methods/POST"><code>POST</code> メソッド</a>は少し異なります。これは、HTTP リクエストの本文で提供したデータを考慮したレスポンスの要求を、ブラウザーがサーバーに送信するためのメソッドです。"やあサーバー、このデータを見て適切な結果を返してよ。" このメソッドを使用してフォームを送信する場合は、データが HTTP リクエストの本文の後に追加されます。</p>

<p>例を見てみましょう。— これは前述の <code>GET</code> の節で見たものと同じフォームですが、{{htmlattrxref("method","form")}} 属性が <code>post</code> に設定されています。</p>

<pre class="brush: html">&lt;form action="http://www.foo.com" method="POST"&gt;
  &lt;div&gt;
    &lt;label for="say"&gt;What greeting do you want to say?&lt;/label&gt;
    &lt;input name="say" id="say" value="Hi"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="to"&gt;Who do you want to say it to?&lt;/label&gt;
    &lt;input name="to" id="to" value="Mom"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Send my greetings&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>フォームをが <code>POST</code> メソッドで送信されると、URL にはデータが追加されず、HTTP リクエストは次のように、リクエスト本文にデータが含まれた形になります。</p>

<pre>POST / HTTP/2.0
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&amp;to=Mom</pre>

<p><code>Content-Length</code> ヘッダーは本文の長さを、また <code>Content-Type</code> ヘッダーはサーバーに送信するリソースの種類を表します。これらのヘッダーについて少し説明しましょう。</p>

<div class="note">
<p><strong>メモ</strong>: この例は GitHub で見つけることができます。— <a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/post-method.html">post-method.html</a> を参照してください (<a href="https://mdn.github.io/learning-area/html/forms/sending-form-data/post-method.html">ライブ版も見てください</a>)。</p>
</div>

<h3 id="HTTP_リクエストの表示">HTTP リクエストの表示</h3>

<p>当然ながら HTTP リクエストはユーザーには表示されません (見たいのであれば、<a href="/ja/docs/Tools/Network_Monitor">Firefox ネットワークモニター</a>や <a href="https://developers.google.com/chrome-developer-tools/">Chrome デベロッパー ツール</a>などのツールが必要です)。例のように、フォームのデータは Chrome の Network タブに以下のように表示されます。フォームの送信後に、以下のように操作してください。</p>

<ol>
 <li>開発者ツールを開く</li>
 <li>"Network" を選択</li>
 <li>"All" を選択</li>
 <li>"Name" タブから "foo.com" を選択</li>
 <li>"Headers" を選択</li>
</ol>

<p>これで下の画像にあるように、フォームデータを取得することができます。</p>

<p><img alt="" src="network-monitor.png"></p>

<p>ユーザーに表示されるのは呼び出された URL のみです。前述のように、<code>GET</code> リクエストはユーザーが URL バーの中でデータを見ることができますが、<code>POST</code> リクエストではそうではありません。これは 2 つの理由でとても重要です。</p>

<ol>
 <li>パスワード (あるいは何らかの機密データ) を送信する必要がある場合は、<code>GET</code> メソッドを使用してはいけません。データが URL バーに表示されるリスクがあり、とても危険です。</li>
 <li>大量のデータを送信する必要があるなら、<code>POST</code> が好ましいメソッドです。これは、URL の長さ制限があるブラウザーが存在するためです。加えて、多くのサーバーは受け入れる URL の長さを制限しています。</li>
</ol>

<h2 id="On_the_server_side_retrieving_the_data">サーバー側: データの取得</h2>

<p>どちらの HTTP メソッドを選択しても、サーバーが受け取る文字列は、キー/値の組のリストとしてデータを取得するために解析されます。このリストにアクセスする方法は、使用する開発プラットフォームや、使用するであろう特定のフレームワークに依存します。</p>

<h3 id="Example_Raw_PHP">PHP の例</h3>

<p><a href="https://php.net/">PHP</a> は、データにアクセスするためのグローバルオブジェクトを提供します。<code>POST</code> メソッドを使用したと仮定すると、データを取得してユーザーに表示する例は以下のとおりです。もちろん、データに対して何をするかはあなた次第です。データを表示したり、データベースに保管したり、メールで送信したり、他の手段で処理したりするでしょう。</p>

<pre class="brush: php">&lt;?php
  // $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスを可能にする
  // GET メソッドで送信されたデータにアクセスするには、$_GET が使用できる
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?&gt;</pre>

<p>この例では送信されたデータを含むページを表示します。これはサンプルの <a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/php-example.html">php-example.html</a> ファイル、つまり以前 <code>method</code> が <code>POST</code> で <code>action</code> が <code>php-example.php</code> の時に見たサンプルフォームを含むファイルアクションの中で見ることができます。送信されると、フォームデータは上記のブロックの PHP コードを含む <a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/php-example.php">php-example.php</a> へ送信されます。コードが実行されると、ブラウザーの出力は <code>Hi Mom</code> になります。</p>

<p><img alt="" src="php-result.png"></p>

<div class="note">
<p><strong>メモ</strong>: この例はブラウザーにローカルに読み込んだ時には動作しません。— ブラウザーは PHP コードを解釈できないので、フォームがブラウザーに送信されると、PHP ファイルをダウンロードしようとするでしょう。動作させるためには、この例を何らかの PHP サーバー経由で実行する必要があります。ローカルの PHP のテストには、<a href="https://www.mamp.info/en/downloads/">MAMP</a> (Mac および Windows) や <a href="https://ampps.com/download">AMPPS</a> (Mac, Windows, Linux) がいいでしょう。<br>
 <br>
 なお、MAMP を使って MAMP Pro がない (または MAMP Pro デモトライアルの有効期限が切れた) 場合、動作させるのにトラブルが起こるかもしれません。再び動作させるには MAMP アプリを閉じて、<em>MAMP</em> &gt; <em>Preferences</em> &gt; <em>PHP</em>メニューから "Standard Version:" を "7.2.x" (x はあなたがどのバージョンをインストールしたかによります)にするといいことがわかっています。</p>
</div>

<h3 id="Example_Python">Python の例</h3>

<p>この例は、同じこと (与えられたデータをウェブページに表示する) を Python で行います。これはテンプレートの表示やフォームデータの受付などのために <a href="http://flask.pocoo.org/">Flask フレームワーク</a>を使用しています (<a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/python-example.py">python-example.py</a> を参照してください)。</p>

<pre class="brush: python">from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    return render_template('greeting.html', say=request.form['say'], to=request.form['to'])

if __name__ == "__main__":
    app.run()</pre>

<p>次のように、上記のコードでは 2 つのテンプレートが参照されます。(自分の環境で実行する場合、これらは <code>templates</code> というサブディレクトリにあり、<code>python-example.py</code>ファイルと同じディレクトリにある必要があります)。</p>

<ul>
 <li><a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/templates/form.html">form.html</a>: 以前に <a href="#the_post_method">POST メソッド</a>の節で見たフォームと同じですが、<code>action</code> が <code>\{{ url_for('hello') }}</code> に設定されています (これは <a href="http://jinja.pocoo.org/docs/2.9/">Jinja2</a> テンプレートで、基本的に HTML ですが、波括弧の中にウェブサーバーで実行されている Python のコードの呼び出しを含めることができます。<code>url_for('hello')</code> は基本的に、「フォームが送信されたら <code>/hello</code> にリダイレクトしてください」と言っています。)</li>
 <li><a href="https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/templates/greeting.html">greeting.html</a>: このテンプレートは、表示時に渡された 2 つの小さいデータを表示する行だけを含みます。<code>/hello</code> の URL が呼び出されるときに実行される、前述の <code>hello()</code> 関数によって行われます。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: 繰り返しますが、このコードはブラウザーに直接読み込もうとしても動作しません。Python は PHP とは若干異なる動作をします。— ローカルでこのコードを実行するには、<a href="/ja/docs/Learn/Server-side/Django/development_environment#installing_python_3">Python/PIP をインストール</a>する必要があり、それから <code>pip3 install flask</code> を使用して Flask をインストールしてください。この時点で <code>python3 python-example.py</code> を実行し、ブラウザーで <code>localhost:5000</code> に移動することで実行することができるでしょう。</p>
</div>

<h3 id="Other_languages_and_frameworks">その他の言語やフレームワーク</h3>

<p>フォームの操作に使用できるサーバー側の技術は、Perl、Java、.Net、Ruby などたくさんあります。もっとも好きなものを選びましょう。しかしそれらの技術を直接使用することは、扱いにくいため一般的ではないことが特筆に値します。以下のような、フォームをより簡単に扱えるようにする多くの高品質フレームワークのひとつを使用する方がより一般的です。</p>

<ul>
 <li><a href="/ja/docs/Learn/Server-side/Django" rel="external">Django</a> (Python 向け、<a href="http://flask.pocoo.org/">Flask</a> より若干重いものですが、ツールとオプションがより豊富です。)</li>
 <li><a href="/ja/docs/Learn/Server-side/Express_Nodejs">Express</a> (Node.js 向け)</li>
 <li><a href="https://laravel.com/">Laravel</a> (PHP 向け)</li>
 <li><a href="http://rubyonrails.org/" rel="external">Ruby On Rails</a> (Ruby 向け)</li>
 <li><a href="https://spring.io/guides/gs/handling-form-submission/">Spring Boot</a> (Java 向け)</li>
</ul>

<p>言うまでもなく、これらのフレームワークを使用したとしても、フォームでの作業が必ずしも<em>簡単に</em>なるとは限りません。しかし、すべての機能を自分で 1 から書こうとするよりずっと簡単で、また多くの時間を節約できるでしょう。</p>

<div class="note">
<p><strong>メモ</strong>: サーバー側言語やフレームワークまで説明することはこの記事の範囲を超えます。上記のリンクが参考になりますので、学習してみてください。</p>
</div>

<h2 id="A_special_case_sending_files">特別な場合: ファイル送信</h2>

<p>ファイルは HTML フォームで特別なケースです。他のデータがすべてテキストデータである中、ファイルはバイナリーデータ (あるいはそのように考えられるデータ) です。HTTP はテキストのプロトコルであるため、バイナリーデータを扱うための特別な要件があります。</p>

<h3 id="The_htmlattrxrefenctypeform_attribute">enctype 属性</h3>

<p>この属性で <code>Content-Type</code> HTTP ヘッダーの値を指定できます。このヘッダーはサーバーに対して送信するデータの種類を伝えることから、とても重要です。既定値は <code>application/x-www-form-urlencoded</code> です。人間の言葉では、「これは URL 形式でエンコードされたフォームデータです。」という意味です。</p>

<p>しかしファイルを送信したい場合は、さらに 2 つのステップを踏む必要があります。</p>

<ul>
 <li>ファイルの内容は URL 引数に収めることができないので、{{htmlattrxref("method","form")}} 属性を <code>POST</code> に設定してください。</li>
 <li>データは複数の部分に分かれ、それぞれのファイルや文字列データがフォーム本体に含められているので、{{htmlattrxref("enctype","form")}} の値を <code>multipart/form-data</code> に設定ください。</li>
 <li>ユーザーがアップロードするファイルを選択できるように、1 つ以上の <code><a href="/ja/docs/Web/HTML/Element/input/file">&lt;input type="file"&gt;</a></code> コントロールを含めてください。</li>
</ul>

<p>例:</p>

<pre class="brush: html">&lt;form method="post" enctype="multipart/form-data"&gt;
  &lt;div&gt;
    &lt;label for="file"&gt;Choose a file&lt;/label&gt;
    &lt;input type="file" id="file" name="myFile"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button&gt;Send the file&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<div class="blockIndicator note">
<p><strong>警告:</strong> 多くのサーバーは悪用を防ぐために、ファイルや HTTP リクエストの長さを制限しています。</p>
</div>

<h2 id="Common_security_concerns">一般的なセキュリティへの配慮</h2>

<p>サーバーにデータを送信するたびに、セキュリティについて考える必要があります。HTML フォームはサーバーに対するもっともよくある攻撃の入口 (攻撃が行われる場所) になります。問題が HTML フォーム自身から発生することはありません — サーバーがどのようにデータを扱うかによります。</p>

<p><a href="/ja/docs/Learn/Server-side/First_steps/Website_security">ウェブサイトセキュリティ</a> の記事が <a href="/ja/docs/Learn/Server-side">server-side</a> の学習トピックにあり、一般的な攻撃とその防御を詳細に扱っています。そちらへ行って記事を確認し、何が起こり得るかを理解してください。</p>

<h3 id="Be_paranoid_Never_trust_your_users">疑い深くあれ: ユーザーを信用してはいけません</h3>

<p>さて、これらの脅威に対してどう対抗するのでしょうか? これは本ガイドの内容を超える話題です。それでも、覚えておくとよいルールがいくつかあります。もっとも重要なルールは、自分自身も含めユーザーを決して信用してはならないことです。信頼されているユーザーでさえハイジャックされるかもしれません。</p>

<p>サーバーに来るすべてのデータを確認およびサニタイズしなければなりません。いつでもです。例外はありません。</p>

<ul>
 <li><strong>潜在的に危険な文字をエスケープします。</strong>注意すべき具体的な文字は、データが使用される状況や使用するサーバー基盤に大きく依存しますが、どのサーバー側言語もそのための機能を持っています。注意しておくべきことは、 (<a href="/ja/docs/Learn/JavaScript">JavaScript</a> や <a href="https://en.wikipedia.org/wiki/SQL">SQL</a> コマンドといった)実行可能なコードのようなキャラクターシーケンスです。</li>
 <li><strong>入力データの量を、必要なサイズまでしか受け入れないように制限します。</strong></li>
 <li><strong>アップロードされたファイルをサンドボックス化します。</strong>ファイルを別のサーバーに保管して、別のサブドメインまたはよりよい方法としてまったく別のドメインを通してのみアクセスを許可します。</li>
</ul>

<p>これら 3 つのルールに従うと、多くのあるいはほとんどの問題を避けられるでしょう。ただし、適格の第三者によるセキュリティレビューを受けることもよい考えです。発生し得る問題のすべてを見いだしたとは考えないようにしてください。</p>

<h2 id="Summary">まとめ</h2>

<p>ご覧いただいたように、フォームデータの送信は簡単ですが、アプリケーションを安全にするのは容易ではありません。フロントエンドの開発者はデータのセキュリティモデルを定義すべき者ではないことを忘れないようにしてください。今後見ていくように<a href="/ja/docs/Learn/Forms/Form_validation">クライアント側でのデータ検証</a>も可能ですが、クライアント側で実際に何が起きているかを知ることはできませんので、サーバー側でその検証内容を信用することはできません。</p>

<p>このチュートリアルを順番に終えた場合、フォームのマークアップとスタイル設定の方法、クライアント側での検証の方法、フォーム送信の理解ができているでしょう。</p>

<h2 id="See_also">関連情報</h2>

<p>ウェブアプリケーションのセキュア化についてさらに学びたいのでしたら、次のリソースをよく読んでください。</p>

<ul>
 <li><a href="/ja/docs/Learn/Server-side/First_steps">サーバー側ウェブサイトプログラミング入門</a></li>
 <li><a href="https://www.owasp.org/index.php/Main_Page" rel="external">The Open Web Application Security Project (OWASP)</a></li>
 <li><a href="https://infosec.mozilla.org/guidelines/web_security">Web Security by Mozilla</a></li>
</ul>

<p>{{PreviousMenu("Learn/Forms/Form_validation", "Learn/Forms")}}</p>

<h2 id="In_this_module">モジュール内の記事</h2>

<ul>
 <li><a href="/ja/docs/Learn/Forms/Your_first_form">初めてのフォーム</a></li>
 <li><a href="/ja/docs/Learn/Forms/How_to_structure_a_web_form">フォームの構築方法</a></li>
 <li><a href="/ja/docs/Learn/Forms/Basic_native_form_controls">ネイティブフォームウィジェット</a></li>
 <li><a href="/ja/docs/Learn/Forms/HTML5_input_types">The HTML5 input types</a></li>
 <li><a href="/ja/docs/Learn/Forms/Other_form_controls">Other form controls</a></li>
 <li><a href="/ja/docs/Learn/Forms/Styling_web_forms">フォームへのスタイル設定</a></li>
 <li><a href="/ja/docs/Learn/Forms/Advanced_form_styling">フォームへの高度なスタイル設定</a></li>
 <li><a href="/ja/docs/Learn/Forms/UI_pseudo-classes">UI pseudo-classes</a></li>
 <li><a href="/ja/docs/Learn/Forms/Form_validation">フォームデータの検証</a></li>
 <li><a href="/ja/docs/Learn/Forms/Sending_and_retrieving_form_data">フォームデータの送信</a></li>
</ul>

<h3 id="Advanced_Topics">上級トピック</h3>

<ul>
 <li><a href="/ja/docs/Learn/Forms/How_to_build_custom_form_controls">カスタムフォームコントロールの作成方法</a></li>
 <li><a href="/ja/docs/Learn/Forms/Sending_forms_through_JavaScript">JavaScript によるフォームの送信</a></li>
 <li><a href="/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls">フォームウィジェット向けプロパティ実装状況一覧</a></li>
</ul>
