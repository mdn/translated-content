---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
tags:
  - HTTP
  - Reference
  - Server error
  - Status code
  - サーバーエラー
  - ステータスコード
translation_of: Web/HTTP/Status/503
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>503 Service Unavailable</strong></code> サーバーエラーレスポンスコードで、サーバーがリクエストを処理する準備ができていないことを示します。</p>

<p>一般的な原因は、サーバーがメンテナンス中のために停止していることや、過負荷状態になっていることです。このレスポンスは、一時的な条件に使用する必要があり、 {{HTTPHeader("Retry-After")}} HTTP ヘッダーには、もし可能であれば、サービスの復旧に要する予想時間を含めるべきです。</p>

<div class="note">
<p><strong>メモ:</strong> このレスポンスと共に、問題を分かりやすく説明するページを送信する必要があります。</p>
</div>

<p>503 のステータスはしばしば一時的な状態であり、レスポンスは頻繁にキャッシュされるべきではないため、このレスポンスと共に送信されるキャッシュ関連のヘッダーは注意する必要があります。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">503 Service Unavailable</pre>

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
   <td>{{RFC("7231", "503 Service Unavailable" , "6.6.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>以下に示す情報は、 MDN の GitHub から取得したものです。 (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.503")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Retry-After")}}</li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">HTTP/1.1: Status Code Definitions</a></li>
</ul>
