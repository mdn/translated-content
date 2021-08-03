---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/@@iterator
---
{{JSRef}}

La valeur initiale de la propriété **`@@iterator`** est le même objet fonction que la valeur initiale de la propriété {{jsxref("Set.prototype.values()", "Set.prototype.values")}}.

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## Syntaxe

    monSet[Symbol.iterator]

### Valeur de retour

La fonction associée au symbole `@@iterator` de l'objet. Par défaut, c'est la fonction {{jsxref("Set.prototype.values()","values()")}}.

## Exemples

### Utiliser `[@@iterator]()`

```js
const monSet = new Set();
monSet.add("0");
monSet.add(1);
monSet.add({});

const setIter = monSet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // {}
```

### Utiliser `[@@iterator]()` avec une boucle `for..of`

```js
const monSet= new Set();
monSet.add("0");
monSet.add(1);
monSet.add({});

for (const v of monSet) {
  console.log(v);
}
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype-@@iterator', 'Set.prototype[@@iterator]')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype-@@iterator', 'Set.prototype[@@iterator]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.@@iterator")}}

## Voir aussi

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.values","Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
