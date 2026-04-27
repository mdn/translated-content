---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Table/grow
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La méthode **`grow()`** de l'objet [`WebAssembly.Table`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table) permet d'augmenter la taille de l'instance de `Table` d'un nombre défini d'éléments, remplis avec la valeur fournie.

## Syntaxe

```js-nolint
grow(delta)
grow(delta, value)
```

### Paramètres

- `delta`
  - : Le nombre d'éléments qu'on souhaite ajouter au tableau.
- `value` {{Optional_Inline}}
  - : L'élément avec lequel remplir l'espace nouvellement alloué.

### Valeur de retour

La taille du tableau avant l'agrandissement.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Si la taille actuelle additionnée à `delta` dépasse la capacité maximale de l'instance de `Table`.
    - Si le client n'a pas assez de mémoire pour l'allocation.
- {{JSxRef("TypeError")}}
  - : Levée si `value` n'est pas une valeur du type d'élément du tableau

## Exemples

### Utiliser la méthode `grow()`

L'exemple suivant crée une nouvelle instance du tableau WebAssembly avec une taille initiale de 2 et une taille maximale de 10&nbsp;:

```js
const tableau = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

On agrandit le tableau d'un élément en utilisant `Table.grow()`&nbsp;:

```js
console.log(tableau.length); // 2
tableau.grow(1);
console.log(tableau.length); // 3
```

### Utiliser `grow()` avec une valeur

L'exemple suivant crée une nouvelle instance de `Table` WebAssembly avec une taille initiale de 0 et une taille maximale de 4, en la remplissant avec un objet&nbsp;:

```js
const monObjet = { bonjour: "le monde" };

const tableau = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

On agrandit le tableau de 4 unités et on le remplit avec une valeur en utilisant `WebAssembly.grow()`&nbsp;:

```js
tableau.grow(4, monObjet);
console.log(monObjet === tableau.get(2)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
