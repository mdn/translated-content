---
title: POST
slug: Web/HTTP/Methods/POST
tags:
  - HTTP
  - HTTP リクエストメソッド
  - Reference
  - Request method
  - リファレンス
translation_of: Web/HTTP/Methods/POST
---
<p>{{HTTPSidebar}}</p>

<p><strong>HTTP の <code>POST</code> メソッド</strong>は、サーバーにデータを送信します。リクエストの本文のタイプは {{HTTPHeader("Content-Type")}} ヘッダーで示されます。</p>

<p>{{HTTPMethod("PUT")}} と <code>POST</code> との違いは、 <code>PUT</code> がべき等であることです。一度呼び出しても複数回呼び出しても成功すれば同じ効果になる (<em>副</em>作用がない) のに対して、同じ <code>POST</code> に成功すると、複数回の注文を行うような、追加の効果が出ます。</p>

<p><code>POST</code> リクエストは、ふつう <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>を介して送信され、サーバーに変化をもたらします。この場合、 {{HTMLElement("form")}} 要素の {{htmlattrxref("enctype", "form")}} 属性もしくは、 {{HTMLElement("input") }} 又は {{HTMLElement("button")}} 要素の {{htmlattrxref("formenctype", "input")}} 属性に適切な文字列を設定することでコンテンツタイプを選択します。</p>

<ul>
 <li><code>application/x-www-form-urlencoded</code>: キーと値は、その間に <code>'='</code> がある形でキーと値の組になり、 <code>'&amp;'</code> で区切られてエンコードされます。キーや値の英数字以外の文字は、{{glossary("percent-encoding", "パーセントエンコーディング")}}されます。このため、このタイプはバイナリデータを扱うのには向きません (代わりに <code>multipart/form-data</code> を使用してください)</li>
 <li><code>multipart/form-data</code>: それぞれの値はデータのブロック ("body part") として送信され、ユーザーエージェントが定義するデリミター ("boundary") がそれぞれの部分を区切ります。キーはそれぞれの部分の <code>Content-Disposition</code> ヘッダーの中で与えられます。</li>
 <li><code>text/plain</code></li>
</ul>

<p><code>POST</code> リクエストが HTML フォーム以外の方法 — {{domxref("XMLHttpRequest")}} など — で送信された場合は、本文はあらゆるタイプを取ることができます。 HTTP 1.1 仕様書で記述されている通り、 <code>POST</code> は以下のような機能をカバーする統一的なメソッドになるよう設計されています。</p>

<ul>
 <li>既存のリソースの注釈</li>
 <li>掲示板、ニュースグループ、メーリングリスト、又は同様の記事グループへの投稿</li>
 <li>サインアップモーダルからの新規ユーザーの追加</li>
 <li>フォームの送信結果などの結果などにおける、データを扱うプロセスへのデータブロックの受け渡し</li>
 <li>追加操作によるデータベースの拡張</li>
</ul>

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
   <td>新鮮な情報が含まれている場合のみ</td>
  </tr>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>での使用</th>
   <td>可</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">POST /test
</pre>

<h2 id="Example" name="Example">例</h2>

<p>既定の <code>application/x-www-form-urlencoded</code> コンテンツタイプを使用した単純なフォームです。</p>

<pre class="line-numbers  language-html notranslate">POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&amp;field2=value2</pre>

<p><code>multipart/form-data</code> コンテンツタイプを使用したフォームです。</p>

<pre class="notranslate">POST /test HTTP/1.1
Host: foo.example
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
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
   <td>{{RFC("7231", "POST", "4.3.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
  <tr>
   <td>{{RFC("2046", "Common Syntax", "5.1.1")}}</td>
   <td>Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.methods.POST")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPHeader("Content-Disposition")}}</li>
 <li>{{HTTPMethod("GET")}}</li>
</ul>
