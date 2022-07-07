---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-repeat
---
{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-repeat`** indique la façon dont les régions du bord du [masque](/fr/docs/Web/CSS/mask-border) sont ajustées pour correspondre aux dimensions de la bordure de l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* vertical | horizontal */
mask-border-repeat: round stretch;

/* Valeurs globales */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: unset;
```

La propriété `mask-border-repeat` peut être utilisée avec une ou deux valeurs parmi celles de la liste ci-après.

- Lorsqu'une seule valeur est fournie, le même comportement est utilisé pour les quatre côtés.
- Lorsque deux valeurs sont indiquées, la première valeur s'applique aux côtés haut et bas et la deuxième aux côtés gauche et droit.

### Values

- `stretch`
  - : Les bords de l'image source sont étirés afin de remplir l'espace entre chaque bordure.
- `repeat`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments répétés peuvent être rognés afin que le remplissage soit exact.
- `round`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments peuvent être étirés afin que le remplissage soit exact.
- `space`
  - : Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. L'espace supplémentaire est réparti entre les fragments répétés pour que le remplissage soit exact.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#propdef-mask-border-repeat", "mask-border-repeat")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

TBD
