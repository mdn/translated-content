---
title: 典型的な HTTP セッション
slug: Web/HTTP/Session
tags:
  - HTTP
translation_of: Web/HTTP/Session
---
<div>{{HTTPSidebar}}</div>

<p>HTTP のようなクライアントサーバープロトコルでは、セッションが 3 つの段階で構成されます。</p>

<ol>
 <li>クライアントは TCP コネクション (トランスポート層が TCP ではない場合は、他の適切なコネクション) を確立します。</li>
 <li>クライアントは要求を送り、回答を待ちます。</li>
 <li>サーバは要求を処理して、ステータスコードや適切なデータを提供する回答を返信します。</li>
</ol>

<p>HTTP/1.1 では第 3 段階の後にコネクションは閉じられなくなり、クライアントはさらに要求を発行することができます。つまり、第 2 段階と第 3 段階を複数回行うことができます。</p>

<h2 id="Establishing_a_connection" name="Establishing_a_connection">コネクションの確立</h2>

<p>クライアントサーバープロトコルでは、クライアントがコネクションを確立します。HTTP のコネクションを開くとは、下層のトランスポート層のコネクションを確立することであり、これは通常 TCP です。</p>

<p>コンピューター上の HTTP サーバー用の、 TCP の既定のポートは 80 番です。8000 番や 8080 番など、ほかのポートを使用することもできます。読み込むページの URL はドメイン名とポート番号の両方を含みますが、後者は 80 番である場合に省略できます。詳しくは <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">Identifying resources on the Web</a> をご覧ください。</p>

<div class="note"><strong>メモ:</strong> クライアントサーバーモデルでは、明示的な要求なくサーバーがクライアントにデータを送信することを認めていません。この問題を回避するために、ウェブ開発者はいくつかの技術を使用しています。 {{domxref("XMLHTTPRequest")}} や {{domxref("Fetch")}} API で定期的にサーバーに ping を送ったり、 <a href="/ja/docs/WebSockets">WebSockets API</a> や同様のプロトコルを使用したりします。</div>

<h2 id="Sending_a_client_request" name="Sending_a_client_request">クライアントの要求の送信</h2>

<p>コネクションを確立すると、ユーザーエージェントは要求を送信できます (ユーザーエージェントは一般的にウェブブラウザーですが、ほかにもクローラーなどがあります)。クライアントの要求は CRLF (キャリッジリターンに続いてラインフィード) で区切られたテキストのディレクティブで構成され、3 つのブロックに分けられます。</p>

<ol>
 <li>最初の行は、要求メソッドの後に次の引数が続きます。
  <ul>
   <li>文書のパス、すなわち絶対 URL からプロトコル名とドメイン名を除いたものです。</li>
   <li>HTTP プロトコルのバージョン。</li>
  </ul>
 </li>
 <li>後続の行は HTTP ヘッダーであり、サーバーに対してどの種類 (例えば、言語や MIME タイプ) のデータが適切かを示す情報や、サーバーの動作を変える (例えば、すでにキャッシュされている場合は回答を送信しない) データを与えます。これらの HTTP ヘッダーは空行で終わるブロックを構成します。</li>
 <li>最後のブロックは省略可能なデータブロックで、主に POST メソッドで使用される追加のデータを含みます。</li>
</ol>

<h3 id="Example_requests" name="Example_requests">要求の例</h3>

<p>developer.mozilla.org のルートページ、すなわち <a class="linkification-ext external" href="/" title="Linkification: http://developer.mozilla.org/">http://developer.mozilla.org/</a> を読み込む、また可能であればユーザーエージェントはフランス語のページを希望することをサーバに伝えます:</p>

<pre>GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

</pre>

<p>ヘッダーブロックとデータブロックを分けている、最後の空行に注意してください。この例は HTTP ヘッダーに <code>Content-Length</code> がありませんので、空のデータブロックが与えられてヘッダーの終わりを示しており、サーバーはこの空行を受け取るとただちに要求を処理できます。</p>

<p>フォームの入力結果を送信する例です。</p>

<pre>POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&amp;request=Send%20me%20one%20of%20your%20catalogue
</pre>

<h3 id="Request_methods" name="Request_methods">要求メソッド</h3>

