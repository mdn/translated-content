---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
tags:
  - HTTP
  - HTTPステータスコード
  - クライアントエラー
  - ステータスコード
  - リファレンス
translation_of: Web/HTTP/Status/408
---
<p>{{HTTPSidebar}}</p>

<p>HyperText Transfer Protocol (HTTP) <code><strong>408 Request Timeout</strong></code> レスポンスステータスコードはサーバーがこの未使用のコネクションをシャットダウンすることを意味します。 <em>クライアントからの以前のリクエストがなくても</em>、一部のサーバーによってアイドル状態のコネクションで送信されます。</p>

<p><code>408</code> はサーバーがコネクションを待機し続けるのではなく、閉じることを決定することを意味しているため、サーバーはレスポンスで "close" {{HTTPHeader("Connection")}} ヘッダーフィールドを送信する必要があります。</p>

<p>このレスポンスは HTTP 事前接続メカニズム使用してサーフィンを高速化するために、Chrome や、Firefox 27+、IE9 などの、いくつかのブラウザでよく利用されます。</p>

<div class="note">
<p><strong>メモ: </strong>このメッセージを送信せずに接続をシャットダウンするサーバーもあります。</p>
</div>

<h2 id="ステータス">ステータス</h2>

<pre class="syntaxbox">408 Request Timeout</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "408 Request Timeout" , "6.5.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="参照">参照</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li>{{HTTPHeader("X-DNS-Prefetch-Control")}}</li>
</ul>
