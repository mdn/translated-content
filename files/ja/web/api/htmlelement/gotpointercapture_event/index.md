---
title: 'HTMLElement: gotpointercapture イベント'
slug: Web/API/HTMLElement/gotpointercapture_event
tags:
  - DOM
  - Event
  - PointerEvent
  - Reference
translation_of: Web/API/HTMLElement/gotpointercapture_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>gotpointercapture</code></strong> イベントは、{{domxref("Element.setPointerCapture","setPointerCapture()")}} を使用して要素がポインタをキャプチャしたときに発生します。</span></p>

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
   <td>{{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では <code>&lt;p&gt;</code> 要素を取得し、<code>gotpointercapture</code> イベントをリッスンします。 それから、<code>pointerdown</code> イベントの要素に対して <code>setPointerCapture()</code> を呼び出します。 これは <code>gotpointercapture</code> をトリガーします。</p>

<pre class="brush: js">const para = document.querySelector('p');

para.addEventListener('gotpointercapture', () =&gt; {
  console.log('キャプチャされた！')
});

para.addEventListener('pointerdown', (event) =&gt; {
  para.setPointerCapture(event.pointerId);
});
</pre>

<p><code>ongotpointercapture</code> イベントハンドラプロパティを使用した同じ例</p>

<pre class="brush: js">const para = document.querySelector('p');

para.ongotpointercapture = () =&gt; {
  console.log('キャプチャされた！')
};

para.addEventListener('pointerdown', (event) =&gt; {
  para.setPointerCapture(event.pointerId);
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#the-gotpointercapture-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.gotpointercapture_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント
  <ul>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/lostpointercapture_event">lostpointercapture</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerover_event">pointerover</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerenter_event">pointerenter</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerdown_event">pointerdown</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointermove_event">pointermove</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerup_event">pointerup</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointercancel_event">pointercancel</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerout_event">pointerout</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerleave_event">pointerleave</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Web/API/GlobalEventHandlers/ongotpointercapture">ongotpointercapture</a></code> イベントハンドラプロパティ</li>
 <li><code>Document</code> でのこのイベント: <code><a href="/ja/docs/Web/API/Document/gotpointercapture_event">gotpointercapture</a></code> イベント</li>
</ul>
