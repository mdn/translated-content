---
title: Créer un champ de briques
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

Il s'agit de la **6<sup>e</sup> étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source après avoir complété cette leçon sur [Gamedev-Canvas-workshop/lesson6.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Après avoir modifié les mécaniques de jeu, nous pouvons maintenant perdre — c'est une bonne chose, car cela signifie que le jeu commence enfin à ressembler à un vrai jeu. Cependant, cela deviendra vite ennuyeux si tout ce que vous faites est de faire rebondir la balle sur les murs et la raquette. Ce dont un jeu de casse-briques a vraiment besoin, ce sont des briques à détruire avec la balle, et c'est ce que nous allons créer maintenant&nbsp;!

## Définir les variables des briques

L'objectif principal de cette leçon est d'afficher quelques lignes de code pour les briques, en utilisant une boucle imbriquée qui parcourt un tableau à deux dimensions. Mais d'abord, nous devons définir quelques variables pour indiquer des informations sur les briques, comme leur largeur, leur hauteur, le nombre de lignes et de colonnes, etc. Ajoutez les lignes suivantes à votre code sous les variables que vous avez déjà déclarées dans votre programme.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

Ici nous avons défini dans l'ordre le nombre de lignes et de colonnes de briques, mais également une hauteur, une largeur et un espacement (<i lang="en">padding</i> en anglais) entre les briques pour qu'elles ne se touchent pas entre elles et qu'elles ne commencent pas a être tracées sur le bord du canevas.

Nous allons placer nos briques dans un tableau à deux dimensions. Il contiendra les colonnes de briques (c), qui à leur tour contiendront les lignes de briques (r) qui chacune contiendront un objet défini par une position `x` et `y` pour afficher chaque brique sur l'écran.
Ajoutez le code suivant juste en-dessous des variables&nbsp;:

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

Le code ci-dessus va parcourir les lignes et les colonnes et créer de nouvelles briques. REMARQUE&nbsp;: les objets briques seront également utilisés plus tard afin de détecter les collisions.

## Logique de dessin des briques

Maintenant créons une fonction pour parcourir toutes les briques dans le tableau et les dessiner sur l'écran. Notre code pourrait ressembler à ça&nbsp;:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

Une nouvelle fois, nous parcourons les colonnes et les lignes pour attribuer une position `x` et `y` à chaque brique, et nous dessinons les briques — de taille `brickWidth` x `brickHeight` — sur le canevas, pour chaque itération de la boucle. Le problème est que nous les affichons toutes au même endroit, aux coordonnées `(0,0)`. Ce dont nous avons besoin d'inclure ce sont quelques calculs qui vont définir la position `x` et `y` de chaque brique à chaque passage dans la boucle&nbsp;:

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

Chaque position `brickX` est déterminée par `brickWidth` + `brickPadding`, multiplié par le nombre de colonnes, `c`, plus `brickOffsetLeft`&nbsp;; la logique pour `brickY` est identique excepté qu'on utilise pour les ligne les valeurs `r`, `brickHeight` et `brickOffsetTop`. Maintenant chaque brique peut être placée à sa position correcte en lignes et colonnes, avec un espacement entre chaque brique, et un décalage par rapport aux bords gauche et supérieur du canevas.

La version finale de la fonction `drawBricks()`, après avoir assigné les valeurs `brickX` et `brickY` comme coordonnées, plutôt que `(0,0)` à chaque fois, va ressembler à ceci — ajouter la fonction ci-dessous après `drawPaddle()`&nbsp;:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

## Afficher les briques

La dernière chose à faire dans cette leçon est d'ajouter un appel à `drawBricks()` quelque part dans la fonction `draw()`, préférablement au début, entre le nettoyage du canevas et le dessin de la balle. Ajoutez la ligne suivante juste en dessous de `drawBall()`&nbsp;:

```js
drawBricks();
```

## Comparez votre code

À ce stade, le jeu a gagné un peu en intérêt&nbsp;:

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Démarrer le jeu</button>
```

```css hidden
canvas {
  background: #eeeeee;
}
button {
  display: block;
}
```

```js hidden
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      if ((y -= paddleHeight)) {
        dy = -dy;
      }
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Nécessaire pour que Chrome termine le jeu
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

function startGame() {
  interval = setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{EmbedLiveSample("Comparez votre code", 600, 360)}}

> [!NOTE]
> Essayez de changer le nombre de briques dans une colonne ou dans une ligne ou bien leur position.

## Prochaines étapes

Nous avons donc maintenant des briques&nbsp;! Mais la balle n'interagit pas du tout avec elles — nous allons changer cela dans le chapitre sept&nbsp;: [Détection des collisions](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
