---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
tags:
  - HTTP
  - Reference
  - ヘッダー
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/Transfer-Encoding
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Transfer-Encoding</code></strong> ヘッダーは、{{Glossary("Payload body","ペイロード本文")}}をユーザーに安全に転送するために使われる符号化方式を指定します。</p>

<div class="note"><a href="https://wikipedia.org/wiki/HTTP/2">HTTP/2</a> は HTTP 1.1 のチャンク化した転送エンコードの仕組みに対応しておらず、新規にもっと効率的な、データストリーミングの仕組みを提供しています。</div>

<p><code>Transfer-Encoding</code> は<a href="/ja/docs/Web/HTTP/Headers#hbh">ホップバイホップヘッダー</a>であり、リソース自体ではなく、二つのノード間のメッセージに適用されます。複数ノードコネクションのそれぞれの区間は、異なる <code>Transfer-Encoding</code> の値を使用することがあります。コネクション全体を通してデータを圧縮したい場合は、代わりにエンドトゥエンドの {{HTTPHeader("Content-Encoding")}} ヘッダーを使用してください。</p>

<p>本文のない {{HTTPMethod("HEAD")}} リクエストに対するレスポンスで使われたときは、対応する {{HTTPMethod("GET")}} メッセージに適用されるであろう値を示します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

<em>// コンマで区切って複数の値を並べることができます</em>
Transfer-Encoding: gzip, chunked</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>chunked</code></dt>
 <dd>データはチャンク (塊) の連続で送られます。この場合は {{HTTPHeader("Content-Length")}} ヘッダーが省略されます。それぞれのチャンクの先頭に現在のチャンクの長さを16進数の形式で追加し、その後で '<code>\r\n</code>' が続き、チャンク自体ももう一つの '<code>\r\n</code>' が続きます。最後のチャンクは通常のチャンクですが、長さが0であるという点が異なります。この後に、一連のエンティティのヘッダーフィールド (おそらく空) から成るトレイラーが続きます。</dd>
 <dt><code>compress</code></dt>
 <dd><a class="external" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW) アルゴリズムを使用した形式です。この値の名前はこのアルゴリズムを実装している UNIX の <em>compress</em> プログラムから採られました。<br>
 特許問題 (2003年に期限切れ) の影響もあり、多くの UNIX ディストリビューションから compress プログラムが消滅したように、今日ではこのコンテンツ符号化方式を使用しているブラウザーはほとんどありません。</dd>
 <dt><code>deflate</code></dt>
 <dd><a class="external" href="http://en.wikipedia.org/wiki/Zlib">zlib</a> 構造体 (<a class="external" href="http://tools.ietf.org/html/rfc1950">RFC 1950</a> で定義) と <a class="external" href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a> 圧縮アルゴリズム (<a class="external" href="http://tools.ietf.org/html/rfc1952">RFC 1951</a> で定義) を使用します。</dd>
 <dt><code>gzip</code></dt>
 <dd><a class="external" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77) と32ビット CRC を使用する形式です。これは元は UNIX の <em>gzip</em> プログラムの形式です。 HTTP/1.1 標準は、互換性のために、このコンテンツ符号化方式の別名として<code>x-gzip</code> を解釈することにサーバーが対応することを推奨しています。</dd>
 <dt><code>identity</code></dt>
 <dd>恒等写像 (つまり、圧縮なし、変更なし) であることを示します。このトークンは、特に明示された場合は、常に受け付けられるとみなされます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Chunked_encoding" name="Chunked_encoding">チャンク化の符号化</h3>

<p>チャンク化の符号化は、大量のデータをクライアントに送り、リクエストが完了するまでレスポンスの合計の長さが分からない場合に便利です。例えば、巨大な HTML の表をデータベースのクエリの結果として作成したり、大きな画像を転送したりする場合などです。チャンク化されたレスポンスは以下のようになります。</p>

<pre>HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7230", "Transfer-Encoding", "3.3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Transfer-Encoding")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Accept-Encoding")}}</li>
 <li>{{HTTPHeader("Content-Encoding")}}</li>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>トレイラーの使用を制御するヘッダーフィールド: {{HTTPHeader("TE")}} (リクエスト) および {{HTTPHeader("Trailer")}} (レスポンス)</li>
 <li>
  <p><a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">チャンク化された転送エンコーディング</a></p>
 </li>
</ul>
