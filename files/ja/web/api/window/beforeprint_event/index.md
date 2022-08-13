---
title: 'Window: beforeprint イベント'
slug: Web/API/Window/beforeprint_event
tags:
  - Event
  - Reference
translation_of: Web/API/Window/beforeprint_event
---
<div>{{APIRef}}</div>

<p><strong><code>beforeprint</code></strong> イベントは、関連する文書が印刷される直前や、印刷プレビューが開く直前に発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("WindowEventHandlers/onbeforeprint", "onbeforeprint")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> の使用例:</p>

<pre class="brush: js">window.addEventListener('beforeprint', (event) =&gt; {
  console.log('Before print');
});</pre>

<p><code>onbeforeprint</code> イベントハンドラープロパティの使用例:</p>

<pre class="brush: js">window.onbeforeprint = (event) =&gt; {
  console.log('Before print');
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#event-beforeprint')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.beforeprint_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Window/afterprint_event", "afterprint")}}</li>
</ul>
