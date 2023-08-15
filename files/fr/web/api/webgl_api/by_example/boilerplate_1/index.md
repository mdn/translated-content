---
title: Modèle 1
slug: Web/API/WebGL_API/By_example/Boilerplate_1
---

{{PreviousNext("Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL","Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique")}}

Dans cet article, on décrit les fragments de code qui seront réutilisés pour les exemples suivants (où ils seront masqués pour une meilleur lisibilité). Parmi ce code, on définit une fonction JavaScript utilitaire qui permet de simplifier l'initialisation de WebGL.

{{EmbedLiveSample("Socle_pour_l'initialisation_du_contexte_WebGL",660,400)}}

## Socle pour l'initialisation du contexte WebGL

Nous avons vu plusieurs fois les mêmes morceaux de {{Glossary("HTML")}}, {{Glossary("CSS")}} et {{Glossary("JavaScript")}}. Nous allons donc les cacher par la suite afin de mieux nous concentrer sur les parties du code qui sont pertinentes pour l'apprentissage de {{Glossary("WebGL")}}.

Plus précisément, le code HTML contiendra

- Un élément {{HTMLElement("p")}} qui décrira l'exemple et qui permettra d'afficher des messages d'erreur
- Un élément {{HTMLElement("canvas")}}
- Un bouton (élément {{HTMLElement("button")}})

Les règles CSS s'appliqueront aux éléments `body`, `canvas` et `button`. Les éléments supplémentaires pour le code CSS et HTML seront détaillés dans les pages des exemples concernés.

Dans les exemples suivants, on utilisera la fonction utilitaire JavaScript `getRenderingContext` pour initialiser {{domxref("WebGLRenderingContext","le contexte de rendu WebGL", "", 1)}}. Grâce aux exemples précédents, vous devriez pouvoir comprendre le rôle de cette fonction. Pour résumer, celle-ci

- Obtient le contexte de rendu de la part de l'élément `canvas`
- Initialise le buffer de dessin
- Nettoie le buffer avec `clear`
- Applique le contexte initialisé

S'il y a une erreur, la fonction affiche un message d'erreur et renvoie `null`.

Enfin, tout le code JavaScript est exécuté par une fonction immédiatement appelée (une technique plutôt commune avec JavaScript). La déclaration de la fonction et son invocation seront cachées.

```html
<p>[ Un texte qui décrit l'exemple. ]</p>
<button>[ Un bouton optionnel pour les interactions. ]</button>
<canvas
  >Il semblerait que votre navigateur ne supporte pas le canevas HTML5.</canvas
>
```

```css
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

```js
function getRenderingContext() {
  var canvas = document.querySelector("canvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) {
    var paragraph = document.querySelector("p");
    paragraph.innerHTML =
      "Échec de l'obtention du " +
      "contexte WebGL." +
      "Votre navigateur ou appareil ne supporte " +
      "peut-être pas WebGL.";
    return null;
  }
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  return gl;
}
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/boilerplate-1).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Tailles_de_canvas_et_WebGL","Apprendre/WebGL/Par_exemple/Créer_une_animation_avec_découpe_et_applique")}}
