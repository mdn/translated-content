---
title: <time-percentage>
slug: Web/CSS/time-percentage
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/time-percentage
---
{{CSSRef}}

Le type de donnée **`<time-percentage>`** représente une valeur qui peut être de type {{Cssxref("time")}} ou une valeur qui peut être de type {{Cssxref("percentage")}}.

## Syntaxe

Se référer à la documentation des types {{Cssxref("time")}} et {{Cssxref("percentage")}} pour plus de détails sur les syntaxes possibles pour chacun de ces types.

## Utilisation avec `calc()`

Lorsqu'une valeur de type `<time-percentage>` est autorisée dans une déclaration, cela signifie que le pourcentage sera résolu comme un temps et qu'il peut donc être utilisée dans une expression {{Cssxref("calc()")}}.

## Spécifications

| Spécification                                                                                        | État                             | Commentaires                                              |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- |
| {{SpecName('CSS4 Values', '#mixed-percentages', '&lt;time-percentage&gt;')}} | {{Spec2('CSS4 Values')}} |                                                           |
| {{SpecName('CSS3 Values', '#mixed-percentages', '&lt;time-percentage&gt;')}} | {{Spec2('CSS3 Values')}} | Définition du type `<time-percentage>`. Ajout de `calc()` |

## Compatibilité des navigateurs

{{Compat("css.types.time-percentage")}}
