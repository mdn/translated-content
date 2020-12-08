---
title: 合成とクリッピング
slug: Web/API/Canvas_API/Tutorial/Compositing
tags:
  - Canvas
  - Graphics
  - HTML
  - HTML5
  - Intermediate
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Compositing
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}</div>

<div class="summary">
<p><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Transformations">これまでの例</a>はすべて、常にほかの図形より手前に図形が描かれました。これはほとんどの状況において十分以上ですが、合成した図形を構築する順序を制限します。しかし、<code>globalCompositeOperation</code> プロパティを設定すると、この動作を変更できます。さらに <code>clip</code> プロパティで、図形の不要な部分を隠すことができます。</p>
</div>

<h2 id="globalCompositeOperation" name="globalCompositeOperation"><code>globalCompositeOperation</code></h2>

<p>新しい図形を既存の図形の後ろに描くだけでなく、特定の領域を覆う、一部分を canvas から消去する ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} メソッドのように矩形に限定されません) などが可能です。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}</dt>
 <dd>これは、新しい図形を描くときに適用する合成処理の種類を設定します。type は、12種類の合成処理から使用するものを特定する文字列です。</dd>
</dl>

<p>以下の例のコードについては、<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Compositing/Example">合成のサンプル</a>をご覧ください。</p>

<p>{{EmbedLiveSample("Compositing_example", 750, 6750, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}</p>

<h2 id="Clipping_paths" name="Clipping_paths">クリッピングパス</h2>

<p><img alt="" src="https://mdn.mozillademos.org/files/209/Canvas_clipping_path.png" style="float: right;">クリッピングパスは通常の canvas の図形に似ていますが、図形の不要な部分を隠すマスクとして作用します。これを右の画像で視覚化しました。赤い星型の図形は、クリッピングパスです。このパスの外側にあるものはすべて、canvas で描画されません。</p>

<p>クリッピングパスと先ほどの <code>globalCompositeOperation</code> プロパティを比較すると、おおむね同じ効果をもたらす合成モードとして <code>source-in</code> と <code>source-atop</code> の 2 つがあることがわかります。これら 2 つとのもっとも重要な違いは、クリッピングパスは実際に canvas に描かれるものではないことと、クリッピングパスは新しい図形による影響を受けないことです。これは制限された領域に複数の図形を描くという、クリッピングパスの目標を表しています。</p>

<p><a href="/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes" title="Web/Guide/HTML/HTML/Canvas/Tutorial/Drawing_shapes#Drawing_paths">図形を描く</a> の章では <code>stroke()</code> および <code>fill()</code> メソッドのみ言及しましたが、パスを扱う第 3 のメソッドとして <code>clip()</code> があります。</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.clip", "clip()")}}</dt>
 <dd>現在構築しているパスを、現在のクリッピングパスに変換します。</dd>
</dl>

<p><code>closePath()</code> の代わりに <code>clip()</code> を使用して、パスの輪郭を描いたり塗りつぶすのではなく、パスを閉じてクリッピングパスに変換します。</p>

<p>デフォルトで {{HTMLElement("canvas")}} 要素には、canvas 自体とまったく同じサイズのクリッピングパスが存在します。言い換えると、クリッピングは行われません。</p>

<h3 id="A_clip_example" name="A_clip_example"><code>clip</code> の例</h3>

<p>この例では、ランダムな星の集団の描画先を特定の領域に制限するために、円形のクリッピングパスを使用しています。</p>

<pre class="brush: js;highlight[9]">function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0,0,150,150);
  ctx.translate(75,75);

  // 円形のクリッピングパスを作成
  ctx.beginPath();
  ctx.arc(0,0,60,0,Math.PI*2,true);
  ctx.clip();

  // 背景を描く
  var lingrad = ctx.createLinearGradient(0,-75,0,75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75,-75,150,150);

  // 星を描く
  for (var j=1;j&lt;50;j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75-Math.floor(Math.random()*150),
                  75-Math.floor(Math.random()*150));
    drawStar(ctx,Math.floor(Math.random()*4)+2);
    ctx.restore();
  }

}

function drawStar(ctx,r){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r,0);
  for (var i=0;i&lt;9;i++){
    ctx.rotate(Math.PI/5);
    if(i%2 === 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
</pre>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" width="150" height="150"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">draw();</pre>
</div>

<p>コードの始めの数行で、背景として canvas と同サイズの黒い背景を描いて、原点を中央に移動します。次に、円弧を描いて <code>clip()</code> を呼び出すことで、円形のクリッピングパスを作成します。クリッピングパスは、canvas の状態として保存されるもののひとつでもあります。元のクリッピングパスを維持したい場合は、新しいクリッピングパスを作成する前に保存した canvas の状態があるとよいでしょう。</p>

<p>クリッピングパスを作成した後に描いたものはすべて、パスの内部にあるものだけが見える状態になります。これは、次に描いている線形グラデーションで明らかです。この後に独自の <code>drawStar()</code> 関数を使用して、位置や大きさがランダムな星を 50 個描きます。星もまた、クリッピングパスの内部で定義されたものしか見えません。</p>

<p>{{EmbedLiveSample("A_clip_example", "180", "180", "https://mdn.mozillademos.org/files/208/Canvas_clip.png")}}</p>

<div>{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}</div>
