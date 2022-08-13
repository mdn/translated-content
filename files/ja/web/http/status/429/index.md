---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
translation_of: Web/HTTP/Status/429
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <code><strong>429 Too Many Requests</strong></code> レスポンスステータスコードは、ユーザーが指定された時間内に多くのリクエストを送信した ("rate limiting") ことを示します。</p>

<p>新しいリクエストを行う前にどのくらい待つかを示す {{HTTPHeader("Retry-After")}} ヘッダをこのレスポンスに含めることができます。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">429 Too Many Requests</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="notranslate">HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600</pre>

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
   <td>{{RFC("6585", "429 Too Many Requests" , "4")}}</td>
   <td>Additional HTTP Status Codes</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Retry-After")}}</li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
 <li>Python solution: <a href="https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python">How to avoid HTTP error 429 python</a></li>
</ul>
