---
title: Transformations
slug: Web/API/Canvas_API/Tutorial/Transformations
tags:
  - Canvas
  - Graphics
  - Guide
  - HTML
  - HTML5
  - Intermediate
  - Web
translation_of: Web/API/Canvas_API/Tutorial/Transformations
original_slug: Web/Guide/HTML/Canvas_tutorial/Transformations
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}</div>

<div class="summary">これまでのチュートリアルで、<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes">canvas のグリッド</a>や<strong>座標空間</strong>について学びました。今まではデフォルトのグリッドしか使用しておらず、また必要に応じて canvas 全体のサイズを変更していました。変換 (transformations) には、元の canvas を別の場所に移す、回転する、拡大縮小するといった、より強力な手段があります。</div>

<h2 id="Saving_and_restoring_state" name="Saving_and_restoring_state">状態を保存および復元する</h2>

<p>変換のメソッドを見ていく前に、より複雑な描画を始めたときに不可欠になメソッドを 2 つ見ておきましょう。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.save", "save()")}}</dt>
 <dd>canvas 全体の状態を保存します。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.restore", "restore()")}}</dt>
 <dd>直近に保存した canvas の状態を復元します。</dd>
</dl>

<p>canvas の状態は、スタックに保存されます。<code>save()</code> メソッドを呼び出すたびに、現在の描画状態をスタックにプッシュします。描画状態は以下の情報で構成されます:</p>

