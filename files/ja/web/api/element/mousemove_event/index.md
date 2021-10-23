---
title: 'Element: mousemove イベント'
slug: Web/API/Element/mousemove_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - MouseEvent
  - Reference
  - events
  - mouse
  - mousemove
  - move
  - pointer
translation_of: Web/API/Element/mousemove_event
---
<p>{{APIRef}}</p>

<p><span class="seoSummary"><code>mousemove</code> イベントは、マウスなどのポインティングデバイスで、カーソルのホットスポットが要素内にある間に動いた時に発行されるイベントです。</span></p>

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
   <td>{{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p>次の例は、 {{domxref("Element/mousedown_event", "mousedown")}}, <code>mousemove</code>, and {{domxref("Element/mouseup_event", "mouseup")}} イベントを使って HTML5 の要素である <a href="/ja/docs/Web/API/Canvas_API">canvas</a> の上にお絵かきができるものです。機能は単純で、線の太さは 1、線の色は黒に固定されています。</p>

<p>ページが読み込まれると、定数 <code>myPics</code> と <code>context</code> が、それぞれ canvas と描画に使用する 2d context の参照を格納するために生成されます。</p>

<p><code>mousedown</code> イベントが発行されると線の描画が始まります。まずマウスの x 座標と y 座標が変数 <code>x</code> と <code>y</code> に格納され、フラグ <code>isDrawing</code> の値が true になります。</p>

<p>ページ上でマウスを動かすと、 <code>mousemove</code> イベントが発行されます。 <code>isDrawing</code> が true である場合、 <code>drawLine</code> 関数を呼び出して <code>x</code> と <code>y</code> に格納された値から現在の位置まで線を引きます。</p>

<p><code>drawLine()</code> 関数の返値は、座標を再調整して <code>x</code> と <code>y</code> に保存します。</p>

<p><code>mouseup</code> イベントで線の最後の区間を描画し、 <code>x</code> と <code>y</code> をそれぞれを <code>0</code> に設定し、その後の描画を止めるために <code>isDrawing</code> を <code>false</code> に設定します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;h1&gt;マウスイベントを使ったお絵かき&lt;/h1&gt;
&lt;canvas id="myPics" width="560" height="360"&gt;&lt;/canvas&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">// isDrawing が真のとき、マウスを動かすと線を描く
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY はキャンバスの縁からのオフセットの (x,y) です。

// mousedown, mousemove, mouseup にイベントリスナーを追加
myPics.addEventListener('mousedown', e =&gt; {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e =&gt; {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e =&gt; {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 640, 450)}}</p>

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
   <td>{{SpecName('UI Events', '#event-type-mousemove', 'mousemove')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-mousemove', 'mousemove')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.mousemove_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベントの紹介</a></li>
 <li>{{domxref("Element/mousedown_event", "mousedown")}}</li>
 <li>{{domxref("Element/mouseup_event", "mouseup")}}</li>
 <li>{{domxref("Element/click_event", "click")}}</li>
 <li>{{domxref("Element/dblclick_event", "dblclick")}}</li>
 <li>{{domxref("Element/mouseover_event", "mouseover")}}</li>
 <li>{{domxref("Element/mouseout_event", "mouseout")}}</li>
 <li>{{domxref("Element/mouseenter_event", "mouseenter")}}</li>
 <li>{{domxref("Element/mouseleave_event", "mouseleave")}}</li>
 <li>{{domxref("Element/contextmenu_event", "contextmenu")}}</li>
</ul>
