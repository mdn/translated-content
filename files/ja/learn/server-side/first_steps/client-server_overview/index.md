---
title: クライアント - サーバの概要
slug: Learn/Server-side/First_steps/Client-Server_overview
tags:
  - Beginner
  - CodingScripting
  - イントロダクション
  - ガイド
  - サーバ
  - サーバサイドプログラミング
  - 学習
translation_of: Learn/Server-side/First_steps/Client-Server_overview
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}</div>

<p class="summary">サーバサイドプログラミングの目的と潜在的な利点を知ったので、サーバがブラウザーから "動的リクエスト" を受け取ったときに起こることを詳細に検討します。ほとんどの Web サイトのサーバサイドコードは同様の方法でリクエストとレスポンスを処理するので、これは自身のコードの大部分を書くときに何が必要かを理解するのに役立ちます。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件</th>
   <td>基本的なコンピュータリテラシー。Web サーバの基本的な理解。</td>
  </tr>
  <tr>
   <th scope="row">目的</th>
   <td>動的な Web サイトにおけるクライアントとサーバのやりとり、特にサーバサイドのコードで実行する必要がある操作を理解する。</td>
  </tr>
 </tbody>
</table>

<p>私たちはまだコードを書くために使う Web フレームワークを選択していないので、議論には本当のコードはありません！ ただし、どのプログラミング言語または Web フレームワークを選択したかに関係なく、記述された動作はサーバ側のコードで実装する必要があるため、この説明は依然として非常に重要です。</p>

<h2 id="Web_サーバと_HTTP_(入門書)">Web サーバと HTTP (入門書)</h2>

<p>Web ブラウザは、<strong>H</strong>yper<strong>T</strong>ext<strong> T</strong>ransfer <strong>P</strong>rotocol (<a href="/ja/docs/Web/HTTP">HTTP</a>) を使用して <a href="/ja/docs/Learn/Common_questions/What_is_a_web_server">Web サーバ</a>と通信します。Web ページのリンクをクリックしたり、フォームを送信したり、検索を実行したりすると、ブラウザは <em>HTTP リクエスト</em>をサーバに送信します。</p>

<p>このリクエストに含まれるもの:</p>

