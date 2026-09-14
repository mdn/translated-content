---
title: "Promise : méthode statique reject()"
short-title: reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Promise.reject()`** retourne un objet `Promise` qui est rompue avec une raison donnée.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.reject()")}}

```js interactive-example
function resolved(result) {
  console.log("Résolu");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("échec")).then(resolved, rejected);
// Résultat attendu : Error: échec
```

## Syntaxe

```js-nolint
Promise.reject(reason)
```

### Paramètres

- `reason`
  - : La raison pour laquelle cette `Promise` a été rompue.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est rompue avec la raison passée en argument.

## Description

La fonction statique `Promise.reject` retourne une promesse (`Promise`) qui est rompue. Pour faciliter le débogage et la capture sélective des erreurs, il est utile que la raison (`reason`) soit une instance de {{JSxRef("Error")}}.

`Promise.reject()` est générique et prend en charge la sous-classification, ce qui signifie qu'elle peut être appelée sur des sous-classes de `Promise`, et le résultat est une promesse du type de la sous-classe. Pour ce faire, le constructeur de la sous-classe doit implémenter la même signature que le constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) — acceptant une seule fonction `executor` qui peut être appelée avec les fonctions de rappel `resolve` et `reject` comme paramètres. `Promise.reject()` est essentiellement un raccourci pour `new Promise((resolve, reject) => reject(reason))`.

Contrairement à {{JSxRef("Promise.resolve()")}}, `Promise.reject()` enveloppe toujours la raison (`reason`) dans un nouvel objet `Promise`, même lorsque `reason` est déjà une promesse (`Promise`).

## Exemples

### Utiliser la méthode statique `Promise.reject()`

```js
Promise.reject(new Error("fail")).then(
  () => {
    // n'est pas appelée
  },
  (error) => {
    console.error(error); // Pile d'exécution
  },
);
```

### Rompre avec une promesse

Contrairement à {{JSxRef("Promise.resolve")}}, la méthode `Promise.reject` ne réutilise pas les instances de `Promise` existantes. Elle retourne toujours une nouvelle instance de `Promise` qui enveloppe `reason`.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Appeler `reject()` sur un constructeur autre qu'une promesse

`Promise.reject()` est une méthode générique. Elle peut être appelée sur n'importe quel constructeur qui implémente la même signature que le constructeur `Promise()`. Par exemple, nous pouvons l'appeler sur un constructeur qui lui passe `console.log` en tant que `reject`&nbsp;:

```js
class NestPasUnePromesse {
  constructor(executeur) {
    // Les fonctions « resolve » et « reject » ne se comportent pas du
    // tout comme celles de la promesse native, mais Promise.reject() les
    // appelle de la même manière.
    executeur(
      (valeur) => console.log("Résolue", valeur),
      (raison) => console.log("Rompue", raison),
    );
  }
}

Promise.reject.call(NestPasUnePromesse, "toto"); // Affiche "Rompue toto"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
