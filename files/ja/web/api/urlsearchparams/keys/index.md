---
title: URLSearchParams.keys()
slug: Web/API/URLSearchParams/keys
tags:
  - API
  - Method
  - Reference
  - URL API
  - URLSearchParams
translation_of: Web/API/URLSearchParams/keys
---
<p>{{APIRef("URL API")}}</p>

<p><span class="seoSummary">{{domxref("URLSearchParams")}} インターフェイスの <strong><code>keys()</code></strong> メソッドは、このオブジェクトに含まれるすべてのキーを反復処理できる {{jsxref("Iteration_protocols",'iterator')}} を返します。 キーは {{domxref("USVString")}} オブジェクトです。</span></p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">searchParams.keys();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Iteration_protocols","iterator")}} を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js;highlight:[5]">// テスト用の URLSearchParams オブジェクトの作成
var searchParams = new URLSearchParams("key1=value1&amp;key2=value2");

// キーの表示
for(var key of searchParams.keys()) {
  console.log(key);
}
</pre>

<p>結果は次のとおりです。</p>

<pre>key1
key2</pre>

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
   <td>{{SpecName('URL', '#interface-urlsearchparams', "keys() (see \"iterable\")")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.URLSearchParams.keys")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイス。</li>
</ul>
