---
title: "Iterator : méthode statique concat()"
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/concat
l10n:
  sourceCommit: dc02b8a490ea0ff4ac1236546f32270ca0cc0aa5
---

La méthode statique **`Iterator.concat()`** crée un nouvel objet {{JSxRef("Iterator")}} à partir d'une liste d'objets itérables. Le nouvel itérateur produit les valeurs de chacun des objets itérables d'entrée, en séquence.

## Syntaxe

```js-nolint
Iterator.concat(it)
Iterator.concat(it1, it2)
Iterator.concat(it1, it2, /* …, */ itN)
```

### Paramètres

- `it1`, `it2`, …, `itN`
  - : Un objet qui implémente le protocole [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»). Les [itérateurs](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_») qui ne sont pas également itérables ne peuvent pas être passés directement à cette méthode&nbsp;; ils doivent d'abord être enveloppés avec {{JSxRef("Iterator.from()")}}.

### Valeur de retour

Un nouvel objet {{JSxRef("Iterator")}} qui produit les valeurs de chacun des objets itérables d'entrée, en séquence.

## Description

La méthode `Iterator.concat()` est conceptuellement similaire à la méthode [`concat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) de `Array`, mais elle fonctionne sur tout type d'objet itérable et retourne un itérateur au lieu d'un tableau. Cela signifie que les objets itérables peuvent être parcourus paresseusement, évitant ainsi des allocations ou des calculs inutiles. Cela signifie aussi que, techniquement, vous pouvez [concaténer des objets itérables infinis](#concaténer_des_objets_itérables_infinis), mais les résultats des objets itérables après le premier objet itérable infini ne seront jamais atteints.

Bien que chaque objet itérable puisse être infini, la liste des objets itérables doit être finie — et assez limitée en nombre car les moteurs imposent une limite très basse au nombre d'arguments de fonction. Si vous devez concaténer un grand nombre — voire un nombre infini — d'objets itérables, utilisez plutôt {{JSxRef("Iterator.prototype.flatMap()")}}.

```js
function* infiniteIterables() {
  for (let i = 1; ; i++) {
    yield Array(i).fill(i);
  }
}

// BAD:
// Iterator.concat(...infiniteIterables());
// L'opérateur de propagation ne termine jamais

// GOOD:
const it = infiniteIterables().flatMap((x) => x);
// Séquence infinie de nombres : 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
```

La méthode `Iterator.concat()` est similaire en fonctionnalité à la fonction suivante, qui utilise l'opérateur [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*) pour produire les valeurs de chacun des objets itérables d'entrée, en séquence&nbsp;:

```js
function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
```

Comme `yield*`, `Iterator.concat()` ne prend pas en charge les arguments qui ne sont pas itérables (c'est-à-dire qui n'ont pas la méthode `[Symbol.iterator]()`). Cela s'explique par le fait que `Iterator.concat()` prend toujours la possession de ses itérateurs et [ferme](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#returnvalue) les itérateurs ouverts lorsque la méthode se termine. Avec des arguments itérables, `Iterator.concat()` acquiert les itérateurs un par un et ferme simplement l'itérateur courant lorsque l'itération est arrêtée. Avec des arguments itérateurs, il n'est pas clair si c'est l'appelant ou `Iterator.concat()` qui doit être responsable de la fermeture des itérateurs, en particulier ceux que `Iterator.concat()` n'a pas atteints, donc la méthode interdit simplement les arguments non itérables.

## Exemples

### Combiner des maps

Dans cet exemple, nous créons une nouvelle {{JSxRef("Map")}} qui est l'union de trois autres maps. Le constructeur {{JSxRef("Map/Map", "Map()")}} accepte un objet itérable de paires clé-valeur, tandis que [l'itérateur Map](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) produit les paires clé-valeur de la map, donc utiliser simplement `Iterator.concat()` sur les maps suffit à créer la nouvelle map.

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["c", 3],
  ["d", 4],
]);
const map3 = new Map([
  ["a", 5],
  ["e", 6],
]);

const map = new Map(Iterator.concat(map1, map2, map3));
console.log(map);
// Map(5) {'a' => 5, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 6}
```

Notez que la valeur de la clé `"a"` dans la map résultante est `5`. Cela s'explique par le fait que le constructeur `Map` utilise la dernière valeur pour chaque clé.

### Concaténer des objets itérables infinis

Lorsque l'un des objets itérables d'entrée est infini, l'itérateur résultant sera également infini. Ce n'est pas immédiatement un problème car les itérateurs peuvent être consommés paresseusement et fermés à tout moment, mais cela signifie que les objets itérables après le premier objet itérable infini ne seront jamais atteints.

```js
function* it1() {
  yield 1;
  yield 2;
}

function* it2() {
  let i = 3;
  while (true) {
    yield i++;
  }
}

function* it3() {
  yield "terminé";
}

const it = Iterator.concat(it1(), it2(), it3());
for (const value of it.take(10)) {
  console.log(value); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// "terminé" n'est jamais atteint
```

### Concaténer des objets itérables de types différents

Vous pouvez concaténer des objets itérables de types différents.

```js
const array = [1, 2, 3];
const set = new Set([4, 5, 6]);
function* gen() {
  yield 7;
  yield 8;
  yield 9;
}

const it = Iterator.concat(array, set, gen());
console.log([...it]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Les éléments de chaque objet itérable peuvent aussi être de types différents, tout comme les tableaux.

```js
const array = [1, "deux", 3];
const set = new Set([true, {}]);

const it = Iterator.concat(array, set);
console.log([...it]); // [1, "deux", 3, true, {}]
```

### Concaténer des objets non itérables

Les objets non itérables produisent une exception `TypeError` lorsqu'ils sont passés à `Iterator.concat()` car ils ne possèdent pas la méthode `[Symbol.iterator]()`.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(nonIterable); // TypeError: object is not iterable
```

Comme tous les itérateurs intégrés étendent la classe {{JSxRef("Iterator")}}, ils sont tous itérables et peuvent être passés à `Iterator.concat()`.

```js
const arrayIterator = [1, 2, 3][Symbol.iterator]();

const it = Iterator.concat(arrayIterator); // Pas d'erreur
```

Pour passer un itérateur qui n'est pas également itérable, vous pouvez l'envelopper avec {{JSxRef("Iterator.from()")}}.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(Iterator.from(nonIterable)); // Pas d'erreur
```

Une autre option consiste à utiliser {{JSxRef("Iterator.prototype.flatMap()")}}, qui appelle automatiquement `Iterator.from()`. Mais attention&nbsp;: vous devez appeler `flatMap()` sur un itérateur, pas sur un tableau, car {{JSxRef("Array.prototype.flatMap()")}} ne prend en charge que les valeurs de retour de type tableau.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = [nonIterable].values().flatMap((x) => x); // Pas d'erreur
```

Lorsque vous implémentez vos propres itérateurs, pensez à les rendre itérables en [sous-classant `Iterator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#sous-classer_iterator) ou en ajoutant une méthode `[Symbol.iterator]()` qui retourne `this`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.concat` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-sequencing)
- [Prothèse d'émulation es-shims de `Iterator.concat` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Iterator.from()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
