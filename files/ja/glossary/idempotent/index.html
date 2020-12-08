---
title: Idempotent (べき等)
slug: Glossary/Idempotent
tags:
  - Glossary
  - HTTP
  - WebMechanics
translation_of: Glossary/Idempotent
---
<p>ある HTTP メソッドが<strong>べき等</strong>であるとは、サーバーが同じ状況にあるとき、特定のリクエストに対して何回でも続けて同じ効果が起こることをいいます。 このことは、べき等なメソッドでは副作用が生じるはずではないと言うこともできます ( 記録などを除く ) 。 適切に実装された {{HTTPMethod("GET")}} メソッド、{{HTTPMethod("HEAD")}} メソッド 、{{HTTPMethod("PUT")}} メソッド、 {{HTTPMethod("DELETE")}} メソッドは<strong>べき等</strong>ですが、 {{HTTPMethod("POST")}} メソッドはそうではありません。 {{Glossary("Safe", "安全な")}}メソッドはすべてべき等です。</p>

<p>べき等であるためには、サーバーにおける裏側の実際の状態だけが考慮されるので、返される状態コードはリクエストごとに異なる場合があります。 例えば、最初に {{HTTPMethod("DELETE")}} メソッドが呼び出された場合は、おそらく {{HTTPStatus("200")}} を返しますが、それ以降は {{HTTPStatus("404")}} を返すでしょう。 RESTful な API の設計において、<em>最後の入力操作を削除する</em>機能を <code>DELETE</code> メソッドを使って実装すべきでないとされるのも、{{HTTPMethod("DELETE")}} メソッドがべき等であることを示唆しています。</p>

<p>なお、メソッドがべき等であっても、サーバーやアプリケーションによってべき等性の破壊が生じることがあります。</p>

<p>例えば、 <code>GET /pageX HTTP/1.1</code> はべき等です。 連続して何度か呼び出しても、クライアントは同じ結果を得ます。</p>

<pre class="notranslate">GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
</pre>

<p><code>POST /add_row HTTP/1.1</code> はべき等ではありません。 何度か呼び出すと、その回数だけ列に追加されていきます。</p>

<pre class="notranslate">POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -&gt; 2行目に追加
POST /add_row HTTP/1.1   -&gt; 3行目に追加
</pre>

<p><code>DELETE /idX/delete HTTP/1.1</code> はべき等ですが、状態コードは数回のリクエストの間に変化することがあります。</p>

<pre class="notranslate">DELETE /idX/delete HTTP/1.1   -&gt; idX が存在する場合は 200 を返却
DELETE /idX/delete HTTP/1.1   -&gt; ちょうど削除されたので 404 を返却
DELETE /idX/delete HTTP/1.1   -&gt; 404 を返却</pre>

<h2 id="詳細情報">詳細情報</h2>

<h3 id="一般知識">一般知識</h3>

<ul>
 <li>HTTP 規格における<a href="https://tools.ietf.org/html/rfc7231#section-4.2.2">べき等</a>の定義</li>
</ul>

<h3 id="技術情報">技術情報</h3>

<ul>
 <li>べき等なメソッド: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}</li>
 <li>べき等でないメソッド: {{HTTPMethod("POST")}},{{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}</li>
</ul>
