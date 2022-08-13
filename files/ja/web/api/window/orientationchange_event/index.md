---
title: 'Window: orientationchange イベント'
slug: Web/API/Window/orientationchange_event
tags:
  - API
  - Event
  - Reference
  - Sensors
  - Window
  - onorientationchange
  - イベント
translation_of: Web/API/Window/orientationchange_event
---
<div>{{APIRef}}</div>

<p><code>orientationchange</code> イベントは、端末の向きが変化した時に発生します。</p>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラー</th>
   <td>{{domxref("Window/onorientationchange", "onorientationchange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p><code>orientationchange</code> イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。</p>

<pre class="brush:js;">window.addEventListener("orientationchange", function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
});
</pre>

<p>または、 {{domxref("Window/onorientationchange", "onorientationchange")}} イベントハンドラープロパティを使用します。</p>

<pre class="brush: js">window.onorientationchange = function() {
  console.log("端末の向きが " + screen.orientation.angle + "になりました。");
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Compat', '#event-orientationchange', 'orientationchange')}}</td>
   <td>{{Spec2('Compat')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Window.orientationchange_event")}}</p>
