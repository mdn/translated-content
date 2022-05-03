---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
tags:
  - HTTP
  - Reference
  - リクエストメソッド
translation_of: Web/HTTP/Methods/CONNECT
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP の <code>CONNECT</code> メソッド</strong>は、リクエストしたリソースを用い、双方向のコミュニケーションを開始します。これはトンネリングを開始するときに使用されます。</p>

<p>例えば、 <code>CONNECT</code> メソッドは {{Glossary("SSL")}} ({{Glossary("HTTPS")}}) を使用したウェブサイトにアクセスする際に使用されます。クライアントは HTTP {{Glossary("Proxy server", "プロキシサーバー")}}に希望する宛先への <a href="/ja/docs/Glossary/Transmission_Control_Protocol_(TCP)">TCP</a> コネクションをトンネリングするように依頼します。その場合、プロキシサーバーはクライアントに代わってコネクションの作成を継続します。一度コネクションがサーバーによって確立されると、{{Glossary("Proxy server", "プロキシサーバー")}}はクライアント宛て/クライアント発の <a href="/ja/docs/Glossary/Transmission_Control_Protocol_(TCP)">TCP</a> ストリームのプロキシを継続します。</p>

<p><code>CONNECT</code> はホップバイホップ (hop-by-hop) のメソッドです。</p>

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
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
   <td>なし</td>
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

<pre class="syntaxbox">CONNECT www.example.com:443 HTTP/1.1
</pre>

<h2 id="例">例</h2>

<p>プロキシサーバの中にはトンネルの作成に認証を必要とするものがあります。 {{HTTPHeader("Proxy-Authorization")}} ヘッダーも参照してください。</p>

<pre class="line-numbers  language-html">CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=</pre>

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
   <td>{{RFC("7231", "CONNECT", "4.3.6")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.methods.CONNECT")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Glossary("Proxy server")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
</ul>
