---
title: Dessiner des graphismes
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Un navigateur web contient certains outils graphiques très puissants, comme le langage [SVG](/fr/docs/Web/SVG) ou les API permettant de dessiner sur des éléments HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) (voir [l'API Canvas](/fr/docs/Web/API/Canvas_API) et [WebGL](/fr/docs/Web/API/WebGL_API)). Dans cet article, nous verrons une introduction au canevas et les ressources complémentaires pour approfondir ces connaissances.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Notions élémentaires de JavaScript (voir <a href="/fr/docs/Learn/JavaScript/First_steps">les premiers pas</a>, <a href="/fr/docs/Learn/JavaScript/Building_blocks">les blocs de construction</a>, <a href="/fr/docs/Learn/JavaScript/Objects">les objets en JavaScript</a>), et <a href="/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">les notions de bases pour les API côté client</a></td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Apprendre les notions de base pour dessiner sur des éléments <code>&lt;canvas&gt;</code> en utilisant JavaScript.</td>
    </tr>
  </tbody>
</table>

## Les graphismes sur le Web

Nous en parlons dans le module [intégration multimédia en HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding), le Web était initialement constitué uniquement de textes (ce qui peut sembler un peu austère). Les images ont été introduites par la suite, tout d'abord avec l'élément HTML [`<img>`](/fr/docs/Web/HTML/Element/img) puis avec les propriétés CSS comme [`background-image`](/fr/docs/Web/CSS/background-image), et la prise en charge du langage [SVG](/fr/docs/Web/SVG).

Toutefois, ce n'était pas encore suffisant. Il était bien possible d'utiliser [CSS](/fr/docs/Learn/CSS) et [JavaScript](/fr/docs/Learn/JavaScript) pour animer (et manipuler) les images vectorielles SVG (utilisant un format texte avec un langage de balise), mais il restait impossible de faire la même chose avec les images matricielles et les outils à disposition étaient limités. À cette époque, le Web ne permettait pas de créer des animations, des jeux ou des scènes 3D comme on pouvait en voir créés avec des langages plus bas niveau comme C++ ou Java.

La situation a commencé à évoluer lorsque les navigateurs ont commencé à prendre en charge l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) et [l'API Canvas](/fr/docs/Web/API/Canvas_API) correspondante. Apple a conçu initialement cet ensemble vers 2004 et les autres éditeurs de navigateur l'ont implémenté dans les années qui ont suivi. Comme nous le verrons ci-après, le canevas fournit de nombreux outils pour créer des animations en 2D, des jeux, des visualisations de données et d'autres types d'application, notamment lorsqu'il est combiné avec les autres API Web exposées par les navigateurs.

L'exemple qui suit montre une animation 2D simple sur un canevas où des balles rebondissent. Nous avions vu cette animation dans [le module d'introduction aux objets JavaScript](/fr/docs/Learn/JavaScript/Objects/Object_building_practice)&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Vers 2006-2007, Mozilla commença à travailler sur une implémentation expérimentale d'un canevas en trois dimensions. C'est ce qui est devenu [WebGL](/fr/docs/Web/API/WebGL_API), qui a ensuite été repris par les autres éditeurs de navigateur et qui a été standardisé vers 2009-2010. WebGL permet de créer des graphismes réalistes en 3D dans le navigateur web. L'exemple qui suit montre un cube qui tourne, implémenté avec WebGL&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Dans cet article, nous nous concentrerons surtout sur les canevas en deux dimensions (du code WebGL brut peut s'avérer très complexe). Nous verrons toutefois comment utiliser une bibliothèque WebGL afin de créer une scène 3D plus facilement et vous pourrez aussi consulter un tutoriel WebGL par ailleurs&nbsp;: [Démarrer avec WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

> **Note :** Les fonctionnalités de base pour le canevas sont correctement prises en charge par l'ensemble des navigateurs à l'exception d'Internet Explorer 8 et antérieur pour le canevas 2D, et d'Internet Explorer 11 et antérieur pour WebGL.

## Apprentissage actif&nbsp;: démarrer avec un élément `<canvas>`

Si vous souhaitez créer une scène 2D _ou_ 3D sur une page web, il vous faudra un élément HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas). Cet élément définit la zone de la page dans laquelle l'image sera dessiné. Il suffit d'inclure l'élément à la page&nbsp;:

```html
<canvas width="320" height="240"></canvas>
```

Le fragment de code qui précède créera un canevas sur la page qui mesure 320 pixels de large et 240 pixels de haut.

À l'intérieur de l'élément, on peut placer un contenu alternatif qui sera affiché si le navigateur ne prend pas en charge les canevas.

```html
<canvas width="320" height="240">
  <p>Votre navigateur ne prend pas en charge les canevas. Dommage !</p>
</canvas>
```

Bien entendu, le message utilisé ci-avant n'aide pas vraiment celle ou celui qui consulte la page. Dans un scénario réaliste, on veut que le contenu alternatif soit un remplacement correct pour le contenu affiché par le canevas. Ainsi, si on affiche un graphique en temps réel pour une cotation en bourse, on pourra avoir un contenu alternatif qui est une image affichant la dernière cotation connue et avec un texte alternatif indiquant les cotes en texte.

### Créer et dimensionner le canevas

Commençons par créer notre propre canevas sur lequel on dessinera quelques expérimentations.

1. Pour commencer, effectuez une copie locale du répertoire [`0_canvas_start`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start). Celui-ci contient trois fichiers&nbsp;:
   - "index.html"
   - "script.js"
   - "style.css"
