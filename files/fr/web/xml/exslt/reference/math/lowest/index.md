---
title: math:lowest()
slug: Web/XML/EXSLT/Reference/math/lowest
original_slug: Web/EXSLT/math/lowest
---

{{XSLTRef}}{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}

`math:lowest()` renvoie le nœud qui a la valeur minimale, parmi l'ensemble de nœuds passé en argument (la valeur minimale est calculée à l'aide de [`math:min()`](/fr/docs/Web/XML/EXSLT/Reference/math/min)).

Un nœud possède cette valeur minimale si la conversion de sa valeur qui est une chaîne de caractères en nombre est égale à la valeur minimale.

## Syntaxe

```plain
math:lowest(nodeSet)
```

### Paramètres

- `nodeSet`
  - : L'ensemble de nœuds dont on souhaite connaître la valeur minimale.

### Valeur de retour

Un fragment d'arbre de résultat contenant les copies des nœuds renvoyés par [`math:min()`](/fr/docs/Web/XML/EXSLT/Reference/math/min).

## Spécifications

[EXSLT - MATH:LOWEST](http://exslt.org/math/functions/lowest/index.html)
