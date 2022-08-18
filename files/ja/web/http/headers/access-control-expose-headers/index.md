---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
tags:
  - CORS
  - HTTP
  - Reference
  - ヘッダー
  - リファレンス
translation_of: Web/HTTP/Headers/Access-Control-Expose-Headers
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Access-Control-Expose-Headers</code></strong> レスポンスヘッダーは、レスポンスの一部としてどのヘッダーを公開するかを、その名前を列挙して示します。</p>

<p>既定では、公開される {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}は7つだけです。</p>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
 <li>{{HTTPHeader("Content-Language")}}</li>
 <li>{{HTTPHeader("Content-Length")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Expires")}}</li>
 <li>{{HTTPHeader("Last-Modified")}}</li>
 <li>{{HTTPHeader("Pragma")}}</li>
</ul>

<p>クライアントが他のヘッダーにアクセスできるようにするには、 <code>Access-Control-Expose-Headers</code> ヘッダーを使用してヘッダーを列挙する必要があります。</p>

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
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Access-Control-Expose-Headers: &lt;header-name&gt;, &lt;header-name&gt;, ...
Access-Control-Expose-Headers: *
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;header-name&gt;</dt>
 <dd>ゼロ個以上の<a href="/ja/docs/Web/HTTP/Headers">ヘッダー名</a>の一覧で、 {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}に含まれないものであり、リソースが使用する可能性があり、公開される可能性があるものです。</dd>
 <dt><code>*</code> (ワイルドカード)</dt>
 <dd>"<code>*</code>" の値は、資格情報のないリクエスト (<a href="/ja/docs/Web/HTTP/Cookies">HTTP Cookie</a> や HTTP の資格情報のないリクエスト) の特殊なワイルドカード値です。資格情報付きのリクエストでは、特別な意味のない "<code>*</code>" というヘッダー名として扱われます。<br>
 なお、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>CORS セーフリストにないレスポンスヘッダーを公開するには、次のように指定します。</p>

<pre>Access-Control-Expose-Headers: Content-Length</pre>

<p><code>X-Kuma-Revision</code> のようなカスタムヘッダーをさらに公開するには、複数のヘッダーをカンマで区切って指定することができます。</p>

<pre>Access-Control-Expose-Headers: Content-Length, X-Kuma-Revision</pre>

<p>資格情報のないリクエストでは、ワイルドカード値を使うこともできます。</p>

<pre>Access-Control-Expose-Headers: *</pre>

<p>但し、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードの対象にならないので、明示的に列挙する必要があります。</p>

<pre>Access-Control-Expose-Headers: *, Authorization</pre>

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
   <td>{{SpecName('Fetch','#http-access-control-expose-headers', 'Access-Control-Expose-Headers')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Access-Control-Expose-Headers")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Allow-Headers")}}</li>
 <li>{{HTTPHeader("Access-Control-Allow-Origin")}}</li>
</ul>
