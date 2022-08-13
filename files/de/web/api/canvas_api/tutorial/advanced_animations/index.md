---
title: Fortgeschrittene Animationen
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
tags:
  - Canvas
  - Graphics
  - Tutoria
translation_of: Web/API/Canvas_API/Tutorial/Advanced_animations
original_slug: Web/Guide/HTML/Canvas_Tutorial/Advanced_animations
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

In dem vorherigem Kapitel machten wir einige [Basisanimationen](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) und lernten Möglichkeiten, Dinge zu bewegen. In diesem Kapitel werden wir uns die Bewegung selbst anschauen und werden etwas Physik einfügen um unsere Animationen fortgeschrittener zu machen.

## Einen Ball zeichnen

Wir werden einen Ball für unsere Animationen benutzen, deshalb zeichnen wir zuerst einen Ball mit dem folgendem Code in die Canvas.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Wie gewöhnlich brauchen wir zuerst ein draw context. Um den Ball zu zeichnen, werden wir ein `ball` - Objekt erstellen, welches Eigenschaften und eine `draw()` - Methode enthält, um es in die Canvas zu zeichnen.

```js
var canvas = document.getElementById('canvas');
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

ball.draw();
```

Nichts Besonderes hier, der Ball ist momentan ein einfacher Kreis und wird mit der {{domxref("CanvasRenderingContext2D.arc()", "arc()")}} - Methode gezeichnet.

## Geschwindigkeit hinzufügen

Nun haben wir einen Ball und sind bereit, eine Basisanimation hinzuzufügen, wie wir es im [vorherigen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations) von diesem Tutorial lernten. Wieder hilft uns {{domxref("window.requestAnimationFrame()")}}, die Animation zu kontrollieren. Der Ball bewegt sich durch Hinzufügen von einem Geschwindigkeitsvektor zu der Position. Für jedes Frame {{domxref("CanvasRenderingContext2D.clearRect", "clean", "", 1)}} wir die Canvas, um alte Kreise zu entfernen.

```js
var canvas = document.getElementById('canvas');
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
```

## Gebundenheit

Ohne jede gebundene Kollisionsüberprüfung fliegt unser Ball schnell aus dem Canvas. Wir müssen die `x` - und `y`position von dem Ball überprüfen und wenn der Ball außerhalb des Canvas ist, die Richtung der Geschwindigkeitsvektoren umkehren.

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### Erste Demo

Lass uns sehen, wie das in Aktion aussieht. Bewegen Sie die Maus in die Canvas, um die Animation zu starten.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById('canvas');
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

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
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

ball.draw();
```

{{EmbedLiveSample("Erste_Demo", "610", "310")}}

## Acceleration

Um die Bewegung realistischer zu machen, können Sie mit Geschwindigkeit spielen, zum Beispiel:

```js
ball.vy *= .99;
ball.vy += .25;
```

Dies verlangsamt die vertikale Geschwindigkeit in jedem Frame, sodass der Ball am Ende nur noch am Boden hüpft.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById('canvas');
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

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
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

ball.draw();
```

{{EmbedLiveSample("Acceleration", "610", "310")}}

## Spureneffekt

Bis jetzt haben wir die {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} - Methode benutzt, wenn wir Frames clearten. Wenn Sie diese Methode durch {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} ersetzen, können Sie einfach einen Spureneffekt erzeugen.

```js
ctx.fillStyle = 'rgba(255,255,255,0.3)';
ctx.fillRect(0,0,canvas.width,canvas.height);
```

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
var canvas = document.getElementById('canvas');
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

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
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

ball.draw();
```

{{EmbedLiveSample("Spureneffekt", "610", "310")}}

## Mauskontrolle hinzufügen

Um etwas Kontrolle über den Ball zu bekommen, können wir machen, dass er die Maus verfolgt, indem wir beispielsweise das [`mousemove`](/en-US/docs/Web/Reference/Events/mousemove) - Ereignis benutzen. Das [`click`](/en-US/docs/Web/Events/click) - Ereignis lässt den Ball wieder hüpfen.

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js
var canvas = document.getElementById('canvas');
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

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
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
```

Bewegen Sie den Ball mit der Maus und klicken Sie, um ihn loszulassen.

{{EmbedLiveSample("Mauskontrolle_hinzuf%C3%BCgen", "610", "310")}}

## Breakout

Dieses kurze Kapitel erklärt nur einige Möglichkeiten, fortgeschrittene Animationen zu erstellen. Es gibt viel mehr! Was darüber, ein Brett und einige Blöcke hizuzufügen und diese Demo in ein [Breakout](<http://de.wikipedia.org/wiki/Breakout(Computerspiel)>) - Spiel zu verwandeln? Schauen Sie sich unseren [Spieleentwickelungsbereich](/de/docs/Games) an für mehr auf Spiele bezogene Artikel.

## Siehe auch

- {{domxref("window.requestAnimationFrame()")}}
- [Effiziete Animation für Webspiele](/de/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
