---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
tags:
  - API
  - DOM
  - Event
  - Method
  - Propagation
  - リファレンス
  - actions
  - default
  - stopPropagation
translation_of: Web/API/Event/stopPropagation
---
<div>{{APIRef("DOM")}}</div>

**`stopPropagation()`**は {{domxref("Event")}} インターフェイスのメソッドで、現在のイベントのキャプチャリングまたはバブリングの過程におけるこれ以上の伝播を抑止します。ただし、デフォルトの動作の発生を防ぐことはできません。例えば、リンクのクリックはまだ処理されています。これらの動作を停止したい場合は、{{domxref("Event.preventDefault", "preventDefault()")}} メソッドを参照してください。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>event</em>.stopPropagation();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

なし

<h3 id="Return_value" name="Return_value">戻り値</h3>

`undefined`

<h2 id="Examples" name="Examples">例</h2>

このメソッドと DOM におけるイベントの伝播のより詳しい例については、<a href="/ja/docs/Web/API/Document_Object_Model/Examples#Example_5.3A_Event_Propagation">イベントの伝播の例 5</a> を参照してください

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様書</th>
   <th>策定状況</th>
   <th>コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-event-stoppropagation", "Event.stopPropagation()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-event-stoppropagation", "Event.stopPropagation()")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-Event-stopPropagation", "Event.stopPropagation()")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



{{Compat("api.Event.stopPropagation")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture">DOM specification</a> のイベントフローの説明を参照してください。（<a href="http://www.w3.org/TR/DOM-Level-3-Events/#event-flow">DOM Level 3 Events draft</a> には図解があります。）</li>
</ul>
