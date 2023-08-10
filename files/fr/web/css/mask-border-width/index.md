---
title: mask-border-width
slug: Web/CSS/mask-border-width
---

{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-width`** définit la largeur [du masque de bordure](/fr/docs/Web/CSS/mask-border) d'un élément.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-border-width: auto;

/* Valeur de longueur */
/* Type <length> */
mask-border-width: 1rem;

/* Valeur proportionnelle */
/* Type <percentage> */
mask-border-width: 25%;

/* Valeur numérique */
/* Type <number> */
mask-border-width: 3;

/* vertical | horizontal */
mask-border-width: 2em 3em;

/* haut | horizontal | bas */
mask-border-width: 5% 15% 10%;

/* haut | droit | bas | gauche */
mask-border-width: 5% 2em 10% auto;

/* Valeurs globales */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: unset;
```

La propriété `mask-border-width` peut être définie avec une, deux, trois ou quatre valeurs parmi celles de la liste ci-après.

- Lorsqu'une seule valeur est indiquée, elle est utilisée comme largeur pour les quatre côtés.
- Lorsque deux valeurs sont fournies, la première indique la largeur pour les côtés bas et haut et la deuxième la largeur pour les côtés gauche et droite.
- Lorsque trois valeurs sont fournies, la première est appliquée au côté haut, la deuxième au côté gauche et droit et la troisième au côté bas.
- Lorsque quatre valeurs sont fournies, elles s'appliquent respectivement aux côtés haut, droit, bas et gauche (c'est-à-dire dans l'ordre des aiguilles d'une montre).

### Valeurs

- `<length-percentage>`
  - : La largeur du masque de bordure, indiquée avec une valeur de type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}}. Les pourcentages sont relatifs à la largeur de la zone de bordure pour les décalages horizontaux et à la hauteur de la zone de bordure pour les décalages verticaux. Cette valeur ne peut pas être négative.
- `<number>`
  - : La largeur du masque de bordure comme multiple de la largeur {{cssxref("border-width")}}. Cette valeur ne peut pas être négative.
- `auto`
  - : La largeur du masque de bordure est égale à la largeur ou à la hauteur intrinsèque de la valeur {{cssxref("mask-border-slice")}} correspondante. Si l'image ne possède pas de dimension intrinsèque, c'est la valeur `border-width` qui est utilisée à la place.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
