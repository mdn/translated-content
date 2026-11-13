---
title: "Promise : méthode statique allKeyed()"
short-title: allKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allKeyed
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

La méthode statique **`Promise.allKeyed()`** est similaire à {{JSxRef("Promise.all()")}}, sauf que, au lieu d'utiliser des tableaux/itérables comme entrée/sortie, elle utilise des objets. Elle prend un objet où chaque clé propre est associée à une promesse, et retourne une seule {{JSxRef("Promise")}}. Cette promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) lorsque toutes les promesses de l'entrée sont complétées, avec un objet des mêmes clés de correspondances aux valeurs de complétion correspondantes. Elle est rompue (<i lang="en">rejected</i> en anglais) lorsqu'une des promesses de l'entrée est rompue, avec la raison de ce premier rejet.

Comparé à {{JSxRef("Promise.all()")}}, `Promise.allKeyed()` permet d'associer les résultats à des clés sémantiquement significatives, au lieu d'un ordre de tableau arbitraire qui peut être difficile à maintenir.

## Syntaxe

```js-nolint
Promise.allKeyed(object)
```

### Paramètres

- `object`
  - : Un objet. Toutes ses [propriétés énumérables propres](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), que la clé soit une chaîne de caractères ou un symbole, doivent avoir des valeurs {{JSxRef("Promise")}}. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également complétées, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées telles quelles.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est&nbsp;:

- **Déjà complétée**, si l'objet passé ne possède aucune propriété énumérable propre.
- **Complétée de façon asynchrone**, lorsque toutes les promesses de l'objet donné sont complétées. La valeur de complétion est un objet des valeurs de complétion, avec les mêmes clés dans le même ordre que l'objet donné, indépendamment de l'ordre de complétion. Si l'objet passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours complétée de façon asynchrone (au lieu de synchrone).
- **Rompue de façon asynchrone**, si l'une des promesses de l'objet donné est rompue. La raison du rejet est la raison du rejet de la première promesse qui a été rompue.

## Description

La méthode `Promise.allKeyed()` est l'une des méthodes de [concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). Elle effectue le même type de tâche que {{JSxRef("Promise.all()")}}. Cependant, la plupart du temps, vous n'avez pas déjà un tableau de promesses et vous avez simplement quelques opérations ad hoc à regrouper, donc vous les mettez dans un tableau puis vous les déstructurez immédiatement&nbsp;:

```js
const [resultatA, resultatB, resultatC] = await Promise.all([
  obtenirA(),
  obtenirB(),
  obtenirC(),
]);
```

Le problème avec cela est que vous devez maintenir la cohérence de l'ordre des deux côtés&nbsp;: si vous écrivez accidentellement `[resultatA, resultatC, resultatB]`, votre code se casse.

La méthode de clé atténue le problème en associant chaque opération asynchrone à une clé sémantique&nbsp;:

```js
const {
  a: resultatA,
  b: resultatB,
  c: resultatC,
} = await Promise.allKeyed({
  a: obtenirA(),
  b: obtenirB(),
  c: obtenirC(),
});
```

De cette façon, l'ordre n'a plus d'importance, et toute incohérence de nom est locale&nbsp;: écrire accidentellement `b: resultatC` est maintenant beaucoup plus facile à détecter&nbsp;!

## Exemples

### Utiliser `Promise.allKeyed()`

La méthode `Promise.allKeyed()` prend un objet et traite toutes ses propres propriétés énumérables.

```js
function repousse(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol();

const promesses = {
  a: repousse("a", 500),
  // Les propriétés Symbol sont traitées
  [sym]: repousse("symbol", 300),
  // Les propriétés imbriquées ne sont pas traitées ; cet objet entier est considéré comme
  // une valeur déjà résolue et est retournée tel quel
  nested: {
    b: repousse("b", 100),
  },
};

const resultat = await Promise.allKeyed(promesses);
console.log(resultat);
// {
//   a: "a",
//   [sym]: "symbol",
//   nested: {
//     b: <Promise>,
//   },
// }
```

Pour plus d'exemples liés au comportement de concurrence commun à `Promise.all()` et `Promise.allKeyed()`, voir {{JSxRef("Promise.all()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.allKeyed` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/proposals/await-dictionary)
- [La prothèse d'émulation es-shims de `Promise.allKeyed` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.allkeyed)
- L'objet natif {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.allSettledKeyed()")}}
- La méthode statique {{JSxRef("Promise.all()")}}
