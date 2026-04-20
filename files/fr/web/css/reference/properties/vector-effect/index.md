---
title: Propriété CSS `vector-effect`
short-title: vector-effect
slug: Web/CSS/Reference/Properties/vector-effect
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`vector-effect`** supprime certains [effets de transformation](/fr/docs/Web/SVG/Reference/Attribute/transform) dans SVG, permettant ainsi des effets comme une route sur une carte restant de la même largeur quel que soit le zoom de la carte, ou permettant à une légende de diagramme de conserver sa position et sa taille indépendamment des autres transformations. Elle ne peut être utilisée qu'avec des éléments SVG qui acceptent l'attribut {{SVGAttr("vector-effect")}}. Lorsqu'elle est utilisée, la valeur CSS remplace toute valeur de l'attribut `vector-effect` de l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
vector-effect: none;
vector-effect: non-scaling-stroke;

/* Valeurs globales */
vector-effect: inherit;
vector-effect: initial;
vector-effect: revert;
vector-effect: revert-layer;
vector-effect: unset;
```

### Valeurs

- `none`
  - : Aucun effet vectoriel n'est appliqué à l'élément, ce qui signifie qu'il sera entièrement affecté par les transformations comme d'habitude.
- `non-scaling-stroke`
  - : La largeur du trait dessiné de l'élément sera physiquement égale à sa largeur de trait définie, même si l'élément a été agrandi ou réduit en taille en raison des transformations de lui-même ou de son système de coordonnées. C'est le cas que l'élément soit mis à l'échelle avec des transformations ou par le redimensionnement physique de l'image entière.

> [!NOTE]
> La spécification définit trois autres valeurs, `non-scaling-size`, `non-rotation` et `fixed-position`, mais elles n'ont aucune implémentation et sont considérées comme à risque.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Empêcher la mise à l'échelle des traits SVG avec CSS

Ici, nous commençons avec une image SVG de 200x100 qui contient deux rectangles à l'intérieur d'un groupe. Le groupe est agrandi et tourné. Le deuxième des deux rectangles a une classe `thinned`.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="scale(2.3) rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect x=" 60" y="20" width="30" height="60" />
    <rect x="110" y="20" width="30" height="60" class="thinned" />
  </g>
</svg>
```

À cette image SVG, nous appliquons `width: 500px` pour la rendre plus grande que sa taille intrinsèque, et nous définissons les {{SVGElement("rect")}} de classe `thinned` pour avoir des traits non mis à l'échelle.

```css
svg {
  width: 500px;
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Le résultat est que le premier des deux rectangles a une largeur de trait apparente (visuelle) d'environ 17, tandis que le deuxième rectangle a toujours une largeur de trait apparente de 3 malgré le fait qu'il ait été agrandi de la même manière que le premier rectangle.

{{EmbedLiveSample("Empêcher la mise à l'échelle des traits SVG avec CSS", 500, 250)}}

### Remplacer les valeurs de mise à l'échelle des traits SVG avec CSS

Dans ce cas, nous commençons avec une image SVG similaire à celle utilisée dans l'exemple précédent. Ici, l'élément {{SVGElement("g")}} est tourné comme auparavant, mais aucune mise à l'échelle n'est appliquée. Les éléments `<rect>` ont un origine commune pour leurs transformations et ont leurs attributs SVG `vector-effect` définis sur une valeur de `none`.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <g
    transform="rotate(23)"
    transform-origin="100 50"
    stroke-width="3"
    stroke="orange"
    fill="#ddeeff88">
    <rect
      x=" 60"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none" />
    <rect
      x="110"
      y="20"
      width="30"
      height="60"
      transform-origin="100 50"
      vector-effect="none"
      class="thinned" />
  </g>
</svg>
```

Comme auparavant, le SVG est agrandi par rapport à sa taille intrinsèque en utilisant CSS. Cette fois, la mise à l'échelle est appliquée directement aux éléments `<rect>`, et le deuxième rectangle est défini pour avoir ses traits non mis à l'échelle.

```css
svg {
  width: 500px;
}
svg rect {
  transform: scale(2.3);
}
svg rect.thinned {
  vector-effect: non-scaling-stroke;
}
```

Le résultat est visuellement identique à celui de l'exemple précédent. Ce que nous pouvons voir, c'est que la valeur de l'attribut `none` est remplacée par la valeur CSS `non-scaling-stroke`, et que les effets vectoriels sont respectés même si la mise à l'échelle a été effectuée directement sur le `<rect>` plutôt que sur son élément parent `<g>`.

{{EmbedLiveSample("Remplacer les valeurs de mise à l'échelle des traits SVG avec CSS", 500, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke")}}
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
- L'attribut SVG {{SVGAttr("vector-effect")}}
