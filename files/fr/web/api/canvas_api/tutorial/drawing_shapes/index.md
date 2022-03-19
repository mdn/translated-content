---
title: Dessiner des formes avec le canevas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
tags:
  - Canvas
  - Graphisme
  - Guide
  - HTML
  - HTML5
  - Intermédiaire
  - Tutoriel
translation_of: Web/API/Canvas_API/Tutorial/Drawing_shapes
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Formes_géométriques
---
{{CanvasSidebar}} {{PreviousNext("Tutoriel_canvas/Utilisation_de_base", "Tutoriel_canvas/Ajout_de_styles_et_de_couleurs")}}

Maintenant que nous avons défini notre [environnement de canevas](/fr/docs/Tutoriel_canvas/Utilisation_de_base), nous pouvons entrer dans les détails de la façon de dessiner sur le canevas. A la fin de cet article, vous aurez appris à tracer des rectangles, des triangles, des lignes, des arcs et des courbes, vous rendant ainsi familier avec certaines des formes de base. Le travail avec les trajets est essentiel lors du dessin d'objets sur le canevas, et nous verrons comment cela peut être fait.

## La grille

Avant de pouvoir commencer à dessiner, il nous faut parler de la grille ou **système de coordonnées**. Notre schéma HTML de la page précédente avait un élément canevas large de 150 pixels et haut de 150 pixels. À droite, vous voyez ce canevas avec la grille par défaut superposée. Normalement, 1 unité dans la grille correspond à 1 pixel sur le canevas. L'origine de cette grille est positionnée dans le coin *supérieur gauche* de coordonnées (0, 0). Tous les éléments sont placés relativement à cette origine. Ainsi, le coin supérieur gauche du carré bleu est à `x` pixels à partir de la gauche et à `y` pixels à partir du haut, aux coordonnées (x, y). Plus loin dans ce tutoriel, nous verrons comment déplacer l'origine à une position différente, faire pivoter la grille ou même la mettre à l'échelle ; mais pour l'instant, nous nous en tiendrons aux valeurs par défaut.

![](canvas_default_grid.png)

## Dessin de rectangles

Au contraire de [SVG](/fr/docs/Web/SVG), le {{HTMLElement("canvas")}} ne supporte qu'une seule forme primitive : le rectangle. Toute autre forme doit être créée en combinant un ou plusieurs trajets, c'est-à-dire des listes de points reliés par des lignes. Heureusement, nous avons un assortiment de fonctions de dessin de trajets, qui rendent possible la composition de formes très complexes.

Commençons par le rectangle. Il y a trois fonctions qui dessinent des rectangles sur le canvas :

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, largeur, hauteur)")}}
  - : Dessine un rectangle rempli.
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, largeur, hauteur)")}}
  - : Dessine un contour rectangulaire
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, largeur, hauteur)")}}
  - : Efface la zone rectangulaire spécifiée, la rendant complètement transparente.

