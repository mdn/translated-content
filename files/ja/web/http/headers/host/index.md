---
title: Host
slug: Web/HTTP/Headers/Host
tags:
  - HTTP
  - Reference
  - ヘッダー
  - リクエストヘッダー
translation_of: Web/HTTP/Headers/Host
---
<div>{{HTTPSidebar}}</div>

<p><code><strong>Host</strong></code> リクエストヘッダーは、リクエストが送信される先のサーバーのホスト名とポート番号を指定します。</p>

<p>ポート番号が指定されなかった場合は、要求されたサービスの既定のポート（例えば HTTPS の URL であれば<code>443</code>、 HTTP の URL であれば <code>80</code>）とみなされます。</p>

<p><code>Host</code> ヘッダー項目はすべての HTTP/1.1 リクエストメッセージで送信する必要があります。 HTTP/1.1 リクエストメッセージに <code>Host</code> ヘッダー項目がなかったり、二つ以上あったりした場合は {{HTTPStatus("400")}} (Bad Request) ステータスコードが返されることがあります。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Host: &lt;host&gt;:&lt;port&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;host&gt;</dt>
 <dd>（仮想ホストの）サーバーのドメイン名。</dd>
 <dt>&lt;port&gt; {{optional_inline}}</dt>
 <dd>サーバーが待受けしている TCP のポート番号。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">Host: developer.mozilla.org</pre>

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
   <td>{{RFC("7230", "Host", "5.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Host")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPStatus("400")}}</li>
 <li>{{HTMLElement("base")}}</li>
</ul>
