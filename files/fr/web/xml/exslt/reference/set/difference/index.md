---
title: difference
slug: Web/XML/EXSLT/Reference/set/difference
original_slug: Web/EXSLT/set/difference
---

{{QuickLinksWithSubpages("/fr/docs/Web/EXSLT")}}{{ XsltRef() }}
`set:difference()` retourne la différence entre deux ensembles de nœuds. En d'autres termes, elle retourne un ensemble de nœuds qui sont dans un des ensembles mais par dans l'autre.

La version*modèle* de `set:difference` applique des modèles à ces nœuds dans le mode `set:difference`, en copiant les nœuds afin de retourner un un fragment d'arbre résultant comprenant ces nœuds.

### Syntaxe

```
set:difference(ensembleNœuds1,ensembleNœuds2)
```

### Arguments

- `ensembleNœuds1`
  - : L'ensemble de nœuds duquel soustraire des nœuds.
- `ensembleNœuds2`
  - : L'ensemble de nœuds à soustraire de*ensembleNœuds1*.

### Retourne

Un ensemble de nœuds contenant les nœuds présents dans*ensembleNœuds1* mais pas dans*ensembleNœuds2*.

### Définition

- [EXSLT - SET:DIFFERENCE (en)](http://www.exslt.org/set/functions/difference/)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
