---
title: canvas に図形を描く
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
tags:
  - Canvas
  - Graphics
  - HTML
  - HTML Canvas
  - HTML5
  - Intermediate
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Drawing_shapes
original_slug: Web/Guide/HTML/Canvas_tutorial/Drawing_shapes
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}</div>

<div class="summary">
<p><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Basic_usage">canvas の環境</a>をセットアップしましたので、canvas に描画する方法を詳しく見ていくことができます。この記事を読み終わると矩形、三角形、線、円弧、曲線を描く方法を学び、基本的な図形について理解できます。canvas にオブジェクトを描く際はパスを扱うことが不可欠ですので、その方法を見ていきます。</p>
</div>

<h2 id="The_grid" name="The_grid">グリッド</h2>

<p><img src="https://mdn.mozillademos.org/files/224/Canvas_default_grid.png" style="float: right; height: 220px; width: 220px;"></p>

<p>描き始める前に、canvas のグリッドもしくは <strong>座標空間</strong> について話す必要があります。前のページの HTML テンプレートは幅 150 ピクセル、高さ 150 ピクセルの canvas 要素を持っていました。右の図に、この画像とデフォルトのグリッドを重ねて描きました。普通 グリッド上の 1 単位は canvas 上の 1 ピクセルに相当します。このグリッドの原点は<em>左上</em>の角 ( 座標 (0,0) ) に位置します。全ての要素がこの原点から相対的に配置されます。よって青い正方形の左上の場所は左から x ピクセル、上から y ピクセル (座標 (x,y) ) に来ます。このチュートリアルの後半で原点を他の位置へずらす方法、グリッドを回転したり、伸縮したりする方法を見ることになります。今はデフォルトで我慢しましょう。</p>

<h2 id="Drawing_rectangles" name="Drawing_rectangles">矩形を描く</h2>

<p>{{Glossary("SVG")}} とは異なり、{{HTMLElement("canvas")}} は 2 つの原始図形「矩形」「パス（複数の点が線によって結ばれている）」のみをサポートしています。他の全ての図形は 1 つ以上のパスを組み合わせて作らなくてはなりません。幸いなことに、パスを描く一連の関数があり、とても複雑な図形を作ることができます。</p>

<p>最初に矩形を見ていきましょう。canvas に矩形を描く 3 つの関数があります:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}</dt>
 <dd>塗りつぶされた矩形を描きます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}</dt>
 <dd>矩形の輪郭を描きます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}</dt>
 <dd>指定された領域を消去し、完全な透明にします。</dd>
</dl>

<p>3 つの関数は同じパラメータをとります。<code>x</code> と <code>y</code> は矩形の左上の角の canvas 上での位置 (原点から相対的) を指定します。<code>width</code> と <code>height</code> は矩形のサイズを指定します。</p>

<p>下は、前のページの <code>draw()</code> 関数ですが、この 3 つの関数を追加しました。</p>

<h3 id="Rectangular_shape_example" name="Rectangular_shape_example">矩形の例</h3>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}</pre>

<p>結果は以下のように見えるはずです。</p>

<div>{{EmbedLiveSample("Rectangular_shape_example", 160, 160, "https://mdn.mozillademos.org/files/245/Canvas_rect.png")}}</div>

<p><code>fillRect()</code> 関数は 100x100 ピクセルの大きな黒色正方形を描きます。<code>clearRect()</code> 関数は中心から 60x60 ピクセルの正方形を取り除き、最後に <code>strokeRect()</code> が消去された正方形の中に 50x50 ピクセルの矩形の輪郭を描きます。</p>

<p>後のページで <code>clearRect()</code> の代わりのメソッドを 2 つ見て、描く図形の色と輪郭のスタイルを変更する方法を見ます。</p>

<p>次の節でみるパス関数と異なり、全ての 3 つの矩形関数は直ちに canvas に描きます。</p>

<h2 id="Drawing_paths" name="Drawing_paths">パスを描く</h2>

<p>パスについて見ていきましょう。パスは点のリストであり、それらは曲線かそうでない形状、およびさまざまな幅や色を設定可能な線分で結ばれます。パスやサブパスは、閉じることができます。パスを使って図形を描くには、 いくつかの余分な作業が必要です。</p>

<ol>
 <li>始めに、パスを作成します。</li>
 <li>次に、パスへ描画するために<a href="/ja/docs/Web/API/CanvasRenderingContext2D#Paths">描画コマンド</a>を使用します。</li>
 <li>パスが作成されたら、描画するための stroke または fill を実行できます。</li>
</ol>

