---
title: HTTP リクエストメソッド
slug: Web/HTTP/Methods
tags:
  - HTTP
  - Methods
  - Reference
translation_of: Web/HTTP/Methods
---
<div>{{HTTPSidebar}}</div>

<p>HTTP では、リソースに対して実行したいアクションを示す一連の<strong>リクエストメソッド</strong>を定義しています。リクエストメソッドには名詞も存在しますが、 <em>HTTP の述語</em>と言われることがあります。それぞれのメソッドがさまざまな意味を持っていますが、いくつかの共通的な機能が、メソッドのグループで共有されています。例えば、リクエストメソッドは{{glossary("safe", "安全")}}、{{glossary("idempotent", "べき等")}}、{{glossary("cacheable", "キャッシュ可能")}}であることがあります。</p>

<dl>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/GET">GET</a></code></dt>
 <dd><code>GET</code> メソッドは、指定したリソースの表現をリクエストします。 <code>GET</code> を使用するリクエストは、データの取り込みに限ります。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/HEAD">HEAD</a></code></dt>
 <dd><code>HEAD</code> メソッドは <code>GET</code> リクエストと同じレスポンスを求めますが、レスポンス本文はありません。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/POST">POST</a></code></dt>
 <dd><code>POST</code> は指定したリソースに実体を送信するために使用するメソッドであり、サーバー上の状態を変更したり、副作用が発生したりすることがよくあります。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/PUT">PUT</a></code></dt>
 <dd><code>PUT</code> メソッドは対象リソースの現在の表現の全体を、リクエストのペイロードで置き換えます。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/DELETE">DELETE</a></code></dt>
 <dd><code>DELETE</code> メソッドは、指定したリソースを削除します。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/CONNECT">CONNECT</a></code></dt>
 <dd><code>CONNECT</code> メソッドは、対象リソースで識別されるサーバーとの間にトンネルを確立します。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/OPTIONS">OPTIONS</a></code></dt>
 <dd><code>OPTIONS</code> メソッドは、対象リソースの通信オプションを示すために使用します。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/TRACE">TRACE</a></code></dt>
 <dd><code>TRACE</code> メソッドは、対象リソースへのパスに沿ってメッセージのループバックテストを実行します。</dd>
 <dt><code><a href="/ja/docs/Web/HTTP/Methods/PATCH">PATCH</a></code></dt>
 <dd><code>PATCH</code> メソッドは、リソースを部分的に変更するために使用します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7231", "Request methods", "4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
   <td>GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE を定義。</td>
  </tr>
  <tr>
   <td>{{RFC("5789", "Patch method", "2")}}</td>
   <td>PATCH Method for HTTP</td>
   <td>PATCH を定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http/methods")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a></li>
</ul>
