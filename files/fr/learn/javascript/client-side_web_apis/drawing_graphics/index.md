---
title: Dessiner des éléments graphiques
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
tags:
  - API
  - Apprendre
  - Articles
  - Canvas
  - Codage
  - Débutant
  - Graphismes
  - JavaScript
  - WebGL
translation_of: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
original_slug: Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Le navigateur contient des outils de programmation graphique très puissants, du langage [SVG](/fr/docs/Web/SVG) (Scalable Vector Graphics), aux APIs pour dessiner sur les éléments HTML {{htmlelement("canvas")}}, (voir [API Canvas](/fr/docs/Web/HTML/Canvas) et [WebGL](/fr/docs/Web/API/WebGL_API)). Cet article fournit une introduction à canvas et introduit d'autres ressources pour vous permettre d'en apprendre plus.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Bases de JavaScript (voir
        <a href="/fr/docs/Learn/JavaScript/First_steps">premiers pas</a>,
        <a href="/fr/Apprendre/JavaScript/Building_blocks"
          >les briques JavaScript</a
        >,
        <a href="/fr/docs/Learn/JavaScript/Objects">introduction aux objets</a
        >), les
        <a href="/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction"
          >notions de bases des APIs côté client</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Apprendre les bases pour dessiner sur des éléments
        <code>&#x3C;canvas></code> en utilisant JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Éléments graphiques sur le Web

Comme nous en avons parlé dans notre module HTML [Multimédia et Intégration](/fr/Apprendre/HTML/Multimedia_and_embedding), le web était à l'origine uniquement du texte, ce qui était très ennuyeux. Les images ont donc été introduites — d'abord via l'élément {{htmlelement("img")}} et plus tard via les propriétés CSS comme {{cssxref("background-image")}}, et [SVG](/fr/docs/Web/SVG).

Ce n'était cependant toujours pas assez. Tandis qu'il était possible d'utiliser [CSS](/fr/Apprendre/CSS) et [JavaScript](/fr/Apprendre/JavaScript) pour animer (ou manipuler) les images vectorielles SVG — puisqu'elles sont définies par le balisage — il n'y avait aucun moyen de faire de même pour les images bitmap, et les outils disponibles étaient plutôt limités. Le Web n'avait toujours pas de moyen efficace de créer des animations de jeux, des scènes 3D, et autres dispositions couramment traitées par les langages de bas niveau tels que C++ ou Java.

La situation a commencé à s'améliorer quand les navigateurs ont commencé à prendre en charge l'élément {{htmlelement("canvas")}} et l' [API Canvas](/fr/docs/Web/HTML/Canvas) associée — Apple l'a inventée vers 2004, et les autres navigateurs l'ont l'implémentée dans les années qui ont suivi. Comme vous le verrez dans cet article, canvas fournit de nombreux outils utiles à la création d'animation 2D, jeux, visualisations de données, et autres types d'application, particulièrement quand il est combiné à d'autres APIs que la plateforme web fournit.

L'exemple ci-dessous montre une simple animation de balles qui rebondissent en canvas 2D, que nous avons déjà vue dans notre module [La construction d'objet en pratique](/fr/docs/Learn/JavaScript/Objects/la_construction_d_objet_en_pratique):

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

Autour de 2006-2007, Mozilla a commencé à travailler sur une implémentation expérimentale de canvas 3D. C'est devenu [WebGL](/fr/Apprendre/WebGL), lequel a gagné en popularité parmi les fournisseurs de navigateur, et a été standardisé autour de 2009-2010. WebGL permet de créer de véritables graphiques 3D dans le navigateur web; l'exemple ci-dessous montre un simple cube WebGL qui tourne:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Cet article se concentrera principalement sur les canvas 2D, car le code WebGL brut est très complexe. Nous montrerons cependant comment utiliser une bibliothèque WebGL pour créer une scène 3D plus facilement, et vous pourrez  par la suite suivre le tutoriel [WebGL](/fr/Apprendre/WebGL), qui couvre le code WebGL brut.

> **Note :** Canvas est très bien pris en charge parmi les différents navigateurs, à l'exception de IE 8 (et inférieur) pour les canvas 2D, et IE 11 (et inférieur) pour WebGL.

## Apprentissage actif: Débuter avec un \<canvas>

Si vous voulez créer une scène 2D ou 3D sur une page web, vous devez commencer avec un élément HTML {{htmlelement("canvas")}}. Cet élément est utilisé pour définir la zone de la page où l'image sera dessinée. C'est aussi simple que d'inclure l'élément dans la page:

```html
<canvas width="320" height="240"></canvas>
```

Cela va créer un canvas sur la page d'une taille de 320 pixels par 240.

À l'intérieur des balises du canvas, vous pouvez mettre du contenu alternatif, qui est affiché si le navigateur de l'utilisateur ne prend pas en charge les canvas.

```html
<canvas width="320" height="240">
  <p>Votre navigateur ne prend pas en charge canvas. Boo hoo!</p>
</canvas>
```

Bien sûr, le message ci-dessus est vraiment inutile! Dans un exemple réel, vous voudriez plutôt associer le contenu alternatif au contenu du canvas. Par exemple, si vous voulez afficher un graphique en temps réel des cours boursiers, le contenu alternatif pourrait être une image statique du dernier graphique, avec un texte indiquant quels sont les prix.

### Crée et dimensionner notre canvas

Commençons par créer notre propre canvas, que nous utiliserons pour dessiner nos futures expériences.

1.  Premièrement, copiez localement notre fichier [0_canvas_start.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/0_canvas_start.html), et ouvez-le dans votre éditeur de texte.
2.  Ajoutez le code suivant à l'intérieur, juste après la balise {{htmlelement("body")}} ouvrante:

    ```html
    <canvas class="myCanvas">
      <p>Ajouter un contenu alternatif approprié ici.</p>
    </canvas>
    ```

    Nous avons ajouté un attribut `class` à l'élément `<canvas>` pour que ce soit plus facile à sélectionner dans le cas où nous aurions plusieurs canvas sur la page. Et nous avons supprimé les attributs `width` et `height` pour le moment (vous pouvez les remettre si vous le voulez mais nous les définirons en utilisant JavaScript dans une section plus bas). Les canvas sans hauteur et largeur explicites sont définits par défaut à 300 pixels par 150.

3.  Maintenant, ajoutez les lignes suivantes à l'intérieur de l'élément {{htmlelement("script")}}:

    ```js
    var canvas = document.querySelector('.myCanvas');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    ```

    Ici, nous avons stocké une référence vers le canvas dans la variable `canvas`. Sur la deuxième ligne, nous affectons à la fois une nouvelle variable `width` et la propriété `width` du canvas à {{domxref("Window.innerWidth")}} (ce qui nous donne la largeur de la fenêtre). Sur la troisième ligne, nos affectons à la fois une nouvelle variable `height` et la propriété `height` du canvas à {{domxref("Window.innerHeight")}} (ce qui nous donne la hauteur de la fenêtre). Nous avons donc un canvas qui remplit toute la largeur et hauteur de la fenêtre!

    Vous avez également vu que nous avons chaîné les assignations ensemble avec plusieurs signes égal — ce qui est autorié en JavaScript, et c'est une bonne technique si vous voulez que plusieurs variables aient la même valeur. Nous avons gardé la hauteur et largeur du canvas facilement accessibles dans les variables width/height, ces valeurs seront utiles plus tard (par exemple, si vous voulez dessiner quelque chose exactement à mi-chemin de la largeur du canvas).