<p>これらのステップで使用する関数を以下に示します:</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}</dt>
 <dd>新しいパスを作成します。パスを作成すると以降の描画コマンドは、そのパスを構築するために直接作用します。</dd>
 <dt><a href="/ja/docs/Web/API/CanvasRenderingContext2D#Paths">パスのメソッド</a></dt>
 <dd>オブジェクトのためにさまざまなパスを設定するメソッド群です。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}</dt>
 <dd>直線をパスに追加し、現在のサブパスの開始地点につなぎます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}</dt>
 <dd>輪郭をなぞる方式で、図形を描きます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.fill", "fill()")}}</dt>
 <dd>パスの内部エリアを塗りつぶして、単色の図形を描きます。</dd>
</dl>

<p>パスを作る最初の作業は <code>beginPath()</code> メソッドを呼び出すことです。内部では、パスは図形を一緒に作るサブパス (線、円弧など) のリストとして保存されます。このメソッドが呼び出される毎に、リストはリセットされ新しい図形を始めることができます。</p>

<div class="note"><strong>注記:</strong> <code>beginPath()</code> を呼び出した直後や canvas を新規作成した直後など、現在のパスが空であるときに最初にパスを構築するコマンドは、実際は何であるかにかかわらず常に <code>moveTo()</code> として扱われます。このためパスをリセットした後はほぼ必ず、開始位置を明示することが必要になるでしょう。</div>

<p>2 番目の作業は描かれる実際のパスを定義するメソッドを呼び出すことです。まもなくみることになります。</p>

<p>3 番目は任意の作業ですが、<code>closePath()</code> メソッドを呼び出すことです。このメソッドは現在の点から始点に向けて直線を描くことで図形を閉じようとします。もし図形がすでに閉じられているかリストに点がひとつしかない場合はこの関数は何もしません。</p>

<div class="note"><strong>注記:</strong> <code>fill()</code> メソッドが呼ばれるときは開いている図形は自動的に閉じられ、<code>closePath()</code> メソッドを使う必要はありません。これは、<code>stroke()</code> を呼び出すときは<strong>あてはまりません</strong>。</div>

<h3 id="Drawing_a_triangle" name="Drawing_a_triangle">三角形の描画</h3>

<p>単純な図形 (三角形) を描くコードはこのようになります。</p>

<div class="hidden">
<pre class="brush:html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="100" height="100"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush:js">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}</pre>

<p>表示結果は以下の様になります。</p>

<div>{{EmbedLiveSample("Drawing_a_triangle", 110, 110, "https://mdn.mozillademos.org/files/9847/triangle.png")}}</div>

<h3 id="Moving_the_pen" name="Moving_the_pen">ペンの移動</h3>

<p>とても役に立つ関数である <code>moveTo()</code> は、自身は何も描画しませんが、上述のパスリストの一部になります。 1 枚の紙の上の 1 つの場所からペンか鉛筆を持ち上げてそれを次の場所に置くと考えるとよいでしょう。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}</dt>
 <dd><code>x</code> と <code>y</code> で指定した座標に、ペンを移動します。</dd>
</dl>

<p>canvas が初期化されるか <code>beginPath()</code> メソッドが呼ばれたとき、ほとんどの場合 <code>moveTo()</code> メソッドを始点を他の場所に置くために使います。<code>moveTo()</code> メソッドを繋がっていないパスを描くために使うこともできます。下のスマイリーを見てください。</p>

<p>これをあなた自身で試すには、以下のコードを使うことができます。さきほど見た <code>draw()</code> 関数に貼り付けるだけです。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight:[8,10,12]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // 口 (時計回り)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左目
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右目
    ctx.stroke();
  }
}</pre>

<p>表示結果は以下の様になります。</p>

<p>{{EmbedLiveSample("Moving_the_pen", 160, 160, "https://mdn.mozillademos.org/files/252/Canvas_smiley.png")}}</p>

<p>繋がっている線を見るには <code>moveTo()</code> メソッドを取り除いてください。</p>

<div class="note"><strong>注記</strong>: <code>arc()</code> 関数とそのパラメータの解説は {{anch("Arcs","円弧")}} の節をご覧下さい。</div>

<h3 id="Lines" name="Lines">線</h3>

<p>直線を描くには <code>lineTo()</code> メソッドを使います。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}</dt>
 <dd>現在の描画位置から <code>x</code> と <code>y</code> で指定した位置に、線を描きます。</dd>
</dl>

