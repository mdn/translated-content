---
title: split
slug: Web/EXSLT/str/split
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/str/split
---
{{ XsltRef() }}

`str:split()` divise une chaîne en utilisation un motif pour déterminer où doivent être fait les séparations, en retournant un ensemble de nœuds contenant les chaînes résultantes.

### Syntaxe

    str:split(chaîne,motif)

### Arguments

- `chaîne`
  - : La chaîne à diviser.
- `motif`
  - : Le motif indiquant les endroits de division de la chaîne.

### Retourne

Un ensemble de nœuds d'éléments `token`, contenant chacun un `token` provenant de `chaîne`.

Par exemple&nbsp;:

    str:split('livre, téléphone, ordinateur, chaise', ', ')

Retourne l'ensemble de nœuds suivant&nbsp;:

    <token>livre</token>
    <token>téléphone</token>
    <token>ordinateur</token>
    <token>chaise</token>

### Définition

- [EXSLT - STR:SPLIT (en)](http://www.exslt.org/regexp/functions/split/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
