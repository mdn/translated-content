---
title: PATCH
slug: Web/HTTP/Methods/PATCH
tags:
  - HTTP
  - Reference
  - リクエストメソッド
translation_of: Web/HTTP/Methods/PATCH
---
<div>{{HTTPSidebar}}</div>

<p><strong>HTTP の <code>PATCH</code> リクエストメソッド</strong>は、リソースへの部分的な変更を適用します。</p>

<p><code>PATCH</code> は {{Glossary("CRUD")}} に見られる "update" の概念にやや類似しています（一般的に、 HTTP は {{Glossary("CRUD")}} とは異なり、両者は混同するべきではありません）。</p>

<p><code>PATCH</code> リクエストは、リソースをどのように修正するかの指示のセットと考えられます。これは {{HTTPMethod("PUT")}} がリソースの完全な表現を送るのと対照的です。</p>

<p><code>PATCH</code> はべき等であるとは限りませんが、そうなる可能性もあります。この点は、常にべき等である {{HTTPMethod("PUT")}} とは対照的です。「べき等」という言葉は、同じリクエストを何度繰り返しても、リソースが同じ状態になることを意味します。 例えば、自動インクリメントするカウンタフィールドがリソースの不可欠な部分である場合、 {{HTTPMethod("PUT")}} は自然にそれを上書きしますが（すべてを上書きするので）、 <code>PATCH</code> は必ずしもそうとは限りません。</p>

<p><code>PATCH</code> は（{{HTTPMethod("PUT")}} のように）他のリソースに対して副作用が発生する<em>場合があります</em>。</p>

<p>サーバーが <code>PATCH</code> に対応しているかどうかを調べるために、サーバーは {{HTTPHeader("Allow")}} または {{HTTPHeader("Access-Control-Allow-Methods")}} （<a href="/ja/docs/Web/HTTP/CORS">CORS</a> の場合）レスポンスヘッダーのリストに追加することで対応状況を知らせることができます。</p>

<p><code>PATCH</code> が許可されていることを示すもう1つの（暗黙の）識別方法は、サーバーが受け付けるパッチ文書の形式を指定する {{HTTPHeader("Accept-Patch")}} があることです。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">リクエストの本文</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">成功時のレスポンスの本文</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Safe", "安全性")}}</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォームforms</a>での利用</th>
   <td>不可</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">PATCH /file.txt HTTP/1.1
</pre>

<h2 id="Example" name="Example">例</h2>

<h3 id="Request" name="Request">リクエスト</h3>

<pre class="line-numbers  language-html">PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[変更の記述]</pre>

<h3 id="Response" name="Response">レスポンス</h3>

<p>成功応答は <a href="https://tools.ietf.org/html/rfc7231#section-6.3">2xx</a> ステータスコードで示されます。</p>

<p>この例の場合、本文が含まれていないため {{HTTPStatus("204")}} コードで成功応答が示されます。もし {{HTTPStatus("200")}} コードであれば本文が含まる可能性があります。 </p>

<pre class="newpage">HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"</pre>

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
   <td>{{RFC("5789", "PATCH")}}</td>
   <td>PATCH Method for HTTP</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("204")}}</li>
 <li>{{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}</li>
 <li>{{HTTPHeader("Accept-Patch")}} – サーバーが受け入れる PATCH ドキュメントの形式を指定します。</li>
</ul>
