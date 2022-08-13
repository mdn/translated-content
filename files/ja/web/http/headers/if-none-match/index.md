---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
tags:
  - Conditional Requests
  - HTTP
  - HTTP Header
  - Reference
  - Request header
translation_of: Web/HTTP/Headers/If-None-Match
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>If-None-Match</code></strong> リクエストヘッダーは、リクエストを条件付きにします。 {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、指定されたものの中に要求されたリソースの {{HTTPHeader("ETag")}} に一致するものがない場合のみ、サーバーはリソースを {{HTTPStatus("200")}} ステータスで返します。その他のメソッドの場合、最終的に存在するリソースの {{HTTPHeader("ETag")}} が列挙されたいずれの値とも一致しない場合にのみ処理します。</p>

<p>{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、条件が満たされなかったら、サーバーは HTTP ステータスコード 304 (Not Modified) を返さなければなりません。サーバー側の変更を適用するメソッドの場合、ステータスコード 412 (Precondition Failed) が使用されます。なお、 304 レスポンスを生成するサーバーは、 Cache-Control, Content-Location, Date, ETag, Expires, Vary の各ヘッダーフィールドについて、同じリクエストに対して 200 (OK) レスポンスで送信されるものを生成しなければなりません。</p>

<p>格納されている {{HTTPHeader("ETag")}} との比較では、<em>弱い比較アルゴリズム</em>を使用、つまり二つのファイルの内容が同等であれば等しいとみなします。バイト単位で等しい必要はありません。たとえば、フッターの作成日が異なる二つのページは、同一と見なされます。</p>

<p>{{HTTPHeader("If-Modified-Since")}} と一緒に使用した場合、 <strong><code>If-None-Match</code></strong> が優先されます (サーバーが対応している場合)。</p>

<p>一般的な使用例は二つあります。</p>

<ul>
 <li>{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、関連付けられた {{HTTPHeader("ETag")}} を持つキャッシュされたエンティティを更新するため。</li>
 <li>他のメソッド、特に {{HTTPMethod("PUT")}} の場合、 <code>If-None-Match</code> は <code>*</code> 値と共に使用され、存在するかどうか分かっていないファイルを保存する際に、以前他のアップロードが行われておらず、以前 PUT されたデータを失わないことを保証するために使用することができます。この問題は、 <a href="https://www.w3.org/1999/04/Editing/#3.1">lost update problem</a> の一種です。</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">If-None-Match: "&lt;etag_value&gt;"
If-None-Match: "&lt;etag_value&gt;", "&lt;etag_value&gt;", …
If-None-Match: *</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;etag_value&gt;</dt>
 <dd>リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた ASCII 文字列 (<code>"675af34563dc-tr34"</code> など) であり、 <code>W/</code> の接頭辞を付けると、弱い比較アルゴリズムを使用するべきであることを示すことができます (このアルゴリズムだけを使用する場合は <code>If-None-Match</code> では意味がありません)。</dd>
 <dt><code>*</code></dt>
 <dd>アスタリスクは任意のリソースを表す特殊な値です。通常 {{HTTPMethod("PUT")}} を使用するリソースのアップロードの場合、その識別子を持つ別なリソースがすでにアップロードされていることをする場合にのみ有用です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
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
   <td>{{RFC("7232", "If-None-Match", "3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.If-None-Match")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("ETag")}}</li>
 <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
 <li>{{HTTPHeader("If-Modified-Since")}}</li>
 <li>{{HTTPHeader("If-Match")}}</li>
 <li>{{HTTPStatus("304")}}<code> Not Modified</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
</ul>
