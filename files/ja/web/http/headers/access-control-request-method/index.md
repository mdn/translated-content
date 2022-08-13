---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
tags:
  - CORS
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Access-Control-Request-Method
---
<p>{{HTTPSidebar}}</p>

<p><strong><code>Access-Control-Request-Method</code></strong> リクエストヘッダーは、{{glossary("preflight request", "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、実際のリクエストが行われた際にどの HTTP メソッドが使用されるかをサーバーに知らせるために使用されます。プリフライトリクエストは常に OPTIONS であり、実際のリクエストとは同じメソッドを使用しないため、このヘッダーが必要です。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Access-Control-Request-Method: &lt;method&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;method&gt;</dt>
 <dd><a href="/ja/docs/Web/HTTP/Methods">HTTP リクエストメソッド</a>の1つ。例えば {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("DELETE")}} など。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">Access-Control-Request-Method: POST</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Fetch','#http-access-control-request-method', 'Access-Control-Request-Method')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Access-Control-Request-Method")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Request-Headers")}}</li>
</ul>
