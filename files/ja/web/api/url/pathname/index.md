---
title: URL.pathname
slug: Web/API/URL/pathname
tags:
  - API
  - Property
  - Reference
  - URL
  - pathname
translation_of: Web/API/URL/pathname
---
<div>{{ApiRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} インターフェイスの <strong><code>pathname</code></strong> プロパティは、最初の <code>'/'</code> とその後に続く URL のパス（またはパスがない場合は空の文字列）を含む {{domxref("USVString")}} です。</span></p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.pathname;
<em>object</em>.pathname = <em>string</em>;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname');
var result = url.pathname; // 戻り値: "/en-US/docs/Web/API/URL/pathname"
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#dom-url-pathname', 'URL.pathname')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.pathname")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
