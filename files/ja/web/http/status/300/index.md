---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
tags:
  - HTTP
  - HTTP ステータスコード
  - リファレンス
translation_of: Web/HTTP/Status/300
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <code><strong>300 Multiple Choices</strong></code> リダイレクト状態コードは、リクエストに対して複数のレスポンスがあることを示します。ユーザーエージェントやユーザーは、その内から一つを選択します。レスポンスを一つ選択する方法は標準化されていないため、このレスポンスコードはほとんど使われていません。</p>

<p>サーバーが推奨する選択肢がある場合は、 {{HTTPHeader("Location")}} ヘッダーを生成してください。</p>

<h2 id="Status" name="Status">状態</h2>

<pre class="syntaxbox">300 Multiple Choices
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "300 Multiple Choices" , "6.4.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("301")}} <code>Moved Permanently</code></li>
 <li>{{HTTPStatus("302")}} <code>Found</code> (一時リダイレクト)</li>
 <li>{{HTTPStatus("308")}} <code>Permanent Redirect</code></li>
</ul>
