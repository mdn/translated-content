---
title: scroll-padding-block-start
slug: Web/CSS/scroll-padding-block-start
---

{{CSSRef}}

La propriété **`scroll-padding-block-start`** est une propriété qui permet de définir le remplissage, au début de l'axe de bloc, entre l'élément et la zone de défilement.

Les propriétés pour le remplissage de la zone de défilement permettent de définir des décalages par rapport à la zone de défilement de l'élément (_scrollport_). On peut ainsi éviter à un élément d'être affiché là où d'autres barres sont présentes ou encore donner plus d'espace entre un élément et les barres de défilement pour y naviguer.

{{EmbedInteractiveExample("pages/css/scroll-padding-block-start.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding-block-start: auto;

/* Valeurs de longueur */
/* Type <length> */
scroll-padding-block-start: 10px;
scroll-padding-block-start: 1em;
scroll-padding-block-start: 10%;

/* Valeurs globales */
scroll-padding-block-start: inherit;
scroll-padding-block-start: initial;
scroll-padding-block-start: unset;
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
