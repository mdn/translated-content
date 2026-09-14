---
title: Propriété CSS `mask-border-mode`
short-title: mask-border-mode
slug: Web/CSS/Reference/Properties/mask-border-mode
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-mode`** définit le mode de fusion utilisé pour [le masque de bordure](/fr/docs/Web/CSS/Reference/Properties/mask-border).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-border-mode: luminance;
mask-border-mode: alpha;

/* Valeurs globales */
mask-border-mode: inherit;
mask-border-mode: initial;
mask-border-mode: revert;
mask-border-mode: revert-layer;
mask-border-mode: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `luminance`
  - : Les valeurs de luminance provenant de l'image de masque sont utilisées pour le masque.
- `alpha`
  - : Les valeurs du canal alpha provenant de l'image de masque sont utilisées pour le masque.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- La propriété {{CSSxRef("mask-mode")}}
- La propriété {{CSSxRef("mask-type")}}
- [Transparence alpha contre luminance](/fr/docs/Web/CSS/Guides/Masking/Introduction#transparence_alpha_contre_luminance)
- La propriété raccourcie {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-outset")}}
- La propriété {{CSSxRef("mask-border-repeat")}}
- La propriété {{CSSxRef("mask-border-source")}}
- La propriété {{CSSxRef("mask-border-width")}}
- La propriété {{CSSxRef("mask-mode")}}
- Le module de [masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
