---
title: HTTP のリダイレクト
slug: Web/HTTP/Redirections
tags:
  - Guide
  - HTTP
  - redirects
translation_of: Web/HTTP/Redirections
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary"><em>URL リダイレクト</em>は、 <em>URL 転送</em>とも呼ばれ、ページ、フォーム、ウェブアプリケーション全体などに二つ以上の URL のアドレスを与える技術です。 HTTP ではこの操作のために、特別な種類のレスポンスである <em><strong>HTTP リダイレクト</strong></em>を提供しています。</span></p>

<p>リダイレクトには多くの目的があります。</p>

<ul>
 <li>サイトをメンテナンスしている間の一時的なリダイレクト</li>
 <li>サイトの構成を変更した後も外部のリンクを機能させるための恒久的なリダイレクト、ファイルをアップロードしているときの進捗を示すページなど</li>
</ul>

<h2 id="Principle" name="Principle">原理</h2>

<p>HTTP では、リダイレクトはリクエストに対して、サーバーが特別な<em>リダイレクト</em>レスポンスを送信することによって、サーバーがリダイレクトを発生させます。リダイレクトレスポンスは<a href="/ja/docs/Web/HTTP/Status">ステータスコード</a>が <code>3</code> で始まり、 {{ httpheader("Location") }} ヘッダーがリダイレクト先の URL を保持しています。</p>

<p>ブラウザーがリダイレクトを受け取ると、 <code>Location</code> ヘッダーで提供された新たな URL を使用して直ちに読み込みを行います。追加の往復によるパフォーマンスの低下の他に、ユーザーがリダイレクトに気づくことはほとんどありません。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13785/HTTPRedirect.png"></p>

<p>リダイレクトには何種類かがありますが、3つのカテゴリに分類することができます。</p>

<ol>
 <li><a href="#Permanent_redirections">恒久的リダイレクト</a></li>
 <li><a href="#Temporary_redirections">一時的リダイレクト</a></li>
 <li><a href="#Special_redirections">特殊リダイレクト</a></li>
</ol>

<h3 id="Permanent_redirections" name="Permanent_redirections">恒久的リダイレクト</h3>

<p>これらのリダイレクトは永遠に続くことを意味します。これらのリダイレクトは、元の URL はもう使用されず、新しいものに置き換えるべきであることを示しています。検索エンジンのロボット、 RSS リーダー、および他のクローラーは、リソースの元の URL を更新します。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">コード</th>
   <th scope="col">テキスト</th>
   <th scope="col">メソッドの扱い</th>
   <th scope="col">主な使用例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"><code>301</code></th>
   <td><code>Moved Permanently</code></td>
   <td>{{HTTPMethod("GET")}} メソッドは変更しません。<br>
    他のメソッドは {{HTTPMethod("GET")}} に変更されるかもしれません。<sup><a href="#attr1">[1]</a></sup></td>
   <td>ウェブサイトの再編。</td>
  </tr>
  <tr>
   <th scope="row"><code>308</code></th>
   <td><code>Permanent Redirect</code></td>
   <td>メソッドや本文は変更しません。</td>
   <td>GET 以外のリンクや操作を含むウェブサイトの再編。</td>
  </tr>
 </tbody>
</table>

<p id="attr1">[1] 仕様書ではメソッドの変更を意図していませんが、メソッドを変更するユーザーエージェントが存在します。 {{HTTPStatus("308")}} が定義されたのは、 <code>GET</code> 以外のメソッドを使用するときの動作のあいまいさをなくすためです。</p>

<h3 id="Temporary_redirections" name="Temporary_redirections">一時的リダイレクト</h3>

<p>正規の場所でレスポンスしたリソースにアクセスすることはできませんが、別の場所でアクセスできる場合があります。このような場合に、一時的なリダイレクトを使用できます。</p>

