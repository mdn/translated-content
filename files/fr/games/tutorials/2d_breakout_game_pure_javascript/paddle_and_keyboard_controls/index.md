---
title: Raquette et contrôle clavier
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
tags:
  - Canvas
  - Clavier
  - Débutant
  - JavaScript
  - Jeux
  - Tuto
  - Tutoriel
  - contrôle clavier
  - graphique
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_et_contrôle_clavier
---
{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

C'est la **4<sup>e</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript). Vous pouvez retrouver le code source de cette leçon sur [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

La balle rebondit librement partout et vous pourriez la regarder indéfiniment... Mais il n'y a pas d'interaction avec le joueur. Ce n'est pas un jeu si vous ne pouvez pas le contrôler ! Nous allons donc ajouter une interaction avec le joueur : une raquette contrôlable.

## Créer une raquette pour frapper la balle

Il nous faut donc une raquette pour frapper la balle. Définissons quelques variables pour cela. Ajoutez les variables suivantes en haut de votre code, près de vos autres variables :

```js
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
```

Ici, nous définissons la hauteur et la largeur de la raquette et son point de départ sur l'axe des x pour l'utiliser dans les calculs plus loin dans le code. Créons une fonction qui dessinera la raquette sur l'écran. Ajoutez ce qui suit juste en dessous de votre fonction `drawBall()` :

```js
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
```

## Permettre à l'utilisateur de contrôler la raquette

Nous pouvons dessiner la raquette où nous voulons, mais elle doit répondre aux actions de l'utilisateur. Il est temps de mettre en place certaines commandes au clavier. Nous aurons besoin de ce qui suit :



- Deux variables pour stocker des informations sur l'état des touches "gauche" et "droite".
- Deux écouteurs d'événements pour les événements `keydown` et `keyup` du clavier. Nous voulons exécuter un code pour gérer le mouvement de la raquette lorsque des appuis sur les touches.
- Deux fonctions gérant les événements `keydown` et `keyup` et le code qui sera exécuté lorsque les touches sont pressées.
- La possibilité de déplacer la raquette vers la gauche et vers la droite

L'état des touches peut être mémorisé dans des variables booléennes comme dans l'exemple ci-dessous. Ajoutez ces lignes près de vos variables :

```js
var rightPressed = false;
var leftPressed = false;
```

La valeur par défaut pour les deux est fausse car au début, car les touches ne sont pas enfoncés. Pour être informé des appuis sur les touches, nous allons mettre en place deux écouteurs d'événements. Ajoutez les lignes suivantes juste au-dessus de la ligne setInterval() au bas de votre JavaScript :

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Lorsque l'événement `keydown` est déclenché par l'appui d'une des touches de votre clavier (lorsqu'elles sont enfoncées), la fonction `keyDownHandler()` est exécutée. Le même principe est vrai pour le deuxième écouteur : les événements `keyup` activent la fonction `keyUpHandler()` (lorsque les touches cessent d'être enfoncées). Ajoutez ces lignes à votre code, sous les lignes `addEventListener()` :

```js
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
```

Quand on presse une touche du clavier, l'information est stockée dans une variable. La variable concernée est mis sur `true`. Quand la touche est relachée, la variable revient à  `false`.

Les deux fonctions prennent un événement comme paramètre, représenté par la variable `e`. De là, vous pouvez obtenir des informations utiles : la propriété `key` contient les informations sur la touche qui a été enfoncée.  La plupart des navigateurs utilisent `ArrowRight` et `ArrowLeft` pour les touches de flèche gauche/droite, mais nous devons également tester `Right` and `Left` pour prendre en charge les navigateurs IE/Edge. Si la touche gauche est enfoncé, la variable `leftPressed` est mise à `true`, et lorsqu'elle est relâchée, la variable `leftPressed` est mise à `false`. Le même principe s'applique à la touche droite et à la variable `RightPressed`.

### La logique du déplacement de la raquette

Nous avons maintenant mis en place les variables pour stocker les informations sur les touches pressées, les écouteurs d'événements et les fonctions associées. Ensuite, nous allons entrer dans le code pour utiliser tout ce que nous venons de configurer et pour déplacer la palette à l'écran. Dans la fonction `draw()`, nous vérifierons si les touches gauche ou droite sont pressées lors du rendu de chaque image. Notre code pourrait ressembler à ceci :

```js
if(rightPressed) {
    paddleX += 7;
}
else if(leftPressed) {
    paddleX -= 7;
}
```

Si la touche gauche est enfoncée, la raquette se déplacera de sept pixels vers la gauche, et si la droite est enfoncé, la raquette se déplacera de sept pixels vers la droite. Cela fonctionne actuellement, mais la raquette disparaît du bord du canevas si nous maintenons l'une ou l'autre des touches trop longtemps enfoncée. Nous pourrions améliorer cela et déplacer la raquette uniquement dans les limites du canevas en changeant le code comme ceci :

```js
if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
        paddleX = canvas.width - paddleWidth;
    }
}
else if(leftPressed) {
    paddleX -= 7;
    if (paddleX < 0){
        paddleX = 0;
    }
}
```

La position de `paddleX` que nous utilisons variera entre `0` sur le côté gauche du canevas et `canvas.width-paddleWidth` sur le côté droit, ce qui fonctionnera exactement comme nous le souhaitons.

Ajoutez le bloc de code ci-dessus dans la fonction `draw()` en bas, juste au-dessus de l'accolade de fermeture.

Il ne reste plus qu'à appeler la fonction `drawPaddle()` depuis la fonction `draw()`, pour l'afficher réellement à l'écran. Ajoutez la ligne suivante à l'intérieur de votre fonction `draw()`, juste en dessous de la ligne qui appelle `drawBall()` :

```js
drawPaddle();
```

## Comparez votre code

Voici le code de référence auquel vous pouvez comparer le vôtre :

{{JSFiddleEmbed("https://jsfiddle.net/end3r/tgn3zscj/","","395")}}

**Exercice:** faites aller la raquette plus vite ou plus lentement, ou changez sa taille.

## Dans le prochain chapitre

Maintenant, nous avons quelque chose qui ressemble à un jeu. Le seul problème, c'est que vous pouvez continuer à frapper la balle avec la raquette indéfiniment. Tout cela va changer dans le cinquième chapitre, [Game over](/fr/docs/Games/Workflows/Breakout_game_from_scratch/Game_over), lorsque nous commencerons à ajouter un état de fin de partie pour notre jeu.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
