---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
  - メソッド
translation_of: Web/API/CanvasRenderingContext2D/ellipse
---
<div>{{APIRef}}</div>

<p><code><strong>CanvasRenderingContext2D.ellipse()</strong></code> は Canvas 2D API のメソッドで、現在のサブパスに楕円の弧を追加します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">void <em>ctx</em>.ellipse(<em>x</em>, <em>y</em>, <em>radiusX</em>, <em>radiusY</em>, <em>rotation</em>, <em>startAngle</em>, <em>endAngle</em> [, <em>anticlockwise</em>]);
</pre>

<p><code>ellipse()</code> メソッドは <code>(x, y)</code> を中心として、 <code>radiusX</code> と <code>radiusY</code> を半径とする楕円の弧を生成します。パスは <code>startAngle</code> から始まって <code>endAngle</code> で終わり、回転方向は <code>anticlockwise</code> で指定します (既定では時計回りです)。</p>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>楕円の中心の X 軸 (水平) 座標です。</dd>
 <dt><code>y</code></dt>
 <dd>楕円の中心の Y 軸 (垂直) 座標です。</dd>
 <dt><code>radiusX</code></dt>
 <dd>楕円の長辺の半径です。負の値であってはなりません。</dd>
 <dt><code>radiusY</code></dt>
 <dd>楕円の短辺の半径です。負の値であってはなりません。</dd>
 <dt><code>rotation</code></dt>
 <dd>楕円の傾きで、ラジアンで表現します。</dd>
 <dt><code>startAngle</code></dt>
 <dd>楕円が始まる角度で、正の X 軸から時計回りの角度をラジアンで表現したものです。</dd>
 <dt><code>endAngle</code></dt>
 <dd>楕円が終わる角度で、正の X 軸から時計回りの角度をラジアンで表現したものです。</dd>
 <dt><code>anticlockwise</code> {{optional_inline}}</dt>
 <dd>省略可能な {{jsxref("Boolean")}} の値で、 <code>true</code> の場合は楕円を反時計回りに描きます。既定値は <code>false</code> (時計回り) です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Drawing_a_full_ellipse" name="Drawing_a_full_ellipse">完全な楕円の描画</h3>

<p>この例は、 π/4 ラジアンの角度 (45<strong>°</strong>) で楕円を描きます。楕円全体を描くには、弧が 0 ラジアン (0<strong>°</strong>) で始まり、 2π ラジアン (360<strong>°</strong>) で終わるようにします。</p>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas" width="200" height="200"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript" name="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[6]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 楕円を描画
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Drawing_a_full_ellipse', 700, 250) }}</p>

<h3 id="Various_elliptical_arcs" name="Various_elliptical_arcs">様々な楕円の弧</h3>

<p>この例では、様々な属性の3本の楕円のパスを生成します。</p>

<h4 id="HTML_2" name="HTML_2">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript_2" name="JavaScript_2">JavaScript</h4>

<pre class="brush: js; highlight:[6,11,16]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * .25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
ctx.fill();
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('Various_elliptical_arcs', 700, 180) }}</p>

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
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-ellipse", "CanvasRenderingContext2D.ellipse")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.CanvasRenderingContext2D.ellipse")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}</li>
 <li>真円を描くには {{domxref("CanvasRenderingContext2D.arc()")}} を使用してください。</li>
</ul>
