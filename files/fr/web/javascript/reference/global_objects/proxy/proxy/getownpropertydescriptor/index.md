---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
---

{{JSRef}}

La méthode **`handler.getOwnPropertyDescriptor()`** est une trappe pour intercepter {{jsxref("Object.getOwnPropertyDescriptor()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  getOwnPropertyDescriptor: function (cible, prop) {},
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `getOwnPropertyDescriptor`. `this` est ici lié au gestionnaire (_handler_).

- `cible`
  - : L'objet cible
- `prop`
  - : Le nom de la propriété dont on souhaite obtenir le descripteur.

### Valeur de retour

La méthode `getOwnPropertyDescriptor` doit renvoyer un objet ou `undefined`.

## Description

La méthode **`handler.getOwnPropertyDescriptor()`** est une trappe pour un proxy afin d'intercepter les opérations effectuées avec {{jsxref("Object.getOwnPropertyDescriptor()")}}.

### Interceptions

Cette trappe permet d'intercepter :

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception {{jsxref("TypeError")}} :

- `getOwnPropertyDescriptor` doit renvoyer un objet ou `undefined`.
- Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et non-configurable.
- Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et que l'objet cible n'est pas extensible.
- Une propriété ne peut pas être indiquée comme existante si elle n'existe pas de façon correspondante sur l'objet cible et que l'objet cible n'est pas extensible.
- Une propriété ne peut pas être indiquée comme non-configurable si la propriété correspondante n'existe pas pour l'objet cible ou si elle existe comme un propriété propre configurable.
- Le résultat de `Object.getOwnPropertyDescriptor(cible)` peut être appliqué à l'objet cible avec `Object.defineProperty` sans que cela lève une exception.

## Exemples

Dans l'exemple qui suit, on intercepte {{jsxref("Object.getOwnPropertyDescriptor()")}}.

```js
var p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor: function (cible, prop) {
      console.log("appelée : " + prop);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value); // "appelée : a"
// 10
```

L'exemple suivant ne respecte pas un invariant :

```js
var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function (cible, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // Une exception TypeError est renvoyée
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
