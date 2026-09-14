---
title: "Generator : méthode next()"
short-title: next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`next()`** des instances de {{JSxRef("Generator")}} retourne un objet avec deux propriétés `done` et `value`. Vous pouvez également fournir un paramètre à la méthode `next` pour envoyer une valeur au générateur.

## Syntaxe

```js-nolint
next()
next(value)
```

### Paramètres

- `value` {{Optional_Inline}}
  - : La valeur à envoyer au générateur.

    La valeur sera affectée comme résultat d'une expression `yield`. Par exemple, dans `variable = yield expression`, la valeur passée à la fonction `.next()` sera affectée à `variable`.

### Valeur de retour

Un {{JSxRef("Object")}} possédant deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
    - `true` si le générateur a dépassé la fin de son flux de contrôle. Dans ce cas, `value` définit la valeur de retour du générateur (qui peut être indéfinie).
    - `false` si le générateur peut produire d'autres valeurs.
- `value`
  - : Toute valeur JavaScript produite ou retournée par le générateur.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le générateur est déjà en cours d'exécution.

## Exemples

### Utiliser la méthode `next()`

L'exemple suivant illustre comment utiliser un générateur simple et les objets renvoyés par la méthode `next`&nbsp;:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### Utiliser la méthode `next()` avec une liste

Dans cet exemple, `obtenirPage` prend une liste et la «&nbsp;pagine&nbsp;» en segments de taille `taillePage`. Chaque appel à `next` produira un de ces segments.

```js
function* obtenirPage(list, taillePage = 1) {
  for (let index = 0; index < list.length; index += taillePage) {
    yield list.slice(index, index + taillePage);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8];
const page = obtenirPage(list, 3); // Generator { }

page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }
```

### Envoyer des valeurs à un générateur

Dans cet exemple, `next` est appelé avec une valeur.

> [!NOTE]
> Le premier appel n'affiche rien, car le générateur ne produisait rien initialement.

```js
function* gen() {
  while (true) {
    const value = yield;
    console.log(value);
  }
}

const g = gen();
g.next(1); // Retourne { value: undefined, done: false }
// Aucun journal à cette étape : la première valeur envoyée via `next` est perdue
g.next(2); // Retourne { value: undefined, done: false }
// Journalise 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La délcaration {{JSxRef("Statements/function*", "function*")}}
- Le guide [des itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