<p>検索エンジンのロボットは、新たな一時的 URL を記録しません。一時的リダイレクトは、リソースを作成、更新、削除しているときに一時的な進捗ページを提供するためにも利用されます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">コード</th>
   <th scope="col">テキスト</th>
   <th scope="col">メソッドの扱い</th>
   <th scope="col">主な使用例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"><code>302</code></th>
   <td><code>Found</code></td>
   <td>{{HTTPMethod("GET")}} メソッドは変更しません。<br>
    他のメソッドは {{HTTPMethod("GET")}} に変更されるかもしれません。<sup><a href="#attr2">[2]</a></sup></td>
   <td>ウェブページは不測の理由により、一時的に利用できない状態です。</td>
  </tr>
  <tr>
   <th scope="row"><code>303</code></th>
   <td><code>See Other</code></td>
   <td>{{HTTPMethod("GET")}} メソッドは変更しません。<br>
    他のメソッドは <code>GET</code> に<em>変更します</em> (本文は失われます)。</td>
   <td>ページの再読み込みによって操作が再度実施されることを防ぐために、{{HTTPMethod("PUT")}} や {{HTTPMethod("POST")}} の後のリダイレクトで使用します。</td>
  </tr>
  <tr>
   <th scope="row"><code>307</code></th>
   <td><code>Temporary Redirect</code></td>
   <td>メソッドと本文は変更しません。</td>
   <td>ウェブページは不測の理由により、一時的に使用できない状態です。検索エンジンは自身のリンクを更新しません。 <code>302</code> と比較して、サイトで <code>GET</code> 以外の操作を使用できる場合に推奨されます。</td>
  </tr>
 </tbody>
</table>

<p id="attr2">[2] 仕様書ではメソッドの変更を意図していませんが、実際はメソッドを変更するユーザーエージェントが存在します。<code>GET</code> 以外のメソッドを使用するときの動作のあいまいさをなくすために、 {{HTTPStatus("307")}} が定義されました。</p>

<h3 id="Special_redirections" name="Special_redirections">特殊リダイレクト</h3>

<p>{{HTTPStatus("304")}} (Not Modified) は、ページをローカルにキャッシュした (陳腐化した) 複製へリダイレクトします。また {{HTTPStatus("300")}} (Multiple Choice) は、手動リダイレクトです。ブラウザーがウェブページとして表示する本文には使用可能なリダイレクトのリストがあり、ユーザーはひとつ選択してクリックします。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="row">コード</th>
   <th scope="col">テキスト</th>
   <th scope="col">主な使用例</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row"><code>300</code></th>
   <td><code>Multiple Choice</code></td>
   <td>多くはありません。本文内の HTML ページに選択肢の一覧があります。 {{HTTPHeader("Link")}} ヘッダーに <code>rel=alternate</code> がある場合は、機械可読な選択肢を提供することが推奨されます。</td>
  </tr>
  <tr>
   <th scope="row"><code>304</code></th>
   <td><code>Not Modified</code></td>
   <td>再検証された条件付きリクエストのために送信されます。キャッシュされたレスポンスがまだ新鮮で使用可能であることを示します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Alternative_way_of_specifying_redirections" name="Alternative_way_of_specifying_redirections">リダイレクトを指定する代替手段</h2>

<p>HTTP リダイレクトは、リダイレクトを定義する唯一の手段ではありません。他にも二つの方法があります。</p>

<ol>
 <li>{{HTMLElement("meta")}} 要素を使用する HTML リダイレクト</li>
 <li><a href="/ja/docs/Web/API/Document_Object_Model">DOM</a> による JavaScript リダイレクト</li>
</ol>

<h3 id="HTML_redirections" name="HTML_redirections">HTML リダイレクト</h3>

<p>HTTP リダイレクトはリダイレクトを作成するための最良の方法ですが、サーバーの制御権を持っていない場合もあります。このような場合は、そのページの {{HTMLElement("head")}} 内に {{htmlattrxref("http-equiv", "meta")}} 属性に <code>Refresh</code> を設定した {{HTMLElement("meta")}} 要素を記述してみてください。ページを表示すると、ブラウザーは示されたページへ移動します。</p>

<pre class="brush: html notranslate">&lt;head&gt;
  &lt;meta http-equiv="Refresh" content="0; URL=https://example.com/"&gt;
&lt;/head&gt;
</pre>

<p>{{htmlattrxref("content")}} 属性は、指定した URL へリダイレクトする前にブラウザーが何秒待つべきかを示す値から始まります。アクセシビリティを高めるため、常に <code>0</code> を設定しましょう。</p>

<p>当然ながらこの方法は HTML でしか動作せず、画像などのコンテンツでは使用できません。</p>

<h3 id="JavaScript_redirections" name="JavaScript_redirections">JavaScript リダイレクト</h3>

<p>JavaScript のリダイレクトは {{domxref("window.location")}} プロパティに URL 文字列を設定することで実行され、新たなページが読み込まれます。</p>

<pre class="brush: js notranslate">window.location = "https://example.com/";</pre>

<p>HTML リダイレクトと同様にすべてのリソースでは動作できず、また JavaScript を実行するクライアントでしか動作しないことは明らかです。一方、例えば特定の条件に一致した場合にのみリダイレクトを行うなど、さまざまな可能性があります。</p>

