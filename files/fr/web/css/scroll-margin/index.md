---
title: scroll-margin
slug: Web/CSS/scroll-margin
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/scroll-margin
---
{{CSSRef}}

La propriété `scroll-margin` est une propriété raccourcie qui permet de définir l'ensemble des propriétés `scroll-margin-top`, `scroll-margin-left`, `scroll-margin-bottom` et `scroll-margin-right` (de la même façon que la propriété `margin` définit les différents côtés des marges).

{{EmbedInteractiveExample("pages/css/scroll-margin.html")}}

Les valeurs de `scroll-margin` correspondent aux décalages entre la zone qui est utilisée pour définir les limites du défilement de la boîtes et la zone de défilement normale (_snapport_). La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length> */
scroll-margin: 10px;
scroll-margin: 1em .5em 1em 1em;

/* Valeurs globales */
scroll-margin: inherit;
scroll-margin: initial;
scroll-margin: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant pour le conteneur de défilement. Voir {{cssxref("&lt;length&gt;")}} pour les valeurs possibles.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

| Spécification                                                                                                | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-margin", "scroll-margin")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-margin")}}