<ul>
 <li>適用された変換操作 (すなわち、後述する <code>translate</code>、<code>rotate</code>、<code>scale</code>)。</li>
 <li>以下の属性の、現在の値: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}、{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}、{{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}、{{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}、{{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}、{{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}、{{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}、{{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}、{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}、{{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction", "direction")}}、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}</li>
 <li>現在の<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths">クリッピングパス</a>。これは次の章で説明します。</li>
</ul>

<p><code>save()</code> メソッドは、何回でも呼び出すことができます。<code>restore()</code> メソッドを呼び出すたびに、最後に保存された状態をスタックからポップして、すべての保存済み設定を復元します。</p>

<h3 id="A_save_and_restore_canvas_state_example" name="A_save_and_restore_canvas_state_example"><code>save</code> および <code>restore</code> の例</h3>

<p>この例は、連続した矩形のセットを描画するときに、描画状態のスタックがどのように機能するかを示します。</p>

<pre class="brush: js; highlight:[5,10,15,18]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0,0,150,150);   // 既定の設定で矩形を描画
  ctx.save();                  // 既定の状態を保存

  ctx.fillStyle = '#09F';      // 設定変更
  ctx.fillRect(15,15,120,120); // 新たな設定で矩形を描画

  ctx.save();                  // 現在の状態を保存
  ctx.fillStyle = '#FFF';      // 設定変更
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30,30,90,90);   // 新たな設定で矩形を描画

  ctx.restore();               // 以前の状態を復元
  ctx.fillRect(45,45,60,60);   // 復元した設定で矩形を描画

  ctx.restore();               // 以前の状態を復元
  ctx.fillRect(60,60,30,30);   // 復元した設定で矩形を描画
}</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>最初のステップで、大きな矩形を既定の設定で描きます。次にこの状態を保存して、塗りつぶし色を変更します。そして、2 番目のやや小さい青色の矩形を描いて、状態を保存します。もう一度描画設定を変更して、3 番目の半透明な白色の矩形を描きます。</p>

<p>ここまでは、これまでの章で行ってきたことによく似ています。しかし最初に <code>restore()</code> 文を呼び出したとき、スタックの先頭の描画状態が削除されて、その設定が復元されます。<code>save()</code> を使用して状態を保存しなければ、前の状態に戻すために塗りつぶし色や透過性を手動で変更しなければなりません。ここではプロパティが 2 つであり容易ですが、プロパティが多ければコードが一気にとても長くなります。</p>

<p>2 番目の <code>restore()</code> 文を呼び出すと、元の状態 (1 番目の <code>save</code> を呼び出す前に設定した状態) を復元して、最後の矩形を再び黒色で描きます。</p>

<p>{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "180", "180", "https://mdn.mozillademos.org/files/249/Canvas_savestate.png")}}</p>

<h2 id="Translating" name="Translating">移動</h2>

<p><img alt="" src="https://mdn.mozillademos.org/files/234/Canvas_grid_translate.png" style="float: right;">1 番目の変換メソッドとして、<code>translate()</code> を見ていきましょう。このメソッドは、canvas や canvas の原点をグリッド内の別の位置へ移動するために使用します。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}</dt>
 <dd>canvas や canvas の原点をグリッド上で移動します。<code>x</code> は水平方向の移動距離、<code>y</code> はグリッドを垂直方向の移動距離を示します。</dd>
</dl>

<p>変換を行う前に canvas の状態を保存しておくことは、よいアイデアです。ほとんどの場合、元の状態に戻すためには逆の変換を行うよりも <code>restore</code> メソッドを呼び出すほうが簡単です。また、ループ内で変換を行っているときに canvas の状態の保存や復元を行わなければ、canvas の端の外側に描画したために、描いたものの一部を失ってしまうかもしれません。</p>

<h3 id="A_translate_example" name="A_translate_example"><code>translate</code> の例</h3>

<p>この例は、canvas の原点を移動する利点をいくつか示しています。<code>translate()</code> メソッドを使用しなければ、すべての矩形が同じ位置 (0,0) に描かれます。また <code>translate()</code> によって、<code>fillRect()</code> 関数で座標を手動で調整する必要なく、どこにでも自由に矩形を置くことができます。これにより若干理解しやすく、また使いやすくなります。</p>

<p><code>draw()</code> 関数で、<code>for</code> ループを使用して <code>fillRect()</code> 関数を 9 回呼び出しています。それぞれのループで canvas を移動して矩形を描き、その後に元の状態を復元します。描画位置を調節する <code>translate()</code> を頼って、<code>fillRect()</code> は毎回同じ座標を使用していることに注目してください。</p>

<pre class="brush: js; highlight:[7]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i=0;i&lt;3;i++) {
    for (var j=0;j&lt;3;j++) {
      ctx.save();
      ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
      ctx.translate(10+j*50,10+i*50);
      ctx.fillRect(0,0,25,25);
      ctx.restore();
    }
  }
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_translate_example", "160", "160", "https://mdn.mozillademos.org/files/9857/translate.png")}}</p>

<h2 id="Rotating" name="Rotating">回転</h2>

<p><img alt="" src="https://mdn.mozillademos.org/files/233/Canvas_grid_rotate.png" style="float: right;">2 番目の変換メソッドは <code>rotate()</code> です。現在の原点を中心にして canvas を回転させるために使用します。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}</dt>
 <dd>現在の原点を中心にしてラジアンで示した <code>angle</code> の分、canvas を時計回りに回転します。</dd>
</dl>

<p>回転の中心は、常に canvas の原点です。中心を変更するには、<code>translate()</code> メソッドを使用して canvas を移動しなければなりません。</p>

<h3 id="A_rotate_example" name="A_rotate_example"><code>rotate</code> の例</h3>

<p>この例は、まずは canvas の原点で矩形を回転するために <code>rotate()</code> メソッドを使用して、次に矩形自身の中心で回転するために <code>translate()</code> の助けを借りています。</p>

<div class="note">
<p><strong>備忘</strong>: 角度はラジアン (radians) で表しており、度数 (degrees) ではありません。これは以下の方法で変換できます: <code>radians = (Math.PI/180)*degrees</code></p>
</div>

<pre class="brush: js; highlight:[9, 23]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 左の矩形を canvas の原点で回転する
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30,30, 100, 100);
  ctx.rotate((Math.PI/180)*25);
  // 灰色の矩形
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30,30, 100, 100);
  ctx.restore();

  // 右の矩形を矩形の中心で回転する
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // 矩形の中心に移動する
                          // x = x + 0.5 * 幅
                          // y = y + 0.5 * 高さ
  ctx.rotate((Math.PI/180)*25); // 回転する
  ctx.translate(-200, -80); // 元の位置に移動する

  // 灰色の矩形を描く
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
</pre>

