---
title: Remplissages et contours
slug: Web/SVG/Tutorial/Fills_and_Strokes
tags:
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Fills_and_Strokes
original_slug: Web/SVG/Tutoriel/Fills_and_Strokes
---
{{ PreviousNext("Web/SVG/Tutoriel/Paths", "Web/SVG/Tutoriel/Gradients") }}

Il y a différentes manières de colorer des formes: utiliser différents attributs SVG sur l'objet, utiliser du {{glossary("CSS")}} en ligne, une section CSS ou un fichier CSS externe. La plupart des {{glossary("SVG")}} que vous trouverez sur le Web utilisent du CSS en ligne, mais il y a des avantages et inconvénients pour chaque manière.

## Attributs Fill et Stroke

### Colorer

La coloration peut être faite en définissant deux attributs sur l'objet: `fill` et `stroke`. `Fill` définit la couleur de remplissage et `stroke` définit la couleur de la bordure. Vous pouvez utiliser la même convention de nommage des couleurs que CSS, que ce soit les noms (comme _red_), les valeurs rgb (comme _rgb(255,0,0)_), les valeurs hexadécimales, rgba, etc.

```xml
<rect x="10" y="10" width="100" height="100"
       stroke="blue" fill="purple"
       stroke-opacity="0.8" fill-opacity="0.5"/>
```

De plus, vous pouvez spécifier l'opacité de `fill` et/ou `stroke`. Celle-ci est contrôlé par les attributs `fill-opacity` et `stroke-opacity` respectivement.

> **Note :** Dans Firefox 3+, les valeurs rgba sont autorisés, ce qui donne le même effet qu'utiliser les attributs d'opacité. En revanche, pour être compatible avec les autres navigateurs, il est souvent préférable de spécifier fill/stoke-opacity séparemment. Si vous spécifiez à la fois une valeur rgba et fill/stoke-opacity, les deux seront appliquées.

### Options du contour

Outre les propriétés de couleur, il existe quelques attributs additionnels pour contrôler la manière dont le contour est dessiné.

#### stroke-width

La propriété `stroke-width` définit la taille du contour. La ligne du contour est centrée autour du remplissage (si le contour vaut 10, 5 pixels du contour chevauchent le remplissage).

#### stroke-linecap

Le second attribut affectant le contour est la propriété `stroke-linecap`. Elle contrôle la forme des fins de ligne. Dans l'image ci-dessous, le chemin est dessiné en rose et le contour en noir.

![](svg_stroke_linecap_example.png)

```html
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20"
        stroke-linecap="butt" stroke="black" stroke-width="20"/>
  <line x1="40" x2="120" y1="60" y2="60"
        stroke-linecap="square" stroke="black" stroke-width="20"/>
  <line x1="40" x2="120" y1="100" y2="100"
        stroke-linecap="round" stroke="black" stroke-width="20"/>
</svg>
```

{{ EmbedLiveSample('stroke-linecap', '220', '150') }}

Il y a trois valeurs possibles pour `stroke-linecap`:

- `butt` (valeur par défaut) ferme la ligne avec un bord droit, à 90 degrés à l'endroit où la ligne se termine.
- `square` a la même apparence mais termine au delà de la ligne. La distance ajoutée est la moitié de `stroke-width`.
- `round` produit un effet arrondi à la fin du trait. La rayon de cette courbe est également contrôlé par `stroke-width`.

#### stroke-linejoin

La propriété `stroke-linejoin` permet de contrôler la manière de dessiner la liaison entre deux segments de ligne.

![](svg_stroke_linejoin_example.png)

