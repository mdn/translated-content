---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
tags:
  - HTTP
  - Reference
  - リクエストメソッド
translation_of: Web/HTTP/Methods/OPTIONS
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP の <code>OPTIONS</code>メソッド</strong>は、対象リソースの通信オプションを記述するために使用します。クライアントは <code>OPTIONS</code> メソッドの URL を指定するか、サーバー全体を参照するアスタリスク（*）を指定することができます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">リクエストの本文</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">成功時のレスポンスの本文</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe", "安全性")}}</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">HTML フォームでの使用</th>
   <td>不可</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Identifying_allowed_request_methods" name="Identifying_allowed_request_methods">許可されたリクエストメソッドの識別</h3>

<p>サーバーが対応しているリクエストメソッドを調べるには、 <code>curl</code> を使用して <code>OPTIONS</code> リクエストを発行してください。</p>

<pre class="notranslate">curl -X OPTIONS http://example.org -i</pre>

<p>レスポンスには、許可されているメソッドを含んだ {{HTTPHeader("Allow")}} ヘッダーが含まれます。</p>

<pre class="notranslate">HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
</pre>

<h3 id="Preflighted_requests_in_CORS" name="Preflighted_requests_in_CORS">CORS でのプリフライトリクエスト</h3>

<p><a href="/ja/docs/Web/HTTP/Access_control_CORS">CORS</a> では、 <code>OPTIONS</code> メソッドを使用したプリフライトリクエストが送信されるため、これらの引数を使用してリクエストを送信できるかどうかをサーバーがレスポンスで返すことができます。 {{HTTPHeader("Access-Control-Request-Method")}} ヘッダーは、プリフライトリクエストの一部として、本番のリクエストが<code>POST</code> リクエストメソッドで送信されることをサーバーに通知します。 {{HTTPHeader("Access-Control-Request-Headers")}} ヘッダーは、本番のリクエストが <code>X-PINGOTHER</code> および <code>Content-Type</code> カスタムヘッダーと共に送信されることをサーバーに通知します。サーバーは、このような状況下でリクエストを受け入れるかどうかを決定する機会を持つようになりました。</p>

<pre class="notranslate">OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type</pre>

<p>サーバーは {{HTTPHeader("Access-Control-Allow-Methods")}} でレスポンスを返し、 <code>POST</code>、 <code>GET</code>、および <code>OPTIONS</code> は問題のリソースを照会する実行可能なメソッドであることを伝えます。 このヘッダーは {{HTTPHeader("Allow")}} レスポンスヘッダーに似ていますが、 {{HTTPHeader("Access-Control-Allow-Methods")}} はCORS のコンテキスト内で厳密に使用されます。</p>

<pre class="notranslate">HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive</pre>

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
   <td>{{RFC("7231", "OPTIONS", "4.3.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.methods.OPTIONS")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Allow")}} header</li>
 <li><a href="/ja/docs/Web/HTTP/Access_control_CORS">CORS</a></li>
</ul>
