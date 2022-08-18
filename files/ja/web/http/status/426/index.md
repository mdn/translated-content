---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
tags:
  - HTTP
  - HTTP ステータスコード
  - クライアントエラー
  - ステータスコード
  - リファレンス
translation_of: Web/HTTP/Status/426
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <code><strong>426 Upgrade Required</strong></code> クライアントエラーレスポンスコードは、サーバーが現在のプロトコルを使用してリクエストを実行することを拒否していることを示しますが、クライアントが別のプロトコルにアップグレードした後に発生する可能性があります。</p>

<p>サーバーはこのレスポンスとともに {{HTTPHeader("Upgrade")}} ヘッダーを送信し、必要なプロトコルを示します。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox">426 Upgrade Required</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre>HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol</pre>

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
   <td>{{RFC("7231", "426 Upgrade Required" , "6.5.15")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Upgrade")}}</li>
 <li>{{HTTPStatus("101")}} <code>Switching Protocol</code></li>
</ul>
