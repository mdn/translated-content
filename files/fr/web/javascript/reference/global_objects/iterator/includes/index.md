---
title: "Iterator : méthode includes()"
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/includes
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{SeeCompatTable}}

La méthode **`includes()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.includes()")}}&nbsp;: elle retourne `true` si elle trouve un élément égal à la valeur donnée. Sinon, si l'itérateur est épuisé sans trouver un tel élément, elle retourne `false`.

## Syntaxe

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Paramètres

- `searchElement`
  - : La valeur à rechercher.
- `fromIndex` {{Optional_Inline}}
  - : Index de base zéro à partir duquel commencer la recherche. Doit être un entier non négatif, `Infinity` ou `undefined`. Si `fromIndex` est supérieur ou égal au nombre d'éléments produits par l'itérateur (y compris lorsque `fromIndex` est `Infinity`), la méthode retourne toujours `false` après avoir épuisé l'itérateur. Si `fromIndex` est `undefined`, il vaut par défaut `0`.

### Valeur de retour

Une valeur booléenne qui est `true` si la valeur `searchElement` est trouvée dans l'itérateur (ou dans la partie de l'itérateur commençant à `fromIndex`, si défini).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `fromIndex` n'est pas l'un des suivants&nbsp;: un entier, `Infinity`, `-Infinity` ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Levée si `fromIndex` est négatif.

## Description

La méthode `includes()` compare `searchElement` aux éléments du tableau en utilisant [l'algorithme SameValueZero](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#égalité_de_valeurs_nulles). Cet algorithme fonctionne comme l'égalité stricte `===` (où `-0` et `+0` sont considérés comme égaux), à l'exception que {{JSxRef("NaN")}} est considéré comme égal à lui-même.

Contrairement à `Array.prototype.includes()`, le paramètre `fromIndex` de `Iterator.prototype.includes()` ne peut pas être négatif, car l'itérateur n'a pas de longueur connue. La validation du type est également plus stricte&nbsp;: les valeurs non entières ne sont pas tronquées en entiers.

Le principal avantage des aides à l'itérateur par rapport aux méthodes de tableau est qu'elles sont paresseuses, ce qui signifie qu'elles ne produisent la valeur suivante que lorsqu'elle est demandée. Cela évite les calculs inutiles et permet également de les utiliser avec des itérateurs infinis. Avec des itérateurs infinis, `includes()` retourne `true` dès que la première correspondance est trouvée. Si la valeur n'est jamais rencontrée, la méthode ne retourne jamais.

L'appel de `includes()` ferme toujours l'itérateur sous-jacent, même si la méthode retourne prématurément. L'itérateur n'est jamais laissé dans un état intermédiaire.

## Exemples

### Utiliser `includes()`

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8)); // true
console.log(fibonacci().take(10).includes(7)); // false
console.log(fibonacci().includes(7)); // Ne se termine jamais
```

La méthode ferme l'itérateur après avoir retourné.

```js
const seq = fibonacci();
console.log(seq.includes(8)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

### Utiliser `fromIndex`

`fromIndex` définit le nombre d'éléments à ignorer depuis le début. Cela équivaut à appeler `drop(fromIndex).includes(searchElement)`.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().includes(8, 3)); // true
console.log(fibonacci().includes(8, 10)); // false
```

Si `fromIndex` est supérieur ou égal au nombre d'éléments disponibles, `false` est retourné.

```js
["a", "b", "c"].values().includes("a", 3); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation es-shims de `Iterator.prototype.includes` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.every()")}}
- La méthode {{JSxRef("Iterator.prototype.find()")}}
- La méthode {{JSxRef("Iterator.prototype.some()")}}
- La méthode {{JSxRef("Array.prototype.includes()")}}
