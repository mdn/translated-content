---
title: "Iterator : méthode drop()"
short-title: drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`drop()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui ignore le nombre d'éléments donné au début de cet itérateur.

## Syntaxe

```js-nolint
drop(limit)
```

### Paramètres

- `limit`
  - : Le nombre d'éléments à ignorer au début de l'itération.

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). La première fois que la méthode `next()` de l'objet d'aide retourné est appelée, l'itérateur courant avance immédiatement de `limit` éléments, puis le prochain élément (le `limit+1`-tième élément) est produit. L'objet d'aide à l'itérateur produit ensuite les éléments restants un par un. Si l'itérateur courant contient moins de `limit` éléments, le nouvel objet d'aide à l'itérateur sera immédiatement terminé lors du premier appel à `next()`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `limit` devient {{JSxRef("NaN")}} ou négatif lors de la [conversion en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).

## Exemples

### Utiliser la méthode `drop()`

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, en commençant à partir du troisième terme en ignorant les deux premiers termes&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

Cela équivaut à&nbsp;:

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### Utiliser `drop()` avec une boucle `for...of`

`drop()` est particulièrement pratique lorsque vous ne gérez pas manuellement l'itérateur. Comme les itérateurs sont également itérables, vous pouvez parcourir l'aide retournée avec une boucle {{JSxRef("Statements/for...of", "for...of")}}&nbsp;:

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Affiche :
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### Combiner `drop()` avec `take()`

Vous pouvez combiner `drop()` avec {{JSxRef("Iterator.prototype.take()")}} pour obtenir une portion d'un itérateur&nbsp;:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Ignore les deux premiers éléments, puis prend les cinq suivants
  console.log(n);
}
// Affiche :
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Prend les cinq premiers éléments, puis ignore les deux premiers
  console.log(n);
}
// Affiche :
// 2
// 3
// 5
```

### Limites inférieure et supérieure du nombre d'éléments ignorés

Lorsque `limit` est négatif ou {{JSxRef("NaN")}}, une exception {{JSxRef("RangeError")}} est levée&nbsp;:

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

Lorsque `limit` est supérieur au nombre total d'éléments que l'itérateur peut produire (comme {{JSxRef("Infinity")}}), l'objet d'aide à l'itérateur retourné ignorera instantanément tous les éléments et sera terminé lors du premier appel à `next()`. Si l'itérateur courant est infini, l'objet d'aide à l'itérateur retourné ne sera jamais terminé.

```js
fibonacci().drop(Infinity).next(); // Ne se termine jamais
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.drop` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.drop` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.take()")}}
