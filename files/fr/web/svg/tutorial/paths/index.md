---
title: Paths
slug: Web/SVG/Tutorial/Paths
---

{{ PreviousNext("Web/SVG/Tutoriel/Formes_de_base", "Web/SVG/Tutoriel/Fills_and_Strokes") }}

L'élément [`<path>`](/fr/Web/SVG/Element/path) (_chemin_ en français) est le plus versatile des éléments de la bibliothèque SVG parmi les [formes basiques](/fr/docs/Web/SVG/Tutoriel/Formes_de_base). Vous pouvez l'utiliser pour créer des lignes, des courbes, des arcs et autres.

Les chemins créent des formes en combinant plusieurs lignes droites ou courbes. Les formes composées uniquement de lignes droites peuvent être crées avec des [lignes brisées](/fr/docs/Web/SVG/Tutoriel/Formes_de_base#Lignes_brisées) (_polylines_). Bien que les lignes brisées et les chemins peuvent tout deux créer des formes d'apparence similaire, les lignes brisées nécessitent un grand nombre de petites lignes pour simuler des courbes, et qui ne s'adaptent pas bien aux grandes tailles. Une bonne compréhension des chemins est importante pour dessiner en SVG. Bien qu'il ne soit pas recommandé d'éditer des chemins complexes avec un éditeur XML ou texte (on utilisera plutôt un éditeur SVG tel que Inkscape ou Adobe Illustrator), comprendre comment un chemin s'écrit vous permettra éventuellement d'identifier et de corriger des erreurs d'affichage dans un SVG.

La forme d'un élément path est définie par son attribut {{ SVGAttr("d") }}. Celui-ci prend pour valeur une série de commandes suivi de paramètres utilisés par ces commandes.

Chacune des commandes est instanciée par une lettre spécifique. Par exemple, pour se positionner aux coordonnées (10, 10), on utilise la commande `M` (pour _MoveTo,_ «&nbsp;aller à&nbsp;») suivit des coordonées: "M 10 10". Quand l'interpréteur rencontre une lettre, il comprend que vous invoquez une commande, et les nombres qui suivent sont les paramètres de la commande.

De plus, toutes les commandes se présentent sous deux formes: une **lettre majuscule** spécifie des coordonnées absolues dans la page, une **lettre minuscule** spécifie des coordonées relatives (par exemple, «&nbsp;aller à 10px vers le haut et 7px vers la gauche depuis le point précédent&nbsp;»).

Les coordonnées dans l'attribut `d` sont **toujours sans unité** et par conséquent dans le système de coordonnées utilisateur. Par la suite, nous apprendrons comment les chemins peuvent être transformés pour répondre à d'autres besoins.

## Commandes pour les lignes

Il existe cinq commandes pour tracer des lignes avec un élément `<path>`. Ces commandes permettent de tracer une ligne droite entre deux points.

### MoveTo

La première commande, «&nbsp;aller à&nbsp;», invoquée avec `M` (_MoveTo_), a été décrite ci-dessus. Elle prend en paramètres les coordonnées `x` et `y` où se rendre. Aucun trait n'est dessiné, le curseur est simplement déplacé dans la page. La commande «&nbsp;aller à&nbsp;» apparaît au début d'un chemin pour spécifier à quel endroit le dessin doit commencer. Par exemple&nbsp;:

```
M x y
```

ou

```
m dx dy
```

Dans l'exemple suivant, on se place au point (10, 10). Notez cependant qu'à ce stade rien n'est dessiné, on a manuellement ajouté un cercle pour indiquer la position:

![](blank_path_area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10"/>

  <!-- Indique la position -->
  <circle cx="10" cy="10" r="2" fill="red"/>
</svg>
```

### LineTo, Horizontal LineTo, Vertical LineTo

Il y a trois commandes qui dessinent des lignes. La plus générique est la commande «&nbsp;ligne vers&nbsp;», invoquée avec `L` (_LineTo_). `L` prend deux paramètres, les coordonnées `x` et `y`, et dessine une ligne depuis la position actuelle vers la nouvelle position.

```
L x y (ou l dx dy)
```

Il existe deux formes abrégées pour dessiner des lignes horizontales ou verticales. `H` (_Horizontal LineTo_) dessine une ligne horizontale, et `V` (_Vertical LineTo_) dessine une ligne verticale. Ces deux commandes ne prennent qu'un seul argument car elles ne se déplacent que le long d'une direction.

```
H x (ou h dx)
V y (ou v dy)
```

Afin de commencer facilement, nous allons dessiner une forme simple, un rectangle (qu'on aurait aussi pu dessiner avec un élément `<rect>`). Il est composé uniquement de lignes horizontales et verticales&nbsp;:

![](path_line_commands.png)

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Indique les points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>
</svg>
```

### ClosePath

On aurait pu raccourcir un peu la déclaration de l'exemple ci-dessus en utilisant la commande «&nbsp;fermer le chemin&nbsp;», invoquée avec `Z` (_ClosePath_). Cette commande dessine une ligne droite entre la position actuelle et le premier point du chemin. Elle est souvent placée à la fin du `path`, mais pas toujours. Il n'y a pas de différence entre la commande en majuscule et en minuscule.

```
Z (ou z)
```

Ainsi, notre chemin précédent peut se raccourcir comme ceci:

```xml
<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

## Commandes relatives

On aurait également pu utiliser des commandes relatives pour dessiner la même image.

Les commandes relatives sont invoquées en utilisant des lettres minuscules. Plutôt que de déplacer le curseur vers des coordonnées absolues, elles le déplacent relativement à sa dernière position. Par exemple, puisque notre boîte est de dimension 80x80, l'élement `path` aurait pu être écrit:

```xml
<path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Le chemin va se positionner au point (10, 10), se déplacer horizontalement de 80 points vers la droite, puis de 80 points vers le bas, de 80 points vers la gauche, et enfin revenir à son point de départ.

Dans ces exemples, il serait probablement plus simple d'utiliser un élément `<polygon>` ou `<polyline>`. Cependant, les chemins sont si couramment utilisés en dessin SVG qu'un développeur peut se sentir plus à l'aise avec eux. Il n'y a pas de réel avantage ou inconvénient à utiliser l'un ou l'autre.

## Commandes pour les courbes

Il existe trois commandes différentes pour créer des courbes. Deux d'entre elles sont des courbes de Bézier, et la troisième est un «&nbsp;arc&nbsp;» ou section de cercle. Il se peut que vous ayez déjà acquis une expérience pratique avec les courbes de Bézier en utilisant les outils de chemins avec Inkscape, Illustrator ou Photoshop. Pour une description complète des concepts mathématiques sous-jacents, vous pouvez consulter la [page Wikipédia sur les courbes de Bézier](https://fr.wikipedia.org/wiki/Courbe_de_Bézier).

Il existe une infinité de courbes de Bézier, mais seulement deux des plus simples d'entre elles sont disponibles dans les éléments `path`: l'une cubique, invoquée avec `C`, et l'autre quadratique, invoquée avec `Q`.

### CurveTo

La courbe de Bézier cubique, `C` (_CurveTo_), est la forme de courbe Bézier la plus complexe. Ce type de courbe nécessite deux points de contrôle. Ainsi, pour créer une courbe de Bézier cubique, vous devez spécifier trois paires de coordonnées.

```
C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)
```

Les deux premières paires de coordonnées sont les points de contrôle: le point de contrôle pour le début de la courbe est (x1, y1), et (x2, y2) est celui de la fin de la courbe. La dernière paire de coordonnées (x, y) est l'endroit où vous voulez que la ligne se termine.

Les points de contrôle décrivent, pour faire simple, la pente de la courbe pour le point de départ et pour le point d'arrivée. La fonction Bézier crée ensuite une courbe lisse faisant le lien entre la pente que vous avez établie au début de votre ligne, et celle à l'autre extrémité.

![](shortcut_cubic_bézier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
  <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
</svg>
```

L'exemple ci-dessus crée neuf courbes de Bézier cubiques. De gauche à droite, les points de contrôle sont de plus en plus espacés horizontalement. De haut en bas, ils sont de plus en plus éloignés des extrémités. La chose à remarquer ici est que la courbe commence dans la direction du premier point de contrôle, puis se courbe de manière à terminer le long de la direction du second point de contrôle.

### Shorthand CurveTo

Vous pouvez lier ensemble plusieurs courbes de Bézier pour créer des formes harmonieuses étendues. Souvent, le point de contrôle d'un côté d'une extrémité sera une réflexion du point de contrôle utilisé de l'autre côté, afin de garder une pente constante. Dans ce cas, vous pouvez utiliser une version raccourcie de la courbe cubique, désignée par la commande `S`, ou `s` (_Shorthand CuveTo_).

```
S x2 y2, x y (ou s dx2 dy2, dx dy)
```

`S` dessine une courbe de Bézier cubique entre le point actuel et (x, y).

- Si elle suit une autre commande `S` ou `C`, le premier point de contrôle est calculé pour être le reflet du point de contrôle précédent.
- Si la commande `S` ne suit pas une autre commande `S` ou `C`, la position actuelle du curseur est utilisée comme premier point de contrôle. Dans ce cas, le résultat est le même que ce que la commande `Q` aurait produit avec les mêmes paramètres.

(x2, y2) est le second point de contrôle.

Un exemple de cette syntaxe est montré ci-dessous. Dans la figure associée, les points de contrôle spécifiés sont indiqués en rouge, et le point de contrôle inféré, en bleu.

![](shortcut_cubic_bézier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

### Quadratic Bezier CurveTo

L'autre type de courbe, la courbe de Bézier quadratique, est invoquée avec `Q` (_Quadratic Bezier CurveTo_). Elle est plus simple que la version cubique puisqu'elle ne nécessite qu'un point de contrôle. Le point de contrôle détermine la pente de la courbe à la fois au point de départ et au point d'arrivée.

```
Q x1 y1, x y (ou q dx1 dy1, dx dy)
```

(x1 y1) est la position du point de contrôle, et (x y) est le point d'arrivée de la courbe.

![courbe de Bézier quadratique avec une grille](quadratic_bézier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

### Shorthand Quadratic Bezier CurveTo

Comme pour la courbe cubique, il existe un raccourci pour lier ensemble plusieurs courbes quadratiques, invoqué avec `T` (_Shorthand Quadratic Bezier CuveTo_).

```
T x y (ou t dx dy)
```

Ce raccourci examine le précédent point de contrôle utilisé et en infère un nouveau à partir de celui-ci. Cela signifie qu'après un premier point de contrôle, vous pouvez créer des formes assez complexes en spécifiant seulement les points d'extrémités.

> **Note :** Ce raccourci fonctionne uniquement si la commande précédente est une commande `Q` ou `T`. Dans le cas contraire, le point de contrôle est considéré comme le même que le point précédent, et vous ne dessinerez que des lignes.

![](shortcut_quadratic_bézier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Les deux courbes produisent des résultats similaires, bien que les courbes cubiques vous offrent une plus grande liberté dans l'apparence exacte que vous voulez donner à votre courbe. Le choix du type de courbe de Bézier à utiliser se fait au cas par cas, et dépend du nombre de symétries que présente votre ligne.

### Elliptical Arc

Le dernier type de ligne courbe que vous pouvez créer avec SVG est l'arc, invoqué avec `A` (_Elliptical Arc_). Les arcs sont des sections de cercles ou d'ellipses.

L'élément arc part du point actuel vers le point d'arrivée (x, y) en parcourant la ligne le long d'une ellipse définie par `rx` et `ry`. Le centre de l'ellipse (cx, cy) est calculé automatiquement pour satisfaire les contraintes imposées par les autres paramètres. Si vous avez besoin d'un rappel sur les ellipses, voyez les [formes de base](/fr/docs/Web/SVG/Tutoriel/Formes_de_base#Ellipses). Ensemble, ces quatre valeurs définissent la structure de base de l'arc.

```
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

#### x-axis-rotation

`x-axis-rotation` décrit la rotation de l'arc. Il s'explique plus facilement avec un exemple:

![SVGArcs_XAxisRotation_with_grid](svgarcs_xaxisrotation_with_grid.png)

```xml
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="315" x2="315" y2="10" stroke="black" stroke-width="2" />

  <path d="M110 215 a 30 50 0 0 1 52.55 -52.45" fill="#7FBF7F" stroke="black" stroke-width="2" />
  <path d="M172.55 152.45 a 30 50 -45 0 1 42.55 -42.55" fill="#7FBF7F" stroke="black" stroke-width="2" />
</svg>
```

Cet exemple montre deux arcs elliptiques de rayon `dx` 30 et rayon `dy` 50.

- Pour le premier arc, le paramètre `x-axis-rotation` a été laissé à 0, et l'ellipse autour de laquelle passe l'arc (montrée en gris) est orientée verticalement.
- Pour le second arc en revanche, `x-axis-rotation` est passé à -45 degrés. Cela pivote l'ellipse, de telle sorte que son petit axe (dy) est aligné avec la direction du chemin, comme illustré par la seconde ellipse dans l'image.

#### sweep-flag

Pour un rayon `rx` et un rayon `ry` donnés, il existe deux ellipses pouvant connecter deux points quelconques.

`sweep-flag` détermine si l'arc doit commencer son mouvement à un angle négatif ou positif, permettant ainsi de choisir lequel des deux cercles est parcouru.

```html
<!-- sweep-flag: 0 -->
<path
  d="M 125,75 a100,50 0 0,0 100,50"
  stroke="red"
  stroke-width="6"
  fill="none" />

<!-- sweep-flag: 1 -->
<path
  d="M 125,75 a100,50 0 0,1 100,50"
  stroke="blue"
  stroke-width="6"
  fill="none" />
```

##### Exemple jouable

```html hidden
<svg width="350" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <g font-family="Verdana" font-size="13">
    <ellipse
      cx="125"
      cy="125"
      rx="100"
      ry="50"
      fill="none"
      stroke="#888888"
      stroke-width="2" />
    <ellipse
      cx="225"
      cy="75"
      rx="100"
      ry="50"
      fill="none"
      stroke="#888888"
      stroke-width="2" />
    <text x="120" y="70" text-anchor="end">Arc start</text>
    <text x="230" y="140">Arc end</text>
  </g>

  <!-- large-arc-flag: 0 -->
  <path
    d="M 125,75 a100,50 0 0,0 100,50"
    stroke="red"
    stroke-width="6"
    fill="none" />

  <!-- large-arc-flag: 1 -->
  <path
    d="M 125,75 a100,50 0 0,1 100,50"
    stroke="blue"
    stroke-width="6"
    fill="none" />
</svg>
```

{{ EmbedLiveSample('Exemple_jouable', '100%', 200) }}

#### large-arc-flag

Pour chacune des deux ellipses, il existe deux chemins possibles, ce qui donne quatre chemins possibles.

`large-arc-flag` détermine simplement si l'arc doit être supérieur ou inférieur à 180 degrés&nbsp;; au final, il détermine dans quelle direction l'arc va parcourir une ellipse donnée.

```html
<!-- large-arc-flag: 0 -->
<path
  d="M 125,75 a100,50 0 0,0 100,50"
  stroke="red"
  stroke-width="6"
  fill="none" />

<!-- large-arc-flag: 1 -->
<path
  d="M 125,75 a100,50 0 1,0 100,50"
  stroke="blue"
  stroke-width="6"
  fill="none" />
```

#### Code jouable 2

```html hidden
<svg width="350" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <g font-family="Verdana" font-size="13">
    <ellipse
      cx="125"
      cy="125"
      rx="100"
      ry="50"
      fill="none"
      stroke="#888888"
      stroke-width="2" />
    <ellipse
      cx="225"
      cy="75"
      rx="100"
      ry="50"
      fill="none"
      stroke="#888888"
      stroke-width="2" />
    <text x="120" y="70" text-anchor="end">Arc start</text>
    <text x="230" y="140">Arc end</text>
  </g>

  <!-- sweep-flag: 0 -->
  <path
    d="M 125,75 a100,50 0 0,0 100,50"
    stroke="red"
    stroke-width="6"
    fill="none" />

  <!-- sweep-flag: 1 -->
  <path
    d="M 125,75 a100,50 0 1,0 100,50"
    stroke="blue"
    stroke-width="6"
    fill="none" />
</svg>
```

{{ EmbedLiveSample('Code_jouable_2', '100%', 200) }}

L'exemple ci-dessous montre les quatre combinaisons possibles avec `sweep-flag` et `large-arc-flag`:

![](svgarcs_flags.png)

```xml
<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
  <path d="M80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/>
  <path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
  <path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
  <path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
</svg>
```

## Conclusion

Les arcs sont un moyen facile de créer des portions de cercle ou d'ellipse dans vos dessins. Par exemple pour dessiner un graphique en camembert. Si vous êtes en train de migrer vers SVG depuis [Canvas](/fr/docs/Web/HTML/Canvas), les arcs peuvent être la partie la plus difficile à appréhender, mais sont également bien plus puissants.

Comme les points de départ et d'arrivée de tout chemin parcourant un cercle sont confondus, un nombre infini de cercles peuvent être choisis, par conséquent le chemin est indéfini. Il est possible d'en faire une approximation en prenant des points de départ et d'arrivée légèrement décalés, puis de les connecter à l'aide d'un autre segment de chemin. Dans ces conditions, il est souvent plus facile d'utiliser un véritable élément cercle ou ellipse à la place.

Vous pouvez trouver une démo interactive à l'adresse suivante, pour vous aider à comprendre les concepts derrière les arcs SVG: <http://codepen.io/lingtalfi/pen/yaLWJG> (testé avec Chrome et Firefox seulement, peut ne pas marcher avec votre navigateur).

{{ PreviousNext("Web/SVG/Tutoriel/Formes_de_base", "Web/SVG/Tutoriel/Fills_and_Strokes") }}