<h3 id="Order_of_precedence" name="Order_of_precedence">優先順位</h3>

<p>リダイレクトを起動する方法が 3 種類あり、同時に複数の方法を指定できますが、どのリダイレクトが最初に適用されるのでしょうか？</p>

<ol>
 <li>HTTP リダイレクトが常に最初に動作します。 — 転送されるページがない場合でも存在するからです。</li>
 <li>HTTP リダイレクトが存在しなければ、HTML リダイレクト ({{HTMLElement("meta")}}) が動作します。</li>
 <li>JavaScript リダイレクトが最後に、 JavaScript が有効であれば実行されます。</li>
</ol>

<p>可能であれば常に HTTP リダイレクトを使用して、{{HTMLElement("meta")}} は追加しないようにしましょう。誰かが HTTP リダイレクトを変更して HTML リダイレクトを変更し忘れると、リダイレクトが同一ではなくなったり、無限ループになったり、その他の問題が発生したりします。</p>

<h2 id="Use_cases" name="Use_cases">使用例</h2>

<p>リダイレクトの使用例は多数ありますが、どのリダイレクトもパフォーマンスへの影響がありますので、使用は最小限にとどめるべきです。</p>

<h3 id="Domain_aliasing" name="Domain_aliasing">ドメインの別名</h3>

<p>理想的なのは、ひとつのリソースに対してひとつの場所、そしてひとつの URL が存在することです。しかし、リソースに別名を設定する理由はいくつかあります。</p>

<dl>
 <dt>サイトへの到達方法を拡大するため</dt>
 <dd>よくある事例は、サイトが <code>www.example.com</code> ドメイン配下に存在しているとき、<code>example.com</code> からもアクセスできるようにしたい場合です。この場合は、<code>example.com</code> から <code>www.example.com</code> へのリダイレクトを設定します。また、一般的に使用される同義語や、ドメイン名の打ち間違いで頻度が多いものを提供してもよいでしょう。</dd>
 <dt>別のドメインに移動するため</dt>
 <dd>例えば、会社名が変わっても、既存のリンクやブックマークからも新しい会社名を見つけられるようにしたいでしょう。</dd>
 <dt><a href="/ja/docs/Glossary/https">HTTPS</a> を強制するため</dt>
 <dd><code>http://</code> 版のサイトへのリクエストを <code>https://</code> 版のサイトにリダイレクトします。</dd>
</dl>

<h3 id="Keeping_links_alive" name="Keeping_links_alive">リンクの存続</h3>

<p>ウェブサイトを再構築すると URL が変わります。サイトのリンクを新しい URL に合うよう更新しても、外部リソースからのリンクで使用されている URL を制御することはできません。</p>

<p>外部のリンクは貴重なユーザーを連れてきてくれるし、 SEO にも役立つため、リンクを壊したくはありません。よって、古い URL から新しい URL へのリダイレクトを設定します。</p>

<div class="note">
<p>この手法は内部のリンクにも有効ですが、内部のリダイレクトは避けるようにしてください。リダイレクトは (追加の HTTP リクエストを行うため) 性能の負担がかなりあります。内部のリンクを修正することでこれを避けられるのであれば、リンクを修正してください。</p>
</div>

<h3 id="Temporary_responses_to_unsafe_requests" name="Temporary_responses_to_unsafe_requests">安全でないリクエストへの一時的なレスポンス</h3>

<p>{{Glossary("safe", "安全でない")}}リクエストはサーバーの状態を変更するものであり、ユーザーがうっかり再実行するべきではありません。</p>

<p>一般的に、ユーザーは {{HTTPMethod("PUT")}}、{{HTTPMethod("POST")}}、{{HTTPMethod("DELETE")}} のリクエストを再送信することは望みません。リクエストの結果としてレスポンスを返すだけである場合は、単に再読み込みボタンを押すことで (おそらく確認メッセージの後に)、リクエストを再送信します。</p>

<p>この場合、サーバーは正しい情報を持つ {{HTTPStatus("303")}} (See Other) レスポンスを返すことができます。一方、再読み込みボタンが押された場合はページを再表示するだけであり、安全でないリクエストを再実行しません。</p>

<h3 id="Temporary_responses_to_long_requests" name="Temporary_responses_to_long_requests">長いリクエストに対する一時的なレスポンス</h3>

