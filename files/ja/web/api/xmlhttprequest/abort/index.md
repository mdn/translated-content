---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
tags:
  - AJAX
  - API
  - HTTP
  - HttpRequest
  - XMLHttpRequest
  - abort
  - cancel
  - メソッド
  - リファレンス
  - 停止
translation_of: Web/API/XMLHttpRequest/abort
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p><code><strong>XMLHttpRequest.abort()</strong></code> メソッドは、すでに送信された要求を中止します。要求が中止されたら、 {{domxref("XMLHttpRequest.readyState", "readyState")}} が {{domxref("XMLHttpRequest.UNSENT")}} (0) に変化し、要求の {{domxref("XMLHttpRequest.status", "status")}} コードが0に設定されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">XMLHttpRequest.abort()</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code></p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、 MDN のホームページからコンテンツを読み込み始め、ある条件が発生したときに、 <code>abort()</code> を呼び出すことで転送を中止します。</p>

<pre class="brush: js">var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#the-abort()-method')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.XMLHttpRequest.abort")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の利用</a></li>
</ul>