2. Ouvrez le fichier `index.html`, puis ajoutez le code qui suit à l'intérieur, juste après la balise ouvrante [`<body>`](/fr/docs/Web/HTML/Element/body)&nbsp;:

   ```html
   <canvas class="monCanevas">
     <p>Un contenu alternatif pertinent ici.</p>
   </canvas>
   ```

   On ajoute une classe (avec l'attribut `class`) à l'élément `<canvas>` afin qu'il soit plus facile de le sélectionner si on a plusieurs canevas sur la page. Les attributs `width` et `height` sont absents pour le moment (vous pouvez les remettre si vous voulez, mais nous les définirons avec JavaScript dans une section suivante). Les canevas sans largeur ou hauteur explicite sont dessinés par défaut avec une largeur de 300 pixels et une hauteur de 150 pixels.

3. Ouvrez ensuite le fichier `script.js` et ajoutez les lignes de JavaScript suivantes&nbsp;:

   ```js
   const canvas = document.querySelector(".monCanevas");
   const width = (canvas.width = window.innerWidth);
   const height = (canvas.height = window.innerHeight);
   ```

   Ici, on enregistre une référence au canevas dans la constante `canvas`. La deuxième ligne permet définir la constante `width` et la propriété `width` du canevas avec la valeur de [`Window.innerWidth`](/fr/docs/Web/API/Window/innerWidth) (qui donne la largeur de la zone d'affichage (<i lang="en">viewport</i> en anglais). La troisième ligne fait de même avec la constante `height` et la propriété `height` qui se voient affecter la valeur de [`Window.innerHeight`](/fr/docs/Web/API/Window/innerHeight) (soit la hauteur de la zone d'affichage). On a donc désormais un canevas qui remplit toute la largeur et toute la hauteur de la fenêtre du navigateur&nbsp;!

   Dans ce fragment de JavaScript, on peut voir qu'on effectue plusieurs affectations d'un coup en utilisant plusieurs fois le signe égal. C'est une syntaxe autorisée en JavaScript et qui permet d'affecter la même valeur à plusieurs variables d'un coup. On utilise deux constantes pour la largeur et la hauteur, car ce sont des valeurs intéressantes pour plus tard (par exemple si on veut dessiner quelque chose à la moitié du canevas).

> **Note :** Le dimensionnement d'un canevas se fait généralement à l'aide des attributs HTML ou des propriétés du DOM. Il est possible d'utiliser CSS pour ce faire, mais le dimensionnement aura alors lieu après le rendu du canevas et l'image résultante pourrait alors apparaître pixelisée ou déformée.

### Obtenir le contexte du canevas et réglages finaux

Il reste une dernière étape avant que notre modèle d'utilisation du canevas soit terminé. Pour dessiner sur le canevas, on doit récupérer une référence spéciale à la zone de dessin qui s'appelle le contexte. Pour cela, on utilise la méthode [`HTMLCanvasElement.getContext()`](/fr/docs/Web/API/HTMLCanvasElement/getContext). Dans sa forme simple, cette méthode prend une chaîne de caractères en argument qui représente le type de contexte à récupérer.

Dans ce cas, on veut un canevas en deux dimensions. Pour cela, ajoutez la ligne JavaScript suivante à la suite des autres dans le fichier `script.js`&nbsp;:

```js
const ctx = canvas.getContext("2d");
```

> **Note :** Les autres valeurs de types de contexte incluent `webgl` pour WebGL, `webgl2` pour WebGL 2, etc. Nous n'aurons pas besoin de celles-ci dans cet article.

Et voilà, notre canevas est prêt pour le dessin&nbsp;! La variable `ctx` contient désormais un objet [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D) qu'on manipulera pour chaque opération de dessin sur le canevas.

Réalisons une dernière étape avant de continuer. Plaçons un arrière-plan noir sur le canevas pour avoir un premier aperçu de l'API. Ajoutez les lignes suivantes à la suite de votre JavaScript&nbsp;:

```js
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);
```

Ici, on définit une couleur de remplissage en utilisant la propriété [`fillStyle`](/fr/docs/Web/API/CanvasRenderingContext2D/fillStyle) du contexte (cette propriété utilise [des valeurs de couleur](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#couleurs), comme les propriétés CSS), puis on dessine un rectangle qui couvre toute la zone du canevas avec la méthode [`fillRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/fillRect) (dont les deux premiers paramètres sont les coordonnées du coin supérieur gauche du rectangle et dont les deux derniers sont la largeur et la hauteur voulues pour le rectangle, on utilise ici les variables `width` et `height` qui sont bien utiles)&nbsp;!

Notre modèle de base est désormais terminé, passons à la suite.

## Notions élémentaires pour les canevas en 2D

Comme nous l'avons vu avant, toutes les opérations de dessins se font en manipulant un objet [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D) (pour nous, il s'agit de `ctx`). De nombreuses opérations nécessitent des coordonnées précises qui indiquent où dessiner quelque chose. Le coin supérieur gauche du canevas aux coordonnées (0, 0), l'axe horizontal (x) va de la gauche vers la droite, et l'axe vertical va du haut vers le bas.

![](canvas_default_grid.png)

Pour dessiner des formes, on utilise souvent la primitive pour le rectangle ou on trace une ligne sur un chemin donné et on remplit la forme ainsi obtenue avec une couleur. Nous allons voir comment faire avec ces deux façons.

### Des rectangles simples

Commençons avec des rectangles simples.

1. Pour commencer, faites une copie du modèle de canevas construit juste avant (ou effectuez une copie locale du répertoire [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template) si vous n'avez pas suivi les étapes précédentes).
2. Ensuite, ajoutez les lignes suivantes à la suite du JavaScript&nbsp;:

   ```js
   ctx.fillStyle = "rgb(255, 0, 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   Si vous sauvegardez et rafraichissez, vous devriez voir un rectangle rouge dans le canevas. Son coin supérieur gauche est situé à 50 pixels du coin supérieur gauche du canevas (comme indiqué par les deux premiers paramètres), et il mesure 100 pixels de large par 150 pixels de haut (comme indiqué par les troisième et quatrième paramètres).

3. Ajoutons un autre rectangle à l'ensemble, celui-ci sera vert. Ajoutez ce qui suit en bas de votre JavaScript&nbsp;:

   ```js
   ctx.fillStyle = "rgb(0, 255, 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   Sauvegardez puis rafraichissez la page dans votre navigateur et vous verrez un nouveau rectangle. Cela permet de voir un point important&nbsp;: certaines opérations graphiques, comme le dessin de rectangles, de lignes, etc. sont exécutées dans l'ordre des instructions. Voyez cela comme une peinture sur une toile ou un mur, chaque couche de peinture vient recouvrir la couche en dessous et peut même la masquer complètement. Ce comportement ne peut pas être changé et il faudra donc faire attention à l'ordre dans lequel on dessine les graphismes.

4. Il est possible de dessiner des graphismes semi-transparents en utilisant une couleur qui possède une transparence, par exemple avec la notation `rgba()`. La valeur `a` définit celle du canal alpha, autrement dit l'opacité de la couleur&nbsp;: plus la valeur sera faible et plus la couleur sera transparente, plus la valeur sera élevée et plus la couleur masquera ce qu'il y a derrière. Ajoutez ce qui suit à votre code&nbsp;:

   ```js
   ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. Dessinez maintenant d'autres rectangles comme bon vous semble&nbsp;!

### Traits et largeurs de ligne

Jusqu'à présent, nous avons vu comment dessiner des rectangles pleins, mais il est possible de dessiner des rectangles avec leur seul contour (donc avec des traits, ou **<i lang="en">strokes</i>** en anglais). Pour définir la couleur d'un trait, on utilise la propriété [`strokeStyle`](/fr/docs/Web/API/CanvasRenderingContext2D/strokeStyle) et pour dessiner un rectangle avec des traits, on utilise la méthode [`strokeRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/strokeRect).

1. Vous pouvez ajouter ce qui suit à l'exemple précédent, là encore à la suite des autres lignes JavaScript&nbsp;:

   ```js
   ctx.strokeStyle = "rgb(255, 255, 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. La largeur par défaut d'un trait mesure 1 pixel. On peut l'ajuster avec la valeur de la propriété [`lineWidth`](/fr/docs/Web/API/CanvasRenderingContext2D/lineWidth) qui est un nombre indiquant le nombre de pixels pour la largeur du trait. Pour en voir l'effet, ajoutez la ligne suivante entre les deux lignes précédentes&nbsp;:

   ```js
   ctx.lineWidth = 5;
   ```

Vous devriez voir que le contour blanc est désormais plus épais&nbsp;! Voici pour cette section. Votre exemple devrait alors ressembler à ceci&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles/index.html", '100%', 250)}}

> **Note :** Le code terminé est disponible sur GitHub avec le répertoire [`2_canvas_rectangles`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles).

### Dessiner des chemins

Si vous souhaitez dessiner des choses plus complexes qu'un rectangle, vous devrez dessiner un chemin. Un chemin se construit en fait avec du code qui décrit le mouvement exact que doit suivre le pinceau sur le canevas afin de dessiner la forme voulue. L'API fournit des fonctions pour dessiner des lignes droites, des cercles, des courbes de Bézier, etc.

Commençons cette section en repartant de notre modèle vierge (voir [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template) si besoin), et dans lequel nous allons dessiner notre nouvel exemple.

Nous utiliserons certaines méthodes et propriétés pour toutes les sections qui suivent&nbsp;:

- [`beginPath()`](/fr/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Commence à dessiner un chemin à l'endroit où le pinceau est actuellement sur le canevas. Sur un nouveau canevas, le pinceau est initialement situé au coin supérieur gauche (de coordonnées (0, 0)).
- [`moveTo()`](/fr/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Déplace le pinceau à un autre point du canevas, sans enregistrer ou sans tracer de nouvelle ligne. Le pinceau ne fait que sauter à la nouvelle position.
- [`fill()`](/fr/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Dessine une forme pleine en remplissant le chemin tracé jusqu'à présent.
- [`stroke()`](/fr/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Dessine un trait le long du chemin tracé jusqu'à présent.

Il est aussi possible d'utiliser les propriétés/méthodes `lineWidth` et `fillStyle`/`strokeStyle` avec les chemins, comme avec les rectangles.

Une opération de tracé et de dessin d'un chemin classique ressemble à ceci&nbsp;:

```js
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// On dessine le chemin
ctx.fill();
```

#### Dessiner des lignes

Dessinons un triangle équilatéral sur le canevas.

1. Pour commencer, ajoutons la fonction utilitaire suivante en bas de notre code. Elle permet de convertir des degrés en radians. Cela nous sera utile, car l'API JavaScript manipule le plus souvent des angles exprimés en radians tandis que nous avons plutôt l'habitude de travailler avec des angles exprimés en degrés.

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. Ensuite, démarrons le chemin en ajoutant le fragment qui suit après le dernier ajout. Ici, on choisit une couleur pour le triangle et on démarre un chemin avant de déplacer le pinceau jusqu'aux coordonnées (50, 50), sans dessiner quoi que ce soit. C'est à cet emplacement que nous commencerons à dessiner notre triangle.

   ```js
   ctx.fillStyle = "rgb(255, 0, 0)";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. Ajoutons ensuite les lignes suivantes à la fin du script&nbsp;:

   ```js
   ctx.lineTo(150, 50);
   const triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   Voyons en détails ce que ces lignes font&nbsp;:

   Tout d'abord, on dessine une ligne jusqu'au point de coordonnées (150, 50), autrement dit, le chemin progresse de 100 pixels vers la droite sur l'axe horizontal.

   Ensuite, on calcule la hauteur du triangle équilatéral en utilisant une formule de trigonométrie. Le triangle sera dessiné avec la pointe vers le bas et les angles d'un triangle équilatéral mesurent tous 60 degrés. Pour calculer la hauteur, on peut diviser le triangle équilatéral en deux triangles rectangles qui auront chacun trois angles&nbsp;: un à 90 degrés, un deuxième à 60 degrés et le troisième à 30 degrés. Les termes utilisés pour les côtés sont&nbsp;:

   - **L'hypoténuse** pour le côté le plus long
   - Le côté **adjacent** pour celui qui participe à l'angle de 60 degrés et dont on sait que sa longueur mesure 50 pixels (la moitié de la ligne qu'on vient de dessiner)
   - Le côté **opposé** qui correspond à la hauteur du triangle qu'on veut calculer.

   ![](trigonometry.png)

   Une formule trigonométrique de base indique que la longueur du côté adjacent multipliée par la tangente de l'angle est égale à la longueur du côté opposé, d'où `50 * Math.tan(degToRad(60))`. On utilise notre fonction utilitaire `degToRad()` afin de convertir 60 degrés en radians, car [`Math.tan()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/tan) utilise un argument exprimé en radians.

4. La hauteur étant calculée, on dessine une autre ligne jusqu'au point de coordonnées `(100, 50 + triHeight)`. La coordonnée horizontale est simple&nbsp;: elle doit être à mi-chemin entre les deux valeurs d'abscisses précédemment utilisées. La coordonnée verticale doit être 50 plus la hauteur du triangle, car on sait que le haut du triangle est situé à 50 pixels du haut du canevas.
5. La ligne suivante est dessinée afin de revenir au point de départ du triangle.
6. Pour finir, on exécute `ctx.fill()` afin de terminer le chemin et de remplir la forme.

#### Dessiner des cercles

Dessinons maintenant un cercle dans le canevas. Pour cela, on utilisera la méthode [`arc()`](/fr/docs/Web/API/CanvasRenderingContext2D/arc) qui dessine une partie d'un cercle ou un cercle complet à un point indiqué.

1. Ajoutons un arc à notre canevas en rajoutant ce qui suit à la fin de votre code&nbsp;:

   ```js
   ctx.fillStyle = "rgb(0, 0, 255)";
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` prend 6 paramètres. Les deux premiers indiquent les coordonnées horizontale et verticale du centre de l'arc. Le troisième définit le rayon du cercle et le quatrième et le cinquième correspondent aux angles de début et de fin pour l'arc (utiliser 0 et 360 degrés permettra de dessiner un cercle entier), et le sixième paramètre définit si le cercle doit être dessiné selon le sens anti-horaire ou horaire (`false` correspond au sens horaire, c'est-à-dire dans le sens des aiguilles d'une montre).

   > **Note :** Un angle de 0 degré représente ici une ligne horizontale orientée vers la droite.

2. Essayons d'ajouter un autre arc&nbsp;:

   ```js
   ctx.fillStyle = "yellow";
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   La structure est similaire ici, avec toutefois deux différences&nbsp;:

   - Le dernier paramètre `arc()` vaut `true`, ce qui signifie que l'angle est dessiné dans le sens inverse des aiguilles d'une montre, donc, même si l'angle commence à -45 degrés et finit à 45 degrés, on dessine un arc qui couvre les 270 degrés en dehors de ces deux valeurs. Si vous changez le paramètre de `true` à `false` puis réexécutez le code, vous verrez alors une portion de 90 degrés être dessinée.
   - Avant d'appeler `fill()`, on dessine une ligne jusqu'au centre du cercle. Cela permet d'obtenir une forme ressemblant à un Pac-Man. Si vous retirez l'instruction pour cette ligne (essayez&nbsp;!), vous obtiendrez seulement le cercle qui a été tronqué sur la droite entre le point de départ de l'angle et le point d'arrivée. Cela permet de voir que si on remplit un chemin incomplet (c'est-à-dire un chemin pour lesquels les points qui le composent ne se rejoignent pas), le navigateur remplira une ligne droite entre le point de départ et le point d'arrivée puis remplira la forme ainsi créée.

Et voilà pour cette section. Votre exemple final devrait ressembler à ceci&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths/index.html", '100%', 200)}}

> **Note :** Le code finalisé est disponible sur GitHub dans le répertoire [`3_canvas_paths`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths).

> **Note :** Pour en apprendre plus à propos des fonctionnalités de dessin de chemin avancées, comme les courbes de Bézier, vous pouvez lire notre tutoriel [Dessiner des formes sur un canevas](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes).

### Texte

Le canevas dispose également de fonctionnalités pour dessiner du texte. Voyons celles-ci rapidement. Pour commencer, repartons de notre modèle vierge (voir [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) pour y dessiner ce nouvel exemple.

On peut dessiner du texte à l'aide de deux méthodes&nbsp;:

- [`fillText()`](/fr/docs/Web/API/CanvasRenderingContext2D/fillText) qui permet de dessiner du texte avec des lettres pleines
- [`strokeText()`](/fr/docs/Web/API/CanvasRenderingContext2D/strokeText) qui permet de dessiner du texte où les lettres forment uniquement le contour.

Ces deux méthodes prennent trois paramètres pour une utilisation simple&nbsp;: le texte à dessiner et les coordonnées (horizontale et verticale) du point de départ où commencer à dessiner le texte. Ce point de départ est le coin **inférieur gauche** de la **boîte du texte** (il s'agit de la boîte qui entoure le texte qui est dessiné). Attention, cela peut être source de confusion avec d'autres opérations de dessin qui commencent dans le coin supérieur gauche.

Certaines propriétés permettent de contrôler certains aspects du rendu du texte comme [`font`](/fr/docs/Web/API/CanvasRenderingContext2D/font), qui permet d'indiquer la fonte, la taille, etc. La valeur de cette propriété utilise la même syntaxe que celle de la propriété CSS [`font`](/fr/docs/Web/CSS/font).

Ajoutez le bloc suivant à la fin de votre script JavaScript&nbsp;:

```js
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);
```

Nous avons dessiné ici deux lignes de texte, la première avec un contour et la deuxième avec le texte plein. Le résultat devrait ressembler à ceci&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text/index.html", '100%', 180)}}

> **Note :** Le code terminé est disponible sur GitHub dans le répertoire [`4_canvas_text`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text).

Manipulez cet exemple et voyez ce que vous pouvez obtenir comme résultat. Vous pouvez trouver plus d'informations sur les options disponibles pour le dessin du texte sur un canevas dans [le tutoriel sur le dessin du texte](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Dessiner des images sur un canevas

Il est possible d'afficher des images externes sur le canevas. Il peut s'agir d'images classiques, d'images tirées de vidéos ou du contenu d'autres canevas. Pour le moment, voyons comment utiliser des images simples sur notre canevas.

1. Comme avant, repartez du modèle vierge construit au début (voir le répertoire [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template)) si besoin. Nous allons l'utiliser pour dessiner notre nouvel exemple.

   Les images sont dessinées sur le canevas grâce à la méthode [`drawImage()`](/fr/docs/Web/API/CanvasRenderingContext2D/drawImage). L'utilisation la plus simple de cette méthode requiert trois paramètres&nbsp;: une référence à l'image qu'on souhaite afficher, puis les coordonnées horizontale et verticale du coin supérieur gauche de l'image.

2. Commençons par obtenir une source d'image à embarquer dans le canevas. Ajoutez les lignes qui suivent à la fin de votre JavaScript&nbsp;:

   ```js
   const image = new Image();
   image.src = "firefox.png";
   ```

   Ici, on crée un nouvel objet [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement) grâce au constructeur [`Image()`](/fr/docs/Web/API/HTMLImageElement/Image). L'objet qui est renvoyé a le même type que celui obtenu lorsqu'on récupère une référence à un élément [`<img>`](/fr/docs/Web/HTML/Element/img) avec les fonctions du DOM. On définit son attribut [`src`](/fr/docs/Web/HTML/Element/img#attr-src) afin qu'il pointe vers l'image du logo de Firefox. C'est à cet instant que le navigateur commence à charger l'image.

3. On peut alors essayer d'intégrer l'image avec la méthode `drawImage()`, mais il faut d'abord s'assurer que le fichier de l'image a bien été chargé, sinon le dessin échouera. Pour cela, on peut utiliser l'évènement `load` qui est uniquement déclenché après que le chargement de l'image est terminé. Ajoutez le bloc qui suit après les instructions précédentes&nbsp;:

   ```js
   image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
   ```

   Si vous chargez l'exemple dans votre navigateur, vous devriez désormais voir l'image apparaître dans le canevas.

4. Et ce n'est pas tout&nbsp;! Comment faire pour n'afficher qu'une partie de l'image ou pour la redimensionner&nbsp;? Les deux sont possibles en utilisant un appel plus complexe à `drawImage()`. Modifiez la ligne avec `ctx.drawImage()` par celle-ci&nbsp;:

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - Le premier paramètre est toujours la référence à l'image (comme avant).
   - Les deuxième et troisième paramètres définissent les coordonnées du coin supérieur gauche de la zone à découper de l'image, relativement au coin supérieur gauche de l'image. Tout ce qui est situé à gauche du deuxième paramètre ou au-dessus du troisième paramètre dans l'image ne sera pas dessiné.
   - Les quatrième et cinquième paramètres définissent la largeur et la hauteur de la zone à rogner de l'image.
   - Les sixième et septième paramètres définissent les coordonnées où placer le coin supérieur gauche de l'image dans le canevas, relativement au coin supérieur gauche de ce dernier.
   - Les huitième et neuvième paramètres définissent la largeur et la hauteur selon lesquelles dessiner l'image rognée. Ici, nous avons utilisé les mêmes dimensions que la portion rognée, mais on pourrait utiliser des valeurs différentes (et alors avoir une image aux proportions déformées).

Le résultat final de cet exemple devrait ressembler à&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images/index.html", '100%', 260)}}

> **Note :** Vous pouvez récupérer le code finalisé de cet exemple sur GitHub avec le répertoire [`5_canvas_images`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images).

## Boucles et animations

Jusqu'à présent, nous avons vu des utilisations basiques du canevas 2D, mais ce n'est rien sans utiliser les mises à jour ou les animations. Après tout, le canevas permet de scripter des actions sur des images&nbsp;! Quitte à ne rien changer, autant utiliser des images statiques en HTML et s'épargner le travail vu avant.

### Créer une boucle

L'utilisation des boucles consiste à exécuter des commandes sur le canevas au sein d'une boucle [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for) (ou d'un autre type de boucle), comme on peut le faire par ailleurs en JavaScript.

Construisons un exemple simple pour illustrer ce concept.

1. Reprenez une copie de notre modèle vierge (voir le répertoire [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template) si besoin) puis ouvrez-le dans l'éditeur de code.
2. Ajoutez les lignes suivantes à la suite du code JavaScript. Ce fragment de code contient une nouvelle méthode&nbsp;: [`translate()`](/fr/docs/Web/API/CanvasRenderingContext2D/translate), qui déplace l'origine du repère du canevas&nbsp;:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   Avec cette instruction, l'origine (de coordonnées (0, 0)) est déplacée au centre du canevas, plutôt que d'être située au coin supérieur gauche. Cela peut être utile dans de nombreuses situations, dont celle-là où on veut dessiner quelque chose à partir du centre du canevas.

3. Ajoutez ensuite le code suivant après le code JavaScript existant&nbsp;:

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }

   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   let length = 250;
   let moveOffset = 20;

   for (let i = 0; i < length; i++) {}
   ```

   On implémente ici la même fonction utilitaire `degToRad()` que nous avions vu dans l'exemple avec le triangle. On ajoute une fonction `rand()` qui renvoie un nombre aléatoire entre deux bornes inférieure et supérieure. Nous verrons par la suite comment utiliser les variables `length` et `moveOffset`. Enfin, nous avons placé une boucle `for` vide.

