---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
---

{{JSRef}}

La méthode **`set()`** permet d'enregistrer plusieurs valeurs dans le tableau typé à partir d'un tableau donné.

{{InteractiveExample("JavaScript Demo: TypedArray.set()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);

// Copy the values into the array starting at index 3
uint8.set([1, 2, 3], 3);

console.log(uint8);
// Expected output: Uint8Array [0, 0, 0, 1, 2, 3, 0, 0]
```

## Syntaxe

```js
typedArr.set(tableau [, décalage])
typedArr.set(tableauTypé [, décalage])
```

### Paramètres

- `tableau`
  - : Le tableau à partir duquel on copie les valeurs. Toutes les valeurs du tableau source seront copiées dans le tableau cible sauf si la longueur du tableau cible est trop courte en fonction du décalage défini et de la longueur du tableau source : dans ce cas, un exception sera renvoyée.
- `tableauTypé`
  - : Si le tableau source est un tableau typé, il se peut que les deux tableaux partagent le même {{jsxref("ArrayBuffer")}} ; le moteur effectuera alors une copie intelligente entre le tableau source et le tableau ciblé.
- `décalage` {{optional_inline}}
  - : Le décalage, exprimé en nombre d'éléments, à partir duquel copier les valeurs du tableau source dans le tableau cible. Si le paramètre n'est pas utilisé, la valeur par défaut sera 0 (ce qui correspond au cas où les éléments seront copiés au début du tableau).

### Valeur de retour

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Cette exception est renvoyée lorsque le `décalage` est tel que des valeurs seraient enregistrées en dehors du tableau typé.

## Exemples

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
