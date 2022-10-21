---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
tags:
  - Canvas
  - Tutoria
  - graficos
translation_of: Web/API/Canvas_API/Tutorial/Advanced_animations
original_slug: Web/Guide/HTML/Canvas_tutorial/Advanced_animations
---
<div>{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</div>

<div class="summary">
<p>En el último capítulo hicimos unas <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">animaciones básicas</a> y nos familiarizamos con varias maneras de mover cosas. En esta parte examinaremos la moción misma y agregaremos la física para hacer nuestras animaciones más avanzadas.</p>
</div>

<h2 id="Dibujar_una_bola">Dibujar una bola</h2>

<p>Vamos a usar una bola para nuestro estudio de la animación, entonces primero dibujamos la bola dentro del canvas. El siguente código lo configurará.</p>

<pre class="brush: html">&lt;canvas id="canvas" width="600" height="300"&gt;&lt;/canvas&gt;
</pre>

<p>Como siempre, necesitamos un entorno para dibujar. Para dibujar la bola, creamos un contenido <code>ball</code> lo cual contiene propiedades y un método <code>draw()</code>.</p>

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

<p>Nada especial aquí; la bola es en realidad un circulo sencillo y se dibuja con el método {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}.</p>

<h2 id="Agregar_velocidad">Agregar velocidad</h2>

<p>Ya que tenemos una bola, estamos listos agregar una animación básica así como aprendimos en el <a href="/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">último capítulo</a> de esta tutoría. De nuevo, {{domxref("window.requestAnimationFrame()")}} nos ayuda controlar la animación. La bola empieza moverse por agregar un vector de velocidad a la posición. Para cada fotograma, también {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} el canvas para quitar los circulos viejos de los fotogramas anteriores.</p>

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

<h2 id="Límites">Límites</h2>

<p>Si no probamos los límites, de repente nuestra bola se agota el canvas. Necesitamos verificar si las posiciones <code>x</code> e <code>y</code> están fuera de las dimensiones del canvas y invertir la direción de los vectores de velocidad. Para hacer eso, agregamos los siguentes pasos al método <code>draw</code>:</p>

<pre class="brush: js">if (ball.y + ball.vy &gt; canvas.height || ball.y + ball.vy &lt; 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx &gt; canvas.width || ball.x + ball.vx &lt; 0) {
  ball.vx = -ball.vx;
}</pre>

<h3 id="Primera_demo">Primera demo</h3>

<p>Veamos como se ve en acción hasta este punto. Dirige el ratón dentro del canvas para empezar la animación.</p>

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

<h2 id="Aceleración">Aceleración</h2>

<p>Para convertir la moción en más auténtica, puedes jugar con la velocidad, así por ejemplo:</p>

<pre class="brush: js">ball.vy *= .99;
ball.vy += .25;</pre>

<p>Esto reduce el vector vertical de velocidad para cada fotograma para que la bola termina rebotando en el suelo.</p>

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

<h2 id="Efecto_de_rezagar">Efecto de rezagar</h2>

<p>Hasta este punto hemos limpiado los fotogramas anteriores con el método {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}. Si reemplazas este método con un semi-transparente {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, puedes facilmente crear un efecto de rezagar.</p>

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

<h2 id="Agregar_control_de_ratón">Agregar control de ratón</h2>

<p>Para controlar la bola, podemos hacerla seguir nuestro ratón usando el evento <code><a href="/en-US/docs/Web/Reference/Events/mousemove">mousemove</a></code>, por ejemplo. El evento <code><a href="/en-US/docs/Web/Events/click">click</a></code> solta la bola y la deja rebotar de nuevo.</p>

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

<p>Mueve la bola usando el ratón y suéltala haciendo click.</p>

<p>{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}</p>

<h2 id="Breakout">Breakout</h2>

<p>Este capítulo corto sólo explica algunas técnicas para crear animaciones más avanzadas. ¡Hay muchos más!  ¿Qué tal agregar una raqueta, algunos ladrillos, y convertir esta demo en un partido <a href="http://en.wikipedia.org/wiki/Breakout_%28video_game%29">Breakout</a>? Visita nuestra área de <a href="/en-US/docs/Games">Game development</a> para mayor información.</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{domxref("window.requestAnimationFrame()")}}</li>
 <li><a href="/en-US/docs/Games/Techniques/Efficient_animation_for_web_games">Efficient animation for web games</a></li>
</ul>

<p>{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}</p>
