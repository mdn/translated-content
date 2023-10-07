---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
---

{{JSRef}}

La méthode **`handler.getPrototypeOf()`** représente une trappe pour la méthode interne `[[GetPrototypeOf]]`.

{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(obj, {
  getPrototypeOf(cible) {
  ...
  }
});
```

### Paramètres

Le paramètre suivant est passé à la méthode `getPrototypeOf`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.

### Valeur de retour

La méthode `getPrototypeOf` doit renvoyer un objet ou `null`.

## Description

### Interceptions

Cette trappe permet d'intercepter les opérations suivantes :

- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Opérateurs/instanceof", "instanceof")}}

### Invariants

Si les invariants suivant ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- `getPrototypeOf` doit renvoyer un objet ou `null`.
- Si la `cible` n'est pas extensible, `Object.getPrototypeOf(proxy)` doit renvoyer la même valeur que `Object.getPrototypeOf(cible)`.

## Exemples

### Utilisation simple

```js
var obj = {};
var proto = {};
var gestionnaire = {
  getPrototypeOf(cible) {
    console.log(cible === obj); // true
    console.log(this === gestionnaire); // true
    return proto;
  },
};

var p = new Proxy(obj, gestionnaire);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### Cinq façons de déclencher la trappe `getPrototypeOf`

```js
var obj = {};
var p = new Proxy(obj, {
  getPrototypeOf(cible) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### Deux types d'exceptions

```js
var obj = {};
var p = new Proxy(obj, {
  getPrototypeOf(cible) {
    return "toto";
  },
});
Object.getPrototypeOf(p); // TypeError : "toto" n'est pas un objet ou null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
  getPrototypeOf(cible) {
    return {};
  },
});
Object.getPrototypeOf(p); // TypeError : on attend la même valeur pour le prototype
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
