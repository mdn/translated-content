---
title: highest
slug: Web/EXSLT/math/highest
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/math/highest
---
{{ XsltRef() }}
`math:highest()` retourne le nœud de l'ensemble de nœuds spécifié possédant la plus grande valeur (où la plus grande valeur est calculée avec [`math:max()`](fr/EXSLT/math/max)).

Un nœud a sa valeur maximale si sa valeur de chaîne convertie en nombre est égale à la valeur maximale.

{{ Note() }}

### Syntaxe

    math:highest(ensembleNœud)

### Arguments

- `ensembleNœud`
  - : L'ensemble de nœuds pour lequel il faut retourner la plus grande valeur.

### Retourne

Un fragment d'arbre résultat consistant en copies des nœuds retournés par la fonction [`math:max()`](fr/EXSLT/math/max).

### Définition

- [EXSLT - MATH:HIGHEST (en)](http://www.exslt.org/regexp/functions/highest/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