```html
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

{{ EmbedLiveSample('stroke-linejoin', '220', '150') }}

Chacune des ces polylignes est composée de deux segments de lignes. La liaison entre les deux est contrôlée par l'attribut `stroke-linejoin`. Il y a trois valeurs possibles pour cet attribut:

- `miter` (valeur par défaut) prolonge légèrement la ligne au-delà de sa largeur normale pour créer un coin carré, de telle sorte qu'il n'y ait qu'un seul angle.
- `round` crée un coin arrondi.
- `bevel` crée un nouvel angle pour faciliter la transition entre les deux segments.

#### stroke-dasharray

Finalement, vous pouvez également créer des lignes pointillées en spécifiant l'attribut `stroke-dasharray`.

![](svg_stroke_dasharray_example.png)

```html
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

{{ EmbedLiveSample('stroke-dasharray', '220', '150') }}

L'attribut `stroke-dasharray` prend une série de nombres séparés par une virgule en argument.

> **Note :** Contrairement aux paths, ces nombres **_doivent_** être séparés par des virgules (les espaces sont ignorés).

Le premier nombre spécifie la distance du trait et le second la distance de l'espace. Dans l'exemple précédent, la ligne rouge commence par un trait de 5 suivit d'un espace de 5 (`5,5`), motif qui se répète sur le reste de la ligne. Vous pouvez spécifier davantage de nombres pour créer un motif de pointillés plus complexe. Pour la ligne noire on a spécifié trois nombres (`5,10,5`), ce qui a pour effet d'alterner le motif: (5 trait, 10 espace, 5 trait), (5 espace, 10 trait, 5 espace), etc.

#### Autres

Il existe d'autres propriétés disponibles:

- [`fill-rule`](/fr/docs/Web/SVG/Attribute/fill-rule), spécifie la règle de remplissage pour les formes où des chemins se chevauchent.
- [`stroke-miterlimit`](/fr/docs/Web/SVG/Attribute/stroke-miterlimit), détermine à partir de quel angle une liaison de segment de type `miter` sera affichée en `bevel`.
- [`stroke-dashoffset`](/fr/docs/Web/SVG/Attribute/stroke-dashoffset), définit à partir d'où commencer les pointilliés sur la ligne.

## Utiliser CSS

En plus de définir des attributs sur des objets, vous pouvez également utiliser CSS pour styliser les remplissages et les contours. Tous les attributs ne peuvent pas être définis via CSS. Ceux qui traitent le remplissage et le contour le sont généralement, `fill`, `stroke`, `stroke-dasharray`, etc... peuvent donc être définis de cette manière. Les attributs tels que `width`, `height`, ou les commandes des paths, ne peuvent pas être définis par CSS. Le plus simple est de tester pour découvrir ce qui est disponible et ce qui ne l'est pas.

> **Note :** La [spécification SVG](http://www.w3.org/TR/SVG/propidx.html) décide strictement entre les attributs qui sont des _propriétés_ et les autres. Les premiers peuvent être modifiés avec CSS, les derniers non.

#### En ligne

CSS peut être inséré en ligne avec l'élément via l'attribut `style`:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

#### Dans un section style

Sinon, il peut être déplacé vers une section `style`. Au lieu de l'insérer dans une section `<head>` comme vous le feriez en HTML, on la place dans la zone [`<defs>`](/fr/SVG/Element/defs "en/SVG/Element/defs") du SVG. `<defs>` (abbréviation de definitions) est l'endroit où vous placez les éléments qui n'apparaissent pas dans le SVG directement, mais qui sont utilisés par les autres éléments.

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

Déplacer les styles dans une zone comme ceci peut rendre les choses plus simples pour ajuster les propriétés d'un grand nombre d'éléments. Vous pouvez également utiliser les **pseudo-classes comme hover** pour créer des effets:

```css
 #MyRect:hover {
   stroke: black;
   fill: blue;
 }
```

#### Dans un fichier externe

Ou vous pouvez spécifier une feuille de style externe pour vos règles CSS avec la [syntaxe XML pour les stylesheets](http://www.w3.org/TR/xml-stylesheet/):

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

où style.css ressemble à ça:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutoriel/Paths", "Web/SVG/Tutoriel/Gradients") }}
