---
title: 'Document: pointerup event'
slug: Web/API/Document/pointerup_event
tags:
  - API
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerup
  - pointerup
  - イベント
  - ポインター
translation_of: Web/API/Document/pointerup_event
---
<div>{{APIRef}}</div>

<p><code>pointerup</code> イベントは、ポインターがアクティブではなくなったときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>はい</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("PointerEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用した場合</p>

<pre class="brush: js">document.addEventListener('pointerup', (event) =&gt; {
  console.log('Pointer up');
});</pre>

<p><code>onpointerup</code> イベントハンドラープロパティを使用した場合</p>

<pre class="brush: js">document.onpointerup = (event) =&gt; {
  console.log('Pointer up');
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
   <td>{{SpecName('Pointer Events', '#the-pointerup-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.pointerup_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document/gotpointercapture_event", "gotpointercapture")}}</li>
 <li>{{domxref("Document/lostpointercapture_event", "lostpointercapture")}}</li>
 <li>{{domxref("Document/pointerover_event", "pointerover")}}</li>
 <li>{{domxref("Document/pointerenter_event", "pointerenter")}}</li>
 <li>{{domxref("Document/pointerdown_event", "pointerdown")}}</li>
 <li>{{domxref("Document/pointermove_event", "pointermove")}}</li>
 <li>{{domxref("Document/pointercancel_event", "pointercancel")}}</li>
 <li>{{domxref("Document/pointerout_event", "pointerout")}}</li>
 <li>{{domxref("Document/pointerleave_event", "pointerleave")}}</li>
 <li>{{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} イベントハンドラープロパティ</li>
 <li><code>HTMLElement</code> を対象としたこのイベント: {{domxref("HTMLElement/pointerup_event", "pointerup")}} イベント</li>
</ul>
