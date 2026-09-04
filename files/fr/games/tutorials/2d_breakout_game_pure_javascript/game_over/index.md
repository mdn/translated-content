---
title: Fin de partie
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

Voici la **5<sup>e</sup> étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source comme il devrait être après avoir terminé cette leçon sur [Gamedev-Canvas-workshop/lesson5.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

C'est sympa de regarder la balle rebondir contre les murs et de pouvoir bouger la raquette, mais à part ça, le jeu ne fait rien, il n'y a pas de progression ni de but final. Il serait bien, du point de vue du gameplay, de pouvoir perdre. La façon de perdre dans le casse briques est simple. Si vous loupez la balle avec le paddle et la laissez atteindre le bas de l'écran, la partie est terminée.

## Intégrer une fin de partie

Essayons d'intégrer une fin de partie dans le jeu . Voyons une partie du code de la troisième leçon, où nous faisions rebondir la balle contre les murs&nbsp;:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Au lieu de laisser la balle rebondir sur les quatre murs, ne laissons rebondir que sur trois maintenant — gauche, haut et droite. Si elle touche le mur du bas, la partie se termine. Nous allons modifier le second bloc if pour qu'il devienne un bloc if else qui déclenchera notre état de «&nbsp;fin de partie&nbsp;» lorsque la balle heurtera le bord inférieur du canevas. Pour l'instant, nous afficherons un message d'alerte et redémarrerons le jeu en rechargeant la page.

Commencez par ajouter une déclaration pour la variable `interval` au niveau supérieur, avant toute fonction&nbsp;:

```js
let interval = 0;
```

Ensuite, remplacez l'endroit où vous appeliez initialement `setInterval()`&nbsp;:

```js
setInterval(draw, 10);
```

avec&nbsp;:

```js
interval = setInterval(draw, 10);
```

Puis remplacez la seconde instruction `if` par le code suivant&nbsp;:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("PERDU !");
  document.location.reload();
  clearInterval(interval); // Nécessaire pour Chrome afin de terminer le jeu
}
```

## Faire rebondir la balle sur la raquette

La dernière chose à faire dans cette leçon est de créer une sorte de détection de collision entre la raquette et la balle, de sorte qu'elle puisse rebondir et revenir dans la zone de jeu. La chose la plus facile à faire est de vérifier si le centre de la balle se trouve entre les bords droit et gauche du paddle. Mettez à jour le dernier bout de code que vous venez de modifier, comme-ci dessous&nbsp;:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("PERDU !");
    document.location.reload();
    clearInterval(interval);
  }
}
```

Si la balle entre en collision avec le mur du bas, nous devons vérifier si elle touche la raquette. Si c'est le cas, la balle rebondit et revient dans la zone de jeu. Sinon, le jeu est terminé comme avant.

## Comparez votre code

Voici le code fonctionnel avec lesquel vous pouvez comparer le vôtre&nbsp;:

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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

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
> Faites en sorte que la balle accélère quand elle touche la raquette.\*\*

## Prochaine étape

Nous avons déja bien avancé et notre jeu est devenu plus intéressant depuis que vous pouvez perdre ! Mais il manque encore quelque chose. Rendons-nous au sixième chapitre — [Créer le champs de briques](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field) — et créons quelques briques que la balle pourra détruire.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
