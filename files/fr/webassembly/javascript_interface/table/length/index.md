---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/JavaScript_interface/Table/length
---

{{WebAssemblySidebar}}

La propriété **`length`**, rattachée au prototype de l'objet {{jsxref("WebAssembly.Table")}}, renvoie la longueur du tableau WebAssembly, c'est-à-dire le nombre d'éléments qui y sont stockées.

## Syntaxe

```js
table.length;
```

## Exemples

Avec l'instruction qui suit, on crée un tableau WebAssembly avec une taille initiale de 2 éléments et avec une taille maximale de 10.

```js
var table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

On peut ensuite étendre le tableau d'un élément :

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
