---
title: "Iterator : méthode every()"
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

La méthode **`every()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.every()")}}&nbsp;: elle retourne `false` si elle trouve un élément qui ne satisfait pas la fonction de test fournie. Sinon, si l'itérateur est épuisé sans trouver un tel élément, elle retourne `true`.

## Syntaxe

```js-nolint
every(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle doit retourner une valeur {{Glossary("truthy", "équivalente à vrai")}} pour indiquer que l'élément passe le test, et une valeur {{Glossary("falsy", "équivalente à faux")}} sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

`true` si `callbackFn` retourne une valeur {{Glossary("truthy", "équivalente à vrai")}} pour chaque élément. Sinon, `false`.

## Description

`every()` parcourt l'itérateur et invoque la fonction `callbackFn` une fois pour chaque élément. Elle retourne immédiatement `false` si la fonction de rappel retourne une valeur équivalente à faux. Sinon, elle parcourt jusqu'à la fin de l'itérateur et retourne `true`. Si `every()` retourne `false`, l'itérateur sous-jacent est fermé en appelant sa méthode `return()`.

L'avantage principal des aides d'itérateur par rapport aux méthodes de tableau est qu'elles sont paresseuses, c'est‑à‑dire qu'elles ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite des calculs inutiles et permet de les utiliser avec des itérateurs infinis. Avec des itérateurs infinis, `every()` retourne `false` dès que la première valeur équivalente à faux est trouvée. Si le `callbackFn` retourne toujours une valeur équivalente à vrai, la méthode ne retourne jamais.

## Exemples

### Utiliser la méthode `every()`

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // Ne se termine jamais
```

Appeler `every()` ferme toujours l'itérateur sous-jacent, même si la méthode est retournée prématurément. L'itérateur n'est jamais laissé dans un état intermédiaire.

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.every` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.every` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.find()")}}
- La méthode {{JSxRef("Iterator.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.every()")}}
