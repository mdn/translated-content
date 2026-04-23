---
title: "AsyncGenerator : méthode next()"
short-title: next()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`next()`** des instances d'{{JSxRef("AsyncGenerator")}} retourne la valeur suivante de la séquence.

## Syntaxe

```js-nolint
next()
next(value)
```

### Paramètres

- `value` {{Optional_Inline}}
  - : Une valeur optionnelle utilisée pour modifier l'état interne du générateur. Une valeur passée à la méthode `next()` sera reçue par l'expression `yield`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui, une fois résolue, retourne un objet {{JSxRef("Object")}} avec deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
  - `true` si le générateur a dépassé la fin de son flux de contrôle. Dans ce cas, `value` définit la _valeur de retour_ du générateur (qui peut être une valeur indéfinie).
    - `false` si le générateur peut encore produire des valeurs.
- `value`
  - : Toute valeur JavaScript produite par l'expression de production (<i lang="en">yield</i>) ou retournée par le générateur.

## Exemples

### Utilisation de `next()`

L'exemple suivant montre un générateur et l'objet que la méthode `next` retourne&nbsp;:

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

const genAsync = creerGenerateurAsync();
genAsync.next().then((res) => console.log(res)); // { value: 1, done: false }
genAsync.next().then((res) => console.log(res)); // { value: 2, done: false }
genAsync.next().then((res) => console.log(res)); // { value: 3, done: false }
genAsync.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### Envoyer des valeurs au générateur

Dans cet exemple, `next` est appelé avec une valeur.

> [!NOTE]
> Le premier appel n'affiche rien, car le générateur n'avait pas encore produit de valeur.

```js
// Une tâche asynchrone. Imaginez qu'elle fasse quelque chose
// de plus utile en pratique.
function attendre(temps) {
  return new Promise((resolution, rejet) => {
    setTimeout(resolution, temps);
  });
}

async function* creerGenerateurAsync() {
  while (true) {
    await attendre(500);
    const valeur = yield;
    console.log(valeur);
  }
}

async function principal() {
  const genAsync = creerGenerateurAsync();
  // Pas de sortie à cette étape : la première valeur envoyée via `next` est perdue
  console.log(await genAsync.next(1)); // { value: undefined, done: false }
  // Affiche 2 : la valeur envoyée via `next`
  console.log(await genAsync.next(2)); // { value: undefined, done: false }
}

principal();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction {{JSxRef("Statements/async_function*", "async function*")}}
- [Guide des itérateurs et des générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
