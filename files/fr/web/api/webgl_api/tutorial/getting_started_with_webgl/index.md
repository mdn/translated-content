---
title: Commencer avec WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
tags:
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Commencer_avec_WebGL
---
{{WebGLSidebar("Tutorial")}} {{Next("Web/API/WebGL_API/Tutorial/Ajouter_du_contenu_à_WebGL")}}[WebGL](http://www.khronos.org/webgl/) permet à un contenu web d'utiliser l'API basée sur [OpenGL ES](http://www.khronos.org/opengles/) 2.0 pour effectuer un rendu 2D et 3D dans un [canvas](/fr/HTML/Canvas) dans les navigateurs qui le supportent, sans utilisation d'un module complémentaire. Les programmes WebGL sont constitués de code de contrôle écrit en JavaScript, et le code d'ombrage (GLSL) est exécuté dans l'Unité de Traitement Graphique (GPU) de l'ordinateur. Les éléments WebGL peuvent être mélangés avec d'autres éléments HTML, et composés d'autres parties de la page ou de l'arrière-plan de la page.

Cet article va vous donner une introduction aux bases de l'utilisation de WebGL. Il est supposé que vous avez déjà une compréhension des mathématiques impliquées dans les graphismes 3D, et cet article ne prétend pas vous enseigner les concepts des graphismes 3D par eux-mêmes.

Les exemples de code de ce tutoriel peuvent aussi être trouvés dans le [webgl-examples GitHub repository](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial).

## Préparation au rendu 3D

La première chose dont vous avez besoin pour utiliser WebGL pour faire un rendu est un canvas. Le fragment d'HTML ci-dessous déclare un canvas dans lequel notre exemple se dessinera.

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### Préparation du contexte WebGL

La fonction `main()` dans notre code JavaScript est appelée quand notre script est chargé. Son but est de créer le contexte WebGL et de commencer à rendre du contenu.

```js
main();

//
// Début ici
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Initialisation du contexte WebGL
  const gl = canvas.getContext("webgl");

  // Continuer seulement si WebGL est disponible et fonctionnel
  if (!gl) {
    alert("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.");
    return;
  }

  // Définir la couleur d'effacement comme étant le noir, complètement opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Effacer le tampon de couleur avec la couleur d'effacement spécifiée
  gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}
```

La première chose que nous faisons ici est d'obtenir une référence au canvas, en l'affectant à une variable dénommée `canvas`.

Une fois que nous avons le canvas, nous essayons de lui obtenir un [WebGLRenderingContext](/fr-FR/docs/Web/API/WebGLRenderingContext), en appelant [getContext](/fr-FR/docs/Web/API/HTMLCanvasElement/getContext) et en lui passant la chaîne `"webgl"`. Si le navigateur ne supporte pas WebGL, `getContext` retournera `null`, auquel cas nous afficherons un message pour l'utilisateur, et nous sortirons.

Si le contexte est initialisé avec succès, la variable `gl` sera notre référence à celui-ci. Dans ce cas, nous définissons la couleur d'effacement comme étant le noir, et nous effaçons le contexte avec cette couleur (redessin du canvas avec la couleur d'arrière-plan).

A ce stade, votre code est suffisant pour que le contexte WebGL puisse s'initialiser avec succès, et vous devriez vous retrouver avec une grande boîte noire et vide, prête à - et attendant de - recevoir du contenu.

{{EmbedGHLiveSample('webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[Voir le code complet](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample1) | [Ouvrir cette démo dans une nouvelle page](http://mdn.github.io/webgl-examples/tutorial/sample1/)

## Voir aussi

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/)&nbsp;: écrite par Luz Caballero, publiée sur dev.opera.com. Cet article traite de ce qu'est WebGL, explique comment WebGL fonctionne (incluant le concept de pipeline de rendu), et présente quelques bibliothèques WebGL.
- [WebGL Fundamentals](http://webglfundamentals.org/)
- [An intro to modern OpenGL :](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) une série de bons articles sur OpenGL écrits par Joe Groff, fournissant une introduction claire à OpenGL, depuis son histoire jusqu'au concept important de pipeline de graphismes, qui comprend aussi quelques exemples montrant comment OpenGL fonctionne. Si vous n'avez aucune idée de ce qu'est OpenGL, c'est un bon endroit pour commencer.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
