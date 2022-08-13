---
title: URL.hash
slug: Web/API/URL/hash
tags:
  - API
  - Hash
  - Property
  - Reference
  - URL
translation_of: Web/API/URL/hash
---
<div>{{ APIRef("URL API") }}</div>

<p>{{domxref("URL")}} インターフェイスの <strong><code>hash</code></strong> プロパティは、<code>'#'</code> の後に URL のフラグメント識別子が続く {{domxref("USVString")}} を返します。</p>

<p>フラグメントは<a href="/ja/docs/Glossary/percent-encoding">パーセントデコード</a>されていません。 URL にフラグメント識別子がない場合、このプロパティには空の文字列 <code>""</code> が含まれます。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.hash;
<em>object</em>.hash = <em>string</em>;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
url.hash // '#Examples' を返します</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#dom-url-hash', 'URL.hash')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.hash")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
