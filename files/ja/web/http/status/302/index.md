---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
- HTTP
- HTTP Status Code
- Reference
- redirects
translation_of: Web/HTTP/Status/302
---
<div>{{HTTPSidebar}}</div>

<p>HyperText Transfer Protocol (HTTP) の <code><strong>302 Found</strong></code> リダイレクトステータスレスポンスコードは、リクエストされたリソースが一時的に {{HTTPHeader("Location")}} で示された URL へ移動したことを示します。ブラウザーはこのページにリダイレクトしますが、検索エンジンはリソースへのリンクを更新しません (「SEO 用語」では、「リンクジュース」が新しい URL に送られなかったと言われます)。</p>

<p>仕様書ではリダイレクトの際にメソッド (と本文) を変更しないよう要求していますが、すべてのユーザーエージェントが準拠している訳ではありません (まだこの種のバグのあるソフトウェアが見つかるでしょう)。従って、 <code>302</code> コードは {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} メソッドへのレスポンスのみに使用し、 {{HTTPMethod("POST")}} メソッドのままリダイレクトする場合は代わりに {{HTTPStatus("307", "307 Temporary Redirect")}} (こちらでは明確にメソッドの変更が禁止されている) を使用することが推奨されています。</p>

<p>使用されるメソッドを {{HTTPMethod("GET")}} に変更したい場合は、代わりに {{HTTPStatus("303", "303 See Other")}} を使用してください。これは {{HTTPMethod("PUT")}} メソッドへのレスポンスとして、アップロードされたリソースではなく「XYZ のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。</p>

<h2 id="Status">ステータス</h2>

<pre class="brush: html">302 Found</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">題名</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{RFC("7231", "302 Found" , "6.4.3")}}</td>
      <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.status.302")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("307", "307 Temporary Redirect")}} 使用されたメソッドが変更されない場面では、このステータスコードと等価。</li>
 <li>{{HTTPStatus("303", "303 See Other")}} メソッドを {{HTTPMethod("GET")}} に変更する一時リダイレクト。</li>
 <li>{{HTTPStatus("301", "301 Moved Permanently")}} 永久リダイレクト</li>
</ul>
