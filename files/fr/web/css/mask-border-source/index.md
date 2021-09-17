---
title: mask-border-source
slug: Web/CSS/mask-border-source
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-source
---
{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-source`** définit l'image à utiliser pour créer [le masque de bordure](/fr/docs/Web/CSS/mask-border) d'un élément.

C'est la propriété {{cssxref("mask-border-slice")}} qui est utilisée afin de découper l'image en tranches/régions ensuite appliquées dynamiquement pour créer le masque final.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-border-source: none;

/* Valeurs de type <image> */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* Valeurs globales */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: unset;
```

### Valeurs

- `none`
  - : Aucun masque de bordure n'est utilisé.
- {{cssxref("&lt;image&gt;")}}
  - : Une référence vers une image qu'on utilise pour le masque de la bordure.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Voir la page {{cssxref("mask-border")}}.

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#propdef-mask-border-source", "mask-border-source")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

TBD
