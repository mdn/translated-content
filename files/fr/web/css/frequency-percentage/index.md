---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/frequency-percentage
---
{{CSSRef}}

Le type de donnée **`<frequency-percentage>`** représente une valeur qui peut être une valeur de type {{Cssxref("frequency")}} ou une valeur de type {{Cssxref("percentage")}}.

## Syntaxe

Se référer à la documentation des types {{Cssxref("frequency")}} et {{Cssxref("percentage")}} pour plus de détails sur les syntaxes possibles avec chacun de ces types.

## Utilisation avec `calc()`

Lorsqu'une valeur de type `<frequency-percentage>` peut être utilisée dans une déclaration, cela signifie que le pourcentage sera résolu comme une fréquence et qu'il peut alors être utilisé dans une expression [`calc()`](/fr/docs/Web/CSS/calc).

## Spécifications

| Spécification                                                                                                | État                             | Commentaires                                                   |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------- |
| {{SpecName('CSS4 Values', '#mixed-percentages', '&lt;frequency-percentage&gt;')}} | {{Spec2('CSS4 Values')}} |                                                                |
| {{SpecName('CSS3 Values', '#mixed-percentages', '&lt;frequency-percentage&gt;')}} | {{Spec2('CSS3 Values')}} | Définition du type `<frequency-percentage>`. Ajout de `calc()` |

## Compatibilité des navigateurs

{{Compat("css.types.frequency-percentage")}}
