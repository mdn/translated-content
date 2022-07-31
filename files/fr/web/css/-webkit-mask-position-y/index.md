---
title: '-webkit-mask-position-y'
slug: Web/CSS/-webkit-mask-position-y
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-position-y
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-position-y`** permet de définir la position verticale initiale d'une image de masque.

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
-webkit-mask-position-y: 50px, 25%, -3em;

/* Valeurs globales */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: unset;
```

## Syntaxe

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

### Syntaxe formelle

{{csssyntax}}

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

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-mask-position-y")}}

## Voir aussi

- {{cssxref("-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-x")}}
- {{cssxref("-webkit-mask-origin")}}
- {{cssxref("-webkit-mask-attachment")}}
