---
title: 'Window: messageerror イベント'
slug: Web/API/Window/messageerror_event
tags:
  - API
  - Event
  - MessageEvent
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/messageerror_event
---
<div>{{APIRef}}</div>

<p><code>messageerror</code> イベントは、解読できないメッセージを受け取った時に {{domxref('Window')}} オブジェクトに発生します。</p>

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
   <td>{{domxref("MessageEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>messageerror</code> は {{domxref("EventTarget/addEventListener", "addEventListener()")}} を使用して待ち受けします。</p>

<pre class="brush: js">window.addEventListener('messageerror', (event) =&gt; {
    console.error(event);
});</pre>

<p>同じですが、 {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} イベントハンドラープロパティを使用する場合です。</p>

<pre class="brush: js">window.onmessageerror = (event) =&gt; {
    console.error(event);
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
   <td>{{SpecName('HTML WHATWG', 'indices.html#event-messageerror')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.messageerror_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Window.postMessage()")}}</li>
 <li>関連イベント: {{domxref("Window/message_event", "message")}}</li>
</ul>
