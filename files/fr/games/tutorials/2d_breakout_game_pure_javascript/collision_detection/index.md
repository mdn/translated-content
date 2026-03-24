---
title: Détection de collisions
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Il s'agit de la **7ème étape** sur 10 du [Gamedev Canvas tutorial](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez trouver le code source tel qu'il devrait être après avoir complété cette leçon sur [Gamedev-Canvas-workshop/lesson7.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html).

Les briques apparaissent à l'écran, mais le jeu n'est toujours pas intéressant car la balle les traverse. Nous devons ajouter une détection des collisions afin qu'elle puisse rebondir sur les briques et les casser.

C'est notre décision, bien sûr, de mettre ça en œuvre, mais il peut être difficile de calculer si la balle touche le rectangle ou non, car il n'y a pas de fonction d'aide dans Canvas pour cela. Dans l'intérêt de ce tutoriel, nous le ferons de la manière la plus simple possible. Nous vérifierons si le centre de la balle entre en collision avec l'une des briques données. Cela ne donnera pas toujours un résultat parfait, et il existe des moyens beaucoup plus sophistiqués de détecter des collisions, mais cela fonctionnera assez bien pour vous apprendre les concepts de base.

## Une fonction de détection de collision

Pour commencer, nous voulons créer une fonction de détection de collision qui va parcourir toutes les briques et comparer la position de chaque brique avec les coordonnées de la balle lorsque chaque image est dessinée. Pour une meilleure lisibilité du code, nous allons définir la variable `b` pour stocker l'objet brique dans la boucle de la détection de collision:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      // calculs
    }
  }
}
```

Si le centre de la balle se trouve à l'intérieur des coordonnées d'une de nos briques, nous changerons la direction de la balle. Pour que le centre de la balle soit à l'intérieur de la brique, les quatre affirmations suivantes doivent être vraies :

- La position x de la balle est supérieure à la position x de la brique.
- La position x de la balle est inférieure à la position x de la brique plus sa largeur.
- La position y de la balle est supérieure à la position y de la brique.
- La position y de la balle est inférieure à la position y de la brique plus sa hauteur.

Écrivons cela sous forme de code:

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}
```

Ajoutez le bloc ci-dessus à votre code, sous la fonction `keyUpHandler()`.

## Faire disparaître les briques après qu'elles aient été touchées

Le code ci-dessus fonctionnera comme vous le souhaitez et la balle changera de direction. Le problème est que les briques restent là où elles sont. Nous devons trouver un moyen de nous débarrasser de celles que nous avons déjà touchées avec la balle. Nous pouvons le faire en ajoutant un paramètre supplémentaire pour indiquer si nous voulons ou non afficher chaque brique à l'écran. Dans la partie du code où nous initialisons les briques, ajoutons une propriété `status` à chaque brique. Mettez à jour la partie suivante du code comme indiqué par la ligne en évidence:

```js
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

Nous vérifierons ensuite la valeur de la propriété `status` de chaque brique dans la fonction `drawBricks()` avant de la dessiner. Si `status` vaut `1`, dessinez-la, mais s'il vaut `0`, la balle a été touchée et nous ne voulons pas la voir sur l'écran. Mettez à jour votre fonction `drawBricks()` comme suit&nbsp;:

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
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
}
```

## Suivi et mise à jour de l'état dans la fonction de détection de collision

Nous devons maintenant impliquer la propriété de `status` de brique dans la fonction `collisionDetection()`: si la brique est active (son statut est `1`), nous vérifierons si une collision a lieu ; Si une collision se produit, nous allons définir l'état de la brique donnée sur `0` afin qu'elle ne soit pas affichée à l'écran. Mettez à jour votre fonction `collisionDetection()` comme indiqué ci-dessous&nbsp;:

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
        }
      }
    }
  }
}
```

## Activer notre détection de collision

La dernière chose à faire est d'ajouter un appel à la fonction `collisionDetection ()` à notre fonction `draw()` principale. Ajoutez la ligne suivante à la fonction `draw ()`, juste en dessous de l'appel `drawPaddle()`:

```js
collisionDetection();
```

## Comparez votre code

La détection de collision de la balle est maintenant vérifiée sur chaque image, avec chaque brique. Maintenant, nous pouvons détruire des briques&nbsp;! :-)

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
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();

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
      alert("PERDU !");
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

## Prochaine étape

On est définitivement sur la bonne voie maintenant&nbsp;; passons à l'étape suivante&nbsp;! Dans le huitième chapitre, nous verrons comment [Suivre le score et gagner](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