4. L'idée principale consiste à dessiner quelque chose sur le canevas au sein de la boucle `for` et d'itérer chaque fois qu'on peut créer quelque chose d'intéressant. Ajoutez le code qui suit à l'intérieur de la boucle `for`&nbsp;:

   ```js
   ctx.fillStyle = `rgba(${255 - length},0,${255 - length},0.9)`;
   ctx.beginPath();
   ctx.moveTo(moveOffset, moveOffset);
   ctx.lineTo(moveOffset + length, moveOffset);
   const triHeight = (length / 2) * Math.tan(degToRad(60));
   ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
   ctx.lineTo(moveOffset, moveOffset);
   ctx.fill();

   length--;
   moveOffset += 0.7;
   ctx.rotate(degToRad(5));
   ```

   À chaque itération&nbsp;:

   - On définit `fillStyle` avec une teinte de violet légèrement transparent, qui change selon la valeur de `length`. Vous le verrez ensuite, la longueur portée par la variable `length` diminue à chaque itération. L'effet ainsi obtenu est que la couleur devient de plus en plus vive à chaque itération.
   - On commence un chemin.
   - On déplace le pinceau aux coordonnées `(moveOffset, moveOffset)`. La variable `moveOffset` définit jusqu'où on veut se déplacer à chaque dessin.
   - On dessine une ligne jusqu'aux coordonnées `(moveOffset+length, moveOffset)`. On obtient donc une ligne de longueur `length` parallèle à l'axe horizontal.
   - On calcule une hauteur pour le triangle, comme dans l'exemple précédent.
   - On dessine une ligne vers la pointe inférieure du triangle puis une autre qui revient au point de départ du triangle.
   - On appelle la méthode `fill()` afin de remplir le triangle.
   - On met à jour les variables qui décrivent la séquence de triangles afin de pouvoir dessiner le prochain. On décrémente la valeur de la variable `length` de 1, afin que les triangles soient de plus en plus petits et on augmente légèrement `moveOffset` afin que chaque triangle soit dessiné un peu plus loin. Enfin, on utilise une nouvelle fonction [`rotate()`](/fr/docs/Web/API/CanvasRenderingContext2D/rotate) qui permet de faire tourner l'ensemble du canevas&nbsp;! On applique une rotation de 5 degrés avant de dessiner le prochain triangle.

