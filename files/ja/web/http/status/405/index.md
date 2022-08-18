---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
tags:
  - HTTP
  - HTTP ステータスコード
  - Reference
  - クライアントエラー
  - リファレンス
translation_of: Web/HTTP/Status/405
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>405</strong></code><strong><code> Method Not Allowed</code></strong> レスポンスステータスコードは、リクエストメソッドをサーバー側で認識しているが、対象のリソースでは対応していないことを示します。</p>

<p class="newpage">サーバーは 405 レスポンスで、対象のリソースで現在対応しているメソッドの一覧を含む <strong><code>Allow</code></strong> ヘッダー欄を生成しなければなりません。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox">405 Method Not Allowed</pre>

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
   <td>{{RFC("7231", "405 Method Not Allowed" , "6.5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
 <li><a href="https://kinsta.com/blog/405-method-not-allowed-error/">How to Fix 405 Method Not Allowed</a></li>
 <li><a href="https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications">Troubleshooting HTTP 405</a></li>
</ul>
