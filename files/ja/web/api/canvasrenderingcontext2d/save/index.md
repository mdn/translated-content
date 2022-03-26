---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/save
---
<div>{{APIRef}}</div>

<p>Canvas 2D API の <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.save()</code></strong> メソッドは、現在の状態をプッシュしてキャンバスの全体の状態をスタックに保存します。</p>

<h3 id="The_drawing_state" name="The_drawing_state">描画状態</h3>

<p>スタックに保存される描画状態には以下のものが含まれます:</p>

<ul>
 <li>現在の変形行列。</li>
 <li>現在のクリッピング領域。</li>
 <li>現在の点線リスト。</li>
 <li>以下の属性の現在の値: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}、 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}、{{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}、{{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}、{{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}、{{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}、{{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}、{{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}、{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}、{{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction", "direction")}}、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">void <em>ctx</em>.save();</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Saving_the_drawing_state" name="Saving_the_drawing_state">描画状態を保存する</h3>

<p>この例は、<code>save()</code> メソッドを使用してデフォルトの状態を保存して、<code>restore()</code> を使用して復元しているため、デフォルトの状態で長方形を描画できます。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[5]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Save the default state
ctx.save();

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

// Restore the default state
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-save", "CanvasRenderingContext2D.save")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.CanvasRenderingContext2D.save")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.restore()")}}</li>
</ul>
