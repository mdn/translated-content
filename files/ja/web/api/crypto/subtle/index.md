---
title: Crypto.subtle
slug: Web/API/Crypto/subtle
tags:
  - API
  - Cryptgraphy
  - Property
  - Read-only
  - Reference
  - Web Crypt API
translation_of: Web/API/Crypto/subtle
---
<p>{{APIRef("Web Crypto API")}}</p>

<p><strong><code>Crypto.subtle</code></strong> 読み取り専用プロパティは、暗号化操作ができる {{domxref("SubtleCrypto")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre>var <em>crypto</em> = crypto.subtle;</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{ SpecName('Web Crypto API', '#dfn-Crypto', 'Crypto.subtle') }}</td>
   <td>{{ Spec2('Web Crypto API') }}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.Crypto.subtle")}}</p>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li>{{domxref("Crypto")}}.</li>
 <li>{{domxref("SubtleCrypto")}}.</li>
 <li><a href="https://vibornoff.github.io/webcrypto-examples/index.html">Compatibility test page</a>.</li>
 <li><a href="https://github.com/vibornoff/webcrypto-shim">Shim for IE11 and Safari</a>.</li>
</ul>