<p>このメソッドは 2 つの引数 <code>x</code> と <code>y</code> を取ります。それらは線の終点の座標です。始点は前回のパスに依存します。前回のパスの終点が始点になる、など。始点は <code>moveTo()</code> メソッドを使って変更することもできます。</p>

<p>次の例では 2 つの三角形が描かれています。 1 つは塗られ、もう 1 つは輪郭線が描かれています。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[9,10,16,17]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
</pre>

<p>最初に新しい図形のパスを始めるために <code>beginPath()</code> メソッドが呼ばれています。次に 始点を望む位置に移動するために <code>moveTo()</code> メソッドが呼ばれています。三角形の 両側の辺を作る 2 つの線が描かれています。</p>

<div>{{EmbedLiveSample("Lines", 160, 160, "https://mdn.mozillademos.org/files/238/Canvas_lineTo.png")}}</div>



<p>あなたは塗られた三角形と輪郭線の描かれたものとの違いに気がつくでしょう。上で述べたように、これはパスが塗られる( fill される) と図形は自動的に閉じられ、stroke されるときはそうでないからです。輪郭の描かれた三角形で <code>closePath()</code> を行わないと 2 つの線しか描かれず、三角形は完成しません。</p>

<h3 id="Arcs" name="Arcs">円弧</h3>

<p>円弧や円を描くために <code>arc()</code> または <code>arcTo()</code> メソッドを使います。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, anticlockwise)")}}</dt>
 <dd><em>(x, y)</em> を中心の位置、<em>radius</em> を半径、<em>startAngle</em> を開始角度、<em>endAngle</em> を終了角度、<em>anticlockwise</em> を方向 (デフォルトは時計回り) とする円弧を描きます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}</dt>
 <dd>指定した制御点と半径によって円弧を描き、その前の描画位置と直線で接続します。</dd>
</dl>

<p><code>arc</code> メソッドを詳しく見ていきましょう。このメソッドは 6 つのパラメーターをとります。<code>x</code> と <code>y</code> は、円弧を描く円の中心座標です。<code>radius</code> はそのまま、半径です。<code>startAngle</code> と <code>endAngle</code> パラメーターは円弧の始まりと終わりをラジアンで定義します。始まりと終わりの角度は x 軸から計算します。<code>anticlockwise</code> パラメーターは <code>true</code> の時には円弧を反時計回りに、それ以外は時計回りの方向に描くブーリアン値です。</p>

<div class="note">
<p><strong>注記</strong>: <code>arc</code> 関数の角度は度ではなく、ラジアンで計算されます。度からラジアンに変換するには以下の JavaScript 式を使うことができます : <code>radians = (Math.PI/180)*degrees</code></p>
</div>

<p>以下の例は上で見てきた例よりすこし複雑です。全て異なる角度と塗り方で 12 の異なる円弧を描きます。</p>

<p>2 つの <a href="/ja/docs/Web/JavaScript/Reference/Statements/for"><code>for</code> ループ</a>は円弧の行と列のループです。全ての円弧毎に <code>beginPath()</code> を使って新しいパスを始めます。コードの中で、次に何が行われているか読みやすくするために全てのパラメーターを変数として書きましたが、いつもこのようにする必要はありません。</p>

<p><code>x</code> と <code>y</code> 座標は充分明確です。<code>radius</code> と <code>startAngle</code> は固定です。<code>endAngle</code> は最初の列が 180 度 (半円) から始まって、最後の列で完全な円を作るように 90 度ずつ増加します。</p>

<p><code>clockwise</code> パラメーターの文は最初と 3 番目の列では時計回りの円弧として 2 番目と 4 番目の列では反時計回りの円弧という結果になります。最後に、<code>if</code> 文は上半分は輪郭を描画された円弧を、下半分は塗られた円弧を作ります。</p>

