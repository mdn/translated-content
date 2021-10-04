---
title: Appliquer des couleurs
slug: Web/API/WebGL_API/By_example/Clearing_with_colors
tags:
  - Apprendre
  - Débutant
  - Exemple
  - Graphisme
  - Tutoriel
  - WebGL
translation_of: Web/API/WebGL_API/By_example/Clearing_with_colors
original_slug: Web/API/WebGL_API/By_example/Appliquer_des_couleurs
---
{{IncludeSubnav("/fr/Apprendre")}}

{{PreviousNext("Apprendre/WebGL/Par_exemple/Détecter_WebGL","Apprendre/WebGL/Par_exemple/Appliquer_une_couleur_%C3%A0_la_souris")}}

Dans cet article, on voit comment appliquer une couleur unie dans le contexte de rendu.

{{EmbedLiveSample("Appliquer_une_couleur_unie_dans_le_contexte_WebGL",660,300)}}

### Appliquer une couleur unie dans le contexte WebGL

Voici l'application la plus simple de {{Glossary("WebGL")}} : appliquer un vert uni dans le {{domxref("WebGLRenderingContext","contexte de rendu")}}. On notera que la feuille de style {{Glossary("CSS")}} définit l'arrière-plan comme étant noir. Ainsi, quand le canevas s'affiche en vert, on sait que {{Glossary("WebGL")}} a fonctionné comme il fallait.

Par ailleurs, vous pouvez remarquer que, pour appliquer une couleur unie sur le tampon (_buffer_) de dessin, on utilise deux étapes. Tout d'abord, on applique la couleur verte grâce à la méthode {{domxref("WebGLRenderingContext.clearColor()","clearColor()")}}. Cette opération ne modifie que l'état interne de {{Glossary("WebGL")}}, rien n'est peint/affiché pour le moment. Ensuite, on dessine « réellement » avec la méthode {{domxref("WebGLRenderingContext.clear()","clear()")}}. C'est la méthode classique pour dessiner avec WebGL. Il y a seulement quelques méthodes qui « dessinent » (dont `clear()`), toutes les autres méthodes permettent d'obtenir ou de modifier les variables liées aux états de WebGL (dont la couleur à appliquer).

Il existe de nombreuses options pour modifier les états {{Glossary("WebGL")}}. La couleur à appliquer en est une parmi d'autres.{{Glossary("WebGL")}}/{{Glossary("OpenGL")}} est souvent qualifié d'automate à états. En fait, lorsque vous manipulez ces variables internes, ces « interrupteurs », vous modifiez l'état interne de WebGL, qui modifie à son tour la façon dont la sortie est retranscrite (dans cet exemple, cela correspond à l'étape où les pixels sont passés en vert).

Enfin, vous pouvez voir que les couleurs manipulées en WebGL sont décrites avec le format {{Glossary("RGBA")}}. Ce format décrit quatre composantes numériques pour les intensités respectives des tons rouge (R), vert (_green_ G), bleu (B) et alpha (qui correspond à l'opacité). C'est pour ça que `clearColor()` prend quatre arguments.

```html
<p>Un programme WebGL très simple qui affiche une couleur.</p>
<!-- Le texte d'un élément canvas est affiché uniquement
    si canvas n'est pas supporté. -->
<canvas>Il semblerait que votre navigateur ne supporte pas
    le canevas HTML5</canvas>
```

```css
body {
  text-align : center;
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

  // On fait référence aux éléments du document.
  var paragraph = document.querySelector("p"),
    canvas = document.querySelector("canvas");

  // On récupère le contexte de rendu WebGL.
  var gl = canvas.getContext("webgl")
    || canvas.getContext("experimental-webgl");

  // Si cela échoue, on informe l'utilisateur.
  // Sinon, on initialise la zone de dessin et on
  // applique une couleur dans le contexte.
  if (!gl) {
    paragraph.innerHTML = "Échec de la récupération du "
      + "contexte WebGL. Votre navigateur peut ne pas "
      + " supporter WebGL.";
    return;
  }
  paragraph.innerHTML =
    "Félicitations, votre navigateur supporte WebGL. ";
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);

  // On définit la couleur qu'on veut appliquer
  // (ici un vert foncé).
  gl.clearColor(0.0, 0.5, 0.0, 1.0);

  // Enfin, on applique la couleur dans le contexte. C'est
  // cette fonction qui « dessine » réellement quelque chose.
  gl.clear(gl.COLOR_BUFFER_BIT);

}, false);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/clearing-with-colors).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Détecter_WebGL","Apprendre/WebGL/Par_exemple/Appliquer_une_couleur_%C3%A0_la_souris")}}
