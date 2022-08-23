---
title: Window.ondevicemotion
slug: conflicting/Web/API/Window/devicemotion_event
tags:
  - API
  - Device Orientation
  - Event Handler
  - Mobile
  - Motion
  - Orientation
  - Property
  - Reference
  - イベントハンドラー
  - プロパティ
  - モバイル
  - 向き
  - 端末の向き
translation_of: Web/API/Window/ondevicemotion
original_slug: Web/API/Window/ondevicemotion
---
<div>{{APIRef("Device Orientation Events")}}</div>

<p>Windows に対して送信される {{domxref("Window/devicemotion_event", "devicemotion")}} イベントのためのイベントハンドラーです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.ondevicemotion = <var>funcRef</var>;</pre>

<p><code>funcRef</code> のところは関数への参照です。この関数は発生した動きを説明する {{DOMxRef("DeviceMotionEvent")}} オブジェクトを受け取ります。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName("Device Orientation")}}</td>
   <td>{{Spec2("Device Orientation")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.ondevicemotion")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Window/devicemotion_event", "devicemotion")}}</li>
 <li>{{DOMxRef("DeviceMotionEvent")}}</li>
 <li><a href="/ja/docs/Web/API/Detecting_device_orientation">端末の向きの検出</a></li>
</ul>