4.  Si vous sauvegardez et chargez votre exemple dans le navigateur maintenant, vous ne verrez rien, ce qui est normal, mais vous verrez également des barres de défilement, ce qui est un problème pour nous. Cela se produit parce que l'élément {{htmlelement("body")}} a des {{cssxref("margin")}} qui, ajoutées à la taille du canvas, résulte en un document qui est plus large que la fenêtre. Pour se débarasser des barres de défilement, nous devons supprimer les {{cssxref("margin")}} et aussi définir {{cssxref("overflow")}} à `hidden`. Ajoutez ce qui suit à l'intérieur du {{htmlelement("head")}} du document:

    ```html
    <style>
      body {
        margin: 0;
        overflow: hidden;
      }
    </style>
    ```

    Les barres de défilement ne devraient plus être là.

> **Note :** Vous devrez généralement définir la taille de l'image en utilisant les attributs HTML ou les propriétéss DOM, comme expliqué ci-dessus. Vous pourriez théoriquement utiliser CSS, le problème étant que le dimensionnement le canvas est alors effectué après que le contenu canvas n'ait été calculé, et comme toute autre image (puisque le canvas une fois affiché n'est plus qu'une simple image), elle peut devenir pixelisée/déformée.

### Obtenir le contexte du canvas et configuration finale

Nous devons faire une dernière chose avant de considérer notre template finit. Pour dessiner sur le canvas, nous devons récupérer une référence à la zone de dessin, appelé un _contexte_. Pour ce faire, on utilise la méthode {{domxref("HTMLCanvasElement.getContext()")}}, qui, pour un usage basique ne prend qu'un seul paramètre, spécifiant quel type de contexte nous voulons récupérer.

En l'occurence, nous voulons un canvas 2D, alors ajoutez le JavaScript suivant à la suite des autres instructions à l'intérieur de l'élément `<script>`:

```js
var ctx = canvas.getContext('2d');
```

> **Note :** Vous pouvez choisir d'autres types de contexte comme `webgl` pour WebGL, `webgl2` pour WebGL 2, etc., mais nous n'en aurons pas besoin dans cet article.

Voilà — notre canvas est maintenant préparé et prêt à être dessiné! La variable `ctx` contient désormais un objet {{domxref("CanvasRenderingContext2D")}}, et toutes les opérations de dessin sur le canvas impliqueront de manipuler cet objet.

Faisons une dernière chose avant de passer à autre chose. Nous allons colorier l'arrière-plan du canvas en noir, cela vous donnera un avant-goût de l'API canvas. Ajoutez les lignes suivantes au bas de votre JavaScript:

```js
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
```

Ici nous définissons une couleur de remplissage en utilisant la propriété du canvas {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} (qui prend une [valeur de couleur](/fr/Apprendre/CSS/Introduction_à_CSS/Values_and_units#Couleurs) tout comme les propriétés CSS), puis nous dessinons un rectangle qui recouvre intégralement la surface du canvas avec la méthode {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} (les deux premiers paramètres sont les coordonnées du coin supérieur gauche du rectangle; les deux derniers sont la largeur et la hauteur du rectangle que vous voulez dessiner — on vous avait dit que ces variables `width` et `height` allaient être utiles)!

OK, notre template est prêt et il est temps de passer à autre chose.

## Les bases du canvas 2D

Pour rappel, toutes les opération de dessin sont effectuées en manipulant un objet {{domxref("CanvasRenderingContext2D")}} (dans notre cas, `ctx`).

De nombreuses opérations doivent recevoir des coordonnées en entrée pour savoir où dessiner quelque chose — le coin supérieur gauche du canvas est le point (0, 0), l'axe horizontal (x) va de gauche à droite, et l'axe vertical (y) va de haut en bas.

![](Canvas_default_grid.png)

Dessiner des formes est souvent fait en utilisant la forme rectangle, ou alors en traçant une ligne le long d'un certain chemin puis en remplissant la forme. Nous allons vous montrer ci-dessous comment faire ces deux choses.

### Rectangles simples

Commençons avec quelques rectangles simples.

1.  Tout d'abord, faites une copie de votre template (ou copiez localement le fichier [1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html) si vous n'avez pas suivit les étapes précédentes).
2.  Ensuite, ajoutez les lignes suivantes au bas de votre JavaScript:

    ```js
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(50, 50, 100, 150);
    ```

    Si vous sauvegardez votre code et rafraichissez la page, vous devriez voir qu'un rectangle rouge est apparu sur le canvas. Son coin supérieur gauche est à (50,50) pixels du coin supérieur gauche du canvas (comme définit par les deux premiers paramètres), il a une largeur de 100 pixels et une hauteur de 150 pixels (comme définit par les paramètres 3 et 4).

3.  Ajoutons un autre rectangle dans le mix — un vert cette fois. Ajoutez ce qui suit au bas de votre JavaScript:

    ```js
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(75, 75, 100, 100);
    ```

    Sauvegardez et rafraichissez, et vous verrez un nouveau rectangle. Cela soulève un point important: les opérations graphiques comme dessiner des rectangles, lignes, et autres, sont executées dans l'ordre dans lequel elle apparaissent dans le code. Pensez-y comme peindre un mur, chaque couche de peinture s'ajoute par dessus les anciennes et peuvent même mettre cacher ce qu'il y a en dessous. Vous ne pouvez rien y faire, il faut donc réfléchir soigneusement à l'ordre dans lequel vous allez dessiner les éléments graphiques.

4.  Notez que vous pouvez dessiner des éléments graphiques semi-transparents en spécifiant une couleur semi-transparente, par exemple en utilisant `rgba()`. La valeur `a` définit ce qu'on appelle le "canal alpha", ou la quantité de transparence de la couleur. Plus la valeur de `a` est élevée, plus la couleur est opaque. Ajoutez ce qui suit à votre code:

    ```js
    ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
    ctx.fillRect(25, 100, 175, 50);
    ```

5.  Maintenant essayez de dessiner plus de rectangles par vous-même; amusez-vous!

### Traits et épaisseurs de ligne

Jusqu'à présent nous avons vu comment dessiner des rectangles pleins, mais on peut aussi ne dessiner que les contours (dit **strokes** - traits - en graphic design). Pour définir la couleur que vous voulez pour le contour, utilisez la propriété {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}. Pour dessiner le contour du rectangle, on appelle {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect")}}.

1.  Ajoutez ce qui suit au bas de votre JavaScript:

    ```js
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.strokeRect(25, 25, 175, 200);
    ```

2.  L'épaisseur de trait par défaut est de 1 pixel; vous pouvez ajuster la valeur de la propriété {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}} pour changer ça (prend un nombre spécifiant le nombre de pixels d'épaisseur de trait). Ajoutez la ligne suivante entre les deux lignes précédentes:

    ```js
    ctx.lineWidth = 5;
    ```

    Vous devriez maintenant voir que votre contour blanc est devenu beaucoup plus épais!

