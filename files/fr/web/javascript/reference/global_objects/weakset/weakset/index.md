---
title: Constructeur WeakSet()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
---

{{JSRef}}

Le **constructeur `WeakSet()`** permet de créer des objets `WeakSet` qui stockent, avec des références faibles, des _objets_ dans un ensemble.

## Syntaxe

```js
new WeakSet();
new WeakSet(iterable);
```

### Paramètres

- `iterable` {{optional_inline}}
  - : Si un [objet itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») est passé en argument, ses différents éléments seront ajoutés au nouvel objet `WeakSet` créé. `null` est considéré comme `undefined`.

## Exemples

### Utiliser `WeakSet()`

```js
const ws = new WeakSet();
const toto = {};
const truc = {};

ws.add(toto);
ws.add(truc);

ws.has(toto); // true
ws.has(truc); // true

ws.delete(toto); // retire toto de l'ensemble
ws.has(toto); // false, toto a été retiré
ws.has(truc); // true, truc est retenu
```

On notera que `toto !== truc`. Même si ces objets se ressemblent, _ce ne sont pas **les mêmes objets**_. Aussi, ils sont tous les deux ajoutés à l'ensemble.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `WeakSet` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#weakset)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
