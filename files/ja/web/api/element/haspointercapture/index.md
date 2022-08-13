---
title: Element.hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
tags:
  - API
  - DOM
  - Element
  - Method
  - PointerEvent
  - Reference
  - hasPointerCapture
translation_of: Web/API/Element/hasPointerCapture
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}} インターフェイスの <strong><code>hasPointerCapture()</code></strong> メソッドは、それを呼び出した要素が、与えられたポインタ ID によって識別されるポインタに対するポインタキャプチャを持つかどうかを示します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>targetElement</em>.hasPointerCapture(<em>pointerId</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>pointerId</code></dt>
 <dd>{{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref("Boolean")}} の値 — 要素がポインタキャプチャを持っている場合は <code>true</code>、持っていない場合は <code>false</code> です。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;html&gt;
  &lt;script&gt;
    function downHandler(ev) {
      const el = document.getElementById("target");
      // 要素 'target' はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);

      /* ... */

      // 要素にまだポインタキャプチャがあるかどうかを確認します
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if(pointerCap) {
        // まだポインタキャプチャがあります
      } else {
        // おっと、ポインタキャプチャを失いました！
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  &lt;/script&gt;
  &lt;body onload="init();"&gt;
    &lt;div id="target"&gt;この要素をポインタでタッチします。&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
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
   <td>{{SpecName('Pointer Events 2','#dom-element-haspointercapture', 'hasPointerCapture()')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.Element.hasPointerCapture")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("Element.setPointerCapture()")}}</li>
 <li>{{ domxref("Element.releasePointerCapture()")}}</li>
 <li>{{ domxref("Pointer_events","Pointer Events") }}</li>
</ul>
