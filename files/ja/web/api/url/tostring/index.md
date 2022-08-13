---
title: URL.toString()
slug: Web/API/URL/toString
tags:
  - API
  - Method
  - Reference
  - Stringifier
  - URL
  - toString()
translation_of: Web/API/URL/toString
---
<div>{{ApiRef("URL API")}}</div>

<p><code>URL.toString()</code> 文字列化メソッドは、URL 全体を含む {{domxref("USVString")}} を返します。 これは事実上、{{domxref("URL.href")}} の読み取り専用バージョンです。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>url</em>.toString();</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js"><span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body"><span class="cm-keyword">const</span> <span class="cm-def">url</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">URL</span>(<span class="cm-string">"https://developer.mozilla.org/en-US/docs/Web/API/URL/toString"</span>);
<span class="cm-variable">url</span>.<span class="cm-property">toString</span>() // URL を文字列として返します</span></span></span>
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
   <td>{{SpecName('URL', '#URL-stringification-behavior', 'stringifier')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.toString")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
