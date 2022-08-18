---
title: 510 Not Extended
slug: Web/HTTP/Status/510
tags:
  - HTTP
  - Server error
  - Status code
translation_of: Web/HTTP/Status/510
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <strong><code>510 Not Extended</code></strong> レスポンスステータスコードは、<a href="https://tools.ietf.org/html/rfc2774">RFC 2774</a> が定義する HTTP 拡張フレームワークのコンテキストで送信されます。</p>

<p>その仕様では、クライアントは、使用する拡張を記述する拡張宣言を含むリクエストを送信できます。 サーバーがそのようなリクエストを受信しても、記述されている拡張をそのリクエストに対してサポートしていない場合、サーバーは 510 ステータスコードで応答します。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">510 Not Extended</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("2774", "510 Not Extended" , "7")}}</td>
   <td>An HTTP Extension Framework</td>
  </tr>
 </tbody>
</table>
