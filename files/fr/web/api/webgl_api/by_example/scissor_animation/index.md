---
title: Créer une animation avec découpe et applique
slug: Web/API/WebGL_API/By_example/Scissor_animation
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Scissor_animation
original_slug: Web/API/WebGL_API/By_example/Créer_une_animation_avec_découpe_et_applique
---
{{PreviousNext("Apprendre/WebGL/Par_exemple/Modèle_1","Apprendre/WebGL/Par_exemple/Une_pluie_de_rectangle")}}

Dans cet article, on voit comment créer des animations grâce à des opérations de découpe et d'applique.

{{EmbedLiveSample("Une_animation_grâce_à_des_découpes",660,425)}}

### Une animation grâce à des découpes

Dans cet exemple, on anime des carrés grâce aux méthodes {{domxref("WebGLRenderingContext.scissor()","scissor()")}} et {{domxref("WebGLRenderingContext.clear()","clear()")}}. Ensuite, on crée à nouveau une boucle d'animation grâce aux _timers_. Cette fois-ci, la position du carré (la zone de découpe) est mise à jour à chaque _frame_ (on a environ une frame rafraîchie toutes les 17 millisecondes, ce qui correspond environ à 60fps (_frame per second_ ou _frame_ par seconde).

En revanche, la couleur du carré (définie avec {{domxref("WebGLRenderingContext.clearColor()","clearColor")}}) est uniquement mise à jour lorsqu'un nouveau carré est créé. On voit ici que {{Glossary("WebGL")}} est un automate. Pour chaque carré, on définit sa couleur une fois puis on met à jour sa position à chaque _frame_. L'état lié à la couleur reste tel quel jusqu'à ce qu'un nouveau carré soit créé.

```html hidden
<p>Une animation WebGL obtenue en appliquant des couleurs
unies sur le buffer de dessin et en utilisant des tests de découpe.</p>
<button id="animation-onoff">
  Cliquez ici pour
<strong>[verbe ici]</strong>
  l'animation</button>
<canvas>Il semblerait que votre navigateur
    ne supporte pas l'élément HTML5 canvas.</canvas>
```

```css hidden
body {
  text-align : center;
}
canvas {
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
```

```js hidden
;(function(){
```

```js
"use strict"
window.addEventListener("load", setupAnimation, false);
// Voici les variables qui permettront de
// manipuler le contexte WebGL, la couleur
// et la position des carrés.
var gl,
  color = getRandomColor(),
  position;

function setupAnimation (evt) {
  window.removeEventListener(evt.type, setupAnimation, false);
  if (!(gl = getRenderingContext()))
    return;

  gl.enable(gl.SCISSOR_TEST);
  gl.clearColor(color[0], color[1], color[2], 1.0);

  // À la différence de la fenêtre du navigateur,
  // l'axe vertical de WebGL va dans le sens croissant
  // du bas vers le haut. Dans cette position, on indique
  // que la position initiale du carré est en haut à gauche
  // du contexte de dessin
  position = [0, gl.drawingBufferHeight];

  var button = document.querySelector("button");
  var timer;
  function startAnimation(evt) {
    button.removeEventListener(evt.type, startAnimation, false);
    button.addEventListener("click", stopAnimation, false);
    document.querySelector("strong").innerHTML = "arrêter";
    timer = setInterval(drawAnimation, 17);
    drawAnimation();
  }
  function stopAnimation(evt) {
    button.removeEventListener(evt.type, stopAnimation, false);
    button.addEventListener("click", startAnimation, false);
    document.querySelector("strong").innerHTML = "lancer";
    clearInterval(timer);
  }
  stopAnimation({type: "click"});
}

// Les variables qui permettront de stocker la taille
// et la vitesse du carré.
var size = [60, 60],
  velocity = 3.0;
function drawAnimation () {
  gl.scissor(position[0], position[1], size[0] , size[1]);
  gl.clear(gl.COLOR_BUFFER_BIT);
  // À chaque frame, on définit une position plus basse
  // pour le carré, c'est cela qui crée une illusion
  // de mouvement.
  position[1] -= velocity;
  // Lorsque le carré atteint le bas, on crée un nouveau
  // carré avec une nouvelle vitesse et une nouvelle
  // couleur.
  if (position[1] < 0) {
    // La position horizontale est choisie aléatoirement.
    // La position verticale correspond au haut
    // du buffer de dessin.
    position = [
      Math.random()*(gl.drawingBufferWidth - size[0]),
      gl.drawingBufferHeight
    ];
    // Ici on détermine une vitesse aléatoire
    // comprise entre 1.0 et 7.0
    velocity = 1.0 + 6.0*Math.random();
    color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
  }
}

function getRandomColor() {
  return [Math.random(), Math.random(), Math.random()];
}
```

```js hidden
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML = "Échec de l'obtention du contexte "
      + "WebGL. Votre navigateur ne supporte peut-être pas "
      + "WebGL.";
    return null;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

```js hidden
})();
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/scissor-animation).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Modèle_1","Apprendre/WebGL/Par_exemple/Une_pluie_de_rectangle")}}
