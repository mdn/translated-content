---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
---

{{JSRef}}

La méthode **`copyWithin()`** permet de copier des éléments d'un tableau dans le tableau typé à partir de la position `cible`. Les éléments copiés sont ceux contenus entre les index `début` et `fin`. L'argument `fin` est optionnel, sa valeur par défaut correspondra à la longueur du tableau dont on souhaite copier les éléments. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.copyWithin")}}_._ _TypedArray_ est l'un des types de [tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}

## Syntaxe

```js
typedarray.copyWithin(cible, début[, fin = this.length])
```

### Paramètres

- `cible`
  - : La position, dans le tableau typé, à partir de laquelle on souhaite copier les éléments.
- `début`
  - : La position du tableau contenant les éléments à copier à partir de laquelle copier les éléments.
- `fin {{optional_inline}}`
  - : Paramètre optionnel. La position jusqu'à laquelle prendre les éléments à copier.

### Valeur de retour

Le tableau typé, modifié par la fonction.

## Description

Voir la page {{jsxref("Array.prototype.copyWithin")}} pour plus d'informations.

Cette méthode remplace la méthode expérimentale {{jsxref("TypedArray.prototype.move()")}}.

## Exemples

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray")}}
