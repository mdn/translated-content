---
title: lowest
slug: Web/EXSLT/math/lowest
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/math/lowest
---
{{ XsltRef() }}
`math:lowest()` retourne le nœud de l'ensemble de nœuds spécifié possédant la plus grande valeur (où la plus grande valeur est calculée avec [`math:min()`](fr/EXSLT/math/min)).

Un nœud a sa valeur minimale si sa valeur de chaîne convertie en nombre est égale à la valeur minimale.

{{ Note() }}

### Syntaxe

    math:lowest(ensembleNœud)

### Arguments

- `ensembleNœud`
  - : L'ensemble de nœuds pour lequel il faut retourner la plus petite valeur.

### Retourne

Un fragment d'arbre résultat consistant en copies des nœuds retournés par la fonction [`math:min()`](fr/EXSLT/math/min).

### Définition

- [EXSLT - MATH:HIGHEST (en)](http://www.exslt.org/regexp/functions/lowest/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
