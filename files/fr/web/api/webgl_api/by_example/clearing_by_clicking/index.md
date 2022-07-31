---
title: Appliquer une couleur à la souris
slug: Web/API/WebGL_API/By_example/Clearing_by_clicking
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Clearing_by_clicking
original_slug: Web/API/WebGL_API/By_example/Appliquer_une_couleur_à_la_souris
---
{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_des_couleurs","Apprendre/WebGL/Par_exemple/Cr%C3%A9er_une_animation_color%C3%A9e")}}

Dans cet article, on voit comment combiner les interactions de l'utilisateur et les opérations graphiques. Plus précisément, dans cet exemple, chaque clic de l'utilisateur déclenchera l'application d'une couleur aléatoire dans le contexte de rendu.

{{EmbedLiveSample("Appliquer_des_couleurs_aléatoires_dans_le_contexte_de_rendu",660,410)}}

### Appliquer des couleurs aléatoires dans le contexte de rendu

Cet exemple illustre simplement comment associer WebGL aux interactions utilisateur. Chaque fois que l'utilisateur cliquera sur le canevas ou sur le bouton, une couleur aléatoire sera appliquée sur le contexte de rendu.

Ici, on montre comment on place les appels aux fonctions WebGL dans la fonction qui gère les événements :

```html
<p>Un programme WebGL très simple qui affiche des couleurs
    suite aux interactions utilisateur.</p>
<p>Vous pouvez cliquer sur le canevas ou sur le bouton pour
    modifier la couleur.</p>
<canvas id="canvas-view">Il semblerait que votre navigateur
    ne supporte pas l'élément canvas.</canvas>
<button id="color-switcher">Cliquez ici pour changer la couleur</button>
```

```css
body {
  text-align : center;
}
button {
  display : inline-block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
```

```js
// On exécute tout dans le gestionnaire d'événement
// correspondant au chargement de la fenêtre. De cette
// façon, le DOM est complètement chargé et mis en forme
// avant de le manipuler et d'encombrer la portée globale.
// On donne un nom au gestionnaire (setupWebGL) afin de
// pouvoir y faire référence par la suite.
window.addEventListener("load", function setupWebGL (evt) {
  "use strict"

  // On fait le ménage : le gestionnaire se supprime lui-
  // même car il n'a besoin d'être exécuté qu'une fois.
  window.removeEventListener(evt.type, setupWebGL, false);

  // On ajoute le même gestionnaire de clic sur le canevas
  // et sur le bouton.
  var canvas = document.querySelector("#canvas-view");
  var button = document.querySelector("#color-switcher");
  canvas.addEventListener("click", switchColor, false);
  button.addEventListener("click", switchColor, false);

  // On crée une variable qui contiendra WebGLRenderingContext.
  var gl;

  // La déclaration du gestionnaire d'événement pour le clic.
  function switchColor () {

    // On utilise la variable gl définie en dehors.
    // Si elle n'est pas définie, on récupère WebGLRenderingContext.
    // Si cela échoue, on avertit l'utilisateur. Sinon, on
    // initialise la zone de dessin (viewport)
    if (!gl) {
      gl = canvas.getContext("webgl")
        || canvas.getContext("experimental-webgl");
      if (!gl) {
        alert("Échec de la récupération du \n"
          + "contexte WebGL. Votre navigateur peut ne pas \n"
          + " supporter WebGL.");
        return;
      }
      gl.viewport(0, 0,
        gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    // On obtient une couleur aléatoire grâce
    // à une fonction auxiliaire.
    var color = getRandomColor();

    // On choisit cette couleur comme couleur à appliquer.
    gl.clearColor(color[0], color[1], color[2], 1.0);

    // On applique la nouvelle couleur dans le contexte.
    // C'est cette fonction qui effectue « réellement »
    // le dessin sur la zone.
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  // Une fonction auxiliaire pour créer une couleur aléatoire.
  function getRandomColor() {
    return [Math.random(), Math.random(), Math.random()];
  }

}, false);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-by-clicking).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_des_couleurs","Apprendre/WebGL/Par_exemple/Cr%C3%A9er_une_animation_color%C3%A9e")}}
