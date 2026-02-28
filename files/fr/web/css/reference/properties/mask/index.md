---
title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`mask`** applique un masque à un élément (partiellement ou totalement) en masquant ou en rognant une zone définie de l'image. Il s'agit d'une propriété raccourcie pour toutes les propriétés [`mask-*`](#propriétés_constitutives). La propriété accepte une ou plusieurs valeurs séparées par des virgules, où chaque valeur correspond à un [`<mask-layer>`](#mask-layer).

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("mask-clip")}}
- {{CSSxRef("mask-composite")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("mask-mode")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-position")}}
- {{CSSxRef("mask-repeat")}}
- {{CSSxRef("mask-size")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask: none;

/* Valeurs de type <image> */
mask: url("mask.png"); /* Image matricielle utilisée comme masque */
mask: url("masks.svg#star"); /* Élément d'un SVG utilisé comme masque */

/* Valeurs combinées */
mask: url("masks.svg#star") luminance; /* Élément d'un SVG utilisé comme masque de luminance */
mask: url("masks.svg#star") 40px 20px; /* Élément d'un SVG utilisé comme masque positionné à 40px du haut et 20px de la gauche */
mask: url("masks.svg#star") 0 0/50px 50px; /* Élément d'un SVG utilisé comme masque avec une hauteur et largeur de 50px */
mask: url("masks.svg#star") repeat-x; /* Élément d'un SVG utilisé comme masque répété horizontalement */
mask: url("masks.svg#star") stroke-box; /* Élément d'un SVG utilisé comme masque étendu à la boîte contenu dans le contour */
mask: url("masks.svg#star") exclude; /* Élément d'un SVG utilisé comme masque et combiné avec l'arrière-plan pour les parties qui ne se chevauchent pas */

/* Masques multiples */
mask:
  url("masks.svg#star") left / 16px repeat-y,
  /* Masque de 16px de large sur le côté gauche */ url("masks.svg#circle")
    right / 16px repeat-y; /* Masque de 16px de large sur le côté droit */

/* Valeurs globales */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;
```

### Valeurs

- `<mask-layer>`
  - : Une ou plusieurs couches de masque séparées par des virgules, composées des éléments suivants&nbsp;:
    - `<mask-reference>`
      - : Cette valeur permet de définir l'image source pour le masque. Voir {{CSSxRef("mask-image")}}.
    - `<masking-mode>`
      - : Cette valeur définit le mode du masque. Voir {{CSSxRef("mask-mode")}}.
    - `<position>`
      - : Cette valeur définit la position de l'image du masque. Voir {{CSSxRef("mask-position")}}.
    - `<bg-size>`
      - : Cette valeur définit la taille de l'image du masque. Voir {{CSSxRef("mask-size")}}.
    - `<repeat-style>`
      - : Cette valeur définit le mode de répétition de l'image du masque. Voir {{CSSxRef("mask-repeat")}}.
    - `<geometry-box>`
      - : Si une seule valeur `<geometry-box>` est fournie, elle définira les valeurs de {{CSSxRef("mask-origin")}} et {{CSSxRef("mask-clip")}}. Si deux valeurs sont fournies, la première sera utilisée pour définir {{CSSxRef("mask-origin")}} et la deuxième pour définir {{CSSxRef("mask-clip")}}.
    - `<geometry-box> | no-clip`
      - : Cette valeur définit la zone qui est impactée par l'image du masque. Voir {{CSSxRef("mask-clip")}}.
    - `<compositing-operator>`
      - : Cette valeur définit l'opération de composition qui est utilisée par rapport à la couche de masque actuelle. Voir {{CSSxRef("mask-composite")}}.

## Description

La propriété raccourcie `mask` applique un masque sur une partie ou la totalité de l'élément auquel elle est appliquée. Les parties de l'élément qui ont un masque, visibles ou partiellement affichées dépendent soit de l'opacité (canal alpha du masque), soit de la luminosité (luminance) du masque. En masquage alpha, les zones opaques du masque révèlent l'élément, et les zones transparentes le masquent. En masquage luminance, les zones claires et opaques du masque révèlent l'élément, et les zones sombres ou transparentes le masquent.

Bien que toutes les propriétés constitutives du masque ne doivent pas être déclarées, toute valeur omise prendra sa valeur initiale, qui est&nbsp;:

```css
mask-image: none;
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;
```

Dans chaque `<mask-layer>`, la composante `mask-size` doit être placée après la valeur `mask-position`, séparée par une barre oblique (`/`).

Si deux valeurs `<geometry-box>` sont présentes, la première est la valeur de `mask-origin`, la seconde celle de `mask-clip`. Si une valeur `<geometry-box>` et le mot-clé `no-clip` sont présents, `<geometry-box>` est la valeur de la propriété `mask-origin`, car `no-clip` n'est valide que pour la propriété `mask-clip`. Dans ce cas, l'ordre des deux valeurs n'a pas d'importance. Si une seule valeur `<geometry-box>` est présente (sans mot-clé `no-clip` défini), cette valeur est utilisée pour `mask-origin` et `mask-clip`.

Comme la propriété raccourcie `mask` réinitialise toutes les propriétés `mask-border-*` à leur valeur `initial`, vous devez déclarer ces propriétés — ou la propriété raccourcie {{CSSxRef("mask-border")}} — après toute déclaration de `mask`. Lorsque vous définissez `mask` dans votre bloc de déclaration, vous définissez aussi implicitement les propriétés suivantes&nbsp;:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Pour cette raison, la spécification recommande d'utiliser la propriété raccourcie `mask` plutôt que les propriétés individuelles pour remplacer tout masque défini plus tôt dans la cascade. Cela garantit que `mask-border` a également été réinitialisé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Appliquez un masque à une image

Dans cet exemple, un masque est appliqué à une image à l'aide d'un dégradé conique répété généré en CSS comme source de masque. Nous montrons également le dégradé comme image d'arrière-plan pour comparaison.

#### HTML

Nous incluons un élément HTML {{HTMLElement("img")}} et un élément HTML {{HTMLElement("div")}} vide.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau des fiertés" />
<div></div>
```

#### CSS

Nous appliquons les mêmes valeurs {{CSSxRef("border")}}, {{CSSxRef("padding")}} et dimensions sur `<img>` et `<div>`.

```css
img,
div {
  border: 20px dashed rebeccapurple;
  box-sizing: content-box;
  padding: 20px;
  height: 220px;
  width: 220px;
}
```

Nous appliquons ensuite un masque à l'élément `<img>`. La propriété `mask-image` est générée à l'aide de la fonction {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}. Nous définissons un dégradé de `100px` par `100px`, qui se répète à partir du coin supérieur gauche de la `content-box` de l'image. Nous incluons deux valeurs `<geometry-box>`&nbsp;; la première définit la valeur de `mask-origin` et la seconde celle de la propriété `mask-clip`. Le dégradé va du transparent au solide `lightgreen`. Nous avons utilisé `lightgreen` pour montrer que ce n'est pas la couleur du masque qui importe, mais sa transparence.

```css
img {
  mask: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

Enfin, nous utilisons la même valeur pour la propriété raccourcie {{CSSxRef("background")}} de l'élément `<div>`, comme pour le `mask`.

```css
div {
  background: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

#### Résultats

{{EmbedLiveSample("Appliquez un masque à une image", "", 630)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("filter")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [d'application de masque CSS](/fr/docs/Web/CSS/Guides/Masking)
- L'attribut SVG {{SVGAttr("mask")}}
- [Appliquer des effets SVG à du contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
