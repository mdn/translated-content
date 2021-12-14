---
title: tokenize
slug: Web/EXSLT/str/tokenize
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/str/tokenize
---
{{ XsltRef() }}

`str:tokenize()` divise une chaîne en utilisant un ensemble de caractère comme délimiteur qui détermine l'endroit où doivent être fait les séparations, en retournant un ensemble de nœuds contenant les chaînes résultantes.

### Syntaxe

    str:tokenize(chaîne,délimiteurs)

### Arguments

- `chaîne`
  - : La chaîne à marquer.
- `délimiteurs`
  - : Chaque caractère de la chaîne est utilisé comme séparateur de mot pendant le marquage.

### Retourne

Un ensemble de nœuds d'éléments `token`, contenant chacun un `token` provenant de `chaîne`.

Par exemple :

    str:tokenize('2007-09-14-03T11:40:23', '-T:')

Retourne l'ensemble de nœuds suivant :

    <token>2007</token>
    <token>09</token>
    <token>14</token>
    <token>11</token>
    <token>40</token>
    <token>23</token>

### Définition

- [EXSLT - STR:TOKENIZE (en)](http://www.exslt.org/regexp/functions/tokenize/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