C'est tout pour le moment. À ce stade votre exemple devrait ressembler à ça:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles.html", '100%', 250)}}

> **Note :** Le code terminé est disponible sur GitHub, [2_canvas_rectangles.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles.html).

### Dessiner des chemins

Si vous voulez dessiner quelque chose de plus complexe qu'un rectangle, vous allez certainement devoir utiliser un _path_ (chemin). En gros, cela implique de spécifier exactement où déplacer un stylo sur le canvas pour tracer la forme que vous voulez. L'API Canvas inclut des fonctions pour dessiner des lignes droites, des cercles, des courbes Bézier, et plus encore.

Commençons la section en faisant une nouvelle copie de notre template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)), dans lequel nous allons dessiner le nouvel exemple.

Nous allons utiliser quelques méthodes et propriétés communes dans les sections suivantes:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} — commence à dessiner un path au point où le stylo se situe sur le canvas. Sur un nouveau canvas, le stylo commence au point (0, 0).
- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} — déplace le stylo à un point différent sur le canvas, sans tracer de ligne; le stylo "saute" simplement à une nouvelle position.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}} — dessine une forme en remplissant le path définit jusqu'à présent.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} — dessine un trait en suivant le path définit jusqu'à présent.
- Vous pouvez utiliser les fonctionnalités telles que `lineWidth` et `fillStyle`/`strokeStyle` avec les paths aussi bien qu'avec les rectangles.

Typiquement, une manière de dessiner un trait simple ressemblerait à ça:

```js
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 50);
// tracer le trait
ctx.fill();
```

#### Dessiner des lignes

Dessinons un triangle équilatéral sur le canvas.

1.  Tout d'abord, ajoutez la fonction d'aide suivante au bas de votre code. Elle convertit des valeurs en degrés en radians, ce qui est utile car chaque fois que vous devez fournir une valeur d'angle en JavaScript, ce sera presque toujours en radians, tandis que les humains pensent généralement en degrés.

    ```js
    function degToRad(degrees) {
      return degrees * Math.PI / 180;
    };
    ```

2.  Ensuite, commencez votre path en ajoutant ce qui suit au bas de votre JavaScript. Ici, nous définissons une couleur pour notre triangle et déplaçons le stylo au point (50, 50) sans rien tracer. C'est à partir de là que nous allons dessiner notre triangle.

    ```js
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ```

3.  Maintenant ajoutez le bloc de code suivant:

    ```js
    ctx.lineTo(150, 50);
    var triHeight = 50 * Math.tan(degToRad(60));
    ctx.lineTo(100, 50+triHeight);
    ctx.lineTo(50, 50);
    ctx.fill();
    ```

    Parcourons ceci dans l'ordre:

    1.  D'abord nous ajoutons une ligne vers (150, 50) — notre path va maintenant 100 pixels vers la droite le long de l'axe horizontal (x).
    2.  Puis, nous calculons la hauteur de notre triangle équilatéral, en utilisant un peu de trigonométrie simple. Nous dessinons un triangle pointant vers le bas.

        Les angles d'un triangle équilatéral sont tous de 60 degrés. Pour calculer la hauteur, nous pouvons séparer le triangle en deux triangles rectangles par le milieu, qui auront alors des angles de 90, 60 et 30 degrés.

        Pour ce qui est des côtés:

        - Le côté le plus long est appelé l'**hypoténuse**
        - Le côté relié à l'angle de 60 degrés (et qui n'est pas l'hypothénuse) est dit **adjacent** à cet angle — sa longueur est de 50 pixels puisque c'est la moitié de la ligne que nous avons dessiné.
        - Le côté opposé à l'angle de 60 degrés est dit **opposé** à cet angle — c'est la hauteur que nous voulons calculer.



        ![](trigonometry.png)

        Une des formule trigonométrique de base stipule que la longueur du côté adjacent mutiplié par la tangente de l'angle est égale à l'opposé, soit `50 * Math.tan(degToRad(60))`. Nous utilisons notre fonction `degToRad()` pour convertir 60 degrés en radians, puisque {{jsxref("Math.tan()")}} attend une valeur en radians.

    3.  Avec la hauteur calculée, nous ajoutons une nouvelle ligne vers `(100, 50+triHeight)`. La coordonnée X est simple, elle est à mi-chemin de la ligne que nous avons tracé. La valeur de Y d'autre part doit être de 50 plus la hauteur du triangle, puisque le haut du triangle est à 50 pixels du haut du canvas.
    4.  L'instruction qui suit ajoute une ligne vers le point de départ du triangle.
    5.  Pour finir, nous appelons `ctx.fill()` pour finir le path et remplir la forme.

#### Dessiner des cercles

Maintenant, voyons comment dessiner un cercle sur le canvas. Pour ce faire, on utilise la méthode {{domxref("CanvasRenderingContext2D.arc", "arc()")}}, qui dessine tout ou une portion de cercle à un point spécifié.

1.  Ajoutons un arc à notre canvas en ajoutant le code qui suit:

    ```js
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.beginPath();
    ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
    ctx.fill();
    ```

    `arc()` prend six paramètres.

    - Les deux premiers spécifient la position du centre du cercle (X et Y respectivement).
    - Le troisième est le rayon du cercle
    - Le quatrième et le cinquième sont les angles de début et de fin pour dessiner l'arc (donc spécifier 0 et 360 nous donne un cercle fermé)
    - Et le sixième paramètre définit si le cercle doit être dessiné dans le sens des aiguilles d'une montre ou dans le sens inverse (`false` pour le sens horaire).

    > **Note :** 0 degrés est horizontalement vers la droite.

2.  Ajoutons un autre arc:

    ```js
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
    ctx.lineTo(200, 106);
    ctx.fill();
    ```

    Le motif ici est très similaire, a deux différences près:

    - Nous avons mis le dernier paramètre de `arc()` à `true`, ce qui signifie que l'arc est tracé dans le sens inverse des aiguilles d'une montre.  Donc si notre arc commence à -45 degrés et fini à 45 degrés, nous dessinons un arc de 270 degrés. Si vous changez `true` à `false` et ré-exécutez le code, seule une portion de 90 degrés sera dessinée.
    - Avant d'appeler `fill()`, nous ajoutons une ligne vers le centre du cercle. Nous obtenons une découpe de style Pac-Man plutôt sympa. Si vous supprimiez cette ligne (essayez!) et ré-exécutiez le code, vous auriez juste un cercle dont le bout a été coupé — entre le début et la fin de l'arc. Cela illuste un autre point important du canvas: si vous essayez de remplir une forme incomplète (qui n'est pas fermée), le navigateur ajoute une ligne droite entre le début et la fin du path et le remplit.

C'est tout pour le moment; votre exemple final devrait ressembler à ceci:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths.html", '100%', 200)}}

> **Note :** Le code finit est disponible sur GitHub, [3_canvas_paths.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/3_canvas_paths.html).

> **Note :** Pour en savoir plus sur les fonctions de dessin avancées, telles que les courbes Bézier, consultez notre tutoriel [Dessiner des formes avec le canevas](/fr/docs/Tutoriel_canvas/Formes_géométriques).

### Texte

Canvas dispose également de fonctionnalités pour écrire du texte. Nous allons les explorer brièvement. Commencez par créer une nouvelle copie du template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)), dans lequel nous allons dessiner le nouvel exemple.

