---
title: "Math : méthode statique sign()"
short-title: sign()
slug: Web/JavaScript/Reference/Global_Objects/Math/sign
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode statique **`Math.sign()`** retourne 1 ou -1, indiquant le signe du nombre passé en argument. Si l'entrée est 0 ou -0, elle est retournée telle quelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.sign()")}}

```js interactive-example
console.log(Math.sign(3));
// Résultat attendu : 1

console.log(Math.sign(-3));
// Résultat attendu : -1

console.log(Math.sign(0));
// Résultat attendu : 0

console.log(Math.sign("-3"));
// Résultat attendu : -1
```

## Syntaxe

```js-nolint
Math.sign(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre représentant le signe de `x`&nbsp;:

- Si `x` est positif, retourne `1`.
- Si `x` est négatif, retourne `-1`.
- Si `x` est zéro positif, retourne `0`.
- Si `x` est zéro négatif, retourne `-0`.
- Sinon, retourne {{JSxRef("NaN")}}.

## Description

Puisque `sign()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.sign()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'a pas de constructeur).

## Exemples

### Utiliser la méthode `Math.sign()`

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("toto"); // NaN
Math.sign(); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Math.sign` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/math)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `Math.sign` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.sign)
- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.ceil()")}}
- La méthode statique {{JSxRef("Math.floor()")}}
- La méthode statique {{JSxRef("Math.round()")}}
- La méthode statique {{JSxRef("Math.trunc()")}}
