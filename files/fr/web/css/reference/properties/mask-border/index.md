---
title: mask-border
slug: Web/CSS/Reference/Properties/mask-border
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`mask-border`** permet de créer un masque le long de la bordure d'un élément.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("mask-border-mode")}}
- {{CSSxRef("mask-border-outset")}}
- {{CSSxRef("mask-border-repeat")}}
- {{CSSxRef("mask-border-slice")}}
- {{CSSxRef("mask-border-source")}}
- {{CSSxRef("mask-border-width")}}

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
mask-border: revert-layer;
mask-border: unset;
```

### Valeurs

- `<'mask-border-source'>`
  - : L'image source. Voir {{CSSxRef("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : Les dimensions qui permettent de découper l'image source en différentes régions. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{CSSxRef("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : La largeur du masque pour la bordure. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{CSSxRef("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : La distance entre le masque de la bordure et le bord extérieur de l'image. Il est possible d'utiliser jusqu'à 4 valeurs. Voir {{CSSxRef("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : Cette valeur indique la façon dont les régions du bord de l'image source sont ajustées afin de correspondre aux dimensions du masque. Il est possible d'utiliser jusqu'à deux valeurs. Voir {{CSSxRef("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : Cette valeur définit si l'image source est traitée comme un masque de luminance ou comme un masque alpha. Voir {{CSSxRef("mask-border-mode")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une image matricielle (_bitmap_)

Dans cet exemple, on utilise un masque en losange. L'image source utilisée est un fichier `.png` de 90 pixels de long et de large&nbsp;:

<img src="https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png" alt="L'image utilisée pour les exemples de masque sur cette page. Le masque est un carré transparent comportant trois rangées de trois losanges chacune. Les losanges sont d'une teinte de gris très claire, presque blanche. La partie centrale entre les losanges est également gris uni. Les parties entre l'extérieur des losanges et le bord de l'image sont transparentes." loading="lazy" style="background-color: black;">

Pour avoir un seul losange, on divise le carré en 3 (avec la valeur `30`). On utilise la valeur `round` pour que le masque soit réparti également de part et d'autre.

```html live-sample___mask-border-example
<div class="masked">
  Cet élément est entouré par une bordure de masque basée sur une image
  matricielle&nbsp;! Plutôt sympa, n'est-ce pas&nbsp;?
</div>
```

```css-nolint live-sample___mask-border-example
.masked {
  width: 200px;
  background-color: lavender;
  border: 18px solid salmon;
  padding: 10px;

  -webkit-mask-box-image: url("https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png")
    30 fill /  /* tranche */
    20px /     /* largeur */
    1px        /* décalage */
    round;     /* répétition */

  mask-border:
    url("https://mdn.github.io/shared-assets/images/examples/mask-border-diamonds.png")
    30 fill /  /* tranche */
    20px /     /* largeur */
    1px        /* décalage */
    round;     /* répétition */
}
```

{{EmbedLiveSample("mask-border-example", "", 170)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`mask-border-mode`](/fr/docs/Web/CSS/Reference/Properties/mask-border-mode)
- [`mask-border-outset`](/fr/docs/Web/CSS/Reference/Properties/mask-border-outset)
- [`mask-border-repeat`](/fr/docs/Web/CSS/Reference/Properties/mask-border-repeat)
- [`mask-border-source`](/fr/docs/Web/CSS/Reference/Properties/mask-border-source)
- [`mask-border-width`](/fr/docs/Web/CSS/Reference/Properties/mask-border-width)
