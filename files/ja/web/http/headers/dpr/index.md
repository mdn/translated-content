---
title: DPR
slug: Web/HTTP/Headers/DPR
tags:
  - Client hints
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/DPR
---
<div>{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}</div>

<p><strong><code>DPR</code></strong> ヘッダーは、CSS ピクセル毎に対応する物理デバイスピクセルの数であるクライアントのデバイスピクセル比 (device pixel ratio、{{Glossary("DPR")}})) を表す<a href="/ja/docs/Glossary/Client_hints">クライアントヒント</a>のヘッダーです。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header","リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name","禁止ヘッダー名")}}</th>
   <td>?</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>注</strong>: クライアントヒントには、安全なオリジン（TLS 経由）でのみアクセスできます。 サーバーは、{{HTTPHeader("Accept-CH")}} および {{HTTPHeader("Accept-CH-Lifetime")}} のレスポンスヘッダーを送信することによって、クライアントから <code>DPR</code> ヘッダーを受信することを選択する必要があります。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">DPR: &lt;number&gt;
</pre>

<h2 id="Examples" name="Examples">例</h2>

<p>サーバーはまず、レスポンスヘッダーとして <code>DPR</code> を含む {{HTTPHeader("Accept-CH")}} と {{HTTPHeader("Accept-CH-Lifetime")}} を送信することによって、<code>DPR</code> ヘッダーを受信するように選択する必要があります。</p>

<pre class="notranslate">Accept-CH: DPR
Accept-CH-Lifetime: 86400
</pre>

<p>次に、後続のリクエストでクライアントは、次のように <code>DPR</code> ヘッダーを送り返す場合があります。</p>

<pre class="notranslate">DPR: 1.0
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.DPR")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Accept-CH")}}</li>
 <li>{{HTTPHeader("Accept-CH-Lifetime")}}</li>
 <li>{{HTTPHeader("Vary")}}</li>
</ul>