<ul>
 <li>対象のサーバとリソース (HTML ファイル、サーバ上の特定のデータポイント、実行するツールなど) を識別する URL</li>
 <li>必要なアクション (たとえば、ファイルを取得したり、データを保存または更新したりするため) を定義するメソッド。さまざまなメソッド/動詞とそれに関連するアクションを以下にリストします。
  <ul>
   <li><code>GET</code>: 特定のリソース (製品に関する情報を含む HTML ファイル、製品のリストなど) を取得します。</li>
   <li><code>POST</code>: 新しいリソース (たとえば、新しい記事をWikiに追加したり、新しい連絡先をデータベースに追加したりします) を作成します。</li>
   <li><code>HEAD</code>: <code>GET</code> のように body を取得せずに、特定のリソースに関するメタデータ情報を取得します。たとえば、リソースが最後に更新された時刻を調べるために <code>HEAD</code> リクエストを使用し、リソースが変更された場合にのみ (より "高価な") <code>GET</code> リクエストを使用します。</li>
   <li><code>PUT</code>: 既存のリソースを更新します (または、存在しない場合は新しいリソースを作成します)。</li>
   <li><code>DELETE</code>: 指定したリソースを削除します。</li>
   <li><code>TRACE</code>, <code>OPTIONS</code>, <code>CONNECT</code>, <code>PATCH</code>: これらの動詞は、あまり一般的ではない高度な作業のためのものなので、ここでは説明しません。</li>
  </ul>
 </li>
 <li>追加情報 (たとえば、HTML フォームデータ) をリクエストと共にエンコードすることができます。情報は次のようにエンコードできます。
  <ul>
   <li>URL パラメータ: <code>GET</code> リクエストは、サーバに送信された URL に名前と値のペアを末尾に追加することで、データをエンコードします (例：<code>http://mysite.com<strong>?name=Fred&amp;age=11</strong></code>)。URL パラメータから URL の残りの部分を区切る疑問符 (<code>?</code>)、関連する値から各名前を区切る等号 (<code>=</code>)、および各ペアを区切るアンパサンド (<code>&amp;</code>) が常にあります。URL パラメータは、ユーザが変更して再送信することができるため、本質的に「安全ではありません」。結果として、URL パラメータの <code>GET</code> リクエストは、サーバ上のデータを更新するリクエストには使用されません。</li>
   <li><code>POST</code> データ: <code>POST</code> リクエストは新しいリソースを追加し、そのデータはリクエストボディ内にエンコードされます。</li>
   <li><span class="hidden"> </span>クライアントサイド Cookie : Cookie には、クライアントに関するセッションデータが含まれており、サーバはそれをログイン状態とリソースへの権限/アクセスを判断するために使用できます。</li>
  </ul>
 </li>
</ul>

<p>Web サーバはクライアントリクエストメッセージを待ち、メッセージが到着したときにそれらを処理し、HTTP レスポンスメッセージで Web ブラウザにレスポンスします。レスポンスには、リクエストが成功したかどうかを示す <a href="/ja/docs/Web/HTTP/Status">HTTP レスポンスステータスコード</a> (<span class="tlid-translation translation" lang="ja"><span title="">例: 成功した場合は "</span></span><code>200 OK</code><span class="tlid-translation translation" lang="ja"><span title="">"、リソースが見つからない場合は "</span></span><code>404 Not Found</code><span class="tlid-translation translation" lang="ja"><span title="">"、ユーザがリソースを見ることを許可されていない場合は "</span></span><code>403 Forbidden</code><span class="tlid-translation translation" lang="ja"><span title="">"など) </span></span>が含まれます。<code>GET</code> リクエストに対する成功したレスポンスの本文には、リクエストされたリソースが含まれます。</p>

<p>HTML ページが返されると、Web ブラウザによってレンダリングされます。 処理の一部として、ブラウザは他のリソースへのリンクを発見することができ (例えば HTML ページは通常 JavaScript と CSS ページを参照します)、これらのファイルをダウンロードするために別々の HTTP リクエストを送信します。</p>

<p>静的および動的 Web サイト (以降のセクションで説明) は、まったく同じ通信プロトコル/パターンを使用しています。</p>

<h3 id="GET_リクエストレスポンス_例">GET リクエスト/レスポンス 例</h3>

<p>リンクをクリックするか (検索エンジンホームページのように) サイトを検索することで簡単な <code>GET</code> リクエストをすることができます。たとえば、MDNで「クライアント - サーバの概要」という用語を検索したときに送信される HTTP リクエストは、次のようになります (メッセージの一部はあなたのブラウザや設定に依存するので、同一にはなりません)。</p>

<div class="note">
<p>HTTP メッセージのフォーマットは「Web 標準」(<a href="http://www.rfc-editor.org/rfc/rfc7230.txt">RFC7230</a>) で定義されています。このレベルの詳細を知る必要はありませんが、少なくとも今、これら全てがどこから来たのかを知っています！</p>
</div>

<h4 id="リクエスト">リクエスト</h4>

<p>リクエストの各行にはそれに関する情報が含まれています。 最初の部分は<strong>ヘッダー</strong>と呼ばれ、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">HTML head</a> に HTML 文書に関する有用な情報が含まれるのと同じで、リクエストに関する有用な情報が含まれます (ただし、実際のコンテンツ自体は含まれません)。</p>

<pre>GET https://developer.mozilla.org/en-US/search?q=client+server+overview&amp;topic=apps&amp;topic=html&amp;topic=css&amp;topic=js&amp;topic=api&amp;topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
<code>Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7</code>
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
</pre>

<p>1行目と2行目には、上記で説明したほとんどの情報が含まれています。</p>

<ul>
 <li>リクエストのタイプ (<code>GET</code>)</li>
 <li>ターゲットリソースの URL (<code>/en-US/search</code>)</li>
 <li>URL パラメータ (<code>q=client%2Bserver%2Boverview&amp;topic=apps&amp;topic=html&amp;topic=css&amp;topic=js&amp;topic=api&amp;topic=webdev</code>)</li>
 <li>ターゲット/ホストの Web サイト (developer.mozilla.org)</li>
 <li>最初の行の終わりには、特定のプロトコルバージョンを識別する短い文字列 (<code>HTTP/1.1</code>) も含まれています。</li>
</ul>

<p>最後の行にはクライアントサイドの Cookie に関する情報が含まれています。この場合、Cookie にはセッションを管理するための ID (<code>Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; ...</code>) が含まれています。</p>

<p>残りの行には、使用されているブラウザとそれが処理できるレスポンスの種類に関する情報が含まれています。たとえば、次のようになります。</p>

<ul>
 <li>私のブラウザ (<code>User-Agent</code>) は Mozilla Firefox (<code>Mozilla/5.0</code>) です。</li>
 <li>gzip 圧縮情報 (<code>Accept-Encoding: gzip</code>) を受け入れることができます。</li>
 <li>指定された文字セット (<code>Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7</code>) および<span class="tlid-translation translation" lang="ja"><span title="">言語</span></span> (<code>Accept-Language: de,en;q=0.7,en-us;q=0.3</code>) を受け入れることができます。</li>
 <li><code>Referer</code> 行は、このリソースへのリンク (つまり、要求の発信元、<code>https://developer.mozilla.org/en-US/</code>) を含んだ Web ページのアドレスを示します。</li>
</ul>

<p>HTTP リクエストもボディを持つことができますが、この場合は空です。</p>

<h4 id="レスポンス">レスポンス</h4>

<p>このリクエストに対するレスポンスの最初の部分を以下に示します。ヘッダーには、次のような情報が含まれています。</p>

<ul>
 <li>最初の行にはレスポンスコード <code>200 OK</code> が含まれています。これはリクエストが成功したことを示しています。</li>
 <li>レスポンスが <code>text/html</code> フォーマットの (<code>Content-Type</code>) であることがわかります。</li>
 <li>また、UTF-8 文字セット(<code>Content-Type: text/html; charset=utf-8</code>) が使用されていることもわかります。</li>
 <li>head はそれがどれくらい大きいかも教えてくれます (<code>Content-Length: 41823</code>)。</li>
</ul>

<p>メッセージの最後に <strong>body</strong> があります。これにはリクエストによって返された実際の HTML が含まれています。</p>

<pre class="brush: html line-numbers language-html"><code class="language-html">HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept,Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823



<span class="doctype token">&lt;!DOCTYPE html&gt;</span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>html</span> <span class="attr-name token">lang</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>en-US<span class="punctuation token">"</span></span> <span class="attr-name token">dir</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>ltr<span class="punctuation token">"</span></span> <span class="attr-name token">class</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>redesign no-js<span class="punctuation token">"</span></span>  <span class="attr-name token">data-ffo-opensanslight</span><span class="attr-value token"><span class="punctuation token">=</span>false</span> <span class="attr-name token">data-ffo-opensans</span><span class="attr-value token"><span class="punctuation token">=</span>false</span> <span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>head</span> <span class="attr-name token">prefix</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>og: http://ogp.me/ns#<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>meta</span> <span class="attr-name token">charset</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>utf-8<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>meta</span> <span class="attr-name token">http-equiv</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>X-UA-Compatible<span class="punctuation token">"</span></span> <span class="attr-name token">content</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>IE=Edge<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>script</span><span class="punctuation token">&gt;</span></span><span class="language-javascript script token"><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>d<span class="punctuation token">)</span> <span class="punctuation token">{</span> d<span class="punctuation token">.</span>className <span class="operator token">=</span> d<span class="punctuation token">.</span>className<span class="punctuation token">.</span><span class="function token">replace</span><span class="punctuation token">(</span><span class="regex token">/\bno-js/</span><span class="punctuation token">,</span> <span class="string token">''</span><span class="punctuation token">)</span><span class="punctuation token">;</span> <span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">(</span>document<span class="punctuation token">.</span>documentElement<span class="punctuation token">)</span><span class="punctuation token">;</span></span><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>script</span><span class="punctuation token">&gt;</span></span>
  ...</code></pre>

<p>レスポンスヘッダの残りの部分には、レスポンス (たとえば、いつ生成されたか)、サーバ、およびブラウザがページを処理する方法についての情報が含まれます (たとえば、<code>X-Frame-Options: DENY</code> 行は、このページを別のサイトの {{htmlelement("iframe")}} に埋め込むことを許可しないようにブラウザに指示します)。</p>

<h3 id="POST_リクエストレスポンス_例">POST リクエスト/レスポンス 例</h3>

<p>HTTP <code>POST</code> は、サーバに保存する情報を含むフォームを送信したときに作成されます。</p>

<h4 id="リクエスト_2">リクエスト</h4>

<p>以下のテキストは、ユーザがこのサイトに新しいプロファイルの詳細を送信したときに行われる HTTP リクエストを示しています。最初の行はこのリクエストを <code>POST</code> として識別しますが、リクエストのフォーマットは前述の <code>GET</code> リクエストの例とほぼ同じです。</p>

<pre class="brush: html">POST https://developer.mozilla.org/en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&amp;user-username=hamishwillee&amp;user-fullname=Hamish+Willee&amp;user-title=&amp;user-organization=&amp;user-location=Australia&amp;user-locale=en-US&amp;user-timezone=Australia%2FMelbourne&amp;user-irc_nickname=&amp;user-interests=&amp;user-expertise=&amp;user-twitter_url=&amp;user-stackoverflow_url=&amp;user-linkedin_url=&amp;user-mozillians_url=&amp;user-facebook_url=</pre>

<p>主な違いは URL にパラメータがないことです。ご覧のとおり、フォームからの情報はリクエストの本文にエンコードされています (たとえば、新しいユーザーの fullname は <code>&amp;user-fullname=Hamish+Willee</code> を使用して設定されます)。</p>

<h4 id="レスポンス_2">レスポンス</h4>

<p>リクエストからのレスポンスは以下のとおりです。ステータスコード "<code>302 Found</code>" は、投稿が成功したこと、および <code>Location</code> フィールドで指定されたページを読み込むために2番目の HTTP リクエストを発行する必要があることをブラウザに通知します。その他の点では、この情報は GET リクエストへのレスポンスに関する情報と似ています。</p>

<pre class="brush: html">HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
</pre>

<div class="note">
<p><strong>メモ</strong>: これらの例に示されている HTTP レスポンスとリクエストは <a href="https://www.telerik.com/download/fiddler">Fiddler</a> アプリケーションを使ってキャプチャされました、しかしあなたはウェブスニファ (例えば <a href="http://websniffer.cc/">Websniffer</a>) または <a href="https://addons.mozilla.org/en-US/firefox/addon/httpfox/">HttpFox</a> のようなブラウザ拡張を使って同様の情報を得ることができます。あなたはこれを自分で試すことができます。リンクされているツールを使用してから、サイト内を移動してプロファイル情報を編集し、さまざまなリクエストとレスポンスを確認します。最近のほとんどのブラウザには、ネットワーク要求を監視するツール (たとえば、Firefox の<a href="/ja/docs/Tools/Network_Monitor">ネットワークモニタツール</a>) もあります。</p>
</div>

<h2 id="静的サイト">静的サイト</h2>

<p><em>静的サイト</em>は、特定のリソースがリクエストされたときはいつでもサーバから同じハードコードされたコンテンツを返すものです。たとえば、製品に関するページが <code>/static/myproduct1.html</code> にある場合、この同じページがすべてのユーザに返されます。サイトに他の似たような製品を追加するならば、別のページ (例えば <code>myproduct2.html</code>) を追加する必要があるでしょう。これは本当に非効率的になり始めます — 何千もの製品ページにたどり着くとどうなるでしょう？ <span class="tlid-translation translation" lang="ja"><span title="">各ページ (基本的なページテンプレート、構造など) に渡って多くのコードを繰り返すことになります。ページ構造について何か変更したい場合 (たとえば、新しい「関連商品」セクションを追加するなど)</span> <span title="">各ページを個別に変更する必要があります。</span></span></p>

<div class="note">
<p><strong>メモ</strong>: ページ数が少なく、すべてのユーザに同じコンテンツを送信したい場合は、静的サイトが優れています。ただし、ページ数が増えると、管理に多大なコストがかかる可能性があります。</p>
</div>

<p>前回の記事で見た静的サイトのアーキテクチャ図をもう一度見て、これがどのように機能するのかを要約しましょう。</p>

<p><img alt="A simplified diagram of a static web server." src="https://mdn.mozillademos.org/files/13841/Basic%20Static%20App%20Server.png"></p>

<p>ユーザがページにナビゲートしたい場合、ブラウザはその HTML ページの URL を指定した HTTP <code>GET</code> リクエストを送信します。サーバはファイルシステムからリクエストされた文書を検索し、その文書と "<code>200 OK</code>" の <a href="/ja/docs/Web/HTTP/Status">HTTP レスポンスステータスコード</a> (成功を示す) を含む HTTP レスポンスを返します。ファイルがサーバに存在しない場合は "<code>404 Not Found</code>"、ファイルが存在するが別の場所にリダイレクトされている場合は "<code>301 Moved Permanently</code>" など、サーバは別のステータスコードを返すことがあります。</p>

<p>静的サイトのサーバは可変データを格納しないため、GET リクエストを処理するだけで済みます。また、HTTP リクエストデータ (URL パラメータやクッキーなど) に基づいてレスポンスを変更することもありません。</p>

<p>それでも、動的サイトは静的ファイル (CSS、JavaScript、静的イメージなど) に対するリクエストをまったく同じ方法で処理するため、静的サイトの機能を理解することはサーバーサイドプログラミングを学ぶときに役立ちます。</p>

<h2 id="動的サイト">動的サイト</h2>

<p><em>動的サイト</em>とは、特定のリクエスト URL とデータに基づいてコンテンツを生成して返すことができる (特定の URL に対して常に同じハードコードファイルを返すのではない) サイトです。製品サイトの例を使用すると、サーバは個々の HTML ファイルではなくデータベースに製品の「データ」を保管します。商品の HTTP <code>GET</code> リクエストを受信すると、サーバは商品 ID を決定し、データベースからデータを取得してから、そのデータを HTML テンプレートに挿入することによって、レスポンス用の HTML ページを作成します。これは静的サイトよりも大きな利点があります。</p>

<p>データベースを使用すると、製品情報を簡単に拡張、変更、および検索可能な方法で効率的に格納できます。</p>

<p>HTML テンプレートを使用すると、HTML 構造の変更が非常に簡単になります。これは 1つの場所、1つのテンプレート内で行う必要があるだけで、潜在的に何千もの静的ページでは行わないためです。</p>

<h3 id="動的リクエストの構造">動的リクエストの構造</h3>

<p>このセクションでは、前回の記事で説明した内容に基づいて、「動的な」HTTP リクエストとレスポンスのサイクルの概要を段階的に説明します。"物事を現実のものにする" ために、コーチが HTML 形式で彼らのチーム名とチームサイズを選択して、彼らの次のゲームのために提案された "最高のラインナップ" を取り戻すことができるスポーツチームマネージャーウェブサイトのコンテキストを使います。</p>

<p>以下の図は、"チームコーチ" Web サイトの主な要素と、コーチが "ベストチーム"リストにアクセスしたときの一連の操作の番号付きラベルを示しています。サイトの一部は <em>Web アプリケーション</em> (これは HTTP リクエストを処理し、HTTP レスポンスを返すサーバーサイドコードを指す方法です)、<em>データベース</em>、これにはプレイヤー、チーム、コーチ、そして彼らの関係についての情報が含まれています、そして <em>HTML テンプレート</em>です。</p>

<p><img alt="This is a diagram of a simple web server with step numbers for each of step of the client-server interaction." src="https://mdn.mozillademos.org/files/13829/Web%20Application%20with%20HTML%20and%20Steps.png" style="height: 584px; width: 1226px;"></p>

<p>コーチがチーム名と選手の数を記入したフォームを送信した後、一連の操作は次のようになります。</p>

<ol>
 <li>Web ブラウザはリソースのベース URL (<code>/best</code>) を使用し、URL パラメータ (例: <code>/best?team=my_team_name&amp;show=11</code>) または URL パターンの一部 (例: <code>/best/my_team_name/11/</code>) としてチームと選手の番号をエンコードしたものを使用して、サーバへの HTTP <code>GET</code> リクエストを作成します。 <code>GET</code> リクエストが使用されるのは、リクエストがデータをフェッチするだけである (データを変更しない) ためです。</li>
 <li><em>Web サーバ</em>はリクエストが「動的」であることを検出し、それを処理 (Web サーバは、その構成で定義されたパターンマッチング規則に基づいてさまざまな URL を処理する方法を決定します) のために <em>Web アプリケーション</em>に転送します。</li>
 <li><em>Web アプリケーション</em>は、リクエストの<em>意図</em>が URL (<code>/best/</code>) に基づいて「最善のチームリスト」を取得することであることを識別し、URL から必要なチーム名とプレーヤーの数を見つけます。その後、<em>Web アプリケーション</em>はデータベースから必要な情報を取得します (<span class="tlid-translation translation" lang="ja"><span title="">どのプレーヤーが「最高」であるかを定義するために追加の「内部」パラメータを使用し、クライアント側の Cookie からログインしたコーチの身元も取得する可能性があります</span></span>)。</li>
 <li><em>Web アプリケーション</em>は、(<em>データベース</em>からの) データを HTML テンプレート内のプレースホルダに入れることで、HTML ページを動的に作成します。</li>
 <li><em>Web アプリケーション</em>は、生成された HTML を HTTP ステータスコード 200 ("成功") とともに (<em>Web サーバ</em>経由で) Web ブラウザに返します。HTML が返されるのを妨げるものがあると、<em>Web アプリケーション</em>は別のコードを返します。たとえば、"404" はチームが存在しないことを示します。</li>
 <li>Web ブラウザは返された HTML の処理を開始し、それが参照する他の CSS または JavaScript ファイルを取得するための個別のリクエストを送信します (手順7を参照)。</li>
 <li>Web サーバはファイルシステムから静的ファイルをロードして直接ブラウザに返します (これも正しいファイル処理は設定ルールと URL パターンマッチングに基づいています)。</li>
</ol>

<p>データベース内のレコードを更新する操作も同様に処理されます。データベースの更新と同じですが、ブラウザからの HTTP リクエストは <code>POST</code> リクエストとしてエンコードされるはずです。</p>

<h3 id="他の仕事をする">他の仕事をする</h3>

<p><em>Web アプリケーション</em>の仕事は、HTTP リクエストを受信し、HTTP レスポンスを返すことです。情報を取得または更新するためにデータベースと相互にやり取りすることは非常に一般的な作業ですが、コードは同時に他のことを実行することも、データベースとやり取りしないこともあります。</p>

<p><em>Web アプリケーション</em>が実行する追加のタスクの良い例は、ユーザにメールを送信してサイトへの登録を確認することです。サイトはロギングやその他の操作も実行する可能性があります。</p>

<h3 id="HTML_以外のものを返す">HTML 以外のものを返す</h3>

<p>サーバサイドの Web サイトのコードは、レスポンスに HTML スニペット/ファイルを返す必要はありません。代わりに動的に他の種類のファイル (テキスト、PDF、CSV など) あるいはデータ (JSON、XML など) を作成して返すことができます。</p>

<p>データを動的に更新して自身のコンテンツ ({{glossary("AJAX")}}) を更新できるようにするために Web ブラウザにデータを返すという考えはかなり前からありました。ごく最近では、必要に応じて動的に更新される単一の HTML ファイルを使用して Web サイト全体が作成される「シングルページアプリケーション」が普及しています。このスタイルのアプリケーションを使用して作成された Web サイトは、サーバから Web ブラウザに多くの計算コストをかけます。その結果、Web サイトは (応答性が高いなど) ネイティブアプリケーションのように動作するように見えます。</p>

<h2 id="Web_フレームワークはサーバサイドの_Web_プログラミングを簡素化します">Web フレームワークはサーバサイドの Web プログラミングを簡素化します</h2>

<p>サーバサイド Web フレームワークにより、上記の操作を処理するコードを非常に簡単に書くことができます。</p>

<p>それらが実行する最も重要な操作の1つは、異なるリソース/ページの URL を特定のハンドラ関数にマッピングするための単純なメカニズムを提供することです。これにより、各タイプのリソースに関連付けられているコードを別々にしておくことが容易になります。また、ハンドラ機能を変更することなく、特定の機能を提供するために使用される URL を1か所で変更できるため、メンテナンスの面でもメリットがあります。</p>

<p>たとえば、2つの URL パターンを2つのビュー関数にマップする次の Django (Python) コードを考えてみましょう。最初のパターンは、<code>/best</code> のリソース URL を持つ HTTP リクエストが <code>views</code> モジュールの <code>index()</code> という名前の関数に渡されることを保証します。パターン "<code>/best/junior</code>" を持つリクエストは、代わりに <code>junior()</code> ビュー関数に渡されます。</p>

<pre class="brush: python"># file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]</pre>

<div class="note">
<p><strong>メモ</strong>: <code>url()</code> 関数の最初のパラメータは、「正規表現」(RegEx, または RE) と呼ばれるパターンマッチング手法を使用するため、少し奇妙に見える (たとえば、<code>r'^junior/$'</code>) ことがあります。この時点で正規表現がどのように機能するのかを知る必要はありませんが、(上のハードコードされた値ではなく) URL のパターンと一致させてビュー関数のパラメータとして使用できるという点が異なります。例として、非常に単純な RegExは、「1つの大文字に一致し、その後に4〜7つの小文字を一致させる」と言うかもしれません。</p>
</div>

<p>Web フレームワークはまた、ビュー関数がデータベースから情報を取得するのを容易にします。データの構造はモデルで定義されています。これは基礎となるデータベースに格納されるフィールドを定義する Python クラスです。"<em>team_type</em>" のフィールドを持つ <em>Team</em> というモデルがある場合は、単純なクエリ構文を使用して特定のタイプを持つすべてのチームを取り戻すことができます。</p>

<p>以下の例では、 "大文字と小文字を区別する" 正確な <code>team_type</code> が "junior" であるすべてのチームのリストを取得します — フォーマットに注意してください。フィールド名 (<code>team_type</code>) の後に二重下線、そして使用する一致のタイプ (この場合は <code>exact</code>) です。他にもたくさんの種類の一致があり、それらをデイジーチェーンでつなげることができます。 順序と返される結果の数も制御できます。</p>

<pre class="brush: python">#best/views.py

from django.shortcuts import render

from .models import Team


def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
</pre>

<p><code>junior()</code> 関数は、ジュニアチームのリストを取得した後、<code>render()</code> 関数を呼び出して、元の <code>HttpRequest</code>、HTML テンプレート、およびテンプレートに含める情報を定義する  "context"  オブジェクトを渡します。<code>render()</code> 関数は、コンテキストと HTML テンプレートを使用して HTML を生成し、それを <code>HttpResponse</code> オブジェクトに返す便利な関数です。</p>

<p>明らかに Web フレームワークは他にも多くのタスクで役に立ちます。次の記事では、さらに多くの利点といくつかの一般的な Web フレームワークの選択について説明します。</p>

<h2 id="まとめ">まとめ</h2>

<p>この時点で、サーバサイドコードが実行しなければならない操作の概要を把握し、サーバーサイド Web フレームワークがこれを容易にする方法をいくつか知っているはずです。</p>

<p>次のモジュールでは、最初のサイトに最適な Web フレームワークを選択する手助けをします。</p>

<p>{{PreviousMenuNext("Learn/Server-side/First_steps/Introduction", "Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}</p>

<h2 id="このモジュールの記事一覧">このモジュールの記事一覧</h2>

<ul>
 <li><a href="/ja/docs/Learn/Server-side/First_steps/Introduction">サーバサイドの概要</a></li>
 <li><a href="/ja/docs/Learn/Server-side/First_steps/Client-Server_overview">クライアント - サーバの概要</a></li>
 <li><a href="/ja/docs/Learn/Server-side/First_steps/Web_frameworks">サーバーサイドウェブフレームワーク</a></li>
 <li><a href="/ja/docs/Learn/Server-side/First_steps/Website_security">Web サイトのセキュリティ</a></li>
</ul>
