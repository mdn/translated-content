---
title: Expires
slug: Web/HTTP/Headers/Expires
tags:
  - Caching
  - HTTP
  - HTTPResponse
  - header
  - キャッシング
  - ヘッダー
  - レスポンス
translation_of: Web/HTTP/Headers/Expires
---
<div>{{HTTPSidebar}}</div>

<p><code><strong>Expires</strong></code> ヘッダーには、レスポンスが古くなると見なされる日時が入ります。</p>

<p>値 0 のような無効な日付は過去の日付を表し、リソースがすでに有効期限切れであることを意味します。</p>

<div class="note">レスポンスに <code>max-age</code> または <code>s-maxage</code> ディレクティブを持つ {{HTTPHeader("Cache-Control")}} ヘッダーがある場合、<code>Expires</code> ヘッダーは無視されます。</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Expires: &lt;http-date&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;http-date&gt;</dt>
 <dd>
 <p>HTTP-date タイムスタンプ</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre>Expires: Wed, 21 Oct 2015 07:28:00 GMT</pre>

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
   <td>{{RFC("7234", "Expires", "5.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Expires")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Age")}}</li>
</ul>
