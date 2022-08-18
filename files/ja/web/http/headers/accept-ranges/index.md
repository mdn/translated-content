---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - レスポンスヘッダー
  - 範囲リクエスト
translation_of: Web/HTTP/Headers/Accept-Ranges
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <code><strong>Accept-Ranges</strong></code> レスポンスヘッダーは、サーバーが部分的なリクエストに対応していることを周知するために使用するマーカーです。このフィールドの値は、範囲の定義に使用できる単位を示します。</p>

<p><code>Accept-Ranges</code> ヘッダーがあると、ブラウザーは開始から再開するのではなく、中断されたダウンロードを再開しようとする可能性があります。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Accept-Ranges: &lt;range-unit&gt;
Accept-Ranges: none</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>&lt;range-unit&gt;</code></dt>
 <dd>サーバーが対応している範囲の単位を定義します。 <code>bytes</code> は {{RFC("7233")}} で公式に定義されている唯一の範囲の単位ですが、追加の範囲の単位が <a href="https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units">HTTP Range Unit Registry</a> に登録されている可能性があります。</dd>
 <dt><code>none</code></dt>
 <dd>範囲の単位には対応していないことを示し、これはヘッダー自体がないのと等価になりますので、滅多に使用されませんが、 IE9 のように一部のブラウザーでは、ダウンロードマネージャーで一時停止ボタンを無効にしたり削除したりするために使用されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre>Accept-Ranges: bytes
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
   <td>{{RFC("7233", "Accept-Ranges", "2.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Accept-Ranges")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("If-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
 <li><a href="https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units">IANA HTTP Range Unit Registry</a></li>
</ul>
