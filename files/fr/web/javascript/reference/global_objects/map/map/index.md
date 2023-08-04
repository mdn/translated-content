---
title: Constructeur Map()
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
---

{{JSRef}}

Le **constructeur `Map()`** permet de créer des objets [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map).

## Syntaxe

```js
new Map();
new Map(iterable);
```

### Paramètres

- `iterable` {{optional_inline}}
  - : Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) ou un autre objet [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) dont les éléments sont des clés/valeurs (par exemple des tableaux avec deux éléments comme `[[ 1, 'un' ],[ 2, 'deux' ]]`). Chaque paire de clé/valeur est ajouté au nouvel objet `Map`.

## Exemples

### Créer un nouvel objet `Map`

```js
let maMap = new Map([
  [1, "un"],
  [2, "deux"],
  [3, "trois"],
]);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Une prothèse d'émulation pour `Map`, disponible avec la bibliothèque [`core-js`](https://github.com/zloirock/core-js#map)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
