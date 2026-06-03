---
title: Formes de base
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes
original_slug: Web/SVG/Tutorial/Basic_Shapes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}

Il existe plusieurs formes de base utilisées pour la plupart des dessins SVG. Le but de ces formes est assez évident d'après leur nom. Certains des paramètres qui déterminent leur position et leur taille sont donnés, mais une référence d'élément contiendrait probablement des descriptions plus précises et complètes ainsi que d'autres propriétés qui ne seront pas abordées ici. Cependant, puisqu'elles sont utilisées dans la plupart des documents SVG, il est nécessaire de les présenter.

Pour insérer une forme, vous créez un élément dans le document. Différents éléments correspondent à différentes formes et prennent des paramètres différents pour décrire la taille et la position de ces formes. Certaines sont légèrement redondantes car elles peuvent être créées à partir d'autres formes, mais elles sont toutes là pour votre commodité et pour que vos documents SVG restent aussi courts et lisibles que possible. Toutes les formes de base sont illustrées dans l'image suivante.

![Succession de huit formes et dessins différents. En haut à gauche, un carré à contour noir suivi d'un carré à contour noir arrondi. En dessous à gauche, un cercle à contour rouge suivi d'une ellipse à contour rouge. En dessous à gauche, une ligne jaune suivie d'un zigzag jaune. En dessous des lignes jaunes, une étoile à contour vert et à la fin de l'image une ligne ondulée bleue.](shapes.png)

Le code pour générer cette image ressemble à ceci&nbsp;:

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> [!NOTE]
> Les attributs `stroke`, `stroke-width` et `fill` sont détaillés plus loin dans ce tutoriel.

## Rectangle

L'élément {{SVGElement("rect")}} permet de dessiner des rectangles. Il existe 6 attributs de base qui contrôlent la position et la forme du rectangle à l'écran. L'image précédente affichait 2 rectangles, ce qui est un peu répétitif. Celui de droite possède des attributs `rx` et `ry` définis, ce qui lui donne des coins arrondis. Si ces attributs ne sont pas définis, leur valeur par défaut est de 0, ce qui a pour résultats d'afficher un rectangle avec des angles droits.

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : Position du coin supérieur gauche du rectangle sur l'axe horizontal.
- `y`
  - : Position du coin supérieur gauche sur l'axe vertical.
- `width`
  - : Largeur du rectangle.
- `height`
  - : Hauteur du rectangle.
- `rx`
  - : Rayon x des coins du rectangle.
- `ry`
  - : Rayon y des coins du rectangle.

## Cercle

L'élément {{SVGElement("circle")}} permet de dessiner un cercle à l'écran. Seuls 3 attributs peuvent être définis pour cet élément.

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : Rayon du cercle.
- `cx`
  - : Position du centre du cercle sur l'axe des abscisses.
- `cy`
  - : Position du centre du cercle sur l'axe des ordonnées.

## Ellipse

Un élément {{SVGElement("ellipse")}} est une forme plus générale que l'élément {{SVGElement("circle")}}, où il est possible de modifier séparément le rayon x et le rayon y (appelés respectivement _grand axe_ et _petit axe_ en mathématiques) du cercle.

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx`
  - : Rayon x de l'ellipse.
- `ry`
  - : Rayon y de l'ellipse.
- `cx`
  - : Position du centre de l'ellipse sur l'axe des abscisses.
- `cy`
  - : Position du centre de l'ellipse sur l'axe des ordonnées.

## Ligne

L'élément SVG {{SVGElement("line")}} correspond à une portion de droite tracée entre 2 points.

```xml
<line x1="10" x2="50" y1="110" y2="150"/>
```

- `x1`
  - : Position horizontale du premier point.
- `x2`
  - : Position horizontale du deuxième point.
- `y1`
  - : Position verticale du premier point.
- `y2`
  - : Position verticale du deuxième point.

## Ligne brisée

Un élément {{SVGElement("polyline")}} est un groupe de lignes droites connectées. Comme la liste des points peut devenir assez longue, tous les points sont inclus dans un seul attribut&nbsp;:

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : Une liste de points. Chaque nombre doit être séparé par un espace, une virgule, un retour à la ligne ou un saut de ligne, des espaces supplémentaires étant autorisés. Chaque point doit contenir deux nombres&nbsp;: une coordonnée x et une coordonnée y. Ainsi, la liste `(0,0)`, `(1,1)` et `(2,2)` peut s'écrire `0, 0 1, 1 2, 2`.

## Polygone

L'élément {{SVGElement("polygon")}} fonctionne de façon semblable à l'élément {{SVGElement("polyline")}}. Toutefois, pour les polygones, le chemin de cette ligne retourne automatiquement au point de départ, créant ainsi une forme fermée.

> [!NOTE]
> Il est à noter que le rectangle est un type de polygone particulier. Il est donc possible, pour des besoins de flexibilité, de déclarer un rectangle en utilisant l'élément `<polygon>`.

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points`
  - : Une liste de points, chaque nombre étant séparé par un espace, une virgule, un retour à la ligne ou un saut de ligne, des espaces supplémentaires étant autorisés. Chaque point doit contenir deux nombres&nbsp;: une coordonnée x et une coordonnée y. Ainsi, la liste `(0,0)`, `(1,1)` et `(2,2)` peut s'écrire `0, 0 1, 1 2, 2`. Le dessin ferme alors le chemin, donc une dernière ligne droite sera tracée de `(2,2)` à `(0,0)`.

## Chemin

L'élément {{SVGElement("path")}} pour tracer les chemins est sûrement la forme la plus généraliste qui peut être utilisée en SVG. Avec un élément `<path>`, vous pouvez dessiner un rectangle (avec ou sans coins arrondis), des cercles, des ellipses, des lignes brisées et des polygones. De manière plus basique, il est aussi possible de dessiner d'autres types de formes, comme des courbes de Bézier, des paraboles, et bien plus encore.

Pour cette raison, l'élément `<path>` fera l'objet du [prochain chapitre](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) de ce tutoriel, mais pour le moment, nous allons uniquement voir comment définir cet élément.

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : Un ensemble d'informations définissant le chemin à dessiner. Pour en savoir plus, consultez [la section sur les chemins](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths).

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}
