---
title: Propriété CSS `mask-mode`
short-title: mask-mode
slug: Web/CSS/Reference/Properties/mask-mode
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-mode`** détermine si le masque défini par {{CSSxRef("mask-image")}} est considéré comme un masque de luminance ou un masque alpha (transparence).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Valeurs multiples */
mask-mode: alpha, match-source;

/* Valeurs globales */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

### Valeurs

La propriété `mask-mode` peut prendre plusieurs valeurs de mot-clé `<masking-mode>` séparées par des virgules, y compris&nbsp;:

- `alpha`
  - : Indique que les valeurs du canal alpha (transparence) de l'image de masque doivent être utilisées.

- `luminance`
  - : Indique que les valeurs de [luminance (luminosité)](#comprendre_la_luminance) de l'image de masque doivent être utilisées.

- `match-source`
  - : Indique que le type de masque est déterminé par la source. Il s'agit de la valeur par défaut de la propriété.
    - Si la propriété {{CSSxRef("mask-image")}} fait référence à un élément SVG {{SVGElement("mask")}}, la valeur de sa propriété {{CSSxRef("mask-type")}} est utilisée, ou son attribut {{SVGAttr("mask-type")}}, si présent. Si aucun n'est défini explicitement, cette valeur par défaut est `luminance`.
    - Si la source de l'image de masque est une valeur de type {{CSSxRef("&lt;image&gt;")}} ou {{CSSxRef("&lt;gradient&gt;")}}, les valeurs `alpha` de l'image de masque sont utilisées.

## Description

Un masque transfère sa transparence et, en fonction du type de masque, sa luminance à l'élément qu'il masque.
Si le masque est de type {{CSSxRef("image")}}, par défaut, les valeurs alpha de l'image de masque déterminent la visibilité de chaque partie de l'élément masqué&nbsp;: là où le masque est opaque, la partie correspondante de l'élément masqué est visible&nbsp;; là où le masque est translucide, l'élément l'est également, ces zones de l'élément étant masquées. C'est le comportement par défaut pour les masques `<image>` lorsque la propriété `mask-mode` est définie sur ou par défaut à `match-source`, et c'est toujours le cas lorsque le `mask-mode` est explicitement défini sur `alpha`.

### Comprendre la luminance

Dans le cas des masques `luminance`, la visibilité de l'élément masqué dépend à la fois de l'opacité du masque et de la luminosité de la couleur des zones opaques. Les zones opaques blanches (100% de luminance) (alpha = 1) seront masquées et visibles, et les zones noires (0% de luminance) transparentes (alpha = 0) seront découpées. Les zones avec des couleurs intermédiaires entre le blanc et le noir et avec une opacité partielle seront partiellement masquées, reflétant la luminance et la transparence alpha de chaque couleur composant le masque.

L'opacité d'un masque `luminance` est déterminée par les valeurs `R`, `G`, `B` et `A` d'une couleur `rgb()` en utilisant la formule&nbsp;:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Par exemple, la couleur `green` est `#008000` ou `rgb(0% 50% 0% / 1)`. Dans un masque `luminance`, toute zone masquée par un masque `green` solide sera `35,77%` opaque. Si le `mask-mode` pour ce masque est défini sur `alpha`, puisque `green` est une couleur entièrement opaque, la zone masquée sera `100%` opaque.

### Valeurs multiples

Chaque valeur de `mask-mode` est une liste de valeurs séparées par des virgules. Lorsque plusieurs valeurs sont présentes, chaque valeur correspond à un calque de masque dans la même position dans la propriété {{CSSxRef("mask-image")}}. Les valeurs définissent si les images de masque associées sont traitées comme un masque `luminance` ou `alpha`.

### Comprendre `match-source`

Dans le cas de `match-source`, l'utilisation de `luminance` ou `alpha` dépend du mode de masque de la source du masque. Si les valeurs de la propriété `mask-image` font référence à un élément SVG {{SVGElement("mask")}}, la valeur de la propriété {{CSSxRef("mask-type")}} de l'élément `<mask>` est utilisée. S'il n'y a pas de propriété CSS `mask-type` définie sur l'élément `<mask>`, la valeur de l'attribut {{SVGAttr("mask-type")}} de l'élément `<mask>` est utilisée, si elle est présente et prise en charge. Si aucune n'est définie explicitement, cette valeur par défaut est `luminance`&nbsp;; mais uniquement dans le cas de l'élément `<mask>` en tant que source de masque. Sinon, comme mentionné précédemment, si la source de l'image de masque est une {{CSSxRef("image")}}, plutôt qu'un `<mask>` SVG, les valeurs `alpha` de l'image du calque de masque sont utilisées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation et valeurs

Cet exemple démontre l'utilisation de base et les différentes valeurs de la propriété `mask-mode`.

#### HTML

Nous incluons trois éléments `<div>`, afin de pouvoir démontrer les trois valeurs énumérées du mot-clé `mask-mode`.

```html
<div class="alpha">ALPHA</div>
<div class="luminance">LUMINANCE</div>
<div class="matchSource">MATCH-SOURCE</div>
```

#### CSS

Chaque `<div>` est fourni avec le même arrière-plan et la même image de masque. La seule différence entre chaque `<div>` est la valeur de la propriété `mask-mode`&nbsp;:

```css
div {
  background: blue linear-gradient(red, blue);
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mdn.svg");
}

.alpha {
  mask-mode: alpha;
}

.luminance {
  mask-mode: luminance;
}

.matchSource {
  mask-mode: match-source;
}
```

```css hidden
div {
  width: 227px;
  height: 200px;
  float: left;
  text-align: center;
  line-height: 65px;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-family: sans-serif;
}
```

#### Résultats

{{EmbedLiveSample("Utilisation et valeurs", "", 250)}}

Parce que la source du masque est une `<image>` et non un `<mask>` SVG, la valeur `match-source` se résout en `alpha`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("mask-type")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété raccourcie {{CSSxRef("mask")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
