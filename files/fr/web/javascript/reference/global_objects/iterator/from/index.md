---
title: "Iterator : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
l10n:
  sourceCommit: dc02b8a490ea0ff4ac1236546f32270ca0cc0aa5
---

La méthode statique **`Iterator.from()`** crée un nouvel objet {{JSxRef("Iterator")}} à partir d'un itérateur ou d'un objet itérable.

## Syntaxe

```js-nolint
Iterator.from(object)
```

### Paramètres

- `object`
  - : Un objet qui implémente le protocole [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») ou le protocole [itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»).

### Valeur de retour

Si `object` est un itérable, sa méthode `[Symbol.iterator]()` est appelée pour obtenir l'itérateur. Sinon, `object` est supposé être un itérateur. Si l'itérateur est déjà {{JSxRef("Operators/instanceof", "instanceof")}} {{JSxRef("Iterator")}} (ce qui signifie qu'il a `Iterator.prototype` dans sa chaîne de prototypes), il est retourné directement. Sinon, un nouvel objet {{JSxRef("Iterator")}} est créé pour envelopper l'itérateur original.

## Description

Cette méthode existe pour convertir des itérateurs personnalisés, probablement exportés par des bibliothèques, en [itérateurs appropriés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#itérateurs_appropriés). Tous les objets itérateurs retournés par `Iterator.from()` héritent d'un objet prototype commun, qui possède les méthodes suivantes&nbsp;:

- `next()`
  - : Appelle la méthode `next()` de l'itérateur sous-jacent et retourne le résultat.
- `return()`
  - : Appelle la méthode `return()` de l'itérateur sous-jacent et retourne le résultat, ou retourne `{ value: undefined, done: true }` si l'itérateur sous-jacent n'a pas de méthode `return()`.

## Exemples

### Convertir un itérable en itérateur approprié

Parce que `obj` est déjà un itérable qui retourne un itérateur approprié lorsque sa méthode `[Symbol.iterator]()` est appelée, `Iterator.from(obj)` retourne le même itérateur.

```js
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
```

Parce que `obj2` est un itérable qui retourne un itérateur non approprié lorsque sa méthode `[Symbol.iterator]()` est appelée, `Iterator.from(obj2)` retourne un nouvel itérateur qui enveloppe l'itérateur original.

```js
const iterator = {
  actuel: 0,
  next() {
    return { valeur: this.actuel++, fait: false };
  },
};

const obj2 = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj2);
console.log(iterator2 === iterator); // false
console.log(iterator2.next()); // { valeur: 0, fait: false }
console.log(iterator.next()); // { valeur: 1, fait: false }
```

### Convertir un itérateur en itérateur approprié

Parce que `obj` est déjà un itérateur approprié, `Iterator.from(obj)` se retourne lui-même.

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

Parce que `obj2` est un itérateur non approprié, `Iterator.from(obj2)` retourne un nouvel itérateur qui enveloppe l'itérateur original.

```js
const obj2 = {
  actuel: 0,
  next() {
    return { valeur: this.actuel++, fait: false };
  },
};

const iterator = Iterator.from(obj2);
console.log(iterator === obj2); // false
console.log(iterator.next()); // { valeur: 0, fait: false }
console.log(obj2.next()); // { valeur: 1, fait: false }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.from` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.from` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Array.from()")}}
