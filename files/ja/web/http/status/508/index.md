---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
tags:
  - '508'
  - HTTP
  - Server error
  - Status code
  - サーバーエラー
  - ステータスコード
translation_of: Web/HTTP/Status/508
---
<div>{{HTTPSidebar}}</div>

<p>The HyperText Transfer Protocol (HTTP) の <code><strong>508 Loop Detected</strong></code> レスポンスステータスコードは、 Web Distributed Authoring and Versioning (WebDAV) プロトコルの文脈で発生する可能性があります。</p>

<p>これは "Depth: infinity" がついたリクエストを処理する際に無限ループに陥ったために、サーバーが操作を終了させたことを示します。このステータスは操作全体が失敗したことを示します。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox">508 Loop Detected</pre>

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
   <td>{{RFC("5842", "508 Loop Detected" , "7.2")}}</td>
   <td>Web Distributed Authoring and Versioning</td>
  </tr>
 </tbody>
</table>