Chacune de ces trois fonctions a les mêmes paramètres. `x` et `y` indiquent la position sur le canevas (par rapport à l'origine) du coin supérieur gauche du rectangle sur le canvas. `largeur` et `hauteur` indiquent la taille du rectangle.

Ci-dessous la fonction `draw()` de la page précédente, mais utilisant maintenant ces trois fonctions.

### Exemple de forme rectangulaire

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
    ctx.fillRect(25, 25, 100, 100)
       ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

Le résultat de cet exemple est montré ci-dessous.

{{EmbedLiveSample("Exemple_de_forme_rectangulaire", 160, 160, "canvas_rect.png")}}

La fonction `fillRect()` dessine un grand carré noir de 100 pixels de côté. La fonction `clearRect()` efface ensuite un carré de 60x60 pixels, et finalement, la fonction `strokeRect()` est appelée pour créer un contour rectangulaire de 50x50 pixels dans l'espace effacé.

Dans les pages qui suivent, nous verrons deux méthodes alternatives pour `clearRect()`, et nous verrons aussi comment changer la couleur et le style de trait des formes rendues.

A la différence des fonctions de trajet que nous allons voir dans la prochaine section, les trois fonctions de rectangles dessinent immédiatement sur le canvas.

## Dessin de trajets

Les seules autres formes primitives sont les _trajets_. Un trajet est une liste de points, reliés par des segments de lignes qui peuvent être de différentes formes, incurvées ou non, de largeur différente et de couleur différente. Un trajet, ou même un sous-trajet, peut être fermé. La réalisation de formes utilisant des trajets requiert quelques étapes supplémentaires :

1.  Tout d'abord, vous devez créer le trajet.
2.  Ensuite vous devez utiliser des [instructions de dessin](/fr-FR/docs/Web/API/CanvasRenderingContext2D#Paths) pour dessiner sur le trajet.
3.  Finalement, vous devez fermer le trajet.
4.  Une fois que le trajet a été créé, vous devez le tracer ou le remplir pour le faire apparaître.

Voici les functions utilisées pour réaliser ces étapes :

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : Crée un nouveau trajet. Une fois créé, les fonctions de dessin ultérieures seront dirigées vers le trajet et utilisées pour le construire.
- [Méthodes de trajet](/fr-FR/docs/Web/API/CanvasRenderingContext2D#Paths)
  - : Méthodes pour définir différents trajets pour les objets.
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : Ferme le trajet pour que les fonctions de dessin ultérieures soient à nouveau dirigées vers le contexte.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : Dessine la forme en traçant son contour.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : Dessine une forme pleine en remplissant la zone de contenu du trajet.

La première étape pour créer un trajet est d'appeler `beginPath()`. En interne, les trajets sont stockés comme une liste de sous-trajets (lignes, arcs, etc) qui ensemble réalisent une forme. Chaque fois que cette méthode est appelée, la liste est remise à zéro, et nous pouvons commencer à dessiner de nouvelles formes.

> **Note :** Lorsque le trajet en cours est vide, par exemple immédiatement après avoir appelé `beginPath()`, ou sur un canvas nouvellement créé, la première instruction de construction de trajet est toujours traitée comme un `moveTo()`, indépendamment de ce qu'elle est en réalité. Pour cette raison, il sera pratiquement toujours souhaitable d'indiquer la position de départ après la réinitialisation d'un trajet.

La deuxième étape est d'appeler les méthodes qui indiquent effectivement les sous-trajets à dessiner. Nous verrons ces méthodes bientôt.

La troisième méthode, optionnelle, est l'appel à `closePath()`. Cette méthode essaye de fermer la forme géométrique en dessinant une ligne droite depuis le point courant jusqu'au début du trajet. Si la forme a déjà été fermée ou s'il n'y a qu'un seul point dans la liste, cette fonction ne fait rien.

> **Note :** Quand vous appelez `fill()`, toutes les formes ouvertes sont automatiquement fermées, ainsi vous n'avez pas à appeler `closePath()`. Ce n'est **pas** le cas quand vous appelez `stroke()`.

### Dessin d'un triangle

Par exemple, le code pour dessiner un triangle peut ressembler à ce qui suit&nbsp;:

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

Le résultat ressemble à :

{{EmbedLiveSample("Dessin_d'un_triangle", 110, 110, "triangle.png")}}

### Déplacement du stylo

Une fonction très utile, qui ne dessine rien mais qui fait tout de même partie de la liste de trajets décrite plus haut, est la fonction `moveTo()`. La meilleure façon de l'imaginer est le fait de lever un stylo ou un crayon depuis une position sur un papier, et de le placer sur une autre.

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : Déplace le stylo aux coordonnées `x` et `y`.

Lorsque le canevas est initialisé ou que `beginPath()` est appelé, vous souhaiterez typiquement utiliser `moveTo()` pour positionner le point de départ quelque part ailleurs. On pourrait aussi utiliser `moveTo()` pour dessiner des trajets non reliés. Jetez un coup d'œil à l'émoticon ci-dessous.

Pour essayer par vous-même, vous pouvez utiliser le fragment de code ci-dessous. Collez-le simplement dans la fonction `draw()` que nous avons vue plus tôt.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(110,75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.stroke();
  }
}
```

Le résultat ressemble à ce qui suit&nbsp;:

{{EmbedLiveSample("Déplacement_du_stylo", 160, 160, "canvas_smiley.png")}}

Si vous voulez voir les lignes d'interconnexion, vous pouvez enlever les lignes qui appellent `moveTo()`.

> **Note :** Pour en savoir plus sur la fonction `arc()`, voir la section [Les arcs](#les_arcs) ci-dessous.

### Les lignes

Pour dessiner des lignes droites, utilisez la méthode `lineTo()`.

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : Dessine une ligne depuis la position de dessin courante jusqu'à la position spécifiée par `x` et `y`.

Cette méthode prend deux arguments, `x` et `y`, qui sont les coordonnées du point final de la ligne. Le point de départ dépend des trajets précédemment tracés, où le point final du trajet précédent est le point de départ du suivant, etc. Le point de départ peut aussi être changé en utilisant la méthode `moveTo()`.

L'exemple ci-dessous dessine deux triangles, un rempli et un filaire.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    
    // Triangle plei
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(1
    ctx.lineTo(2
    ctx.fill();
    
    // Triangle filaire
    ctx.beginPath();
    ctx.moveTo(125, 125)
       ctx.lineTo(125, 
       ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

Il commence par appeler `beginPath()` pour démarrer un nouveau trajet de forme. Nous utilisons ensuite la méthode `moveTo()` pour déplacer le point de départ à la position désirée. En dessous, deux lignes sont dessinées, qui constituent deux côtés du triangle.

{{EmbedLiveSample("Les_lignes", 160, 160, "canvas_lineto.png")}}

Vous remarquerez la différence entre le triangle plein et le filaire. Cela, comme mentionné précédemment, vient du fait que les formes sont automatiquement fermées lorsqu'un trajet est rempli, mais pas lorsqu'elles sont dessinées au trait. Si nous avions omis le `closePath()` pour le triangle filaire, seules deux lignes auraient été tracées, et non pas un triangle complet.

### Les arcs

Pour dessiner des arcs ou des cercles, on utilise les méthodes `arc() ou arcTo()`.

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, rayon, angleInitial, angleFinal, antihoraire)")}}
  - : Dessine un arc de cercle qui est centré à la position _(x, y),_ de rayon _r_, commençant à _angleInitial_ et finissant à *angleFinal* en allant dans le sens indiqué par _antihoraire_ (par défaut, horaire).
- **{{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, rayon)")}}**
  - : Dessine un arc avec les points de contrôle et l'angle donnés, relié au point précédent par une ligne droite.

Regardons plus en détail la méthode `arc`, qui prend six paramètres : `x` et `y` sont les coordonnées du centre du cercle sur lequel l'arc doit être tracé. `rayon` se passe d'explication. Les paramètres `angleInitial et` `angleFinal` définissent en radians les points de départ et d'arrivée de l'arc, le long de la courbe du cercle. Ceux-ci sont mesurés à partir de l'axe des x. Le paramètre `antihoraire` est une valeur booléenne qui, lorsque `true`, dessine l'arc dans le sens antihoraire, sinon, l'arc est dessiné dans le sens horaire.

> **Note :** Les angles dans la fonction `arc` sont mesurés en radians, et non en degrés. Pour convertir des degrés en radians, vous pouvez utiliser l'expression JavaScript suivante : `radians = (Math.PI/180)*degres`.

L'exemple suivant est un peu plus complexe que ceux que nous avons vus plus haut. Il dessine 12 arcs différents, avec des angles et des remplissages différents.

Les deux [boucles `for`](/fr-FR/docs/Web/JavaScript/Reference/Statements/for) bouclent sur les lignes et les colonnes des arcs. Pour chaque arc, on commence un nouveau trajet en appelant `beginPath()`. Dans le code, chacun des paramètres dans l'arc est une variable pour des raisons de clarté, mais en réalité, vous n'avez pas besoin de le faire.

Les coordonnées `x` et `y` devraient être claires. `rayon` et `angleInitial` sont fixés. L'`angleFinal` commence à 180 degrés (demi-cercle) dans la première colonne et il est augmenté par pas de 90 degrés, pour finir par un cercle complet dans la dernière colonne.

L'instruction pour le paramètre `antihoraire` a pour résultat que la première et de la troisième ligne sont dessinées comme des arcs de sens horaire, et que la deuxième et quatrième sont dessinées comme des arcs de sens antihoraire. Enfin, l'instruction `if` fait des arcs filaires dans la moité supérieure, et des arcs remplis dans la moitié inférieure.

> **Note :** Cet exemple requiert canevas légèrement plus large que les autres sur cette page : 150 x 200 pixels.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="200"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canevas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // abscisse (x)
        var y = 25 + i * 50; // ordonnée (y)
        var radius = 20; // rayon d'arc
        var startAngle = 0; // Point de départ du cercle
        var endAngle = Math.PI + (Math.PI * j) / 2; // Point final pour le cercle
        var counterclockwise = i % 2 !== 0; // sens de rotation horaire ou non

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Les_arcs", 160, 210, "canvas_arc.png")}}

### Les courbes quadratiques et de Bézier

Le type suivant de trajets disponible est la [courbe de Bézier](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier), disponible en deux variétés, cubique et quadratique. Elles sont généralement utilisées pour dessiner des formes naturelles complexes.

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : Dessine une courbe de Bézier quadratique depuis la position courante du stylo jusqu'au point final spécifié par `x` et `y`, en utilisant le point de contrôle spécifié par `cp1x` et `cp1y`.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : Dessine une courbe de Bézier cubique depuis la position courante du stylo jusqu'au point spécifié par `x` et `y`, en utilisant les points de contrôle (`cp1x`, `cp1y`) et (`cp2x`, `cp2y`).

La différence entre ces deux méthodes est mieux décrite par l'image à droite. Une courbe quadratique de Bézier a un point de départ et un point d'arrivée (points bleus), et seulement un **point de contrôle** (indiqué par le point rouge), tandis qu'une courbe de Bézier cubique utilise deux points de contrôle.

![](canvas_curves.png)

Les paramètres `x` et `y` de ces deux méthodes sont les coordonnées du point d'arrivée. `cp1x` et `cp1y` sont les coordonnées du premier point de contrôle, et  `cp2x` et `cp2y` sont les coordonnées du second point de contrôle.

Utiliser des courbes quadratiques et cubiques de Bézier peut constituer un certain défi, car à la différence d'un logiciel de tracé des vecteurs comme _Adobe Illustrator_, nous n'avons pas de retour visuel direct concernant ce que nous faisons. Cela rend passablement difficile le dessin de formes complexes. Dans l'exemple suivant, nous allons dessiner quelques formes naturelles simples, mais si vous avez du temps et - surtout - de la patience, des formes bien plus complexes peuvent être créées.

Il n'y a rien de très difficile dans ces exemples. Dans les deux cas, on peut voir une succession de courbes être dessinées qui aboutissent finalement à une forme complète.

#### Courbes de Bézier quadratiques

Cet exemple utilise plusieurs courbes quadratiques de Bézier pour rendre une bulle de dialogue.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    
    // Exemples de c
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100)
    ctx.quadraticCurveTo(125, 100, 125, 62
       ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("Courbes_de_Bézier_quadratiques", 160, 160, "canvas_quadratic.png")}}

#### Les courbes de Bézier cubiques

Cet exemple dessine un cœur en utilisant les courbes de Bézier cubiques.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    
    // Exemple de co
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100,
       ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("Les_courbes_de_Bézier_cubiques", 160, 160, "canvas_bezier.png")}}

### Rectangles

En plus des trois méthodes que nous avons vues dans la section [Dessin de rectangles](#dessin_de_rectangles), qui dessinent des formes rectangulaires directement sur le canevas, il y a la méthode `rect()`, qui ajoute un trajet rectangulaire à un trajet actuellement ouvert.

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, largeur, hauteur)")}}
  - : Dessine un rectangle dont l'angle supérieur gauche est spécifié par (`x`, `y`), avec les `largeur` et `hauteur` spécifiées.

Quand cette méthode est exécutée, la méthode `moveTo()` est automatiquement appelée avec les paramètres (0,0). En d'autres termes, la position en cours du stylo est automatiquement réinitialisée aux coordonnées par défaut.

### Combiner les possibilités

Jusqu'à présent, chaque exemple de cette page a utilisé un seul type de fonction de trajet par forme. Cependant, il n'y a pas de limite au nombre ou aux types de trajets que vous pouvez utiliser pour créer une forme. Ainsi, dans ce dernier exemple, combinons toutes les fonctions de trajet pour faire un ensemble de personnages d'un jeu très célèbre.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canevas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canevas');
  if (canevas.getContext) {
    var ctx = canevas.getContext('2d');
    
    rectArrondi(ctx, 12, 12, 150, 150, 15
    rectArrondi(ctx, 19, 19, 150, 150, 9)
    rectArrondi(ctx, 53, 53, 49, 33, 10);
    rectArrondi(ctx, 53, 119, 49, 16, 6);
    rectArrondi(ctx, 1
    rectArrondi(ctx,
    
    ctx.beginPath();
    ctx.arc(37, 
    ctx.lineTo(31, 37);
    ctx.fill();
    
    for(var i = 0; i< 8; i++
      
    }
    
    for(i = 0; i < 6; i++) {
    
    }
    
    for(i = 0; i < 8; i+
    ctx.fillRect(51 + i * 
    }
    
    ctx.beginPat
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 1
    ctx.bezierCurveTo(8
    ctx.bezierCurveTo(105, 88, 1
    ctx.lineTo(111, 116)
    ctx.lineTo(1
    ctx.lineTo(101.666, 
    ctx.lineTo(97, 1
    ctx.lineTo(92.333, 
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();
    
    ctx.fillStyle = 
    ctx.beginPath();
    ctx.moveTo(9
    ctx.bezierCurveT
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 10
    ctx.bezierCu
       ctx.bezierCurveTo(95, 99
       ctx.moveTo(103, 
       ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
       ctx.bezierCu
       ctx.bezierCurveT
       ctx.bezierCurveTo(107, 99, 106, 96, 103, 9
       ctx.fill();
       
    ctx.fillStyle = 
    ctx.beginPath();
    ctx.arc(101,
    ctx.fill();
       
       ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// Une fonction utilitaire pour tracer des rectangles avec des coins arrondis

function rectArrondi(ctx, x, y, largeur, hauteur, rayon) {
  ctx.beginPath();
  ctx.moveTo(x, y + rayon);
  ctx.lineTo(x, y + hauteur - rayon);
  ctx.quadraticCurveTo(x, y + hauteur, x + rayon, y + hauteur);
  ctx.lineTo(x + largeur - rayon, y + hauteur);
  ctx.quadraticCurveTo(x + largeur, y + hauteur, x + largeur, y + hauteur - rayon);
  ctx.lineTo(x + largeur, y + rayon);
  ctx.quadraticCurveTo(x + largeur, y, x + largeur - rayon, y);
  ctx.lineTo(x + rayon,y);
  ctx.quadraticCurveTo(x, y, x, y + rayon);
  ctx.stroke();
}
```

L'image résultante ressemble à ce qui suit&nbsp;:

{{EmbedLiveSample("Combiner_les_possibilités", 160, 160)}}

Nous ne l'expliquerons pas plus en détails, du fait que c'est étonnament simple. Les choses les plus importantes à noter sont l'utilisation de la propriété `fillStyle` sur le contexte du dessin, et l'utilisation d'une fonction utilitaire dans ce cas, rectArrondi`())`. L'utilisation de fonctions utilitaires pour des éléments de dessin que vous faites souvent peut être très utile, et peut réduire la quantité de code dont vous avez besoin, ainsi que sa complexité.

Nous reviendrons sur `fillStyle` plus en détail plus loin dans ce tutoriel. Pour l'instant, tout ce que nous faisons est de l'utiliser pour changer en blanc la couleur pour les trajets depuis la couleur noire par défaut, et inversement ensuite.

## Objets Path2D

Comme nous l'avons vu dans le dernier exemple, il peut y avoir une série de trajets et d'instructions de dessin pour dessiner des objets sur votre canevas. Pour simplifier le code et améliorer les performances, l'objet [`Path2D`](/fr/docs/Web/API/Path2D), disponible dans les versions récentes des navigateurs, vous permet de mettre en cache ou d'enregistrer ces instructions de dessin. Vous pourrez alors rejouer vos trajets rapidement. Voyons comment nous pouvons construire un objet `Path2D`&nbsp;:

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : Le constructor **`Path2D()`** retourne un objet `Path2D` nouvellement instancié, optionellement avec un autre trajet comme argument (crée une copie), ou optionellement avec une chaîne constituée de données de [trajet SVG](/fr-FR/docs/Web/SVG/Tutorial/Paths).

<!---->

    new Path2D();     // objet trajet vide
    new Path2D(trajet); // copie depuis un autre objet Path2D
    new Path2D(d);    // trajet depuis des données de trajet SVG

Toutes les [méthodes de trajet](/en-US/docs/Web/API/CanvasRenderingContext2D#Paths) telles que `moveTo`, `rect`, `arc` ou `quadraticCurveTo`, etc., que nous avons appris à connaître ci-dessus, sont disponibles sur les objets `Path2D`.

L'API `Path2D` ajoute aussi une manière de combiner des trajets en utilisant la méthode `addPath`. Cela peut être utile quand vous voulez contruire des objets à partir de plusieurs composants, par exemple.

- {{domxref("Path2D.addPath", "Path2D.addPath(trajet [, transformation])")}}
  - : Ajoute un trajet, au trajet en cours, avec une matrice de transformation.

### Exemple de Path2D

Dans cet exemple, on crée un rectangle et un cercle. Tous deux sont stockés comme des objets `Path2D`, de sorte qu'ils sont disponibles pour un usage ultérieur. Avec la nouvelle API `Path2D`, plusieurs méthodes ont été mises à jour pour accepter optionnellement un objet `Path2D` à utiliser au lieu du trajet en cours. Ici, `stroke` et `fill` sont utilisés avec un argument de trajet pour dessiner les deux objets sur le canevas, par exemple.

```html hidden
<html>
 <body onload="dessiner();">
   <canvas id="canvas" width="130" height="100"></canvas>
 </body>
</html>
```

```js
function dessiner() {
  var canevas = document.getElementById('canvas');
  if (canevas.getContext){
    var ctx = canevas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var cercle = new Path2D();
    cercle.moveTo(125, 35);
    cercle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(cercle);
  }
}
```

{{EmbedLiveSample("Exemple_de_Path2D", 130, 110, "path2d.png")}}

### Utilisation de trajets SVG

Une autre fonctionnalité puissante de la nouvelle API `Path2D` de canevas est l'utilisation de [données de trajet SVG](/fr-FR/docs/Web/SVG/Tutorial/Paths) pour initialiser des trajets sur votre canevas. Cela peut vous permettre de faire circuler des données de trajet et les réutiliser, à la fois en SVG et dans un canevas.

Le trajet se déplacera au point (`M10 10`) et se déplacera alors de 80 points horizontalement vers la droite (`h 80`), ensuite de 80 points vers le bas (`v 80`), puis de 80 points vers la gauche (`h -80`), et reviendra alors au départ (`z`). Vous pouvez voir cet exemple sur la page du [constructeur P`ath2D`](/en-US/docs/Web/API/Path2D.Path2D#Using_SVG_paths).

    var p = new Path2D("M10 10 h 80 v 80 h -80 Z");

{{PreviousNext("Tutoriel_canvas/Utilisation_de_base", "Tutoriel_canvas/Ajout_de_styles_et_de_couleurs")}}
