---
title: "AsyncGenerator : méthode return()"
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`return()`** des instances d'{{JSxRef("AsyncGenerator")}} agit comme si une instruction `return` était insérée dans le corps du générateur à la position actuelle où il est suspendu, ce qui termine le générateur et lui permet d'effectuer des opérations de nettoyage lorsqu'elle est utilisée avec un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#la_clause_finally).

## Syntaxe

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### Paramètres

- `value` {{Optional_Inline}}
  - : La valeur à retourner.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un objet {{JSxRef("Object")}} possédant deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
    - `true` si le flux de contrôle de la fonction génératrice a atteint la fin.
    - `false` si le flux de contrôle n'a pas atteint la fin et peut produire d'autres valeurs. Cela ne peut se produire que si l'appel à `return` est capturé dans un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) et qu'il existe d'autres expressions `yield` dans le bloc `finally`.
- `value`
  - : La valeur fournie en argument, ou, si l'expression `yield` est enveloppée dans un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block), la valeur produite/retournée par le bloc `finally`.

## Description

La méthode `return()` peut être considérée comme l'insertion d'une instruction `return valeur;` dans le corps du générateur à la position où il est suspendu, où `valeur` est la valeur passée à la méthode. Ainsi, dans un déroulement classique, l'appel à `return(valeur)` retourne `{ done: true, value: valeur }`. Cependant, si l'expression `yield` est enveloppée dans un bloc `try...finally`, le flux de contrôle ne quitte pas le corps de la fonction, mais passe dans le bloc `finally`. Dans ce cas, la valeur retournée peut être différente, et `done` peut même être `false` s'il y a d'autres expressions `yield` dans le bloc `finally`.

## Exemples

### Utilisation de `return()`

L'exemple suivant montre un générateur asynchrone et la méthode `return`.

```js
// Une tâche asynchrone. Imaginez qu'elle fasse quelque chose
// de plus utile en pratique.
function valeurRetardee(temps, valeur) {
  return new Promise((resolution, rejet) => {
    setTimeout(() => resolution(valeur), temps);
  });
}

async function* creerGenerateurAsync() {
  yield valeurRetardee(500, 1);
  yield valeurRetardee(500, 2);
  yield valeurRetardee(500, 3);
}

const asyncGen = creerGenerateurAsync();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.return("toto").then((res) => console.log(res)); // { value: "toto", done: true }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### Utilisation de `return()` une fois que le générateur a terminé

Si aucun argument `value` n'est passé à la méthode `return()`, la promesse se résout comme si la méthode [`next()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) avait été appelée. Dans cet exemple, le générateur est terminé, la valeur retournée est donc `undefined`.

`return()` peut toujours être appelé après que le générateur est dans un état «&nbsp;terminé&nbsp;», cependant le générateur restera dans cet état.

```js
async function* creerGenerateurAsync() {
  yield Promise.resolve(1);
  yield await Promise.resolve(2);
  yield 3;
}
const asyncGen = creerGenerateurAsync();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
// la valeur retournée est undefined, car aucune valeur n'est passée et le générateur est 'terminé'
asyncGen.return().then((res) => console.log(res)); // { value: undefined, done: true }
// on peut toujours retourner une valeur une fois le générateur terminé
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Statements/async_function*", "async function*")}}
- [Guide des itérateurs et des générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
