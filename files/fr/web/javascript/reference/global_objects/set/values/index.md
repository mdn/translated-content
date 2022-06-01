---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/values
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/values
---
{{JSRef}}

La méthode **`values()`** renvoie un nouvel objet {{jsxref("Iterator")}} qui contient les valeurs de chaque élément de l'objet `Set`, dans leur ordre d'insertion.

La méthode **`keys()`** est un alias pour cette méthode (afin de conserver une certaine similarité avec les objets {{jsxref("Map")}}) et se comportera exactement de la même façon en renvoyant les **valeurs** des éléments du `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## Syntaxe

```js
monSet.values();
```

### Valeur de retour

Un nouvel objet `Iterator` qui contient les valeurs de chaque élément de l'ensemble `Set`, dans leur ordre d'insertion.

## Exemples

```js
var monSet = new Set();
monSet.add("toto");
monSet.add("truc");
monSet.add("machin");

var setIter = monSet.values();

console.log(setIter.next().value); // "toto"
console.log(setIter.next().value); // "truc"
console.log(setIter.next().value); // "machin"
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.values', 'Set.prototype.values')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-set.prototype.values', 'Set.prototype.values')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.values")}}

## Voir aussi

- {{jsxref("Set.prototype.entries()")}}