Et voilà&nbsp;! L'exemple terminé devrait ressembler à ceci&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop/index.html", '100%', 550)}}

Nous vous encourageons ici à manipuler cet exemple et à l'adapter comme bon vous semble&nbsp;! Vous pouvez par exemple&nbsp;:

- Dessiner des rectangles ou des arcs voire embarquer des images plutôt que de dessiner des triangles,
- Modifier les valeurs des variables `length` et `moveOffset`.
- Utiliser des nombres aléatoires en exploitant la fonction `rand()` que nous avons incluse mais pas utilisée.

> **Note :** Le code de l'exemple terminé est disponible sur GitHub avec le répertoire [`6_canvas_for_loop`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop).

### Animations

L'exemple de la boucle précédente était intéressante, mais ce n'est pas une boucle continue qui permet de dessiner en _live_ (comme pour un jeu vidéo ou un outil de visualisation en temps réel). Si on prend le canevas comme un film, on voudrait afficher une mise à jour à chaque <i lang="en">frame</i>, idéalement en affichant 60 images par secondes afin que le mouvement apparaisse fluide pour l'œil humain.

Il existe plusieurs fonctions JavaScript qui permettent d'exécuter des fonctions de façon répétée, plusieurs fois par seconde. La plus adaptée ici est [`window.requestAnimationFrame()`](/fr/docs/Web/API/window/requestAnimationFrame). Cette fonction prend comme seul paramètre le nom de la fonction qu'on veut exécuter à chaque <i lang="en">frame</i>. La prochaine fois que le navigateur sera prêt à mettre à jour le contenu de l'écran, la fonction sera appelée. Si la fonction dessine une mise à jour d'une animation, on pourra appeler `requestAnimationFrame()` à nouveau, juste avant la fin de la fonction afin que la boucle de l'animation continue. La boucle se termine lorsqu'on arrête d'appeler `requestAnimationFrame()` ou si la méthode [`window.cancelAnimationFrame()`](/fr/docs/Web/API/window/cancelAnimationFrame) est appelée après `requestAnimationFrame()` et avant le rendu de la <i lang="en">frame</i>.

