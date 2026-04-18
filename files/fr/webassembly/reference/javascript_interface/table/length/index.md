---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/Reference/JavaScript_interface/Table/length
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La propriété en lecture seule **`length`** de l'objet [`WebAssembly.Table`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table) retourne la longueur du tableau, c'est-à-dire le nombre d'éléments dans le tableau.

## Exemples

### Utiliser la propriété `length`

L'exemple suivant crée une nouvelle instance de tableau WebAssembly avec une taille initiale de 2 et une taille maximale de 10&nbsp;:

```js
const tableau = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

On agrandit le tableau d'un élément en utilisant `WebAssembly.grow()`&nbsp;:

```js
console.log(tableau.length); // 2
tableau.grow(1);
console.log(tableau.length); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
