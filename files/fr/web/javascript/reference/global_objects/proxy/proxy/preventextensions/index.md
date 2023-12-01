---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
---

{{JSRef}}

La méthode **`handler.preventExtensions()`** est une trappe pour {{jsxref("Object.preventExtensions()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  preventExtensions: function (cible) {},
});
```

### Paramètres

Le paramètre suivant est passé à la méthode `preventExtensions`. `this` est lié au gestionnaire (_handler_).

- `cible`
  - : L'objet cible.

### Valeur de retour

La méthode `preventExtensions` doit renvoyer une valeur booléenne.

## Description

La méthode **`handler.preventExtensions()`** est une trappe pour intercepter {{jsxref("Object.preventExtensions()")}}.

### Interceptions

Cette trappe peut intercepter les opérations de :

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une execption {{jsxref("TypeError")}} :

- `Object.preventExtensions(proxy)` ne renvoie `true` que si `Object.isExtensible(proxy)` vaut `false`.

## Exemples

On intercepte l'appel à {{jsxref("Object.preventExtensions()")}} dans l'exemple suivant :

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (cible) {
      console.log("appelé");
      Object.preventExtensions(cible);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p)); // "appelé"
// true
```

Le code suivant ne respecte pas l'invariant :

```js
var p = new Proxy(
  {},
  {
    preventExtensions: function (cible) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError est levée
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
