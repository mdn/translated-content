---
title: Faire rebondir la balle sur les murs
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

C'est la **3<sup>e</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez retrouver le code source de cette leçon sur [Gamedev-Canvas-workshop/lesson3.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Il est agréable de voir notre balle bouger, mais elle disparaît rapidement de l'écran, ce qui limite le plaisir que nous pouvons avoir avec elle&nbsp;! Pour y remédier, nous allons mettre en place une détection de collision (qui sera expliquée [plus tard](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) en détail) pour faire rebondir la balle sur les quatre bords de la toile.

## Détection des collisions

Pour détecter la collision, nous vérifierons si la balle touche (entre en collision avec) le mur et, si c'est le cas, nous modifierons la direction de son mouvement en conséquence.

Pour faciliter les calculs, nous allons définir une variable appelée `ballRadius` qui contiendra le rayon du cercle dessiné et sera utilisée pour les calculs. Ajoutez cette variable à votre code, quelque part en dessous des déclarations de variables existantes&nbsp;:

```js
const ballRadius = 10;
```

Mettez maintenant à jour la ligne qui dessine la balle à l'intérieur de la fonction `drawBall()`&nbsp;:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Rebondir en haut et en bas

Il y a quatre murs sur lesquels la balle peut rebondir — concentrons-nous d'abord sur le mur du haut. Nous devons vérifier, à chaque image, si la balle touche le bord supérieur du canvas — si c'est le cas, nous inverserons le mouvement de la balle afin qu'elle commence à se déplacer dans la direction opposée et reste dans les limites visibles. En se rappelant que le système de coordonnées commence en haut à gauche, nous pouvons écrire quelque chose comme ceci&nbsp;:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Si la valeur `y` de la position de la balle est inférieure à zéro, inversez la direction du mouvement sur l'axe `y` en la mettant à sa valeur opposée. Si la balle montait avec une vitesse de 2 pixels par image, elle se déplacera maintenant "vers le haut" avec une vitesse de -2 pixels, ce qui revient en fait à descendre à une vitesse de 2 pixels par image.

Le code ci-dessus gère le rebond de la balle sur le bord supérieur, pensons maintenant au bord inférieur&nbsp;:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Si la position `y` de la balle est supérieure à la hauteur du canvas (rappelez-vous que nous comptons les valeurs de `y` à partir du coin supérieur gauche, donc le bord supérieur commence à 0 et le bord inférieur est à 320 pixels, la hauteur du canvas), alors faites rebondir la balle sur le bord inférieur en inversant le mouvement sur l'axe `y` comme précédemment.

Nous pourrions fusionner ces deux instructions en une seule pour alléger le code&nbsp;:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Si l'une des deux conditions est `true`, on inverse le mouvement de la balle.

### Rebondir à gauche et à droite

Nous avons couvert les bords supérieur et inférieur, alors pensons à ceux de gauche et de droite. C'est très similaire en fait, il suffit de répéter les instructions pour `x` au lieu de `y`&nbsp;:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

À ce stade, vous devez insérer le bloc de code ci-dessus dans la fonction `draw()`, juste avant l'accolade de fermeture.

### La balle continue de disparaître dans le mur !

Testez votre code à ce stade, et vous serez impressionné — nous avons maintenant une balle qui rebondit sur les quatre bords du canvas&nbsp;! Cependant, nous avons un autre problème — lorsque la balle frappe un mur, elle s'y enfonce légèrement avant de changer de direction&nbsp;:

![Balle bleu ciel disparaissant dans le haut du mur blanc.](ball-in-wall.png)

C'est parce que nous calculons le point de collision entre le mur et le centre de la balle, alors que nous devrions le faire pour sa circonférence. La balle devrait rebondir juste après avoir touché le mur, et non pas lorsqu'elle est déjà à mi-chemin dans le mur, alors ajustons un peu nos instructions pour inclure cela. Mettez à jour le dernier code que vous avez ajouté ainsi&nbsp;:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Lorsque la distance entre le centre de la balle et le bord du mur est exactement la même que le rayon de la balle, cela change la direction du mouvement. Soustraire le rayon de la largeur d'un bord et l'ajouter à l'autre nous donne l'impression d'une détection de collision correcte — la balle rebondit sur les murs comme elle devrait le faire.

## Comparez votre code

Vérifions encore une fois le code fini pour cette partie par rapport à ce que vous avez, et jouons une partie&nbsp;:

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

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{EmbedLiveSample("Comparez votre code", 600, 360)}}

> [!NOTE]
> Essayez de changer la couleur de la balle à chaque fois que celle-ci tape un mur.

## Prochain étape

Nous sommes maintenant arrivés au stade où notre balle se déplace et reste sur le plateau de jeu. Dans le quatrième chapitre, nous examinerons la mise en place d'une raquette contrôlable - voir [Raquette et contrôle au clavier](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
