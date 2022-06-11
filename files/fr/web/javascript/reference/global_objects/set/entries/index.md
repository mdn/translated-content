---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/entries
---
{{JSRef}}

La méthode **`entries()`** renvoie un nouvel objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérateurs) qui contient un tableau composé de **`[valeur, valeur]`** pour chaque élément de l'objet `Set`, dans leur ordre d'insertion. En raison de leur structure, les objets `Set` n'ont pas de clé (`key`), à la différence des objets `Map`. Pour garder une structure et une API sembables à celle d'un objet `Map`, chaque entrée (_entry_) aura la même valeur pour la _clé_ (_key_) et pour la _valeur_ (_value_), c'est pourquoi un tableau de `[valeur, valeur]` est renvoyé.

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## Syntaxe

```js
monSet.entries()
```

### Valeur de retour

Un nouvel objet `Iterator` qui contient un tableau de tuples \[`valeur, valeur`] pour chaque élément de l'ensemble, dans leur ordre d'insertion.

## Exemples

```js
var monSet = new Set();
monSet.add("totobidule");
monSet.add(1);
monSet.add("machin");

var setIter = monSet.entries();

console.log(setIter.next().value); // ["totobidule", "totobidule"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["machin", "machin"]
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.entries', 'Set.prototype.entries')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype.entries', 'Set.prototype.entries')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.entries")}}

## Voir aussi

- {{jsxref("Set.prototype.values","Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
