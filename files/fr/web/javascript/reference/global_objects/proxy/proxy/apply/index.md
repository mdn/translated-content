---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
---

{{JSRef}}

La méthode **`handler.apply()`** représente une trappe pour un appel de fonctions.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  apply: function (cible, thisArg, listeArguments) {},
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `apply`. Ici, `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `thisArg`
  - : L'argument {{jsxref("Opérateurs/L_opérateur_this","this")}} pour cet appel.
- `listeArguments`
  - : La liste d'arguments pour l'appel.

### Valeur de retour

La méthode `apply` peut renvoyer n'importe quelle valeur.

## Description

La méthode **`handler.apply`** est une trappe pour l'appel à une fonction.

### Interceptions

Cette trappe intercepte les opérations suivantes :

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} et {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception `TypeError` :

- la cible doit pouvoir être « appelable ». Autrement dit, il doit s'agir d'une fonction.

## Exemples

Dans l'exemple ci-dessous, on piège un appel de fonction.

```js
var p = new Proxy(function () {}, {
  apply: function (target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
// 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply")}}
- {{jsxref("Function.prototype.call")}}
- {{jsxref("Reflect.apply()")}}
