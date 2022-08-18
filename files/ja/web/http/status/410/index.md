---
title: 410 Gone
slug: Web/HTTP/Status/410
tags:
  - Client error
  - HTTP
  - Reference
  - クライアントエラー
  - ステータスコード
translation_of: Web/HTTP/Status/410
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>410 Gone</strong></code> クライエントエラーレスポンスコードは、元のサーバーで利用できなくなっている対象リソースにアクセスしていることを示します。この状態は永久的です。</p>

<p>この状態が一時的なものか永久なのか分からない場合は、代わりに {{HTTPStatus(404)}} ステータスコードを使用してください。</p>

<div class="note">
<p><strong>メモ:</strong> 410 レスポンスは既定でキャッシュ可能です。</p>
</div>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox">410 Gone</pre>

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
   <td>{{RFC("7231", "410 Gone" , "6.5.9")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>以下に示す情報は、 MDN の GitHub から取得したものです。 (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.410")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus(404)}}</li>
</ul>
