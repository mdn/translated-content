---
title: mask-type
slug: Web/CSS/Reference/Properties/mask-type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-type`** s'applique à l'élément SVG {{SVGElement("mask")}}. Elle définit si le contenu du masque doit être utilisé comme un masque de _luminance_ (luminosité) ou de _alpha_ (transparence). Cette propriété peut être remplacée par la propriété {{CSSxRef("mask-mode")}}. La propriété `mask-type` n'a aucun effet sur les masques d'image ou de dégradé.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-type: luminance;
mask-type: alpha;

/* Valeurs globales */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

### Valeurs

- `alpha`
  - : Indique que les valeurs alpha (transparence) du `<mask>` doivent être utilisées.
- `luminance`
  - : Indique que [les valeurs de luminance (luminosité)](#comprendre_la_luminance) du `<mask>` doivent être utilisées.

## Description

La propriété `mask-type` est uniquement pertinente pour l'élément SVG `<mask>`. Si vous définissez `mask-type: luminance`, le masque utilisera la luminosité de chaque partie du masque ; si vous définissez `mask-type: alpha`, il utilisera la transparence ou l'opacité de chaque partie du masque.

### Comportement par défaut

Par défaut, l'élément SVG `<mask>` utilise `mask-type: luminance`. Cela signifie que la couleur et la transparence du contenu du masque affectent le masquage. L'opacité du masque dépend en partie de la luminosité de la couleur des zones opaques&nbsp;:

- Les zones blanches entièrement opaques (100% de luminance) seront masquées et visibles.
- Les zones noires (0% de luminance) ou entièrement transparentes seront découpées et invisibles.
- Les zones avec des valeurs de luminance intermédiaires seront partiellement masquées, reflétant à la fois la luminance, ou la clarté de la couleur du masque, et la transparence alpha de chaque zone du masque.

### Comprendre la luminance

L'opacité d'un masque `luminance` est déterminée par les valeurs `R`, `G`, `B` et `A` d'une couleur `rgb()` en utilisant la formule suivante&nbsp;:

`((0.2125 * R) + (0.7154 * G) + (0.0721 * B)) * A`

Par exemple, la couleur `green` (`#008000` ou `rgb(0% 50% 0% / 1)`) a une valeur de luminance d'une valeur de `35.77%`. Toute zone masquée par un masque de luminance `green` solide sera visible à `35.77%`. Si le `mask-type` est défini sur `alpha`, la même couleur `green` entièrement opaque rendra la zone masquée visible à `100%`.

Si l'élément SVG `<mask>` a `fill="rgb(0 0 0 / 0.5)"`, ce qui est un noir transparent à 50%, la forme correspondante sur l'élément masqué s'affichera à 50% d'opacité lorsque `mask-type` est défini sur `alpha` car la valeur alpha est `0.5` (50% d'opacité). Mais si le `mask-type` est par défaut ou défini sur `luminance`, la zone masquée sera entièrement découpée et invisible car sa luminance est `0`.

### Effet de `mask-mode` sur `mask-type`

Alors que la propriété `mask-type` est définie sur l'élément SVG `<mask>`, la propriété {{CSSxRef("mask-mode")}} est définie sur l'élément masqué (l'élément auquel vous appliquez le masque).
Si la source de l'image du masque n'est pas un `<mask>` SVG, cette propriété n'a aucun effet.

La valeur par défaut de `mask-mode` est `match-source`, ce qui signifie que le navigateur utilise la valeur `mask-type` de l'élément `<mask>` pour déterminer comment l'interpréter. Si `mask-mode` est défini sur une valeur autre que `match-source`, cette valeur prend le pas et remplace la valeur `mask-type` du masque appliqué.

Si le `<mask>` est défini comme source de l'image du masque, et que le `mask-mode` est défini ou par défaut sur `match-source`, le `mask-mode` se résoudra à la valeur `mask-type` de l'élément SVG `<mask>`&nbsp;: `luminance` ou `alpha`. Si elle n'est pas explicitement définie, la valeur par défaut est `luminance`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser la propriété `mask-type`

Cet exemple montre comment utiliser la propriété `mask-type` et l'effet de ses différentes valeurs.

#### HTML

Nous avons inclus deux images qui seront masquées. À l'exception de leurs noms de classe, les deux images sont identiques.
Nous avons également inclus un SVG avec deux éléments `<mask>`. À l'exception de leurs valeurs `id`, les deux masques sont également identiques&nbsp;: chacun a une forme de cœur verte et blanche et un cercle rempli de blanc et de noir semi-transparent.

```html
<img
  class="alphaMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  class="luminanceMaskType"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />

<svg height="0" width="0">
  <mask id="alphaMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="luminanceMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
    <circle
      cx="170"
      cy="170"
      r="40"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

Nous appliquons la propriété `mask-type` aux éléments SVG `<mask>`, puis nous appliquons les éléments `<mask>` et la source du masque aux images.

```css
mask#alphaMask {
  mask-type: alpha;
}

mask#luminanceMask {
  mask-type: luminance;
}

img.alphaMaskType {
  mask-image: url("#alphaMask");
}

img.luminanceMaskType {
  mask-image: url("#luminanceMask");
}
```

#### Résultat

{{EmbedLiveSample("Utiliser la propriété `mask-type`", "", 250)}}

Comme la valeur par défaut de la propriété `mask-mode` est `match-source`, le premier masque utilise uniquement les canaux alpha pour définir le masque&nbsp;: le blanc et le vert sont entièrement opaques, et les couleurs blanc et noir à 50% sont opaques à 50% car seule la valeur alpha des couleurs compte. Le deuxième exemple utilise la luminance des couleurs pour déterminer l'opacité du masque, le blanc étant plus lumineux que le vert, et le blanc semi-transparent étant plus lumineux que le noir semi-transparent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("mask")}}
- {{CSSxRef("mask-mode")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
- L'attribut SVG {{SVGAttr("mask-type")}}
