---
title: "Iterator : méthode filter()"
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`filter()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui ne produit que les éléments de l'itérateur pour lesquels la fonction de rappel fournie retourne `true`.

## Syntaxe

```js-nolint
filter(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle doit retourner une valeur {{Glossary("truthy", "équivalente à vrai")}} pour que l'élément soit produit par l'objet d'aide à l'itérateur, et une valeur {{Glossary("falsy", "équivalente à faux")}} sinon. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). À chaque appel de la méthode `next()` de l'objet d'aide, elle retourne l'élément suivant de l'itérateur pour lequel la fonction de rappel retourne `true`. Lorsque l'itérateur sous-jacent est terminé, l'objet d'aide à l'itérateur est également terminé (la méthode `next()` produit `{ value: undefined, done: true }`).

## Description

L'avantage principal des aides d'itérateur par rapport aux méthodes de tableau est qu'elles sont paresseuses, c'est-à-dire qu'elles ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite des calculs inutiles et permet également de les utiliser avec des itérateurs infinis.

## Exemples

### Utiliser la méthode `filter()`

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, puis lit les premiers termes qui sont pairs&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### Utiliser `filter()` avec une boucle `for...of`

`filter()` est le plus pratique lorsque vous ne créez pas manuellement l'itérateur. Comme les itérateurs sont aussi itérables, vous pouvez parcourir l'aide retournée avec une boucle {{JSxRef("Statements/for...of", "for...of")}}&nbsp;:

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Affiche :
// 2
// 8
// 34
```

Ceci équivaut à&nbsp;:

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.filter` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.filter` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.forEach()")}}
- La méthode {{JSxRef("Iterator.prototype.every()")}}
- La méthode {{JSxRef("Iterator.prototype.map()")}}
- La méthode {{JSxRef("Iterator.prototype.some()")}}
- La méthode {{JSxRef("Iterator.prototype.reduce()")}}
- La méthode {{JSxRef("Array.prototype.filter()")}}
