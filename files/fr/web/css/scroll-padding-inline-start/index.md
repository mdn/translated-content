---
title: scroll-padding-inline-start
slug: Web/CSS/scroll-padding-inline-start
tags:
  - CSS
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/scroll-padding-inline-start
---
{{CSSRef}}

La propriété **`scroll-padding-inline-start`** est une propriété qui permet de définir le remplissage, au début de l'axe en ligne, entre l'élément et la zone de défilement.

Les propriétés pour le remplissage de la zone de défilement permettent de définir des décalages par rapport à la zone de défilement de l'élément (_scrollport_). On peut ainsi éviter à un élément d'être affiché là où d'autres barres sont présentes ou encore donner plus d'espace entre un élément et les barres de défilement pour y naviguer.

{{EmbedInteractiveExample("pages/css/scroll-padding-inline-start.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding-inline-start: auto;

/* Valeurs de longueur */
/* Type <length> */
scroll-padding-inline-start: 10px;
scroll-padding-inline-start: 1em;
scroll-padding-inline-start: 10%;

/* Valeurs globales */
scroll-padding-inline-start: inherit;
scroll-padding-inline-start: initial;
scroll-padding-inline-start: unset;
```

### Valeurs

- `<length-percentage>`
  - : Un décalage intérieur entre la boîte de défilement et le bord correspondant de l'élément. C'est une longueur ou un pourcentage valide.
- `auto`
  - : Le décalage est déterminé par l'agent utilisateur. Cette valeur correspond généralement à `0px` mais le navigateur peut utiliser une heuristique et déterminer si une valeur non nulle est préférable au regard du contexte dans lequel se trouve l'élément.

### Syntaxe formelle

{{csssyntax}}

## Specifications

| Spécification                                                                                                                                    | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-padding-inline-start", "scroll-padding-inline-start")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-padding-inline-start")}}
