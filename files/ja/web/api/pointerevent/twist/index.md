---
title: PointerEvent.twist
slug: Web/API/PointerEvent/twist
tags:
  - API
  - DOM
  - Pointer Events
  - PointerEvent
  - Property
  - Reference
  - twist
translation_of: Web/API/PointerEvent/twist
---
<div>{{ APIRef("Pointer Events") }}</div>

<p><span class="seoSummary">{{domxref("PointerEvent")}} インターフェイスの <strong><code>twist</code></strong> 読み取り専用プロパティは、ポインタ（例えばペン/スタイラス）の主軸を中心とした時計回りの回転を度数で表します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>twist</em> = <em>pointerEvent</em>.twist;
</pre>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>トランスデューサ（ポインタ）に適用される、ねじれの量を度数で表す <code>long</code> 値。 値の範囲は <code>0</code> から <code>359</code> です。 <code>twist</code> を報告しないデバイスの場合、値は <code>0</code> です。</p>

<h2 id="Example" name="Example">例</h2>

<p>{{event("pointerdown")}} イベントが発生すると、イベントの <code>twist</code> プロパティの値に応じてさまざまな関数が呼び出されます。</p>

<pre class="brush: js">someElement.addEventListener('pointerdown', function(event) {
  if (event.twist == 0) {
    // ねじれなし
    process_no_twist(event);
  } else {
    // デフォルト
    process_twist(event);
  }
}, false);
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
   <td>{{SpecName('Pointer Events 2','#dom-pointerevent-twist', 'twist')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.PointerEvent.twist")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("Touch.force") }}</li>
</ul>
