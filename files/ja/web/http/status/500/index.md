---
title: 500 Internal Server Error
slug: Web/HTTP/Status/500
tags:
  - HTTP
  - Server error
  - Status code
  - サーバーエラー
  - ステータスコード
translation_of: Web/HTTP/Status/500
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>500 Internal Server Error</strong></code> サーバーエラーレスポンスコードは、サーバーがリクエストを実行を妨げる予期しない条件に遭遇したことを示します。</p>

<p>このエラーレスポンスは一般的な "catch-all" レスポンスです。普通、これはサーバーがレスポンスに対してより適切な 5xx のエラーコードを見つけることができなかったことを示します。サーバーの管理者は、ステータスコード 500 のようなエラーレスポンスをリクエストに関する詳細情報と共に記録し、将来同じエラーが発生することを防ぐ場合もあります。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">500 Internal Server Error</pre>

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
   <td>{{RFC("7231", "500 Internal Server Error" , "6.6.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>以下に示す情報は、 MDN の GitHub から取得したものです。 (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.500")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
</ul>
