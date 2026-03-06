---
title: "Iterator : méthode map()"
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`map()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui produit les éléments de l'itérateur, chacun transformé par une fonction de mappage.

## Syntaxe

```js-nolint
map(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle retourne la valeur qui sera produite par l'objet d'aide à l'itérateur. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément actuel en cours de traitement.
    - `index`
      - : L'indice de l'élément actuel en cours de traitement.

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). Chaque fois que la méthode `next()` de l'objet d'aide à l'itérateur est appelée, elle obtient l'élément suivant de l'itérateur sous-jacent, applique `callbackFn` et renvoie la valeur retournée. Lorsque l'itérateur sous-jacent est terminé, l'objet d'aide à l'itérateur est également terminé (la méthode `next()` produit `{ value: undefined, done: true }`).

## Description

Le principal avantage des objets d'aide à l'itérateur par rapport aux méthodes de tableau est qu'ils sont paresseux, ce qui signifie qu'ils ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite les calculs inutiles et permet également de les utiliser avec des itérateurs infinis. La méthode `map()` permet de créer un nouvel itérateur qui, lorsqu'il est itéré, produit des éléments transformés.

## Exemples

### Utiliser la méthode `map()`

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, le transforme en une nouvelle suite avec chaque terme au carré, puis lit les premiers termes&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const seq = fibonacci().map((x) => x ** 2);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 4
```

### Utiliser `map()` avec une boucle `for...of`

`map()` est le plus pratique lorsque vous ne créez pas manuellement l'itérateur. Comme les itérateurs sont également itérables, vous pouvez itérer sur l'objet d'aide retourné avec une boucle {{JSxRef("Statements/for...of", "for...of")}}&nbsp;:

```js
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Affiche :
// 1
// 1
// 4
// 9
// 25
// 64
```

Ceci est équivalent à&nbsp;:

```js
for (const n of fibonacci()) {
  const n2 = n ** 2;
  console.log(n2);
  if (n2 > 30) {
    break;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.map` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.map` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.flatMap()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
