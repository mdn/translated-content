---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
tags:
  - Access Control
  - Access-Control-Allow-Origin
  - CORS
  - Dealing with CORS
  - HTTP
  - HTTP Header
  - How to Fix CORS
  - Reference
  - Security
  - cross-origin issue
  - header
  - origin
translation_of: Web/HTTP/Headers/Access-Control-Allow-Origin
---
<div>{{HTTPSidebar}}</div>

<p><code><strong>Access-Control-Allow-Origin</strong></code> レスポンスヘッダーは、指定された{{glossary("origin", "オリジン")}}からのリクエストを行うコードでレスポンスが共有できるかどうかを示します。</p>

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

<pre class="syntaxbox notranslate">Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: &lt;origin&gt;
Access-Control-Allow-Origin: null
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>*</code></dt>
 <dd><em>資格情報がない</em>リクエストでは、リテラル値 "<code>*</code>" をワイルドカードとして指定することができます。この値はブラウザーに、すべてのオリジンからのリクエストコードにリソースへのアクセスを許可するように指示します。資格情報がある時にワイルドカードを使用すると、<a href="/ja/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials">エラーを返します</a>。</dd>
 <dt><code>&lt;origin&gt;</code></dt>
 <dd>オリジンを指定します。1つのオリジンだけを指定することができます。サーバーが複数のオリジンからのクライアントに対応している場合、リクエストを行った特定のクライアントのオリジンを返さなければなりません。</dd>
 <dt><code>null</code></dt>
 <dd>オリジンを "null" に指定します。
 <div class="note"><strong>注:</strong> <code>null</code> は<a href="https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null">使用しないでください</a>。「<code>Access-Control-Allow-Origin: "null"</code> を返すと安全であるように見えますが、リソースのオリジンが階層的ではないスキーム (例えば <code>data:</code> や <code>file:</code>) を使用しており、サンドボックス化された文書はすべて "null" となるように定義されています。多くのユーザーエージェントはそのような文書に <code>Access-Control-Allow-Origin: "null"</code> ヘッダーが付いているとアクセスを許可するので、あらゆるオリジンが "null" を持つ悪意のある文書を生成することができます。したがって、 ACAO ヘッダーで "null" 値を使用することは避けるべきです。」</div>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>あらゆるオリジンからのコードにリソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。</p>

<pre class="notranslate">Access-Control-Allow-Origin: *</pre>

<p><code>https://developer.mozilla.org</code> のオリジンからリクエストを行うコードに対して、リソースへのアクセスを許可するようブラウザーに指示するレスポンスには、次のような行を含めてください。</p>

<pre class="notranslate">Access-Control-Allow-Origin: https://developer.mozilla.org</pre>

<p><code>Access-Control-Allow-Origin</code> の値で複数のオリジンに許可を限定するには、サーバー側で {{HTTPHeader("Origin")}} リクエストヘッダーの値をチェックし、許可するオリジンのリストと比較して、 {{HTTPHeader("Origin")}} の値がリスト中にあれば、 <code>Access-Control-Allow-Origin</code> の値に {{HTTPHeader("Origin")}} と同じ値を設定してください。</p>

<h3 id="CORS_and_caching" name="CORS_and_caching">CORS とキャッシング</h3>

<p><code>Access-Control-Allow-Origin</code> の値が ("<code>*</code>" ワイルドカードではなく) 具体的なオリジンであるレスポンスをサーバーが送信する場合、レスポンスには {{HTTPHeader("Vary")}} レスポンスヘッダーに <code>Origin</code> という値を設定して、 <code>Origin</code> リクエストヘッダーの値によって値が変わることをブラウザーに対して示してください。</p>

<pre class="notranslate">Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin</pre>

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
   <td>{{SpecName('Fetch','#http-access-control-allow-origin', 'Access-Control-Allow-Origin')}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Access-Control-Allow-Origin")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Origin")}}</li>
 <li>{{HTTPHeader("Vary")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a></li>
 <li>{{httpheader("Cross-Origin-Resource-Policy")}}</li>
</ul>
