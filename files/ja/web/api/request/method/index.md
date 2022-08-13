---
title: Request.method
slug: Web/API/Request/method
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - request
translation_of: Web/API/Request/method
---
<div>{{APIRef("Fetch")}}{{SeeCompatTable}}</div>

<p>{{domxref("Request")}} インターフェースの <strong><code>method</code></strong> 読み取り専用プロパティには、リクエストメソッド（<code>GET、</code><code>POST など）を含みます。</code></p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">var <var>myMode</var> = <var>request</var>.mode;</pre>

<h3 id="値">値</h3>

<p>リクエストメソッドを示す {{domxref("ByteString")}}。</p>

<h2 id="例">例</h2>

<p>次のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、リクエストメソッドを変数に保存しています：</p>

<pre class="brush: js">var myRequest = new Request('flowers.jpg');
var myMethod = myRequest.method; // GET</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Fetch','#dom-request-method','method')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.Request.method")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
