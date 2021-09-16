---
title: 高度なアニメーション
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
tags:
  - Canvas
  - Graphics
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Advanced_animations
original_slug: Web/Guide/HTML/Canvas_tutorial/Advanced_animations
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</div>

<div class="summary">
<p>前の章では、いくつかの<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations">基本的なアニメーション</a>を作成して、物の動かし方を学びました。このパートでは、 運動そのものをより詳細に見て、 アニメーションをより高度にするための物理を追加していきましょう。</p>
</div>

<h2 id="ボールを描く">ボールを描く</h2>

<p>アニメーションの勉強のために、ボールを使おうと思うので、最初にボールを canvas 上に描きましょう。次のコードは私たちの準備をしてくれるでしょう。</p>

<pre class="notranslate">&lt;canvas id="canvas" width="600" height="300"&gt;&lt;/canvas&gt;
</pre>

<p>普通は、まず描画コンテキストが必要になります。 ボールを描くため、 <code>プロパティと canvas にボールを描くための draw() </code>メソッドを持つ ball オブジェクトを作りましょう。</p>

<pre class="brush: js notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();</pre>

<p>ここでは特別なことはなく、ball は本当に単純な円で、{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} メソッドの助けを借りて描かれています。</p>

<h2 id="速度の追加">速度の追加</h2>

<p>ボールが手に入りましたので、このチュートリアルの<a href="/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations">前の章</a>で習ったように、基本的なアニメーションを加えていきましょう。また {{domxref("window.requestAnimationFrame()")}} がアニメーションの制御を手助けしてくれます。The ball gets moving by adding a velocity vector to the position. For each frame, we also {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} the canvas to remove old circles from prior frames.</p>

<pre class="brush: js; highlight:[8,9,24,25] notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();
</pre>

<h2 id="境界線">境界線</h2>

<p>Without any boundary collision testing our ball runs out of the canvas quickly. We need to check if the <code>x</code> and <code>y</code> position of the ball is out of the canvas dimensions and invert the direction of the velocity vectors. To do so, we add the following checks to the <code>draw</code> method:</p>

<pre class="brush: js notranslate">if (ball.y + ball.vy &gt; canvas.height || ball.y + ball.vy &lt; 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx &gt; canvas.width || ball.x + ball.vx &lt; 0) {
  ball.vx = -ball.vx;
}</pre>

<h3 id="最初のデモ">最初のデモ</h3>

<p>これまでで、実際にどのように動くか見てみましょう。canvas にマウスを移動させて、アニメーションを開始してます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy &gt; canvas.height ||
      ball.y + ball.vy &lt; 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx &gt; canvas.width ||
      ball.x + ball.vx &lt; 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("First_demo", "610", "310")}}</p>

<h2 id="加速">加速</h2>

<p>動きをよりリアルにするために、このような速度で再生できます。たとえば：</p>

<pre class="brush: js notranslate">ball.vy *= .99;
ball.vy += .25;</pre>

<p>This slows down the vertical velocity each frame, so that the ball will just bounce on the floor in the end.</p>

<div class="hidden">
<h6 id="Second_demo">Second demo</h6>

<pre class="brush: html notranslate">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= .99;
  ball.vy += .25;

  if (ball.y + ball.vy &gt; canvas.height ||
      ball.y + ball.vy &lt; 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx &gt; canvas.width ||
      ball.x + ball.vx &lt; 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("Second_demo", "610", "310")}}</p>

<h2 id="後引きの効果">後引きの効果</h2>

<p>Until now we have made use of the {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} method when clearing prior frames. If you replace this method with a semi-transparent {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, you can easily create a trailing effect.</p>

<pre class="brush: js notranslate">ctx.fillStyle = 'rgba(255,255,255,0.3)';
ctx.fillRect(0,0,canvas.width,canvas.height);</pre>

<div class="hidden">
<h6 id="Third_demo">Third demo</h6>

<pre class="brush: html notranslate">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= .99;
  ball.vy += .25;

  if (ball.y + ball.vy &gt; canvas.height ||
      ball.y + ball.vy &lt; 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx &gt; canvas.width ||
      ball.x + ball.vx &lt; 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e){
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("Third_demo", "610", "310")}}</p>

<h2 id="マウスコントロールの追加">マウスコントロールの追加</h2>

<p>ボールに対するちょっとした制御をするために、たとえば <code><a href="/ja/docs/Web/Reference/Events/mousemove">mousemove</a></code> イベントを使用してボールをマウスの動きに従わせる。といったことができます。<code><a href="/ja/docs/Web/Events/click">click </a></code>イベントでボールを開放して、またバウンドさせる。といったことも可能です。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>
</div>

<pre class="brush: js notranslate">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy &gt; canvas.height || ball.y + ball.vy &lt; 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx &gt; canvas.width || ball.x + ball.vx &lt; 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e){
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click",function(e){
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
</pre>

<p>マウスを使ってボールを動かして、クリックで開放してください。</p>

<p>{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}</p>

<h2 id="ブロック崩し">ブロック崩し</h2>

<p>This short chapter only explains some techniques to create more advanced animations. There are many more! How about adding a paddle, some bricks, and turn this demo into a <a href="http://en.wikipedia.org/wiki/Breakout_%28video_game%29">Breakout</a> game? Checkout our <a href="/ja/docs/Games">Game development</a> area for more gaming related articles.</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li>{{domxref("window.requestAnimationFrame()")}}</li>
 <li><a href="/ja/docs/Games/Techniques/Efficient_animation_for_web_games">Efficient animation for web games</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</p>
