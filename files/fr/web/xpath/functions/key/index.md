---
title: key
slug: Web/XPath/Functions/key
---

{{ XsltRef() }}

La fonction `key` retourne un ensemble de nœuds ayant la valeur donnée pour la clef donnée.

### Syntaxe

```
key( nom-de-clef , valeur )
```

### Arguments

- `nom-de-clef`
  - : Une chaîne contenant le nom de l'élément [`xsl:key`](/fr/XSLT/key) à utiliser.

<!---->

- `valeur`
  - : L'ensemble de nœuds retourné contiendra chaque nœud qui possède cette valeur pour la clef donnée.

### Retour

Un ensemble de nœuds.

### Notes

- L'élément [`xsl:key`](/fr/XSLT/key) définit quel attribut de quels éléments donnés sera utilisé pour la comparaison.

Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath principale.

### Définition

[XSLT 1.0, section 12.2](http://www.w3.org/TR/xslt#function-key).

### Support Gecko

Supportée.
