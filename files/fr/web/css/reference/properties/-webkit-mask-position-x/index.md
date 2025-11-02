---
title: -webkit-mask-position-x
slug: Web/CSS/Reference/Properties/-webkit-mask-position-x
original_slug: Web/CSS/-webkit-mask-position-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

La propriété **`-webkit-mask-position-x`** permet de définir la position horizontale initiale d'une image de masque.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* Valeurs proportionnelles */
/* Type <percentage>        */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* Valeurs de longueur */
/* Type <length>       */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Gestion de plusieurs valeurs */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* Valeurs globales */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: revert;
-webkit-mask-position-x: revert-layer;
-webkit-mask-position-x: unset;
```

### Valeurs

- `<length-percentage>`
  - : Une longueur indiquant la position du bord gauche de l'image à partir du bord gauche de la boîte de remplissage (_padding_). Les pourcentages sont calculés relativement à la dimension horizontale de la boîte de remplissage. (`0%` indique que le bord gauche de l'image est aligné avec le bord gauche de la boîte de remplissage et `100%` indique que le bord droit de l'image est aligné avec le bord droit de la boîte de remplissage).
- **`left`**
  - : Un mot-clé équivalent à `0%`.
- **`right`**
  - : Un mot-clé équivalent à `100%`.
- **`center`**
  - : Un mot-clé équivalent à `50%`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-mask-position-x = [ <length-percentage> | left | center | right ]#`)}}

## Exemples

```css
.exempleUn {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exempleDeux {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("mask-position", "-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-y")}}
- {{cssxref("mask-origin", "-webkit-mask-origin")}}
