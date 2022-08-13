---
title: Element.releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
tags:
  - API
  - DOM
  - Element
  - Method
  - PointerEvent
  - Reference
translation_of: Web/API/Element/releasePointerCapture
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}} インターフェイスの <strong><code>releasePointerCapture()</code></strong> メソッドは、特定の（{{domxref("PointerEvent")}}）<em>ポインタ</em>に対して以前に設定された<em>ポインタキャプチャ</em>を解放（停止）します。</span></p>

<p><em>ポインタキャプチャ</em>の説明と特定の要素に設定する方法については、{{domxref("Element.setPointerCapture","Element.setPointerCapture()")}} メソッドを参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>targetElement</em>.releasePointerCapture(<em>pointerId</em>);
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>pointerId</code></dt>
 <dd>{{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>このメソッドは <code>undefined</code> を返します。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidPointerId</code></td>
   <td>pointerId は、どのアクティブポインタとも一致しません。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>この例では、{{HtmlElement("div")}} を押下するとポインタキャプチャが設定されます。 これにより、ポインタをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。</p>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="slider"&gt;SLIDE ME&lt;/div&gt;</pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css">div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbe;
}</pre>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js">function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2','#idl-def-element-releasepointercapture-pointerid', 'releasePointerCapture')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>不安定版</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#idl-def-element-releasepointercapture-pointerid', 'releasePointerCapture')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.Element.releasePointerCapture")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{ domxref("Element.setPointerCapture","Element.setPointerCapture()") }}</li>
 <li>{{ domxref("Pointer_events","Pointer Events") }}</li>
</ul>
