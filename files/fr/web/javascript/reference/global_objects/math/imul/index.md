---
title: "Math : méthode statique imul()"
short-title: imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.imul()`** retourne le résultat de la multiplication sur 32 bits à la manière du langage C des deux paramètres.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.imul()")}}

```js interactive-example
console.log(Math.imul(3, 4));
// Résultat attendu : 12

console.log(Math.imul(-5, 12));
// Résultat attendu : -60

console.log(Math.imul(0xffffffff, 5));
// Résultat attendu : -5

console.log(Math.imul(0xfffffffe, 5));
// Résultat attendu : -10
```

## Syntaxe

```js-nolint
Math.imul(a, b)
```

### Paramètres

- `a`
  - : Le premier nombre.
- `b`
  - : Le second nombre.

### Valeur de retour

Le résultat de la multiplication sur 32 bits des valeurs passées en argument (comme en C).

## Description

La méthode `Math.imul()` permet une multiplication d'entiers sur 32 bits avec une sémantique proche du langage C. Cette fonctionnalité est utile pour des projets comme [Emscripten <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Emscripten).

Parce que `imul()` est une méthode statique de `Math`, il faut toujours l'utiliser sous la forme `Math.imul()`, plutôt que comme méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

Si vous utilisez des nombres flottants JavaScript normaux dans `imul()`, vous constatez une dégradation des performances. Cela est dû à la coûteuse conversion d'un flottant en entier pour la multiplication, puis à la conversion de l'entier multiplié en flottant. Cependant, avec [asm.js](/fr/docs/Games/Tools/asm.js), qui permet aux optimiseurs JIT d'utiliser plus efficacement les entiers en JavaScript, multiplier deux nombres stockés en interne en tant qu'entiers (ce qui n'est possible qu'avec asm.js) avec `imul()` peut être potentiellement plus performant.

## Exemples

### Utiliser `Math.imul()`

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.imul` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [La prothèse d'émulation es-shims de `Math.imul` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.imul)
- [Emscripten <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Emscripten) sur Wikipedia
