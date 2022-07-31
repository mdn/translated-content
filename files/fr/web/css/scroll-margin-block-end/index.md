---
title: scroll-margin-block-end
slug: Web/CSS/scroll-margin-block-end
tags:
  - CSS
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/scroll-margin-block-end
---
{{CSSRef}}

La propriété **`scroll-margin-block-end`** définit la marge de défilement de l'élément sur la fin de l'axe de bloc. La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

{{EmbedInteractiveExample("pages/css/scroll-margin-block-end.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length> */
scroll-margin-block-end: 10px;
scroll-margin-block-end: 1em;

/* Valeurs globales */
scroll-margin-block-end: inherit;
scroll-margin-block-end: initial;
scroll-margin-block-end: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant du conteneur de défilement.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                                                            | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-margin-block-end", "scroll-margin-block-end")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-margin-block-end")}}
