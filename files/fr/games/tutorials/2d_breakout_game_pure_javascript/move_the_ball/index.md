---
title: Déplacer la balle
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs")}}

Voici la deuxième étape de ce [tutoriel](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript). Vous pouvez retrouver le code source de cette leçon sur [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Nous avons vu dans l'article précédent comment dessiner une balle, maintenant déplaçons là. Techniquement, nous afficherons la balle sur l'écran, puis nous l'effacerons et ensuite nous la repeindrons dans une position légèrement différente et ceci à chaque image afin de donner l'impression d'un mouvement (tout comme le fonctionnement du mouvement dans les films).

## Définir une boucle de dessin

Afin que le dessin soit mis à jour sur le canevas à chaque image, nous allons définir une fonction `draw()` qui sera exécutée en continu et qui utilisera des variables pour les positions des sprites, etc. Pour qu'une fonction s'exécute de façon répétée avec JavaScript, on pourra utiliser les méthodes {{domxref("WindowTimers.setInterval()", "setInterval()")}} ou {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}.

Supprimez tout le JavaScript que vous avez actuellement dans votre HTML à l'exception des deux premières lignes puis ajoutez ce qui suit en dessous de ces lignes. La fonction `draw()` sera exécutée toutes les 10 millisecondes (environ) grâce à `setInterval` :

```js
function draw() {
  // le code pour dessiner
}
setInterval(draw, 10);
```

Grâce à la nature infinie de `setInterval`, la fonction `draw()` sera appelée toutes les 10 millisecondes, sans arrêt jusqu'à ce que nous y mettions un terme. Maintenant, dessinons la balle — ajoutons le code ci-dessous à notre fonction `draw()` :

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Essayez votre code mis à jour maintenant, la balle devrait être repeinte sur chaque image.

## Déplacer la balle

Pour le moment, vous ne voyez pas la balle "repeinte" car elle ne bouge pas. Améliorons tout ça. Pour commencer, au lieu d'une position bloquée à (50,50), nous allons définir un point de départ en bas et au milieu du canevas grâce aux variables `x` et `y` que nous utiliserons pour définir la position où le cercle est dessiné.

Ajoutez d'abord les deux lignes suivantes au-dessus de votre fonction `draw()` pour définir `x` et `y` :

```js
var x = canvas.width / 2;
var y = canvas.height - 30;
```

Ensuite, mettez à jour la fonction `draw()` afin d'utiliser les variables x et y dans la méthode {{domxref("CanvasRenderingContext2D.arc()","arc()")}} , comme indiqué dans la ligne mise en évidence ci-dessous :

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Nous voici à la partie importante : nous voulons ajouter une valeur à `x` et `y` après que chaque image ait été dessinée afin de faire croire que la balle bouge. On définit ces valeurs comme `dx` et `dy` avec comme valeurs respectives 2 et -2. Ajoutez le code après la déclaration des variables `x` et `y` :

```js
var dx = 2;
var dy = -2;
```

La dernière chose à faire est de mettre à jour `x` et `y` avec nos variables `dx` et `dy` sur chaque image, de sorte que la balle sera peinte dans la nouvelle position à chaque nouvelle image. Ajoutez les deux nouvelles lignes, indiquées ci-dessous, à votre fonction `draw()` :

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Enregistrez à nouveau votre code et essayez-le dans votre navigateur. Vous devriez avoir le résultat suivant : ça fonctionne mais on a une trainée laissée par la balle derrière elle :

![](ball-trail.png)

## Effacer le canevas avant chaque image (_frame_)

La balle laisse une trace parce que qu'une nouveau cercle est dessiné sur chaque frame sans qu'on enlève le précédent. Pas d'inquiétude, il existe un moyen d'effacer le contenu du canevas : {{domxref("CanvasRenderingContext2D.clearRect()","clearRect()")}}. Cette méthode prend en compte quatre paramètres: les coordonnées x et y du coin supérieur gauche d'un rectangle et les coordonnées x et y du coin inférieur droit d'un rectangle. Toute la zone couverte par ce rectangle sera effacée.

Ajoutez la nouvelle ligne en surbrillance ci-dessous à la fonction `draw()` :

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Enregistrez votre code et essayez à nouveau. Cette fois, vous verrez la balle se déplacer sans laisser de trace. Toutes les 10 millisecondes, le canvas est effacé, la balle est dessinée sur une position donnée et les valeurs `x` et `y` sont mises à jour pour l'image suivante (en anglais, on parle de "_frame"_).

## Nettoyer notre code

Dans les prochains articles, nous allons ajouter de plus en plus de d'instructions à la fonction `draw()`. Mieux vaut donc la garder aussi simple et propre que possible. Commençons par déplacer le code s'occupant de dessiner de la balle vers une fonction séparée.

Remplacez la fonction `draw()` existante par les deux fonctions suivantes :

```js
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
```

## Comparez votre code

Vous pouvez vérifier le code de cet article avec la démo qui suit et jouer avec pour mieux comprendre comment il fonctionne :

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","395")}}

Exercice : Essayez de changer la vitesse de la balle en mouvement ou la direction dans laquelle elle se déplace.

## Prochaines étapes

Nous avons dessiné nottre balle et elle se déplace mais elle ne cesse de disparaître du bord de notre canevas. Dans le troisième chapitre, nous verrons comment [faire rebondir la balle](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs) contre les bords.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Faire_rebondir_la_balle_sur_les_murs")}}