Le texte peut être avec deux méthodes:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} — dessine un texte rempli.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} — dessine un contour de texte.

Ces deux méthodes prennent trois paramètres: la chaîne de caractères à écrire et les coordonnées X et Y du coin supérieur gauche de la zone de texte (**text box**) — littéralement, la zone entourant le texte que vous écrivez.

Il existe également un certain nombre de proprétés pour contrôler le rendu du texte, comme {{domxref("CanvasRenderingContext2D.font", "font")}}, qui permer de spécifier la police d'écriture, la taille, etc — elle accepte la même syntaxe que la propriété CSS {{cssxref("font")}}.

Essayez d'ajouter le bloc suivant au bas de votre javaScript:

```js
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText('Canvas text', 50, 50);

ctx.fillStyle = 'red';
ctx.font = '48px georgia';
ctx.fillText('Canvas text', 50, 150);
```

Ici nous dessinons deux lignes de texte, une avec le contour et l'autre remplie. L'exemple final devrait ressembler à ça:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text.html", '100%', 180)}}

> **Note :** Le code final est disponible sur GitHub, [4_canvas_text.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/4_canvas_text.html).

Jouez avec et voyez ce que vous pouvez faire! Vous pouvez trouver plus d'information sur les options disponibles pour ajouter du texte sur un canvas dans [Dessin de texte avec canvas](/fr/docs/Dessin_de_texte_avec_canvas).

### Dessiner des images sur le canvas

Il est possible d'afficher des images externes sur le canvas. Ce peut être des images simples, des images à l'intérieur d'une vidéo, ou le contenu d'autres canvas. Pour le moment, nous allons juste nous occuper d'ajouter des images simples sur le canvas.

1.  Comme précédemment, créez une nouvelle copie du template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)), où nous dessinerons l'exemple. Vous allez également devoir sauvegarder une copie de notre image d'exemple — [firefox.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/firefox.png) — dans le même répertoire.

    Les images sont dessinés sur le canvas en utilisant la méthode {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}. Dans sa version la plus simple, elle prend trois paramètres — une référence de l'image que vous voulez afficher et les coordonnées X et Y du coin supérieur gauche de l'image sur le canvas.

2.  Commençons par obtenir une ressource de l'image à inclure dans notre canvas. Ajoutez les lignes suivantes au bas de votre JavaScript:

    ```js
    var image = new Image();
    image.src = 'firefox.png';
    ```

    Ici, nous créons un nouvel objet {{domxref("HTMLImageElement")}} en utilisant le constructeur {{domxref("HTMLImageElement.Image()", "Image()")}}. (L'objet retourné est le même type que celui retourné lorsque vous récupérez une référence vers un élément {{htmlelement("img")}} existant). Nous définissons son attribut  {{htmlattrxref("src", "img")}} à notre image du logo Firefox. À ce stade, le navigateur commence à charger l'image.

3.  Nous pourrions essayer maintenant d'inclure l'image en utilisant `drawImage()`, mais nous devons nous assurer que le fichier image ait été chargé en premier, faute de quoi le code échouera. Nous pouvons y parvenir en utilisant le gestionnaire d'événement `onload`, qui ne sera appelé que lorsque l'image aura fini de charger. Ajoutez le bloc suivant à la suite du précédent:

    ```js
    image.onload = function() {
      ctx.drawImage(image, 50, 50);
    }
    ```

    Si vous chargez votre exemple dans le navigateur maintenant, vous devriez voir l'image inclue dans le canvas.

4.  Mais il y en a plus! Et si nous ne voulions afficher qu'une partie de l'image, ou la redimensionner? Nous pouvons faire ces deux choses avec une version plus complexe de `drawImage()`. Mettez à jour votre ligne `ctx.drawImage()` comme suit:

    ```js
    ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
    ```

    - Le premier paramètre est la référence de l'image, comme précédemment.
    - Les paramètres 2 et 3 définissent les coordonnées à partir d'où découper l'image, relativement au coin supérieur gauche de l'image d'origine. Tout ce qui est à gauche de X (paramètre 2) ou au-dessus de Y (paramètre 3) ne sera pas dessiné.
    - Les paramètres 4 et 5 définissent la largeur et hauteur de la zone que nous voulons découper, à partir du coin supérieur gauche de l'image découpée.
    - Les paramètres 6 et 7 définissent les coordonnées où vous souhaitez placer l'image sur le canvas, relativement au coin supérieur gauche du canvas.
    - Les paramètres 8 et 9 définissent la largeur et la hauteur affichée de l'image découpée. En l'occurence, nous avons spécifié les mêmes dimensions que la découpe, mais vous pouvez la redimensionner (et la déformer) en spécifiant des valeurs différentes.

L'exemple final devrait ressembler à ça:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images.html", '100%', 260)}}

> **Note :** Le code final est disponible sur GitHub, [5_canvas_images.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/5_canvas_images.html).

## Boucles et animations

Jusqu'ici, nous avons couvert quelques utilisations très basiques du canvas 2D, mais vous ne ressentirez la pleine puissance du canvas que si vous le mettez à jour ou l'animez d'une manière ou d'une autre. Après tout, le canvas fournit des images scriptables! Si vous n'avez pas l'intention de changer quelque chose, alors autant utiiliser des images statiques et vous épargner du travail.

### Créer une boucle

Jouer avec des boucles est plutôt amusant — vous pouvez exécuter des commandes de canvas à l'intérieur d'une boucle [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for) (ou tout autre type de boucle) comme n'importe quel autre code JavaScript.

Construisons un exemple simple.

1.  Créez une nouvelle copie du template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) et ouvrez-le dans votre éditeur de texte.
2.  Ajoutez la ligne qui suit au bas de votre JavaScript. Elle contient une nouvelle méthode, {{domxref("CanvasRenderingContext2D.translate", "translate()")}}, qui déplace le point d'origine du canvas:

    ```js
    ctx.translate(width/2, height/2);
    ```

    Cela a pour effet de déplacer l'origine des coordonnées (0, 0) au centre du canvas, plutôt que d'être dans le coin supérieur gauche. C'est très utile dans de nombreuses situations, comme celle-ci, où nous voulons que notre dessin soit dessiné par rapport au centre du canvas.

