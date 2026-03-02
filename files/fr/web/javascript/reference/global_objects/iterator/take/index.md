---
title: "Iterator : méthode take()"
short-title: take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`take()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui produit le nombre donné d'éléments dans cet itérateur, puis se termine.

## Syntaxe

```js-nolint
take(limit)
```

### Paramètres

- `limit`
  - : Le nombre d'éléments à prendre depuis le début de l'itération.

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). L'objet d'aide à l'itérateur retourné produit les éléments de l'itérateur original un par un, puis se termine (la méthode `next()` produit `{ value: undefined, done: true }`) une fois que `limit` éléments ont été produits, ou lorsque l'itérateur original est épuisé, selon ce qui se produit en premier.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `limit` devient {{JSxRef("NaN")}} ou négatif lorsqu'il est [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).

## Exemples

### Utiliser la méthode `take()`

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, puis affiche les trois premiers termes&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### Utiliser la méthode `take()` avec une boucle `for...of`

`take()` est plus pratique lorsque vous ne créez pas manuellement l'itérateur. Comme les itérateurs sont également itérables, vous pouvez parcourir l'objet d'aide retourné avec une boucle {{JSxRef("Statements/for...of", "for...of")}}&nbsp;:

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// Affiche :
// 1
// 1
// 2
// 3
// 5
```

Comme `fibonacci()` est un itérateur infini, utiliser une boucle `for` pour l'itérer sans aucune logique pour sortir tôt (comme une instruction {{JSxRef("Statements/break", "break")}}) entraînerait une boucle infinie.

### Combiner `drop()` avec `take()`

Vous pouvez combiner `take()` avec {{JSxRef("Iterator.prototype.drop()")}} pour obtenir une tranche d'un itérateur&nbsp;:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Supprime les deux premiers éléments, puis prend les cinq suivants
  console.log(n);
}
// Affiche :
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Prend les cinq premiers éléments, puis supprime les deux premiers
  console.log(n);
}
// Affiche :
// 2
// 3
// 5
```

### Limites inférieure et supérieure du nombre d'éléments à prendre

Lorsque `limit` est négatif ou {{JSxRef("NaN")}}, une {{JSxRef("RangeError")}} est levée&nbsp;:

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

Lorsque `limit` est supérieur au nombre total d'éléments que l'itérateur peut produire (comme {{JSxRef("Infinity")}}), l'objet d'aide à l'itérateur retourné a essentiellement le même comportement que l'itérateur original&nbsp;:

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// Affiche :
// 1
// 2
// 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.take` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.take` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.drop()")}}
