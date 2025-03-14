---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
---

s{{JSRef}}

La méthode **`set()`** permet d'ajouter un nouvel élément avec une `clé` et une `valeur` à un objet `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
```

## Syntaxe

```js
wm.set(clé, valeur);
```

### Paramètres

- `clé`
  - : Ce paramètre est obligatoire et doit être un objet. Il correspond à la clé de l'élément qu'on souhaite ajouter à l'objet `WeakMap`.
- `valeur`
  - : Ce paramètre est obligatoire et peut avoir n'importe quel type. Il correspond à la valeur de l'élément qu'on souhaite ajouter à l'objet `WeakMap`.

### Valeur de retour

Cette méthode renvoie l'objet `WeakMap` potentiellement mis à jour.

## Exemples

```js
var wm = new WeakMap();
var obj = {};

// Ajouter un nouvel élément à la WeakMap
wm.set(obj, "toto").set(window, "truc"); // on peut chaîner les instructions

// Mettre à jour un élément de la WeakMap
wm.set(obj, "machin");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
