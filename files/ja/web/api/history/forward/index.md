---
title: History.forward()
slug: Web/API/History/forward
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
  - Web
translation_of: Web/API/History/forward
---
<div>{{APIRef("History API")}}</div>

<p><strong><code>History.forward()</code></strong> メソッドにより、ブラウザーはセッション履歴の一つ次のページに移動します。これは {{domxref("History.go", "history.go(1)")}} を呼び出すのと同じ効果があります。</p>

<p>このメソッドは{{glossary("asynchronous", "非同期")}}です。移動が完了したことを検知したい場合は {{event("popstate")}} イベントのリスナーを追加してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">history.forward()</pre>

<h2 id="Examples">例</h2>

<p>以下の例では、セッション履歴の一つ次のステップへ進めるボタンを作成します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;button id='go-forward'&gt;Go Forward!&lt;/button&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">document.getElementById('go-forward').addEventListener('click', e =&gt; {
  window.history.forward();
})</pre>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName("HTML WHATWG", "browsers.html#history", "History")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>{{SpecName("HTML5 W3C")}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "browsers.html#history", "History")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.History.forward")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{domxref("History")}}</li>
 <li><a href="/ja/docs/Web/API/History_API/Working_with_the_History_API">History API での作業</a></li>
</ul>