> **Note :** C'est une bonne pratique que d'appeler `cancelAnimationFrame()` à partir du code principal lorsque l'animation est terminée, pour s'assurer qu'aucune mise à jour n'est en attente.

C'est le navigateur qui gèrera les détails complexes comme s'assurer que l'animation tourne à vitesse constante et ne pas gaspiller des ressources pour animer quelque chose qui n'est pas visible à l'écran.

Pour voir comment ça fonctionne, reprenons l'exemple des balles rebondissantes ([le voir en direct](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), et [voir le code source correspondant](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)). Le code de la boucle qui s'occupe des déplacements ressemble à&nbsp;:

```js
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
```

On exécute la fonction `loop()` à la fin du code pour démarrer le cycle et dessiner la première image. La fonction `loop()` appelle à la fin `requestAnimationFrame(loop)` afin d'exécuter la prochaine <i lang="en">frame</i> et ainsi de suite.

On notera qu'à chaque <i lang="en">frame</i>, on efface tout le canevas avec `fillRect()` et on redessine tout dessus. Pour chaque balle qui est dessinée, on met à jour sa position et on vérifie si elle entre en collision avec d'autres balles. Une fois qu'on a dessiné quelque chose sur le canevas, on ne peut pas manipuler les éléments individuels de ce canevas comme on pourrait le faire avec les éléments du DOM. Aussi, on ne peut pas déplacer chaque balle individuellement sur le canevas, car une fois qu'elle est dessinée, elle fait partie du canevas et ce n'est plus un élément ou un objet accessible individuellement. Il faut effacer et redessiner, que ce soit en effaçant toute l'image et en redessinant tout, ou en utilisant du code pour identifier quelle partie exactement doit être effacée pour n'effacer que le minimum et redessiner le minimum sur le canevas.