3.  Maintenant ajoutez le code suivant au bas du Javacript:

    ```js
    function degToRad(degrees) {
      return degrees * Math.PI / 180;
    };

    function rand(min, max) {
      return Math.floor(Math.random() * (max-min+1)) + (min);
    }

    var length = 250;
    var moveOffset = 20;

    for(var i = 0; i < length; i++) {

    }
    ```

    Ici, nous implémentons

    - la même fonction `degToRad()` que nous avons vu dans l'exemple du triangle auparavant,
    - une fonction `rand()`, qui retoune un nombre aléatoire entre une limite inférieure et une limite supérieure,
    - les variables `length` et `moveOffset` (que nous verrons plus loin),
    - et une boucle `for` vide.

4.  L'idée est que nous allons dessiner quelque chose sur le canvas à l'intérieur de la boucle `for`, et itérer dessus pour créer quelque chose d'intéressant. Ajoutez le code suivant à l'intérieur de la boucle `for`:

    ```js
    ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
    ctx.beginPath();
    ctx.moveTo(moveOffset, moveOffset);
    ctx.lineTo(moveOffset+length, moveOffset);
    var triHeight = length/2 * Math.tan(degToRad(60));
    ctx.lineTo(moveOffset+(length/2), moveOffset+triHeight);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.fill();

    length--;
    moveOffset += 0.7;
    ctx.rotate(degToRad(5));
    ```

    Ainsi à chaque itération, on:

    1.  Définit `fillStyle` comme étant une nuance de violet légèrement transparente, et qui change à chaque fois en fonction de la valeur de `length`. Comme vous le verrez plus tard, sa valeur diminue à chaque itération, ce qui a pour effet de rendre la couleur toujours plus claire.
    2.  Ouvre un path.
    3.  Déplace le stylo aux coordonnées de `(moveOffset, moveOffset)`; Cette variable définit jusqu'où nous voulons nous déplacer à chaque fois que nous dessinons.
    4.  Dessine une ligne aux coordonées de `(moveOffset+length, moveOffset)`. Cela dessine une ligne de longueur `length` parallèle à l'axe X.
    5.  Calcule la hauteur du triangle, comme vu auparavant.
    6.  Dessine une ligne vers le coin du bas du triangle.
    7.  Dessine une ligne vers le début du triangle.
    8.  Appelle `fill()` pour remplir le triangle.
    9.  Met à jour les variables qui indiquent comment dessiner le triangle, afin qu'elles soient prêtes pour la prochaine itération:

        - Diminue la valeur de `length` de 1, de sorte que les triangles deviennent de plus en plus petits;
        - Augmente un peu `moveOffset` pour que chaque triangle successif soit légèrement plus éloigné;
        - et utilise une nouvelle fonction, {{domxref("CanvasRenderingContext2D.rotate", "rotate()")}}, qui permet de faire pivoter entièrement le canvas! Nous le faisons pivoter de 5 degrés avant de dessiner le triangle suivant.

C'est tout! L'exemple final devrait ressemble à ça:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop.html", '100%', 550)}}

À ce stade, nous vous encourageons à jouer avec l'exemple et de vous l'approprier! Par exemple:

- Dessinez des rectangles ou des arcs au lieu des triangles, ou même des images externes.
- Jouez avec les valeurs de `length` et `moveOffset`.
- Utilisez des nombres aléatoires — grâce à la fonction `rand()` que nous avons inclue mais que nous n'avons pas utilisée.

> **Note :** Le code terminé est disponible sur GitHub, [6_canvas_for_loop.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop.html).

### Animations

L'exemple de boucle que nous avons construit ci-dessus était amusant, mais en vrai vous avez besoin d'une boucle qui continue constamment d'itérer pour toute application sérieuse de canvas (telles que les jeux et les visualisations en temps réel). Si vous pensez à votre canvas comme étant en quelque sorte un film, vous allez vouloir que l'affichage se mette à jour à chaque image pour afficher la mise à jour avec un taux de rafraichissement idéal de 60 images par seconde, afin que le mouvement soit lisse et agréable pour l'oeil humain.

Il y a quelques fonctions JavaScript qui vous permettrons d'exécuter des fonctions de manière répétée, plusieurs fois par seconde, la meilleure étant ici {{domxref("window.requestAnimationFrame()")}}. Elle prend un paramètre — la fonction que vous voulez exécuter pour chaque image. Dès que le navigateur est prêt à mettre à jour l'écran, votre fonction sera appelée. Si cette fonction dessine la nouvelle mise à jour, puis appelle de nouveau `requestAnimationFrame()` juste avant la fin de la fonction, la boucle d'animation continuera de s'exécuter de manière fluide. La boucle s'arrête lorsque vous vous arrêtez d'appeler `requestAnimationFrame()` ou si vous appelez {{domxref("window.cancelAnimationFrame()")}} après avoir appelé `requestAnimationFrame()` mais avant que votre fonction n'ait été exécutée.

> **Note :** C'est une bonne pratique d'appeler `cancelAnimationFrame()` à partir de votre code principal lorsque vous avez terminé d'utiliser l'animation, pour vous assurer qu'aucune mise à jour n'attend d'être exécutée.

Le navigateur s'occupe des détails complexes tels qu'exécuter l'animation à une vitesse constante, et ne pas gaspiller de ressources en animant des choses qui ne sont pas visibles.

