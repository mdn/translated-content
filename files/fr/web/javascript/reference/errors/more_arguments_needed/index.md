---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

## Message

```
TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create requires at least 1 argument, but only 0 were passed
TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## Type d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

Lors de l'appel de la fonction, il y a eu une erreur due au manque d'argument. La fonction doit recevoir plus de paramètres afin de pouvoir fonctionner.

## Exemples

La méthode {{jsxref("Object.create()")}} nécessite au moins un argument et {{jsxref("Object.setPrototypeOf()")}} requiert deux paramètres :

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
```

On peut corriger cet exemple en utilisant {{jsxref("null")}} comme prototype :

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Voir aussi

- [Les fonctions](/fr/docs/Web/JavaScript/Guide/Fonctions)
