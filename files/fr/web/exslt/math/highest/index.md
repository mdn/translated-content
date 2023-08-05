---
title: math:highest()
slug: Web/EXSLT/math/highest
---

{{XSLTRef}}{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}

`math:highest()` renvoie le nœud qui a la valeur maximale, parmi l'ensemble de nœuds passé en argument (la valeur maximale est calculée à l'aide de [`math:max()`](/fr/docs/Web/EXSLT/math/max)).

Un nœud possède cette valeur maximale si la conversion de sa valeur qui est une chaîne de caractères en nombre est égale à la valeur maximale.

## Syntaxe

```plain
math:highest(nodeSet)
```

### Paramètres

- `nodeSet`
  - : L'ensemble de nœuds dont on souhaite connaître la valeur maximale.

### Valeur de retour

Un fragment d'arbre de résultat contenant les copies des nœuds renvoyés par [`math:max()`](/fr/docs/Web/EXSLT/math/max).

## Spécifications

[EXSLT - MATH:HIGHEST](http://exslt.org/math/functions/highest/index.html)