Pour voir comment cela fonctionne, regardons rapidement notre exemple des balles qui rebondissent ([le voir en direct](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html), et voir [le code source](https://github.com/mdn/learning-area/tree/master/javascript/oojs/bouncing-balls)). Le code de la boucle qui garde le tout en mouvement ressemble à ceci:

```js
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while(balls.length < 25) {
    var ball = new Ball();
    balls.push(ball);
  }

  for(i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
```

Nous lançons la fonction `loop()` une fois pour commencer le cycle et dessiner la première image de l'animation. La fonction `loop()` s'occupe ensuite d'appeler `requestAnimationFrame(loop)` pour afficher la prochaine image de l'animation, et ce continuellement.

Notez que sur chaque image, nous effaçons complètement le canvas et redessinons tout. Nous créons de nouvelles balles pour chaque image — au maximum 25 — puis, pour chaque balle, la dessinons, mettons à jour sa position, et vérifions si elle est en collision avec une autre balle. Une fois que vous avez dessiné quelque chose sur un canvas, il n'y a aucun moyen pour manipuler cet élément graphique individuellement comme vous pouvez le faire avec les élément DOM. Vous ne pouvez pas déplacer les balles sur le canvas parce qu'une fois dessinée, une balle n'est plus une balle mais juste des pixels sur un canvas. Au lieu de ça, vous devez effacer et redessiner, soit en effaçant et redessinant absolutement tout le canvas, soit en ayant du code qui sait exactement quelles parties doivent être effacées, et qui efface et redessine uniquement la zone minimale nécessaire.

Optimiser l'animation graphique est une spécialité entière de programmation, avec beaucoup de techniques ingénieuses disponibles. Mais celles-ci sont au-delà de ce dont nous avons besoin pour notre exemple!

En général, le processus pour animer un canvas implique les étapes suivantes:

1.  Effacer le contenu du cavas (par exemple avec {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} ou {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}).
2.  Sauvegarder l'état (si nécessaire) en utilisant {{domxref("CanvasRenderingContext2D.save", "save()")}} — c'est nécessaire lorsque vous voulez enregistrer les paramètres que vous mis à jour sur le canvas avant de continuer, ce qui est utile pour des applications plus avancées.
3.  Dessiner les éléments graphiques que vous animez.
4.  Restaurer les paramètres sauvegardés à l'étape 2 en utilisant {{domxref("CanvasRenderingContext2D.restore", "restore()")}}
5.  Appeler `requestAnimationFrame()` pour planifier le dessin de l'image suivante de l'animation.

> **Note :** Nous ne couvrirons pas `save()` et `restore()` ici, mais elles sont bien expliquées dans notre tutoriel [Transformations](/fr/docs/Tutoriel_canvas/Transformations) (et ceux qui le suivent).

### Une animation simple de personnage

Créons maintenant notre propre animation simple — nous allons faire parcourir l'écran à un personnage d'un certain jeu vidéo rétro plutôt génial.

1.  Faites une nouvelle copie du template ([1_canvas_template.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)) et ouvrez-le dans votre éditeur de texte. Sauvegardez une copie de [walk-right.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/loops_animation/walk-right.png) dans le même répertoire.
2.  Au bas du JavaScript, ajoutez la ligne suivante pour placer une fois de plus l'origine des coordonnées au milieu du canvas:

    ```js
    ctx.translate(width/2, height/2);
    ```

3.  Nous allons maintenant créer un objet {{domxref("HTMLImageElement")}}, définir son attribut {{htmlattrxref("src", "img")}} à l'image que nous voulons charger, et ajouter le gestionnaire d'événement `onload` pour appeler la fonction `draw()` quand l'image sera chargée:

    ```js
    var image = new Image();
    image.src = 'walk-right.png';
    image.onload = draw;
    ```

4.  Ajoutons quelques variables pour garder une trace de la position du sprite à dessiner à l'écran, et le numéro du sprite que nous voulons afficher.

    ```js
    var sprite = 0;
    var posX = 0;
    ```

    L'image de sprites (que nous avons respectueusement emprunté à Mike Thomas dans son article [Create a sprite sheet walk cycle using using CSS animation](http://atomicrobotdesign.com/blog/htmlcss/create-a-sprite-sheet-walk-cycle-using-using-css-animation/ "Permanent Link to Create a sprite sheet walk cycle using using CSS animation") — créer un cycle de marche avec une feuille de sprites en utilisant les animations CSS) ressemble à ça:

    ![](walk-right.png)

    Elle contient six sprites qui constituent une séquence de marche — chacun a 102 pixels de large et 148 pixels de hauteur. Pour afficher chaque sprite proprement, nous allons devoir utiliser `drawImage()` pour découper un seul sprite de l'image et n'afficher que cette partie, comme nous l'avons fait précédemment avec le logo Firefox. La coordonnée X de la découpe devra être un multiple de 102 et la coordonnée Y sera toujours 0. La taille de la découpe sera toujours de 102 pixels par 148.

5.  Insérons maintenant une fonction `draw()` vide au bas du code, prête à être remplie de code:

    ```js
    function draw() {

    };
    ```

6.  Le reste du code dans cette section va dans `draw()`. Tout d'abord, ajoutez la ligne suivante, qui efface le canvas pour préparer le dessin de chaque image. Notez que nous devons spécifier le coin supérieur gauche du rectangle comme étant `-(width/2), -(height/2)` puisque nous avons définit l'origine du canvas à `width/2, height/2` plus tôt.

    ```js
    ctx.fillRect(-(width/2), -(height/2), width, height);
    ```

7.  Ensuite, nous allons dessinons notre image en utilisant `drawImage()` — la version à 9 paramètres. Ajoutez ce qui suit:

    ```js
    ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
    ```

    Comme vous pouvez le voir:

    - Nous spécifions `image` comme étant l'image à inclure.
    - Les paramètres 2 et 3 spécifient le coin supérieur gauche de la portion de l'image à découper: la valeur X vaut `sprite` multiplié par 102 (où `sprite` est le numéro du sprite, entre 0 et 5) et la valeur Y vaut toujours 0.
    - Les paramètres 4 et 5 spécifient la taille de la découpe — 102 pixels par 148.
    - Les paramètres 6 et 7 spécifient le coin supérieur gauche de la découpe sur le canvas — la position de X est `0+posX`, ce qui signifie que nous pouvons modifier la position du dessin en modifiant la valeur de `posX`.
    - Les paramètres 8 et 9 spécifient la taille de l'image sur le canvas. Nous voulons garder sa taille d'origine, on définit donc 102 pour largeur et 148 pour hauteur.

8.  Maintenant, nous allons changer la valeur de `sprite` après chaque dessin — après certains d'entre eux du moins. Ajoutez le bloc de code suivant au bas de la fonction `draw()`:

    ```js
      if (posX % 13 === 0) {
        if (sprite === 5) {
          sprite = 0;
        } else {
          sprite++;
        }
      }
    ```

    Nous enveloppons le bloc entier de `if (posX % 13 === 0) { ... }`. On utilise l'opérateur modulo (`%`) (aussi connu sous le nom d'[opérateur reste](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Reste_()>)) pour vérifier si la valeur de `posX` peut être exactement divisée par 13, sans reste. Si c'est le cas, on passe au sprite suivant en incrémentant `sprite` (en retournant à 0 après le sprite #5). Cela implique que nous ne mettons à jour le sprite que toutes les 13èmes images, ou à peu près 5 images par seconde (`requestAnimationFrame()` appelle jusqu'à 60 images par secondes si possible). Nous ralentissons délibéremment le cadence des images parce que nous n'avons que six sprites avec lesquels travailler, et si on en affiche un à chaque 60ième de seconde, notre personnage va bouger beaucoup trop vite!

    À l'intérieur du bloc, on utilise une instruction [`if ... else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else) pour vérifier si la valeur de `sprite` vaut 5 (le dernier sprite, puisque les numéro de sprite vont de 0 à 5). Si nous sommes en train d'afficher le dernier sprite, alors on réinitialilse `sprite` à 0; sinon on l'incrémente de 1.

9.  Ensuite, nous devons déterminer comment modifier la valeur de `posX` sur chaque image — ajoutez le bloc de code à la suite:

    ```js
      if(posX > width/2) {
        newStartPos = -((width/2) + 102);
        posX = Math.ceil(newStartPos / 13) * 13;
        console.log(posX);
      } else {
        posX += 2;
      }
    ```

    Nous utilisons une autre instruction `if ... else` pour voir si la valeur de `posX` est plus grande que `width/2`, ce qui signifie que notre personnage est sortit du bord droit de l'écran. Si c'est le cas, on calcule la position qui met le personnage à gauche du bord gauche de l'écran, et on définit `posX` au multiple de 13 le plus proche de ce nombre. Il faut obligatoirement un multiple de 13 pour que le bloc de code précédent puisse toujours fonctionner!

    Si notre personnage n'a pas atteint le bord de l'écran, on incrémente `posX` de 2. Cela le fera bouger un peu vers la droite la prochaine fois qu'on le dessinera.

