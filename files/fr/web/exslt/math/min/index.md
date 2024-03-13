---
title: math:min()
slug: Web/EXSLT/math/min
---

{{XSLTRef}}{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}

`math:min()` renvoie la valeur minimale d'un ensemble de nœuds.

Pour calculer la valeur minimale d'un ensemble de nœuds, l'ensemble est trié selon l'ordre croissant, comme on pourrait le faire avec [`xsl:sort()`](/fr/docs/Web/XSLT/sort) en utilisant un type de données `number`. La valeur minimale est ensuite construite avec la valeur du premier nœud de cette liste ordonnée, convertie en nombre.

## Syntaxe

```
math:min(nodeSet)
```

### Paramètres

- `nodeSet`
  - : L'ensemble de nœuds dont on souhaite connaître la valeur minimale.

### Valeur de retour

Un fragment d'arbre de résultat représentant la valeur numérique du nœud avec la plus faible valeur, sous forme d'une chaîne de caractères.

## Spécifications

[EXSLT - MATH:MIN](http://exslt.org/regexp/functions/min/index.html)
