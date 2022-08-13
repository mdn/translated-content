---
title: 409 Conflict
slug: Web/HTTP/Status/409
tags:
  - HTTP
  - HTTPステータスコード
  - Reference
  - クライアントエラー
translation_of: Web/HTTP/Status/409
---
<p>{{HTTPSidebar}}</p>

<p>HTTP <code><strong>409 Conflict</strong></code> はリクエストが現在のサーバーの状態と競合したことを示すステータスコード。</p>

<p>競合は {{HTTPMethod("PUT")}} メソッドを使用したリクエストのレスポンスで最も発生しやすい。例えば、サーバーにすでに存在しているファイルよりも古いバージョンのファイルをアップロードした際に409の応答が返され、バージョン管理システムの競合が発生する可能性がある。</p>

<h2 id="ステータス">ステータス</h2>

<pre class="syntaxbox">409 Conflict</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "409 Conflict" , "6.5.8")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="参照">参照</h2>

<ul>
 <li>{{HTTPMethod("PUT")}}</li>
</ul>
