---
title: "Promise : méthode statique allSettledKeyed()"
short-title: allSettledKeyed()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettledKeyed
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

La méthode statique **`Promise.allSettledKeyed()`** est similaire à {{JSxRef("Promise.allSettled()")}}, sauf que, au lieu d'utiliser des tableaux/itérables comme entrée/sortie, elle utilise des objets. Elle prend un objet où chaque clé propre est associée à une promesse, et retourne une seule promesse ({{JSxRef("Promise")}}). Cette promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) lorsque toutes les promesses de l'entrée sont acquittées (<i lang="en">settle</i> en anglais), avec un objet ayant les mêmes clés de correspondance aux objets qui décrivent le résultat de la promesse correspondante.

Comparé à {{JSxRef("Promise.allSettled()")}}, `Promise.allSettledKeyed()` permet d'associer les résultats à des clés sémantiquement significatives, au lieu d'un ordre de tableau arbitraire qui peut être difficile à maintenir.

## Syntaxe

```js-nolint
Promise.allSettledKeyed(object)
```

### Paramètres

- `object`
  - : Un objet. Toutes ses [propriétés énumérables propres](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), que la clé soit une chaîne de caractères ou un symbole, doivent avoir des valeurs {{JSxRef("Promise")}}. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également complétées, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées telles quelles.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est&nbsp;:

- **Déjà complétée**, si l'objet passé ne possède aucune propriété énumérable propre.
- **Complétée de façon asynchrone**, lorsque toutes les promesses de l'objet donné sont acquittées (soit complétées, soit rompues). La valeur de complétion est un objet, avec les mêmes clés dans le même ordre que l'objet donné, et la valeur de chaque propriété étant un objet décrivant le résultat de la promesse correspondante dans l'objet, indépendamment de l'ordre de complétion. Chaque objet de résultat possède les propriétés suivantes&nbsp;:
  - `status`
    - : Une chaîne de caractères, soit `"fulfilled"` soit `"rejected"`, indiquant l'état final de la promesse.
  - `value`
    - : Présente uniquement si `status` est `"fulfilled"`. La valeur avec laquelle la promesse a été complétée.
  - `reason`
    - : Présente uniquement si `status` est `"rejected"`. La raison pour laquelle la promesse a été rompue.

Si un `object` passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours complétée de façon asynchrone (au lieu de synchrone).

## Description

La méthode `Promise.allSettledKeyed()` est l'une des méthodes de [concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). Elle effectue le même type de tâche que {{JSxRef("Promise.allSettled()")}}. `Promise.allSettledKeyed()` est préférée lorsque vous n'avez pas déjà un tableau de promesses et/ou que vous déstructurez immédiatement les résultats&nbsp;; voir {{JSxRef("Promise.allKeyed()")}} pour plus de description.

## Exemples

### Utiliser `Promise.allSettledKeyed()`

La méthode `Promise.allSettledKeyed()` prend un objet et traite toutes ses propres propriétés énumérables.

```js
function repousse(value, timeout) {
  return new Promise((res) => setTimeout(() => res(value), timeout));
}

const sym = Symbol();

const promesses = {
  a: repousse("a", 500),
  // Les propriétés Symbol sont traitées
  [sym]: repousse("symbol", 300),
  // Les propriétés imbriquées ne sont pas traitées ; cet objet entier
  // est considéré comme une valeur déjà résolue et est retourné tel quel
  nested: {
    b: repousse("b", 100),
  },
};

const resultat = await Promise.allSettledKeyed(promesses);
console.log(resultat);
// {
//   a: { status: "fulfilled", value: "a" },
//   [sym]: { status: "fulfilled", value: "symbol" },
//   nested: {
//     b: <Promise>,
//   },
// }
```

Pour plus d'exemples liés au comportement de concurrence commun à `Promise.allSettled()` et `Promise.allSettledKeyed()`, voir {{JSxRef("Promise.allSettled()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.allSettledKeyed` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/proposals/await-dictionary)
- [La prothèse d'émulation es-shims de `Promise.allSettledKeyed` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.allsettledkeyed)
- L'objet natif {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.allKeyed()")}}
- La méthode statique {{JSxRef("Promise.allSettled()")}}
