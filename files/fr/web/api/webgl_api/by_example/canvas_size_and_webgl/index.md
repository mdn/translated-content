---
title: Tailles de canvas et WebGL
slug: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Canvas_size_and_WebGL
original_slug: Web/API/WebGL_API/By_example/Tailles_de_canvas_et_WebGL
---
{{IncludeSubnav("/fr/Apprendre")}}

{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_des_découpes_simples","Apprendre/WebGL/Par_exemple/Modèle_1")}}

{{EmbedLiveSample("Les_effets_liés_à_la_taille_du_canevas_sur_le_rendu_avec_WebGL",660,180)}}

Dans cet exemple, on observe l'effet obtenu quand on définit (ou non) la taille du canevas HTML avec sa taille {{Glossary("CSS")}} (exprimée en pixels CSS), tel qu'il apparaît dans la fenêtre du navigateur.

### Les effets liés à la taille du canevas sur le rendu avec WebGL

Grâce aux méthodes {{domxref("WebGLRenderingContext.scissor()","scissor()")}} et {{domxref("WebGLRenderingContext.clear()","clear()")}} on peut démontrer que le tampon (_buffer_) de dessin WebGL est affecté par la taille du canevas (l'élément HTML `canvas`).

La taille du premier canevas est définie avec la taille de l'élément, mis en forme, qui est déterminée par {{Glossary("CSS")}}. Pour cela, on affecte respectivement les valeurs {{domxref("Element.clientWidth","clientWidth")}} and {{domxref("Element.clientHeight","clientHeight")}} aux propriétés {{domxref("HTMLCanvasElement.width","width")}} et {{domxref("HTMLCanvasElement.height","height")}}.

Pour le deuxième canevas, on n'applique pas ce traitement, c'est donc les dimensions internes du canevas : {{domxref("HTMLCanvasElement.width","width")}} et {{domxref("HTMLCanvasElement.height","height")}} qui sont prises en compte. Celles-ci sont différentes des dimensions de l'élément `canvas` affiché dans le fenêtre du navigateur.

L'effet devient visible quand on utilise les méthodes {{domxref("WebGLRenderingContext.scissor()","scissor()")}} et {{domxref("WebGLRenderingContext.clear()","clear()")}} pour dessiner un carré au centre du canevas en définissant sa position et sa taille en pixels. Dans le premier canevas, on obtient bien le bon résultat et dans le deuxième, on a la mauvaise forme, la mauvaise taille et la mauvaise position.

```html
<p>On compare les deux canevas.</p>
<canvas>Votre navigateur ne semble pas
    supporter l'élément HTML5 canvas.</canvas>
<canvas>Votre navigateur ne semble pas
    supporter l'élément HTML5 canvas.</canvas>
```

```css
body {
  text-align : center;
}
canvas {
  width : 120px;
  height : 80px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
```

```js
window.addEventListener("load", function() {
  "use strict"
  var firstCanvas = document.getElementsByTagName("canvas")[0],
    secondCanvas = document.getElementsByTagName("canvas")[1];

  // Ici on applique le traitement spécifique au premier
  // canevas
  firstCanvas.width = firstCanvas.clientWidth;
  firstCanvas.height = firstCanvas.clientHeight;

  // Ensuite on traite les deux canevas de la même façon
  [firstCanvas, secondCanvas].forEach(function(canvas) {
    var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");
    if (!gl) {
      document.querySelector("p").innerHTML =
        "Échec de l'obtention du contexte WebGL. "
        + "Votre navigateur peut ne pas supporter WebGL.";
      return;
    }
    gl.viewport(0, 0,
      gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(30, 10, 60, 60);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  });
}, false);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/canvas-size-and-webgl).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Appliquer_des_découpes_simples","Apprendre/WebGL/Par_exemple/Modèle_1")}}
