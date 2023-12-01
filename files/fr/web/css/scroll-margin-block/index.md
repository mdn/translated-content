---
title: scroll-margin-block
slug: Web/CSS/scroll-margin-block
---

{{CSSRef}}

La propriété **`scroll-margin-block`** est une propriété raccourcie logique qui définit les marges de défilement sur l'axe de bloc (i.e. les propriétés logiques `scroll-margin-block-start` et `scroll-margin-block-end`).

{{EmbedInteractiveExample("pages/css/scroll-margin-block.html")}}

Les valeurs des marges de défilement correspondent aux décalages entre la zone qui est utilisée pour définir les limites du défilement de la boîtes et la zone de défilement normale (_snapport_). La zone de défilement est déterminée en prenant la boîte de bordure modifiée, en prenant le rectangle englobant puis en ajoutant les décalages indiqués.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length> */
scroll-margin-block: 10px;
scroll-margin-block: 1em 0.5em;

/* Valeurs globales */
scroll-margin-block: inherit;
scroll-margin-block: initial;
scroll-margin-block: unset;
```

### Valeurs

- `<length>`
  - : Un décalage par rapport au côté correspondant du conteneur de défilement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
