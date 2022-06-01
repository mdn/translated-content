---
title: min
slug: Web/EXSLT/math/min
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/math/min
---
{{ XsltRef() }}

`math:min()` renvoir la valeur minimale pour un ensemble de nœuds.

Pour calculer la valeur minimale d'un ensemble de nœuds, l'ensemble est trié dans l'ordre croissant comme il le serait avec la commande [`xsl:sort()`](fr/XSLT/sort) avec un type de donnée `number`. La valeur minimale est ensuite le premier nœud de la liste triée, converti en nombre.

{{ Note() }}

### Syntaxe

    math:min(nodeSet)

### Arguments

- `nodeSet`
  - : L'ensemble de nœuds dont la valeur la plus faible est recherchée.

### Renvoie

Fragment de l'arbre du résultat représentant la valeur numérique du nœud avec la valeur la plus faible sous forme d'une de caractères.

### Défini

[EXSLT - MATH:MIN](http://www.exslt.org/regexp/functions/min/index.html)

### Prise en charge par Gecko

Pris en charge par Gecko 1.9 et suivants.