<p>矩形を中心で回転するために、canvas を矩形の中心へ移動した後に canvas を回転します。そして canvas を 0,0 へ移動した後に矩形を描きます。</p>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="300" height="200"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_rotate_example", "310", "210", "https://mdn.mozillademos.org/files/9859/rotate.png")}}</p>

<h2 id="Scaling" name="Scaling">スケーリング</h2>

<p>次の変換メソッドはスケーリングです。canvas のグリッドの単位を増減するために使用します。これは、図形やビットマップを縮小または拡大して描くために使用できます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}</dt>
 <dd>canvas の単位を x (水平方向) または y (垂直方向) で指定した分スケーリングします。どちらの引数も実数です。1.0 より小さい値は単位あたりのサイズが減少、1.0 より大きい値は単位あたりのサイズが増加します。1.0 では単位あたりのサイズが変わりません。</dd>
</dl>

<p>負数を使用すると軸を反転できます (例えば <code>translate(0,canvas.height); scale(1,-1);</code> で、原点が左下の隅にある有名なデカルト座標系になります)。</p>

<p>デフォルトでは、canvas の 1 単位は 1 ピクセルとまったく同じです。例えば、スケーリング係数に 0.5 を適用すると 1 単位が 0.5 ピクセルになり、図形が半分のサイズで描かれます。同様にスケーリング係数を 2.0 に設定すると単位あたりのサイズが増えて、1 単位あたり 2 ピクセルになります。この結果、図形は 2 倍の大きさで描かれます。</p>

<h3 id="A_scale_example" name="A_scale_example"><code>scale</code> の例</h3>

<p>この例は、図形をさまざまなスケーリング係数で描きます。</p>

<pre class="brush: js; highlight:[6,11]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // シンプルな図形を描いて、スケーリングする
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1,10,10,10);
  ctx.restore();

  // 水平方向に反転する
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("A_scale_example", "160", "160", "https://mdn.mozillademos.org/files/9861/scale.png")}}</p>

<h2 id="Transforms" name="Transforms">変形</h2>

<p>最後に、以下の変換メソッドで、変換行列によって直接変更することができます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}</dt>
 <dd>引数で表した行列と、現在の変換行列で乗算を行います。変換行列は以下のとおりです: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &amp; c &amp; e \\ b &amp; d &amp; f \\ 0 &amp; 0 &amp; 1 \end{array} \right]</annotation></semantics></math></dd>
</dl>

<dl>
 <dd>いずれかの引数が <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity" title="Web/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code> になる場合は、メソッドで例外を発生させるのではなく行列を infinite としてマークしなければなりません。</dd>
</dl>

<p>この関数の引数は以下のとおりです:</p>

<dl>
 <dt><code>a (m11)</code></dt>
 <dd>水平方向のスケーリング。</dd>
 <dt><em><code>b (m12)</code></em></dt>
 <dd>水平方向のスキュー。</dd>
 <dt><code>c (m21)</code></dt>
 <dd>垂直方向のスキュー。</dd>
 <dt><code>d (m22)</code></dt>
 <dd>垂直方向のスケーリング。</dd>
 <dt><code>e (dx)</code></dt>
 <dd>水平方向の移動。</dd>
 <dt><code>f (dy)</code></dt>
 <dd>垂直方向の移動。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}</dt>
 <dd>現在の変形を単位行列にリセットして、同じ引数で <code>transform()</code> メソッドを呼び出します。これは基本的に、現在の変形をアンドゥしてから指定した変形を行う操作を一度に行うものです。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}</dt>
 <dd>現在の変形を単位行列にリセットします。これは <code>ctx.setTransform(1, 0, 0, 1, 0, 0);</code> を呼び出すことと同じです。</dd>
</dl>

<h3 id="Example_for_transform_and_setTransform" name="Example_for_transform_and_setTransform"><code>transform</code> と <code>setTransform</code> の例</h3>

<pre class="brush: js; highlight:[12,15]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  var sin = Math.sin(Math.PI/6);
  var cos = Math.cos(Math.PI/6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i=0; i &lt;= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  ctx.fillRect(0, 50, 100, 100);
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="200" height="250"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>{{EmbedLiveSample("Example_for_transform_and_setTransform", "230", "280", "https://mdn.mozillademos.org/files/255/Canvas_transform.png")}}</p>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}</div>
