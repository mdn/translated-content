---
title: Formes de base
slug: Web/SVG/Tutorial/Basic_Shapes
---

{{PreviousNext("Web/SVG/Tutorial/Positions","Web/SVG/Tutorial/Paths")}}

Il existe tout un ensemble de formes de base utilisées pour faire du dessin via SVG. Le but de ces formes s'avère assez transparent si on regarde attentivement les noms de chaque élément. Des attributs permettent de configurer leur position et leur taille, mais vous pourrez retrouver les détails de chaque élément avec tous ses attributs à [la page des références SVG](/fr/docs/Web/SVG/Element). Nous nous contenterons ici de couvrir les fonctions de base qui nous sont nécessaires, car elles sont utilisées dans la plupart des documents SVG.

## Formes de base

Pour insérer une forme, vous devez ajouter un élément dans un document. Des éléments différents correspondent à des formes différentes et ont des attributs différents pour décrire leur taille et leur position. Certaines déclarations sont très fortement redondantes en ce qu'elles peuvent être créées par d'autres formes, mais elles sont toutes là de manière à faciliter votre vie et à rendre le document SVG aussi court et lisible que possible. Toutes les formes de bases sont affichées sur l'image de gauche. Le code pour générer tout cela ressemble à cela :

![](shapes.png)

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

> **Note :** les attributs `stroke`, `stroke-width` et `fill` sont détaillés plus loin dans ce tutoriel.

### Rectangle

L'élément [`<rect>`](/fr/docs/Web/SVG/Element/rect) permet de dessiner des rectangles. Il existe 6 attributs de base qui contrôlent la position et la forme du rectangle à l'écran. L'image précédente affichait 2 rectangles, ce qui est un peu répétitif. Celui de droite possède des attributs `rx` et `ry` définis, ce qui lui donne des coins arrondis. Si ces attributs ne sont pas définis, leur valeur par défaut est de 0, ce qui a pour résultats d'afficher un rectangle avec des angles droits.

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

### Cercle

L'élément [`<circle>`](/fr/docs/Web/SVG/Element/circle) permet de dessiner un cercle à l'écran. Seuls 3 attributs peuvent être définis pour cet élément.

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : Rayon du cercle.
- `cx`
  - : Position du centre du cercle sur l'axe des abscisses.
- `cy`
  - : Position du centre du cercle sur l'axe des ordonnées.

### Ellipse

L'élément [`<ellipse>`](/fr/docs/Web/SVG/Element/ellipse) permet de dessiner des ellipses, il s'agit d'une sorte de cercles, où l'on peut modifier les rayons x et y séparément l'un de l'autre (les matheux appellent ces rayons le grand axe et le petit axe).

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

### Ligne

L'élément SVG [`<line>`](/fr/docs/Web/SVG/Element/line) correspond à une portion de droite tracée entre 2 points.

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

### Ligne brisée

Les lignes brisées, aussi appelées lignes polygonales, sont définies par l'élément [`<polyline>`](/fr/docs/Web/SVG/Element/polyline) en SVG. Elles sont constituées d'un ensemble de lignes droites connectées entre elles, donc d'un ensemble de points se reliant entre eux suivant un ordre défini. Comme ce lot de points peut être assez conséquent à déclarer, un seul attribut est utilisé pour déclarer l'ensemble des points :

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : Une liste de points, chaque paire de nombres (entiers positifs) correspondent aux coordonnées x et y de chaque point. Chaque position x est séparée de la position y par une virgule, un espace, un saut de ligne. Chaque point est séparé du suivant en utilisant un caractère qui n'est pas celui utilisé pour séparer les coordonnées. Exemple : points="100,10 190,78 160,198 40,198 10,78" ou points="100 10,190 78,160 198,40 198,10 78"

### Polygone

L'élément [`<polygon>`](/fr/docs/Web/SVG/Element/polygon) fonctionne de façon semblable à l'élément `<polyline>`. Toutefois, pour les polygones, le chemin de cette ligne retourne automatiquement au point de départ, créant ainsi une forme fermée.

> **Note :** Il est à noter que le rectangle est un type de polygone particulier. Il est donc possible, pour des besoins de flexibilité, de déclarer un rectangle en utilisant l'élément `<polygon>`.

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- points
  - : Idem que l'attribut `points` de l'élément `<polyline>`.

### Chemin

L'élément pour tracer les chemins, [`<path>`](/fr/docs/Web/SVG/Tutorial/Paths), est sûrement la forme la plus généraliste qui peut être utilisée en SVG. Avec un élément `<path>`, vous pouvez dessiner un rectangle (avec ou sans coins arrondis), des cercles, des ellipses, des lignes brisées et des polygones. De manière plus basique, il est aussi possible de dessiner d'autres types de formes, comme des courbes de Bézier, des paraboles, et bien plus encore.

Pour cette raison, l'élément `<path>` fera l'objet du [prochain chapitre](/fr/docs/Web/SVG/Tutorial/Paths) de ce tutoriel, mais pour le moment, nous allons uniquement voir comment définir cet élément.

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : Un ensemble d'informations définissant le chemin à dessiner. Pour en savoir plus, consultez [la section sur les chemins](/fr/docs/Web/SVG/Tutorial/Paths).

{{PreviousNext("Web/SVG/Tutorial/Positions","Web/SVG/Tutorial/Paths")}}
