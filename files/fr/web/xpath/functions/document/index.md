---
title: document
slug: Web/XPath/Functions/document
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/document
original_slug: Web/XPath/Fonctions/document
---
{{ XsltRef() }}

La fonction `document` recherche un ensemble de nœuds dans un ou des documents externes et retourne l'ensemble de nœuds résultant.

### Syntaxe

```
document( URI [, ensemble-de-nœuds] )
```

### Arguments

- `URI`
  - : URI absolue ou relative du document à récupérer. L'URI peut également contenir un identifiant de fragment.

<!---->

- `ensemble-de-nœuds` (optionnel)
  - : Une expression pointant vers un ensemble de nœuds du document externe, qui doit être retourné.

### Retour

Un ensemble de nœuds.

### Notes

- Si l'URI contient un identifiant de fragment et que celui-ci peut être repérer dans le document externe, alors ce fragment sera traité comme la racine pour rechercher l'expression de l'argument `ensemble-de-nœuds`. Si l'argument `ensemble-de-nœuds` est omis, le fragment entier sera retourné.

<!---->

- Si l'argument `URI` est un ensemble de nœuds et que le second argument est présent, chaque nœud de l'ensemble de nœuds sera évalué comme une URI séparée, et l'ensemble de nœuds retourné sera le même que si la fonction `document` avait été appelée plusieurs fois, et que les résultats avait été concaténés dans un unique ensemble de nœuds.

<!---->

- D'autres situations particulières existent avec des comportements bien définis. Pour plus d'informations, consultez la [documentation XSLT 1.0](http://www.w3.org/TR/xslt).

<!---->

- Puisque l'URI est relative au document XSL, `document("")` retournera le nœud racine du document courant.

Cette fonction est un ajout à XPath qui est spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions de XPath core.

### Définition

[XSLT 1.0, section 12.1](http://www.w3.org/TR/xslt#function-document).

### Support Gecko

Supportée.
