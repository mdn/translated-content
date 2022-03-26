---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
translation_of: Web/API/CanvasRenderingContext2D/rect
---
<div>{{APIRef}}</div>

<p>Canvas 2D APIの<code><strong>CanvasRenderingContext2D</strong></code><strong><code>.rect()</code></strong> メソッドは、2Dウィンドウのサイズ(width, height)や開始位置(x, y)を定義できるメソッドです。</p>

<p>ウィンドウのサイズと開始位置をもとに直線で引かれたウィンドウが2Dウィンドウになり、<code>fill</code>メソッドでウィンドウ内の塗りつぶしをしたり、<code>stroke</code>メソッドでウィンドウの外周を直線で囲み、可視化することなどできます。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">void <var><em>ctx</em>.rect(x, y, width, height);</var>
</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>
 <p>2Dウィンドウの開始位置(x軸)</p>
 </dd>
 <dt><code>y</code></dt>
 <dd>
 <p>2Dウィンドウの開始位置(y軸)</p>
 </dd>
 <dt><code>width</code></dt>
 <dd>
 <p>2Dウィンドウの幅</p>
 </dd>
 <dt><code>height</code></dt>
 <dd>
 <p>2Dウィンドウの高さ</p>
 </dd>
</dl>

<h2 id="例">例</h2>

<h3 id="rect_メソッドの使用方法"> <code>rect</code> メソッドの使用方法</h3>

<p>この例は、 <code>rect</code> メソッドを使用してウィンドウの作成をするシンプルなコードです。<br>
 内容は、canvas内に作成したウィンドウに対して、{{domxref("CanvasRenderingContext2D.fill", "fill()")}} を実行し、ウィンドウ内を黒塗りにしているだけになります。<br>
 上に記載してあるウィンドウを黒塗りする {{domxref("CanvasRenderingContext2D.fill", "fill()")}} 以外にも、</p>

<ul>
 <li>{{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}}</li>
</ul>

<p>などが存在しているので、参考にしてみてください。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[3]">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();
</pre>

<p>下のコードを変更してみよう:</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html">&lt;canvas id="canvas" width="400" height="200" class="playable-canvas"&gt;&lt;/canvas&gt;
&lt;div class="playable-buttons"&gt;
  &lt;input id="edit" type="button" value="Edit" /&gt;
  &lt;input id="reset" type="button" value="Reset" /&gt;
&lt;/div&gt;
&lt;textarea id="code" class="playable-code"&gt;
ctx.rect(10, 10, 100, 100);
ctx.fill();&lt;/textarea&gt;
</pre>

<pre class="brush: js">var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
</pre>
</div>

<p>{{ EmbedLiveSample('Playable_code', 700, 360) }}</p>

<h2 id="仕様書">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-rect", "CanvasRenderingContext2D.rect")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



<p>{{Compat("api.CanvasRenderingContext2D.rect")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("CanvasRenderingContext2D")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.fillRect")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.strokeRect()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.fill()")}}</li>
 <li>{{domxref("CanvasRenderingContext2D.stroke()")}}</li>
</ul>
