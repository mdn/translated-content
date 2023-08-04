---
title: set:trailing()
slug: Web/EXSLT/set/trailing
---

{{XSLTRef}}{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}

`set:trailing()` renvoie les nœuds d'un premier ensemble de nœuds qui viennent après le premier nœud d'un deuxième ensemble.

## Syntaxe

```plain
set:trailing(nodeSet1, nodeSet2)
```

### Paramètres

- `nodeSet1`
  - : L'ensemble de nœuds dont on souhaite connaître les nœuds qui suivent le premier nœud de l'autre ensemble.
- `nodeSet2`
  - : L'ensemble de nœuds à comparer.

### Valeur de retour

Un ensemble de nœuds qui contient les nœuds de `nodeSet1` dont les valeurs suivent le premier nœud de `nodeSet2`.

> **Note :** Si le premier nœud de `nodeSet2` n'est pas contenu dans `nodeSet1`, un ensemble vide sera renvoyé. Si `nodeSet2` est vide, le résultat sera `nodeSet1`.

## Spécifications

[EXSLT - SET:TRAILING](http://exslt.org/set/functions/trailing/index.html)
