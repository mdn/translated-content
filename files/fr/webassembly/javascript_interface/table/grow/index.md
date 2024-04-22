---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/JavaScript_interface/Table/grow
---

{{WebAssemblySidebar}}

La méthode **`grow()`**, rattachée au prototype de {{jsxref("WebAssembly.Table")}}, permet d'augmenter la taille du tableau WebAssembly d'un nombre d'éléments donné.

## Syntaxe

```js
table.grow(nombre);
```

### Paramètres

- `nombre`
  - : Le nombre d'éléments qu'on souhaite ajouter au tableau.

### Valeur de retour

La taille du tableau avant l'agrandissement.

### Exceptions

Si l'opération `grow()` échoue, pour quelque raison que ce soit, une exception {{jsxref("RangeError")}} sera levée.

## Exemples

Dans l'exemple qui suit, on crée une instance de `Table` pour représenter un tableau WebAssembly avec une taille initiale de 2 et une taille maximale de 10.

```js
var table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

On étend ensuite le tableau d'une unité en utilisant la méthode `grow()` :

```js
console.log(table.length); // "2"
console.log(table.grow(1)); // "2"
console.log(table.length); // "3"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
