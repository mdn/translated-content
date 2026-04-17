---
title: stroke
slug: Web/CSS/Reference/Properties/stroke
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke`** définit la couleur ou le serveur de peinture SVG utilisé pour dessiner le contour d'un élément. En tant que telle, `stroke` n'a d'effet que sur les éléments pouvant recevoir un contour (par exemple, {{SVGElement('rect')}} ou {{SVGElement('ellipse')}})&nbsp;; voir la page sur l'attribut SVG {{SVGAttr('stroke')}} pour une liste complète. Lorsqu'elle est déclarée, la valeur CSS remplace toute valeur de l'attribut SVG {{SVGAttr("stroke")}} de l'élément.

> [!NOTE]
> Selon le projet de spécification du 4 avril 2017 du [module de contour et remplissage niveau 3 <sup>(angl.)</sup>](https://drafts.csswg.org/fill-stroke-3/#stroke-shorthand), la propriété `stroke` est un raccourci pour un certain nombre d'autres propriétés de contour. En pratique, en août 2024, les navigateurs ne prennent pas en charge la définition d'autres valeurs liées au contour telles que la largeur ou les motifs de tirets via la propriété `stroke`, la traitant plutôt comme un analogue direct de l'attribut SVG {{SVGAttr("stroke")}}.

## Syntaxe

```css
/* Valeurs de couleur variées */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%));
stroke: dodgerblue;
stroke: currentColor;
stroke: transparent;
stroke: context-stroke;

/* Valeurs globales */
stroke: inherit;
stroke: initial;
stroke: revert;
stroke: revert-layer;
stroke: unset;
```

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : Définit la peinture du contour avec n'importe quelle valeur de couleur CSS valide.

- `<image>`
  - : Définit la peinture du contour avec ce que SVG appelle un [_paint server_ <sup>(angl.)</sup>](https://svgwg.org/svg2-draft/pservers.html), c'est‑à‑dire un dégradé ou un motif SVG. Les dégradés CSS ne peuvent pas être utilisés avec la propriété `stroke`.

- `context-stroke`
  - : Fait en sorte qu'un élément «&nbsp;hérite&nbsp;» sa définition de contour depuis son [_élément de contexte_ <sup>(angl.)</sup>](https://svgwg.org/svg2-draft/painting.html#TermContextElement). S'il n'existe pas d'élément de contexte valide, cette valeur entraîne l'absence de peinture pour le contour.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Contour de couleur de base

Dans cet exemple, nous créons deux formes différentes, un cercle et un rectangle, qui font partie d'un {{SVGElement("g")}} (groupe) ayant une couleur de trait grise par défaut pour les deux formes.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Avec CSS, nous appliquons ensuite une couleur violet foncé au rectangle et une couleur rouge au cercle.

```css
rect {
  stroke: rebeccapurple;
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Traçage de couleur de base", 300, 180)}}

### Contour avec motif

Cet exemple utilise le même groupe et les mêmes formes (avec le cercle légèrement déplacé) que dans l'exemple précédent, mais il inclut également un motif SVG défini.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="23">
    <circle cx="150" cy="90" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>
</svg>
```

Le motif est ensuite référencé dans le CSS avec une valeur URL pointant vers l'ID du motif. Ce motif est appliqué aux deux formes comme peinture de trait, avec le résultat montré.

```css
rect,
circle {
  stroke: url("#star");
}
```

Le motif est dessiné par rapport aux boîtes englobantes des formes, ce qui peut entraîner des interférences visuelles là où elles se chevauchent, car certaines parties du motif sont transparentes.

{{EmbedLiveSample("Traçage avec motif", 300, 180)}}

### SVG contre dégradés CSS

Ici, nous utilisons à nouveau le même balisage de groupe et de formes que dans le premier exemple, mais nous ajoutons également une définition pour un dégradé SVG.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <linearGradient id="greenwhite">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
</svg>
```

Dans le CSS, nous appliquons ce dégradé SVG au rectangle en utilisant une valeur URL pointant vers l'identifiant du dégradé linéaire. Au cercle, nous appliquons un dégradé linéaire CSS équivalent en intention au dégradé SVG.

```css
rect {
  stroke: url("#greenwhite");
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Seul le rectangle reçoit un trait en dégradé, tandis que le cercle revient à la couleur de trait grise définie par l'élément de groupe. Cela se produit parce que les dégradés CSS ne sont pas des valeurs valides pour la propriété `stroke`, tandis que les références URL aux dégradés SVG sont autorisées.

{{EmbedLiveSample("SVG contre dégradés CSS", 300, 180)}}

### Contour contextuel

On commence par un groupe contenant deux chemins rectangulaires, puis on définit un dégradé linéaire et un marqueur SVG.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="4">
    <path d="M 20,20 l 180,0 0,100 -180,0 z" />
    <path d="M 100,40 l 180,0 0,100 -180,0 z" />
  </g>
  <defs>
    <linearGradient id="orangered">
      <stop offset="0%" stop-color="orange" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
    <marker
      id="circle"
      markerWidth="20"
      markerHeight="20"
      refX="10"
      refY="10"
      markerUnits="userSpaceOnUse">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke-width="4"
        stroke="none"
        fill="none" />
    </marker>
  </defs>
</svg>
```

Nous écrivons ensuite du CSS pour ajouter un marqueur aux deux chemins, et également pour avoir une couleur de trait violet foncé. Cela est remplacé pour le deuxième chemin, auquel une valeur URL est donnée pour appliquer le dégradé orange-rouge comme trait. Enfin, nous définissons l'élément cercle dans l'élément marqueur pour avoir une valeur de trait de `context-stroke`.

```css
path {
  stroke: rebeccapurple;
  marker: url("#circle");
}
path:nth-of-type(2) {
  stroke: url("#orangered");
}
marker circle {
  stroke: context-stroke;
}
```

Parce que `stroke-context` est appliqué à un élément qui descend d'un élément SVG {{SVGElement('marker')}}, l'élément de contexte pour chaque cercle est l'élément qui a appelé l'élément `<marker>`&nbsp;; c'est-à-dire les éléments SVG {{SVGElement('path')}}. Le résultat est que les marqueurs sur le premier chemin utilisent la couleur du chemin appelant, et sont violets. Les marqueurs sur le deuxième chemin, en revanche, utilisent le même dégradé SVG orange-rouge que le chemin utilise. Ce dernier cas illustre comment les dégradés SVG sont appliqués comme un seul dégradé à l'ensemble de la forme, plutôt que d'être appliqués indépendamment à chaque partie individuelle de la forme.

{{EmbedLiveSample("Contour contextuel", 300, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke-dasharray")}}
- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("stroke-width")}}
- La propriété {{CSSxRef("paint-order")}}
- L'attribut SVG {{SVGAttr("stroke")}}
