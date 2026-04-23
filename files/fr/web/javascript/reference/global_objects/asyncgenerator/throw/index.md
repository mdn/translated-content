---
title: "AsyncGenerator : méthode throw()"
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`throw()`** des instances d'{{JSxRef("AsyncGenerator")}} agit comme si une instruction `throw` était insérée dans le corps du générateur à la position actuelle où il est suspendu, ce qui signale au générateur une condition d'erreur et lui permet de gérer l'erreur, ou d'effectuer un nettoyage et de se fermer.

## Syntaxe

```js-nolint
asyncGeneratorInstance.throw(exception)
```

### Paramètres

- `exception`
  - : L'exception à lancer. Pour le débogage, il est utile qu'elle soit une instance de {{JSxRef("Error")}}.

### Valeur de retour

Si l'erreur lancée n'est pas capturée, la méthode retourne une promesse ({{JSxRef("Promise")}}) qui est rejetée avec l'exception passée.

Si l'exception est capturée par un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) et que le générateur reprend pour produire d'autres valeurs, la méthode retourne une promesse ({{JSxRef("Promise")}}) qui est résolue avec un objet {{JSxRef("Object")}} possédant deux propriétés&nbsp;:

- `done`
  - : Une valeur booléenne&nbsp;:
    - `true` si le flux de contrôle de la fonction génératrice a atteint la fin.
    - `false` si la fonction génératrice peut produire d'autres valeurs.
- `value`
  - : La valeur produite par la prochaine expression `yield`.

## Exemples

### Utilisation de `throw()`

L'exemple suivant montre un générateur et une erreur lancée avec la méthode `throw`. Une erreur peut être capturée par un bloc {{JSxRef("Statements/try...catch", "try...catch")}} comme d'habitude.

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
    try {
      await attendre(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = creerGenerateurAsync();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("Une erreur s'est produite")) // Error: Une erreur s'est produite
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Statements/async_function*", "async function*")}}
- [Guide des itérateurs et des générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
