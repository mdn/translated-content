---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
tags:
  - HTTP
  - Server error
  - Status code
  - サーバーエラー
  - ステータスコード
translation_of: Web/HTTP/Status/502
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>502 Bad Gateway</strong></code> サーバーエラーレスポンスコードは、ゲートウェイまたはプロキシとして機能しているサーバーが上流のサーバーから無効なレスポンスを受け取ったことを示しています。</p>

<div class="note">
<p><strong>メモ:</strong> {{interwiki("wikipedia", "Gateway_(telecommunications)", "ゲートウェイ")}}はネットワークの様々なものを指す可能性があり、 502 エラーは通常修正できるものではありませんが、ウェブサーバーまたはアクセスを中継させようとしているプロキシによる修正が必要です。</p>
</div>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">502 Bad Gateway
</pre>

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
   <td>{{RFC("7231", "502 Bad Gateway" , "6.6.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>以下に示す情報は、 MDN の GitHub から取得したものです。 (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.502")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus(504)}}</li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
</ul>
