---
title: Set.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
---

{{JSRef}}

La méthode **`add()`** permet d'ajouter un nouvel élément ayant une valeur donnée à un ensemble `Set`. Cette valeur sera ajoutée à la fin de l'objet `Set`.

{{EmbedInteractiveExample("pages/js/set-prototype-add.html")}}

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
