---
title: KeyboardEvent.isComposing
slug: Web/API/KeyboardEvent/isComposing
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
translation_of: Web/API/KeyboardEvent/isComposing
---
<p>{{APIRef("DOM Events")}}</p>

<p><code><strong>KeyboardEvent.isComposing</strong></code> は読み取り専用プロパティで、 {{jsxref("Boolean")}} 値でイベントが変換セッションの途中、すなわち {{domxref("Element/compositionstart_event", "compositionstart")}} の後かつ {{domxref("Element/compositionend_event", "compositionend")}} の前に発行されたことを示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>bool</var> = <var>event</var>.isComposing;</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var kbdEvent = new KeyboardEvent("syntheticKey", false);
console.log(kbdEvent.isComposing); // false を返す
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('UI Events', '#dom-keyboardevent-iscomposing', 'KeyboardEvent.prototype.isComposing')}}</td>
   <td>{{Spec2('UI Events')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events','#widl-KeyboardEvent-isComposing','KeyboardEvent.prototype.isComposing')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.KeyboardEvent.isComposing")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element/compositionstart_event", "compositionstart")}} および {{domxref("Element/compositionend_event", "compositionend")}}</li>
 <li>{{domxref("KeyboardEvent")}}</li>
</ul>