L'optimisation des animations graphiques constitue un pan entier de la programmation. Il existe de nombreuses techniques astucieuses pour ceci. Toutefois, elles sont hors de portée pour cet exemple&nbsp;!

En général, exécuter une animation sur un canevas consistera à suivre ces étapes&nbsp;:

1. On efface le contenu du canevas (par exemple avec [`fillRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/fillRect) ou [`clearRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/clearRect)).
2. On enregistre l'état (si nécessaire) à l'aide de [`save()`](/fr/docs/Web/API/CanvasRenderingContext2D/save). Cela permet d'enregistrer les paramètres enregistrés sur le canevas avant de continuer et peut être utile pour des applications plus avancées.
3. On dessine l'animation.
4. On réinitialise éventuellement les paramètres enregistrés à l'étape 2, en utilisant [`restore()`](/fr/docs/Web/API/CanvasRenderingContext2D/restore)
5. On appelle `requestAnimationFrame()` afin de planifier le dessin de la prochaine <i lang="en">frame</i>.

> **Note :** Nous ne verrons pas les fonctions `save()` et `restore()` ici, mais elles sont expliquées dans [notre tutoriel sur les transformations](/fr/docs/Web/API/Canvas_API/Tutorial/Transformations) (et ceux qui suivent).

### Une animation simple d'un personnage

Créons maintenant notre propre animation en recréant un personnage d'un ancien jeu vidéo qui avancera le long de l'écran.

1. Repartez du modèle initial vierge (vous pouvez utiliser le répertoire [`1_canvas_template`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template) si besoin) et ouvrez-le dans votre éditeur.
2. À la suite du JavaScript, ajoutez la ligne suivante pour que l'origine soit située au centre de l'écran&nbsp;:

   ```js
   ctx.translate(width / 2, height / 2);
   ```

3. Créez maintenant un nouvel objet [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement) et faites pointer l'attribut [`src`](/fr/docs/Web/HTML/Element/img#attr-src) vers l'image qu'on souhaite afficher. Ajoutez ensuite un gestionnaire d'évènement avec la propriété `onload` pour déclencher l'exécution de la fonction `draw()` lorsque l'image est chargée&nbsp;:

   ```js
   const image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

4. Ajoutez ensuite quelques variables qui serviront à mémoriser la position de l'image dessinée à l'écran et le nombre d'images de personnage qu'on veut afficher.

   ```js
   let sprite = 0;
   let posX = 0;
   ```

   Détaillons l'image qui contient les personnages (<i lang="en">spritesheet</i>). Elle ressemble à ceci&nbsp;:

   ![](walk-right.png)

   Cette image contient six exemplaires du personnage (des <i lang="en">sprites</i>) qui sont les six images formant la séquence d'animation de marche (chacune mesurant 102 pixels de large sur 148 pixels de haut). Pour afficher chaque dessin séparément, il faut utiliser `drawImage()` en rognant l'image totale afin d'en obtenir une seule portion (comme nous l'avons vu dans l'exemple plus tôt avec le logo de Firefox). La coordonnée horizontale à laquelle effectuer la découpe devra être un multiple de 102 et la coordonnée verticale de la découpe sera toujours 0. La taille de chaque fragment découpé sera ainsi toujours 102 pixels par 148 pixels.

5. Ajoutez ensuite une fonction `draw()` vide à la fin du code, qu'on remplira ensuite&nbsp;:

   ```js
   function draw() {}
   ```

6. Le reste du code de cette section sera placé dans le corps de cette fonction `draw()`. Pour commencer, ajoutez la ligne suivante, qui efface le canevas afin de pouvoir dessiner la <i lang="en">frame</i> suivante. On note qu'il faut indiquer que le coin supérieur gauche du rectangle est situé aux coordnnées `-(width/2), -(height/2)`, car on a décalé l'origine au point de coordonnées `width/2, height/2` avant.

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

7. Ensuite, on dessine l'image avec `drawImage()` en utilisant 9 paramètres. Pour cela, ajoutez la ligne qui suit&nbsp;:

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   Comme vous pouvez le voir&nbsp;:

   - On indique la variable `image` comme image à embarquer.
   - Les deuxième et troisième paramètres indiquent les coordonnées du coin supérieur gauche de la zone à découper sur l'image source avec la valeur horizontale qui vaut `sprite` multipliée par 102 (où `sprite` est un numéro d'image entre 0 et 5) et où la coordonnée verticale vaut toujours 0.
   - Les quatrième et cinquième paramètre indiquent la taille de la portion à découper, ici 102 pixels par 148 pixels.
   - Les sixième et septième paramètres indiquent le coin supérieur gauche de la boîte dans laquelle dessiner sur le canevas. La position horizontale vaut `0 + posX`, ce qui signifie qu'on peut ajuster la position du dessin en modifiant la valeur de `posX`.
   - Les huitième et neuvième paramètres définissent la taille de l'image sur le canevas. Ici, on souhaite conserver les proportions initiales et on utilise donc 102 comme largeur et 148 comme hauteur.

8. Nous allons maintenant modifier la valeur de la variable `sprite` à chaque itération, ou plutôt, après certaines itérations. Ajoutez le bloc qui suit dans le corps de la fonction `draw()`&nbsp;:

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   On enveloppe le bloc dans une instruction conditionnelle `if (posX % 13 === 0) { … }`. On utilise ici [l'opérateur de reste (`%`)](/fr/docs/Web/JavaScript/Reference/Operators/Remainder) qui vérifie si la valeur de `posX` peut être divisée par 13 sans reste. Si c'est le cas, on passe au prochain <i lang="en">sprite</i> en incrémentant la valeur de `sprite` (et en revenant à 0 lorsqu'on a fini d'utiliser le cinquième). En pratique, cela revient à mettre à jour le <i lang="en">sprite</i> toutes les 13 itérations, soit environ 5 image par secondes (`requestAnimationFrame()` déclenchant l'animation, si possible, à 60 images par seconde). Ici, on choisit délibérément de diminuer la fréquence d'image, car on a seulement 6 <i lang="en">sprites</i> à manipuler. Si on affichait chacun pour 1/60e de seconde, notre personnage irait beaucoup trop vite&nbsp;!

   Dans le bloc interne, on utilise une instruction [`if…else`](/fr/docs/Web/JavaScript/Reference/Statements/if…else) afin de vérifier si la valeur de `sprite` est à 5 (c'est dans ce cas le dernier, car ils sont numérotés de 0 à 5). Si on montre déjà la dernière image de notre série, on réinitialise `sprite` à 0, sinon, on l'incrémente de 1.

9. Ensuite, il nous faut modifier la valeur de `posX` pour chaque itération. Ajoutez le code qui suit après le reste.

   ```js
   if (posX > width / 2) {
     let newStartPos = -(width / 2 + 102);
     posX = Math.ceil(newStartPos);
     console.log(posX);
   } else {
     posX += 2;
   }
   ```

   On utilise une autre instruction `if…else` pour tester si `posX` est devenue supérieure à `width/2`, signifiant alors que notre personnage a atteint le bord droit de l'écran. Dans ce cas, on calcule une position qui replace le personnage au bord gauche de l'écran.

   Si le personnage n'a pas dépassé le bord droit de l'écran, on incrémente `posX` de 2, ce qui a pour effet de le déplacer légèrement à droite pour la prochaine itération.

10. Enfin, on lance la boucle d'animation en appelant [`requestAnimationFrame()`](/fr/docs/Web/API/window/requestAnimationFrame) à la fin de la fonction `draw()`&nbsp;:

    ```js
    window.requestAnimationFrame(draw);
    ```

Et voilà&nbsp;! L'exemple terminé ressemble à ceci&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation/index.html", '100%', 260)}}

> **Note :** Le code de l'exemple terminé est disponible sur GitHub avec le répertoire [`7_canvas_walking_animation`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation).

### Une application de dessin simple

Comme dernier exemple, nous voudrions vous montrer une application de dessin très simple, pour illustrer comment une boucle d'animation peut être combinée des actions de l'utilisatrice ou de l'utilisateur (par exemple le mouvement de la souris). Nous ne verrons pas chacune des étapes pour construire l'ensemble mais allons simplement explorer les parties les plus intéressantes du code source.

Vous pouvez trouver cet exemple sur GitHub dans le répertoire [`8_canvas_drawing_app`](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app), et manipuler le résultat ici&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app/index.html", '100%', 600)}}

Voyons les parties les plus intéressantes. Pour commencer, on suit les coordonnées horizontale et verticale de la souris, ainsi que le clic enfoncé avec trois variables&nbsp;: `curX`, `curY`, et `pressed`. Lorsque la souris se déplace, on déclenche une fonction qui est définie sur le gestionnaire d'évènement `onmousemove`, qui récupère les valeurs courantes pour les coordonnées. On utilise également les gestionnaires d'évènements `onmousedown` et `onmouseup` afin de modifier la valeur de `pressed` pour la passer `true` lorsque le bouton de la souris est enfoncé et le repasser `false` lorsqu'il est relâché.

```js
let curX;
let curY;
let pressed = false;

