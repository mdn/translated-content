---
title: "Iterator : méthode toArray()"
short-title: toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toArray()`** des instances de {{JSxRef("Iterator")}} crée une nouvelle instance de {{JSxRef("Array")}} remplie avec les éléments produits par l'itérateur.

## Syntaxe

```js-nolint
toArray()
```

### Paramètres

Aucun.

### Valeur de retour

Une nouvelle instance de {{JSxRef("Array")}} contenant les éléments de l'itérateur dans l'ordre dans lequel ils ont été produits.

## Exemples

### Utiliser la méthode `toArray()`

`iterator.toArray()` est équivalent à `Array.from(iterator)` et `[...iterator]`, sauf qu'il est plus facile à chaîner lorsque plusieurs méthodes d'aide à l'itérateur sont impliquées. L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci, prend les 10 premiers termes, filtre les nombres impairs et convertit le résultat en tableau&nbsp;:

```js
function* fibonacci() {
  let actuel = 1;
  let suivant = 1;
  while (true) {
    yield actuel;
    [actuel, suivant] = [suivant, actuel + suivant];
  }
}

const tableau = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();

console.log(tableau); // [2, 8, 34]
```

Notez qu'il est conseillé d'appeler `toArray()` en dernière étape de votre traitement. Par exemple, `fibonacci().take(10).toArray().filter(...)` est moins efficace, car les méthodes d'aide à l'itérateur sont paresseuses et évitent de créer un tableau temporaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.toArray` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.toArray` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Array.from()")}}
