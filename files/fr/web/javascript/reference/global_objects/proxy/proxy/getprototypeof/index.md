---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/getPrototypeOf
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
- {{jsxref("Object/proto", "__proto__")}}
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
        console.log(cible === obj);   // true
        console.log(this === gestionnaire); // true
        return proto;
    }
};

var p = new Proxy(obj, gestionnaire);
console.log(Object.getPrototypeOf(p) === proto);    // true
```

### Cinq façons de déclencher la trappe `getPrototypeOf`

```js
var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
```

### Deux types d'exceptions

```js
var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return "toto";
    }
});
Object.getPrototypeOf(p); // TypeError : "toto" n'est pas un objet ou null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError : on attend la même valeur pour le prototype
```

## Spécifications

| Spécification                                                                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.getPrototypeOf")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
