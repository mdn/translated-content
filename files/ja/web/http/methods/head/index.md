---
title: HEAD
slug: Web/HTTP/Methods/HEAD
tags:
  - HTTP
  - Reference
  - Request method
  - リクエストメソッド
translation_of: Web/HTTP/Methods/HEAD
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP の <code>HEAD</code> メソッド</strong>は、指定されたリソースを HTTP {{HTTPMethod("GET")}} メソッドでリクエストした時に返されるヘッダーをリクエストします。そのようなリクエストによって、例えば大きなリソースをダウンロードするかどうかを事前に決定して、帯域幅を節約したりすることができます。</p>

<p><code>HEAD</code> メソッドへのレスポンスには本文が含まれてはいけません。あった場合は無視しなければなりません。ただし、本文のコンテンツを記述する{{glossary("Entity header", "エンティティヘッダー")}}、例えば {{HTTPHeader("Content-Length")}} などがレスポンスに含まれる場合があります。これらは、空であるべき <code>HEAD</code> レスポンスの本文とは関係ありませんが、 {{HTTPMethod("GET")}} メソッドを使用して同様のリクエストを行った時には、その本文がレスポンスとして返されます。</p>

<p><code>HEAD</code> リクエストの結果が、 {{HTTPMethod("GET")}} リクエストの後でキャッシュされたリソースが古くなっていることを示している場合、 <code>GET</code> リクエストが行われなくてもキャッシュが無効化されます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">リクエストの本文</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">成功時のレスポンスの本文</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe", "安全性")}}</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
   <td>可</td>
  </tr>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>での使用</th>
   <td>不可</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">HEAD /index.html
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
   <td>{{RFC("7231", "HEAD", "4.3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.methods.HEAD")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPMethod("GET")}}</li>
</ul>
