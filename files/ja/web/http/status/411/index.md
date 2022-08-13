---
title: 411 Length Required
slug: Web/HTTP/Status/411
tags:
  - HTTP
  - HTTPステータスコード
  - クライアントエラー
  - ステータスコード
  - リファレンス
translation_of: Web/HTTP/Status/411
---
<p>{{HTTPSidebar}}</p>

<p>HyperText Transfer Protocol (HTTP) <code><strong>411 Length Required</strong></code> クライアントエラーレスポンスコードは、サーバーが定義された {{HTTPHeader("Content-Length")}} ヘッダーのないリクエストの受け入れを拒否することを示します。</p>

<div class="note">
<p><strong>メモ: </strong>仕様によっては、一連のチャンクでデータを送信する場合 <code>Content-Length</code> ヘッダは省略され、各チャンクの先頭に、現在のチャンクの長さを16進形式で追加する必要があります。詳細は {{HTTPHeader("Transfer-Encoding")}} を参照してください。</p>
</div>

<h2 id="ステータス">ステータス</h2>

<pre class="syntaxbox">411 Length Required</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "411 Length Required" , "6.5.10")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
