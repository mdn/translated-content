---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - events
  - onlostpointercapture
translation_of: Web/API/GlobalEventHandlers/onlostpointercapture
original_slug: Web/API/GlobalEventHandlers/onlostpointercapture
---
<div>{{ApiRef("HTML DOM")}}</div>

<p><span class="seoSummary">{{domxref("GlobalEventHandlers")}} ミックスインの <strong><code>onlostpointercapture</code></strong> プロパティは、{{event("lostpointercapture")}} イベントを処理する {{event("Event_handlers", "event handler")}} です。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>target</em>.onlostpointercapture = <em>functionRef</em>;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>functionRef</code> は、関数名または<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>です。 関数は {{domxref("PointerEvent")}} オブジェクトを唯一の引数として受け取ります。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">function overHandler(event) {
  // ターゲットイベントの lostpointercapture ハンドラを決定します
  let lostCaptureHandler = event.target.onlostpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.onlostpointercapture = overHandler;
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2', '#the-lostpointercapture-event', 'onlostpointercapture')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.GlobalEventHandlers.onlostpointercapture")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/API/Document/lostpointercapture_event">Document: lostpointercapture</a></code> イベント</li>
 <li><code><a href="/ja/docs/Web/API/HTMLElement/lostpointercapture_event">HTMLElement: lostpointercapture</a></code> イベント</li>
 <li>{{domxref("Element.releasePointerCapture()")}}</li>
</ul>
