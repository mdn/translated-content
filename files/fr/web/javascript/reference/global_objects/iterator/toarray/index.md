---
title: "Iterator : méthode toArray()"
short-title: toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
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

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Iterator.prototype.toArray` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/iterator)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `Iterator.prototype.toArray` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet natif {{JSxRef("Iterator")}}
- La méthode statique {{JSxRef("Array.from()")}}
