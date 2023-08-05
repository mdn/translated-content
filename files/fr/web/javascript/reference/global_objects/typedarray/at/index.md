---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
---

{{JSRef}}

La méthode **`at()`** prend comme argument un entier et renvoie l'élément du tableau typé situé à cette position. Il est possible d'utiliser des entiers positifs et négatifs. Si l'argument est négatif, la position est relative à la fin du tableau.

L'accès aux éléments d'un tableau typé en utilisant les crochets ne permet que d'utiliser des indices positifs&nbsp;: `typedarray[0]` renverra le premier élément, `typedarray[typedarray.length-1]` renverra le dernier. Avec `typedarray.at(-1)`, on peut avoir une écriture plus concise pour accéder au dernier élément. Voir les exemples ci-après.

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## Syntaxe

```js
at(indice);
```

### Paramètres

- `indice`
  - : L'indice (c'est-à-dire la position) de l'élément du tableau typé qu'on souhaite récupérer. Il est possible d'utiliser des valeurs négatives pour récupérer un élément en comptant depuis la fin du tableau.

### Valeur de retour

L'élément du tableau typé situé à l'indice indiqué. Si aucune valeur ne peut être trouvé à l'indice donné, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui est renvoyé.

## Exemples

### Renvoyer la dernière valeur d'un tableau typé

L'exemple qui suit fournit une fonction qui renvoie le dernier élément trouvé dans le tableau typé donné.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Une fonction qui renvoie le dernier élément
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // Affiche 18 dans la console
```

### Comparaison de méthodes

On compare ici différentes façons d'accéder à l'avant-dernier élément d'un tableau typé ([`TypedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)). Bien que toutes les méthodes présentées ici soient valides et équivalentes, on pourra noter la concision et la lisibilité de la méthode `at()`.

```js
// Le tableau typé de départ
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// En utilisant la propriété length
const avecLength = uint8[uint8.length - 2];
console.log(avecLength); // Affiche 11 dans la console

// En utilisant la méthode slice()
// qui renvoie un tableau
const avecSlice = uint8.slice(-2, -1);
console.log(avecSlice[0]); // Affiche 11 dans la console

// En utilisant la méthode at()
const avecAt = uint8.at(-2);
console.log(avecAt); // Affiche 11 dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`TypedArray.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find) qui renvoie une valeur selon un test donné.
- [`TypedArray.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) qui teste si une valeur existe dans un tableau typé.
- [`TypedArray.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf) qui renvoie l'indice d'un élément donné dans le tableau typé.
- Prothèses d'émulation (<i lang="en">polyfills</i>)
  - [Prothèse présentée dans la proposition TC39 pour at()](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
  - [`core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
