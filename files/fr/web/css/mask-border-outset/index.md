---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-outset
---
{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-outset`** indique la distance entre le [masque de la bordure](/fr/docs/Web/CSS/mask-border) et la boîte de la bordure.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length> */
mask-border-outset: 1rem;

/* Valeur numérique */
/* Type <number> */
mask-border-outset: 1.5;

/* Décalage vertical | horizontal */
mask-border-outset: 1 1.2;

/* haut | horizontal | bas */
mask-border-outset: 30px 2 45px;

/* haut | droit | bas | gauche */
mask-border-outset: 7px 12px 14px 5px;

/* Valeurs globales */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: unset;
```

La propriété `mask-border-outset` peut être utilisée avec une, deux, trois ou quatre valeurs. Chaque valeur peut être de type {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;number&gt;")}}. Les valeurs négatives ne sont pas autorisées.

- Si une seule valeur est utilisée, c'est ce décalage qui est utilisé pour chaque côté.
- Lorsque deux valeurs sont utilisées, la première indique le décalage en haut et en bas et la seconde indique le décalage à gauche et à droite.
- Lorsque trois valeurs sont utilisées, la première indique le décalage avec le côté haut, la deuxième avec le côté gauche et le côté droit et la troisième le décalage avec le côté bas.
- Lorsque quatre valeurs sont indiquées, elles s'appliquent respectivement aux côtés haut, droit, bas et gauche (c'est-à-dire dans le sens des aiguilles d'une montre).

### Valeurs

- {{cssxref("&lt;length&gt;")}}
  - : La distance, avec une dimension, pour le décalage du masque.
- {{cssxref("&lt;number&gt;")}}
  - : Le décalage du masque, exprimé comme un multiple de {{cssxref("border-width")}}.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#propdef-mask-border-outset", "mask-border-outset")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatiblité des navigateurs

TBD
