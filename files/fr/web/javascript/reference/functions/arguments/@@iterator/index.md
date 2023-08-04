---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
---

{{jsSidebar("Functions")}}

La valeur initiale de la propriété **`@@iterator`** est le même objet que la fonction utilisée pour la valeur initiale de la propriété {{jsxref("Array.prototype.values")}}.

## Syntaxe

```js
arguments[Symbol.iterator]();
```

## Exemples

### Utiliser une boucle `for...of`

```js
function f() {
  // votre environnement doit supporter les
  // boucles for..of et les variables
  // définies avec let dans les boucles
  for (let letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.values()")}}
