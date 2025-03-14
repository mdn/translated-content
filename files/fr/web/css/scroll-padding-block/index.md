---
title: scroll-padding-block
slug: Web/CSS/scroll-padding-block
---

{{CSSRef}}

La propriété **`scroll-padding-block`** est une propriété raccourcie qui permet de définir le remplissage, sur l'axe de bloc, entre l'élément et la zone de défilement. Autrement dit, elle permet de définir `scroll-padding-block-end` et `scroll-padding-block-start`.

{{EmbedInteractiveExample("pages/css/scroll-padding-block.html")}}

Les propriétés pour le remplissage de la zone de défilement permettent de définir des décalages par rapport à la zone de défilement de l'élément (_scrollport_). On peut ainsi éviter à un élément d'être affiché là où d'autres barres sont présentes ou encore donner plus d'espace entre un élément et les barres de défilement pour y naviguer.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding-block: auto;

/* Valeurs de longueur */
/* Type <length> */
scroll-padding-block: 10px;
scroll-padding-block: 1em 0.5em;
scroll-padding-block: 10%;

/* Valeurs globales */
scroll-padding-block: inherit;
scroll-padding-block: initial;
scroll-padding-block: unset;
```

### Valeurs

- `<length-percentage>`
  - : Un décalage intérieur entre la boîte de défilement et le bord correspondant de l'élément. C'est une longueur ou un pourcentage valide.
- `auto`
  - : Le décalage est déterminé par l'agent utilisateur. Cette valeur correspond généralement à `0px` mais le navigateur peut utiliser une heuristique et déterminer si une valeur non nulle est préférable au regard du contexte dans lequel se trouve l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
