---
title: URLSearchParams.getAll()
slug: Web/API/URLSearchParams/getAll
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - getAll
translation_of: Web/API/URLSearchParams/getAll
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary">{{domxref("URLSearchParams")}} インターフェイスの <strong><code>getAll()</code></strong> メソッドは、指定された検索パラメーターに関連付けられたすべての値を配列として返します。</span></p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">URLSearchParams.getAll(<em>name</em>)</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>name</dt>
 <dd> 返すパラメーターの名前。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("USVString")}} の配列。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 2番目の foo パラメーターを追加します。
params.append('foo', 4);

console.log(params.getAll('foo')) // ["1","4"] を表示します。
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
   <td>{{SpecName('URL', '#dom-urlsearchparams-getall', "getAll()")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.URLSearchParams.getAll")}}</p>
</div>
