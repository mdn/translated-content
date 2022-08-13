---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
tags:
  - HTTP
  - Server error
  - Status code
translation_of: Web/HTTP/Status/501
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary">HyperText Transfer Protocol (HTTP) の <code><strong>501 Not Implemented</strong></code> サーバーエラーレスポンスコードは、<strong>サーバーがリクエストを満たすのに必要な機能に対応していないこと</strong>を示します。</span></p>

<p>このステータスは {{HTTPHeader("Retry-After")}} ヘッダーを送信することもでき、いつまでに機能を機能がサポートされているかどうかを確認するためのチェックバックのタイミングを要求元に伝えることができます。</p>

<p><code>501</code> は、サーバーがリクエストメソッドを理解できず、あるリソースに対して対応することができない場合のレスポンスに適切です。サーバーが対応する必要がある (したがって、 <code>501</code> を返す必要がない) メソッドは {{HTTPMethod("GET")}} と {{HTTPMethod("HEAD")}} だけです。</p>

<p>サーバーがそのメソッドを理解して<em>いて</em>、意図的に対応していない場合は、適切なレスポンスは {{HTTPStatus(405, "405 Method Not Allowed")}} です。</p>

<div class="note">
<ul>
 <li>501 エラーは修正できるものではありませんが、アクセスしようとしているウェブサーバーで修正が必要です。</li>
 <li>501 レスポンスは、その他のヘッダーのキャッシュの指示がない限り、既定でキャッシュ可能です。</li>
</ul>
</div>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox notranslate">501 Not Implemented</pre>

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
   <td>{{RFC("7231", "501 Not Implemented" , "6.6.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>以下に示す情報は、 MDN の GitHub から取得したものです。 (<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>).</p>

<p>{{Compat("http.status.501")}}</p>
