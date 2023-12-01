---
title: <length-percentage>
slug: Web/CSS/length-percentage
---

{{CSSRef}}

Le type de donnée **`<length-percentage>`** représente une valeur qui peut être une valeur de type {{Cssxref("length")}} ou une valeur de type {{Cssxref("percentage")}}.

## Syntaxe

Se référer à la documentation des types {{Cssxref("length")}} et {{Cssxref("percentage")}} pour plus de détails sur les syntaxes possibles pour chacun de ces types.

## Utilisation avec `calc()`

Lorsqu'une valeur de type `<length-percentage>` peut être utilisée dans une déclaration, cela signifie que le pourcentage sera résolu comme une longueur et qu'il peut alors être utilisé au sein d'une expression {{cssxref("calc()", "calc()")}}. Ainsi, toutes les valeurs qui suivent sont acceptables pour la propriété {{Cssxref("width")}} :

```css example-good
width: 200px;
width: 20%;
width: calc(100% - 200px);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
