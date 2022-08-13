---
title: 'Document: pointerout イベント'
slug: Web/API/Document/pointerout_event
tags:
  - Document
  - Event
  - PointerEvent
  - Reference
  - Web
  - onpointerout
  - pointerout
  - イベント
translation_of: Web/API/Document/pointerout_event
---
<div>{{APIRef}}</div>

<p><code>pointerout</code> イベントはいくつかの理由で発生します。ポインティングデバイスが要素の<em>ヒットテスト</em>境界を出たとき、ホバーに対応していない端末で {{domxref("Document/pointerup_event", "pointerup")}} イベントが発生したとき ({{domxref("Document/pointerup_event", "pointerup")}} を参照)、 {{domxref("Document/pointercancel_event", "pointercancel")}} イベントが発生した後 ({{domxref("Document/pointercancel_event", "pointercancel")}} を参照)、スタイラスペンがデジタイザーで検出可能なホバー範囲を離れたとき、などです。</p>

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
   <td>{{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用した場合</p>

<pre class="brush: js">document.addEventListener('pointerout', (event) =&gt; {
  console.log('Pointer moved out');
});</pre>

<p><code>onpointerout</code> イベントハンドラープロパティを使用した場合</p>

<pre class="brush: js">document.onpointerout = (event) =&gt; {
  console.log('Pointer moved out');
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
   <td>{{SpecName('Pointer Events', '#the-pointerout-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.pointerout_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document/gotpointercapture_event", "gotpointercapture")}}</li>
 <li>{{domxref("Document/lostpointercapture_event", "lostpointercapture")}}</li>
 <li>{{domxref("Document/pointerover_event", "pointerover")}}</li>
 <li>{{domxref("Document/pointerenter_event", "pointerenter")}}</li>
 <li>{{domxref("Document/pointerdown_event", "pointerdown")}}</li>
 <li>{{domxref("Document/pointermove_event", "pointermove")}}</li>
 <li>{{domxref("Document/pointerup_event", "pointerup")}}</li>
 <li>{{domxref("Document/pointercancel_event", "pointercancel")}}</li>
 <li>{{domxref("Document/pointerleave_event", "pointerleave")}}</li>
 <li>{{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} event handler property</li>
 <li><code>HTMLElement</code> を対象としたこのイベント: {{domxref("HTMLElement/pointerout_event", "pointerout")}} event</li>
</ul>
