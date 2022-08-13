---
title: URLSearchParams()
slug: Web/API/URLSearchParams/URLSearchParams
tags:
  - API
  - Constructor
  - Reference
  - URL API
  - URLSearchParams
translation_of: Web/API/URLSearchParams/URLSearchParams
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary"><strong><code>URLSearchParams()</code></strong> コンストラクターは、新しい {{domxref("URLSearchParams")}} オブジェクトを作成して返します。 先頭の <code>'?'</code> 文字は無視されます。</span></p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>URLSearchParams</em> = new URLSearchParams(<em>init</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><em><code>init</code></em> {{optional_inline}}</dt>
 <dd>{{domxref("USVString")}} のインスタンス、{{domxref("URLSearchParams")}} のインスタンス、{{domxref("USVString")}} のシーケンス、または {{domxref("USVString")}} を含むレコード。 <code>URLSearchParams</code> インスタンスの使用は推奨されないことに注意してください。 ブラウザーは単に <em><code>init</code></em> に <code>USVString</code> を使用するようになります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("URLSearchParams")}} のインスタンス。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、URL 文字列から {{domxref("URLSearchParams")}} オブジェクトを作成する方法を示しています。</p>

<pre class="brush: js">// 文字列リテラルを渡す
var url = new URL('https://example.com?foo=1&amp;bar=2');
// window.location から取得
var url2 = new URL(window.location);

// url.search を介してパラメーターを取得し、コンストラクターに渡す
var params = new URLSearchParams(url.search);
var params2 = new URLSearchParams(url2.search);

// シーケンスを渡す
var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

// レコードを渡す
var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('URL', '#dom-urlsearchparams-urlsearchparams', "URLSearchParams()")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.URLSearchParams.URLSearchParams")}}</p>
</div>
