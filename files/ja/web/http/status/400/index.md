---
title: 400 Bad Request
slug: Web/HTTP/Status/400
tags:
  - HTTP
  - HTTP ステータスコード
  - Reference
  - クライアントエラー
  - ステータスコード
translation_of: Web/HTTP/Status/400
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>400 Bad Request</strong></code> レスポンスステータスコードは、何らかのクライアント側のエラーであると分かったために、サーバーがそのリクエストを処理しない (できない) ことを表します (例えば、リクエストの構文が正しくない、リクエストメッセージのフレーミングが無効、リクエスト経路に偽りがあるなど)。</p>

<div class="warning">
<p>クライアントは変更なしにこのリクエストを繰り返すべきではありません。</p>
</div>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">400 Bad Request </pre>

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
   <td>{{RFC("7231", "400 Bad Request" , "6.5.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
</ul>
