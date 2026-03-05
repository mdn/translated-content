---
title: "Math : méthode statique clz32()"
short-title: clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.clz32()`** retourne le nombre de bits à zéro en tête de la représentation binaire sur 32 bits d'un nombre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// Sortie attendue : 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// Sortie attendue : 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// Sortie attendue : 22
```

## Syntaxe

```js-nolint
Math.clz32(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur retournée

Le nombre de bits à zéro en tête de la représentation binaire sur 32 bits de `x`.

## Description

`clz32` est un raccourci pour **C**ount**L**eading**Z**eros**32**.

Si `x` n'est pas un nombre, il sera d'abord converti en nombre puis converti en un entier non signé sur 32 bits.

Si l'entier non signé sur 32 bits résultant vaut `0`, la fonction retourne `32`, car tous les bits valent `0`. Si le bit le plus significatif est `1` (c'est-à-dire que le nombre est supérieur ou égal à 2<sup>31</sup>), `0` est renvoyé.

Cette fonction est particulièrement utile aux systèmes qui compilent du code JavaScript, comme [Emscripten <sup>(angl.)</sup>](https://emscripten.org/).

## Exemples

### Utiliser la méthode `Math.clz32()`

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

### Implémenter le comptage des uns en tête et au-delà

Actuellement, il n'existe pas de `Math.clon` pour «&nbsp;Count Leading Ones&nbsp;» (nommé «&nbsp;clon&nbsp;», et non «&nbsp;clo&nbsp;», car «&nbsp;clo&nbsp;» et «&nbsp;clz&nbsp;» sont trop similaires, surtout pour les personnes non anglophones). Cependant, une fonction `clon` peut facilement être créée en inversant les bits d'un nombre et en passant le résultat à `Math.clz32`. Cela fonctionne car l'inverse de 1 est 0 et inversement. Ainsi, inverser les bits inverse la quantité mesurée de 0 (par `Math.clz32`), ce qui permet à `Math.clz32` de compter le nombre de uns au lieu de compter le nombre de zéros.

Considérez le mot de 32 bits suivant&nbsp;:

```js
const a = 32776; // 00000000000000001000000000001000 (16 zéros en tête)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 inversé, 0 zéros en tête)
Math.clz32(b); // 0 (ceci correspond au nombre de uns en tête dans a)
```

En utilisant cette logique, une fonction `clon` peut être créée comme suit&nbsp;:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

De plus, cette technique peut être étendue pour créer une fonction «&nbsp;Count Trailing Zeros&nbsp;» sans saut, comme illustré ci-dessous. La fonction `ctrz` effectue un ET binaire entre l'entier et son complément à deux. Avec le fonctionnement du complément à deux, tous les zéros de fin seront convertis en uns, puis lors de l'ajout de 1, la retenue se propage jusqu'au premier `0` (qui était initialement un `1`). Tous les bits plus élevés restent identiques et sont les inverses des bits de l'entier original. Ainsi, lors de l'opération ET binaire avec l'entier original, tous les bits plus élevés deviennent `0`, ce qui peut être compté avec `clz`. Le nombre de zéros de fin, plus le premier bit à `1`, plus les bits de tête comptés par `clz`, donnent un total de 32.

```js
function ctrz(integer) {
  integer >>>= 0; // conversion en Uint32
  if (integer === 0) {
    // en sautant cette étape, cela retournerait -1
    return 32;
  }
  integer &= -integer; // équivalent à `int = int & (~int + 1)`
  return 31 - clz(integer);
}
```

Ensuite, nous pouvons définir une fonction «&nbsp;Count Trailing Ones&nbsp;» comme suit&nbsp;:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

Ces fonctions utilitaires peuvent être transformées en un module [asm.js](/fr/docs/Games/Tools/asm.js) pour une amélioration potentielle des performances.

```js
const compterBitsFinMethodes = (function (stdlib, foreign, heap) {
  "use asm";
  const clz = stdlib.Math.clz32;

  // compter les zéros de fin
  function ctrz(entier) {
    entier = entier | 0; // conversion en entier
    if ((entier | 0) == 0) {
      // en sautant cette étape, cela retournerait -1
      return 32;
    }
    // Remarque&nbsp;: asm.js ne possède pas d'opérateurs d'affectation composés comme &=
    entier = entier & -entier; // équivalent à `entier = entier & (~entier + 1)`
    return (31 - clz(entier)) | 0;
  }

  // compter les uns de fin
  function ctron(entier) {
    entier = entier | 0; // conversion en entier
    return ctrz(~entier) | 0;
  }

  // asm.js exige des objets simples&nbsp;:
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = compterBitsFinMethodes;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.clz32` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.clz32` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.clz32)
- L'objet {{JSxRef("Math")}}
- La méthode statique {{JSxRef("Math.imul()")}}
