---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
tags:
  - HTTP
  - Reference
  - エンティティヘッダー
  - ヘッダー
  - リファレンス
translation_of: Web/HTTP/Headers/Content-Location
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Content-Location</code></strong> ヘッダーは、返されるデータの代替場所を示します。主な用途は<a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a>の結果として送信されたリソースの URL を示すことです。</p>

<p>{{HTTPHeader("Location")}} と <code>Content-Location</code> は異なります。<code>Location</code> はリダイレクトの URL を示し、<code>Content-Location</code> は今後のコンテンツネゴシエーションなしでリソースへのアクセスに使用する直接 URL を示します。 <code>Location</code> はレスポンスに関連付けられたヘッダーで、 <code>Content-Location</code> は返されたデータに関連付けられます。この区別は<a href="#Examples">例</a>がないと抽象的に見えるかもしれません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Entity header", "エンティティヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Content-Location: &lt;url&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;url&gt;</dt>
 <dd>(リクエスト URL に対する) <a href="/ja/docs/Learn/Common_questions/What_is_a_URL#Examples_of_relative_URLs">相対</a> URL または<a href="/ja/docs/Learn/Common_questions/What_is_a_URL#Examples_of_absolute_URLs">絶対</a> URL。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Requesting_data_from_a_server_in_different_formats" name="Requesting_data_from_a_server_in_different_formats">サーバーからのデータのリクエストを様々な形式で行う</h3>

<p>たとえば、サイトの API が {{glossary("JSON")}}, {{glossary("XML")}}, または <a href="https://en.wikipedia.org/wiki/Comma-separated_values">CSV</a> 形式でデータを返すとします。特定の文書の URL が <code>https://example.com/documents/foo</code> である場合、サイトはリクエストの {{HTTPHeader("Accept")}} ヘッダーに応じて <code>Content-Location</code> 用に異なる URL を返すことができます。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">リクエストヘッダー</th>
   <th scope="col">レスポンスヘッダー</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Accept: application/json, text/json</code></td>
   <td><code>Content-Location: /documents/foo.json</code></td>
  </tr>
  <tr>
   <td><code>Accept: application/xml, text/xml</code></td>
   <td><code>Content-Location: /documents/foo.xml</code></td>
  </tr>
  <tr>
   <td><code>Accept: text/plain, text/*</code></td>
   <td><code>Content-Location: /documents/foo.txt</code></td>
  </tr>
 </tbody>
</table>

<p>これらの URL は例です。サイトではクエリ文字列パラメータ：<code>/documents/foo?format=json</code>、<code>/documents/foo?format=xml</code> など、任意の URL パターンでさまざまなファイルタイプを提供できます。</p>

<p>その後クライアントはその特定の URL で JSON バージョンが利用可能であることを覚えて、次に文書を要求するときにコンテンツのネゴシエーションをスキップします。</p>

<p>サーバーは {{HTTPHeader("Accept-Language")}} のような他の<a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a>ヘッダーを考慮することもできます。</p>

<h3 id="Pointing_to_a_new_document_HTTP_201_Created" name="Pointing_to_a_new_document_HTTP_201_Created">新しい文書を指す (HTTP 201 Created)</h3>

<p>サイトの API を通じて新しいブログ投稿を作成しているとします。</p>

<pre>PUT /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
</pre>

<p>サイトは投稿が公開されたことを確認する一般的な成功メッセージを返します。サーバーは <code>Content-Location</code> を使用して新しい投稿がどこにあるかを指定します。</p>

<pre>HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8
Content-Location: /my-first-blog-post

✅ Success!
</pre>

<h3 id="Indicating_the_URL_of_a_transactions_result" name="Indicating_the_URL_of_a_transactions_result">トランザクションの結果の URL を示す</h3>

<p>サイトの別のユーザーに送金するための <code><a href="/ja/docs/Web/HTML/Element/form">&lt;form&gt;</a></code> があるとします。</p>

<pre class="brush: html">&lt;form action="/send-payment" method="post"&gt;
  &lt;p&gt;
    &lt;label&gt;Who do you want to send the money to?
      &lt;input type="text" name="recipient"&gt;
    &lt;/label&gt;
  &lt;/p&gt;

  &lt;p&gt;
    &lt;label&gt;How much?
      &lt;input type="number" name="amount"&gt;
    &lt;/label&gt;
  &lt;/p&gt;

  &lt;button type="submit"&gt;Send Money&lt;/button&gt;
&lt;/form&gt;
</pre>

<p>フォームが送信されると、サイトは取引の領収書を生成します。サーバーは <code>Content-Location</code> を使用して、将来のアクセスのために領収書の URL を示すことができます。</p>

<pre>HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

&lt;!doctype html&gt;
<em>(Lots of HTML…)</em>

&lt;p&gt;You sent $38.00 to ExampleUser.&lt;/p&gt;

<em>(Lots more HTML…)</em>
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
   <td>{{RFC("7231", "Content-Location", "3.1.4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Content-Location")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Location")}}</li>
</ul>
