---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
tags:
  - HTTP
  - HTTP ステータスコード
  - Reference
  - リダイレクト
translation_of: Web/HTTP/Status/307
---
<div>{{HTTPSidebar}}</div>

<p>{{Glossary("HTTP")}} の <code><strong>307 Temporary Redirect</strong></code> リダイレクトステータスレスポンスコードは、リクエストされたリソースが一時的に {{HTTPHeader("Location")}} で示された URL へ移動したことを示します。</p>

<p>元のリクエストのメソッドと本文は、リダイレクトされたリクエストを行う際に再利用されます。使用されるメソッドを {{HTTPMethod("GET")}} に変更したい場合は、代わりに {{HTTPStatus("303", "303 See Other")}} を使用してください。これは {{HTTPMethod("PUT")}} メソッドへのレスポンスで、アップロードされたリソースではないところで「XYZ のアップロードに成功しました」のような確認メッセージを表示したい場合に便利です。</p>

<p> <code>307</code> と {{HTTPStatus("302")}} の唯一の違いは、 <code>307</code> はリダイレクトされたリクエストが行われるときに、メソッドと本文が変更されないことが保証されることです。 <code>302</code> では、一部の古いクライアントは不正にメソッドを {{HTTPMethod("GET")}} に変更してしまいます。 <code>GET</code> 以外のメソッドと <code>302</code> による挙動はウェブで予測することができず、 <code>307</code> の挙動は予測できます。 <code>GET</code> リクエストでは、両者の挙動は同じです。</p>

<h2 id="Status" name="Status">ステータス</h2>

<pre class="syntaxbox">307 Temporary Redirect
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
   <td>{{RFC("7231", "307 Temporary Redirect" , "6.4.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("http.status.307")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("302", "302 Found")}}: このステータスコードと同等ですが、 {{HTTPMethod("GET")}} 以外の時にメソッドが変更されるかもしれない。</li>
 <li>{{HTTPStatus("303", "303 See Other")}}: 使用されるメソッドを {{HTTPMethod("GET")}} に変更する一時リダイレクト。</li>
 <li>{{HTTPStatus("301", "301 Moved Permanently")}}: 永久リダイレクト</li>
</ul>
