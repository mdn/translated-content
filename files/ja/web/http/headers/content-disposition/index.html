---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
tags:
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Content-Disposition
---
<div>{{HTTPSidebar}}</div>

<p>通常の HTTP レスポンスにおける <code><strong>Content-Disposition</strong></code> レスポンスヘッダーは、コンテンツがブラウザーで<em>インライン</em>で表示されることを求められているか、つまり、ウェブページとして表示するか、ウェブページの一部として表示するか、ダウンロードしてローカルに保存する<em>添付ファイル</em>とするかを示します。</p>

<p>本文が <code>multipart/form-data</code> である場合、 <strong><code>Content-Disposition</code></strong> ヘッダーは、マルチパートを構成する各サブパートに付与され、そのフィールドに関する情報を示します。サブパートは{{HTTPHeader("Content-Type")}} ヘッダーで定義された <em>boundary</em> によって区切られます。マルチパートの本文自体に付与した場合、 <code>Content-Disposition</code> は何の意味も持ちません。</p>

<p><code>Content-Disposition</code> ヘッダーはメールにおける MIME メッセージのより広い用途で定義されたものですが、 HTTP のフォームと {{HTTPMethod("POST")}} リクエストに利用可能な引数は一部だけです。ヘッダーの値である <code>form-data</code> と、省略可能なディレクティブ <code>name</code> と <code>filename</code> のみが HTTP の用途で使用することができます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}} (本文の場合)<br>
    {{Glossary("General header", "一般ヘッダー")}} (マルチパート本文の一部の場合)</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="As_a_response_header_for_the_main_body" name="As_a_response_header_for_the_main_body">本文に適用するレスポンスヘッダーとして</h3>

<p>この用法では、<code>inline</code> (既定値。ウェブページの一部として、またはウェブページとして表示可能であることを示します)、もしくは <code>attachment</code> (ダウンロードすべきであることを示します。多くのブラウザーは <code>filename</code> 引数の値を使い、「名前を付けて保存」ダイアログを表示します) を最初の引数して指定します。</p>

<pre class="syntaxbox notranslate">Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"</pre>

<h3 id="As_a_header_for_a_multipart_body" name="As_a_header_for_a_multipart_body">マルチパート本文で使うヘッダーとして</h3>

<p>この用法では最初の引数は常に <code>form-data</code> です。追加のパラメーターは大文字小文字を区別せず、 <code>'='</code> 記号に続けてクォートされた文字列で引数を指定します。複数の引数はセミコロン (<code>';'</code>) で区切ります。</p>

<pre class="syntaxbox notranslate">Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"</pre>

<h3 id="Directives" name="Directives">ディレクティブ</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>このサブパートの内容が参照するフォームの HTML フィールドの名前を含む文字列が続きます。同じフィールド内の複数のファイルを扱う場合 (例えば、 <code>{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}</code> 要素の {{htmlattrxref("multiple", "input")}} 属性)、同じ名前を持つ複数のサブパートが存在することがあります。</dd>
 <dd><code>name</code> の値が <code>'_charset_'</code> という値である場合は、その部分が HTML フィールドではなく、明示的な文字セット情報のない部分に使用される既定の文字セットであることを示します。</dd>
 <dt><code>filename</code></dt>
 <dd>送信された元のファイル名を含む文字列を指定します。このファイル名は常に任意であり、アプリケーションで使用する際は注意が必要です。例えばパス情報を取り除いたり、サーバーのファイルシステムに合わせてファイル名の変換を行ったりすべきです。この引数は、ほとんどの情報を提供します。 <code>Content-Disposition: attachment</code> と組み合わせて使用すると、ユーザーに表示される「名前を付けて保存」ダイアログの既定のファイル名として使用されます。</dd>
 <dt><code>filename*</code></dt>
 <dd>
 <p>引数の <code>filename</code> と <code>filename*</code> の違いは、 <code>filename*</code> が <a href="https://tools.ietf.org/html/rfc5987">RFC 5987</a> で定義されているエンコーディングを使用するという点のみです。単一のヘッダーフィールドの値に <code>filename</code> と <code>filename*</code> の両方が存在する場合は、両方が解釈できる場合、 <code>filename*</code> が <code>filename</code> よりも優先されます。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>「ファイル名を付けて保存」ダイアログを起動するレスポンスです。</p>

<pre class="notranslate">200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

&lt;HTML&gt;Save me!&lt;/HTML&gt;

</pre>

<p>このサンプル HTML ファイルは、ブラウザーに表示されるのではなく、通常のダウンロードとして保存されます。ほとんどのブラウザーは、 (既定で) <code>cool.html</code> というファイル名で保存することを提案します。</p>

<p><code>multipart/form-data</code> 形式を使用して送信された HTML フォームの例で、 <code>Content-Disposition</code> ヘッダーを使用したものです。</p>

<pre class="notranslate">POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
  <tr>
   <td>{{RFC("7578")}}</td>
   <td>Returning Values from Forms: multipart/form-data</td>
  </tr>
  <tr>
   <td>{{RFC("6266")}}</td>
   <td>Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)</td>
  </tr>
  <tr>
   <td>{{RFC("2183")}}</td>
   <td>Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Content-Disposition")}}</p>

<h2 id="Compatibility_notes" name="Compatibility_notes">互換性の注意</h2>

<ul>
 <li>Firefox 5 は、 <code>Content-Disposition</code> レスポンスヘッダーで <code>filename</code> と <code>filename*</code> の両引数が提供されている場合、より効果的に処理します。 <code>filename</code> 引数が先にあった場合でも、提供されたすべての名前を調べ、利用可能な場合は <code>filename*</code> 引数を使用します。以前は、先に一致した引数がより適切な名前が使われていませんでした。 {{bug(588781)}} を参照してください。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Forms">HTML Forms</a></li>
 <li>{{HTTPHeader("Content-Type")}}: マルチパート本文の境界を定義</li>
 <li>{{domxref("FormData")}} インターフェイス: {{domxref("XMLHttpRequest")}} API でフォームデータを操作するために使用</li>
</ul>
