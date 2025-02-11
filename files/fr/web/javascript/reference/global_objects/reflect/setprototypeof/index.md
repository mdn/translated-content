---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
---

{{JSRef}}

la méthode statique **`Reflect.setPrototypeOf()`** est semblable à la méthode {{jsxref("Object.setPrototypeOf()")}} (exception faite de la valeur de retour). Elle permet de définir le prototype (c'est-à-dire la propriété interne `[[Prototype]]`) d'un objet donné avec un autre objet ou {{jsxref("null")}}. Cette méthode renvoie `true` si l'opération a réussi et `false` sinon.

{{InteractiveExample("JavaScript Demo: Reflect.setPrototypeOf()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## Syntaxe

```js
Reflect.setPrototypeOf(cible, prototype);
```

### Paramètres

- `cible`
  - : L'objet cible dont on souhaite modifier le prototype.
- `prototype`
  - : Le nouveau prototype à appliquer à l'objet cible (ça peut être un objet ou {{jsxref("null")}}).

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si le prototype a correctement été modifié.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}} ou si `prototype` n'est ni un objet ni {{jsxref("null")}}.

## Description

La méthode `Reflect.setPrototypeOf` permet de modifier le prototype (qui est la valeur de la propriété interne `[[Prototype]]`) d'un objet donné.

## Exemples

### Utiliser `Reflect.setPrototypeOf()`

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// On peut modifier le [[Prototype]] d'un objet
// pour que celui-ci soit null.
Reflect.setPrototypeOf({}, null); // true

// La méthode renvoie false si la cible
// n'est pas extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// La méthode renvoie false si l'affectation
// entraîne un cycle dans la chaîne de prototypes.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
