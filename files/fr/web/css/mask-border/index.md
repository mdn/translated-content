---
title: mask-border
slug: Web/CSS/mask-border
translation_of: Web/CSS/mask-border
browser-compat: css.properties.mask-border
---
{{cssref}}{{SeeCompatTable}}

La propriété CSS **`mask-border`** permet de créer un masque le long de la bordure d'un élément.

Cette propriété est une propriété [raccourcie](/fr/docs/Web/CSS/Shorthand_properties) pour les propriétés {{cssxref("mask-border-source")}}, {{cssxref("mask-border-slice")}}, {{cssxref("mask-border-width")}}, {{cssxref("mask-border-outset")}}, {{cssxref("mask-border-repeat")}} et {{cssxref("mask-border-mode")}}. Comme pour l'ensemble des propriétés raccourcies, toutes les propriétés qui ne sont pas explicitement utilisées dans la règle utilisent leur [valeur initiale](/fr/docs/Web/CSS/initial_value).

## Syntaxe

```css
/* source | slice */
mask-border: url('border-mask.png') 25;

/* source | slice | repeat */
mask-border: url('border-mask.png') 25 space;

/* source | slice | width */
mask-border: url('border-mask.png') 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url('border-mask.png') 25 / 35px / 12px space alpha;
```

### Valeurs

- `<'mask-border-source'>`
  - : L'image source, pour plus d'informations, voir {{cssxref("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : Les dimensions qui permettent de découper l'image source en différentes régions. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : La largeur du masque pour la bordure. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : La distance entre le masque de la bordure et le bord extérieur de l'image. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Cette valeur indiique la façon dont les régions du bord de l'image source sont ajustées afin de correspondre aux dimensions du masque. Il est possible d'utiliser jusqu'à deux valeurs. Voir {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Cette valeur définit si l'image source est traitée comme un masque de luminance ou comme un masque alpha. Voir {{cssxref("mask-border-mode")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Image matricielle (_bitmap_)

Dans cet exemple, on utilise un masque en losange. L'image source utilisée est un fichier PNG de 90 pixels de long et de large :

![](mask-border-diamonds.png)

#### HTML

```html
<div id="bitmap">
  Cet élément est entouré d'un masque de bordure
  matriciel. C'est pas mal.
</div>
```

#### CSS

Pour avoir un seul losange, on divise le carré en 3 (avec la valeur `30`). On utilise la valeur `round` pour que le masque soit réparti également de part et d'autre.

```css
div {
  width: 200px;
  background-color: lavender;
  border: 18px solid salmon;
  padding: 10px;

  mask-border:
    url("https://mdn.mozillademos.org/files/15836/mask-border-diamonds.png")  /* source */
    30 /         /* slice */
    36px 18px    /* width */
    round;       /* repeat */
}
```

#### Résultat

{{EmbedLiveSample("Image_matricielle_(bitmap)")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
