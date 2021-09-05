---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/size
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/size
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
monSet.add("du texte")

monSet.size; // 3
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-get-set.prototype.size', 'Set.prototype.size')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-set.prototype.size', 'Set.prototype.size')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.size")}}

## Voir aussi

- {{jsxref("Set")}}