// On met à jour les coordonnées du pointeur de la souris
document.addEventListener("mousemove", (e) => {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));
```

Quand le bouton «&nbsp;<i lang="en">Clear canvas</i>&nbsp;» (effacer le canvas) est cliqué, nous exécutons une simple fonction qui efface entièrement le canvas grâce à un rectangle noir, de la même manière que nous avons vu précédemment&nbsp;:

```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
});
```

La boucle de dessin est plutôt simple. Si le bouton de la souris est enclenché (donc que `pressed` vaut `true`), on dessine un cercle avec une couleur de remplissage correspondant à la valeur fournie par le sélecteur de couleurs et un rayon égal à la valeur saisie dans le contrôle d'intervalle. On doit dessiner le cercle 85 pixels plus haut que la mesure car la mesure verticale du curseur est prise par rapport à la zone d'affichage de la page tandis que le dessin se fait par rapport au bord haut du canevas, qui démarre en dessous de la barre d'outils qui mesure 85 pixels. Si on dessinait uniquement avec `curY` comme ordonnée, le cercle apparaîtrait 85 pixels sous la position de la souris.

```js
function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

> **Note :** Les contrôles [`<input>`](/fr/docs/Web/HTML/Element/input) de type `range` et `color` sont plutôt bien pris en charge par les navigateurs sauf pour Internet Explorer avant la version 10 et pour Safari qui ne prend pas en charge `color`. Si votre navigateur ne prend pas en charge ces contrôles, il présentera à la place des champs texte et ce sera à la personne de saisir un nombre ou une couleur valide par elle-même.

## WebGL

Laissons la 2D de côté pour le moment et voyons les canevas en trois dimensions. Pour créer du contenu en 3D sur un canevas, on utilisera l'API [WebGL](/fr/docs/Web/API/WebGL_API), qui est complètement différente de l'API en 2D, même si le résultat de chacune est dessiné sur des éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).

WebGL est basé sur [OpenGL](/fr/docs/Glossary/OpenGL) (<i lang="en">Open Graphics Library</i> qu'on pourrait traduire par bibliothèque de graphismes ouverte), et permet de communiquer directement avec la [carte graphique](/fr/docs/Glossary/GPU) de l'ordinateur. C'est pour cette raison qu'écrire du WebGL brut se rapproche plus des langages de bas niveau comme C++ plutôt que de JavaScript. C'est plutôt complexe mais incroyablement puissant.

### Utiliser une bibliothèque

En raison de cette complexité, la plupart des personnes qui écrivent du code pour des graphismes en 3D utilisent une bibliothèque JavaScript tierce comme [Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas), ou [Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). La plupart fonctionnent de façon similaire et offrent des fonctionnalités pour créer des formes primitives et sur mesure, positionner des caméras et un éclairage, recouvrir des surfaces avec des textures et plus encore. Ces bibliothèques gèrent WebGL pour vous et vous permettent de travailler à un plus haut niveau.

En contrepartie, oui, il faut apprendre à manipuler un nouvel outil (ici un outil tiers), mais cela simplifie la tâche plutôt que d'écrire des instructions WebGL brutes.

### Recréer notre cube

Prenons un exemple simple pour créer quelque chose avec une bibliothèque WebGL. Nous avons choisi [Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), car il s'agit d'une bibliothèque parmi les plus utilisées. Dans ce tutoriel, nous créerons un cube en 3D qui tourne.

1. Pour commencer, faites une copie locale du fichier [`threejs-cube/index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html) dans un nouveau répertoire, ensuite enregistrez une copie de [`metal003.png`](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) dans le même répertoire. Il s'agit de l'image que nous utiliserons comme texture pour la surface du cube.
2. Ensuite, créez un fichier intitulé `script.js`, dans le même répertoire.
3. Ensuite, vous devrez [télécharger la bibliothèque three.min.js](https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js) et l'enregistrer dans le même répertoire.
4. Maintenant que `three.js` est attaché à notre page, on peut écrire du code JavaScript qui l'utilise dans `script.js`. Commençons par créer une nouvelle scène, ajoutez ce qui suit au fichier `script.js`&nbsp;:

   ```js
   const scene = new THREE.Scene();
   ```

   Le constructeur [`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) crée une nouvelle scène qui représente le monde en trois dimensions que nous afficherons.

5. Ensuite, il faut une **caméra** à travers laquelle observer la scène. En imagerie 3D, la caméra représente la position d'un spectateur dans le monde. Pour créer la caméra, ajoutez les lignes suivantes&nbsp;:

   ```js
   const camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   Le constructeur [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) utilise 4 arguments&nbsp;:

   - Le champ de vision (<i lang="en">field of view</i> ou FoV)
     - : La largeur angulaire de la zone devant la caméra et qui devrait être visible. Elle est exprimée en degrés.
   - Les proportions
     - : Il s'agit généralement du rapport de la largeur de la scène sur sa hauteur. Utiliser une autre valeur donnera un aspect déformé (ce qui peut être voulu, mais peu souvent).
   - Le plan proche
     - : La distance en dessous de laquelle ne plus afficher les objets à l'écran. Par exemple quand on approche un doigt de plus en plus proche dans l'espace entre les yeux&nbsp;: au bout d'un moment, on ne peut plus le voir
   - Le plan distant
     - : La distance à partir de laquelle ne plus afficher les objets à l'écran.

   On place aussi la caméra à 5 unités sur l'axe de la profondeur. Comme en CSS, cela permet de placer le point de vision de la scène vers la personne plutôt que sur l'écran qui affiche le canevas.

6. Le troisième ingrédient nécessaire est le moteur de rendu (<i lang="en">renderer</i>). Il s'agit d'un objet qui restitue une scène donnée, telle que vue par une caméra donnée. On en crée une avec le constructeur [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer), mais nous ne l'utiliserons que plus tard. Ajoutez ensuite les lignes suivantes&nbsp;:

   ```js
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   La première ligne crée un nouveau moteur de rendu, la deuxième définit la taille à laquelle le moteur affichera la vue de la caméra et la troisième ajoute l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) créé par le moteur de rendu dans le corps du document ([`<body>`](/fr/docs/Web/HTML/Element/body)). À partir de ce point, tout ce qui est rendu par le moteur sera affiché dans la fenêtre.

