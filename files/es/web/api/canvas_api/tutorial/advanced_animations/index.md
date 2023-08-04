---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

En el último capítulo hicimos unas [animaciones básicas](/es/docs/Web/API/Canvas_API/Tutorial/Basic_animations) y nos familiarizamos con varias maneras de mover cosas. En esta parte examinaremos la moción misma y agregaremos la física para hacer nuestras animaciones más avanzadas.

## Dibujar una bola

Vamos a usar una bola para nuestro estudio de la animación, entonces primero dibujamos la bola dentro del canvas. El siguente código lo configurará.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Como siempre, necesitamos un entorno para dibujar. Para dibujar la bola, creamos un contenido `ball` lo cual contiene propiedades y un método `draw()`.

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

ball.draw();
```

Nada especial aquí; la bola es en realidad un circulo sencillo y se dibuja con el método {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}.

## Agregar velocidad

Ya que tenemos una bola, estamos listos agregar una animación básica así como aprendimos en el [último capítulo](/es/docs/Web/API/Canvas_API/Tutorial/Basic_animations) de esta tutoría. De nuevo, {{domxref("window.requestAnimationFrame()")}} nos ayuda controlar la animación. La bola empieza moverse por agregar un vector de velocidad a la posición. Para cada fotograma, también {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} el canvas para quitar los circulos viejos de los fotogramas anteriores.

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

## Límites

Si no probamos los límites, de repente nuestra bola se agota el canvas. Necesitamos verificar si las posiciones `x` e `y` están fuera de las dimensiones del canvas y invertir la direción de los vectores de velocidad. Para hacer eso, agregamos los siguentes pasos al método `draw`:

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### Primera demo

Veamos como se ve en acción hasta este punto. Dirige el ratón dentro del canvas para empezar la animación.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

{{EmbedLiveSample("First_demo", "610", "310")}}

## Aceleración

Para convertir la moción en más auténtica, puedes jugar con la velocidad, así por ejemplo:

Esto reduce el vector vertical de velocidad para cada fotograma para que la bola termina rebotando en el suelo.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

{{EmbedLiveSample("Second_demo", "610", "310")}}

## Efecto de rezagar

Hasta este punto hemos limpiado los fotogramas anteriores con el método {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}. Si reemplazas este método con un semi-transparente {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, puedes facilmente crear un efecto de rezagar.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

```js
ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

{{EmbedLiveSample("Third_demo", "610", "310")}}

## Agregar control de ratón

Para controlar la bola, podemos hacerla seguir nuestro ratón usando el evento [`mousemove`](/es/docs/Web/Reference/Events/mousemove), por ejemplo. El evento [`click`](/es/docs/Web/Events/click) solta la bola y la deja rebotar de nuevo.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function (e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click", function (e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```

Mueve la bola usando el ratón y suéltala haciendo click.

{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}

## Breakout

Este capítulo corto sólo explica algunas técnicas para crear animaciones más avanzadas. ¡Hay muchos más! ¿Qué tal agregar una raqueta, algunos ladrillos, y convertir esta demo en un partido [Breakout](http://en.wikipedia.org/wiki/Breakout_%28video_game%29)? Visita nuestra área de [Game development](/es/docs/Games) para mayor información.

## Vea también

- {{domxref("window.requestAnimationFrame()")}}
- [Efficient animation for web games](/es/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
