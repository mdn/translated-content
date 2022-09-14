---
title: id
slug: Web/XPath/Functions/id
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/id
original_slug: Web/XPath/Fonctions/id
---
{{ XsltRef() }}

La fonction `id` recherche les nœuds correspondant aux identifiants `id` donnés et retourne un ensemble de nœuds contenant les nœuds identifiés.

### Syntaxe

```
id( expression )
```

### Arguments

- `expression`
  - : Si `expression` est un ensemble de nœuds, alors la valeur de la chaîne de chacun des nœuds de l'ensemble est traitée individuellement. Les nœuds retournés sont ceux corespondant à ces identifiants `id`. Si `expression` est une chaîne, ou n'importe quoi d'autre qu'un ensemble de nœuds, alors `expression` est traitée comme une liste d'identifiants `id` séparés par des espaces L'ensemble de nœuds retourné comprend les nœuds corespondant à ces identifiants `id`.

### Retour

Un ensemble de nœuds contenant les nœuds identifiés par les `id` donnés.

### Notes

- La DTD du document XML détermine quel attribut est un `id`. Voir [XPath 1.0, section 5.2.1](http://www.w3.org/TR/xpath#unique-id).

### Définition

[XPath 1.0, section 4.1](http://www.w3.org/TR/xpath#function-id).

### Support Gecko

Partiellement supportée.