7. Ensuite, on veut créer le cube à afficher dans le canevas. Ajoutez le fragment de code qui suit à la suite de votre code JavaScript&nbsp;:

   ```js
   let cube;

   const loader = new THREE.TextureLoader();

   loader.load("metal003.png", (texture) => {
     texture.wrapS = THREE.RepeatWrapping;
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(2, 2);

     const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
     const material = new THREE.MeshLambertMaterial({ map: texture });
     cube = new THREE.Mesh(geometry, material);
     scene.add(cube);

     draw();
   });
   ```

   Il y a plus de lignes à expliciter ici. Allons-y par étape&nbsp;:

   - On commence par créer une variable globale `cube` pour y accéder puis tout endroit du code.
   - Ensuite, on crée un nouvel objet [`TextureLoader`](https://threejs.org/docs/index.html#api/en/loaders/TextureLoader), puis on appelle la méthode `load()` de celui-ci. `load()` prend ici deux paramètres (elle peut en prendre plus)&nbsp;: la texture à charger (il s'agit de notre fichier PNG) et la fonction à exécuter lorsque la texture a été chargée.
   - Dans cette fonction, on utilise les propriétés de l'objet [`texture`](https://threejs.org/docs/index.html#api/en/textures/Texture) afin d'indiquer qu'on veut une répétition en 2 x 2 de l'image autour des faces du cube. Ensuite, on crée un nouvel objet [`BoxGeometry`](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry) et un nouvel objet [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial) qu'on combine dans un objet [`Mesh`](https://threejs.org/docs/index.html#api/en/objects/Mesh) pour créer notre cube. Généralement, un objet a besoin d'une géométrie (sa forme) et d'un matériau (ce à quoi ressemble sa surface).
   - Enfin, on ajoute notre cube à la scène et on appelle la fonction `draw()` pour lancer l'animation.

8. Avant d'implémenter cette fonction `draw()`, nous allons ajouter certaines lumières à la scène afin d'éclairer l'ensemble. Ajoutez le fragment de code suivant au script&nbsp;:

   ```js
   const light = new THREE.AmbientLight("rgb(255,255,255)"); // une lumière blanche douce
   scene.add(light);

   const spotLight = new THREE.SpotLight("rgb(255,255,255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   Un objet [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight) agit comme une source de lumière douce qui éclaire légèrement toute la scène, comme le soleil à l'extérieur. L'objet [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight), en revanche, agit comme un rayon de lumière directionnel, à la façon d'un spot.

9. Enfin, ajoutons la fonction `draw()` à la fin du code&nbsp;:

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   Cette fonction est plus intuitive&nbsp;: à chaque image, on tourne légèrement le cube sur les axes horizontaux et verticaux puis on fait le rendu de la scène telle que vue par la caméra et enfin, on appelle `requestAnimationFrame()` pour planifier le dessin de la prochaine image.

Voyons le résultat obtenu avec cet exemple finalisé&nbsp;:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Vous pouvez [trouver le code de l'exemple finalisé sur GitHub](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube).

> **Note :** Notre dépôt GitHub contient également un autre exemple avec le cube 3D ([Vidéo sur un cube avec Three.js](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube), [voir la démonstration en <i lang="en">live</i>](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). Cet exemple utilise [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) afin de récupérer un flux vidéo depuis la webcam d'un ordinateur afin de la projeter sur le côté d'un cube comme texte&nbsp;!

## Résumé

Avec ce tutoriel, vous devriez avoir une bonne idée des notions de base en programmation graphique avec le canevas et WebGL, ce qu'il est possible de faire avec ces API, et aussi de savoir où aller chercher des informations supplémentaires si besoin. Amusez-vous avec ces technologies&nbsp;!

## Voir aussi

Nous avons ici uniquement abordé les bases du canevas. Il existe bien plus de choses à apprendre sur ce sujet. Les articles qui suivent pourront vous aider à approfondir.

- [Tutoriels sur le canevas](/fr/docs/Web/API/Canvas_API/Tutorial)
  - : Une série de tutoriels détaillés qui explique ce qu'il faut connaître sur le canevas en deux dimensions, avec bien plus de détails que cet article. Une lecture essentielle.
- [Tutoriels WebGL](/fr/docs/Web/API/WebGL_API/Tutorial)
  - : Une série de tutoriels qui enseigne les bases de la programmation en WebGL brut.
- [Construire une démo simple avec Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
  - : Un tutoriel de base pour la bibliothèque Three.js. Il y a également des guides équivalents pour [PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) ou [Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Développement de jeux vidéo](/fr/docs/Games)
  - : La page d'accueil MDN pour le développement de jeux vidéo sur le Web. Cette section contient des tutoriels et techniques très utiles et liés au canevas en 2D ou 3D. Voir l'option Techniques dans le menu à gauche sur cette page.

## Exemples

- [Thérémine violent](https://github.com/mdn/violent-theremin)
  - : Cet exemple utilise l'API Web Audio afin de générer des sons et un canevas afin de visualiser ces sons.
- [Voice change-o-matic](https://github.com/mdn/voice-change-o-matic)
  - : Cet exemple utilise un canevas afin de visualiser les données audio de l'API Web Audio en temps réel.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
