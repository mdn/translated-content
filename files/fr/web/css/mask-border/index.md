---
title: mask-border
slug: Web/CSS/mask-border
---

{{cssref}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border`** est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de créer un masque le long de la bordure d'un élément.

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés suivantes&nbsp;:

- [`mask-border-mode`](/fr/docs/Web/CSS/mask-border-mode).
- [`mask-border-outset`](/fr/docs/Web/CSS/mask-border-outset)
- [`mask-border-repeat`](/fr/docs/Web/CSS/mask-border-repeat)
- [`mask-border-slice`](/fr/docs/Web/CSS/mask-border-slice)
- [`mask-border-source`](/fr/docs/Web/CSS/mask-border-source)
- [`mask-border-width`](/fr/docs/Web/CSS/mask-border-width)

## Syntaxe

```css
/* source | slice */
mask-border: url("border-mask.png") 25;

/* source | slice | repeat */
mask-border: url("border-mask.png") 25 space;

/* source | slice | width */
mask-border: url("border-mask.png") 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url("border-mask.png") 25 / 35px / 12px space alpha;

/* Valeurs globales */
mask-border: inherit;
mask-border: initial;
mask-border: revert;
mask-border: unset;
```

### Valeurs

- `<'mask-border-source'>`
  - : L'image source. Voir [`mask-border-source`](/fr/docs/Web/CSS/mask-border-source).
- `<'mask-border-slice'>`
  - : Les dimensions qui permettent de découper l'image source en différentes régions. Il est possible d'utiliser jusqu'à 4 valeurs. Voir [`mask-border-slice`](/fr/docs/Web/CSS/mask-border-slice).
- `<'mask-border-width'>`
  - : La largeur du masque pour la bordure. Il est possible d'utiliser jusqu'à 4 valeurs. Voir [`mask-border-width`](/fr/docs/Web/CSS/mask-border-width).
- `<'mask-border-outset'>`
  - : La distance entre le masque de la bordure et le bord extérieur de l'image. Il est possible d'utiliser jusqu'à 4 valeurs. Voir [`mask-border-outset`](/fr/docs/Web/CSS/mask-border-outset).
- `<'mask-border-repeat'>`
  - : Cette valeur indique la façon dont les régions du bord de l'image source sont ajustées afin de correspondre aux dimensions du masque. Il est possible d'utiliser jusqu'à deux valeurs. Voir [`mask-border-repeat`](/fr/docs/Web/CSS/mask-border-repeat).
- `<'mask-border-mode'>`
  - : Cette valeur définit si l'image source est traitée comme un masque de luminance ou comme un masque alpha. Voir [`mask-border-mode`](/fr/docs/Web/CSS/mask-border-mode).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Image matricielle (_bitmap_)

Dans cet exemple, on utilise un masque en losange. L'image source utilisée est un fichier PNG de 90 pixels de long et de large&nbsp;:

![](mask-border-diamonds.png)

Pour avoir un seul losange, on divise le carré en 3 (avec la valeur `30`). On utilise la valeur `round` pour que le masque soit réparti également de part et d'autre.

{{EmbedGHLiveSample("css-examples/masking/mask-border.html", '100%', 800)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`mask-border-mode`](/fr/docs/Web/CSS/mask-border-mode)
- [`mask-border-outset`](/fr/docs/Web/CSS/mask-border-outset)
- [`mask-border-repeat`](/fr/docs/Web/CSS/mask-border-repeat)
- [`mask-border-source`](/fr/docs/Web/CSS/mask-border-source)
- [`mask-border-width`](/fr/docs/Web/CSS/mask-border-width)
