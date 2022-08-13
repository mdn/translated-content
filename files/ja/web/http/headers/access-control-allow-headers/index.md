---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
tags:
  - CORS
  - HTTP
  - Reference
  - ヘッダー
  - リファレンス
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/Access-Control-Allow-Headers
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Access-Control-Allow-Headers</code></strong> レスポンスヘッダーは、 {{HTTPHeader("Access-Control-Request-Headers")}} を含む{{glossary("preflight request", "プリフライトリクエスト")}}へのレスポンスで、実際のリクエストの間に使用できる HTTP ヘッダーを示すために使用されます。</p>

<p>このヘッダーは、リクエストに {{HTTPHeader("Access-Control-Request-Headers")}} ヘッダーが含まれている時に必要です。</p>

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

<pre class="syntaxbox">Access-Control-Allow-Headers: <em>&lt;header-name&gt;</em>[, <em>&lt;header-name&gt;</em>]*
Access-Control-Allow-Headers: *
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;header-name&gt;</dt>
 <dd>対応しているリクエストヘッダーの名前です。ヘッダーはコンマで区切って、任意の数のリストにすることができます。</dd>
 <dt><code>*</code> (ワイルドカード)</dt>
 <dd>"<code>*</code>" の値は、資格情報のないリクエスト (<a href="/ja/docs/Web/HTTP/Cookies">HTTP Cookie</a> や HTTP の認証情報のないリクエスト) の特殊なワイルドカード値です。認証情報付きのリクエストでは、特別な意味のない "<code>*</code>" というヘッダー名として扱われます。なお、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。</dd>
</dl>

<p>{{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} は常に許可されており、このヘッダーで列挙する必要はありません。しかし、これらのヘッダーを <code>Access-Control-Allow-Headers</code> に列挙することで、これらのヘッダーでも追加の制約の適用を回避することができることに注意してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="A_custom_header" name="A_custom_header">カスタムヘッダー</h3>

<p><code>Access-Control-Allow-Headers</code> ヘッダーがどのように見えるかの例です。<em>CORS セーフリストリクエストヘッダー</em>に加えて、 <code>X-Custom-Header</code> という名前のカスタムヘッダーがサーバーへの CORS リクエストで対応しています。</p>

<pre>Access-Control-Allow-Headers: X-Custom-Header</pre>

<h3 id="Multiple_headers" name="Multiple_headers">複数のヘッダー</h3>

<p>この例は、複数のヘッダーへの対応を指定するときの <code>Access-Control-Allow-Headers</code> を示しています。</p>

<pre>Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests</pre>

<h3 id="Bypassing_additional_restrictions" name="Bypassing_additional_restrictions">追加の制約の回避</h3>

<p>{{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}は常に許可され、ふつうは <code>Access-Control-Allow-Headers</code> に列挙する必要はありませんが、それでも列挙すれば<a href="/ja/docs/Glossary/CORS-safelisted_request_header#Additional_restrictions">追加の制約</a>が適用されることを回避できます。</p>

<pre>Access-Control-Allow-Headers: Accept</pre>

<h3 id="Example_preflight_request" name="Example_preflight_request">プリフライトリクエストの例</h3>

<p><code>Access-Control-Allow-Headers</code> を伴うプリフライトリクエストの例を見てみましょう。</p>

<h4 id="Request" name="Request">リクエスト</h4>

<p>最初にリクエストです。プリフライトリクエストは {{HTTPMethod("OPTIONS")}} リクエストで、次のように3つのプリフライトリクエストヘッダー、 {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, {{HTTPHeader("Origin")}} の組み合わせを含みます。</p>

<pre>OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org</pre>

<h4 id="Response" name="Response">レスポンス</h4>

<p>CORS リクエストが {{HTTPMethod("DELETE")}} メソッドを使うことをサーバーが許可した場合、 {{HTTPHeader("Access-Control-Allow-Methods")}} レスポンスヘッダーで返信し、そこでは <code>DELETE</code> とともに対応するその他のメソッドのリストが含まれます。</p>

<pre>HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400</pre>

<p>要求されたメソッドに対応していない場合は、サーバーはエラーを返します。</p>

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
   <td>{{SpecName('Fetch','#http-access-control-allow-headers', 'Access-Control-Allow-Headers')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Access-Control-Allow-Headers")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Allow-Origin")}}</li>
 <li>{{HTTPHeader("Access-Control-Expose-Headers")}}</li>
 <li>{{HTTPHeader("Access-Control-Allow-Methods")}}</li>
 <li>{{HTTPHeader("Access-Control-Request-Headers")}}</li>
</ul>
