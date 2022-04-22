---
title: 'HTMLElement: pointerleave イベント'
slug: Web/API/HTMLElement/pointerleave_event
tags:
  - DOM
  - Event
  - PointerEvent
  - Reference
translation_of: Web/API/HTMLElement/pointerleave_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>pointerleave</code> イベントは、ポインティングデバイスが要素のヒットテスト境界から外れると発生します。</span> ペンデバイスの場合、このイベントは、スタイラスがデジタイザによって検出可能なホバー範囲を離れたときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("PointerEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerleave">onpointerleave</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.addEventListener('pointerleave', (event) =&gt; {
  console.log('ポインタが要素から離脱しました');
});</pre>

<p><code>onpointerleave</code> イベントハンドラプロパティを使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.onpointerleave = (event) =&gt; {
  console.log('ポインタが要素から離脱しました');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#the-pointerleave-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.pointerleave_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/gotpointercapture_event">gotpointercapture</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/lostpointercapture_event">lostpointercapture</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerover_event">pointerover</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerenter_event">pointerenter</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerdown_event">pointerdown</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointermove_event">pointermove</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerup_event">pointerup</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointercancel_event">pointercancel</a></code></li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerout_event">pointerout</a></code></li>
 <li><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerleave">onpointerleave</a></code> イベントハンドラプロパティ</li>
 <li><code>Document</code> でのこのイベント: <code><a href="/ja/docs/Web/API/Document/pointerleave_event">pointerleave</a></code> イベント</li>
</ul>
