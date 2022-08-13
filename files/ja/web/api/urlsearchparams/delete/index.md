---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - delete
translation_of: Web/API/URLSearchParams/delete
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary">{{domxref("URLSearchParams")}} インターフェイスの <strong><code>delete()</code></strong> メソッドは、すべての検索パラメーターのリストから、指定された検索パラメーターとそれに関連するすべての値を削除します。</span></p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">URLSearchParams.delete(<em>name</em>)</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>name</dt>
 <dd>削除するパラメーターの名前。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>無効</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2&amp;foo=3');
let params = new URLSearchParams(url.search.slice(1));

// foo パラメーターを削除します。
params.delete('foo'); // クエリー文字列は現在: 'bar=2'</pre>

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
   <td>{{SpecName('URL', '#dom-urlsearchparams-delete', "delete()")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.URLSearchParams.delete")}}</p>
</div>
