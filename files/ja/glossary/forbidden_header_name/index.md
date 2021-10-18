---
title: Forbidden header name (禁止ヘッダー名)
slug: Glossary/Forbidden_header_name
tags:
  - Fetch
  - Glossary
  - HTTP
  - Headers
  - forbidden
  - ヘッダー
translation_of: Glossary/Forbidden_header_name
---
<p><dfn>禁止ヘッダー名</dfn>はプログラムから変更することができない <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a>の名前、特に、 HTTP <strong>リクエスト</strong>ヘッダーの名前です (反対に、{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}もあります)。</p>

<p>このようなヘッダーの変更が禁じられているのは、ユーザーエージェントがこれらを完全に制御するからです。特に `<code title="">Sec-</code>` で始まるヘッダー名は、{{domxref("XMLHttpRequest")}} のように <a href="/ja/docs/Web/API/Fetch_API">Fetch</a> を使用して開発者がヘッダーを通じて制御できる {{glossary("API")}} に影響されずに、新しいヘッダーを追加できるよう予約されています。</p>

<p>禁止ヘッダー名は <code>Proxy-</code> や <code>Sec-</code> で始まるもの、または以下の名前の 1 つです。</p>

<ul class="brief">
 <li><code title="">Accept-Charset</code></li>
 <li><code title="">Accept-Encoding</code></li>
 <li><code title="">Access-Control-Request-Headers</code></li>
 <li><code title="">Access-Control-Request-Method</code></li>
 <li><code title="">Connection</code></li>
 <li><code title="">Content-Length</code></li>
 <li><code title="">Cookie</code></li>
 <li><code title="">Cookie2</code></li>
 <li><code title="">Date</code></li>
 <li><code title="">DNT</code></li>
 <li><code title="">Expect</code></li>
 <li><code title="">Feature-Policy</code></li>
 <li><code title="">Host</code></li>
 <li><code title="">Keep-Alive</code></li>
 <li><code title="http-origin">Origin</code></li>
 <li><code title="http-origin">Proxy-</code></li>
 <li><code title="http-origin">Sec-</code></li>
 <li><code title="">Referer</code></li>
 <li><code title="">TE</code></li>
 <li><code title="">Trailer</code></li>
 <li><code title="">Transfer-Encoding</code></li>
 <li><code title="">Upgrade</code></li>
 <li><code title="">Via</code></li>
</ul>

<div class="note">
<p><strong>注</strong>: <code>User-Agent</code> ヘッダーは<a href="https://fetch.spec.whatwg.org/#terminology-headers">仕様としては</a>禁止ではなくなりました (Firefox 43 で実装された forbidden header name list を参照)。 Fetch の <a href="/ja/docs/Web/API/Headers">Headers</a> オブジェクトや、XHR の <a href="/ja/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29">setRequestHeader()</a> などでこのヘッダーを設定することが可能です。ただし、 Chrome は Fetch リクエストからこのヘッダーを暗黙的に削除します（<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=571722">Chromium バグ 571722</a> を参照）。</p>
</div>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Glossary">MDN Web Docs 用語集</a>

  <ol>
   <li>{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}</li>
  </ol>
 </li>
</ol>
</section>
