---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
---

{{JSRef}}

La méthode **`handler.isExtensible()`** est une trappe pour intercepter les opérations de {{jsxref("Object.isExtensible()")}}.

{{InteractiveExample("JavaScript Demo: handler.isExtensible()", "taller")}}

```js interactive-example
const monster1 = {
  canEvolve: true,
};

const handler1 = {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    target.canEvolve = false;
    return Reflect.preventExtensions(target);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.isExtensible(proxy1));
// Expected output: true

console.log(monster1.canEvolve);
// Expected output: true

Object.preventExtensions(proxy1);

console.log(Object.isExtensible(proxy1));
// Expected output: false

console.log(monster1.canEvolve);
// Expected output: false
```

## Syntaxe

```js
var p = new Proxy(cible, {
  isExtensible: function (cible) {},
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `isExtensible`. `this` est ici lié au gestionnaire (_handler_).

- `cible`
  - : L'objet cible.

### Valeur de retour

La méthode `isExtensible` doit renvoyer une valeur booléenne.

## Description

La méthode **`handler.isExtensible()`** est une trappe pour intercepter {{jsxref("Object.isExtensible()")}}.

### Interceptions

Cette trappe intercepte les opérations suivantes :

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- `Object.isExtensible(proxy)` doit renvoyer la même valeur que `Object.isExtensible(cible)`.

## Exemples

Dans l'exemple qui suit, on intercepte {{jsxref("Object.isExtensible()")}}.

```js
var p = new Proxy(
  {},
  {
    isExtensible: function (cible) {
      console.log("appelée");
      return true;
    },
  },
);

console.log(Object.isExtensible(p)); // "appelée"
// true
```

Le code suivante ne respecte pas l'invariant et entraîne donc une exception.

```js
var p = new Proxy(
  {},
  {
    isExtensible: function (cible) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError est levée
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
