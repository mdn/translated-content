---
title: URL.search
slug: Web/API/URL/search
tags:
  - API
  - Property
  - Reference
  - Search
  - URL
translation_of: Web/API/URL/search
---
<div>{{ApiRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} インターフェイスの <strong><code>search</code></strong> プロパティは、<em>クエリー文字列</em>とも呼ばれる検索文字列、つまり <code>'?'</code> とその後に続く URL のパラメーターを含む {{domxref("USVString")}} です。</span></p>

<p>最新のブラウザーでは {{domxref("URL.searchParams")}} プロパティを提供して、クエリー文字列からパラメーターを簡単に解析できるようにしています。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <em>searchParams</em> = <em>object</em>.search
<em>url</em>.search = <em>newSearchParams</em></pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">const url = new URL('https://developer.mozilla.org/ja/docs/Web/API/URL/search?q=123');
console.log(url.search); // 戻り値: "?q=123"
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
   <td>{{SpecName('URL', '#dom-url-search', 'URL.search')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.search")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
