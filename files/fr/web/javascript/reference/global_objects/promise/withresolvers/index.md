---
title: "Promise : méthode statique withResolvers()"
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Promise.withResolvers()`** retourne un objet contenant un nouvel objet {{JSxRef("Promise")}} et deux fonctions pour le résoudre ou le rompre (<i lang="en">rejected</i> en anglais), correspondant aux deux paramètres passés à l'exécuteur du constructeur {{JSxRef("Promise/Promise", "Promise()")}}.

## Syntaxe

```js-nolint
Promise.withResolvers()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet simple contenant les propriétés suivantes&nbsp;:

- `promise`
  - : Un objet {{JSxRef("Promise")}}.
- `resolve`
  - : Une fonction qui résout la promesse. Pour sa sémantique, voir la référence du constructeur {{JSxRef("Promise/Promise", "Promise()")}}.
- `reject`
  - : Une fonction qui rompt la promesse. Pour sa sémantique, voir la référence du constructeur {{JSxRef("Promise/Promise", "Promise()")}}.

## Description

`Promise.withResolvers()` est exactement équivalent au code suivant&nbsp;:

```js
let resoudre, rompre;
const promesse = new Promise((res, rej) => {
  resoudre = res;
  rompre = rej;
});
```

Sauf qu'il est plus concis et ne nécessite pas l'utilisation de {{JSxRef("Statements/let", "let")}}.

La principale différence lors de l'utilisation de `Promise.withResolvers()` est que les fonctions de résolution et de rejet vivent désormais dans la même portée que la promesse elle-même, au lieu d'être créées et utilisées une seule fois dans l'exécuteur. Cela peut permettre certains cas d'utilisation plus avancés, comme lorsqu'on les réutilise pour des évènements récurrents, en particulier avec les flux et les files d'attente. Cela entraîne également généralement moins d'imbrication que d'envelopper beaucoup de logique dans l'exécuteur.

`Promise.withResolvers()` est générique et prend en charge l'héritage, ce qui signifie qu'il peut être appelé sur des sous-classes de `Promise`, et le résultat contient une promesse du type de la sous-classe. Pour ce faire, le constructeur de la sous-classe doit implémenter la même signature que le constructeur {{JSxRef("Promise/Promise", "Promise()")}} — acceptant une seule fonction `executor` qui peut être appelée avec les fonctions de rappel `resolve` et `reject` en tant que paramètres.

## Exemples

### Transformer un flux en un itérable asynchrone

Le cas d'utilisation de `Promise.withResolvers()` est lorsque vous avez une promesse qui doit être résolue ou rejetée par un écouteur d'évènements qui ne peut pas être enveloppé à l'intérieur de l'exécuteur de promesse. L'exemple suivant transforme un [flux lisible <sup>(angl.)</sup>](https://nodejs.org/api/stream.html#class-streamreadable) de Node.js en un [itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function*). Chaque `promise` ici représente un seul lot de données disponible, et chaque fois que le lot actuel est lu, une nouvelle promesse est créée pour le lot suivant. Remarquez comment les écouteurs d'évènements ne sont attachés qu'une seule fois, mais appellent en réalité une version différente des fonctions `resolve` et `reject` à chaque fois.

```js
async function* lisibleAvecIterableAsync(flux) {
  let { promise, resolve, reject } = Promise.withResolvers();
  flux.on("error", (erreur) => reject(erreur));
  flux.on("end", () => resolve());
  flux.on("readable", () => resolve());

  while (flux.readable) {
    await promise;
    let portion;
    while ((portion = flux.read())) {
      yield portion;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Appeler `withResolvers()` sur un constructeur qui n'est pas une promesse

`Promise.withResolvers()` est une méthode générique. Elle peut être appelée sur n'importe quel constructeur qui implémente la même signature que le constructeur `Promise()`. Par exemple, vous pouvez l'appeler sur un constructeur qui transmet `console.log` comme fonctions `resolve` et `reject` à `executeur`&nbsp;:

```js
class PasUnePromesse {
  constructor(executeur) {
    // Les fonctions « resolve » et « reject » ne se comportent pas du
    // tout comme celles d'une promesse native, mais
    // Promise.withResolvers() les retourne telles quelles.
    executeur(
      (valeur) => console.log("Résolue", valeur),
      (raison) => console.log("Rompue", raison),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(PasUnePromesse);
resolve("bonjour");
// Journaux : Résolue bonjour
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.withResolvers` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#promisewithresolvers)
- [La prothèse d'émulation es-shims de `Promise.withResolvers` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.withresolvers)
- Le guide [d'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- L'objet natif {{JSxRef("Promise")}}
- Le constructeur {{JSxRef("Promise/Promise", "Promise()")}}
