---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

No último capítulo nós fizemos algumas [animações básicas](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Basic_animations) e fomos conhecer caminhos para conseguir com que as coisas se movessem. Nesta parte prestaremos mais atenção nos movimentos e vamos adicionar algumas físicas para fazer nossas animações mais avançadas.

## Desenhe uma bola

Nós estamos indo usar uma bola para nossa animação estudada. Então vamos pintar aquela bola desenhada no canvas. O seguinte código configurará.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Como usual, nós precisamos de um contexto de desenho primeiro. Para desenhar a bola, nós criaremos um objeto bola ao qual contém propriedades e um método draw() para pintar no canvas.

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

Nada de especial aqui, a bola é atualmente um simples círculos e desenha com ajuda de

{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} method.

## Adicionando velocidade

Agora que você tem a bola, Nós estamos prontos para adicionar uma animação como nós temos aprendido no [último capítulo](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Basic_animations) deste tutorial. Denovo, {{domxref("window.requestAnimationFrame()")}} ajuda-nos a controlar a animação. a bola pega o movimento adicionando um vetor de velocidade para a posição. Para cada frame, N\[ós também {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}}o canvas para remover velhor círculos da prioridade dos frames.

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

## Limites

Sem um teste de limite de colisão nossa bola correria para fora do canvas rapidamente. Nós precisamos checar se a posição x e y da bola está fora das dimensões do canvas e invertida a direção do vetor de velocidade. Para fazer isto, Nós adicionamos a seguinte checagem para o método draw():

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### Primeira demonstração

Deixe-me ver como isto fica em ação até agora. Mova seu mouse dentro do canvas para iniciar a animação.

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

## Aceleração

Para fazer o movimento tão real, você para jogar com a velocidade como isto, por exemplo:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

Esta diminuição da velocidade vertical para cada frame. Assim que a bola somente saltar no chão no final.

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

{{EmbedLiveSample("Second_demo", "610", "310")}}

## Efeito de arrastar

Até agora nós temos feito uso do {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} méthodo quando limpar as prioridades do frame.Se você substituir este método com um semi-transparente {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}, você pode fácilmente criar um efeito de arrastar.

```js
ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

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

{{EmbedLiveSample("Third_demo", "610", "310")}}

## Adicione um controle de mouse

Para conseguir alguns controles sobre a bola, nós podemos fazer isto seguindo nosso mouse usando o evento [mouseover](/pt-BR/docs/Web/Reference/Events/mousemove), por exemplo. O [clique](/pt-BR/docs/Web/Events/click) por exemplo. O evento `clique que` libera a bola e deixa seu limite de novo.

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

Mova a bola usando seu mouse e libere - o com um clique.

{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}

## Sair

Este curto capítulo somente explica algumas técnicas para criar as mais avançadas animações. Há muito mais! Como adicionar um paddle, alguns bricks, e tornar este demo dentro de um jogo [Breakout](http://en.wikipedia.org/wiki/Breakout_%28video_game%29)? Cheque a nossa área de Desenvolvimento de jogos para mais artigos de jogos.

## Veja também

- {{domxref("window.requestAnimationFrame()")}}
- [Efficient animation for web games](/pt-BR/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