10. Finalement, nous devons boucler sur l'animation en appelannt {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} en bas de la fonction `draw()`:

    ```js
    window.requestAnimationFrame(draw);
    ```

Et voilà! L'exemple final devrait ressembler à ça:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}

> **Note :** Le code final est disponible sur GitHub, [7_canvas_walking_animation.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html).

### Une application simple de dessin

Comme exemple final d'animation, nous aimerions vous montrer une application très simple de dessin, pour illustrer comment la boucle d'animation peut être combinée avec les entrées de l'utilisateur (comme le mouvement de la souris en l'occurence). Nous n'allons pas expliquer la procédure pas à pas pour construire cette application, nous allons juste explorer les parties les plus intéressantes du code.

L'exemple peut être trouvé sur GitHub, [8_canvas_drawing_app.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app.html), et vous pouvez jouer avec en direct ci-dessous:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app.html", '100%', 600)}}

Regardons les parties les plus intéressantes. Tout d'abord, nous gardons une trace des coordonnées X et Y de la souris et si elle est pressée ou non grâce à trois variables: `curX`, `curY`, et `pressed`. Quand la souris bouge, nous déclenchons une fonction via le gestionnaire d'événement `onmousemove`, lequel capture les valeurs X et Y actuelles. Nous utilisons également les gestionnaires d'événement `onmousedown` et `onmouseup` pour changer la valeur de `pressed` à `true` quand le bouton de la souris est pressé, et de nouveau à `false` quand il est relaché.

```js
var curX;
var curY;
var pressed = false;

document.onmousemove = function(e) {
  curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

canvas.onmousedown = function() {
  pressed = true;
};

canvas.onmouseup = function() {
  pressed = false;
}
```

Quand le bouton "Clear canvas" (effacer le canvas) est cliqué, nous exécutons une simple fonction qui efface entièrement le canvas grâce à un rectangle noir, de la même manière que nous avons vu précédemment:

```js
clearBtn.onclick = function() {
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
}
```

La boucle du dessin est relativement simple cette fois-ci — si `pressed` est à `true`, nous dessinons un cercle rempli avec la couleur du color picker (sélecteur de couleur), et d'un rayon égal à la valeur définit dans le champs de sélection dans un intervalle.

