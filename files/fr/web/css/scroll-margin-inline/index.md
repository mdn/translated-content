---
title: scroll-margin-inline
slug: Web/CSS/scroll-margin-inline
tags:
  - CSS
  - Propriété
  - Propriété logique
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/scroll-margin-inline
---
{{CSSRef}}

La propriété **`scroll-margin-inline`** est une propriété raccourcie logique qui définit les marges de défilement sur l'axe de bloc (i.e. les propriétés logiques `scroll-margin-inline-start` et `scroll-margin-inline-end`).

Les valeurs des marges de défilement correspondent aux décalages entre la zone qui est utilisée pour définir les limites du défilement de la boîtes et la zone de défilement normale (_snapport_). La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length> */
scroll-margin-inline: 10px;
scroll-margin-inline: 1em .5em;

/* Valeurs globales */
scroll-margin-inline: inherit;
scroll-margin-inline: initial;
scroll-margin-inline: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant du conteneur de défilement.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                                                    | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-margin-inline", "scroll-margin-inline")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-margin-inline")}}
