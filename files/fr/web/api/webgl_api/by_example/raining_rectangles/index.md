---
title: Une pluie de rectangle
slug: Web/API/WebGL_API/By_example/Raining_rectangles
---

{{PreviousNext("Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique","Apprendre/WebGL/Par_exemple/Hello_GLSL")}}

Cet exemple permet de créer un jeu simple qui illustre ce qu'il est possible de faire avec du « découpage », des animations et des interactions utilisateur.

{{EmbedLiveSample("Utiliser_des_animations_et_des_interactions_grâce_à_des_découpes",660,425)}}

### Utiliser des animations et des interactions grâce à des découpes

Voici un jeu simple où il faut essayer de cliquer sur les rectangles qui tombent pour en attraper le plus possible. Dans cet exemple, on utilise un approche orientée objet pour représenter les rectangles. Cela permet de mieux gérer l'état du rectangle (sa position, sa couleur, etc.) et cela rend le code plus compact et plus facile à réutiliser.

Dans cet exemple, on combine l'applique de couleurs unis dans le tampon de dessin et des opérations de découpe. C'est un aperçu d'une application graphique complète qui manipule les différentes phases des processus {{Glossary("WebGL")}} et de son automate.

De plus, cet exmple illustre comment intégrer des fonctions WebGL dans une boucle de jeu. La boucle de jeu est responsable du dessin pour l'animation, de la gestion des entrées utilisateur et de la réactivité de l'ensemble. Voici comment la boucle de jeu est implémentée avec des `setTimeout`.

```html hidden
<p>
  Vous en avez attrapé <strong>0</strong>. Vous en avez loupé
  <strong>0</strong>.
</p>
<canvas
  >Il semblerait que votre navigateur ne supporte pas l'élément HTML5
  canvas.</canvas
>
```

```css hidden
body {
  text-align: center;
}
canvas {
  display: block;
  width: 280px;
  height: 210px;
  margin: auto;
  padding: 0;
  border: none;
  background-color: black;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js hidden
;(function(){
```

```js
"use strict"
window.addEventListener("load", setupAnimation, false);
var gl,
  timer,
  rainingRect,
  scoreDisplay,
  missesDisplay;
function setupAnimation (evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext()))
    return;
  gl.enable(gl.SCISSOR_TEST);

  rainingRect = new Rectangle();
  timer = setTimeout(drawAnimation, 17);
  document.querySelector("canvas")
      .addEventListener("click", playerClick, false);
  var displays = document.querySelectorAll("strong");
  scoreDisplay = displays[0];
  missesDisplay = displays[1];
}

var score = 0,
  misses = 0;
function drawAnimation () {
  gl.scissor(rainingRect.position[0], rainingRect.position[1],
      rainingRect.size[0] , rainingRect.size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  rainingRect.position[1] -= rainingRect.velocity;
  if (rainingRect.position[1] < 0) {
    misses += 1;
    missesDisplay.innerHTML = misses;
    rainingRect = new Rectangle();
  }
  // On utilise la fonction setTimeout pour l'animation
  // et on appelle ainsi la fonction drawAnimation toutes
  // les 17ms, sinon, on n'aurait pas d'animation.
  timer = setTimeout(drawAnimation, 17);
}

function playerClick (evt) {
  // Il est nécessaire de transfomer la position de l'événement
  // déclenché par le clic, exprimée dans le repèree de la fenêtre
  // pour obtenir la position relative au canevas.
  // De plus, on rappelle qu'avec WebGL les ordonnées croissent
  // selon l'axe vertical, c'est-à-dire l'inverse du système
  // utilisé pour la fenêtre du navigateur.
  var position = [
      evt.pageX - evt.target.offsetLeft,
      gl.drawingBufferHeight - (evt.pageY - evt.target.offsetTop),
    ];
  // si le clic est sur un rectangle, on l'attrape.
  // On incrémente donc le score et on crée un nouveau rectangle
  var diffPos = [ position[0] - rainingRect.position[0],
      position[1] - rainingRect.position[1] ];
  if ( diffPos[
    && diffPo
    score += 1;
     scoreDisplay.innerHTML = score;
    rainingRect = new Rectangle();
  }
}

function Rectangle () {
  // On garde une référence au nouvel objet Rectangle
  // plutôt que de risquer une confusion avec this.
  var rect = this;
  // On prend trois nombres aléatoires pour la taille
  // et la position du nouveau rectangle. On utilise
  // un nombre différent pour la position et la taille
  // car on veut que celles-ci soient indépendantes.
  var randNums = getRandomVector();
  rect.size = [
    5 + 120 * randNums[0],
    5 + 120 * randNums[1]
  ];
  rect.position = [
    randNums[2]*(gl.drawingBufferWidth - rect.size[0]),
    gl.drawingBufferHeight
  ];
  rect.velocity = 1.0 + 6.0*Math.random();
  rect.color = getRandomVector();
  gl.clearColor(rect.color[0], rect.color[1], rect.color[2], 1.0);
  function getRandomVector() {
    return [Math.random(), Math.random(), Math.random()];
  }
}
```

```js hidden
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML =
      "Échec de l'obtention du contexte." +
      " WebGL. Votre navigateur ne supporte peut-être pas " +
      " WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/raining-rectangles).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique","Apprendre/WebGL/Par_exemple/Hello_GLSL")}}
