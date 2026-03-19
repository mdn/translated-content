---
title: Contrôle à la souris
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

C'est la **9<sup>e</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon sur [Gamedev-Canvas-workshop/lesson9.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

Le jeu lui-même est en fait terminé, alors travaillons à le peaufiner. Nous avons déjà ajouté des commandes au clavier, mais nous pourrions facilement ajouter des commandes à la souris.

## Détecter les mouvements de la souris

Détecter les mouvements de la souris est moins complexe que de détecter les pressions sur les touches&nbsp;: nous avons seulement besoin du gestionnaire pour l'évènement {{DOMxRef("Element/mousemove_event", "mousemove")}}. Ajoutez la ligne suivante au même endroit que les autres gestionnaires d'évènements, juste en dessous de l'évènement `keyup`&nbsp;:

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Lier le mouvement de la raquette au mouvement de la souris

Nous pouvons mettre à jour la position de la raquette en fonction des coordonnées du pointeur — c'est exactement ce que fera la fonction de manipulation suivante. Ajoutez la fonction ci-dessous à votre code, sous la dernière ligne que vous avez ajoutée&nbsp;:

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

Dans cette fonction, nous calculons d'abord une valeur `relativeX`, qui est égale à la position horizontale de la souris dans la fenêtre de visualisation (`e.clientX`) moins la distance entre le bord gauche de la toile et le bord gauche de la fenêtre de visualisation (`canvas.offsetLeft`) — en fait, cette valeur est égale à la distance entre le bord gauche du canevas et le pointeur de la souris. Si la position relative du pointeur X est supérieure à zéro et inférieure à la largeur du canevas, le pointeur se trouve dans les limites du canevas, et la position `paddleX` (ancrée sur le bord gauche de la palette) est fixée à la valeur `relativeX` moins la moitié de la largeur de la palette, de sorte que le mouvement sera en fait relatif au milieu de la raquette.

La raquette suivra désormais la position du curseur de la souris, mais comme nous limitons le mouvement à la taille du canevas, elle ne disparaîtra pas complètement d'un côté ou de l'autre.

## Comparez votre code

Voici le code final du chapitre, à vous de vérifier et de le tester pour voir s'il y a des différences.

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

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);

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

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("VOUS AVEZ GAGNÉ, FÉLICITATIONS !");
            document.location.reload();
            clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
          }
        }
      }
    }
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
      if (bricks[c][r].status === 1) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
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
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score : ${score}`, 8, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("PERDU !");
      document.location.reload();
      clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
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
> Essayez d'ajuster les limites du mouvement de la raquette, de sorte que la raquette entière soit visible sur les deux bords du canevas au lieu de seulement la moitié.

## Prochaine étape

Maintenant que nous avons un jeu complet, nous allons terminer notre série de leçons avec quelques petites retouches supplémentaires — [Finitions](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
