---
title: Raquette et contrôle clavier
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

C'est la **4<sup>e</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Vous pouvez retrouver le code source de cette leçon sur [Gamedev-Canvas-workshop/lesson4.html <sup>(angl.)</sup>](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

La balle rebondit librement sur les murs et vous pouvez la regarder indéfiniment, mais actuellement, il n'y a pas d'interactivité. Ce n'est pas un jeu si vous ne pouvez pas le contrôler&nbsp;! Ajoutons donc une interaction avec l'utilisateur·ice&nbsp;: une raquette contrôlable.

## Créer une raquette pour frapper la balle

Il nous faut donc une raquette pour frapper la balle. Définissons quelques variables pour cela. Ajoutez les variables suivantes en haut de votre code, près de vos autres variables&nbsp;:

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

Ici, nous définissons la hauteur et la largeur de la raquette et son point de départ sur l'axe des x pour l'utiliser dans les calculs plus loin dans le code. Créons une fonction qui dessinera la raquette sur l'écran. Ajoutez ce qui suit juste en dessous de votre fonction `drawBall()`&nbsp;:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Permettre à l'utilisateur de contrôler la raquette

Nous pouvons dessiner la raquette où nous voulons, mais elle doit répondre aux actions de l'utilisateur·ice. Il est temps de mettre en place certaines commandes au clavier. Nous aurons besoin de ce qui suit&nbsp;:

- Deux variables pour stocker des informations sur l'état des touches gauche et droite.
- Deux écouteurs d'évènements pour les évènements `keydown` et `keyup` du clavier. Nous voulons exécuter un code pour gérer le mouvement de la raquette lorsque des appuis sur les touches.
- Deux fonctions gérant les évènements `keydown` et `keyup` et le code qui sera exécuté lorsque les touches sont pressées.
- La possibilité de déplacer la raquette vers la gauche et vers la droite

L'état des touches peut être mémorisé dans des variables booléennes comme dans l'exemple ci-dessous. Ajoutez ces lignes près de vos variables&nbsp;:

```js
let rightPressed = false;
let leftPressed = false;
```

La valeur par défaut pour les deux est fausse car au début, car les touches ne sont pas enfoncés. Pour être informé des appuis sur les touches, nous allons mettre en place deux écouteurs d'évènements. Ajoutez les lignes suivantes juste au-dessus de la ligne `setInterval()` au bas de votre JavaScript&nbsp;:

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

Lorsque l'évènement `keydown` est déclenché par l'appui d'une des touches de votre clavier (lorsqu'elles sont enfoncées), la fonction `keyDownHandler()` est exécutée. Le même principe est vrai pour le deuxième écouteur : les évènements `keyup` activent la fonction `keyUpHandler()` (lorsque les touches cessent d'être enfoncées). Ajoutez ces lignes à votre code, sous les lignes `addEventListener()`&nbsp;:

```js
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
```

Quand on presse une touche du clavier, l'information est stockée dans une variable. La variable concernée est mis sur `true`. Quand la touche est relachée, la variable revient à `false`.

Les deux fonctions prennent un évènement comme paramètre, représenté par la variable `e`. De là, vous pouvez obtenir des informations utiles : la propriété `key` contient les informations sur la touche qui a été enfoncée. La plupart des navigateurs utilisent `ArrowRight` et `ArrowLeft` pour les touches de flèche gauche/droite, mais nous devons également tester `Right` and `Left` pour prendre en charge les navigateurs IE/Edge. Si la touche gauche est enfoncé, la variable `leftPressed` est mise à `true`, et lorsqu'elle est relâchée, la variable `leftPressed` est mise à `false`. Le même principe s'applique à la touche droite et à la variable `rightPressed`.

### La logique du déplacement de la raquette

Nous avons maintenant mis en place les variables pour stocker les informations sur les touches pressées, les écouteurs d'évènements et les fonctions associées. Ensuite, nous allons entrer dans le code pour utiliser tout ce que nous venons de configurer et pour déplacer la palette à l'écran. Dans la fonction `draw()`, nous vérifierons si les touches gauche ou droite sont pressées lors du rendu de chaque image. Notre code pourrait ressembler à ceci&nbsp;:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Si la touche gauche est enfoncée, la raquette se déplacera de sept pixels vers la gauche, et si la droite est enfoncé, la raquette se déplacera de sept pixels vers la droite. Cela fonctionne actuellement, mais la raquette disparaît du bord du canevas si nous maintenons l'une ou l'autre des touches trop longtemps enfoncée. Nous pourrions améliorer cela et déplacer la raquette uniquement dans les limites du canevas en changeant le code comme ceci&nbsp;:

```js
if (rightPressed) {
  paddleX += 7;
  if (paddleX + paddleWidth > canvas.width) {
    paddleX = canvas.width - paddleWidth;
  }
} else if (leftPressed) {
  paddleX -= 7;
  if (paddleX < 0) {
    paddleX = 0;
  }
}
```

La position de `paddleX` que nous utilisons variera entre `0` sur le côté gauche du canevas et `canvas.width-paddleWidth` sur le côté droit, ce qui fonctionnera exactement comme nous le souhaitons.

Ajoutez le bloc de code ci-dessus dans la fonction `draw()` en bas, juste au-dessus de l'accolade de fermeture.

Il ne reste plus qu'à appeler la fonction `drawPaddle()` depuis la fonction `draw()`, pour l'afficher réellement à l'écran. Ajoutez la ligne suivante à l'intérieur de votre fonction `draw()`, juste en dessous de la ligne qui appelle `drawBall()`&nbsp;:

```js
drawPaddle();
```

## Comparez votre code

Voici le code de référence auquel vous pouvez comparer le vôtre&nbsp;:

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
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
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
> Essayez de faire aller la raquette plus vite ou plus lentement, ou changez sa taille.

## Dans le prochain chapitre

Maintenant, nous avons quelque chose qui ressemble à un jeu. Le seul problème, c'est que vous pouvez continuer à frapper la balle avec la raquette indéfiniment. Tout cela va changer dans le cinquième chapitre, [Fin de partie](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over), lorsque nous commencerons à ajouter un état de fin de partie pour notre jeu.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
