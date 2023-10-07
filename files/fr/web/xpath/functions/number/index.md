---
title: number
slug: Web/XPath/Functions/number
---

{{ XsltRef() }}

La fonction `number` convertit un objet en un nombre et retourne ce nombre.

### Syntaxe

```
number( [objet] )
```

### Arguments

- `objet` (optionnel)
  - : L'objet à convertir en nombre.

### Retour

Le nombre résultant après conversion de l'objet.

### Notes

- Les chaînes sont converties en nombre en enlevant les espaces précédant le nombre dans la chaîne et en ignorant tout ce qui suit le nombre. Si la chaîne ne correspond pas à ce motif, alors elle est convertie en `NaN`
- Le booléen `true` est converti en 1. `False` est converti en 0.
- Un ensemble de nœuds est d'abord converti en chaîne comme lors d'un appel à la fonction [string()](/fr/XPath/Fonctions/string) puis il est traité de la même façon qu'une chaîne.
- Un objet qui n'est pas d'un des quatre types de base est converti en nombre avec une méthode qui dépend de son type.

### Définition

[XPath 1.0, section 4.4](http://www.w3.org/TR/xpath#function-number).

### Support Gecko

Supportée.
