---
title: If-Match
slug: Web/HTTP/Headers/If-Match
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - リクエストヘッダー
  - 条件付きリクエスト
translation_of: Web/HTTP/Headers/If-Match
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>If-Match</code></strong> リクエストヘッダーは、リクエストを条件付きにします。 {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、リストされた <code>ETag</code> のいずれかと一致する場合にのみ、サーバーは要求されたリソースを返します。{{HTTPMethod("PUT")}} と他の安全ではないメソッドでは、この場合のみリソースをアップロードします。</p>

<p>格納された {{HTTPHeader("ETag")}} との比較では、<em>強い比較アルゴリズム</em>を使用、つまり二つのファイルがバイト単位で同一である場合のみ同一とみなします。列挙された <code>ETag</code> に <code>W/</code> 接頭辞がついている場合は弱いエンティティタグであることを示し、この比較アルゴリズムでの比較は行われません。</p>

<p>一般的な使用例は二つあります。</p>

<ul>
 <li>{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、 {{HTTPHeader("Range")}} ヘッダーと組み合わせて使用され、リクエストされた新しい範囲が以前のものと同じリソースからのものであることを保証することができます。一致しない場合、 {{HTTPStatus("416")}} (Range Not Satisfiable) レスポンスが返されます。</li>
 <li>他のメソッド、特に {{HTTPMethod("PUT")}} の場合は、 <code>If-Match</code> を使用して<a href="https://www.w3.org/1999/04/Editing/#3.1">更新プログラムが失われる問題</a>を防ぐことができます。ユーザーがアップロードしたいリソースの変更が、元のリソースがフェッチされた後に行われた別の変更を上書きしないかどうかを確認できます。リクエストを満たすことができない場合、 {{HTTPStatus("412")}} (Precondition Failed) レスポンスが返されます。</li>
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

<pre class="syntaxbox notranslate">If-Match: &lt;etag_value&gt;
If-Match: &lt;etag_value&gt;, &lt;etag_value&gt;, …
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;etag_value&gt;</dt>
 <dd>リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた ASCII 文字列 (<code>"675af34563dc-tr34"</code> など) です。これらのタグは「弱い」こと、つまり、意味的にはリソースを表現しているが、バイト単位の一致を示していないことを示すために、 <code>W/</code> という接頭辞を付けることができます。しかし、 <strong><code>If-Match</code></strong> ヘッダーでは、弱いエンティティタグは一致することはありません。</dd>
 <dt><code>*</code></dt>
 <dd>アスタリスクは任意のリソースを表す特殊な値です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
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
   <td>{{RFC("7232", "If-Match", "3.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.If-Match")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("ETag")}}</li>
 <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
 <li>{{HTTPHeader("If-Modified-Since")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
 <li>{{HTTPStatus("416")}}<code> Range Not Satisfiable</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
</ul>
