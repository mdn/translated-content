---
title: '-webkit-mask-position-x'
slug: Web/CSS/-webkit-mask-position-x
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-position-x
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-position-x`** permet de définir la position horizontale initiale d'une image de masque.

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
-webkit-mask-position-x: 50px, 25%, -3em;

/* Valeurs globales */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: unset;
```

## Syntaxe

### Valeurs

- `<length-percentage>`
  - : Une longueur indiquant la position du bord gauche de l'image à partir du bord gauche de la boîte de remplissage (_padding_). Les pourcentages sont calculés relativement à la dimension horizontale de la boîte de remplissage. (`0%` indique que le bord gauche de l'image est aligné avec le bord gauche de la boîte de remplissage et `100%` indique que le bord droit de l'image est aligné avec le bord droit de la boîte de remplissage).
- **`left`**
  - : Un mot-clé équivalent à `0%`.
- **`right`**
  - : Un mot-clé équivalent à `100%`.
- **`center`**
  - : Un mot-clé équivalent à `50%`.

### Syntaxe formelle

{{csssyntax}}

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

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-mask-position-x")}}

## Voir aussi

- {{cssxref("-webkit-mask-position")}}
- {{cssxref("-webkit-mask-position-y")}}
- {{cssxref("-webkit-mask-origin")}}
- {{cssxref("-webkit-mask-attachment")}}
