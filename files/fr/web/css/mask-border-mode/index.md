---
title: mask-border-mode
slug: Web/CSS/mask-border-mode
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-mode
---
{{cssref}}{{SeeCompatTable}}

La propriété CSS **`mask-border-mode`** indique le mode de fusion utilisé pour [le masque de bordure](/fr/docs/Web/CSS/mask-border).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask-border-mode: luminance;
mask-border-mode: alpha;

/* Valeurs globales */
mask-border-mode: inherit;
mask-border-mode: initial;
mask-border-mode: unset;
```

### Valeurs

- `luminance`
  - : Les valeurs de luminance proventant de l'image de masque sont utilisées pour le masque.
- `alpha`
  - : Les valeurs du canal alpha proventant de l'image de masque sont utilisées pour le masque.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#propdef-mask-border-mode", "mask-border-mode")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

TBD
