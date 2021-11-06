---
title: Animations avancées
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
translation_of: Web/API/Canvas_API/Tutorial/Advanced_animations
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Advanced_animations
---
{{CanvasSidebar}} {{PreviousNext("Tutoriel_canvas/Animations_basiques", "Tutoriel_canvas/Pixel_manipulation_with_canvas")}}

Dans le dernier chapitre, nous avons réalisé des [animations basiques](/fr/docs/Tutoriel_canvas/Animations_basiques) et avons appris comment faire en sorte que les éléments se déplacent. Dans cette partie, nous allons regarder de prêt le mouvement lui-même et ajouter un peu de physique afin de réaliser nos animations avancées.

## Dessinons une balle

Nous allons utiliser une balle pour étudier les animations. Ainsi, Commençons par dessiner notre balle au sein du canevas.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Comme d'habitude, nous avons tout d'abord besoin de dessiner le contexte. Pour dessiner la balle, nous allons créer un objet `ball` contenant des propriétés et une méthode `draw()` afin de la placer sur le canevas.

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

Il n'y a rien de spécial ici, la balle est pour le moment un simple cercle qui est dessiné à l'aide de la méthode {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}.

## Ajout de la vitesse

Maintenant que nous avons une balle, nous sommes prêts à ajouter une animation simple comme nous avons pu le voir dans le [dernier chapitre](/fr/docs/Tutoriel_canvas/Animations_basiques) de ce tutoriel. Une fois encore, {{domxref("window.requestAnimationFrame()")}} nous aide à contrôler l'animation. Il est possible de déplacer la balle en ajoutant un vecteur de vitesse à la position. Pour chaque "frame", nous avons aussi {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} _(nettoyé)_ les canvas pour supprimer les anciens cercles des "frames" précédents.

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

## Limites

Si aucun test de collision n'est effectué, notre balle sort hors du canevas rapidement. Nous avons ici besoin de vérifier si les positions `x` et `y` de la balle sont hors des dimensions du canevas et si c'est le cas, d'inverser la direction des vecteurs de vitesse. Pour faire cela, nous ajoutons les vérifications suivantes à la méthode `draw` :

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### Première demo

Voyons voir ce que cela donne. Déplacez votre souris dans le canevas pour commencer l'animation :

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

{{EmbedLiveSample("Première_demo", "610", "310")}}

## Accélération

Afin d'obtenir un mouvement plus réel, vous pouvez jouer sur la vitesse, par exemple :

```js
ball.vy *= .99;
ball.vy += .25;
```

Ceci ralentit la vitesse verticale à chaque rendu d'image de sorte que la balle va rebondir de moins en moins haut.

### Deuxième démo

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

{{EmbedLiveSample("Deuxième_démo", "610", "310")}}

## Effet de traînée

Jusqu'à maintenant, nous avons utilisé la méthode {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} pour effacer les images précédentes. En la remplaçant par la méthode {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} et en utilisant un remplissage semi-transparent, on obtient un effet de traînée.

```js
ctx.fillStyle = 'rgba(255,255,255,0.3)';
ctx.fillRect(0,0,canvas.width,canvas.height);
```

### Troisième démo

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

{{EmbedLiveSample("Troisième_démo", "610", "310")}}

## Ajout d'un contrôle de souris

Afin d'obtenir quelques contrôles sur la balle, nous pouvons faire suivre notre souris en utilisant l'événement [`mousemove`](/en-US/docs/Web/Reference/Events/mousemove), par exemple. L'événement [`click`](/en-US/docs/Web/Events/click) relâche la balle et la laisse rebondir à nouveau.

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

Déplacez la balle en utilisant votre souris et relâchez-la avec un click.

{{EmbedLiveSample("Ajout_d\'un_contrôle_de_souris", "610", "310")}}

## Casse-briques

Ce petit chapitre explique seulement quelques techniques pour créer des animations avancées. Il en existe bien davantage ! Que diriez-vous d'ajouter une raquette, des briques et de transformer cette démo en une partie de casse-briques ? Consultez notre zone de développement de jeux pour plus d'articles liés [aux jeux](/fr/docs/Jeux).

## Voir aussi

- {{domxref("window.requestAnimationFrame()")}}
- [Animation efficace pour les jeux vidéo](/fr/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Tutoriel_canvas/Animations_basiques", "Tutoriel_canvas/Pixel_manipulation_with_canvas")}}
