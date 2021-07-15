---
title: Element.setPointerCapture()
slug: Web/API/Element/setPointerCapture
tags:
  - API
  - DOM
  - Element
  - Method
  - PointerEvent
  - Reference
  - 要素
translation_of: Web/API/Element/setPointerCapture
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>setPointerCapture()</code></strong> は {{domxref("Element")}} インターフェイスのメソッドで、特定の要素をこれ以降のポインターイベントの<em>キャプチャターゲット</em>として指定するために使用します。 ({{domxref("Element.releasePointerCapture()")}} を介して) キャプチャが解放されるまで、それ以降のポインターのイベントはキャプチャ要素をターゲットにします。</p>

<div class="note">ポインターキャプチャを設定している場合、 {{domxref("HTMLElement/pointerover_event", "pointerover")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}}, {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} のイベントはキャプチャターゲットの境界を横断したときにのみ生成されます。これは他のすべての要素でこれらのイベントを抑制する効果があります。</div>

<h3 id="Overview_of_pointer_capture" name="Overview_of_pointer_capture">ポインターキャプチャの概要</h3>

<p><em>ポインターキャプチャ</em>では、ポインターの位置にある通常 (または<em>ヒットテスト</em>) のターゲットではなく、特定の<em>ポインターイベント</em> ({{domxref("PointerEvent")}}) のイベントを特定の要素にターゲットしなおすことができます。 これは、ポインターデバイスの接触が要素から外れた場合でも、 (スクロールやパンなどで) 要素がポインターイベントを受信し続けるようにするために使用できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>targetElement</em>.setPointerCapture(<em>pointerId</em>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>pointerId</var></code></dt>
 <dd>{{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

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
   <td>pointerId が、どのアクティブポインターとも一致しません。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example" name="Example">例</h2>

<p>この例では、 {{HtmlElement("div")}} を押下するとポインターキャプチャが設定されます。これにより、ポインターをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。</p>

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
   <td>{{SpecName('Pointer Events 2','#idl-def-element-setpointercapture-pointerid', 'setPointerCapture')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>不安定版</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#widl-Element-setPointerCapture-void-long-pointerId', 'setPointerCapture')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.setPointerCapture")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element.releasePointerCapture")}}</li>
 <li>{{domxref("Pointer_events","ポインターイベント")}}</li>
</ul>
