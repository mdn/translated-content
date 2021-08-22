---
title: Cacheable (キャッシュ可能)
slug: Glossary/cacheable
tags:
  - Glossary
  - WebMechanics
  - 用語集
translation_of: Glossary/cacheable
---
<p><strong>キャッシュ可能</strong>なレスポンス (応答) とは、キャッシュすることが可能な HTTP レスポンスで、後で取り出して使用するために格納され、サーバーへの新しいリクエスト (要求) を節約します。 すべての HTTP レスポンスがキャッシュされるわけではなく、キャッシュされる HTTP レスポンスには次の制約があります。</p>

<ul>
 <li>リクエストで使用されるメソッドは、それ自体が<em>キャッシュ可能</em>です ({{HTTPMethod("GET")}} メソッドまたは {{HTTPMethod("HEAD")}} メソッド)。 フレッシュネス (新鮮さ) が示され、{{HTTPHeader("Content-Location")}} ヘッダーが設定されている場合は、{{HTTPMethod("POST")}} または {{HTTPMethod("PATCH")}} リクエストへのレスポンスもキャッシュできますが、これはほとんど実装されていません。 (例えば、 Firefox は <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=109553">https://bugzilla.mozilla.org/show_bug.cgi?id=109553</a> により、それをサポートしていません。) {{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} のような他のメソッドはキャッシュ可能ではなく、その結果をキャッシュすることはできません。</li>
 <li>レスポンスのステータスコードはアプリケーション キャッシュによって<em>認識</em>され、<em>キャッシュ可能</em>と見なされます。キャッシュ可能なステータスコードは、 {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, {{HTTPStatus("501")}} です。</li>
 <li>レスポンスには、<em>具体的なヘッダー</em>があり、たとえば {{HTTPHeader("Cache-Control")}} はキャッシュを抑止します。</li>
</ul>

<p>特定の URI に対するキャッシュ不可能なリクエスト/レスポンスの中には、同じ URI で以前にキャッシュされたレスポンスを無効にするものがあることに注意してください。たとえば、pageX.html への {{HTTPMethod("PUT")}} は、同じ URI に対して、キャッシュされたすべての {{HTTPMethod("GET")}} リクエストまたは {{HTTPMethod("HEAD")}} リクエストを無効化します。</p>

<p>リクエストのメソッドとレスポンスのステータスの両方がキャッシュ可能な場合、リクエストに対するレスポンスをキャッシュすることができます。</p>

<pre class="notranslate">GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
</pre>

<p>{{HTTPMethod("PUT")}} リクエストはキャッシュできません。 さらに、{{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} を介して行われた同じ URI へのリクエストに対して、キャッシュされたデータを無効にします。</p>

<pre class="notranslate">PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
</pre>

<p>レスポンス内の特定の {{HTTPHeader("Cache-Control")}} ヘッダーは、キャッシュすることを防止できます。</p>

<pre class="notranslate">GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)</pre>

<section id="Quick_links">
<ol>
 <li>一般知識
  <ol>
   <li>HTTP 仕様書の <a href="https://tools.ietf.org/html/rfc7231#section-4.2.3">cacheable</a> の定義</li>
  </ol>
 </li>
 <li>技術的な知識
  <ol>
   <li>一般的なキャッシュ可能なメソッドの説明: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}</li>
   <li>一般的なキャッシュ不可能なメソッドの説明: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, often {{HTTPMethod("POST")}}</li>
  </ol>
 </li>
</ol>
</section>
