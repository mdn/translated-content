---
title: fill-opacity
slug: Web/CSS/Reference/Properties/fill-opacity
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`fill-opacity`** définit l'opacité de l'opération de peinture (couleur, dégradé, motif, etc.) appliquée aux formes SVG ou aux éléments de contenu textuel SVG pour remplir l'élément. Cette propriété définit uniquement l'opacité du `fill` de l'élément&nbsp;; elle n'affecte pas le contour. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("fill-opacity")}} de l'élément.

> [!NOTE]
> La propriété `fill-opacity` ne s'applique qu'aux éléments {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}, {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs numériques et en pourcentage */
fill-opacity: 0.2;
fill-opacity: 20%;

/* Valeurs globales */
fill-opacity: inherit;
fill-opacity: initial;
fill-opacity: revert;
fill-opacity: revert-layer;
fill-opacity: unset;
```

### Valeurs

Les valeurs de type {{CSSxRef("number")}} et {{CSSxRef("percentage")}} indiquent l'opacité du `fill` de l'élément.

- {{CSSxRef("number")}}
  - : Une valeur numérique comprise entre `0` et `1`, inclus.

- {{CSSxRef("percentage")}}
  - : Une valeur en pourcentage comprise entre `0%` et `100%`, inclus.

Avec `0` ou `0%`, l'élément est entièrement transparent. Avec `1` ou `100%`, l'élément est entièrement opaque. Avec des valeurs intermédiaires, l'élément est semi-transparent, le contenu situé derrière l'élément étant visible.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'opacité de remplissage des éléments SVG

Cet exemple illustre le cas d'utilisation de base de `fill-opacity`, et comment la propriété CSS `fill-opacity` prend le pas sur l'attribut `fill-opacity` et n'a aucun effet sur un éventuel `stroke` appliqué à une forme.

#### HTML

Nous incluons plusieurs éléments graphiques SVG différents et définissons l'attribut `fill-opacity` de chacun à `1` (sauf `line`), ce qui signifie que le remplissage de chaque élément est opaque. L'attribut SVG `fill-opacity` ne s'applique pas à {{SVGElement("line")}}.

```html
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="30" fill-opacity="1" />
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill-opacity="1" />
  <circle cx="25" cy="75" r="20" fill-opacity="1" />
  <ellipse cx="75" cy="75" rx="20" ry="10" fill-opacity="1" />
  <line x1="50" x2="90" y1="40" y2="60" stroke="black" stroke-width="5" />
  <polyline
    points="60 90 65 100 70 95 75 110 80 105 85 120 90 115 95 130 100 125"
    fill-opacity="1" />
  <path d="M20,130 Q40,105 50,130 T90,130" fill-opacity="1" />
</svg>
```

#### CSS

Avec CSS, nous utilisons la propriété `fill-opacity` pour remplacer la valeur de l'attribut SVG {{SVGAttr("fill-opacity")}}, en donnant à chaque élément SVG une valeur différente.

Nous ajoutons un {{CSSxRef("stroke")}} au cercle et à l'ellipse, pour montrer que l'opacité du contour n'est pas affectée par la propriété `fill-opacity`.

D'autres styles SVG sont appliqués, notamment une image d'arrière-plan pour permettre de mieux voir l'opacité de chaque élément. Ceux-ci ne sont pas affichés ici pour plus de concision.

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  background: repeating-linear-gradient(
    to bottom right,
    transparent 0 10px,
    #cccccc 10px 11px
  );
}
```

```css
svg > * {
  fill: black;
}
rect:last-of-type {
  fill-opacity: 0.1;
}
circle {
  fill-opacity: 0.6;
}
ellipse {
  fill-opacity: 40%;
}
line {
  fill-opacity: 10%;
}
polyline {
  fill-opacity: 50%;
}
path {
  fill-opacity: 0.5;
}

circle,
ellipse {
  stroke: black;
  stroke-width: 3px;
}
```

#### Résultat

{{EmbedLiveSample("Définir l'opacité de remplissage des éléments SVG", 300, 360)}}

Seuls deux éléments sont entièrement opaques&nbsp;: le premier rectangle et la ligne. Le premier rectangle n'est ciblé par aucun sélecteur, donc aucun CSS n'est appliqué et le `fill` est totalement opaque. La `line` est ciblée, avec `fill-opacity: 10%`. Cependant, la ligne n'a pas d'opération de peinture de remplissage — seul le `stroke` est visible — donc la déclaration n'a aucun effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("fill")}}
- Propriétés de présentation&nbsp;: `fill-opacity`, {{CSSxRef("clip-rule")}}, {{CSSxRef("color-interpolation-filters")}}, {{CSSxRef("fill")}}, {{CSSxRef("fill-rule")}}, {{CSSxRef("marker-end")}}, {{CSSxRef("marker-mid")}}, {{CSSxRef("marker-start")}}, {{CSSxRef("shape-rendering")}}, {{CSSxRef("stop-color")}}, {{CSSxRef("stop-opacity")}}, {{CSSxRef("stroke")}}, {{CSSxRef("stroke-dasharray")}}, {{CSSxRef("stroke-dashoffset")}}, {{CSSxRef("stroke-linecap")}}, {{CSSxRef("stroke-linejoin")}}, {{CSSxRef("stroke-miterlimit")}}, {{CSSxRef("stroke-opacity")}}, {{CSSxRef("stroke-width")}}, {{CSSxRef("text-anchor")}} et {{CSSxRef("vector-effect")}}
- La propriété {{CSSxRef("opacity")}}
- La propriété {{CSSxRef("background-color")}}
- Le type de donnée {{CSSxRef("color_value", "&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
