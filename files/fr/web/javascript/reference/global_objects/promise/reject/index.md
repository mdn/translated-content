---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

La méthode **`Promise.reject(raison)`** renvoie un objet `Promise` qui est rejeté (la promesse n'est pas tenue) à cause d'une raison donnée.

{{InteractiveExample("JavaScript Demo: Promise.reject()")}}

```js interactive-example
function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("fail")).then(resolved, rejected);
// Expected output: Error: fail
```

## Syntaxe

```js
Promise.reject(raison);
```

### Paramètres

- `raison`
  - : La raison pour laquelle la `Promise` n'a pas été tenue.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui est rompue avec la raison passée en argument.

## Description

La fonction statique `Promise.reject` renvoie une `Promise` qui est rejetée. Pour faciliter le débogage (comprendre plus rapidement le problème et sélectionner une erreur précise), il peut être utile que l'argument `raison` soit une instance d'{{jsxref("Error")}}.

## Exemples

```js
Promise.reject(new Error("échec")).then(
  function () {
    // n'est pas appelée
  },
  function (erreur) {
    console.log(erreur); // Analyse de la pile d'appels
  },
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Promise")}}
