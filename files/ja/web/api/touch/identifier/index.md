---
title: Touch.identifier
slug: Web/API/Touch/identifier
tags:
  - API
  - DOM
  - Identifier
  - Property
  - Read-only
  - Reference
  - touch
translation_of: Web/API/Touch/identifier
---
<p>{{ APIRef("Touch Events") }}{{SeeCompatTable}}</p>

<p><strong><code>Touch.identifier</code></strong> はタッチ面に接触した点を識別する固有の値を返します。この値は、タッチ面上でのこの指 (またはスタイラス) の動きに関わるすべてのイベントに対して、タッチ面から離れるまで一貫したものです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>touchItem</var>.identifier;</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>long</code> で、 {{ domxref("Touch") }} オブジェクトの固有の ID を表します。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">someElement.addEventListener('touchmove', function(e) {
// Iterate through the list of touch points that changed
// since the last event and print each touch point's identifier.
  for (var i=0; i &lt; e.changedTouches.length; i++) {
    console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
  }
}, false);</pre>

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
   <td>{{SpecName('Touch Events 2','#dom-touch-identifier')}}</td>
   <td>{{Spec2('Touch Events 2')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events', '#widl-Touch-identifier')}}</td>
   <td>{{Spec2('Touch Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Touch.identifier")}}</p>
