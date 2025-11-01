---
title: -webkit-mask-position-y
slug: Web/CSS/Reference/Properties/-webkit-mask-position-y
original_slug: Web/CSS/-webkit-mask-position-y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

La propriété **`-webkit-mask-position-y`** permet de définir la position verticale initiale d'une image de masque.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-mask-position-y: top;
-webkit-mask-position-y: center;
-webkit-mask-position-y: bottom;

/* Valeurs proportionnelles */
/* Type <percentage>        */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* Valeurs de longueur */
/* Type <length>       */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* Gestion de plusieurs valeurs */
-webkit-mask-position-y:
  50px,
  25%,
  -3em;

/* Valeurs globales */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: revert;
-webkit-mask-position-y: revert-layer;
-webkit-mask-position-y: unset;
```

### Valeurs

- `<length-percentage>`
  - : Une longueur indiquant la position du haut de l'image à partir du bord haut de la boîte de remplissage (_padding_). Les pourcentages sont calculés relativement à la dimension verticale de la boîte de remplissage (`0%` indique que le bord haut de l'image est aligné avec le bord haut de la boîte de remplissage et `100%` indique que le bord bas de l'image est aligné avec le bord bas de la boîte de remplissage).
- `<length>`
  - : Une longueur, mesurée à partir du bord haut de la boîte de remplissage (_padding_), qui indique la position verticale de l'image.
- **`top`**
  - : Un mot-clé équivalent à `0%`.
- **`bottom`**
  - : Un mot-clé équivalent à `100%`.
- **`center`**
  - : Un mot-clé équivalent à `50%`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-mask-position-y = [ <length-percentage> | top | center | bottom ]#`)}}

## Exemples

```css
.exempleUn {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: bottom;
}

.exempleDeux {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("mask-position", "-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-x")}}
- {{cssxref("mask-origin", "-webkit-mask-origin")}}
