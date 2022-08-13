---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
tags:
  - HTTP
  - HTTPステータスコード
  - サーバーエラー
  - ステータスコード
  - リファレンス
translation_of: Web/HTTP/Status/511
---
<p>{{HTTPSidebar}}</p>

<p>HTTP <code><strong>511 Network Authentication Required</strong></code> レスポンスステータスコードは、クライアントがネットワークアクセスを取得するために認証する必要があることを示します。</p>

<p>この状態は、オリジンサーバーによって生成されるのではなく、ネットワークへのアクセスを制御するプロキシをインターセプトすることによって生成されます。</p>

<p>ネットワークオペレータは、アクセスを許可する前 (インターネットカフェや空港などで) に何らかの認証、条件の受け入れ、またはその他のユーザー対話を必要とすることがあります。彼らはしばしば、Media Access Control ({{Glossary("MAC")}}) アドレスを使用していないクライアントを識別します。</p>

<h2 id="ステータス">ステータス</h2>

<pre class="syntaxbox">511 Network Authentication Required</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("6585", "511 Network Authentication Required" , "6")}}</td>
   <td>Additional HTTP Status Codes</td>
  </tr>
 </tbody>
</table>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{Glossary("Proxy server")}}</li>
</ul>
