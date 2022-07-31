---
title: Utilisation de base des canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
tags:
  - Canvas
  - Graphismes
  - HTML
  - Tutoriel_canvas
  - Tutoriels
translation_of: Web/API/Canvas_API/Tutorial/Basic_usage
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Utilisation_de_base
---
{{CanvasSidebar}} {{PreviousNext("Tutoriel_canvas", "Tutoriel_canvas/Formes_géométriques")}}

## L'élément `<canvas>`

Commençons par regarder l'élément {{HTMLElement("canvas")}} lui-même.

```html
<canvas id="tutoriel" width="150" height="150"></canvas>
```

Ceci ressemble beaucoup à l'élément \<img>. La seule différence est qu'il n'y a pas les attributs `src` et `alt`. L'élément `<canvas>` a seulement deux attributs : {{htmlattrxref ("width", "canvas")}} et {{htmlattrxref ("height", "canvas")}} (« largeur » et « hauteur »). Ces deux attributs sont optionnels et peuvent aussi être fixés à travers le [DOM](/fr/docs/R%C3%A9f%C3%A9rence_du_DOM_Gecko). Quand les attributs **width** et **height** ne sont pas spécifiés, le canvas sera initialement large de **300 pixels** et haut de **150 pixels**. Les dimensions du canvas peuvent être modifiés par du [CSS](/fr/docs/Web/CSS), mais l'image sera dessinée selon les valeurs **width** et **height** du canvas et ensuite étirée pour afficher dans l'espace donné par le CSS.

> **Note :** Si l'image semble déformée, essayez de spécifier de manière explicite vos attributs `width` et `height` dans l'élément `<canvas>`, et de ne pas utiliser de CSS.

L'attribut `id` n'est pas spécifique à l'élément `<canvas>`. C'est en fait un des attributs HTML de base qui peut être utilisé par presque tous les éléments HTML. C'est toujours mieux d'assigner une `id` car ça facilite beaucoup l'identification du `canvas` dans le code `javascript`.

L'élément `<canvas>` peut être stylisé comme n'importe quelle image normale (marges, contours, arrière-plan, etc). Si aucun style n'est donné, le canvas sera par défaut complètement transparent. Il faut noter que peu importe quels styles sont utilisés, le style n'affectera pas l'acte de dessiner sur le canvas. Nous verrons en détail la stylisation des canvas plus tard dans ce tutoriel.

### Contenu de repli

Puisque certains plus anciens navigateurs ne supportent pas l'élément {{HTMLElement("canvas")}} (les plus communs étant les versions d'Internet Explorer avant la version 9), il est mieux d'avoir du contenu de repli pour afficher.

Heureusement, c'est très facile : il faut tout simplement mettre le contenu dans l'élément `<canvas>` lui-même. Les navigateurs qui ne supportent pas `<canvas>` vont afficher ce contenu de repli, et ceux qui supportent `<canvas>` vont l'ignorer et dessiner le canvas.

Le contenu de repli pourrait, par exemple, donner une description texte du canvas, ou afficher une image fixe comme aperçu de ce que le canvas dessinerait de façon dynamique.

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="une horloge"/>
</canvas>
```

## La nécessité de la balise `</canvas>`

Au contraire de l'élément {{HTMLElement("img")}}, l'élément {{HTMLElement("canvas")}} **requiert** la balise fermante (`</canvas>`).

> **Note :** Bien que quelques unes des premières versions du navigateur Safari ne requièrent pas la balise fermante, la spécification HTML indique qu'elle est nécessaire, alors il est mieux de l'inclure pour avoir le plus de compatibilité possible. Ces anciennes versions de Safari (avant la version 2.0) affichent le contenu de repli en plus que le canvas lui-même, sauf si vous utilisez des trucs CSS pour le masquer. Heureusement, il y a très peu d'utilisateurs de ces vieilles versions de Safari de nos jours.

Si vous n'avez pas besoin de contenu de repli, un simple `<canvas id="foo" ...></canvas>` est totalement compatible avec tous les navigateurs qui ont pris en charge la fonctionnalité canvas.

## Le contexte de rendu

L'élément {{HTMLElement("canvas")}} crée une surface pour dessiner à grandeur fixe. Cette surface expose un ou plusieurs **contextes de rendu**, qui sont utilisés pour créer et manipuler le contenu affiché. Ce tutoriel se concentrera sur le contexte de rendu 2D. D'autres contextes permettent d'autres types de rendu, tel que le contexte [WebGL](/fr/docs/Web/WebGL), qui utilise un contexte 3D ("experimental-webgl") inspiré de [OpenGL ES](http://www.khronos.org/opengles/).

Initialement, le canvas est vide. Pour afficher quelque chose,  un script doit commencer par accéder au contexte de rendu pour pouvoir dessiner dessus. L'élément {{HTMLElement("canvas")}} a une [méthode](/fr/docs/Web/API/HTMLCanvasElement#M.C3.A9thodes) nommée `getContext()`, qui peut être utilisée pour obtenir le contexte de rendu et ses fonctions de dessin. `getContext()` a comme seul paramètre le type de contexte. Pour des graphiques 2D, comme ceux utilisés dans ce tutoriel, il faut spécifier "2d".

```js
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

La première ligne obtient le {{HTMLElement("canvas")}} dans le DOM en appelant {{domxref("document.getElementById()")}}. Lorsque nous avons l'élément canvas, nous pouvons accéder au contexte de rendu en utilisant sa méthode `getContext()`.

## Vérification de la prise en charge

Le contenu de repli est affiché dans les navigateurs qui ne prennent pas en charge l'élément {{HTMLElement("canvas")}}. Les scripts peuvent aussi vérifier la prise en charge de manière programmatique en vérifiant la présence de la méthode `getContext()`. Notre extrait de code ci-dessus se transforme donc en ceci :

```js
var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
  var ctx = canvas.getContext('2d');
  // code de dessin dans le canvas
} else {
  // code pour le cas où canvas ne serait pas supporté
}
```

## Un modèle basique

Voici un modèle minimaliste, que nous allons utiliser comme point de départ dans des futurs exemples.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
        }
      }
    </script>
    <style type="text/css">
      canvas { border: 1px solid black; }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

Ce script contient une fonction `draw()`, qui est exécutée lorsque la page a fini de charger. Ce résultat est obtenu en utilisant l'événement de chargement du document. Cette fonction, ou une fonction similaire, pourrait aussi être appelé en utilisant {{domxref("window.setTimeout()")}}, {{domxref("window.setInterval()")}}, ou n'importe quel autre gestionnaire d'événement, tant que la page est chargée en premier.

Voici à quoi le modèle ressemble :

{{EmbedLiveSample("Un_modèle_basique", 160, 160)}}

## Un exemple simple

Pour commencer, observons un exemple simple qui dessine deux rectangles qui s'intersectent, un d'entre eux ayant de la transparence alpha. Nous verrons plus en détail comment ça marche dans les exemples suivants.

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

Cet exemple ressemble a ceci :

{{EmbedLiveSample("Un_exemple_simple", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Tutoriel_canvas", "Tutoriel_canvas/Formes_géométriques")}}
