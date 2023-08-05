---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
---

{{JSRef}}

L'accesseur **`size`** est une propriété qui renvoie le nombre d'éléments contenus dans un objet {{jsxref("Set")}}. Un objet `Set` correspondant à un ensemble, chaque élément qu'il contient y est unique.

{{EmbedInteractiveExample("pages/js/set-prototype-size.html")}}

## Description

La valeur de `size` est un entier représentant le nombre d'éléments contenus dans l'ensemble. Le mutateur associée pour `size` vaut {{jsxref("undefined")}}. Cette propriété ne peut pas être changée directement.

## Exemples

```js
var monSet = new Set();
monSet.add(1);
monSet.add(5);
monSet.add("du texte");

monSet.size; // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Set")}}
