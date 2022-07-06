---
title: scroll-padding
slug: Web/CSS/scroll-padding
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/scroll-padding
---
{{CSSRef}}

La propriété **`scroll-padding`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir l'ensemble des propriétés `scroll-padding-top`, `scroll-padding-right`, `scroll-padding-bottom` et `scroll-padding-left` (de la même façon que la propriété {{cssxref("padding")}} permet de définir les propriétés détaillées associées).

{{EmbedInteractiveExample("pages/css/scroll-padding.html")}}

Les propriétés `scroll-padding-*` permettent de définir des décalages par rapport à la zone de défilement de l'élément (_scrollport_). On peut ainsi éviter à un élément d'être affiché là où d'autres barres sont présentes ou encore donner plus d'espace entre un élément et les barres de défilement pour y naviguer.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-padding: auto;

/* Valeurs de longueur */
/* Type <length> */
scroll-padding: 10px;
scroll-padding: 1em .5em 1em 1em;
scroll-padding: 10%;

/* Valeurs globales */
scroll-padding: inherit;
scroll-padding: initial;
scroll-padding: unset;
```

### Valeurs

- `<length-percentage>`
  - : Un décalage intérieur entre la boîte de défilement et le bord correspondant de l'élément. Cette valeur, de type {{cssxref("&lt;length-percentage&gt;")}}, est une longueur ({{cssxref("&lt;length&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) valide.
- `auto`
  - : Le décalage est déterminé par l'agent utilisateur. Cette valeur correspond généralement à `0px` mais le navigateur peut utiliser une heuristique et déterminer si une valeur non nulle est préférable au regard du contexte dans lequel se trouve l'élément.

### Syntaxe formelle

{{csssyntax}}

## Specifications

| Spécification                                                                                                    | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-padding", "scroll-padding")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-padding")}}
