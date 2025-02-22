---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
---

{{JSRef}}

La fonction **`Math.imul()`** renvoie le résultat de la multiplication de deux nombres, calculée avec la représentation sur 32 bits de ces nombres, à la façon du langage C.

{{InteractiveExample("JavaScript Demo: Math.imul()")}}

```js interactive-example
console.log(Math.imul(3, 4));
// Expected output: 12

console.log(Math.imul(-5, 12));
// Expected output: -60

console.log(Math.imul(0xffffffff, 5));
// Expected output: -5

console.log(Math.imul(0xfffffffe, 5));
// Expected output: -10
```

## Syntaxe

```js
Math.imul(a, b);
```

### Paramètres

- `a`
  - : Le premier nombre.
- `b`
  - : Le second nombre.

### Valeur de retour

Le résultat de la multiplication sur 32 bits des valeurs passées en argument (comme en C).

## Description

`Math.imul()` permet d'effectuer une multiplication rapide pour des entiers sur 32 bits avec une sémantique proche du langage C. Cela est utile pour des aspects de performance, notamment pour des projets comme [Emscripten](/fr/docs/Mozilla/Projects/Emscripten). `imul()` étant une méthode statique de `Math`, il faut utiliser `Math.imul()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur). Attention à l'utilisation de nombres flottants avec `Math.imul()` car cela implique une opération de conversion des flottants vers les entiers pour la multiplication puis une opération de conversion du résultat en flottant. Dans la pratique, `Math.imul()` est notamment pertinent pour asm.js.

## Exemples

### Utiliser `Math.imul()`

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); //-8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); //-5
Math.imul(0xfffffffe, 5); //-10
```

## Prothèse d'émulation (_polyfill_)

Si elle n'est pas disponible, cette fonction peut être émulée de la façon suivante :

```js
Math.imul =
  Math.imul ||
  function (a, b) {
    var ah = (a >>> 16) & 0xffff;
    var al = a & 0xffff;
    var bh = (b >>> 16) & 0xffff;
    var bl = b & 0xffff;
    // Le décalage par 0 rétablit le signe de la partie haute
    // le |0 final convertit la valeur non-signée en une valeur signée
    return (al * bl + (((ah * bl + al * bh) << 16) >>> 0)) | 0;
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
