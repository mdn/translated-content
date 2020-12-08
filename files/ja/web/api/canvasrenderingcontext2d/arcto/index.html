---
title: CanvasRenderingContext2D.arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
translation_of: Web/API/CanvasRenderingContext2D/arcTo
---
<div>{{APIRef}}</div>

<p>Canvas 2D APIの <code><strong>CanvasRenderingContext2D</strong></code><strong><code>.arcTo()</code></strong> メソッドは、2つの制御点と半径を指定して現在のサブパスに円弧を追加します。円弧は現在のパスの最後の点と自動的に直線で連結されます。</p>

<p>このメソッドは主に角丸の図形を描画するのに使用されます。</p>

<div class="blockIndicator note">
<p><strong>Note:</strong> 相対的に大きな半径を指定した場合、得られる角丸の描線が期待するものとは異なる可能性があります: 円弧と連結する直線は円弧の半径に合うように描線されます。</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">void <em>ctx</em>.arcTo(<em>x1</em>, <em>y1</em>, <em>x2</em>, <em>y2</em>, <em>radius</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>x1</code></dt>
 <dd>1つ目の制御点のx座標。</dd>
 <dt><code>y1</code></dt>
 <dd>1つ目の制御点のy座標。</dd>
 <dt><code>x2</code></dt>
 <dd>2つ目の制御点のx座標。</dd>
 <dt><code>y2</code></dt>
 <dd>2つ目の制御点のy座標。</dd>
 <dt><code>radius</code></dt>
 <dd>円弧の半径。負でない値を設定する必要があります。</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="arcTo_の仕組み"> arcTo の仕組み</h3>

<p><code>arcTo()</code> の仕組みを解釈するには、始点と1つ目の制御点を結ぶ直線と、そこから2つ目の制御点を結ぶ直線の2つの線をイメージする方法があります。<code>arcTo()</code>を使用しない場合、これら2つの線分は鋭角を形成しますが、<code>arcTo()</code> はこの鋭角部分に接する円弧を描くことで滑らかに接続します。すなわち、2直線に接する円弧を作成するということになります。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js; highlight:[17]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Tangential lines
ctx.beginPath();
ctx.strokeStyle = 'gray';
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();

// Arc
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200,130, 50,20, 40);
ctx.stroke();

// Start point
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(200, 20, 5, 0, 2 * Math.PI);
ctx.fill();

// Control points
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(200, 130, 5, 0, 2 * Math.PI); // Control point one
ctx.arc(50, 20, 5, 0, 2 * Math.PI);   // Control point two
ctx.fill();
</pre>

<h4 id="Result">Result</h4>

<p>この例では、<code>arcTo()</code> によって描かれる線を<strong>黒い太線</strong>、<span style="color: gray;">接線を灰色</span>、<span style="color: red;">制御点を赤</span>、<span style="color: blue;">始点となる現在のパスの最後の点を青</span>で描画しています。</p>

<p>{{ EmbedLiveSample('How_arcTo_works', 315, 165) }}</p>

<h3 id="角丸図形の作成">角丸図形の作成</h3>

<p>この例では <code>arcTo()</code>を用いて丸い角をもつ線を描画しています。これが最も一般的な使われ方です。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript_2">JavaScript</h4>

<p>描線は直前の<code>moveTo()</code>により座標 (230, 20)から開始し、2つの制御点(90, 130) と (20, 20) を結ぶ直線に接するように形成された半径50の円弧に接続されます。円弧の終端からは <code>lineTo()</code> メソッドにより (20, 20) の点まで直線が描画されます。2つ目の制御点の座標と同じ座標を <code>lineTo()</code> で指定することで、滑らかな描線を得ることができます。</p>

<pre class="brush: js; highlight:[14]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const p0 = { x: 230, y: 20  }
const p1 = { x: 90,  y: 130 }
const p2 = { x: 20,  y: 20  }

const labelPoint = function (p) {
  const offset = 15;
  ctx.fillText('(' + p.x + ',' + p.y + ')', p.x + offset, p.y + offset);
}

ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
ctx.lineTo(p2.x, p2.y);

labelPoint(p0);
labelPoint(p1);
labelPoint(p2);

ctx.stroke();
</pre>

<h4 id="Result_2">Result</h4>

<p>{{ EmbedLiveSample('Creating_a_rounded_corner', 315, 165) }}</p>

<h3 id="大きすぎる半径を指定した場合">大きすぎる半径を指定した場合</h3>

<p>相対的に大きな半径を指定した場合には、前述の方法では期待されるような滑らかな描線は得られません。この例では、<code>moveTo()</code>後の地点から円弧に接続される線は下方ではなく上方に向かってしまっています。これは、2つの直線に接する円の半径が大き過ぎるために、始点よりも上方に円弧との接点があるために発生しています。</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript_3">JavaScript</h4>

<pre class="brush: js; highlight:[6]">const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(180, 90);
ctx.arcTo(180,130, 110,130, 130);
ctx.lineTo(110, 130);
ctx.stroke();
</pre>

<h4 id="Result_3">Result</h4>

<p>{{ EmbedLiveSample('Result_of_a_large_radius', 315, 165) }}</p>

<h3 id="Live_demo">Live demo</h3>

<p>以下はより洗練されたデモです。半径の変化幅を調節し、どのように描線が変化するかを試すことができます。</p>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;label for="radius"&gt;Radius: &lt;/label&gt;
  &lt;input name="radius"  type="range" id="radius" min=0 max=100 value=50&gt;
  &lt;label for="radius"  id="radius-output"&gt;50&lt;/label&gt;
&lt;/div&gt;
&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript_4">JavaScript</h4>

<pre class="brush: js">const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

const controlOut = document.getElementById('radius-output');
const control    = document.getElementById('radius');
      control.oninput = () =&gt; {
          controlOut.textContent = r = control.value;
      };

const mouse = { x: 0, y: 0 };

let   r  = 100; // Radius
const p0 = { x: 0, y: 50 };

const p1 = { x: 100, y: 100 };
const p2 = { x: 150, y: 50 };
const p3 = { x: 200, y: 100 };

const labelPoint = function (p, offset, i = 0){
    const {x, y} = offset;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(`${i}:(${p.x}, ${p.y})`, p.x + x, p.y + y);
}

const drawPoints = function (points){
  for (let i = 0; i &lt; points.length; i++) {
    var p = points[i];
    labelPoint(p, { x: 0, y: -20 } , i)
  }
}

// Draw arc
const drawArc = function ([p0, p1, p2], r) {
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.arcTo(p1.x, p1.y, p2.x, p2.y, r);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}


let t0 = 0;
let rr = 0; // the radius that changes over time
let a  = 0; // angle
let PI2 = Math.PI * 2;
const loop = function (t) {
  t0 = t / 1000;
  a  = t0 % PI2;
  rr = Math.abs(Math.cos(a) * r);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawArc([p1, p2, p3], rr);
  drawPoints([p1, p2, p3]);
  requestAnimationFrame(loop);
}

loop(0);</pre>

<h4 id="Result_4">Result</h4>

<div>{{EmbedLiveSample('Live_demo', 315, 200) }}</div>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-arcto", "CanvasRenderingContext2D.arcTo")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.CanvasRenderingContext2D.arcTo")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The interface defining this method: {{domxref("CanvasRenderingContext2D")}}</li>
</ul>
