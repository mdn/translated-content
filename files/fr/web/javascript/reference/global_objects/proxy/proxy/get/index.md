---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---

{{JSRef}}

La méthode **`handler.get()`** est une trappe pour intercepter l'accès à la valeur d'une propriété.

{{InteractiveExample("JavaScript Demo: handler.get()", "taller")}}

```js interactive-example
const monster1 = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler1 = {
  get: function (target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// Expected output: 4

console.log(proxy1.secret);
// Expected output: "easi ... shhhh!"
```

## Syntaxe

```js
var p = new Proxy(cible, {
  get: function (cible, propriété, récepteur) {},
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `get`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `propriété`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété qu'on souhaite obtenir.
- `récepteur`
  - : Le proxy ou un objet qui hérite du proxy.

### Valeur de retour

La méthode `get` peut renvoyer n'importe quelle valeur.

## Description

La méthode **`handler.get`** est une trappe pour intercepter l'accès à une propriété.

### Interceptions

Cette trappe permet d'intercepter les opérations suivantes :

- l'accès à une propriété : `proxy[toto]` et `proxy.truc`
- L'accès aux propriétés héritées : `Object.create(proxy)[toto]`
- {{jsxref("Reflect.get()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- La valeur renvoyée pour la propriété doit être la même que la valeur de la propriété correspondante de l'objet cible si celle-ci est non-configurable et non accessible en lecture.
- La valeur renvoyée doit valoir `undefined` si la propriété correspondante de l'objet cible est une propriété d'accesseur non-configurable dont l'attribut \[\[Get]] vaut `undefined`.

## Exemples

Dans l'exemple suivant, on intercepte les accès aux propriétés :

```js
var p = new Proxy(
  {},
  {
    get: function (cible, propriété, récepteur) {
      console.log("appelée : " + propriété);
      return 10;
    },
  },
);

console.log(p.a); // "appelée : a"
// 10
```

Le code suivant ne respecte pas l'invariant :

```js
var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

var p = new Proxy(obj, {
  get: function (cible, propriété) {
    return 20;
  },
});

p.a; // exception TypeError levée
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.get()")}}
