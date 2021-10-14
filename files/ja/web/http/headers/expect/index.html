---
title: Expect
slug: Web/HTTP/Headers/Expect
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - リクエストヘッダー
translation_of: Web/HTTP/Headers/Expect
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>Expect</code></strong> リクエストヘッダーは、リクエストを正しく扱うためにサーバーが実行する必要があると期待されていることを示します。</p>

<p>仕様書で定義されている期待は <code>Expect: 100-continue</code> だけで、サーバーが応答するべきことは以下の通りです。</p>

<ul>
 <li>ヘッダーに含まれている情報で、直ちに成功とする条件を満たしているのであれば {{HTTPStatus("100")}}。</li>
 <li>期待に沿うことができなければ {{HTTPStatus("417")}} (Expectation Failed)。それ以外であれば他の 4xx 状態になります。</li>
</ul>

<p>例えば、サーバーは {{HTTPHeader("Content-Length")}} が長すぎるとリクエストを拒否する可能性があります。</p>

<p><code>Expect</code> ヘッダーを送信するブラウザーはあまりありませんが、 cURL のような一部の他のクライアントは既定で送信します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>現在は "100-continue" 以外の期待は定義されていません。</p>

<pre class="syntaxbox">Expect: 100-continue
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>100-continue</dt>
 <dd>クライアントがこの要求で (おそらく大規模な) メッセージ本文を送信しようとしていることを受信者に通知し、 {{HTTPStatus("100")}} (Continue) 暫定応答を受信することを期待します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Large_message_body" name="Large_message_body">巨大なメッセージ本文</h3>

<p>クライアントは Expect ヘッダーで要求を送信し、メッセージ本文を送信する前にサーバーが応答するのを待ちます。</p>

<pre>PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
</pre>

<p>サーバーはリクエストヘッダーをチェックし、 {{HTTPStatus("100")}} (Continue) 応答を返信して、クライアントにメッセージ本体を送信するよう指示するか、又は期待に沿わない場合は、 {{HTTPStatus("417")}} (Expectation Failed) 状態になります。</p>

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
   <td>{{RFC("7231", "Expect", "5.1.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("http.headers.Expect")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("417")}}<code> Expectation Failed</code></li>
 <li>{{HTTPStatus("100")}}<code> Continue</code></li>
</ul>
