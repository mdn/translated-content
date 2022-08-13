---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
translation_of: Web/HTTP/Status/413
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>413 Payload Too Large</strong></code> レスポンスステータスコードは、リクエストエンティティがサーバーによって定義された制限よりも大きいことを示します。サーバーは接続を閉じるか {{HTTPHeader("Retry-After")}} ヘッダーフィールドを返します。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">413 Payload Too Large</pre>

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
   <td>{{RFC("7231", "413 Payload Too Large" , "6.5.11")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("Retry-After")}}</li>
</ul>
