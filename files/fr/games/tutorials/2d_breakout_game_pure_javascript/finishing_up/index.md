---
title: Finitions
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

C'est la dernière étape de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source tel qu'il devrait être après avoir terminé cette leçon sur [Gamedev-Canvas-workshop/lesson10.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html).

Il y a toujours des améliorations possibles pour tous les jeux que nous créons. Par exemple, nous pouvons offrir plus d'une vie au joueur. Il peut faire une ou deux erreurs et être encore capable de terminer le jeu. Nous pourrions également améliorer le rendu visuel du jeu.

## Donner des vies au joueur

Mettre en œuvre des vies est assez simple. Ajoutons d'abord une variable pour stocker le nombre de vies à l'endroit où nous avons déclaré nos autres variables&nbsp;:

```js
let lives = 3;
```

L'affichage du compteur de vie est similaire à celui du compteur de points — ajoutez la fonction suivante à votre code, sous la fonction `drawScore()`&nbsp;:

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Vies : ${lives}`, canvas.width - 65, 20);
}
```

Au lieu de mettre immédiatement fin au jeu, nous allons réduire le nombre de vies jusqu'à ce qu'il n'y en ait plus. Nous pouvons également réinitialiser les positions du ballon et de la raquette lorsque le joueur commence sa prochaine vie. Ainsi, dans la fonction `draw()`, remplacez les trois lignes suivantes&nbsp;:

```js
alert("PERDU !");
document.location.reload();
clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
```

Nous pouvons ainsi y ajouter une logique un peu plus complexe, comme indiqué ci-dessous&nbsp;:

```js
lives--;
if (!lives) {
  alert("PERDU !");
  document.location.reload();
  clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

Maintenant, quand la balle frappe le bord inférieur de l'écran, nous soustrayons une vie de la variable `lives`. S'il n'y a plus de vies, la partie est perdue ; s'il reste encore des vies, alors la position de la balle et la raquette sont remises à zéro, ainsi que le mouvement de la balle.

### Afficher le compteur de vies

Maintenant, vous devez ajouter un appel à `drawLives()` dans la fonction `draw()` et l'ajouter sous l'appel `drawScore()`.

```js
drawLives();
```

## Améliorer le rendu avec `requestAnimationFrame()`

Maintenant, travaillons sur quelque chose qui n'est pas lié à la mécanique du jeu, mais à la façon dont il est rendu. {{DOMxRef("window.requestAnimationFrame", "requestAnimationFrame")}} aide le navigateur à rendre le jeu mieux que la cadence fixe que nous avons actuellement mise en place en utilisant {{DOMxRef("Window.setInterval()", "setInterval()")}}. Remplacez la ligne suivante&nbsp;:

```js
interval = setInterval(draw, 10);
```

avec simplement&nbsp;:

```js
draw();
```

et supprimez chaque occurence de&nbsp;:

```js
clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
```

Ensuite, tout en bas de la fonction `draw()` (juste avant l'accolade de fermeture), ajoutez la ligne suivante, ce qui fait que la fonction `draw()` s'appelle encore et encore&nbsp;:

```js
requestAnimationFrame(draw);
```

La fonction `draw()` est maintenant exécutée indéfiniment dans une boucle `requestAnimationFrame()`, mais au lieu de la cadence fixe de 10 millisecondes, nous redonnons le contrôle de la cadence au navigateur. Il synchronisera la cadence en conséquence et ne n'acutalisera l'affichage que lorsque cela sera nécessaire. Cela permet d'obtenir une boucle d'animation plus efficace et plus fluide que l'ancienne méthode `setInterval()`.

## Comparez votre code

C'est tout — la version finale du jeu est prête et prête à être lancée&nbsp;!

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

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let lives = 3;

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
  let relativeX = e.clientX - canvas.offsetLeft;
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
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Vies : ${lives}`, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
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
      lives--;
      if (!lives) {
        alert("PERDU !");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  draw();
  runButton.disabled = true;
});
```

{{EmbedLiveSample("Comparez votre code", 600, 360)}}

> [!NOTE]
> Essayez de changer le nombre de vies et l'angle de rebond de la balle sur la raquette.

## Game over — pour l'instant !

Vous avez terminé toutes les leçons — félicitations&nbsp;! À ce stade, vous devriez maintenant connaître les bases de la manipulation des Canevas et la logique des jeux simples en 2D. C'est maintenant le bon moment pour apprendre quelques frameworks et continuer le développement du jeu. Vous pouvez découvrir le pendant de cette série, le [casse-brique 2D utilisant Phaser](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser) ou le [tutoriel Cyber Orb](/fr/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation) construit avec Phaser. Vous pouvez également consulter la section [Jeux sur MDN](/fr/docs/Games) pour vous inspirer et approfondir vos connaissances.

Vous pouvez également revenir à la [page d'accueil](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) de cette série de tutoriels. Amusez-vous bien à coder&nbsp;!

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
