---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

La méthode **`add()`** permet d'ajouter un nouvel élément ayant une valeur donnée à un ensemble `Set`. Cette valeur sera ajoutée à la fin de l'objet `Set`.

{{InteractiveExample("JavaScript Demo: Set.prototype.add()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Syntaxe

```js
monSet.add(valeur);
```

### Paramètres

- `valeur`
  - : Ce paramètre est obligatoire. La valeur de l'élément qu'on souhaite ajouter à l'objet `Set`.

### Valeur de retour

L'objet `Set` (ce qui permet de chaîner une suite d'instructions utilisant cette méthode).

## Exemples

```js
var monSet = new Set();

monSet.add(1);
monSet.add(5).add("du texte"); // ajouts en chaîne

console.log(monSet);
// Set [1, 5, "du texte"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
