---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}

La méthode **`finally()`** renvoie un objet `Promise` et accepte en argument une fonction de _callback_ qui est appelée lorsque la promesse a été résolue (qu'elle ait été tenue ou rejetée). Cela permet d'exécuter du code une fois que la promesse a été traitée, quel que soit le résultat. On évite ainsi de dupliquer du code entre les gestionnaires {{jsxref("Promise.then", "then()")}} et {{jsxref("Promise.catch", "catch()")}}.

## Syntaxe

```js
p.finally(onFinally);

p.finally(function () {
  // appelée dans tous les
  // cas de terminaison
});
```

### Paramètres

- `onFinally`
  - : Une fonction (objet {{jsxref("Function")}}) appelé lorsque la promesse courante est résolue.

### Valeur de retour

Cette méthode renvoie un objet {{jsxref("Promise")}}.

## Description

La méthode `finally` peut être utile si on souhaite effectuer un traitement ou du nettoyage (fermetures de flux, libération de ressources, etc.) une fois qu'une promesse est résolue, quel que soit l'état de la résolution (tenue ou rejetée).

La méthode `finally` est similaire à l'utilisation de la forme `.then(onFinally, onFinally)`, on notera toutefois quelques différences :

- Lorsqu'on crée une fonction en ligne, on peut ne la passer qu'une seule fois et éviter d'avoir à déclarer une variable ou à la déclarer à deux reprises.
- Un _callback_ `finally` ne recevra pas d'argument car on ne peut pas savoir si la promesse a été tenue ou rompue. Cette fonction est précisément appelée lorsqu'on ne s'intéresse pas à la raison du rejet ou à la réussite de la promesse. Une telle valeur est donc superflue. Ainsi :

  - À la différence de `Promise.resolve(2).then(() => {}, () => {})` qui sera résolue avec la valeur {{jsxref("undefined")}}, `Promise.resolve(2).finally(() => {})` sera résolue avec la valeur `2`.
  - De même, à la différence de `Promise.reject(3).then(() => {}, () => {})` qui sera résolue avec la valeur `undefined`, `Promise.reject(3).finally(() => {})` sera rejetée avec `3`.

> **Note :** Toutefois, on notera qu'utiliser `throw` (ou que renvoyer une promesse rompue) dans le _callback_ `finally` rejettera la promesse avec l'exception indiquée dans l'appel à `throw`.

## Exemples

```js
let isLoading = true;

fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oups, ceci n'est pas du JSON !");
  })
  .then(function (json) {
    /* traiter le JSON */
  })
  .catch(function (error) {
    console.log(error);
    /* La ligne précédent peut aussi déclencher une
          erreur (si console vaut {} par exemple) */
  })
  .finally(function () {
    isLoading = false;
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
