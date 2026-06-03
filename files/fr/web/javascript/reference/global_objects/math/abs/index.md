---
title: "Math : méthode statique abs()"
short-title: abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.abs()`** retourne la valeur absolue d'un nombre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Sortie attendue : 2

console.log(difference(5, 3));
// Sortie attendue : 2

console.log(difference(1.23456, 7.89012));
// Sortie attendue : 6.6555599999999995
```

## Syntaxe

```js-nolint
Math.abs(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La valeur absolue de `x`. Si `x` est négatif ou `-0`, retourne le nombre opposé `-x` (qui n'est pas négatif). Sinon, retourne `x` lui-même. Le résultat est donc toujours un nombre positif ou `0`.

## Description

Parce que `abs()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.abs()`, plutôt qu'en tant que méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.abs()`

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Conversion du paramètre

`Math.abs()` [convertit son paramètre en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique). Les valeurs non convertibles deviendront `NaN`, ce qui fait que `Math.abs()` retournera également `NaN`.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.ceil()")}}
- La méthode statique {{JSxRef("Math.floor()")}}
- La méthode statique {{JSxRef("Math.round()")}}
- La méthode statique {{JSxRef("Math.sign()")}}
- La méthode statique {{JSxRef("Math.trunc()")}}
