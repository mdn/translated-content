---
title: "Generator : méthode return()"
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`return()`** des instances de {{JSxRef("Generator")}} agit comme si une instruction `return` était insérée dans le corps du générateur à la position actuelle de suspension, ce qui termine le générateur et permet au générateur d'effectuer toutes les tâches de nettoyage lorsqu'elle est combinée avec un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#la_clause_finally).

## Syntaxe

```js-nolint
generatorInstance.return()
generatorInstance.return(value)
```

### Paramètres

- `value` {{Optional_Inline}}
  - : La valeur à retourner.

### Valeur de retour

Un {{JSxRef("Object")}} possédant deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
    - `true` si le flux de contrôle de la fonction génératrice a atteint la fin.
    - `false` si le flux de contrôle de la fonction génératrice n'a pas atteint la fin et peut produire d'autres valeurs. Cela ne peut arriver que si le `return` est capturé dans un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#la_clause_finally) et qu'il y a d'autres expressions `yield` dans le bloc `finally`.
- `value`
  - : La valeur donnée comme argument, ou, si l'expression `yield` est enveloppée dans un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#la_clause_finally), la valeur produite/retournée par le bloc `finally`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le générateur est déjà en cours d'exécution.

## Description

La méthode `return()`, lorsqu'elle est appelée, peut être considérée comme si une instruction `return valeur;` était insérée dans le corps du générateur à la position actuelle de suspension, où `valeur` est la valeur passée à la méthode `return()`. Ainsi, dans un flux typique, appeler `return(valeur)` retournera `{ done: true, value: valeur }`. Cependant, si l'expression `yield` est enveloppée dans un bloc `try...finally`, le flux de contrôle ne quitte pas le corps de la fonction, mais passe au bloc `finally` à la place. Dans ce cas, la valeur retournée peut être différente, et `done` peut même être `false`, s'il y a d'autres expressions `yield` dans le bloc `finally`.

## Exemples

### Utiliser la méthode `return()`

L'exemple suivant illustre une utilisation simple d'un générateur et de la méthode `return()`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("toto"); // { value: "toto", done: true }
g.next(); // { value: undefined, done: true }
```

Si `return(valeur)` est appelé sur un générateur qui est déjà dans l'état «&nbsp;terminé&nbsp;», le générateur restera dans l'état «&nbsp;terminé&nbsp;».

Si aucun argument n'est fourni, la propriété `value` de l'objet retourné sera `undefined`. Si un argument est fourni, il deviendra la valeur de la propriété `value` de l'objet retourné, sauf si l'expression `yield` est enveloppée dans un bloc `try...finally`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### Utiliser la méthode `return()` avec `try...finally`

Le fait que la méthode `return` ait été appelée ne peut être connu du générateur lui-même que si l'expression `yield` est enveloppée dans un bloc `try...finally`.

Lorsque la méthode `return` est appelée sur un générateur qui est suspendu dans un bloc `try`, l'exécution dans le générateur passe au bloc `finally` — puisque le bloc `finally` des instructions `try...finally` s'exécute toujours.

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield "nettoyage";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// L'exécution est suspendue avant le bloc try...finally.
g1.return("retour anticipé"); // { value: 'retour anticipé', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// L'exécution est suspendue dans le bloc try...finally.
g2.return("retour anticipé"); // { value: 'nettoyage', done: false }

// La valeur de complétion est préservée
g2.next(); // { value: 'retour anticipé', done: true }

// Generator is in the completed state
g2.return("retour tardif"); // { value: 'retour tardif', done: true }
```

La valeur de retour du bloc final peut également devenir la valeur (`value`) du résultat retourné par l'appel à `return`.

```js
function* gen() {
  try {
    yield 1;
  } finally {
    return "nettoyage";
  }
}

const generator = gen();
generator.next(); // { value: 1, done: false }
generator.return("retour anticipé"); // { value: 'nettoyage', done: true }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/function*", "function*")}}
