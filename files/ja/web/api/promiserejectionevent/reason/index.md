---
title: PromiseRejectionEvent.reason
slug: Web/API/PromiseRejectionEvent/reason
tags:
  - API
  - HTML DOM
  - JavaScript
  - PromiseRejectionEvent
  - Promises
  - Property
  - Reference
  - events
  - reason
translation_of: Web/API/PromiseRejectionEvent/reason
---
<p>{{APIRef("HTML DOM")}}</p>

<p>{{domxref("PromiseRejectionEvent")}}の <strong><code>reason</code></strong> 読み取り専用プロパティは、{{jsxref("Promise.reject()")}} に渡される理由を提供する任意の JavaScript 値、または {{jsxref("Object")}} です。理論的には promise が拒否された理由についての情報を提供します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>reason</em> = <em>PromiseRejectionEvent</em>.reason</pre>

<h3 id="Value" name="Value">値</h3>

<p>なぜ Promise が拒否されたかを理解するのに使う情報を提供する値またはオブジェクト。これはテキスト、リンク、その他ほしいものをつけた、エラーコードからオブジェクトなんでもありえます。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">window.onunhandledrejection = function(e) {
  console.log(e.reason);
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-promiserejectionevent-reason', 'PromiseRejectionEvent.reason')}}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.PromiseRejectionEvent.reason")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{domxref("PromiseRejectionEvent")}}</li>
 <li>{{event("rejectionhandled")}}</li>
 <li>{{event("unhandledrejection")}}</li>
</ul>
