---
title: Créer une animation colorée
slug: Web/API/WebGL_API/By_example/Simple_color_animation
---

{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_une_couleur_à_la_souris","Apprendre/WebGL/Par_exemple/Masque_de_couleur")}}

Dans cet exemple, on crée une animation avec des couleurs en appliquant chaque seconde une couleur aléatoire dans le contexte de rendu {{Glossary("WebGL")}}.

{{EmbedLiveSample("Créer_une_animation_avec_clear",660,425)}}

### Créer une animation avec `clear`

Cet exemple illustre comment lancer une animation avec WebGL et gérer les interactions de l'utilisateur. L'utilisateur peut lancer, arrêter et reprendre l'animation en cliquant sur le bouton.

Cette fois, on place les appels à la fonction WebGL à l'intérieur d'un gestionnaire d'événement de _timer_. Un gestionnaire d'événements pour les clics permet de gérer les interactions simples (lancer et arrêter l'animation). Le _timer_ et la fonction de gestion du _timer_ créent une boucle d'animation qui permet d'exécuter un ensemble de commandes pour le dessin à des intervalles réguliers (généralement, pour chaque _frame_, dans ce cas, on a une fréquence d'une _frame_ par seconde).

```html
<p>Un programme WebGL simple qui crée une animation colorée.</p>
<p>Vous pouvez sur le bouton pour activer/désactiver l'animation.</p>
<canvas id="canvas-view"
  >Il semblerait que votre navigateur ne supporte pas l'élément canvas.</canvas
>
<button id="animation-onoff">
  Cliquez ici pour
  <strong>[le verbe de l'action]</strong>
  l'animation
</button>
```

```css
body {
  text-align: center;
}
button {
  display: inline-block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
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
```

```js
window.addEventListener(
  "load",
  function setupAnimation(evt) {
    "use strict";
    window.removeEventListener(evt.type, setupAnimation, false);

    // Une variable pour gérer le timer qui contrôle
    // l'animation.
    var timer;

    // On ajoute un gestionnaire d'événement pour le clic.
    var button = document.querySelector("#animation-onoff");
    var verb = document.querySelector("strong");
    function startAnimation(evt) {
      button.removeEventListener(evt.type, startAnimation, false);
      button.addEventListener("click", stopAnimation, false);
      verb.innerHTML = "arrêter";

      // On place une boucle d'animation : on repeint
      // environ chaque seconde.
      timer = setInterval(drawAnimation, 1000);

      // On dessine une frame d'animation afin de
      // fournir un feedback à l'utilisateur.
      drawAnimation();
    }

    function stopAnimation(evt) {
      button.removeEventListener(evt.type, stopAnimation, false);
      button.addEventListener("click", startAnimation, false);
      verb.innerHTML = "lancer";
      // On arrête l'animation en réinitialisant le timer.
      clearInterval(timer);
    }

    // On appelle stopAnimation() une fois pour mettre en place
    // les gestionnaires d'événement pour le canevas et le bouton.
    stopAnimation({ type: "click" });

    var gl;
    function drawAnimation() {
      if (!gl) {
        var canvas = document.getElementById("canvas-view");
        gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) {
          // On ne veut pas avoir plusieurs messages d'alerte
          // donc on arrête l'animation en réinitialisant le
          // timer.
          clearInterval(timer);
          alert(
            "Échec du chargement du contexte WebGL.\n" +
              "Votre navigateur peut ne pas supporter WebGL.",
          );
          return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      // On génère une couleur aléatoire avec une fonction
      // auxiliaire.
      var color = getRandomColor();

      // On applique la couleur obtenue dans le
      // contexte WebGLRenderingContext
      gl.clearColor(color[0], color[1], color[2], 1.0);

      // On propage le changement dans le contexte
      // avec la méthode clear.
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    // Une fonction auxiliaire qui fournit une
    // couleur aléatoire.
    function getRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
  },
  false,
);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/simple-color-animation).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_une_couleur_à_la_souris","Apprendre/WebGL/Par_exemple/Masque_de_couleur")}}
