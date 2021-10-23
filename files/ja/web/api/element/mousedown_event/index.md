---
title: 'Element: mousedown イベント'
slug: Web/API/Element/mousedown_event
tags:
  - API
  - DOM
  - Down
  - Element
  - Event
  - Interface
  - MouseEvent
  - Press
  - Reference
  - UI
  - button
  - events
  - mouse
  - mousedown
  - イベント
translation_of: Web/API/Element/mousedown_event
---
<p>{{APIRef}}</p>

<p><strong><code>mousedown</code></strong> イベントは、ポインターが要素の中にあるときにポインティングデバイスのボタンが押下されたときに {{domxref("Element")}} に発行されます。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> {{domxref("Element/click_event", "click")}} イベントとの違いは、 <code>click</code> イベントが完全なクリック操作の後、つまり、同じ要素内でマウスのボタンが押されて離された後で発行されることです。 <code>mousedown</code> はボタンが最初に押された時点で発行されます。</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>{{page("/ja/docs/Web/API/Element/mousemove_event", "Examples")}}</p>

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
   <td>{{SpecName('UI Events', '#event-type-mousedown', 'mousedown')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-mousedown', 'mousedown')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.mousedown_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベントの紹介</a></li>
 <li>{{domxref("Element/mouseup_event", "mouseup")}}</li>
 <li>{{domxref("Element/mousemove_event", "mousemove")}}</li>
 <li>{{domxref("Element/click_event", "click")}}</li>
 <li>{{domxref("Element/dblclick_event", "dblclick")}}</li>
 <li>{{domxref("Element/mouseover_event", "mouseover")}}</li>
 <li>{{domxref("Element/mouseout_event", "mouseout")}}</li>
 <li>{{domxref("Element/mouseenter_event", "mouseenter")}}</li>
 <li>{{domxref("Element/mouseleave_event", "mouseleave")}}</li>
 <li>{{domxref("Element/contextmenu_event", "contextmenu")}}</li>
</ul>