<p>HTTP では、リソースに対して実行したいアクションを示す<a href="/ja/docs/Web/HTTP/Methods">要求メソッド</a>のセットを定義しています。要求メソッドには名詞も存在しますが、 HTTP 動詞と言われることがあります。 <code>GET</code> と <code>POST</code> が最も一般的です。</p>

<ul>
 <li>{{HTTPMethod("GET")}} メソッドは、指定したリソースのデータを要求します。 <code>GET</code> を使用する要求は、データの取り込みに限ります。</li>
 <li>{{HTTPMethod("POST")}} メソッドはサーバーにデータを送信しますので、データの状態を変更できます。これは、 <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>用によく使用されるメソッドです。</li>
</ul>

<h2 id="Structure_of_a_server_response" name="Structure_of_a_server_response">サーバー応答の構造</h2>

<p>接続したエージェントが要求を送信すると、ウェブサーバーはその要求を処理して、最終的に応答を返信します。クライアントの要求と同様にサーバーの応答はテキストのディレクティブで構成され、それらは CRLF で区切られており、3 つのブロックに分けられます:</p>

<ol>
 <li>最初の行は<em>ステータス行</em>で、受け入れた HTTP バージョンとステータス要求で構成されます (そして、人間に読めるテキストで意味を簡単に示します)。</li>
 <li>後続の行はそれぞれ具体的な HTTP ヘッダーを表しており、クライアントに対して送信したデータに関する情報 (例えば種類、サイズ、圧縮方法、キャッシュ情報) を与えます。クライアントの要求の HTTP ヘッダーブロックと同様に、これらの HTTP ヘッダーも空行で終わるブロックを構成します。</li>
 <li>最後のブロックはデータブロックで、任意のデータを含みます。</li>
</ol>

<h3 id="Example_responses" name="Example_responses">応答の例</h3>

<p>成功したウェブページの応答です:</p>

<pre>HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

&lt;!DOCTYPE html... <strong>(ここにサイズが 29769 バイトの、要求されたウェブページが置かれます)</strong>

</pre>

<p>要求されたリソースが永続的に移動されたことの通知です。</p>

<pre>HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: <a class="linkification-ext" href="../../../../" title="Linkification: https://developer.mozilla.org/">https://developer.mozilla.org/</a> <strong>(これはリソースの新しいリンクです。ユーザーエージェントはこちらを読み込むでしょう)</strong>
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 <strong>(ユーザーエージェントがリンクをたどれない場合に表示する、既定のページを含むコンテンツです)</strong>

&lt;!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN"&gt;
&lt;html&gt;&lt;head&gt;
&lt;title&gt;301 Moved Permanently&lt;/title&gt;
&lt;/head&gt;&lt;body&gt;
&lt;h1&gt;Moved Permanently&lt;/h1&gt;
&lt;p&gt;The document has moved &lt;a href="<a class="linkification-ext" href="../../../../" title="Linkification: https://developer.mozilla.org/">https://developer.mozilla.org/</a>"&gt;here&lt;/a&gt;.&lt;/p&gt;
&lt;hr&gt;
&lt;address&gt;Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80&lt;/address&gt;
&lt;/body&gt;&lt;/html&gt;

</pre>

<p>要求されたリソースが存在しないことの通知です。</p>

<pre>HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

&lt;!DOCTYPE html... <strong>(欠けているリソースをユーザが見つけることを支援する、サイト毎にカスタマイズされたページを含みます)</strong>

</pre>

<h3 id="Response_status_codes" name="Response_status_codes">応答ステータスコード</h3>

<p><a href="/ja/docs/Web/HTTP/Status">HTTP 応答ステータスコード</a> は、特定の HTTP 要求が正常に完了したかを示します。応答は情報応答、成功応答、リダイレクション、クライアントエラー、サーバーエラーの 5 つのクラスに分類されます。</p>

<ul>
 <li>{{HTTPStatus(200)}}: OK. 要求は成功しました。</li>
 <li>{{HTTPStatus(301)}}: Moved Permanently. この応答コードは、要求したリソースの URI が変更されたことを表します。</li>
 <li>{{HTTPStatus(404)}}: Not Found. サーバーは、要求されたリソースを見つけることができません。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">ウェブ上のリソースの識別</a></li>
 <li><a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a></li>
 <li><a href="/ja/docs/Web/HTTP/Methods">HTTP 要求メソッド</a></li>
 <li><a href="/ja/docs/Web/HTTP/Status">HTTP 応答ステータスコード</a></li>
</ul>
