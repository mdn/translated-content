---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
tags:
  - Animation
  - Animations
  - Canvas
  - animated
  - efeitos em animações
translation_of: Web/API/Canvas_API/Tutorial/Advanced_animations
original_slug: Web/Guide/HTML/Canvas_tutorial/Advanced_animations
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</div>

<div class="summary">
<p>No último capítulo nós fizemos algumas <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">animações básicas </a> e fomos conhecer caminhos para conseguir com que as coisas se movessem. Nesta parte prestaremos mais atenção nos movimentos e vamos adicionar algumas físicas para fazer nossas animações mais avançadas.</p>
</div>

<h2 id="Desenhe_uma_bola">Desenhe uma bola</h2>

<p>Nós estamos indo usar uma bola para nossa animação estudada. Então vamos pintar aquela bola desenhada no canvas. O seguinte código configurará.</p>

<pre class="brush: html">&lt;canvas id="canvas" width="600" height="300"&gt;&lt;/canvas&gt;
</pre>

<p> Como usual, nós precisamos de um contexto de desenho primeiro. Para desenhar a bola, nós criaremos um objeto bola ao qual contém propriedades e um método draw() para pintar no canvas.</p>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();</pre>

<p>Nada de especial aqui, a bola é atualmente um simples círculos e desenha com ajuda de </p>

<p>{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} method.</p>

<h2 id="Adicionando_velocidade">Adicionando velocidade</h2>

<p>Agora que você tem a bola, Nós estamos prontos para adicionar uma animação como nós temos aprendido no <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">último capítulo</a> deste tutorial. Denovo, {{domxref("window.requestAnimationFrame()")}} ajuda-nos a controlar a animação. a bola pega o movimento adicionando um vetor de velocidade para a posição. Para cada frame, N[ós também {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}}o canvas para remover velhor círculos da prioridade dos frames.</p>

<pre class="brush: js; highlight:[8,9,24,25]">var canvas = document.getElementById('canvas');
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
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

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
</pre>

<h2 id="Limites">Limites</h2>

<p>Sem um teste de limite de colisão nossa bola correria para fora do canvas rapidamente. Nós precisamos checar se a posição x e y da bola está fora das dimensões do canvas e invertida a direção do vetor de velocidade. Para fazer isto, Nós adicionamos a seguinte checagem para o método draw():</p>

<pre class="brush: js">if (ball.y + ball.vy &gt; canvas.height || ball.y + ball.vy &lt; 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx &gt; canvas.width || ball.x + ball.vx &lt; 0) {
  ball.vx = -ball.vx;
}</pre>

<h3 id="Primeira_demonstração">Primeira demonstração</h3>

<p>Deixe-me ver como isto fica em ação até agora. Mova seu mouse dentro do canvas para iniciar a animação.</p>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">var canvas = document.getElementById('canvas');
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
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

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("First_demo", "610", "310")}}</p>

<h2 id="Aceleração">Aceleração</h2>

<p>Para fazer o movimento tão real, você para jogar com a velocidade como isto, por exemplo:</p>

<pre class="brush: js">ball.vy *= .99;
ball.vy += .25;</pre>

<p>Esta diminuição da velocidade vertical para cada frame. Assim que a bola somente saltar no chão no final.</p>

<div class="hidden">
<h6 id="Second_demo">Second demo</h6>

<pre class="brush: html">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">var canvas = document.getElementById('canvas');
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
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

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("Second_demo", "610", "310")}}</p>

<h2 id="Efeito_de_arrastar">Efeito de arrastar</h2>

<p>Até agora nós temos feito uso do {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} méthodo quando limpar as prioridades do frame.Se você substituir este método com um semi-transparente {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, você pode fácilmente criar um efeito de arrastar.</p>

<pre class="brush: js">ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.fillRect(0, 0, canvas.width, canvas.height);</pre>

<div class="hidden">
<h6 id="Third_demo">Third demo</h6>

<pre class="brush: html">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>

<pre class="brush: js">var canvas = document.getElementById('canvas');
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
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

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();</pre>
</div>

<p>{{EmbedLiveSample("Third_demo", "610", "310")}}</p>

<h2 id="Adicione_um_controle_de_mouse">Adicione um controle de mouse</h2>

<p> </p>

<p>Para conseguir alguns controles sobre a bola, nós podemos fazer isto seguindo nosso mouse usando o evento <a href="/en-US/docs/Web/Reference/Events/mousemove">mouseover</a>, por exemplo. O <a href="/en-US/docs/Web/Events/click">clique </a>por exemplo. O evento <code><a href="/en-US/docs/Web/Events/click">clique </a>que</code> libera a bola e deixa seu limite de novo.</p>

<div class="hidden">
<pre class="brush: html">&lt;canvas id="canvas" style="border: 1px solid" width="600" height="300"&gt;&lt;/canvas&gt;</pre>
</div>

<pre class="brush: js">var canvas = document.getElementById('canvas');
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
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

canvas.addEventListener('mousemove', function(e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener('click', function(e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
</pre>

<p>Mova a bola usando seu mouse e libere - o com um clique.</p>

<p>{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}</p>

<h2 id="Sair">Sair</h2>

<p>Este curto capítulo somente explica algumas técnicas para criar as mais avançadas animações. Há muito mais! Como adicionar um paddle, alguns bricks, e tornar este demo dentro de um jogo <a href="http://en.wikipedia.org/wiki/Breakout_%28video_game%29">Breakout</a>? Cheque a nossa área de Desenvolvimento de jogos para mais artigos de jogos.</p>

<h2 id="Veja_também">Veja também:</h2>

<ul>
 <li>{{domxref("window.requestAnimationFrame()")}}</li>
 <li><a href="/en-US/docs/Games/Techniques/Efficient_animation_for_web_games">Efficient animation for web games</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</p>
