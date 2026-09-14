---
title: Suivre le score et gagner
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

Ceci est la **8<sup>e</sup>** étape de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon sur [Gamedev-Canvas-workshop/lesson8.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Détruire les briques est vraiment cool, mais pour être encore meilleur le jeu pourrait attribuer des points pour chaque brique touchée et compter le score total.

## Calculer le score

Si vous pouvez voir votre score durant le jeu, vous pourrez impressioner vos amis. Vous avez besoin d'une variable pour stocker le score. Ajoutez ce qui suit dans votre JavaScript après le reste de vos variables&nbsp;:

```js
let score = 0;
```

Vous avez aussi besoin d'une fonction `drawScore()`, pour créer et mettre à jour l'affichage du score. Ajoutez ce qui suit après la fonction de détection de collision `collisionDetection()`&nbsp;:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score : " + score, 8, 20);
}
```

Dessiner du texte sur un canvas revient à dessiner une forme. La définition de la police est identique à celle en CSS — vous pouvez définir la taille et le type avec la méthode {{DOMxRef("CanvasRenderingContext2D.font","font()")}}. Puis utilisez {{DOMxRef("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} pour définir la couleur de la police et {{DOMxRef("CanvasRenderingContext2D.fillText","fillText()")}} pour définir la position du texte sur le canevas. Le premier paramètre est le texte lui-même — le code ci-dessus indique le nombre actuel de points — et les deux derniers paramètres sont les coordonnées où le texte est placé sur le canevas.

Pour attribuer le score à chaque collision avec une brique, ajoutez une ligne à la fonction `collisionDetection()` afin d'incrémenter la valeur de la variable score à chaque détection d'une collision. Ajoutez à votre code la ligne mise en évidence ci-dessous&nbsp;:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
        }
      }
    }
  }
}
```

Appelez la fonction `drawScore()` dans la fonction `draw()` pour garder le score à jour à chaque nouvelle frame — ajoutez la ligne suivante dans la fonction `draw()`, en dessous de l'appel à `drawPaddle()`&nbsp;:

```js
drawScore();
```

## Ajoutez un message de victoire lorsque toutes les briques ont été détruites

Le comptage des points fonctionne bien, mais vous ne les compterez pas indéfiniment. Alors qu'en est-il du score lorsque toutes les briques ont été détruites ? Après tout c'est l'objectif principal du jeu. Vous devez donc afficher un message de victoire si toutes les briques ont été détruites. Ajoutez la section mise en évidence dans votre fonction `collisionDetection()`&nbsp;:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
```

Grâce à ça, les utilisateurs peuvent réellement gagner le jeu. La fonction `document.location.reload()` recharge la page et redémarre le jeu au clic sur le bouton d'alerte.

## Comparez votre code

Le code réalisé fonctionne et ressemble à cela, au cas où vous voudriez le comparer avec le vôtre&nbsp;:

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
            alert(`VOUS AVEZ GAGNÉ, FÉLICITATIONS ! Score: ${score}`);
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
> Essayez d'ajouter plus de points par brique touchée et indiquez le nombre de points gagnés dans la boîte d'alerte de fin de partie.

## Prochaine étape

Le jeu est plutôt réussi à ce stade. Dans la prochaine leçon, vous le rendrez plus attraynt en ajoutant le [contrôle à la souris](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
