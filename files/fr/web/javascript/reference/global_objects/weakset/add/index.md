---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef}}

La méthode **`add()`** permet d'ajouter un nouvel objet à un objet `WeakSet`.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);
console.log(weakset1.has(object1));
// Expected output: true

try {
  weakset1.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## Syntaxe

```js
ws.add(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. Il correspond à l'objet qu'on souhaite ajouter à l'ensemble `WeakSet`.

### Valeur de retour

L'objet {{jsxref("WeakSet")}}.

## Exemples

```js
var ws = new WeakSet();

ws.add(window); // on ajouter l'objet window à l'objet WeakSet

ws.has(window); // tru

// WeakSet ne peut contenir que des objets
ws.add(1);
// TypeError: Invalid value used in weak set -> Chrome
// TypeError: 1 is not a non-null obect -> Firefox
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
