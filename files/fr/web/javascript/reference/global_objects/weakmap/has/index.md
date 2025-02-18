---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
---

{{JSRef}}

La méthode **`has()`** renvoie un booléen qui indique s'il existe (ou non) un élément avec une clé donnée au sein de l'objet `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");

console.log(weakmap1.has(object1));
// Expected output: true

console.log(weakmap1.has(object2));
// Expected output: false
```

## Syntaxe

```js
wm.has(clé);
```

### Paramètre

- `clé`
  - : Ce paramètre est obligatoire. Il correspond à la clé de l'élément dont on souhaite savoir s'il est présent dans l'objet `WeakMap`.

### Valeur de retour

La méthode renvoie `true` s'il existe un élément du `WeakMap` avec la clé donné, `false` sinon.

## Exemples

```js
var wm = new WeakMap();
wm.set(window, "toto");

wm.has(window); // renvoie true
wm.has("machin"); // renvoie false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
