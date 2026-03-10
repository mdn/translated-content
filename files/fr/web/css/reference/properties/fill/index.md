---
title: fill
slug: Web/CSS/Reference/Properties/fill
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`fill`** définit comment le contenu textuel SVG et l'intérieur des formes SVG sont remplis ou peints. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("fill")}} de l'élément.

Les zones à l'intérieur du contour de la forme ou du texte SVG sont peintes. Ce qui est «&nbsp;à l'intérieur&nbsp;» d'une forme n'est pas toujours évident. Les chemins qui définissent une forme peuvent se chevaucher. Les zones considérées comme «&nbsp;intérieures&nbsp;» à ces formes complexes sont précisées par la propriété ou l'attribut {{CSSxRef("fill-rule")}}.

Si des sous-chemins sont ouverts, `fill` ferme le chemin avant de peindre, comme si une commande «&nbsp;closepath&nbsp;» était incluse pour relier le dernier point du sous-chemin au premier. Autrement dit, `fill` s'applique aux sous-chemins ouverts dans les éléments `path` (c'est-à-dire les sous-chemins sans commande closepath) et aux éléments `polyline`.

> [!NOTE]
> La propriété `fill` ne s'applique qu'aux éléments {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
fill: none;
fill: context-fill;
fill: context-stroke;

/* Valeurs de type <color> */
fill: red;
fill: hsl(120deg 75% 25% / 60%);

/* Valeurs de type <url> */
fill: url("#gradientElementID");
fill: url("star.png");

/* Valeurs de repli de type <url> */
fill: url("#gradientElementID") blue;
fill: url("star.png") none;

/* Valeurs globales */
fill: inherit;
fill: initial;
fill: revert;
fill: revert-layer;
fill: unset;
```

### Valeurs

- `none`
  - : Aucun `fill` n'est appliqué&nbsp;; les zones à l'intérieur du contour, s'il y en a, sont transparentes.

- `context-fill`
  - : Utilise la valeur de peinture de `fill` d'un élément de contexte.

- `context-stroke`
  - : Utilise la valeur de peinture de `stroke` d'un élément de contexte.

- {{CSSxRef("color_value", "&lt;color>")}}
  - : La couleur du remplissage, comme toute valeur CSS {{CSSxRef("color_value", "&lt;color>")}} valide.

- `<url>`
  - : Une référence URL vers un élément serveur de peinture SVG, tel qu'un {{SVGElement("linearGradient")}}, {{SVGElement("radialGradient")}} ou {{SVGElement("pattern")}}. La ressource référencée peut être suivie d'une valeur `<color>` ou `none`, qui sera utilisée en repli si le serveur de peinture référencé ne se résout pas.

## Definition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les valeurs de remplissage pour les éléments SVG

Cet exemple montre comment une propriété `fill` est déclarée, l'effet de la propriété, et comment la propriété CSS `fill` prend le pas sur l'attribut `fill`.

#### HTML

Nous avons un SVG avec deux formes complexes définies à l'aide des éléments SVG {{SVGElement('polygon')}} et {{SVGElement('path')}}. Les deux ont l'attribut `fill` défini à la valeur par défaut `black`. Nous ajoutons un contour gris foncé `#666666` à l'aide de l'attribut SVG {{SVGAttr("stroke")}}, mais nous aurions pu utiliser la propriété {{CSSxRef("stroke")}}.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="#666666"
    fill="black" />
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="#666666"
    fill="black" />
</svg>
```

#### CSS

Nous définissons les valeurs de `fill` sur les formes dans le SVG.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  fill: red;
}
polygon {
  fill: hsl(0deg 100% 50% / 60%);
}
```

#### Résultat

{{EmbedLiveSample("Définir les valeurs de remplissage pour les éléments SVG", 300, 170)}}

La valeur de la propriété CSS `fill` remplace la valeur de l'attribut SVG `fill`, ce qui a pour effet de remplir les deux formes en rouge&nbsp;; le rouge du polygone est translucide.

### Utiliser les valeurs de mot-clé pour le remplissage

Cet exemple montre l'utilisation des valeurs de mot-clé pour `fill`.

#### HTML

Nous incluons trois éléments SVG {{SVGElement("path")}} et un élément {{SVGElement("marker")}} qui ajoute un {{SVGElement("circle")}} à chaque point du chemin. Nous définissons le marqueur cercle en noir avec un remplissage gris à l'aide des attributs SVG {{SVGAttr("stroke")}} et {{SVGAttr("fill")}}.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z" />
  <path
    d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z" />
  <marker
    id="circle"
    markerWidth="12"
    markerHeight="12"
    refX="6"
    refY="6"
    markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2" stroke="black" fill="grey" />
  </marker>
</svg>
```

#### CSS

Nous appliquons différentes couleurs de `stroke` et de `fill` à chaque chemin. Le premier chemin, celui avec une bordure rouge, a son `fill` défini sur `none`. Nous définissons le contour et le remplissage du marqueur cercle avec la même couleur que le contour de l'élément marqué, en utilisant la valeur `context-stroke`.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  stroke-width: 2px;
  marker: url("#circle");
}
path:nth-of-type(1) {
  stroke: red;
  fill: none;
}
path:nth-of-type(2) {
  stroke: green;
  fill: lightgreen;
}
path:nth-of-type(3) {
  stroke: blue;
  fill: lightblue;
}
circle {
  stroke: context-stroke;
  fill: context-stroke;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser les valeurs de mot-clé pour le remplissage", 300, 170)}}

Remarquez que le premier chemin a un fond transparent car le `fill` est `none`, ce qui remplace la valeur par défaut `fill` de `black`. Les cercles sont remplis avec la couleur du contour. Si vous changez la valeur en `context-fill`, les cercles seront transparents, `lightgreen` et `lightblue` au lieu de `red`, `green` et `blue`.

### Remplissages et valeurs de repli

Cet exemple montre comment inclure une valeur `url()` avec une valeur de repli comme valeur de `fill`.

#### HTML

Nous avons un SVG contenant deux étoiles {{SVGElement("polygon")}} et un {{SVGElement("linearGradient")}} qui va du vert à l'or puis au rouge.

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient">
      <stop offset="5%" stop-color="green" />
      <stop offset="50%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>
  <polygon points="80,10 50,100 120,40 40,40 110,100" />
  <polygon points="180,10 150,100 220,40 140,40 210,100" />
</svg>
```

#### CSS

Nous définissons les valeurs de `fill` sur les polygones dans le SVG, en fournissant une valeur `url()` et une valeur de repli.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
polygon:first-of-type {
  fill: url("#myGradient") magenta;
}
polygon:last-of-type {
  fill: url("#MISSINGIMAGE") magenta;
}
```

#### Résultat

{{EmbedLiveSample("Remplissages et valeurs de repli", 300, 170)}}

La première étoile a un dégradé en arrière-plan. La deuxième étoile utilise la valeur de repli, car l'élément référencé dans le `url()` n'existe pas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("fill")}}
- Propriétés de présentation&nbsp;: `fill`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill-opacity")}}, {{CSSxRef("fill-rule")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-color")}}, {{CSSxRef("stop-opacity")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
