---
title: "Function : propriété caller"
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), accéder à `caller` d'une fonction déclenche une erreur — l'API est supprimée sans remplacement. Cela vise à empêcher le code de «&nbsp;remonter la pile&nbsp;», ce qui pose des risques de sécurité et limite fortement les possibilités d'optimisations comme l'intégration et l'optimisation des appels en queue. Pour plus d'explications, vous pouvez lire [la justification de la dépréciation de `arguments.callee`](/fr/docs/Web/JavaScript/Reference/Functions/arguments/callee#description).

La propriété d'accesseur **`caller`** des instances de {{JSxRef("Function")}} retourne la fonction qui a invoqué cette fonction. Pour les fonctions [strictes](/fr/docs/Web/JavaScript/Reference/Strict_mode), fléchées, asynchrones et génératrices, accéder à la propriété `caller` déclenche une {{JSxRef("TypeError")}}.

## Description

Si la fonction `f` a été invoquée par le code de plus haut niveau, la valeur de `f.caller` est {{JSxRef("Operators/null", "null")}}&nbsp;; sinon, c'est la fonction qui a appelé `f`. Si la fonction qui a appelé `f` est en mode strict, la valeur de `f.caller` est aussi `null`.

Notez que le seul comportement défini par la spécification ECMAScript est que `Function.prototype` possède un accesseur initial `caller` qui déclenche inconditionnellement une {{JSxRef("TypeError")}} pour toute requête `get` ou `set` (appelé «&nbsp;pillule d'accesseur poison&nbsp;»), et que les implémentations ne sont pas autorisées à changer cette sémantique pour toute fonction sauf les fonctions simples non strictes, auquel cas elle ne doit pas avoir la valeur d'une fonction en mode strict. Le comportement réel de la propriété `caller`, s'il diffère du déclenchement d'une erreur, dépend de l'implémentation. Par exemple, Chrome la définit comme une propriété de données propre, tandis que Firefox et Safari étendent l'accesseur poison initial `Function.prototype.caller` pour gérer spécialement les valeurs `this` qui sont des fonctions non strictes.

```js
(function f() {
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller est une propriété propre avec le descripteur",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log(
      "f ne possède pas de propriété propre nommée caller. Tentative d'accès à f.[[Prototype]].caller",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "caller",
      ).get.call(f),
    );
  }
})();

// Dans Chrome :
// caller est une propriété propre avec le descripteur {value: null, writable: false, enumerable: false, configurable: false}

// Dans Firefox :
// f ne possède pas de propriété propre nommée caller. Tentative d'accès à f.[[Prototype]].caller
// null
```

Cette propriété remplace la propriété obsolète `arguments.caller` de l'objet {{JSxRef("Functions/arguments", "arguments")}}.

La propriété spéciale `__caller__`, qui renvoyait l'objet d'activation de l'appelant permettant ainsi de reconstituer la pile, a été supprimée pour des raisons de sécurité.

## Exemples

### Vérifier la valeur de la propriété `caller` d'une fonction

Le code suivant vérifie la valeur de la propriété `caller` d'une fonction.

```js
function maFonction() {
  if (maFonction.caller === null) {
    return "La fonction a été appelée au plus haut niveau !";
  }
  return `La fonction a été appelée par ${maFonction.caller}`;
}
```

### Reconstituer la pile et la récursivité

Notez qu'en cas de récursivité, vous ne pouvez pas reconstituer la pile d'appels avec cette propriété. Considérez&nbsp;:

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

Au moment où `stop()` est appelée, la pile d'appels sera&nbsp;:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Ce qui suit est vrai&nbsp;:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

donc si vous essayez d'obtenir la pile dans la fonction `stop()` de cette façon&nbsp;:

```js
let f = stop;
let pile = "Trace de la pile :";
while (f) {
  pile += `\n${f.name}`;
  f = f.caller;
}
```

la boucle ne s'arrêterait jamais.

### `caller` en mode strict

Si l'appelant est une fonction en mode strict, la valeur de `caller` est `null`.

```js
function fonctionAppelante() {
  fonctionAppellee();
}

function fonctionAppelanteStrict() {
  "use strict";
  fonctionAppellee();
}

function fonctionAppellee() {
  console.log(fonctionAppellee.caller);
}

(function () {
  fonctionAppelante();
})();
// Affiche [Function: fonctionAppelante]

(function () {
  fonctionAppelanteStrict();
})();
// Affiche null
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Function.prototype.name")}}
- La propriété {{JSxRef("Functions/arguments", "arguments")}}