```js
function draw() {
  if(pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(curX, curY-85, sizePicker.value, degToRad(0), degToRad(360), false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

> **Note :** Les types d'{{htmlelement("input")}} `range` et `color` sont relativement bien pris en charge parmi les différents navigateurs, à l'exception des versions d'Internet Explorer inférieures à 10; et Safari ne prend pas en charge le type `color`. Si votre navigateur ne prend pas en charge ces types, il affichera simplement un champ texte et vous n'aurez qu'à entrer des valeurs de couleur et numéro valides vous-mêmes.

## WebGL

Il est maintenant temps de laisser la 2D derrière, et de jeter un coup d'oeil au canvas 3D. Le contenu 3D d'un canvas est spécifié en utilisant l'[API WebGL](/fr/Apprendre/WebGL), qui est une API complètement séparée de l'API des canvas 2D, même si ls deux sont affichés sur des éléments {{htmlelement("canvas")}}.

WebGL est basé sur le langage de programmation graphique [OpenGL](/fr/docs/Glossaire/OpenGL), et permet de communiquer directement avec le [GPU](/fr/docs/Glossaire/GPU) de l'ordinateur. En soi, l'écriture WebGL est plus proche des langages de bas niveau tel que C++ que du JavaScript usuel; c'est assez complexe mais incroyablement puissant.

### Utiliser une bibliothèque

De par sa complexité, la plupart des gens écrivent du code de graphique 3D en utilisant une bibliothèque JavaScript tierce telle que [Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) ou [Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js). La plupart d'entre elles fonctionnent d'une manière similaire, offrant des fonctionnalités pour créer des formes primitives et personnalisées, positionner des caméras et des éclairages, recouvrir des surfaces avec des textures et plus encore. Elles se chargent de WebGL pour vous, vous permettant de travailler à un niveau plus haut.

Oui, en utiliser une signifie apprendre une autre nouvelle API (une API tierce en l'occurence), mais elles sont beaucoup plus simples que de coder du WebGL brut.

### Recréer notre cube

Regardons un exemple simple pour créer quelque chose avec une bibliothèque WebGL. Nous allons choisir [Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), puisque c'est l'une des plus populaires. Dans ce tutoriel, nous allons créer le cube 3D qui tourne que nous avons plus tôt.

1.  Pour commencer, créez une copie locale de [index.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/threejs-cube/index.html) dans un nouveau répertoire, et sauvegardez [metal003.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/drawing-graphics/threejs-cube/metal003.png) dans ce même répertoire. C'est l'image que nous allons utiliser comme texture de surface du cube plus tard.
2.  Ensuite, créez un nouveau fichier `main.js`, toujours dans le même répertoire.
3.  Si vous ouvrez `index.html` dans votre éditeur de texte, vous verrez qu'il y a deux éléments {{htmlelement("script")}} — le premier ajoute `three.min.js` à la page, et le second ajoute notre fichier `main.js` à la page. Vous devez [télécharger la bibliothèque three.min.js](https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js) et la sauvegarder dans le même répertoire que précédemment.
4.  Maintenant que nous avons inclus `three.js` dans notre page, nous pouvons commencer à écrire du code JavaScript qui l'utilise dans `main.js`. Commençons par créer une nouvelle scène — ajoutez ce qui suit dans le fichier `main.js`:

    ```js
    var scene = new THREE.Scene();
    ```

    Le constructeur [`Scene()`](https://threejs.org/docs/index.html#api/scenes/Scene) crée une nouvelle scène, qui représente l'ensemble du monde 3D que nous essayons d'afficher.

5.  Ensuite, nous avons besoin d'une **caméra** pour voir la scène. En terme d'imagerie 3D, la caméra représente la position du spectateur dans le monde. Pour ajouter une caméra, ajoutez les lignes suivantes à la suite:

    ```js
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    ```

    Le constructeur [`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera) prend quatre arguments:

    - Le champ de vision: Quelle est la largeur de la zone devant la caméra qui doit être visible à l'écran, en degrés.
    - Le rapport d'aspect (aspect ratio): Habituellement, c'est le rapport entre la largeur de la scène divisé par la hauteur de la scène. Utiliser une autre valeur va déformer la scène (ce qui pourrait être ce que vous voulez, mais ce n'est généralement pas le cas).
    - Le plan proche (near plane): Jusqu'où les objets peuvent être proches de la caméra avant que nous arrêtions de les afficher à l'écran. Pensez-y comme quand vous approchez votre doigt de plus en plus près de l'espace entre vos yeux, vous finissez par ne plus le voir.
    - Le plan éloigné (far plane): Jusqu'à quelle distance de la caméra doit-on afficher les objets.

    Nous définissons également la position de la caméra à 5 unités de distance de l'axe Z, qui, comme en CSS, est hors de l'écran vers vous, le spectateur.

6.  Le troisième ingrédient essentiel est un moteur de rendu. C'est un objet qui restitue une scène donnée, vu à travers une caméra donnée. Nous allons en créer dès à présent en utilisant le constructeur [`WebGLRenderer()`](https://threejs.org/docs/index.html#api/renderers/WebGLRenderer) — mais nous ne l'utiliserons que plus tard. Ajoutez les lignes suivantes à la suite de votre JavaScript:

    ```js
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    ```

    La première ligne crée un nouveau moteur de rendu, la deuxième ligne définit la taille à laquelle le moteur de rendu va dessiner la vue de la caméra, et la troisième ligne ajoute l'élément {{htmlelement("canvas")}} crée par le moteur de rendu au {{htmlelement("body")}} du document. Désormais, tout ce que dessine le moteur de rendu sera affiché dans notre fenêtre.

7.  Ensuite, nous voulons créer le cube que nous afficherons sur le canvas. Ajoutez le morceau de code suivant au bas de votre JavaScript:

    ```js
    var cube;

    var loader = new THREE.TextureLoader();

    loader.load( 'metal003.png', function (texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);

      var geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
      var material = new THREE.MeshLambertMaterial( { map: texture, shading: THREE.FlatShading } );
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      draw();
    });
    ```

    Il y a un peu plus à encaisser ici, alors allons-ici par étapes:

    - Nous créons d'abord une variable globale `cube` pour pouvoir accéder à notre cube de n'importe où dans notre code.
    - Ensuite, nous créons un nouvel objet [`TextureLoader`](https://threejs.org/docs/index.html#api/loaders/TextureLoader), et appellons `load()` dessus. La fonction `load()` prend deux paramètres dans notre exemple (bien qu'elle puisse en prendre plus): la texture que nous voulons charger (notre PNG), et la fonction qui sera exécutée lorsque la texture sera chargée.
    - À l'intérieur de cette fonction, nous utilisons les propriétés de l'objet [`texture`](https://threejs.org/docs/index.html#api/textures/Texture) pour spécifier que nous voulons une répétition 2 x 2 de l'image sur tous les côtés du cube.
    - Ensuite, nous créons un nouvel objet [`BoxGeometry`](https://threejs.org/docs/index.html#api/geometries/BoxGeometry) et [`MeshLambertMaterial`](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial), que nous passons à un [`Mesh`](https://threejs.org/docs/index.html#api/objects/Mesh) pour créer notre cube. Typiquement, un objet requiert une géométrie (quelle est sa forme) et un matériau (à quoi ressemble sa surface).
    - Pour finir, nous ajoutons notre cube à la scène, puis appellons la fonction `draw()` pour commencer l'animation.

8.  Avant de définir la fonction `draw()`, nous allons ajouter quelques lumières à la scène, pour égayer un peu les choses; ajoutez le bloc suivant à la suite de votre code:

    ```js
    var light = new THREE.AmbientLight('rgb(255, 255, 255)'); // soft white light
    scene.add(light);

    var spotLight = new THREE.SpotLight('rgb(255, 255, 255)');
    spotLight.position.set( 100, 1000, 1000 );
    spotLight.castShadow = true;
    scene.add(spotLight);
    ```

    Un objet [`AmbientLight`](https://threejs.org/docs/index.html#api/lights/AmbientLight) est une lumière douce qui illumine la scène entière, un peu comme le soleil comme vous êtes dehors. Un objet [`SpotLight`](https://threejs.org/docs/index.html#api/lights/AmbientLight), d'autre part, est un faisceau de lumière, plutôt comme une lampe de poche/torche (ou un spotlight - projecteur - en fait).

9.  Pour finir, ajoutons notre fonction `draw()` au bas du code:

    ```js
    function draw() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);

      requestAnimationFrame(draw);
    }
    ```

    C'est assez intuittif: sur chaque image, on fait légèrement tourner notre cube sur ses axes X et Y, affichons la scène telle qu'elle vue par notre caméra, puis appellons `requestAnimationFrame()` pour planifier le dessin de notre prochaine image.

Jetons un coup d'oeil rapide au produit fini:

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

Vous pouvez [trouver le code terminé sur GitHub](https://github.com/mdn/learning-area/tree/master/javascript/apis/drawing-graphics/threejs-cube).

> **Note :** Dans notre repo GitHub vous pouvez également trouver d'autres exemples 3D intéressants — [Three.js Video Cube](https://github.com/mdn/learning-area/tree/master/javascript/apis/drawing-graphics/threejs-video-cube) ([le voir en direct](https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/)). On utilise {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} pour prendre un flux vidéo à partir d'une webcam de l'ordinateur et le projetons sur le côté du cube comme texture!

## Sommaire

À ce stade, vous devriez avoir une idée utile des bases de la programmation graphique en utilisant Canvas et WebGL et de ce que vous pouvez faire avec ces APIs. Vous pouvez trouver des endroits où aller pour trouver plus d'informations dans la section suivante. Amusez-vous!

## Voir aussi

Nous n'avons couverts dans cet article que les vraies bases du canvas — il y a tellement plus à apprendre! Les articles suivants vous mèneront plus loin.

- [Tutoriel canvas](/fr/docs/Tutoriel_canvas) — Une série de tutoriels très détaillés qui explique ce que vous devriez savoir à propos du canvas 2D de manière beaucoup plus poussée qu'ici. Lecture indispensable.
- [Tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial) — Une série de tutoriels qui enseigne les bases de la programmation WebGL brute.
- [Construire une démo basique avec Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) — tutoriel Three.js basique. Nous avons également les guides équivalents pour [PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) et [Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js).
- [Développement de jeux vidéos](/fr/docs/Jeux) — La page d'atterrisage sur MDN pour le développement de jeux web. Il y a quelques tutoriels et techniques disponibles liés au canvas 2D et 3D — voir les options du menu Techniques et Tutoriels.

## Exemples

- [Violent theramin](https://github.com/mdn/violent-theremin) — Utilise l'API Web Audio pour générer des sons, et Canvas pour générer une visualisation.
- [Voice change-o-matic](https://github.com/mdn/voice-change-o-matic) — Utilise un canvas pour visualiser en temps réel les données audio de l'API Web Audio.

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}



## Dans ce module

- [Introduction aux API du Web](/fr/Apprendre/JavaScript/Client-side_web_APIs/Introduction)
- [Manipuler des documents](/fr/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Récupérer des données du serveur](/fr/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data)
- [APIs tierces](/fr/Apprendre/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [Dessiner des éléments graphiques](/fr/Apprendre/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [APIs vidéo et audio](/fr/Apprendre/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Stockage côté client](/fr/Apprendre/JavaScript/Client-side_web_APIs/Client-side_storage)
