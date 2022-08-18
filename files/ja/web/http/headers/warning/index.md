---
title: Warning
slug: Web/HTTP/Headers/Warning
tags:
  - General Header
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Warning
---
<div>{{HTTPSidebar}}</div>

<div class="blockIndicator note">
<p><strong>メモ</strong>: <code>Warning</code> ヘッダーはまもなく非推奨になる予定です。詳しくは <a href="https://github.com/httpwg/http-core/issues/139">Warning (https://github.com/httpwg/http-core/issues/139)</a> や <a href="https://github.com/whatwg/fetch/issues/913">Warning: header &amp; stale-while-revalidate (https://github.com/whatwg/fetch/issues/913)</a> をご覧ください。</p>
</div>

<p><strong><code>Warning</code></strong> は HTTP の一般ヘッダーで、可能性のある問題についてメッセージのステータスによる情報を含みます。一つのレスポンスに複数の <code>Warning</code> ヘッダーが含まれる可能性があります。</p>

<p><code>Warning</code> ヘッダーフィールドは一般的にあらゆるメッセージに適用できますが、一部の警告コードはキャッシュ専用であり、レスポンスメッセージのみに適用することができます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("General header", "一般ヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Warning: &lt;warn-code&gt; &lt;warn-agent&gt; &lt;warn-text&gt; [&lt;warn-date&gt;]
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;warn-code&gt;</dt>
 <dd>3桁の警告番号です。最初の桁は、検証後にレスポンスを格納する際に <code>Warning</code> を削除する必要があるかどうかを示します。
 <ul>
  <li><code>1xx</code> の警告コードは、新鮮さやレスポンスの検証ステータスを表し、キャッシュされる際に削除されます。</li>
  <li>
   <p><code>2xx</code> の警告コードは、検証によって修正されない表現のいくつかの側面を説明しており、レスポンス全体が送信されない限り、検証後もキャッシュによって削除されないことを表します。</p>
  </li>
 </ul>
 </dd>
 <dt>&lt;warn-agent&gt;</dt>
 <dd>
 <p><code>Warning</code> ヘッダーを追加するサーバーやソフトウェアの名前または仮名です (エージェントが不明な場合は "-" になることがあります)。</p>
 </dd>
 <dt>&lt;warn-text&gt;</dt>
 <dd>エラーを説明する助言のテキストです。</dd>
 <dt>&lt;warn-date&gt;</dt>
 <dd>任意。複数の <code>Warning</code> ヘッダーが送信される場合は、 {{HTTPHeader("Date")}} ヘッダーと一致する日付を入れてください。</dd>
</dl>

<h2 id="Warning_codes" name="Warning_codes">警告コード</h2>

<p><a href="http://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml">HTTP Warn Codes registry at iana.org</a> では、警告コードの名前空間を定義しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">コード</th>
   <th scope="col">テキスト</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>110</td>
   <td>Response is Stale</td>
   <td>キャッシュによって提供されたレスポンスが古くなっている (有効期限が切れている)。</td>
  </tr>
  <tr>
   <td>111</td>
   <td>Revalidation Failed</td>
   <td>サーバーへ到達できなかったため、レスポンスの検証をしようとして失敗した。</td>
  </tr>
  <tr>
   <td>112</td>
   <td>Disconnected Operation</td>
   <td>キャッシュがネットワークの他の部分から切断された。</td>
  </tr>
  <tr>
   <td>113</td>
   <td>Heuristic Expiration</td>
   <td>キャッシュが24時間より長い保持時間を選択しており、かつレスポンスの時間が24時間よりも長い場合。</td>
  </tr>
  <tr>
   <td>199</td>
   <td>Miscellaneous Warning</td>
   <td>任意で特定されていない警告</td>
  </tr>
  <tr>
   <td>214</td>
   <td>Transformation Applied</td>
   <td>コンテンツのエンコーディング、メディア種別など、表現方法の変換を行った場合にプロキシが追加します。</td>
  </tr>
  <tr>
   <td>299</td>
   <td>Miscellaneous Persistent Warning</td>
   <td>199 と同様だが、永続的な警告を含む場合</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<pre>Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
  <tr>
   <td>{{RFC("7234", "Warning", "5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Warning")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Date")}}</li>
 <li><a href="/ja/docs/Web/HTTP/Status">HTTP response status codes</a></li>
</ul>