<p>{{HTTPHeader("DELETE")}} リクエストを後で処理するように予定するなど、リクエストによってはサーバー側で長い時間が必要になる場合があります。この場合、レスポンスを {{HTTPStatus("303")}} (See Other) として操作が実行予定に追加されたことを示すページにリンクし、最終的に進捗を確認したり、キャンセルできるようにしたりするようにします。</p>

<h2 id="Configuring_redirects_in_common_servers" name="Configuring_redirects_in_common_servers">一般的なサーバーにおけるリダイレクトの設定</h2>

<h3 id="Apache" name="Apache">Apache</h3>

<p>リダイレクトはサーバーの設定ファイルか、各ディレクトリの <code>.htaccess</code> で設定できます。</p>

<p><code><a href="https://httpd.apache.org/docs/current/mod/mod_alias.html">mod_alias</a></code> モジュールに、 (既定で) {{HTTPStatus("302")}} レスポンスを設定するための <code>Redirect</code> および <code>RedirectMatch</code> ディレクティブがあります。</p>

<pre class="notranslate">&lt;VirtualHost *:443&gt;
	ServerName example.com
	Redirect / https://www.example.com
&lt;/VirtualHost&gt;
</pre>

<p>URL <code>https://example.com/</code> は <code>https://www.example.com/</code> にリダイレクトされ、その下のファイルやディレクトリも同様です (<code>https://example.com/some-page</code> は <code>https://www.example.com/some-page</code> にリダイレクトされます)。</p>

<p><code>RedirectMatch</code> も同じですが、対象の URL の集合を定義するために{{glossary("regular expression", "正規表現")}}を使用します。</p>

<pre class="notranslate">RedirectMatch ^/images/(.*)$ https://images.example.com/$1</pre>

<p><code>images/</code> フォルダー内のすべての文書が、別のドメインにリダイレクトされます。</p>

<p>一時的なリダイレクトを設定したくない場合は、別の種類のリダイレクトを設定するために追加引数 (使用する HTTP ステータスコードまたは <code>permanent</code> キーワード) を使用できます。</p>

<pre class="notranslate">Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
</pre>

<p><code><a href="http://httpd.apache.org/docs/current/mod/mod_rewrite.html">mod_rewrite</a></code> モジュールでリダイレクトを作成することもできます。こちらはさらに柔軟性がありますが、若干複雑です。</p>

<h3 id="Nginx" name="Nginx">Nginx</h3>

<p>Nginx では、リダイレクトしたいコンテンツ用の server ブロックを作成します。</p>

<pre class="notranslate">server {
	listen 80;
	server_name example.com;
	return 301 $scheme://www.example.com$request_uri;
}</pre>

<p>ディレクトリまたは特定のページにのみリダイレクトを適用するには、<code>rewrite</code> ディレクティブを使用します。</p>

<pre class="notranslate">rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
</pre>

<h3 id="IIS" name="IIS">IIS</h3>

<p>IIS では、<code><a href="https://www.iis.net/configreference/system.webserver/httpredirect">&lt;httpRedirect&gt;</a></code> 要素を使用してリダイレクトを設定します。</p>

<h2 id="Avoiding_redirection_loops" name="Avoiding_redirection_loops">リダイレクトループ</h2>

<p>追加のリダイレクトが、すでに通っている経路をたどるとリダイレクトループが発生します。言い換えると終わらないループが存在しており、最終的に見つかるページはありません。</p>

<p>ほとんどの場合はサーバーの問題であり、サーバーで検出できる場合は {{HTTPStatus("500")}} <code>Internal Server Error</code> を返すでしょう。サーバーの設定を変更した直後にこのようなエラーが発生した場合は、リダイレクトループが発生しているかもしれません。</p>

<p>時々、サーバーがリダイレクトループを検出しないことがあります。それぞれのサーバーでは全貌を把握できない、複数のサーバーにわたるリダイレクトループがあり得ます。この場合はブラウザーがループを検出して、エラーメッセージを表示するでしょう。Firefox では以下のメッセージを表示します。</p>

<blockquote>
<p class="bz_comment_text" id="comment_text_0">このアドレスへのリクエストに対するサーバーの自動転送設定がループしています。</p>
</blockquote>

<p>Chrome では以下のように表示されます。</p>

<blockquote>
<p>このウェブページにはリダイレクト ループが含まれています</p>
</blockquote>

<p>どちらの場合も、ユーザーができることはほとんどありません (キャッシュや Cookie の不一致など、ユーザー側で問題が発生している場合を除きます)。</p>

<p>リダイレクトループはユーザー体験を完全に損ないますので、避けることが重要です。</p>
