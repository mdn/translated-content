---
title: boolean
slug: Web/XPath/Functions/boolean
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/boolean
original_slug: Web/XPath/Fonctions/boolean
---
{{ XsltRef() }}

la fonction `boolean` évalue une expression et retourne `true` ou `false`.

### Syntaxe

```
boolean( expression )
```

### Arguments

- `expression`
  - : L'expression à évaluer. L'expression peut faire référence à des nombres, des ensembles de nœuds, comme à des valeurs booléennes.

### Retour

La valeur booléenne `true` ou `false` en fonction de l'évaluation de `expression`.

### Notes

- Un nombre est évalué à `false` si c'est un zéro positif ou négatif ou `NaN`. Autrement, il est évalué à `true`.
- Un ensemble de nœuds est évalué à `true` s'il n'est pas vide.
- Une chaîne est évaluée à `false` si elle est vide. Autrement, elle est évaluée à `true`.
- Un objet de type autre que les quatre types de bases, est converti en booléen par une méthode qui dépend de son type.

### Définition

[XPath 1.0, section 4.3](http://www.w3.org/TR/xpath#function-boolean).

### Support Gecko

Supportée.