<div class="note">
<p><strong>注記:</strong> この例では、ほかの例より若干大きなサイズである 150 x 200 ピクセルの canvas が必要です。</p>
</div>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
  &lt;body onload="draw();"&gt;
    &lt;canvas id="canvas" width="150" height="200"&gt;&lt;/canvas&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[16]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    for (var i = 0;i &lt; 4;i++) {
      for(var j = 0;j &lt; 3;j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x 座標
        var y = 25 + i * 50; // y 座標
        var radius = 20; // 円弧の半径
        var startAngle = 0; // 円孤の始点
        var endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
        var anticlockwise = i % 2 !== 0; // 時計回りまたは反時計回り

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i &gt; 1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
</pre>

<div>{{EmbedLiveSample("Arcs", 160, 210, "https://mdn.mozillademos.org/files/204/Canvas_arc.png")}}</div>

<h3 id="Bezier_and_quadratic_curves" name="Bezier_and_quadratic_curves">ベジェと二次曲線</h3>

<p>次に見ていく種類のパスは<a href="https://ja.wikipedia.org/wiki/ベジェ曲線" rel="external">ベジェ曲線</a>です。三次および二次の種類が利用可能です。通常複雑な自然の図形を描くのに使われます。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}</dt>
 <dd>現在のペンの位置から <code>x</code> および <code>y</code> で指定した終端へ、<code>cp1x</code> および <code>cp1y</code> で指定した制御点を使用して二次ベジェ曲線を描きます。</dd>
 <dt>{{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}</dt>
 <dd>現在のペンの位置から <code>x</code> および <code>y</code> で指定した終端へ、(<code>cp1x</code>, <code>cp1y</code>) および (<code>cp2x</code>, <code>cp2y</code>) で指定した制御点を使用して三次ベジェ曲線を描きます。</dd>
</dl>

<p><img src="https://mdn.mozillademos.org/files/223/Canvas_curves.png" style="float: right; height: 190px; width: 190px;">これらの違いは右の画像を使うことで説明することができます。二次ベジェ曲線は始点と終点 (青い点) と 1 つの<strong>制御点</strong> (赤い点) を持つのに対して、三次ベジェ曲線は 2 つの制御点を持ちます。</p>

<p>それらのメソッドの両方の <code>x</code> と <code>y</code> パラメータは終点の座標です。<code>cp1x</code> と <code>cp1y</code> は最初の制御点、<code>cp2x</code> と <code>cp2y</code> は 2 番目の制御点の座標です。</p>

<p>Adobe Illustrator のようなベクタードローイングソフトとは違い、何をやっているのかの直接の視覚的フィードバックが得られないので、二次および三次ベジェ曲線を使うことはとても挑戦的です。このことは複雑な図形を描くことをとても難しくします。以下の例で、いくつかの単純で基本的な図形を描きます、しかしもしあなたに時間と特に忍耐があればはるかに複雑な図形を作ることができます。</p>

<p>これらの例で非常に難しいものは何もありません。 どちらの場合も、最終的に描かれた一連の曲線が完全な図形となるのを見ることになります。</p>

<h4 id="Quadratic_Bezier_curves" name="Quadratic_Bezier_curves">二次ベジェ曲線</h4>

<p>この例では、吹き出しをレンダリングするために複数の二次ベジェ曲線を使用しています。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[9,10,11,12,13,14]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 二次曲線の例
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
</pre>

<div>{{EmbedLiveSample("Quadratic_Bezier_curves", 160, 160, "https://mdn.mozillademos.org/files/243/Canvas_quadratic.png")}}</div>

<h4 id="Cubic_Bezier_curves" name="Cubic_Bezier_curves">三次ベジェ曲線</h4>

<p>この例では、三次ベジェ曲線を使ってハートを描画します。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[9,10,11,12,13,14]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 三次ベジェ曲線の例
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
</pre>

<div>{{EmbedLiveSample("Cubic_Bezier_curves", 160, 160, "https://mdn.mozillademos.org/files/207/Canvas_bezier.png")}}</div>

<h3 id="Rectangles" name="Rectangles">矩形</h3>

<p>canvas に直接矩形を描く例 ({{anch("Drawing rectangles","矩形を描く")}}) で見た 3 つのメソッドのほかに、開いているパスリストに矩形を追加する <code>rect()</code> メソッドがあります。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}</dt>
 <dd>(<code>x</code>, <code>y</code>) で指定した位置を左上の角にして、<code>width</code> および <code>height</code> で指定した幅および高さの矩形を描きます。</dd>
</dl>

<p>このメソッドが実行される前に、パラメーターに (x,y) を持った <code>moveTo()</code> メソッドが自動的に呼ばれます。すなわち、始点が標準の位置に置かれます。</p>

<h3 id="Making_combinations" name="Making_combinations">組み合わせ</h3>

<p>このページの全ての例で図形につき一種類のパス関数のみを使ってきました。しかし、図形を作るのに使用できるパスの種類の制限は一切ありません。そこで、この最後の例では非常に有名なゲームのキャラクタを作るために全てのパス関数を組み合わせてみましょう。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush:js">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0;i &lt; 8;i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for(i = 0;i &lt; 6;i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for(i = 0;i &lt; 8;i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// 角丸の四角形を描画するためのユーティリティ関数

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
</pre>

<p>以下の様な表示結果となります。</p>

<div>{{EmbedLiveSample("Making_combinations", 160, 160, "https://mdn.mozillademos.org/files/9849/combinations.png")}}</div>

<p>これらは非常に単純な例ですので、詳細は割愛します。ポイントは <code>fillStyle</code> を使用している点と、独自関数 <code>roundedRect()</code> を定義している点です。この様に繰り返し利用する可能性のある処理を関数化しておくと、コード量を減らすことができます。</p>

<p><code>fillStyle</code> の詳細についてはこのチュートリアルの後半で説明します。プロパティで、塗りの色を初期値の黒から白に、そしてもう一度黒に変更しています。</p>

<h2 id="Path2D_objects" name="Path2D_objects">Path2D オブジェクト</h2>

<p>最後の例で見たように、オブジェクトを描くための一連のパスや描画コマンドを、canvas に置くことができます。コードをシンプルにしてパフォーマンスを向上させるために最近のバージョンのブラウザで使用できる {{domxref("Path2D")}} オブジェクトは、描画コマンドをキャッシュあるいは記録することを可能にしています。これにより、パスをすばやく再実行できます。<code>Path2D</code> オブジェクトの構築方法を見ていきましょう:</p>

<dl>
 <dt>{{domxref("Path2D.Path2D", "Path2D()")}}</dt>
 <dd><code><strong>Path2D()</strong></code> コンストラクタは、新たにインスタンス化した <code>Path2D</code> オブジェクトを返します。任意で別のパス (コピーを作成)、あるいは <a href="/ja/docs/Web/SVG/Tutorial/Paths">SVG パス</a>データを構成する文字列を引数に指定できます。</dd>
</dl>

<pre class="brush: js">new Path2D();     // 空のパスオブジェクトを作成する
new Path2D(path); // 別の Path2D オブジェクトを複製する
new Path2D(d);    // SVG パスデータからパスを作成する</pre>

<p>これまで見てきた <code>moveTo</code>、<code>rect</code>、<code>arc</code>、<code>quadraticCurveTo</code> など、あらゆる<a href="/ja/docs/Web/API/CanvasRenderingContext2D#Paths">パスメソッド</a>を <code>Path2D</code> オブジェクトで使用できます。</p>

<p>また <code>Path2D</code> API には、パスを結合するための <code>addPath</code> メソッドが追加されています。これは、複数の部品を組み合わせてオブジェクトを構築したい場合などに役立ちます。</p>

<dl>
 <dt>{{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}</dt>
 <dd>現在のパスに、変換行列 (任意指定) とともに、パスを追加します。</dd>
</dl>

<h3 id="Path2D_example" name="Path2D_example">Path2D の例</h3>

<p>この例では、矩形と円を作成します。どちらも <code>Path2D</code> オブジェクトとして保存しており、後で使用することができます。新たな <code>Path2D</code> API に合わせて、いくつかのメソッドが現在のパスに代わり任意で <code>Path2D</code> を受け入れられるように更新されました。ここでは、canvas に両方のオブジェクトを描くため、1つの path 引数を <code>stroke</code> および <code>fill</code> で使用しています。</p>

<div class="hidden">
<pre class="brush: html">&lt;html&gt;
 &lt;body onload="draw();"&gt;
   &lt;canvas id="canvas" width="130" height="100"&gt;&lt;/canvas&gt;
 &lt;/body&gt;
&lt;/html&gt;
</pre>
</div>

<pre class="brush: js;highlight[6,9]">function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
</pre>

<p>{{EmbedLiveSample("Path2D_example", 130, 110, "https://mdn.mozillademos.org/files/9851/path2d.png")}}</p>

<h3 id="Using_SVG_paths" name="Using_SVG_paths">SVG パスを使用する</h3>

<p>canvas の新たな <code>Path2D</code> API の、もうひとつの強力な機能が、canvas でパスを初期化するために <a href="/ja/docs/Web/SVG/Tutorial/Paths">SVG パスデータ</a>を使用できることです。これにより、SVG と canvas の両方でパスデータを使い回すことができるでしょう。</p>

<p>パスはある点に移動して (<code>M10 10</code>) 、そこから右へ水平に 80 ポイント移動 (<code>h 80</code>)、下へ 80 ポイント移動 (<code>v 80</code>) 、80ポイント 左へ移動 (<code>h -80</code>) 、そして始点へ戻ります (<code>z</code>)。この例は <a href="/ja/docs/Web/API/Path2D.Path2D#Using_SVG_paths"><code>Path2D</code> コンストラクタ</a>のページで確認できます。</p>

<pre class="brush: js;">var p = new Path2D('M10 10 h 80 v 80 h -80 Z');</pre>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}</div>
