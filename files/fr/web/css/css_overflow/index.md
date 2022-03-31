---
title: CSS Overflow
slug: Web/CSS/CSS_Overflow
tags:
  - CSS
  - CSS Overflow
  - Reference
translation_of: Web/CSS/CSS_Overflow
---
{{CSSRef}}
Le module de spécification **_CSS Overflow_** décrit les fonctionnalités CSS relatives au dépassement et au défilement du contenu pour les médias visuels. En CSS, le dépassement se produit lorsque le contenu d'une boîte s'étend au-delà des bords de la boîte.

## Dépassement au dessin (_ink overflow_) et dépassement défilable (_scrollable overflow_)

Il existe deux types de dépassement en CSS. Le premier, intitulé en anglais **_ink overflow_** (qu'on pourrait traduire par « dépassement pour le dessin ») indique le dépassement des effets visuels qui ne modifient pas la disposition ou le dimensionnement (ex. les ombres des boîtes, les bordures des images, les décorations du texte, les caractères avec un jambage qui dépasse, etc.).

Le second type de dépassement, **_scrollable overflow_** (ou dépassement défilable) se produit lorsque du contenu se situe hors de la boîte et qu'il est nécessaire de fournir un mécanisme pour faire défiler le contenu afin de pouvoir le consulter. Les propriétés de ce module de spécification décrivent ce qui se passe lorsque le contenu dépasse d'une boîte.

## Exemple

L'exempel interactif suivant illustre comment la modification de la valeur de la propriété `overflow` change la façon dont est géré le dépassement pour une boîte avec une hauteur fixe.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Référence

### Propriétés CSS

- {{CSSxRef("overflow")}}
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("block-overflow")}} {{experimental_inline}}
- {{CSSxRef("line-clamp")}} {{experimental_inline}}
- {{CSSxRef("max-lines")}} {{experimental_inline}}
- {{CSSxRef("continue")}} {{experimental_inline}}

### Propriétés spécifiques

- {{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}

## Spécifications

| Spécification                                                                        | État                                 | Commentaires                                                                                                |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}} | {{Spec2('CSS3 Overflow')}} | Modification de la syntaxe afin de permettre d'utilise un ou deux mots-clés (plutôt qu'un seul auparavant). |
| {{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}         | {{Spec2('CSS2.1')}}             | Définition initiale.                                                                                        |

## Voir aussi

- Les propriétés qui permettent de mettre en forme les barres de défilement/ascenceurs : {{CSSxRef("scrollbar-width")}} et {{CSSxRef("scrollbar-color")}}
