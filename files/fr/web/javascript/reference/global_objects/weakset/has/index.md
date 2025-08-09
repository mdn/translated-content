---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
---

{{JSRef}}

La méthode **`has()`** renvoie un booléen indiquant si un objet donné est contenu dans l'ensemble `WeakSet`.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.has()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};
const object2 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

console.log(weakset1.has(object2));
// Expected output: false
```

## Syntaxe

```js
ws.has(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. Il représente l'objet dont on souhaite savoir s'il est, ou non, présent dans l'objet `WeakSet`.

### Valeur renvoyée

- Booléen
  - : La méthode renvoie `true` si l'objet `WeakSet` contient bien un élément avec la valeur donnée, `false` sinon.

## Exemples

```js
var ws = new WeakSet();
var obj = {};
ws.add(window);

mySet.has(window); // renvoie true
mySet.has(obj); // renvoie false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
