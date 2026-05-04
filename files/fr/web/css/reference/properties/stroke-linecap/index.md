---
title: Propriété CSS `stroke-linecap`
short-title: stroke-linecap
slug: Web/CSS/Reference/Properties/stroke-linecap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-linecap`** définit la forme à utiliser à la fin des sous-tracés ouverts des contours non fermés des éléments [SVG](/fr/docs/Web/SVG). Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-linecap")}} de l'élément.

Cette propriété s'applique à tout élément de forme SVG pouvant avoir des contours non fermés et aux éléments de contenu textuel (voir {{SVGAttr("stroke-linecap")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
stroke-linecap: butt;
stroke-linecap: round;
stroke-linecap: square;

/* Valeurs globales */
stroke-linecap: inherit;
stroke-linecap: initial;
stroke-linecap: revert;
stroke-linecap: revert-layer;
stroke-linecap: unset;
```

### Valeurs

- `butt`
  - : Indique que le contour de chaque sous-tracé ne s'étend pas au-delà de ses deux points d'extrémité. Sur un sous-tracé de longueur nulle, le chemin ne sera pas rendu du tout. C'est la valeur par défaut.

- `round`
  - : Indique qu'à la fin de chaque sous-tracé, le contour sera étendu par un demi-cercle dont le diamètre est égal à la largeur du contour. Sur un sous-tracé de longueur nulle, le contour consiste en un cercle complet centré sur le point du sous-tracé.

- `square`
  - : Indique qu'à la fin de chaque sous-tracé, le contour sera étendu par un rectangle dont la largeur est égale à la moitié de la largeur du contour et la hauteur est égale à la largeur du contour. Sur un sous-tracé de longueur nulle, le contour consiste en un carré dont la largeur est égale à la largeur du contour, centré sur le point du sous-tracé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Extrémités de ligne

Cet exemple montre les trois valeurs de mot-clé de la propriété.

#### HTML

Nous commençons par placer un rectangle gris clair. Ensuite, dans un groupe, trois chemins sont définis dont la longueur est exactement la même que la largeur du rectangle, et qui commencent tous au bord gauche du rectangle. Ils ont tous un contour `dodgerblue` d'une largeur de sept.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect x="10" y="5" width="80" height="30" fill="#dddddd" />
  <g stroke="dodgerblue" stroke-width="7">
    <path d="M 10,10 h 80" />
    <path d="M 10,20 h 80" />
    <path d="M 10,30 h 80" />
  </g>
</svg>
```

#### CSS

Nous appliquons ensuite un style d'extrémité de ligne différent à chaque chemin avec CSS.

```css
path:nth-of-type(1) {
  stroke-linecap: butt;
}
path:nth-of-type(2) {
  stroke-linecap: square;
}
path:nth-of-type(3) {
  stroke-linecap: round;
}
```

#### Résultats

{{EmbedLiveSample("Extrémités de ligne", 500, 250)}}

Le premier chemin a des extrémités de type `butt`, ce qui signifie que le contour s'arrête exactement aux points de début et de fin du chemin, et pas plus loin. Le deuxième chemin a des extrémités de type `square`, donc le chemin visible s'étend au-delà des points d'extrémité, ce qui fait que la longueur totale du chemin semble être de 87, puisque la longueur du chemin est de 80 et que chacune des deux extrémités carrées mesure 3,5 de large. Le troisième chemin a des extrémités de type `round`, donc bien qu'il semble aussi mesurer 87 unités de long, les deux extrémités sont semi-circulaires au lieu d'être carrées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("stroke-width")}}
- La propriété raccourcie {{CSSxRef("stroke")}}
- L'attribut SVG {{SVGAttr("stroke-linecap")}}
