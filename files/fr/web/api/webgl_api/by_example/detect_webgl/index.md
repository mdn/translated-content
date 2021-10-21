---
title: Détecter WebGL
slug: Web/API/WebGL_API/By_example/Detect_WebGL
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Detect_WebGL
original_slug: Web/API/WebGL_API/By_example/Détecter_WebGL
---
{{IncludeSubnav("/fr/Apprendre")}}{{PreviousNext("Apprendre/WebGL/Par_exemple","Apprendre/WebGL/Par_exemple/Appliquer_des_couleurs")}}

Dans cet exemple, on voit comment détecter un contexte de rendu {{Glossary("WebGL")}} et afficher le résultat à l'utilisateur.

{{EmbedLiveSample("Détecter_le_support_WebGL",660,150)}}

### Détecter le support WebGL

Dans ce premier exemple, on vérifie si le navigateur prend en charge {{Glossary("WebGL")}}. Pour cela, on essaye d'obtenir le {{domxref("WebGLRenderingContext","contexte de rendu WebGL","",1)}} à partir d'un élément {{domxref("HTMLCanvasElement","canvas")}}. Le {{domxref("WebGLRenderingContext","contexte de rendu WebGL", "", 1)}} est une interface qui permet de connaître et de modifier l'état du moteur graphique WebGL, d'envoyer des données à WebGL et d'exécuter des commandes de dessin.

La gestion d'une machine graphique au sein d'une seule interface n'est pas propre à {{Glossary("WebGL")}}. Les autres {̣{Glossary("API")}} graphiques comme {{domxref("CanvasRenderingContext2D","le contexte de rendu 2D du canevas", "", 1)}}. Cependant, les propriétés et variables qui peuvent être manipulées changent d'une API à l'autre.

```html
<p>[ On affichera ici le résultat de la détection du support WebGL ]</p>
<button>Cliquez ici pour détecter WebGLRenderingContext</button>
```

```css
body {
  text-align : center;
}
button {
  display : block;
  font-size : inherit;
  margin : auto;
  padding : 0.6em;
}
```

```js
// On exécute tout dans le gestionnaire d'événement
// correspondant au chargement de la fenêtre. De cette
// façon, le DOM est complètement chargé et mis en forme
// avant de le manipuler.
window.addEventListener("load", function() {
  var paragraph = document.querySelector("p"),
    button = document.querySelector("button");

  // On ajoute un gestionnaire d'événement pour
  // le clic sur le bouton
  button.addEventListener("click", detectWebGLContext, false);
  function detectWebGLContext () {

    // On crée un élément canvas. Le canvas n'est pas
    // ajouté au document et il n'est donc jamais
    // affiché dans la fenêtre du navigateur
    var canvas = document.createElement("canvas");

    // On récupère le contexte WebGLRenderingContext
    // depuis l'élément canvas.
    var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");

    // On affiche le résultat.
    if (gl && gl instanceof WebGLRenderingContext) {
      paragraph.innerHTML =
        "Félicitations, votre navigateur supporte WebGL.";
    } else {
      paragraph.innerHTML = "Échec du contexte WebGL. "
        + "Votre navigateur peut ne pas supporter WebGL.";
    }
  }
}, false);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl).

{{PreviousNext("Apprendre/WebGL/Par_exemple","Apprendre/WebGL/Par_exemple/Appliquer_des_couleurs")}}
